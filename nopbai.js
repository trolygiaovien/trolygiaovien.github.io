/* ============================================================
   NỘP BÀI OFFLINE — phụ huynh chụp ảnh bài làm trên giấy của học sinh, số hoá (OCR) để lấy đáp án,
   gửi lên máy chủ: nếu gắn với bài giáo viên giao → máy chủ chấm tự động; bài tự do → giáo viên chấm.
   Ảnh gốc được lưu trên Google Drive của hệ thống với tên: Lớp-STT-Họ tên-Môn-Tên bài-ngày.jpg
   OCR dùng Tesseract.js (tải từ CDN khi cần, chạy ngay trên máy; chữ viết tay nhận dạng CÓ THỂ SAI → luôn cho sửa trước khi gửi).
   ============================================================ */
(function(){
 const $=s=>document.querySelector(s);
 const esc=s=>String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
 let ANH=[];           // [{name, dataUrl, w, h}]
 let BAI=null;         // bài giao đã chọn (từ máy chủ) hoặc null = bài tự do
 let DS_BAI=[];        // danh sách bài giao còn hạn
 let OCR_TEXT='';

 function cfg(){try{return JSON.parse(localStorage.getItem('tlgv_cfg'))||{}}catch(e){return {}}}
 function maLops(){const c=cfg();return String(c.malop||'').split(/[\s,;]+/).map(x=>x.trim().toUpperCase()).filter(x=>x.length>=2)}
 function st(msg,err){const el=$('#nbo-st');if(!el)return;el.textContent=msg||'';el.style.color=err?'#c0392b':'#1f6f5c'}

 /* ---- nén ảnh: cạnh dài ≤1600px, JPEG 0.82 → ~200–500 KB ---- */
 function nenAnh(file){return new Promise((res,rej)=>{const rd=new FileReader();rd.onload=()=>{const img=new Image();img.onload=()=>{try{const mx=1600,sc=Math.min(1,mx/Math.max(img.width,img.height)),w=Math.round(img.width*sc),h=Math.round(img.height*sc);const cv=document.createElement('canvas');cv.width=w;cv.height=h;const g=cv.getContext('2d');g.fillStyle='#fff';g.fillRect(0,0,w,h);g.drawImage(img,0,0,w,h);res({name:file.name,dataUrl:cv.toDataURL('image/jpeg',0.82),w,h})}catch(e){rej(e)}};img.onerror=()=>rej(new Error('Không đọc được ảnh'));img.src=rd.result};rd.onerror=()=>rej(new Error('Không đọc được tệp'));rd.readAsDataURL(file)})}

 function veAnh(){const box=$('#nbo-anh');if(!box)return;box.innerHTML=ANH.length?ANH.map((a,i)=>`<div style="display:inline-block;position:relative;margin:4px"><img src="${a.dataUrl}" style="max-width:160px;max-height:200px;border:1px solid var(--line);border-radius:6px"><button type="button" data-x="${i}" class="btn sec" style="position:absolute;top:2px;right:2px;padding:0 7px">✕</button><div class="note" style="text-align:center">${Math.round(a.dataUrl.length*0.75/1024)} KB</div></div>`).join(''):'<p class="note">Chưa có ảnh. Chụp rõ, đủ sáng, thẳng góc; mỗi trang một ảnh (tối đa 4 ảnh).</p>';
  box.querySelectorAll('[data-x]').forEach(b=>b.onclick=()=>{ANH.splice(+b.dataset.x,1);veAnh()})}

 /* ---- tải danh sách bài giáo viên giao (để chọn gắn bài) ---- */
 async function taiBaiGiao(){const sel=$('#nbo-bai');if(!sel)return;sel.innerHTML='<option value="">— Bài tự do (giáo viên chấm) —</option>';DS_BAI=[];
  try{if(typeof goi!=='function'||typeof AU==='undefined'||!AU)return;const c=cfg(),mls=maLops();if(!mls.length||!c.gv)return;
   const j=await goi('nhanBaiGiao',{maLops:mls,maLop:mls[0],tenHS:(c.gv||'').trim(),stt:+c.stt||0});DS_BAI=(j&&j.ds)||[];
   DS_BAI.forEach(b=>{const o=document.createElement('option');o.value=b.id;o.textContent=`${b.mon} lớp ${b.lop} · ${b.soCau} câu · GV ${b.nguoiGiao||''} · hạn ${new Date(b.han).toLocaleDateString('vi-VN')}`;sel.appendChild(o)});
   let pre='';try{pre=JSON.parse(localStorage.getItem('tlgv_nboPre')||'""')}catch(e){}if(!pre){try{const G=JSON.parse(localStorage.getItem('tlgv_ltGiao')||'null');if(G&&G.gbId)pre=G.gbId}catch(e){}}
   if(pre&&DS_BAI.some(b=>b.id===pre)){sel.value=pre;chonBai();st('Đã chọn bài giáo viên giao — con làm trên giấy, chụp ảnh và gửi; bài này sẽ chuyển sang chế độ nộp offline.')}try{localStorage.removeItem('tlgv_nboPre')}catch(e){}}catch(e){}}

 function chonBai(){const id=$('#nbo-bai').value;BAI=DS_BAI.find(b=>b.id===id)||null;
  const f=$('#nbo-tudo');if(f)f.style.display=BAI?'none':'';
  if(BAI){$('#nbo-mon').value=BAI.mon||'';$('#nbo-lop').value=BAI.lop||'';$('#nbo-tenbai').value='Bài được giao';}
  veBangDapAn()}

 /* ---- bảng đáp án: theo số câu của bài giao, hoặc tự nhập số câu ---- */
 function soCau(){return BAI?(BAI.qz||[]).length:Math.max(1,Math.min(60,+($('#nbo-socau').value||10)))}
 function veBangDapAn(ans){const n=soCau(),box=$('#nbo-da');if(!box)return;ans=ans||[];
  box.innerHTML=`<p class="note">Kiểm tra lại từng câu sau khi số hoá — chữ viết tay máy có thể đọc sai. Trắc nghiệm ghi chữ cái (A/B/C/D), điền số ghi số, tự luận ghi tóm tắt câu trả lời.</p><table style="width:100%"><tr><th style="width:70px">Câu</th><th>Đề (nếu có)</th><th style="width:40%">Câu trả lời của học sinh</th></tr>${Array.from({length:n}).map((_,i)=>{const q=BAI&&BAI.qz[i];const goiY=q?(q.type==='mc'?'Chữ cái A/B/C/D hoặc nội dung':q.type==='num'?'Số':'Tóm tắt câu trả lời'):'';let v=ans[i]||'';if(q&&q.type==='mc'&&q.mc){const k=q.mc.indexOf(v);if(k>=0)v='ABCD'[k]}return `<tr><td><b>${i+1}</b></td><td class="note">${q?esc(String(q.q||'').slice(0,120))+(q.type==='mc'&&q.mc?'<br>'+q.mc.map((o,k)=>'ABCD'[k]+'. '+esc(o)).join(' · '):''):'—'}</td><td><input class="nbo-ans" data-i="${i}" value="${esc(v)}" placeholder="${goiY}" style="width:100%"></td></tr>`}).join('')}</table>`}

 /* ---- OCR bằng Tesseract.js ---- */
 async function napTesseract(){if(window.Tesseract)return;await new Promise((res,rej)=>{const s=document.createElement('script');s.src='https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js';s.onload=res;s.onerror=()=>rej(new Error('Không tải được bộ nhận dạng chữ (cần mạng).'));document.head.appendChild(s)})}
 async function soHoa(){if(!ANH.length){st('Hãy chọn ảnh trước.',true);return}
  const btn=$('#nbo-ocr');
  /* v15.9.37: có khóa AI của phụ huynh → AI đọc chữ viết tay; lỗi thì quay về bộ đọc có sẵn */
  if(typeof aiCo==='function'&&aiCo()){btn.disabled=true;st('🤖 AI đang đọc ảnh bài làm viết tay…');
   try{const n=soCau(),de=BAI&&BAI.qz?BAI.qz:null;const r=await aiDocAnh(ANH.map(a=>a.dataUrl),n,de);const ans=[];
    r.cau.forEach(c=>{const i=(+c.so||0)-1;if(i<0||i>=n)return;let v=String(c.tl==null?'':c.tl).trim();if(!v)return;const q=de&&de[i];
     if(q&&q.type==='mc'){const L=v.toUpperCase().match(/^[A-D]$/);if(L&&q.mc)v=q.mc['ABCD'.indexOf(L[0])]||v}ans[i]=v});
    OCR_TEXT=r.vanBan;$('#nbo-ocrtxt').value=r.vanBan.trim();veBangDapAn(ans);const so=ans.filter(Boolean).length;
    st(`🤖 AI đã đọc: nhận ra ${so}/${n} câu. Hãy đối chiếu với ảnh và sửa nếu cần trước khi gửi.`,!so);btn.disabled=false;return}
   catch(e){st('AI chưa đọc được ('+(e.message||e)+') — chuyển sang bộ đọc có sẵn…',true)}btn.disabled=false}
  btn.disabled=true;st('Đang tải bộ nhận dạng chữ (lần đầu ~15 MB)…');
  try{await napTesseract();const worker=await Tesseract.createWorker('vie+eng',1,{logger:m=>{if(m.status==='recognizing text')st('Đang số hoá… '+Math.round((m.progress||0)*100)+'%')}});
   let text='';for(const a of ANH){const r=await worker.recognize(a.dataUrl);text+='\n'+(r.data.text||'')}await worker.terminate();OCR_TEXT=text;
   const ans=tachDapAn(text,soCau());$('#nbo-ocrtxt').value=text.trim();veBangDapAn(ans);
   const so=ans.filter(Boolean).length;const kd=khopDe(text);let canhBao='';if(kd&&kd.co>=2&&kd.khop/kd.co<0.4)canhBao=' ⚠ Nội dung trong ảnh có vẻ KHÔNG khớp với bài đã chọn ("'+($('#nbo-bai').selectedOptions[0]||{}).textContent+'") — hãy chọn đúng bài hoặc chọn "Bài tự do".';
   st((so?`Đã số hoá: nhận ra ${so}/${soCau()} câu. Hãy đối chiếu với ảnh và sửa trước khi gửi.`:'Không tự nhận ra câu trả lời (ô tô ⦿ hoặc "1. B") — em có thể tự nhập vào bảng bên dưới.')+canhBao,!so||!!canhBao)}
  catch(e){st('Số hoá thất bại: '+(e.message||e)+'. Em vẫn có thể nhập tay vào bảng.',true)}
  btn.disabled=false}
 /* ---- Tách câu trả lời từ văn bản OCR ----
    Hỗ trợ: (1) phiếu trắc nghiệm in sẵn có ô tô: "Câu 1. …" rồi các dòng "O A.xxx / ⦿ B.xxx" → lấy chữ cái có dấu tô;
             (2) viết tay "1. B", "Câu 2: C", "3) 15", "1B 2C 3A"; (3) "Câu 3 … = 15" (điền số) hoặc "Đáp án: B". */
 const TO=/[⦿●◉◙⊗⊕✓✔☑■▣◆⬤®@©Ⓐ-Ⓓ]|\(\s*[•·*xX]\s*\)/;   /* kí hiệu máy hay đọc được từ ô đã tô */
 function chuanDong(ln){return ln.replace(/[“”"]/g,'').replace(/\s+/g,' ').trim()}
 function tachDapAn(text,n){const ans=[],nguon=[];const lines=String(text).split(/\n+/).map(chuanDong).filter(Boolean);
  const mcText=(i,letter)=>{const k='ABCD'.indexOf(letter);const q=BAI&&BAI.qz[i];return (q&&q.type==='mc'&&q.mc&&q.mc[k])||letter};
  /* (1) phiếu in sẵn theo khối "Câu N" */
  let cur=-1,blockHasOpt=false;
  for(const ln of lines){
   const mq=ln.match(/^c[âa]u\s*(\d{1,2})\s*[.):\-]?\s*(.*)$/i);
   if(mq){cur=+mq[1]-1;blockHasOpt=false;const rest=mq[2]||'';
     /* "Câu 3 … = 15" hoặc "Câu 2: B" viết tay */
     const mEq=rest.match(/=\s*([-\d][\d.,\s]*)$/);const mL=rest.match(/^([A-Da-d])$/);
     if(cur>=0&&cur<n&&!ans[cur]){if(mL)ans[cur]=mcText(cur,mL[1].toUpperCase());else if(mEq&&BAI&&BAI.qz[cur]&&BAI.qz[cur].type!=='mc')ans[cur]=mEq[1].replace(/\s/g,'')}
     continue}
   if(cur>=0&&cur<n){
    const mo=ln.match(/^(.{0,3}?)\s*([A-Da-d])\s*[.)]\s*(.*)$/);   /* dòng phương án: <dấu> A. nội dung */
    if(mo){blockHasOpt=true;const dau=mo[1]||'';const marked=TO.test(dau)||/\[\s*[xX✓]\s*\]|\(\s*[xX✓]\s*\)/.test(dau);
      if(marked&&!ans[cur]){ans[cur]=mcText(cur,mo[2].toUpperCase());nguon[cur]='tô'}continue}
    const md=ln.match(/^(?:đáp án|trả lời|chọn)\s*[:\-]?\s*([A-Da-d])\b/i);if(md&&!ans[cur]){ans[cur]=mcText(cur,md[1].toUpperCase());continue}
    const mn=ln.match(/^(?:đáp án|trả lời|kết quả)\s*[:\-]?\s*([-\d][\d.,]*)\s*$/i);if(mn&&!ans[cur]){ans[cur]=mn[1];continue}
   }
  }
  /* (2) viết tay "1. B" / "3) 15" — chỉ dòng ngắn, không phải câu hỏi */
  for(const ln of lines){const m=ln.match(/^(?:c[âa]u\s*)?(\d{1,2})\s*[.):\-–]\s*([A-Da-d]|[-\d][\d.,]*)\s*$/i);if(!m)continue;const i=+m[1]-1;if(i<0||i>=n||ans[i])continue;
   const v=m[2];ans[i]=/^[A-Da-d]$/.test(v)?mcText(i,v.toUpperCase()):v}
  /* (3) dạng một dòng "1B 2C 3A 4D" */
  if(!ans.filter(Boolean).length){const re=/(?:^|\s)(\d{1,2})\s*[.):\-]?\s*([A-Da-d])(?![A-Za-z0-9])/g;let m;while((m=re.exec(text))){const i=+m[1]-1;if(i>=0&&i<n&&!ans[i])ans[i]=mcText(i,m[2].toUpperCase())}}
  return ans}
 /* Ảnh có đúng là bài đã chọn không? So khớp sơ bộ nội dung "Câu N" trong OCR với đề gốc */
 function khopDe(text){if(!BAI)return null;const norm=s=>String(s||'').toLowerCase().replace(/[^\p{L}\p{N}]+/gu,' ').trim();const lines=String(text).split(/\n+/);let co=0,khop=0;
  for(const ln of lines){const mq=ln.match(/^\s*c[âa]u\s*(\d{1,2})\s*[.):\-]?\s*(.{6,})$/i);if(!mq)continue;const i=+mq[1]-1,q=BAI.qz[i];if(!q)continue;co++;const a=norm(mq[2]).split(' ').filter(w=>w.length>2),b=norm(q.q);const hit=a.filter(w=>b.includes(w)).length;if(a.length&&hit/a.length>=0.5)khop++}
  return co?{co,khop}:null}
 function docDapAn(){const n=soCau(),out=[];for(let i=0;i<n;i++){const el=document.querySelector(`.nbo-ans[data-i="${i}"]`);let v=el?el.value.trim():'';
   if(BAI&&BAI.qz[i]&&BAI.qz[i].type==='mc'&&/^[A-Da-d]$/.test(v)){const k='ABCD'.indexOf(v.toUpperCase());v=(BAI.qz[i].mc&&BAI.qz[i].mc[k])||v}
   out.push({type:BAI&&BAI.qz[i]?BAI.qz[i].type:'tl',ans:v})}return out}

 /* ---- gửi ---- */
 async function gui(){if(typeof goi!=='function'||typeof AU==='undefined'||!AU){st('Cần đăng nhập tài khoản phụ huynh.',true);return}
  if(!ANH.length){st('Hãy chụp/chọn ảnh bài làm.',true);return}
  const c=cfg(),mls=maLops();if(!c.gv||!mls.length){st('Vào Cài đặt khai Tên học sinh, STT và Mã lớp trước.',true);return}
  const mon=$('#nbo-mon').value.trim(),lop=$('#nbo-lop').value.trim(),tenBai=$('#nbo-tenbai').value.trim();
  /* đang có bài GV giao LÀM TRÊN GIẤY cùng môn/lớp mà người dùng để "bài tự do" → hỏi để gắn đúng bài (máy chủ chấm & gỡ thông báo chờ làm) */
  if(!BAI){try{const G=JSON.parse(localStorage.getItem('tlgv_ltGiao')||'null');const bg=G&&G.gbId&&DS_BAI.find(b=>b.id===G.gbId);
   if(bg&&(!mon||String(bg.mon).toLowerCase()===mon.toLowerCase())&&(!lop||String(bg.lop)===lop)&&confirm(`Giáo viên đang giao bài ${bg.mon} lớp ${bg.lop} (${bg.soCau} câu)${G.offline?' LÀM TRÊN GIẤY':''}.\nẢnh này là bài làm của bài đó?\n• OK: gắn vào bài giao (máy chủ chấm tự động, bài chuyển sang mục Kết quả)\n• Huỷ: gửi như bài tự do để giáo viên chấm`)){$('#nbo-bai').value=bg.id;chonBai()}}catch(e){}}
  if(!BAI&&(!mon||!tenBai)){st('Nhập Môn và Tên bài (ví dụ: Kiểm tra 15 phút).',true);return}
  const ct=docDapAn();const soTra=ct.filter(x=>x.ans).length;
  if(!confirm(`Gửi ${ANH.length} ảnh + ${soTra}/${ct.length} câu trả lời cho giáo viên${BAI?' (máy chủ sẽ chấm tự động phần trắc nghiệm/điền số)':' (giáo viên sẽ chấm)'}?`))return;
  const btn=$('#nbo-gui');btn.disabled=true;st('Đang gửi ảnh lên máy chủ (vài giây đến ~1 phút)…');
  try{const j=await goi('nopBaiAnh',{gbId:BAI?BAI.id:'',maLop:BAI?'':( $('#nbo-malop').value||mls[0]),mon,lop,tenBai,tenHS:(c.gv||'').trim(),stt:+c.stt||0,ct,anh:ANH.map(a=>({b64:a.dataUrl}))});
   if(j&&j.ok){st(`✅ Đã gửi${j.lanNop>1?' (nộp lần '+j.lanNop+' — bài cũ được thay bằng bài này, giáo viên thấy cả ảnh cũ và mới)':''}. Tổng ${j.soAnh} ảnh. ${j.choCham?'Giáo viên sẽ chấm và gửi điểm về mục Kết quả.':`Máy chủ chấm tự động: ${j.dung}/${j.n} câu đúng (điểm ${String(j.diem).replace('.',',')}); giáo viên sẽ đối chiếu ảnh và duyệt điểm.`}`);
    try{const h=JSON.parse(localStorage.getItem('tlgv_ltHist')||'[]');h.unshift({t:Date.now(),lop:lop||(BAI&&BAI.lop)||'',mon:mon||(BAI&&BAI.mon)||'',loai:'anh',cd:tenBai||'nộp ảnh',n:j.n||ct.length,dung:j.dung||0,diem:+j.diem||0,giao:true,gbId:BAI?BAI.id:'',blId:j.id||'',nguoiGiao:'Giáo viên',choCham:!!j.choCham,offline:true});localStorage.setItem('tlgv_ltHist',JSON.stringify(h.slice(0,300)))}catch(e){}
    /* bài giao đã nộp bằng ảnh → đóng bài trong app (chuyển chế độ offline), lấy bài chờ tiếp theo */
    try{if(BAI){const G=JSON.parse(localStorage.getItem('tlgv_ltGiao')||'null');if(G&&G.gbId===BAI.id){localStorage.setItem('tlgv_ltGiao','null');localStorage.setItem('tlgv_ltGiaoClock','null');localStorage.setItem('tlgv_ltResume','null')}const recv=JSON.parse(localStorage.getItem('tlgv_gbRecv')||'[]');if(recv.indexOf(BAI.id)<0){recv.push(BAI.id);localStorage.setItem('tlgv_gbRecv',JSON.stringify(recv.slice(-300)))}if(typeof layBaiCho==='function')layBaiCho();if(typeof giaoSync==='function')giaoSync();if(typeof kqDraw==='function')try{kqDraw()}catch(e){}}}catch(e){}
    try{if(typeof gbPull==='function')setTimeout(()=>{try{gbPull()}catch(e){}},1500)}catch(e){}   /* đối chiếu lại với máy chủ: bài đã nộp → chắc chắn gỡ thông báo chờ làm */
    ANH=[];veAnh();OCR_TEXT='';$('#nbo-ocrtxt').value='';BAI=null;$('#nbo-bai').value='';chonBai();taiBaiGiao()}
   else st('Máy chủ từ chối: '+((j&&j.loi)||'lỗi'),true)}
  catch(e){st('Không gửi được: '+(e.message||e),true)}
  btn.disabled=false}

 window.nboInit=function(){if(window._nboInit)return;window._nboInit=true;
  const inp=$('#nbo-file');if(inp)inp.onchange=async e=>{st('Đang nén ảnh…');for(const f of [...e.target.files].slice(0,4-ANH.length)){try{ANH.push(await nenAnh(f))}catch(err){st(err.message,true)}}e.target.value='';veAnh();st(ANH.length?ANH.length+' ảnh sẵn sàng. Bấm "Số hoá" hoặc nhập tay câu trả lời.':'')};
  $('#nbo-ocr').onclick=soHoa;$('#nbo-gui').onclick=gui;$('#nbo-bai').onchange=chonBai;$('#nbo-socau').onchange=()=>veBangDapAn();
  const ml=$('#nbo-malop');if(ml){const mls=maLops();ml.innerHTML=mls.map(m=>`<option>${esc(m)}</option>`).join('')}
  veAnh();veBangDapAn();taiBaiGiao()};
 window.nboRefresh=function(){const ml=$('#nbo-malop');if(ml){const mls=maLops();ml.innerHTML=mls.map(m=>`<option>${esc(m)}</option>`).join('')}taiBaiGiao()};
})();

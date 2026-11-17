/* ---------- v14.3 (ĐỢT 2): THỐNG KÊ LỚP · ĐIỂM DANH · SỐ LIỆU TRANG CHỦ · BÁO CÁO TRƯỜNG ---------- */
(function(){
 const el=id=>document.getElementById(id);
 const fmtD=t=>t?new Date(t).toLocaleDateString('vi-VN'):'—';
 const fmtN=v=>(v==null||isNaN(v))?'—':String(v).replace('.',',');
 const ok=()=>typeof API!=='undefined'&&API&&typeof AU!=='undefined'&&AU&&typeof goi==='function';
 const laGV=()=>ok()&&!(typeof laPhuHuynh==='function'&&laPhuHuynh());
 const MON=['Toán','Tiếng Việt','Ngữ văn','Tiếng Anh','Khoa học tự nhiên','Khoa học','Lịch sử và Địa lí','Tin học','Công nghệ','Đạo đức','Giáo dục công dân','Tự nhiên và Xã hội','Hoạt động trải nghiệm','Âm nhạc','Mĩ thuật','Giáo dục thể chất'];
 /* ---- khoảng thời gian ---- */
 function namHocSo(){try{const s=(typeof soNamHoc==='function'?soNamHoc():'')||'';const m=s.match(/(\d{4})/);return m?+m[1]:new Date().getFullYear()}catch(e){return new Date().getFullYear()}}
 window.tkKhoang=function(k,tu,den){const d=new Date(),y=namHocSo();const D=(a,b,c,h)=>new Date(a,b-1,c,h?23:0,h?59:0,h?59:0).getTime();
  switch(k){
   case 'thang':return [D(d.getFullYear(),d.getMonth()+1,1),Date.now()];
   case 'thangtruoc':{const m=d.getMonth();const a=new Date(d.getFullYear(),m-1,1),b=new Date(d.getFullYear(),m,0);return [a.getTime(),D(b.getFullYear(),b.getMonth()+1,b.getDate(),1)]}
   case 'hk1':return [D(y,9,1),D(y+1,1,15,1)];
   case 'hk2':return [D(y+1,1,16),D(y+1,5,31,1)];
   case 'nam':return [D(y,8,1),D(y+1,7,31,1)];
   case 'tuychon':return [tu?new Date(tu).getTime():0,den?new Date(den+'T23:59:59').getTime():Date.now()];
   default:return [0,Date.now()]}};
 function khoangHTML(id){return `<label>Khoảng thời gian<select id="${id}-k"><option value="thang">Tháng này</option><option value="thangtruoc">Tháng trước</option><option value="hk1">Học kì I</option><option value="hk2">Học kì II</option><option value="nam">Cả năm học</option><option value="tuychon">Tuỳ chọn…</option></select></label><label style="display:none" id="${id}-tu-w">Từ ngày<input type="date" id="${id}-tu"></label><label style="display:none" id="${id}-den-w">Đến ngày<input type="date" id="${id}-den"></label>`}
 function khoangBind(id){const k=el(id+'-k');if(!k)return;k.onchange=()=>{const t=k.value==='tuychon';el(id+'-tu-w').style.display=t?'':'none';el(id+'-den-w').style.display=t?'':'none'}}
 function khoangLay(id){return tkKhoang(el(id+'-k').value,el(id+'-tu').value,el(id+'-den').value)}
 function khoangTen(id){const k=el(id+'-k');const t=k.options[k.selectedIndex].text;if(k.value!=='tuychon')return t;return `từ ${el(id+'-tu').value||'…'} đến ${el(id+'-den').value||'nay'}`}
 /* ---- xuất CSV (Excel mở trực tiếp) ---- */
 window.xuatCSV=function(ten,hang){const bom='﻿';const csv=hang.map(r=>r.map(c=>{c=c==null?'':String(c);return /[",;\n]/.test(c)?'"'+c.replace(/"/g,'""')+'"':c}).join(';')).join('\r\n');const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([bom+csv],{type:'text/csv;charset=utf-8'}));a.download=ten.replace(/[\\/:*?"<>|]/g,'-')+'.csv';document.body.appendChild(a);a.click();setTimeout(()=>{URL.revokeObjectURL(a.href);a.remove()},500)};
 function lopOptions(){return (typeof dsLop==='function'?dsLop():[]).filter(c=>c.maLop).map(c=>`<option value="${esc(c.maLop)}" data-cid="${c.id}" ${c.id===_CID?'selected':''}>${esc(c.ten)} · ${esc(typeof maLopHT==='function'?maLopHT(c.maLop):c.maLop)}</option>`).join('')}
 /* ================= THỐNG KÊ LỚP ================= */
 let TK=null;
 window.tkInit=function(){const w=el('tk-wrap');if(!w)return;
  if(!laGV()){w.innerHTML='<div class="card"><h2>📊 Thống kê lớp</h2><p class="note">Cần đăng nhập tài khoản giáo viên.</p></div>';return}
  const lo=lopOptions();
  w.innerHTML=`<div class="card"><h2>📊 Thống kê lớp</h2>
   <p class="note">Từng học sinh: số bài được giao, đã làm, quá hạn, điểm trung bình, bài đạt 9–10, nộp ảnh, luyện tập tự do, số buổi vắng. Dữ liệu lấy từ máy chủ theo mã lớp (học sinh cần có trong danh sách lớp đã đồng bộ).</p>
   <div class="row"><label>Lớp (mã lớp)<select id="tk-lop">${lo||'<option value="">— Lớp chưa có mã lớp —</option>'}</select></label><label>Môn<select id="tk-mon"><option value="">Tất cả môn</option>${MON.map(m=>`<option>${m}</option>`).join('')}</select></label>${khoangHTML('tk')}<button class="btn" id="tk-xem">Xem thống kê</button></div>
   <p class="note" id="tk-st"></p></div><div id="tk-out"></div>`;
  khoangBind('tk');el('tk-xem').onclick=tkXem;if(lo)tkXem()};
 async function tkXem(){const maLop=el('tk-lop').value;if(!maLop){el('tk-st').textContent='Lớp này chưa có mã lớp (Cài đặt → Mã lớp).';return}
  const [tu,den]=khoangLay('tk');el('tk-st').textContent='Đang tải…';el('tk-out').innerHTML='';
  try{const j=await goi('thongKeLop',{maLop,mon:el('tk-mon').value,tu,den});TK=j;TK.ten=khoangTen('tk');TK.lopTen=el('tk-lop').options[el('tk-lop').selectedIndex].text;el('tk-st').textContent='';tkVe(j)}catch(e){el('tk-st').textContent=e.message}}
 function tkVe(j){const ds=j.ds,bai=j.baiGiao;const giaoTong=ds.reduce((a,x)=>a+x.giao,0),lamTong=ds.reduce((a,x)=>a+x.lam,0),coDiem=ds.filter(x=>x.diemTB!=null);
  const tiLe=giaoTong?Math.round(lamTong/giaoTong*1000)/10:null,diemTB=coDiem.length?Math.round(coDiem.reduce((a,x)=>a+x.diemTB,0)/coDiem.length*10)/10:null,chuaLam=ds.filter(x=>x.giao&&!x.lam).length,quaHan=ds.filter(x=>x.quaHan).length;
  const tile=(v,n,c)=>`<div class="st"><b style="font-size:24px;color:${c||'var(--pri)'}">${v}</b><br><span class="note">${n}</span></div>`;
  let h=`<div class="card printme"><h2>${esc(TK.lopTen)} <span class="tag">${esc(TK.ten)}</span>${el('tk-mon').value?`<span class="tag">${esc(el('tk-mon').value)}</span>`:''}</h2>
   <div class="dash-stats">${tile(bai.length,'Bài đã giao')}${tile(tiLe==null?'—':fmtN(tiLe)+'%','Tỉ lệ hoàn thành',tiLe!=null&&tiLe<60?'#b3261e':'')}${tile(fmtN(diemTB),'Điểm TB cả lớp')}${tile(chuaLam,'HS chưa làm bài nào',chuaLam?'#b3261e':'')}${tile(quaHan,'HS có bài quá hạn',quaHan?'#b3261e':'')}${tile(j.soNgayDiemDanh||0,'Buổi đã điểm danh')}</div>
   ${j.coDanhSach?'':'<p class="note" style="color:#8a5a00">⚠️ Lớp này chưa đồng bộ danh sách học sinh lên máy chủ (Quản lý lớp học → Lưu danh sách) nên chỉ thống kê được những em đã nộp bài.</p>'}`;
  if(bai.length){h+=`<details style="margin:8px 0"><summary><b>Danh sách ${bai.length} bài đã giao</b> (bấm để xem)</summary><div style="overflow-x:auto"><table style="margin-top:6px"><tr><th>Bài</th><th>Hình thức</th><th>Giao lúc</th><th>Hạn</th><th>Đã làm</th></tr>${bai.map(b=>`<tr><td>${esc(b.tenBai)} (${b.soCau} câu)</td><td>${b.hinhThuc==='offline'?'📷 trên giấy':'online'}</td><td>${fmtD(b.tao)}</td><td>${fmtD(b.han)}</td><td>${b.daLam}${b.soHS?'/'+b.soHS+' ('+Math.round(b.daLam/b.soHS*100)+'%)':''}</td></tr>`).join('')}</table></div></details>`}
  h+=`<div class="btns noprint" style="margin-top:4px"><button class="btn sec" id="tk-chon-qh">Chọn HS có bài quá hạn</button><button class="btn sec" id="tk-chon-chua">Chọn HS chưa làm bài nào</button><button class="btn" id="tk-nhac">📬 Nhắc phụ huynh (HS đã chọn)</button><button class="btn sec" id="tk-xuat">⬇️ Xuất Excel</button><button class="btn sec" onclick="window.print()">🖨 In</button></div>
   <div style="overflow-x:auto;margin-top:8px"><table id="tk-tb"><tr><th><input type="checkbox" id="tk-all"></th><th>STT</th><th>Họ và tên</th><th>Được giao</th><th>Đã làm</th><th>Quá hạn</th><th>Điểm TB</th><th>Bài 9–10</th><th>Nộp ảnh</th><th>Luyện tập</th><th>Điểm LT</th><th>Vắng (P/K)</th><th>Nộp gần nhất</th></tr>`;
  ds.forEach((x,i)=>{const chua=x.giao&&!x.lam;h+=`<tr style="${chua?'background:#fff1f0':(x.quaHan?'background:#fff8e6':'')}"><td><input type="checkbox" class="tk-ck" data-i="${i}"></td><td>${x.stt||''}</td><td><b>${esc(x.ten)}</b></td><td>${x.giao}</td><td style="${chua?'color:#b3261e;font-weight:700':''}">${x.lam}</td><td style="${x.quaHan?'color:#b3261e;font-weight:700':''}">${x.quaHan||''}</td><td style="${x.diemTB!=null&&x.diemTB<5?'color:#b3261e':(x.diemTB>=9?'color:var(--pri);font-weight:700':'')}">${fmtN(x.diemTB)}</td><td>${x.gioi||''}</td><td>${x.anh||''}${x.tuDo?' <span class="note">(+'+x.tuDo+' tự do)</span>':''}</td><td>${x.luyen||''}</td><td>${fmtN(x.diemLuyenTB)}</td><td>${x.vang?x.vang+' ('+x.vp+'/'+x.kp+')':''}</td><td>${fmtD(x.nopCuoi)}</td></tr>`});
  h+=`</table></div><p class="note">Điểm TB ưu tiên điểm giáo viên đã sửa. Dòng đỏ: chưa làm bài nào; dòng vàng: có bài quá hạn. Vắng (P/K) = có phép / không phép từ Điểm danh.</p></div>`;
  el('tk-out').innerHTML=h;
  el('tk-all').onchange=e=>document.querySelectorAll('.tk-ck').forEach(c=>c.checked=e.target.checked);
  el('tk-chon-qh').onclick=()=>document.querySelectorAll('.tk-ck').forEach(c=>c.checked=!!ds[+c.dataset.i].quaHan);
  el('tk-chon-chua').onclick=()=>document.querySelectorAll('.tk-ck').forEach(c=>c.checked=!!(ds[+c.dataset.i].giao&&!ds[+c.dataset.i].lam));
  el('tk-nhac').onclick=async()=>{const chon=[...document.querySelectorAll('.tk-ck:checked')].map(c=>ds[+c.dataset.i]);if(!chon.length){alert('Hãy tích chọn học sinh cần nhắc.');return}
   const nd=prompt(`Nội dung nhắc gửi phụ huynh ${chon.length} học sinh:`,`Kính gửi phụ huynh, con còn bài tập giáo viên giao chưa hoàn thành. Phụ huynh nhắc con vào ứng dụng mục "Luyện tập & làm bài được giao" để làm trước hạn. Trân trọng!`);if(nd===null)return;
   try{await goi('guiThongBao',{maLop:el('tk-lop').value,tieuDe:'Nhắc nhở hoàn thành bài tập',noiDung:nd,loai:'nhacnho',doiTuong:chon.map(x=>({stt:x.stt,ten:x.ten}))});alert('✅ Đã gửi nhắc nhở tới '+chon.length+' phụ huynh.')}catch(e){alert(e.message)}};
  el('tk-xuat').onclick=()=>{const rows=[['STT','Họ và tên','Được giao','Đã làm','Quá hạn','Điểm TB','Bài 9-10','Nộp ảnh','Luyện tập','Điểm LT','Vắng có phép','Vắng không phép','Nộp gần nhất']];ds.forEach(x=>rows.push([x.stt,x.ten,x.giao,x.lam,x.quaHan,fmtN(x.diemTB),x.gioi,x.anh,x.luyen,fmtN(x.diemLuyenTB),x.vp,x.kp,fmtD(x.nopCuoi)]));xuatCSV(`Thong ke ${TK.lopTen.split(' · ')[0]} - ${TK.ten}`,rows)}}
 /* ================= ĐIỂM DANH ================= */
 window.ddInit=function(){const w=el('da-wrap');if(!w)return;
  if(!laGV()){w.innerHTML='<div class="card"><h2>📋 Điểm danh</h2><p class="note">Cần đăng nhập tài khoản giáo viên.</p></div>';return}
  const lo=lopOptions(),today=new Date();const iso=d=>`${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  w.innerHTML=`<div class="card"><h2>📋 Điểm danh</h2><p class="note">Mặc định mọi em <b>có mặt</b>; chỉ cần đánh dấu em vắng (có phép / không phép) rồi Lưu. Số buổi vắng tự tổng hợp vào Thống kê lớp và báo cáo trường.</p>
   <div class="row"><label>Lớp<select id="da-lop">${lo||'<option value="">— Lớp chưa có mã lớp —</option>'}</select></label><label>Ngày<input type="date" id="da-ngay" value="${iso(today)}"></label><button class="btn sec" id="da-tai">Mở</button><button class="btn" id="da-luu">💾 Lưu điểm danh</button><button class="btn sec" id="da-tk">Thống kê tháng này</button></div>
   <p class="note" id="da-st"></p><div id="da-out"></div></div>`;
  el('da-tai').onclick=ddTai;el('da-luu').onclick=ddLuu;el('da-tk').onclick=ddThongKe;el('da-lop').onchange=ddTai;el('da-ngay').onchange=ddTai;if(lo)ddTai()};
 function ddRoster(){const sel=el('da-lop'),o=sel.options[sel.selectedIndex];const cid=o?o.dataset.cid:'';return (typeof dsCuaLop==='function'?dsCuaLop(cid):[]).map((t,i)=>{const m=String(t).match(/^\s*(\d+)\s*[.)\-:]?\s*(.*)$/);return {stt:m?+m[1]:i+1,ten:(m?m[2]:t).trim()}}).filter(x=>x.ten)}
 async function ddTai(){const maLop=el('da-lop').value,ngay=el('da-ngay').value;const out=el('da-out');if(!maLop){el('da-st').textContent='Lớp chưa có mã lớp.';return}
  const ro=ddRoster();if(!ro.length){out.innerHTML='<p class="note" style="color:#b3261e">Lớp chưa có danh sách học sinh (Quản lý lớp học → nhập danh sách).</p>';return}
  el('da-st').textContent='Đang tải…';let cu={},da=false;try{const j=await goi('diemDanhLay',{maLop,ngay});da=j.daDiemDanh;j.ds.forEach(x=>cu[(x.stt||0)+'|'+x.ten.toLowerCase()]=x)}catch(e){el('da-st').textContent=e.message;return}
  el('da-st').textContent=da?'Ngày này đã điểm danh — sửa và Lưu lại nếu cần.':'Chưa điểm danh ngày này.';
  out.innerHTML=`<div style="overflow-x:auto"><table id="da-tb"><tr><th>STT</th><th>Họ và tên</th><th>Có mặt</th><th>Vắng có phép</th><th>Vắng không phép</th><th>Ghi chú</th></tr>${ro.map((x,i)=>{const c=cu[x.stt+'|'+x.ten.toLowerCase()]||Object.values(cu).find(v=>v.ten.toLowerCase()===x.ten.toLowerCase())||{tt:'cm',gc:''};return `<tr data-i="${i}"><td>${x.stt}</td><td><b>${esc(x.ten)}</b></td><td style="text-align:center"><input type="radio" name="da${i}" value="cm" ${c.tt==='cm'?'checked':''}></td><td style="text-align:center"><input type="radio" name="da${i}" value="vp" ${c.tt==='vp'?'checked':''}></td><td style="text-align:center"><input type="radio" name="da${i}" value="kp" ${c.tt==='kp'?'checked':''}></td><td><input class="da-gc" value="${esc(c.gc||'')}" placeholder="ốm, việc gia đình…" style="min-width:140px"></td></tr>`}).join('')}</table></div>`;
  out.querySelectorAll('tr[data-i]').forEach(tr=>tr.addEventListener('change',()=>{const v=tr.querySelector('input[type=radio]:checked').value;tr.style.background=v==='kp'?'#fff1f0':v==='vp'?'#fff8e6':''}));out.querySelectorAll('tr[data-i]').forEach(tr=>tr.dispatchEvent(new Event('change')))}
 async function ddLuu(){const maLop=el('da-lop').value,ngay=el('da-ngay').value,ro=ddRoster();const rows=[...document.querySelectorAll('#da-tb tr[data-i]')];if(!rows.length){alert('Chưa có danh sách để lưu.');return}
  const ds=rows.map(tr=>{const i=+tr.dataset.i;return {stt:ro[i].stt,ten:ro[i].ten,tt:tr.querySelector('input[type=radio]:checked').value,gc:tr.querySelector('.da-gc').value}});
  el('da-st').textContent='Đang lưu…';try{const j=await goi('diemDanhLuu',{maLop,ngay,ds});el('da-st').textContent=`✅ Đã lưu điểm danh ${ngay.split('-').reverse().join('/')}: sĩ số ${ds.length}, vắng ${j.soVang}.`}catch(e){el('da-st').textContent=e.message}}
 async function ddThongKe(){const maLop=el('da-lop').value;if(!maLop)return;const [tu,den]=tkKhoang('thang');el('da-st').textContent='Đang tải…';
  try{const j=await goi('diemDanhThongKe',{maLop,tu,den});const ro=ddRoster();const rows=ro.map(x=>{const k=Object.keys(j.hs).find(k=>k===x.stt+'|'+x.ten.toLowerCase()||k.split('|')[1]===x.ten.toLowerCase());const v=k?j.hs[k]:{vp:0,kp:0};return {...x,...v}});
   el('da-st').textContent=`Tháng này đã điểm danh ${j.ngay.length} buổi${j.ngay.length?' ('+j.ngay.map(d=>d.slice(8)+'/'+d.slice(5,7)).join(', ')+')':''}.`;
   el('da-out').innerHTML=`<table><tr><th>STT</th><th>Họ và tên</th><th>Vắng có phép</th><th>Vắng không phép</th><th>Tổng vắng</th></tr>${rows.map(x=>`<tr style="${x.kp?'background:#fff1f0':(x.vp?'background:#fff8e6':'')}"><td>${x.stt}</td><td><b>${esc(x.ten)}</b></td><td>${x.vp||''}</td><td>${x.kp||''}</td><td>${(x.vp+x.kp)||''}</td></tr>`).join('')}</table><div class="btns"><button class="btn sec" onclick="document.getElementById('da-tai').click()">← Quay lại điểm danh</button></div>`}catch(e){el('da-st').textContent=e.message}}
 /* ================= TRANG CHỦ GIÁO VIÊN ================= */
 window.dhThongKe=async function(){const box=el('dh-tk');if(!box)return;if(!laGV()){box.innerHTML='';return}
  const c=store.get('dhTK',null);const ve=j=>{if(!j||!j.tongBai){box.innerHTML='';return}
   box.innerHTML=`<div class="card"><h3 style="margin:0 0 8px">📊 Hoạt động giao bài <button class="btn sec" style="padding:2px 8px;font-size:12px;margin-left:6px" onclick="document.querySelector('#nav button[data-t=tk]').click()">Xem thống kê lớp →</button></h3>
    <div class="dash-stats" style="margin-bottom:8px"><div class="st"><b style="font-size:22px;color:${j.tiLe2!=null&&j.tiLe2<60?'#b3261e':'var(--pri)'}">${j.tiLe2==null?'—':fmtN(j.tiLe2)+'%'}</b><br><span class="note">Tỉ lệ làm 2 bài giao gần nhất</span></div><div class="st"><b style="font-size:22px">${j.hsTB||'—'}</b><br><span class="note">Số HS trung bình được giao bài</span></div><div class="st"><b style="font-size:22px">${j.tongBai}</b><br><span class="note">Tổng bài đã giao</span></div></div>
    <table><tr><th>Bài giao gần nhất</th><th>Lớp</th><th>Ngày giao</th><th>Hạn</th><th>Đã làm</th></tr>${j.ds.map(b=>`<tr><td>${esc(b.mon)} (${b.soCau} câu)${b.hinhThuc==='offline'?' 📷':''}</td><td>${esc(b.maLop)}</td><td>${fmtD(b.tao)}</td><td>${fmtD(b.han)}</td><td style="${b.tiLe!=null&&b.tiLe<60?'color:#b3261e;font-weight:700':''}">${b.daLam}${b.soHS?'/'+b.soHS+' ('+fmtN(b.tiLe)+'%)':''}</td></tr>`).join('')}</table></div>`};
  if(c&&Date.now()-c.t<10*60000){ve(c.j);return}
  try{const j=await goi('thongKeNhanh',{});store.set('dhTK',{t:Date.now(),j});ve(j)}catch(e){if(c)ve(c.j)}};
 /* ================= BÁO CÁO TRƯỜNG (trang trong Trường của tôi) ================= */
 window.trBaoCao=async function(box,ma,truong){box.innerHTML=`<div class="row noprint">${khoangHTML('bc')}<button class="btn" id="bc-xem">Lập báo cáo</button></div><p class="note noprint" id="bc-st"></p><div id="bc-out"></div>`;khoangBind('bc');
  el('bc-xem').onclick=async()=>{const [tu,den]=khoangLay('bc');el('bc-st').textContent='Đang tổng hợp (có thể mất 10–30 giây)…';el('bc-out').innerHTML='';
   try{const j=await goi('baoCaoTruong',{maTruong:ma,tu,den});el('bc-st').textContent='';const ds=j.ds;const ten=khoangTen('bc');
    const sum=(k)=>ds.reduce((a,x)=>a+(+x[k]||0),0);const coTL=ds.filter(x=>x.tiLe!=null),coD=ds.filter(x=>x.diemTB!=null);
    const tlTB=coTL.length?Math.round(coTL.reduce((a,x)=>a+x.tiLe,0)/coTL.length*10)/10:null,dTB=coD.length?Math.round(coD.reduce((a,x)=>a+x.diemTB,0)/coD.length*10)/10:null;
    const khoi={};ds.forEach(x=>{const k=x.khoi||'?';(khoi[k]=khoi[k]||[]).push(x)});
    let h=`<div class="card printme" id="bc-in"><div style="text-align:center"><b>${esc(j.truong.ten).toUpperCase()}</b><br><h2 style="margin:6px 0">BÁO CÁO HOẠT ĐỘNG DẠY – HỌC TRÊN ỨNG DỤNG</h2><div class="note">${esc(ten)} · Năm học ${esc(j.truong.namHoc||'')} · Lập ngày ${new Date().toLocaleDateString('vi-VN')}</div></div>
     <div class="dash-stats" style="margin:12px 0">${[[ds.length,'Lớp'],[sum('siSo'),'Học sinh'],[sum('soBai'),'Bài đã giao'],[tlTB==null?'—':fmtN(tlTB)+'%','Tỉ lệ hoàn thành TB'],[fmtN(dTB),'Điểm TB toàn trường'],[sum('vang'),'Lượt vắng']].map(([v,n])=>`<div class="st"><b style="font-size:22px">${v}</b><br><span class="note">${n}</span></div>`).join('')}</div>
     <div style="overflow-x:auto"><table><tr><th>Khối</th><th>Lớp</th><th>Giáo viên</th><th>Sĩ số</th><th>Bài giao</th><th>Hoàn thành</th><th>Điểm TB</th><th>Bài 9–10</th><th>Lượt quá hạn</th><th>Luyện tập</th><th>Lượt vắng</th></tr>`;
    Object.keys(khoi).sort().forEach(k=>{khoi[k].forEach(x=>{h+=`<tr><td>${esc(x.khoi||'')}</td><td><b>${esc(x.tenLop)}</b></td><td>${esc(x.gv)}</td><td>${x.siSo||'—'}</td><td style="${x.soBai?'':'color:#b3261e'}">${x.soBai}</td><td style="${x.tiLe!=null&&x.tiLe<60?'color:#b3261e;font-weight:700':''}">${x.tiLe==null?'—':fmtN(x.tiLe)+'%'}</td><td>${fmtN(x.diemTB)}</td><td>${x.gioi||''}</td><td>${x.quaHan||''}</td><td>${x.luyen||''}</td><td>${x.vang||''}</td></tr>`});
     if(Object.keys(khoi).length>1){const g=khoi[k],tl=g.filter(x=>x.tiLe!=null),d=g.filter(x=>x.diemTB!=null);h+=`<tr style="background:var(--pri2);font-weight:700"><td colspan="3">Khối ${esc(k)} (${g.length} lớp)</td><td>${g.reduce((a,x)=>a+(+x.siSo||0),0)}</td><td>${g.reduce((a,x)=>a+x.soBai,0)}</td><td>${tl.length?fmtN(Math.round(tl.reduce((a,x)=>a+x.tiLe,0)/tl.length*10)/10)+'%':'—'}</td><td>${d.length?fmtN(Math.round(d.reduce((a,x)=>a+x.diemTB,0)/d.length*10)/10):'—'}</td><td>${g.reduce((a,x)=>a+x.gioi,0)}</td><td>${g.reduce((a,x)=>a+x.quaHan,0)}</td><td>${g.reduce((a,x)=>a+x.luyen,0)}</td><td>${g.reduce((a,x)=>a+x.vang,0)}</td></tr>`}});
    h+=`</table></div><p class="note">Hoàn thành = số lượt làm bài / số lượt được giao. Điểm TB ưu tiên điểm giáo viên đã sửa. Lớp chưa đồng bộ danh sách học sinh chỉ tính các em đã nộp bài.</p>
     <table class="sig" style="margin-top:24px;border:0;width:100%"><tr><td style="border:0;text-align:center;width:50%"><b>Người lập báo cáo</b><br><i>(Kí, ghi rõ họ tên)</i></td><td style="border:0;text-align:center"><b>Hiệu trưởng</b><br><i>(Kí, đóng dấu)</i><br><br><br><br><b>${esc(j.truong.hieuTruong||'')}</b></td></tr></table></div>
     <div class="btns noprint"><button class="btn sec" id="bc-xuat">⬇️ Xuất Excel</button><button class="btn" onclick="window.print()">🖨 In báo cáo</button></div>`;
    el('bc-out').innerHTML=h;
    el('bc-xuat').onclick=()=>{const rows=[['Khối','Lớp','Giáo viên','Sĩ số','Bài giao','Hoàn thành (%)','Điểm TB','Bài 9-10','Lượt quá hạn','Luyện tập','Lượt vắng']];ds.forEach(x=>rows.push([x.khoi,x.tenLop,x.gv,x.siSo,x.soBai,fmtN(x.tiLe),fmtN(x.diemTB),x.gioi,x.quaHan,x.luyen,x.vang]));xuatCSV(`Bao cao ${j.truong.ten} - ${ten}`,rows)}}
   catch(e){el('bc-st').textContent=e.message}}};
})();

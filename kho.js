/* ---------- KHO CÂU HỎI TỪ MÁY CHỦ KHO (Cloudflare Worker) ----------
   Trang web chỉ chứa kho MẪU (kho_mau.js). Khi đã đăng nhập, app tải kho ĐẦY ĐỦ theo từng (môn, lớp) từ máy chủ kho,
   ghi vào NH[môn][lớp] và lưu tạm (Cache Storage, 24 giờ) để dùng lại/offline. Không có mạng hoặc chưa đăng nhập → dùng kho mẫu. */
(function(){
 const CFG=window.TLGV_CFG||{};const URL_KHO=(CFG.KHO_URL||'').replace(/\/+$/,'');const TTL=24*3600*1000;
 const inflight={};const el=id=>document.getElementById(id);
 const laDangNhap=()=>typeof AU!=='undefined'&&AU&&AU.token;
 const token=()=>(typeof AU!=='undefined'&&AU&&AU.nd&&AU.nd.khoToken)||'';
 window.khoCo=function(mon,lop){const L=(NH[mon]||{})[String(lop)];return !!(L&&L._full)};
 window.khoMau=()=>!URL_KHO;
 function apDung(mon,lop,ds,ver){const M=NH[mon]=NH[mon]||{};const cu=Array.isArray(M[lop])?M[lop]:[];const them=cu.filter(t=>t._u);   // giữ chủ đề giáo viên tự thêm
  const moi=ds.map(t=>({cd:t.cd,q:t.q,...(t._nc?{_nc:true}:{}),...(t._bs?{_bs:true}:{}),...(t._tt?{_tt:t._tt}:{}),...(t._ngay?{_ngay:t._ngay}:{}),...(Array.isArray(t.x)?{x:t.x}:{})}));   /* v15.9.27: x = nhãn song song q: [mức 1–4, chủ đề con, dạng câu, lời giải] */   /* G-03 (v15.9.16): GIỮ _tt — thiếu trường này thì bộ lọc câu chưa rà soát (he_thong) ở Luyện tập/Trò chơi không chặn được */
  moi.forEach(t=>{if(Array.isArray(t.x)&&t.x.length===t.q.length)t.q.forEach((q,i)=>{try{if(Array.isArray(q))Object.defineProperty(q,'_x',{value:t.x[i],configurable:true})}catch(e){}})});   /* gắn nhãn vào từng câu (không đổi định dạng câu) */
  them.forEach(u=>{const g=moi.find(t=>t.cd===u.cd);if(g){u.q.forEach(q=>{if(!g.q.some(e=>String(e[1]).trim()===String(q[1]).trim()))g.q.push(q)})}else moi.push(u)});
  Object.defineProperty(moi,'_full',{value:ver||true,enumerable:false});M[lop]=moi;
  try{document.dispatchEvent(new CustomEvent('kho:loaded',{detail:{mon,lop}}))}catch(e){}}
 async function tuCache(key){try{const c=await caches.open('tlgv-kho');const r=await c.match(key);if(!r)return null;const t=+r.headers.get('x-luc')||0;const j=await r.json();return {j,cu:Date.now()-t>TTL}}catch(e){return null}}
 async function vaoCache(key,j){try{const c=await caches.open('tlgv-kho');await c.put(key,new Response(JSON.stringify(j),{headers:{'content-type':'application/json','x-luc':String(Date.now())}}))}catch(e){}}
 /* Đảm bảo NH[mon][lop] là kho đầy đủ. Trả về true nếu đầy đủ, false nếu phải dùng kho mẫu (kèm lí do ở window.KHO_LY_DO). */
 window.khoDamBao=function(mon,lop){lop=String(lop);if(!mon||!lop||lop==='0')return Promise.resolve(false);if(khoCo(mon,lop))return Promise.resolve(true);if(!URL_KHO)return Promise.resolve(false);
  const key='/kho/'+encodeURIComponent(mon)+'/'+lop;if(inflight[key])return inflight[key];
  inflight[key]=(async()=>{try{
   const c=await tuCache(key);
   if(c&&!c.cu&&c.j&&c.j.ds&&(!window.KHO_VER||c.j.ver===window.KHO_VER)){apDung(mon,lop,c.j.ds,c.j.ver);return true}
   if(!laDangNhap()||!token()){if(c&&c.j&&c.j.ds){apDung(mon,lop,c.j.ds,c.j.ver);return true}window.KHO_LY_DO='Cần đăng nhập để dùng kho câu hỏi đầy đủ (đang dùng kho mẫu).';return false}
   let r;try{const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),25000);r=await fetch(URL_KHO+'/kho?m='+encodeURIComponent(mon)+'&l='+lop,{headers:{'x-tlgv-token':token()},signal:ctl.signal});clearTimeout(to)}
   catch(e){if(c&&c.j&&c.j.ds){apDung(mon,lop,c.j.ds,c.j.ver);return true}window.KHO_LY_DO='Không kết nối được máy chủ kho (đang dùng kho mẫu).';return false}
   let j=null;try{j=await r.json()}catch(e){}
   if(!r.ok||!j||!j.ok){if(j&&/^KHOA_/.test(j.loi||''))ccKhoa(j);if(c&&c.j&&c.j.ds&&(!j||j.loi!=='HET_HAN')){apDung(mon,lop,c.j.ds,c.j.ver);return true}
    window.KHO_LY_DO=(j&&j.nd)||('Máy chủ kho báo lỗi '+r.status+' (đang dùng kho mẫu).');
    if(j&&j.loi==='HET_HAN'&&typeof moGiaHan==='function'){try{moGiaHan(true)}catch(e){}}
    return false}
   ccBao(r);apDung(mon,lop,j.ds,j.ver);vaoCache(key,j);return true}
  finally{delete inflight[key]}})();return inflight[key]};
 /* Các mục dùng kho: tiền tố id của select Lớp/Môn và nút bắt đầu */
 const GATE={'lt-go':'lt','p-go':'p','d-go':'d','k-go':'k','pd-go':'pd','bd-go':'bd','g-go':'g'};
 function nhac(msg,err){let t=el('kho-toast');if(!t){t=document.createElement('div');t.id='kho-toast';t.style.cssText='position:fixed;left:50%;bottom:24px;transform:translateX(-50%);background:#14231e;color:#fff;padding:10px 16px;border-radius:12px;font-size:14px;z-index:9000;box-shadow:0 6px 20px rgba(0,0,0,.3);max-width:92vw';document.body.appendChild(t)}t.textContent=msg;t.style.background=err?'#b3261e':'#14231e';t.style.display='';clearTimeout(t._h);t._h=setTimeout(()=>{t.style.display='none'},err?5000:2500)}
 /* Chặn nút bắt đầu khi kho (môn,lớp) chưa đầy đủ: tải xong rồi mới bấm tiếp */
 document.addEventListener('click',e=>{const b=e.target.closest('button');if(!b||!GATE[b.id]||b._khoOK)return;const px=GATE[b.id];const L=el(px+'-lop'),M=el(px+'-mon');if(!L||!M)return;const lop=L.value,mon=M.value;
  if(khoCo(mon,lop)||!URL_KHO)return;e.preventDefault();e.stopImmediatePropagation();nhac('Đang tải kho câu hỏi '+mon+' lớp '+lop+'…');
  khoDamBao(mon,lop).then(ok=>{if(!ok)nhac(window.KHO_LY_DO||'Đang dùng kho mẫu.',true);if(ok)veLai(px);b._khoOK=true;try{b.click()}finally{b._khoOK=false}})},true);
 /* Vẽ lại danh sách chủ đề sau khi kho tải xong nhưng GIỮ NGUYÊN lựa chọn của giáo viên (bài SGK, nội dung đã tích) */
 function veLai(px){const box=el(px+'-skills');const giu=box?[...box.querySelectorAll('input:checked')].map(i=>i.value):[];const bai=el(px+'-bai')?el(px+'-bai').value:'';
  try{el(px+'-mon').dispatchEvent(new Event('change'))}catch(_){}
  try{if(bai&&el(px+'-bai')&&[...el(px+'-bai').options].some(o=>o.value===bai)){el(px+'-bai').value=bai;if(typeof applyBai==='function')applyBai(px)}
   else if(box&&giu.length){box.querySelectorAll('input').forEach(i=>{if(giu.includes(i.value))i.checked=true});box.dispatchEvent(new Event('change',{bubbles:true}))}}catch(_){}}
 /* Tải trước khi đổi Lớp/Môn ở các mục, và khi tải xong thì vẽ lại danh sách chủ đề của mục đó */
 Object.values(GATE).forEach(px=>{['-lop','-mon'].forEach(sf=>{const s=el(px+sf);if(!s)return;s.addEventListener('change',()=>{const lop=el(px+'-lop').value,mon=el(px+'-mon').value;if(khoCo(mon,lop)||!URL_KHO||!laDangNhap())return;khoDamBao(mon,lop).then(ok=>{if(ok&&el(px+'-mon').value===mon&&el(px+'-lop').value===lop)veLai(px)})})})});
 /* Sau đăng nhập: tải trước các môn của lớp đang chọn (nền, lần lượt, không làm nghẽn) */
 window.khoTaiTruoc=async function(lop,mons){if(!URL_KHO||!laDangNhap())return;for(const m of (mons||[])){try{await khoDamBao(m,lop)}catch(e){}}};
 /* Nhãn trạng thái kho cho người dùng biết đang dùng mẫu hay đầy đủ */
 window.khoTrangThai=function(mon,lop){if(!URL_KHO)return 'Kho đầy đủ (cục bộ)';if(khoCo(mon,lop))return 'Kho đầy đủ';return laDangNhap()?'Đang tải kho…':'Kho mẫu — đăng nhập để dùng kho đầy đủ'};
 /* v15.9.40 – GIÁO ÁN SOẠN SẴN theo từng bài (đã thẩm định ngữ liệu SGK): khoá KV 'GA|<môn>|<lớp>', chỉ phát cho giáo viên/quản trị. Trả mảng giáo án hoặc [] */
 const GA={};window.gaLay=async function(mon,lop){lop=String(lop);const k=mon+'|'+lop;if(GA[k])return GA[k];if(!URL_KHO||!laDangNhap()||!token())return [];
  const key='/ga/'+encodeURIComponent(mon)+'/'+lop;const c=await tuCache(key);if(c&&!c.cu&&c.j&&Array.isArray(c.j.ds)&&(!window.KHO_VER||c.j.ver===window.KHO_VER))return GA[k]=c.j.ds;
  try{const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),20000);const r=await fetch(URL_KHO+'/ga?m='+encodeURIComponent(mon)+'&l='+lop,{headers:{'x-tlgv-token':token()},signal:ctl.signal});clearTimeout(to);
   const j=await r.json().catch(()=>null);if(j&&/^KHOA_/.test(j.loi||''))ccKhoa(j);if(r.ok&&j&&j.ok&&Array.isArray(j.ds)){ccBao(r);vaoCache(key,j);return GA[k]=j.ds}if(r.status===404)return GA[k]=[]}catch(e){}
  return (c&&c.j&&Array.isArray(c.j.ds))?c.j.ds:[]};

 /* ===== v15.9.44 CHỐNG CÀO: hạn mức tải/tạo/xuất do quản trị cài trên máy chủ kho ===== */
 let _ccKhoaLuc=0;
 function ccKhoa(j){if(Date.now()-_ccKhoaLuc<4000)return;_ccKhoaLuc=Date.now();try{alert(j.nd||'Tài khoản đang bị tạm dừng tải dữ liệu.')}catch(e){}}
 function ccBao(r){try{const h=r.headers.get('x-tlgv-canh-bao');if(h)nhac(decodeURIComponent(h),true)}catch(e){}}
 window.ccKhoa=ccKhoa;
 /* Hỏi máy chủ trước khi TẠO đề/phiếu hoặc XUẤT/IN file. Chỉ chặn khi máy chủ trả lời rõ là vượt hạn mức/bị khoá; mất mạng hoặc chậm → vẫn cho làm. */
 window.ccSk=async function(loai,mon,lop,ten){if(!URL_KHO||!laDangNhap()||!token())return true;
  try{const ctl=new AbortController();const to=setTimeout(()=>ctl.abort(),4000);
   const r=await fetch(URL_KHO+'/sk',{method:'POST',headers:{'x-tlgv-token':token(),'content-type':'application/json'},body:JSON.stringify({loai,mon:mon||'',lop:String(lop||''),ten:String(ten||'').slice(0,160)}),signal:ctl.signal});clearTimeout(to);
   const j=await r.json().catch(()=>null);if(!j)return true;
   if(r.status===429||(j.loi&&/^KHOA_/.test(j.loi))){_ccKhoaLuc=0;ccKhoa(j);return false}
   if(j.canh_bao)nhac(j.canh_bao,true);return true}catch(e){return true}};
 /* Gọi API quản trị chống cào (chỉ tài khoản quản trị) */
 window.ccQT=async function(duong,body){if(!URL_KHO)throw new Error('Chưa cấu hình máy chủ kho.');
  const r=await fetch(URL_KHO+'/qt/'+duong,{method:'POST',headers:{'x-tlgv-token':token(),'content-type':'application/json'},body:JSON.stringify(body||{})});
  const j=await r.json().catch(()=>null);if(!j||!j.ok)throw new Error((j&&(j.nd||j.loi))||('Lỗi máy chủ '+r.status));return j};
})();

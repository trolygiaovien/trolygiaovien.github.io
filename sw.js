/* v15.9.24/25 — Mở nhanh, không treo khi mạng chập chờn.
   - File có ?v=<phiên bản> (js/json): lấy từ bộ nhớ đệm ngay; chưa có thì tải về rồi lưu.
   - Trang chính và file khác: thử mạng tối đa vài giây; quá hạn/mất mạng thì dùng bản đã lưu. */
const V='15.9.41',C='tlgv-v'+V;
const JS=['config.js','kho_mau.js','hinhanh.js','nopbai.js','truong.js','thongke.js','kho.js','diaphuong.js','congthuc.js','hotro.js','ct_yccd.json'];
const F=['./','index.html','manifest.json','icon-192.png','icon-512.png'].concat(JS.map(f=>f+'?v='+V));
/* Cài đặt: file lõi (trang + mã) BẮT BUỘC tải đủ, thiếu thì không kích hoạt bản mới (bản cũ vẫn chạy); ảnh/icon tuỳ chọn. */
const OPT=['manifest.json','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(C).then(c=>Promise.all(F.map(u=>{const p=c.add(new Request(u,{cache:'reload'}));return OPT.includes(u)?p.catch(()=>{}):p}))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==C&&x.startsWith('tlgv-')).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
function luu(req,r){if(r&&r.ok){const cp=r.clone();caches.open(C).then(c=>c.put(req,cp)).catch(()=>{})}return r}
function mangTruoc(req,ms){
 return new Promise(res=>{let xong=false;
  const cache=()=>caches.match(req,{ignoreSearch:true}).then(r=>r||(req.mode==='navigate'?caches.match('index.html'):null)).catch(()=>null);
  const t=setTimeout(()=>{cache().then(r=>{if(r&&!xong){xong=true;res(r)}})},ms);
  fetch(req,{cache:'no-cache'}).then(r=>{clearTimeout(t);luu(req,r);if(!xong){xong=true;res(r)}})
   .catch(()=>{clearTimeout(t);cache().then(r=>{if(!xong){xong=true;res(r||Response.error())}})});
 })}
self.addEventListener('fetch',e=>{const req=e.request,u=new URL(req.url);
 if(req.method!=='GET'||u.origin!==location.origin)return;
 if(u.searchParams.has('v')){e.respondWith(caches.match(req).then(r=>r||fetch(req).then(x=>luu(req,x))));return}
 e.respondWith(mangTruoc(req,req.mode==='navigate'?3500:5000));
});

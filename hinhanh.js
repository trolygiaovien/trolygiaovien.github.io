/* ============================================================
   THƯ VIỆN HÌNH MINH HỌA THEO MÃ (imageId) — gắn trực tiếp vào câu hỏi
   Cách dùng trong ngân hàng: thêm phần tử cuối '@img:<loại>:<tham số>' vào mảng câu hỏi.
     TN: [mức,'câu','ĐÚNG','sai','sai','sai','@img:dem:tao:7']
     TL: [mức,'câu','đáp án','@img:dongho:3:30']
   Mọi hình là SVG tự vẽ (in Word/PDF được, không phụ thuộc mạng, không dùng ảnh có bản quyền).
   Các loại:
     dem:<vật>:<n>[:<n2>]        đếm vật (tao, cam, hoa, sao, bong, que, khoi, buom, ca, chim, but, sach, keo, trung, la, xe, chuoi, nam)
     dongho:<giờ>:<phút>          mặt đồng hồ kim
     phanso:<tử>:<mẫu>[:thanh]    phân số bằng hình tròn (mặc định) hoặc thanh
     tien:<mệnh giá,...>          tờ tiền mô phỏng (học tập)
     goc:<độ> | hcn:<d>:<r>[:đv] | vuong:<c>[:đv] | tamgiac:<đáy>:<cao>[:đv] | thang:<a>:<b>:<h>[:đv] | tron:<đk>[:đv] | hbh:<a>:<b>[:đv] | thoi:<c>[:đv]
     tgl:<A>:<B>:<C>[:AB=..:BC=..:CA=..]   tam giác có nhãn đỉnh (+ nhãn cạnh)
     hinh3d:lapphuong|hophcn|tru|non|cau|chop
     bieudo:cot:<Nhãn=giá trị,...>   biểu đồ cột
     bieudo:tranh:<Nhãn=n,...>       biểu đồ tranh (mỗi ★ = 1)
     bang:<ô;ô|ô;ô>                  bảng số liệu (hàng cách |, ô cách ;)
     truc:<từ>:<đến>[:<điểm đánh dấu>]  tia số
     thuoc:<cm>                      thước kẻ và đoạn thẳng dài <cm> cm
     toado:<A(x,y),B(x,y)>           hệ trục tọa độ với điểm
     dothi:<a>:<b>                   đồ thị y = ax + b
     songsong | vuonggoc | phuonghuong | nhietke:<độ>
     ILLUS:<khóa>                    hình có sẵn trong thư viện ILLUS (cothe, chuoithucan, vongnuoc, bando, ...)
   ============================================================ */
(function(){
 const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
 const ESC=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
 const svg=(w,h,b)=>`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" font-family="Arial, sans-serif" font-size="13"><rect width="${w}" height="${h}" fill="#fff"/>${b}</svg>`;
 const T=(x,y,t,a='middle',ex='')=>`<text x="${x}" y="${y}" text-anchor="${a}" fill="#000" ${ex}>${ESC(t)}</text>`;
 const Ln=(x1,y1,x2,y2,ex='')=>`<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#000" stroke-width="2" ${ex}/>`;
 /* ---- vật để đếm (kích thước ~36px) ---- */
 const OBJ={
  tao:(x,y)=>`<circle cx="${x}" cy="${y+2}" r="14" fill="#e53935"/><path d="M${x} ${y-12} q4 -8 10 -8" stroke="#2e7d32" stroke-width="3" fill="none"/><ellipse cx="${x+6}" cy="${y-9}" rx="6" ry="3" fill="#43a047"/>`,
  cam:(x,y)=>`<circle cx="${x}" cy="${y+2}" r="14" fill="#fb8c00"/><ellipse cx="${x+4}" cy="${y-11}" rx="6" ry="3" fill="#43a047"/>`,
  hoa:(x,y)=>[0,72,144,216,288].map(a=>`<ellipse cx="${x+10*Math.cos(a*Math.PI/180)}" cy="${y+10*Math.sin(a*Math.PI/180)}" rx="7" ry="5" fill="#ec407a" transform="rotate(${a} ${x+10*Math.cos(a*Math.PI/180)} ${y+10*Math.sin(a*Math.PI/180)})"/>`).join('')+`<circle cx="${x}" cy="${y}" r="5" fill="#fdd835"/>`,
  sao:(x,y)=>{const p=[];for(let i=0;i<10;i++){const r=i%2?6:15,a=(i*36-90)*Math.PI/180;p.push((x+r*Math.cos(a)).toFixed(1)+','+(y+r*Math.sin(a)).toFixed(1))}return `<polygon points="${p.join(' ')}" fill="#fdd835" stroke="#f9a825" stroke-width="1.5"/>`},
  bong:(x,y)=>`<circle cx="${x}" cy="${y}" r="14" fill="#42a5f5" stroke="#1565c0" stroke-width="2"/><path d="M${x-14} ${y} q14 -10 28 0 M${x-14} ${y} q14 10 28 0" stroke="#fff" stroke-width="2" fill="none"/>`,
  que:(x,y)=>`<rect x="${x-3}" y="${y-16}" width="6" height="32" rx="2" fill="#8d6e63"/>`,
  khoi:(x,y)=>`<rect x="${x-13}" y="${y-8}" width="22" height="22" fill="#ff8a65" stroke="#bf360c" stroke-width="1.5"/><polygon points="${x-13},${y-8} ${x-6},${y-15} ${x+16},${y-15} ${x+9},${y-8}" fill="#ffab91" stroke="#bf360c" stroke-width="1.5"/><polygon points="${x+9},${y-8} ${x+16},${y-15} ${x+16},${y+7} ${x+9},${y+14}" fill="#d84315" stroke="#bf360c" stroke-width="1.5"/>`,
  buom:(x,y)=>`<ellipse cx="${x-9}" cy="${y-4}" rx="9" ry="12" fill="#ab47bc"/><ellipse cx="${x+9}" cy="${y-4}" rx="9" ry="12" fill="#ab47bc"/><ellipse cx="${x-7}" cy="${y+8}" rx="6" ry="7" fill="#ce93d8"/><ellipse cx="${x+7}" cy="${y+8}" rx="6" ry="7" fill="#ce93d8"/><rect x="${x-2}" y="${y-10}" width="4" height="22" rx="2" fill="#4a148c"/>`,
  ca:(x,y)=>`<ellipse cx="${x-2}" cy="${y}" rx="14" ry="8" fill="#29b6f6"/><polygon points="${x+10},${y} ${x+20},${y-8} ${x+20},${y+8}" fill="#0288d1"/><circle cx="${x-9}" cy="${y-2}" r="2" fill="#000"/>`,
  chim:(x,y)=>`<ellipse cx="${x}" cy="${y+2}" rx="12" ry="8" fill="#ffca28"/><circle cx="${x+9}" cy="${y-5}" r="6" fill="#ffca28"/><polygon points="${x+14},${y-5} ${x+21},${y-3} ${x+14},${y-1}" fill="#ef6c00"/><circle cx="${x+10}" cy="${y-6}" r="1.5" fill="#000"/><path d="M${x-6} ${y} q-4 -8 4 -8" fill="#f9a825"/>`,
  but:(x,y)=>`<rect x="${x-4}" y="${y-16}" width="8" height="26" fill="#ffee58" stroke="#f9a825"/><polygon points="${x-4},${y+10} ${x+4},${y+10} ${x},${y+18}" fill="#ffe0b2" stroke="#f9a825"/><rect x="${x-4}" y="${y-16}" width="8" height="4" fill="#ef5350"/>`,
  sach:(x,y)=>`<rect x="${x-13}" y="${y-10}" width="26" height="22" rx="2" fill="#5c6bc0"/><rect x="${x-10}" y="${y-7}" width="20" height="16" fill="#e8eaf6"/><line x1="${x-7}" y1="${y-3}" x2="${x+7}" y2="${y-3}" stroke="#9fa8da"/><line x1="${x-7}" y1="${y+2}" x2="${x+7}" y2="${y+2}" stroke="#9fa8da"/>`,
  keo:(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="10" ry="7" fill="#f06292"/><polygon points="${x-10},${y} ${x-18},${y-6} ${x-18},${y+6}" fill="#f8bbd0"/><polygon points="${x+10},${y} ${x+18},${y-6} ${x+18},${y+6}" fill="#f8bbd0"/>`,
  trung:(x,y)=>`<ellipse cx="${x}" cy="${y}" rx="10" ry="14" fill="#fff3e0" stroke="#bcaaa4" stroke-width="1.5"/>`,
  la:(x,y)=>`<path d="M${x-14} ${y+10} q0 -26 28 -24 q-2 26 -28 24z" fill="#66bb6a" stroke="#2e7d32"/><line x1="${x-12}" y1="${y+8}" x2="${x+10}" y2="${y-10}" stroke="#2e7d32"/>`,
  xe:(x,y)=>`<rect x="${x-16}" y="${y-4}" width="32" height="12" rx="3" fill="#ef5350"/><rect x="${x-9}" y="${y-12}" width="18" height="9" rx="2" fill="#ffcdd2"/><circle cx="${x-9}" cy="${y+10}" r="4" fill="#333"/><circle cx="${x+9}" cy="${y+10}" r="4" fill="#333"/>`,
  chuoi:(x,y)=>`<path d="M${x-14} ${y-8} q14 24 28 0" stroke="#fdd835" stroke-width="9" fill="none" stroke-linecap="round"/>`,
  nam:(x,y)=>`<ellipse cx="${x}" cy="${y-5}" rx="15" ry="10" fill="#ef5350"/><circle cx="${x-6}" cy="${y-7}" r="2.5" fill="#fff"/><circle cx="${x+5}" cy="${y-9}" r="2.5" fill="#fff"/><rect x="${x-5}" y="${y-2}" width="10" height="14" rx="3" fill="#fff8e1" stroke="#d7ccc8"/>`
 };
 function dem(obj,n,n2){const f=own(OBJ,obj)?OBJ[obj]:OBJ.sao;n=Math.max(0,Math.min(30,+n||0));if(n2!=null)n2=Math.max(0,Math.min(30,+n2||0));const groups=(n2!=null)?[n,n2]:[n];const per=Math.min(5,Math.max(...groups,1));const rowsOf=g=>Math.ceil(g/per);
  let w=per*40+30,h=0;const parts=[];let gy=22;
  groups.forEach((g,gi)=>{const rows=rowsOf(g);for(let i=0;i<g;i++){const r=Math.floor(i/per),c=i%per;parts.push(f(28+c*40,gy+r*40))}if(groups.length>1&&gi<groups.length-1){const yy=gy+rows*40-10;parts.push(`<line x1="20" y1="${yy}" x2="${w-20}" y2="${yy}" stroke="#999" stroke-dasharray="6 4"/>`);}gy+=rows*40+(groups.length>1?8:0);});
  h=gy;return svg(w,h,parts.join(''))}
 function dongho(hh,mm){let t='';for(let i=1;i<=12;i++){const a=(i*30-90)*Math.PI/180;t+=T(80+52*Math.cos(a),84+52*Math.sin(a),String(i))}
  const am=(mm*6-90)*Math.PI/180,ah=((hh%12)*30+mm*0.5-90)*Math.PI/180;
  return svg(160,160,`<circle cx="80" cy="80" r="70" fill="none" stroke="#000" stroke-width="3"/>`+t+`<line x1="80" y1="80" x2="${80+34*Math.cos(ah)}" y2="${80+34*Math.sin(ah)}" stroke="#000" stroke-width="5" stroke-linecap="round"/><line x1="80" y1="80" x2="${80+56*Math.cos(am)}" y2="${80+56*Math.sin(am)}" stroke="#1f6f5c" stroke-width="3" stroke-linecap="round"/><circle cx="80" cy="80" r="4"/>`)}
 function phanso(tu,mau,thanh){tu=+tu;mau=+mau;if(thanh){const W=240,x0=20;let b='';for(let i=0;i<mau;i++)b+=`<rect x="${x0+i*(W/mau)}" y="30" width="${W/mau}" height="50" fill="${i<tu?'#64b5f6':'#fff'}" stroke="#000" stroke-width="2"/>`;return svg(280,100,b)}
  let b='';for(let i=0;i<mau;i++){const a1=(i*360/mau-90)*Math.PI/180,a2=((i+1)*360/mau-90)*Math.PI/180;const x1=100+60*Math.cos(a1),y1=75+60*Math.sin(a1),x2=100+60*Math.cos(a2),y2=75+60*Math.sin(a2);b+=`<path d="M100 75 L${x1} ${y1} A60 60 0 ${360/mau>180?1:0} 1 ${x2} ${y2} Z" fill="${i<tu?'#64b5f6':'#fff'}" stroke="#000" stroke-width="2"/>`}
  return svg(200,150,b)}
 function tien(list){const vals=String(list).split(',').map(x=>+String(x).replace(/\D/g,'')).filter(Boolean);const col={500:'#ef9a9a',1000:'#a5d6a7',2000:'#bcaaa4',5000:'#80cbc4',10000:'#ffe082',20000:'#90caf9',50000:'#f48fb1',100000:'#a5d6a7',200000:'#ffab91',500000:'#80deea'};
  const per=3;let b='';vals.forEach((v,i)=>{const r=Math.floor(i/per),c=i%per,x=15+c*120,y=15+r*62;b+=`<rect x="${x}" y="${y}" width="110" height="50" rx="5" fill="${col[v]||'#eee'}" stroke="#555"/><text x="${x+55}" y="${y+22}" text-anchor="middle" font-size="12" fill="#333">VIỆT NAM</text><text x="${x+55}" y="${y+42}" text-anchor="middle" font-size="15" font-weight="700" fill="#000">${v.toLocaleString('vi-VN')} đ</text>`});
  return svg(15+Math.min(vals.length,per)*120+5,15+Math.ceil(vals.length/per)*62,b)}
 function goc(d){d=+d;if(d===180)return svg(240,70,Ln(20,45,220,45)+`<circle cx="120" cy="45" r="3"/><path d="M100 45 A20 20 0 0 1 140 45" fill="none" stroke="#1f6f5c" stroke-width="2"/>`);
  const vx=d>90?150:40,vy=115,r=d*Math.PI/180,x2=vx+120*Math.cos(r),y2=vy-120*Math.sin(r);
  const mark=d===90?`<path d="M${vx+16} ${vy} L${vx+16} ${vy-16} L${vx} ${vy-16}" fill="none" stroke="#1f6f5c" stroke-width="2"/>`:`<path d="M${vx+22} ${vy} A22 22 0 0 0 ${vx+22*Math.cos(r)} ${vy-22*Math.sin(r)}" fill="none" stroke="#1f6f5c" stroke-width="2"/>`;
  return svg(240,130,Ln(vx,vy,Math.min(vx+150,230),vy)+Ln(vx,vy,x2,y2)+mark+`<circle cx="${vx}" cy="${vy}" r="3"/>`)}
 function hcn(w,h,lw,lh,ten){w=+w;h=+h;const s=Math.min(170/w,90/h),W=w*s,H=h*s,x=30,y=22;
  return svg(W+90,H+55,`<rect x="${x}" y="${y}" width="${W}" height="${H}" fill="none" stroke="#000" stroke-width="2"/>`+(lw?T(x+W/2,y+H+18,lw):'')+(lh?T(x+W+8,y+H/2+4,lh,'start'):'')+(ten?T(x-10,y-4,ten[0])+T(x+W+10,y-4,ten[1])+T(x+W+10,y+H+14,ten[2])+T(x-10,y+H+14,ten[3]):''))}
 function tamgiac(d,h,ld,lh){d=+d;h=+h;const s=Math.min(180/d,90/h),D=d*s,H=h*s,x=25,y=15,ax=x+D*0.35;
  return svg(D+60,H+45,`<polygon points="${x},${y+H} ${x+D},${y+H} ${ax},${y}" fill="none" stroke="#000" stroke-width="2"/>`+Ln(ax,y,ax,y+H,'stroke-dasharray="5 4" stroke-width="1.5"')+`<path d="M${ax} ${y+H-10} h10 v10" fill="none" stroke="#000"/>`+T(x+D/2,y+H+18,ld)+T(ax+6,y+H/2,lh,'start'))}
 function thang(a,b,h,la,lb,lh){a=+a;b=+b;h=+h;const s=Math.min(180/a,90/h),A=a*s,B=b*s,H=h*s,x=25,y=20,bx=x+(A-B)*0.3;
  return svg(A+60,H+55,`<polygon points="${x},${y+H} ${x+A},${y+H} ${bx+B},${y} ${bx},${y}" fill="none" stroke="#000" stroke-width="2"/>`+Ln(bx,y,bx,y+H,'stroke-dasharray="5 4" stroke-width="1.5"')+T(x+A/2,y+H+18,la)+T(bx+B/2,y-6,lb)+T(bx+6,y+H/2+4,lh,'start'))}
 function tron(lbl,ban){return svg(200,150,`<circle cx="100" cy="75" r="60" fill="none" stroke="#000" stroke-width="2"/><circle cx="100" cy="75" r="3"/>`+(ban?Ln(100,75,160,75):Ln(40,75,160,75))+T(ban?130:100,68,lbl)+T(96,92,'O','end'))}
 function hbh(a,b,la,lb){a=+a;b=+b;const s=Math.min(140/(a+b*0.5),80/(b*0.87)),A=a*s,dx=b*s*0.5,H=b*s*0.87,x=25,y=20;
  return svg(A+dx+80,H+50,`<polygon points="${x},${y+H} ${x+A},${y+H} ${x+A+dx},${y} ${x+dx},${y}" fill="none" stroke="#000" stroke-width="2"/>`+(la?T(x+A/2,y+H+18,la):'')+(lb?T(x+A+dx/2+10,y+H/2+4,lb,'start'):''))}
 function thoi(la){return svg(200,140,`<polygon points="100,15 170,70 100,125 30,70" fill="none" stroke="#000" stroke-width="2"/>`+T(150,38,la,'start'))}
 function tgl(A,B,C,sides){const P={[A]:[30,120],[B]:[200,120],[C]:[90,20]};let b=`<polygon points="30,120 200,120 90,20" fill="none" stroke="#000" stroke-width="2"/>`+T(22,134,A)+T(208,134,B)+T(90,14,C);
  (sides||[]).forEach(s=>{const m=s.match(/^(\w)(\w)=(.+)$/);if(!m)return;const p=P[m[1]],q=P[m[2]];if(!p||!q)return;const mx=(p[0]+q[0])/2,my=(p[1]+q[1])/2;const off=my>110?16:(mx<90?-10:10);b+=T(mx+(my>110?0:off),my>110?my+off:my-4,m[3])});
  return svg(240,150,b)}
 function hinh3d(k){
  if(k==='lapphuong')return svg(180,160,`<rect x="40" y="60" width="80" height="80" fill="#e3f2fd" stroke="#000" stroke-width="2"/><polygon points="40,60 80,25 160,25 120,60" fill="#bbdefb" stroke="#000" stroke-width="2"/><polygon points="120,60 160,25 160,105 120,140" fill="#90caf9" stroke="#000" stroke-width="2"/>`);
  if(k==='hophcn')return svg(220,150,`<rect x="30" y="60" width="120" height="70" fill="#fff3e0" stroke="#000" stroke-width="2"/><polygon points="30,60 70,25 190,25 150,60" fill="#ffe0b2" stroke="#000" stroke-width="2"/><polygon points="150,60 190,25 190,95 150,130" fill="#ffcc80" stroke="#000" stroke-width="2"/>`);
  if(k==='tru')return svg(160,170,`<ellipse cx="80" cy="140" rx="50" ry="16" fill="#c8e6c9" stroke="#000" stroke-width="2"/><rect x="30" y="40" width="100" height="100" fill="#e8f5e9" stroke="none"/><line x1="30" y1="40" x2="30" y2="140" stroke="#000" stroke-width="2"/><line x1="130" y1="40" x2="130" y2="140" stroke="#000" stroke-width="2"/><ellipse cx="80" cy="40" rx="50" ry="16" fill="#a5d6a7" stroke="#000" stroke-width="2"/>`);
  if(k==='non')return svg(160,170,`<ellipse cx="80" cy="140" rx="50" ry="16" fill="#f8bbd0" stroke="#000" stroke-width="2"/><polygon points="30,140 130,140 80,20" fill="#fce4ec" stroke="#000" stroke-width="2"/><ellipse cx="80" cy="140" rx="50" ry="16" fill="none" stroke="#000" stroke-width="2"/>`);
  if(k==='cau')return svg(160,160,`<circle cx="80" cy="80" r="60" fill="#e1f5fe" stroke="#000" stroke-width="2"/><ellipse cx="80" cy="80" rx="60" ry="18" fill="none" stroke="#000" stroke-dasharray="5 4"/>`);
  if(k==='chop')return svg(180,160,`<polygon points="30,130 150,130 110,100" fill="#fff9c4" stroke="#000" stroke-width="2"/><polygon points="30,130 90,20 150,130" fill="#fff59d" stroke="#000" stroke-width="2"/><line x1="90" y1="20" x2="110" y2="100" stroke="#000" stroke-width="2"/>`);
  return ''}
 function bieudoCot(spec){const items=String(spec).split(',').map(s=>s.split('=')).filter(x=>x.length===2).map(([k,v])=>[k.trim(),+v]);if(!items.length)return '';
  const mx=Math.max(...items.map(x=>x[1]),1),sp=Math.max(60,Math.max(...items.map(x=>x[0].length))*7.5+14),W=60+items.length*sp,H=170,bw=Math.min(36,sp-16);let b=Ln(45,20,45,140)+Ln(45,140,W-10,140);
  for(let i=0;i<=4;i++){const v=Math.round(mx*i/4),y=140-100*i/4;b+=T(40,y+4,String(v),'end')+Ln(42,y,45,y)}
  items.forEach(([k,v],i)=>{const x=60+i*sp+(sp-bw)/2-8,h=100*v/mx;b+=`<rect x="${x}" y="${140-h}" width="${bw}" height="${h}" fill="#64b5f6" stroke="#1565c0"/>`+T(x+bw/2,158,k)+T(x+bw/2,136-h,String(v))});
  return svg(W,H,b)}
 function bieudoTranh(spec){const items=String(spec).split(',').map(s=>s.split('=')).filter(x=>x.length===2).map(([k,v])=>[k.trim(),+v]);if(!items.length)return '';
  const mx=Math.max(...items.map(x=>x[1]),1),W=90+mx*26,H=20+items.length*36;let b='';
  items.forEach(([k,v],i)=>{const y=30+i*36;b+=T(80,y+5,k,'end');for(let j=0;j<v;j++)b+=OBJ.sao(95+j*26,y)});
  return svg(W,H,b)}
 function bang(spec){const rows=String(spec).split('|').map(r=>r.split(';'));const nc=Math.max(...rows.map(r=>r.length));const cws=[];for(let j=0;j<nc;j++){let mx=4;rows.forEach(r=>{mx=Math.max(mx,String(r[j]||'').length)});cws.push(Math.max(60,Math.min(220,mx*7.5+18)))}const xs=[0];cws.forEach(w=>xs.push(xs[xs.length-1]+w));const ch=28,W=xs[nc]+2,H=rows.length*ch+2;let b='';
  rows.forEach((r,i)=>{for(let j=0;j<nc;j++){b+=`<rect x="${1+xs[j]}" y="${1+i*ch}" width="${cws[j]}" height="${ch}" fill="${i===0?'#e3f2fd':'#fff'}" stroke="#000"/>`+T(1+xs[j]+cws[j]/2,1+i*ch+19,r[j]||'','middle',i===0?'font-weight="700"':'')}});
  return svg(W,H,b)}
 function truc(a,b,marks){a=+a;b=+b;const n=Math.max(1,b-a),sp=Math.max(36,String(b).length*9+10),W=40+n*sp;let s=Ln(20,40,W-10,40)+`<polygon points="${W-10},40 ${W-18},35 ${W-18},45" fill="#000"/>`;
  for(let i=0;i<=n;i++){const x=20+i*sp;s+=Ln(x,35,x,45)+T(x,62,String(a+i))}
  (marks?String(marks).split(','):[]).forEach(m=>{const v=+m;if(v>=a&&v<=b)s+=`<circle cx="${20+(v-a)*sp}" cy="40" r="5" fill="#e53935"/>`});
  return svg(W,75,s)}
 function thuoc(cm){cm=+cm;const W=40+10*32;let s=`<rect x="20" y="40" width="${10*32}" height="40" fill="#fff8e1" stroke="#000"/>`;
  for(let i=0;i<=100;i++){const x=20+i*3.2,h=i%10===0?16:i%5===0?10:5;s+=`<line x1="${x}" y1="40" x2="${x}" y2="${40+h}" stroke="#000" stroke-width="1"/>`;if(i%10===0)s+=T(x,74,String(i/10))}
  s+=`<line x1="20" y1="24" x2="${20+cm*32}" y2="24" stroke="#1565c0" stroke-width="4"/><line x1="20" y1="16" x2="20" y2="32" stroke="#1565c0" stroke-width="2"/><line x1="${20+cm*32}" y1="16" x2="${20+cm*32}" y2="32" stroke="#1565c0" stroke-width="2"/>`;
  return svg(W,90,s)}
 function toado(spec){const pts=[...String(spec).matchAll(/([A-Z])\((-?\d+),(-?\d+)\)/g)].map(m=>[m[1],+m[2],+m[3]]);const R=Math.min(10,Math.max(5,...pts.map(p=>Math.max(Math.abs(p[1]),Math.abs(p[2]))))),u=Math.round(110/R),cx=140,cy=140;let s='';   /* tự mở rộng trục khi điểm vượt ±5 (tối đa ±10) */
  for(let i=-R;i<=R;i++){s+=`<line x1="${cx+i*u}" y1="${cy-R*u}" x2="${cx+i*u}" y2="${cy+R*u}" stroke="#eee"/><line x1="${cx-R*u}" y1="${cy+i*u}" x2="${cx+R*u}" y2="${cy+i*u}" stroke="#eee"/>`;if(i&&i!==R)s+=T(cx+i*u,cy+14,String(i),'middle','font-size="10"')+T(cx-6,cy-i*u+4,String(i),'end','font-size="10"')}
  s+=Ln(cx-R*u,cy,cx+R*u+8,cy)+Ln(cx,cy+R*u,cx,cy-R*u-8)+`<polygon points="${cx+R*u+8},${cy} ${cx+R*u},${cy-4} ${cx+R*u},${cy+4}"/><polygon points="${cx},${cy-R*u-8} ${cx-4},${cy-R*u} ${cx+4},${cy-R*u}"/>`+T(cx+R*u+4,cy+16,'x')+T(cx+12,cy-R*u-2,'y')+T(cx-6,cy+14,'O','end');
  pts.forEach(([n,x,y])=>{s+=`<circle cx="${cx+x*u}" cy="${cy-y*u}" r="4" fill="#e53935"/>`+T(cx+x*u+8,cy-y*u-6,n,'start','font-weight="700"')});
  return svg(280,280,s)}
 function dothi(a,b){a=+a;b=+b;const R=5,u=22,cx=140,cy=140;let s=toado('').replace(/<\/svg>$/,'');const pts=[];for(let x=-R;x<=R;x+=0.5){const y=a*x+b;if(y>=-R&&y<=R)pts.push((cx+x*u)+','+(cy-y*u))}
  s+=`<polyline points="${pts.join(' ')}" fill="none" stroke="#1565c0" stroke-width="2.5"/>`+T(cx+R*u-60,cy-R*u+14,`y = ${a===1?'':a===-1?'-':a}x${b?(b>0?' + '+b:' – '+(-b)):''}`,'start','fill="#1565c0" font-weight="700"');
  return s+'</svg>'}
 function songsong(){return svg(240,120,Ln(20,40,220,40)+Ln(20,85,220,85)+T(228,44,'a','start')+T(228,89,'b','start')+`<path d="M110 32 l8 8 l-8 8 M110 77 l8 8 l-8 8" fill="none" stroke="#1f6f5c" stroke-width="2"/>`)}
 function vuonggoc(){return svg(220,140,Ln(20,110,200,110)+Ln(110,20,110,110)+`<path d="M110 94 h16 v16" fill="none" stroke="#1f6f5c" stroke-width="2"/>`+T(206,114,'a','start')+T(114,18,'b','start'))}
 function phuonghuong(){return svg(240,210,`<circle cx="120" cy="105" r="78" fill="#f5f5f5" stroke="#000" stroke-width="2"/><polygon points="120,37 130,105 120,100 110,105" fill="#e53935"/><polygon points="120,173 130,105 120,110 110,105" fill="#999"/><polygon points="52,105 120,95 115,105 120,115" fill="#999"/><polygon points="188,105 120,95 125,105 120,115" fill="#999"/>`+T(120,30,'Bắc')+T(120,200,'Nam')+T(44,109,'Tây','end')+T(196,109,'Đông','start'))}
 function nhietke(deg){deg=+deg;const base=152,y=base-deg*1.3;return svg(100,185,`<rect x="35" y="18" width="20" height="140" rx="10" fill="#fff" stroke="#000" stroke-width="2"/><rect x="41" y="${y}" width="8" height="${base-y}" fill="#e53935"/><circle cx="45" cy="160" r="12" fill="#e53935"/>`+[0,20,40,60,80,100].map(v=>`<line x1="55" y1="${base-v*1.3}" x2="62" y2="${base-v*1.3}" stroke="#000"/>`+T(66,base+4-v*1.3,String(v)+'°C','start','font-size="10"')).join(''))}
 const H={
  dem:p=>dem(p[0],+p[1]||1,p[2]!=null?+p[2]:null),dongho:p=>dongho(+p[0]||12,+p[1]||0),phanso:p=>phanso(p[0],p[1],p[2]==='thanh'),tien:p=>tien(p.join(',')),
  goc:p=>goc(p[0]),hcn:p=>hcn(p[0],p[1],p[0]+' '+(p[2]||'cm'),p[1]+' '+(p[2]||'cm')),vuong:p=>hcn(1,1,p[0]+' '+(p[1]||'cm'),''),tamgiac:p=>tamgiac(p[0],p[1],p[0]+' '+(p[2]||'cm'),p[1]+' '+(p[2]||'cm')),
  thang:p=>thang(p[0],p[1],p[2],p[0]+' '+(p[3]||'cm'),p[1]+' '+(p[3]||'cm'),p[2]+' '+(p[3]||'cm')),tron:p=>tron(p[0]+' '+(p[1]||'cm'),false),hbh:p=>hbh(p[0],p[1],p[0]+' '+(p[2]||'cm'),p[1]+' '+(p[2]||'cm')),thoi:p=>thoi(p[0]+' '+(p[1]||'cm')),
  tgl:p=>tgl(p[0]||'A',p[1]||'B',p[2]||'C',p.slice(3)),hinh3d:p=>hinh3d(p[0]),bieudo:p=>p[0]==='tranh'?bieudoTranh(p.slice(1).join(':')):bieudoCot(p.slice(1).join(':')),
  bang:p=>bang(p.join(':')),truc:p=>truc(p[0]||0,p[1]||10,p[2]),thuoc:p=>thuoc(p[0]||5),toado:p=>toado(p.join(':')),dothi:p=>dothi(p[0]||1,p[1]||0),
  songsong:()=>songsong(),vuonggoc:()=>vuonggoc(),phuonghuong:()=>phuonghuong(),nhietke:p=>nhietke(p[0]||25),
  ILLUS:p=>(typeof ILLUS!=='undefined'&&own(ILLUS,p[0])&&typeof ILLUS[p[0]]==='string')?ILLUS[p[0]]:''
 };
 window.anhTheoMa=function(spec){try{spec=String(spec||'').replace(/^@img:/,'');if(spec.length>300)return '';const p=spec.split(':');const k=p.shift();if(!own(H,k))return '';let r=H[k](p);if(typeof r!=='string'||!/^<svg/.test(r))return '';/* lớp bảo vệ cuối: SVG chỉ do hàm vẽ sinh ra, vẫn loại mọi mã thực thi nếu lọt */if(/<script|<foreignObject|<iframe|javascript:|\son[a-z]+\s*=|<use\b|xlink:href|<a\b/i.test(r))return '';const OK=/^(svg|rect|circle|ellipse|line|polyline|polygon|path|text|tspan|g|defs|linearGradient|stop)$/i;const tags=r.match(/<\/?([a-zA-Z][a-zA-Z0-9]*)/g)||[];for(const t of tags){if(!OK.test(t.replace(/^<\/?/,'')))return ''}return r}catch(e){return ''}};
 window.DS_HINH=Object.keys(H);
 window.DS_VAT=Object.keys(OBJ);
})();

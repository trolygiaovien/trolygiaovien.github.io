/* v15.9.42 – LỜI GIẢI CHI TIẾT cho câu Toán do máy sinh (577 dạng, lớp 1–9). LG[id](it) → chuỗi lời giải (các dòng cách nhau \n). Đã kiểm thử tự động: lời giải luôn ra đúng đáp án của câu. */
window.LG=window.LG||{};(function(LG){
LG['bang100_1']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/liền sau của\s*(\d+)/)))return 'Số liền sau của '+m[1]+' là số đứng ngay sau '+m[1]+' khi đếm: '+m[1]+', '+a+'.\n(Lấy '+m[1]+' + 1 = '+a+'.)\nVậy số liền sau của '+m[1]+' là '+a+'.';
if((m=q.match(/liền trước của\s*(\d+)/)))return 'Số liền trước của '+m[1]+' là số đứng ngay trước '+m[1]+' khi đếm: '+a+', '+m[1]+'.\n(Lấy '+m[1]+' − 1 = '+a+'.)\nVậy số liền trước của '+m[1]+' là '+a+'.';
if((m=q.match(/(\d+)\s*;\s*\.+\s*;\s*(\d+)/)))return 'Đếm thêm 1 từ '+m[1]+': '+m[1]+', '+a+', '+m[2]+'.\nVậy số còn thiếu là '+a+'.';
return 'Dựa vào bảng các số từ 1 đến 100 để tìm số.\nVậy số cần tìm là '+a+'.';};
LG['c10']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*\+\s*(\d+)/);
if(!m)return 'Thực hiện phép cộng.\nVậy kết quả là '+a+'.';var x=+m[1],y=+m[2];
if(y===0)return 'Một số cộng với 0 bằng chính số đó.\nVậy '+x+' + 0 = '+a+'.';
if(x===0)return '0 cộng với một số bằng chính số đó.\nVậy 0 + '+y+' = '+a+'.';
var lo=Math.min(x,y),hi=Math.max(x,y),s=[];for(var i=1;i<=lo;i++)s.push(hi+i);
return (y>x?'Đổi chỗ hai số, kết quả không đổi: '+x+' + '+y+' = '+y+' + '+x+'.\n':'')+'Đếm thêm '+lo+' từ '+hi+': '+hi+', '+s.join(', ')+'.\nVậy '+x+' + '+y+' = '+a+'.';};
LG['c100']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*\+\s*(\d+)/);
if(!m)return 'Thực hiện phép cộng.\nVậy kết quả là '+a+'.';var x=+m[1],y=+m[2];
var dv=(x%10)+(y%10),ch=Math.floor(x/10)+Math.floor(y/10);
var hc=(x<10||y<10)?'Hạ '+ch+'.':Math.floor(x/10)+' cộng '+Math.floor(y/10)+' bằng '+ch+', viết '+ch+'.';
return 'Đặt tính rồi tính (thẳng hàng đơn vị với đơn vị, chục với chục):\n• '+(x%10)+' cộng '+(y%10)+' bằng '+dv+', viết '+dv+'.\n• '+hc+'\nVậy '+x+' + '+y+' = '+a+'.';};
LG['dem1']=function(it){var a=String(it.a);
return 'Chỉ tay vào từng hình tròn và đếm lần lượt: 1, 2, 3, … (mỗi hình chỉ đếm một lần).\nĐếm đến hình cuối cùng được '+a+' hình tròn.\nVậy viết số '+a+'.';};
LG['dodai1']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/dài\s*(\d+)\s*cm,\s*vẽ dài thêm\s*(\d+)\s*cm/)))return 'Muốn biết đoạn thẳng dài bao nhiêu, ta làm phép cộng:\n'+m[1]+' + '+m[2]+' = '+(+m[1]+ +m[2])+'\nVậy đoạn thẳng dài '+a+'.';
if((m=q.match(/A dài\s*(\d+)\s*cm.*B dài\s*(\d+)\s*cm/))){var x=+m[1],y=+m[2];
return 'So sánh: '+x+' cm '+(x>y?'>':'<')+' '+y+' cm.\nVậy '+a+' dài hơn.';}
return 'So sánh độ dài (cùng đơn vị xăng-ti-mét).\nVậy đáp án là: '+a+'.';};
LG['dongho1']=function(it){var a=String(it.a),m=a.match(/^(\d+)\s*giờ\s*$/);
if(m)return 'Kim dài chỉ vào số 12, kim ngắn chỉ vào số '+m[1]+'.\nVậy đồng hồ chỉ '+a+'.';
return 'Xem kim ngắn chỉ giờ, kim dài chỉ phút.\nVậy đồng hồ chỉ '+a+'.';};
LG['hinhphang1']=function(it){var a=String(it.a),d={'hình tròn':'Hình không có cạnh, không có góc, tròn đều như cái đĩa.','hình vuông':'Hình có 4 cạnh dài bằng nhau.','hình tam giác':'Hình có 3 cạnh.','hình chữ nhật':'Hình có 4 cạnh, có 2 cạnh dài và 2 cạnh ngắn.'};
return (d[a.toLowerCase()]||'Quan sát số cạnh và hình dạng của hình.')+'\nVậy hình bên là '+a+'.';};
LG['khoi1']=function(it){var q=String(it.q),a=String(it.a);
if(/mấy mặt/.test(q))return 'Khối lập phương có 6 mặt, các mặt đều là hình vuông bằng nhau.\nVậy khối lập phương có '+a+' mặt.';
if(/xúc xắc/.test(q))return 'Viên xúc xắc có 6 mặt đều là hình vuông bằng nhau.\nVậy viên xúc xắc có dạng '+a+'.';
if(/Hộp bánh/.test(q))return 'Hộp bánh có các mặt là hình chữ nhật, có mặt dài, mặt ngắn.\nVậy hộp bánh có dạng '+a+'.';
return 'Quan sát các mặt của đồ vật.\nVậy đáp án là: '+a+'.';};
LG['lv1']=function(it){var q=String(it.q),a=String(it.a),m;var nm=(q.match(/^(\S+)\s+có/)||[0,''])[1];
if((m=q.match(/có\s*(\d+)\s*(.+?),\s*mẹ cho thêm\s*(\d+)/)))return nm+' có '+m[1]+' '+m[2]+', mẹ cho thêm '+m[3]+' '+m[2]+'. Muốn biết '+nm+' có tất cả bao nhiêu '+m[2]+', ta làm phép cộng:\n'+m[1]+' + '+m[3]+' = '+(+m[1]+ +m[3])+'\nVậy '+nm+' có tất cả '+a+'.';
if((m=q.match(/có\s*(\d+)\s*(.+?),.*cho bạn\s*(\d+)/)))return nm+' có '+m[1]+' '+m[2]+', cho bạn '+m[3]+' '+m[2]+'. Muốn biết '+nm+' còn lại bao nhiêu '+m[2]+', ta làm phép trừ:\n'+m[1]+' − '+m[3]+' = '+(+m[1]-m[3])+'\nVậy '+nm+' còn lại '+a+'.';
return 'Thêm thì làm phép cộng, bớt thì làm phép trừ.\nVậy đáp số: '+a+'.';};
LG['nc1a']=function(it){var q=String(it.q).replace(/[–−]/g,'-').replace(/\.\.\.|…/g,'…'),a=String(it.a),m;var p=q.split(':').slice(1).join(':').trim();
if((m=p.match(/^(\d+)\s*\+\s*…\s*=\s*(\d+)\s*\+\s*(\d+)/))){var r=+m[2]+ +m[3];return 'Tính vế phải: '+m[2]+' + '+m[3]+' = '+r+'.\nTa có '+m[1]+' + … = '+r+'. Số cần điền là '+r+' − '+m[1]+' = '+a+'.\nVậy điền số '+a+'.';}
if((m=p.match(/^…\s*\+\s*(\d+)\s*=\s*(\d+)\s*\+\s*(\d+)/))){var r=+m[2]+ +m[3];return 'Tính vế phải: '+m[2]+' + '+m[3]+' = '+r+'.\nTa có … + '+m[1]+' = '+r+'. Số cần điền là '+r+' − '+m[1]+' = '+a+'.\nVậy điền số '+a+'.';}
if((m=p.match(/^(\d+)\s*-\s*…\s*=\s*(\d+)/)))return 'Lấy '+m[1]+' trừ đi số cần điền thì được '+m[2]+'.\nSố cần điền là '+m[1]+' − '+m[2]+' = '+a+'.\nVậy điền số '+a+'.';
if((m=p.match(/^(\d+)\s*\+\s*(\d+)\s*=\s*(\d+)\s*-\s*…/))){var r=+m[1]+ +m[2];return 'Tính vế trái: '+m[1]+' + '+m[2]+' = '+r+'.\nTa có '+m[3]+' − … = '+r+'. Số cần điền là '+m[3]+' − '+r+' = '+a+'.\nVậy điền số '+a+'.';}
return 'Tính vế đã biết, rồi tìm số còn thiếu để hai vế bằng nhau.\nVậy điền số '+a+'.';};
LG['nc1b']=function(it){var q=String(it.q),a=String(it.a);var ns=(q.match(/\d+/g)||[]).map(Number);
if(/Đếm thêm 10/.test(q))return 'Mỗi số hơn số đứng trước 10 (đếm thêm 10).\n'+ns[ns.length-1]+' + 10 = '+a+'.\nVậy số còn thiếu là '+a+'.';
if(/giảm dần/.test(q)&&ns.length>=2){var d=ns[0]-ns[1];return 'Mỗi số kém số đứng trước '+d+' đơn vị.\n'+ns[ns.length-1]+' − '+d+' = '+a+'.\nVậy số tiếp theo là '+a+'.';}
if(/còn thiếu/.test(q)&&ns.length>=2){var d=ns[1]-ns[0];return 'Mỗi số hơn số đứng trước '+d+' đơn vị.\nSố còn thiếu: '+ns[1]+' + '+d+' = '+a+' (kiểm tra: '+a+' + '+d+' = '+(+a+d)+').\nVậy số còn thiếu là '+a+'.';}
if(ns.length>=2){var d=ns[1]-ns[0];return 'Mỗi số hơn số đứng trước '+d+' đơn vị.\n'+ns[ns.length-1]+' + '+d+' = '+a+'.\nVậy số tiếp theo là '+a+'.';}
return 'Tìm quy luật của dãy số.\nVậy số cần viết là '+a+'.';};
LG['nc1c']=function(it){var q=String(it.q),a=String(it.a),m;
if(/bé nhất có hai chữ số/.test(q))return 'Các số có hai chữ số là 10, 11, 12, …, 99. Số đầu tiên là 10.\nVậy số bé nhất có hai chữ số là '+a+'.';
if(/tròn chục lớn nhất có hai chữ số/.test(q))return 'Các số tròn chục có hai chữ số: 10, 20, 30, 40, 50, 60, 70, 80, 90.\nVậy số tròn chục lớn nhất có hai chữ số là '+a+'.';
if(/lớn nhất có hai chữ số/.test(q))return 'Các số có hai chữ số là 10, 11, …, 99. Số cuối cùng là 99.\nVậy số lớn nhất có hai chữ số là '+a+'.';
if((m=q.match(/có\s*(\d+)\D+cho em\s*(\d+)\D+thêm\s*(\d+)/))){var x=+m[1],y=+m[2],z=+m[3];return 'Lan cho em '+y+' cái: '+x+' − '+y+' = '+(x-y)+' (cái).\nMẹ cho thêm '+z+' cái: '+(x-y)+' + '+z+' = '+(x-y+z)+' (cái).\nVậy Lan có '+a+' cái kẹo.';}
if(/thứ mấy/.test(q)){var T=['thứ Hai','thứ Ba','thứ Tư','thứ Năm','thứ Sáu','thứ Bảy','Chủ nhật'];var mm=q.match(/là (thứ \S+?|Chủ nhật)[.,]/);var i=mm?T.indexOf(mm[1].replace(/\.$/,'')):-1;
if(i>=0)return 'Đếm tiếp từ '+T[i]+': một ngày nữa là '+T[(i+1)%7]+', hai ngày nữa là '+T[(i+2)%7]+'.\nVậy hai ngày nữa là '+a+'.';
return 'Đếm tiếp các ngày trong tuần.\nVậy đáp án là '+a+'.';}
if(/xếp hàng/.test(q))return 'An đứng trước Bình, Bình đứng trước Chi nên thứ tự là: An, Bình, Chi.\nVậy bạn đứng cuối hàng là '+a+'.';
return 'Đọc kĩ đề và suy luận từng bước.\nVậy đáp án là '+a+'.';};
LG['ngaytuan1']=function(it){var q=String(it.q),a=String(it.a);
var L='Các ngày trong tuần theo thứ tự: thứ Hai, thứ Ba, thứ Tư, thứ Năm, thứ Sáu, thứ Bảy, Chủ nhật.';
if(/mấy ngày/.test(q))return L+'\nĐếm được 7 ngày.\nVậy một tuần có '+a+' ngày.';
var m=q.match(/^(Sau|Trước)\s+(.+?)\s+là ngày nào/);
if(m){var x=m[2];if(m[1]==='Sau')return L+(x==='Chủ nhật'?'\nHết Chủ nhật thì sang tuần mới, bắt đầu lại từ thứ Hai.':'')+'\nNgày ngay sau '+x+' là '+a+'.\nVậy sau '+x+' là '+a+'.';
return L+(x==='thứ Hai'?'\nNgày ngay trước thứ Hai là Chủ nhật của tuần trước.':'\nNgày ngay trước '+x+' là '+a+'.')+'\nVậy trước '+x+' là '+a+'.';}
return L+'\nVậy đáp án là '+a+'.';};
LG['so1']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/liền sau của\s*(\d+)/)))return 'Số liền sau của một số thì hơn số đó 1 đơn vị: '+m[1]+' + 1 = '+a+'.\nVậy số liền sau của '+m[1]+' là '+a+'.';
if((m=q.match(/liền trước của\s*(\d+)/)))return 'Số liền trước của một số thì kém số đó 1 đơn vị: '+m[1]+' − 1 = '+a+'.\nVậy số liền trước của '+m[1]+' là '+a+'.';
return 'Đếm thêm hoặc bớt 1.\nVậy số cần tìm là '+a+'.';};
LG['so2cs1']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/gồm\s*(\d+)\s*chục và\s*(\d+)\s*đơn vị/)))return 'Viết chữ số chục ('+m[1]+') trước, rồi viết chữ số đơn vị ('+m[2]+') bên phải.\nVậy số gồm '+m[1]+' chục và '+m[2]+' đơn vị là '+a+'.';
if((m=q.match(/Số\s*(\d)(\d)\s*gồm/)))return 'Số '+m[1]+m[2]+' có chữ số '+m[1]+' ở hàng chục, chữ số '+m[2]+' ở hàng đơn vị.\nVậy số '+m[1]+m[2]+' gồm '+a+'.';
return 'Chữ số bên trái là hàng chục, chữ số bên phải là hàng đơn vị.\nVậy đáp án là '+a+'.';};

LG['sosanhsl1']=function(it){var m=String(it.q).match(/(\d+)\D+?(\d+)/);if(!m)return 'Đếm số ngôi sao ở mỗi nhóm rồi so sánh.\nVậy số sao ở nhóm A '+it.a+' số sao ở nhóm B.';var a=+m[1],b=+m[2];var s=a>b?a+' > '+b:a<b?a+' < '+b:a+' = '+b;return 'Nhóm A có '+a+' ngôi sao, nhóm B có '+b+' ngôi sao.\nTa có '+s+(a===b?' (nối mỗi sao nhóm A với một sao nhóm B thì vừa hết).':a>b?' (nối từng cặp thì nhóm A còn thừa sao).':' (nối từng cặp thì nhóm B còn thừa sao).')+'\nVậy số sao ở nhóm A '+it.a+' số sao ở nhóm B.';};
LG['ss10']=function(it){var m=String(it.q).match(/(\d+)\s*\+\s*(\d+)\s*(?:…|\.\.\.)\s*(\d+)/);if(!m)return 'Tính kết quả phép tính trước rồi so sánh hai số.\nVậy điền dấu '+it.a+'.';var a=+m[1],b=+m[2],c=+m[3],t=a+b;return 'Tính trước: '+a+' + '+b+' = '+t+'.\nSo sánh: '+t+' '+it.a+' '+c+'.\nVậy '+a+' + '+b+' '+it.a+' '+c+'. Điền dấu '+it.a+'.';};
LG['ss2cs1']=function(it){var m=String(it.q).match(/(\d+)\s*(?:…|\.\.\.)\s*(\d+)/);if(!m)return 'So sánh chữ số hàng chục trước, nếu bằng nhau thì so sánh chữ số hàng đơn vị.\nVậy điền dấu '+it.a+'.';var a=m[1],b=m[2],x=+a,y=+b,l;var ca=Math.floor(x/10),cb=Math.floor(y/10);if(ca!==cb)l='So sánh hàng chục: '+ca+' chục '+(ca>cb?'>':'<')+' '+cb+' chục.';else l='Hàng chục đều là '+ca+' chục, so sánh hàng đơn vị: '+(x%10)+' '+(x%10>y%10?'>':x%10<y%10?'<':'=')+' '+(y%10)+'.';return l+'\nVậy '+a+' '+it.a+' '+b+'.';};
LG['t10']=function(it){var m=String(it.q).match(/(\d+)\s*[–−-]\s*(\d+)/);if(!m)return 'Thực hiện phép trừ.\nĐáp số: '+it.a;var a=+m[1],b=+m[2],r=a-b;var l=b===0?'Số nào trừ đi 0 cũng bằng chính số đó.':a===b?'Hai số bằng nhau trừ đi nhau thì bằng 0.':'Từ '+a+' đếm lùi '+b+' số: '+(function(){var x=[];for(var i=1;i<=b;i++)x.push(a-i);return x.join(', ');})()+'.';return l+'\nVậy '+a+' – '+b+' = '+it.a+'.';};
LG['t100']=function(it){var m=String(it.q).match(/(\d+)\s*[–−-]\s*(\d+)/);if(!m)return 'Trừ hàng đơn vị trước, rồi trừ hàng chục.\nĐáp số: '+it.a;var a=+m[1],b=+m[2],r=a-b;var du=a%10-b%10,ch=Math.floor(a/10)-Math.floor(b/10);return 'Trừ hàng đơn vị: '+(a%10)+' – '+(b%10)+' = '+du+'.\nTrừ hàng chục: '+Math.floor(a/10)+' – '+Math.floor(b/10)+' = '+ch+'.\nVậy '+a+' – '+b+' = '+it.a+'.';};
LG['tach1']=function(it){var q=String(it.q),m;if((m=q.match(/Gộp\s*(\d+)\s*và\s*(\d+)/i))){var a=+m[1],b=+m[2];return 'Gộp '+a+' và '+b+' là phép cộng: '+a+' + '+b+' = '+(a+b)+'.\nVậy gộp '+a+' và '+b+' được '+it.a+'.';}if((m=q.match(/(\d+)\s*gồm\s*(\d+)/i))){var n=+m[1],p=+m[2];var d=n-p,x=[];for(var i=p+1;i<=n;i++)x.push(i);return (d>0?'Từ '+p+' đếm thêm đến '+n+': '+x.join(', ')+'. Ta đếm thêm được '+d+' số.':p+' và '+n+' bằng nhau nên phần còn lại là 0.')+'\nVậy '+n+' gồm '+p+' và '+it.a+'.';}return 'Dùng phép tách – gộp số.\nĐáp số: '+it.a;};
LG['tb1_29_1']=function(it){var m=String(it.q).match(/(\d+)\s*\+\s*(\d+)/);if(!m)return 'Đặt tính thẳng cột rồi cộng từ phải sang trái.\nĐáp số: '+it.a;var a=+m[1],b=+m[2],u=a%10+b%10,c=Math.floor(a/10)+Math.floor(b/10);var l1=u>=10?(a%10)+' cộng '+(b%10)+' bằng '+u+', viết '+(u%10)+', nhớ 1.':(a%10)+' cộng '+(b%10)+' bằng '+u+', viết '+u+'.';var ta=Math.floor(a/10),tb=Math.floor(b/10),cc=u>=10?c+1:c;var l2=tb>0?(ta+' cộng '+tb+' bằng '+c+(u>=10?', thêm 1 bằng '+cc:'')+', viết '+cc+'.'):(u>=10?'Hạ '+ta+', thêm 1 bằng '+cc+', viết '+cc+'.':'Hạ '+ta+', viết '+ta+'.');return 'Viết '+a+' ở trên, viết '+b+' ở dưới sao cho '+(tb>0?'hàng đơn vị thẳng cột với hàng đơn vị, hàng chục thẳng cột với hàng chục':b+' thẳng cột với chữ số hàng đơn vị của '+a)+', viết dấu +, kẻ gạch ngang.\nTính từ phải sang trái: '+l1+'\n'+l2+'\nVậy '+a+' + '+b+' = '+it.a+'.';};
LG['tb1_29_2']=function(it){var q=String(it.q),m;if((m=q.match(/(?:…|\.\.\.)\s*\+\s*(\d+)\s*=\s*(\d+)/))){var b=+m[1],c=+m[2];return 'Số cần tìm cộng với '+b+' được '+c+'.\nTa lấy '+c+' – '+b+' = '+(c-b)+'.\nThử lại: '+(c-b)+' + '+b+' = '+c+'. Vậy số cần điền là '+it.a+'.';}if((m=q.match(/(\d+)\s*\+\s*(?:…|\.\.\.)\s*=\s*(\d+)/))){var a=+m[1],c2=+m[2];return a+' cộng với số cần tìm được '+c2+'.\nTa lấy '+c2+' – '+a+' = '+(c2-a)+'.\nThử lại: '+a+' + '+(c2-a)+' = '+c2+'. Vậy số cần điền là '+it.a+'.';}return 'Lấy tổng trừ đi số đã biết.\nVậy số cần điền là '+it.a+'.';};
LG['tb1_29_3']=function(it){var m=String(it.q).match(/^(.+?) có (\d+) (.+?), (.+?) có (\d+) (.+?)\./);if(!m)return 'Muốn biết cả hai bạn có bao nhiêu, ta làm phép cộng.\nĐáp số: '+it.a;var a=+m[2],b=+m[5],dv=m[3];return 'Muốn biết cả hai bạn có bao nhiêu '+dv+', ta làm phép cộng.\nPhép tính: '+a+' + '+b+' = '+(a+b)+'\nTrả lời: Cả hai bạn có '+it.a+(String(it.a)===(a+b)+' '+dv?'':dv.indexOf(' ')>0?' '+dv.slice(dv.indexOf(' ')+1):'')+'.';};
LG['tb1_29_4']=function(it){var m=String(it.q).match(/có (\d+) (.+?), thùng thứ hai có (\d+) .+?lấy ra (\d+)/);if(!m)return 'Tính số đồ vật cả hai thùng lúc đầu, rồi trừ đi số đã lấy ra.\nĐáp số: '+it.a;var a=+m[1],dv=m[2],b=+m[3],c=+m[4],t=a+b,r=t-c;var tail=dv.indexOf(' ')>0?' '+dv.slice(dv.indexOf(' ')+1):'';return 'Bước 1: Lúc đầu cả hai thùng có: '+a+' + '+b+' = '+t+' ('+dv+').\nBước 2: Lấy ra '+c+' '+dv+' thì còn: '+t+' – '+c+' = '+r+' ('+dv+').\nTrả lời: Lúc này cả hai thùng còn '+it.a+tail+'.';};
LG['tb1_30_1']=LG['tb1_29_1'];
LG['tb1_30_2']=LG['tb1_29_2'];
LG['tb1_30_3']=LG['tb1_29_3'];
LG['tb1_30_4']=LG['tb1_29_4'];
LG['tb1_31_1']=function(it){var m=String(it.q).match(/(\d+)\s*[−–-]\s*(\d+)/);if(!m)return 'Đặt tính thẳng cột rồi trừ từ phải sang trái.\nĐáp số: '+it.a;var a=+m[1],b=+m[2],du=a%10-b%10,ch=Math.floor(a/10);return 'Viết '+a+' ở trên, viết '+b+' ở dưới sao cho '+b+' thẳng cột với chữ số hàng đơn vị của '+a+', viết dấu −, kẻ gạch ngang.\nTính từ phải sang trái: '+(a%10)+' trừ '+(b%10)+' bằng '+du+', viết '+du+'.\nHạ '+ch+', viết '+ch+'.\nVậy '+a+' − '+b+' = '+it.a+'.';};

LG['tb1_31_2']=function(it){var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/(\d+)\s*[−-]\s*…\s*=\s*(\d+)/))){var x=+m[1],y=+m[2];return x+' bớt đi mấy thì còn '+y+'? Ta lấy '+x+' trừ '+y+'.\n'+x+' − '+y+' = '+(x-y)+'.\nThử lại: '+x+' − '+a+' = '+y+'. Vậy số cần điền là '+a+'.';}
 if((m=q.match(/…\s*[−-]\s*(\d+)\s*=\s*(\d+)/))){var b=+m[1],c=+m[2];return 'Số cần tìm bớt đi '+b+' thì còn '+c+', nên lấy '+c+' cộng '+b+'.\n'+c+' + '+b+' = '+(b+c)+'.\nThử lại: '+a+' − '+b+' = '+c+'. Vậy số cần điền là '+a+'.';}
 return 'Dựa vào mối quan hệ giữa phép cộng và phép trừ để tìm số còn thiếu.\nVậy số cần điền là '+a+'.';};
LG['tb1_32_2']=LG['tb1_31_2'];
LG['tb1_31_3']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/có\s+(\d+)\s+(.+?),\s*đã bán\s+(\d+)/);
 if(!m)return 'Muốn biết còn lại bao nhiêu, ta làm phép trừ.\nTrả lời: Cửa hàng còn lại '+a+'.';
 var x=+m[1],y=+m[3],dv=m[2].trim(),n=String(x-y);var tl=(a.split(' ')[0]===n&&dv.indexOf(a.split(' ').slice(1).join(' '))===0)?n+' '+dv:a;
 return 'Muốn biết cửa hàng còn lại bao nhiêu '+dv+', ta lấy số '+dv+' cửa hàng có trừ đi số '+dv+' đã bán.\nPhép tính: '+x+' − '+y+' = '+n+'.\nTrả lời: Cửa hàng còn lại '+tl+'.';};
LG['tb1_32_3']=LG['tb1_31_3'];
LG['tb1_31_4']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/có\s+(\d+)\s+([^.]+?)\.\s*Lần đầu chuyển đi\s+(\d+)[^,]*,\s*lần sau chuyển đi\s+(\d+)/);
 if(!m)return 'Lấy số ban đầu trừ đi số chuyển lần đầu, rồi trừ tiếp số chuyển lần sau.\nTrả lời: Kho còn lại '+a+'.';
 var x=+m[1],dv=m[2].trim(),y=+m[3],z=+m[4],r1=x-y,r=r1-z,n=String(r);var tl=(a.split(' ')[0]===n&&dv.indexOf(a.split(' ').slice(1).join(' '))===0)?n+' '+dv:a;
 var sm=y+z,muon=(r1%10)<(z%10),nho=(y%10)+(z%10)>9||sm>99||(x%10)<(sm%10);
 if(muon&&!nho)return 'Cả hai lần kho chuyển đi: '+y+' + '+z+' = '+sm+' ('+dv+').\nKho còn lại: '+x+' − '+sm+' = '+n+' ('+dv+').\nTrả lời: Kho còn lại '+tl+'.';
 return 'Sau lần đầu, kho còn: '+x+' − '+y+' = '+r1+' ('+dv+').\nSau lần sau, kho còn: '+r1+' − '+z+' = '+n+' ('+dv+').\nTrả lời: Kho còn lại '+tl+'.';};
LG['tb1_32_4']=LG['tb1_31_4'];
LG['tb1_32_1']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*[−-]\s*(\d+)/);
 if(!m)return 'Đặt tính thẳng cột, trừ từ phải sang trái.\nĐáp số: '+a;
 var x=+m[1],y=+m[2],u1=x%10,u2=y%10,t1=Math.floor(x/10),t2=Math.floor(y/10),r=x-y,s;
 if(u1>=u2){var dv=u1-u2,ch=t1-t2;s='Viết '+y+' dưới '+x+' sao cho các chữ số cùng hàng thẳng cột với nhau, rồi trừ từ phải sang trái:\n• '+u1+' trừ '+u2+' bằng '+dv+', viết '+dv+'.\n• '+t1+' trừ '+t2+' bằng '+ch+(ch===0&&r<10?' (không viết).':', viết '+ch+'.');}
 else{var d2=u1+10-u2,c2=t1-t2-1;s='Viết '+y+' dưới '+x+' sao cho các chữ số cùng hàng thẳng cột với nhau, rồi trừ từ phải sang trái:\n• '+u1+' không trừ được '+u2+', lấy 1'+u1+' trừ '+u2+' bằng '+d2+', viết '+d2+', nhớ 1.\n• '+t2+' thêm 1 bằng '+(t2+1)+'; '+t1+' trừ '+(t2+1)+' bằng '+c2+(c2===0?' (không viết).':', viết '+c2+'.');}
 return s+'\nVậy '+x+' − '+y+' = '+(String(r)===a?a:a)+'.';};
LG['vitri1']=function(it){var q=String(it.q),a=String(it.a);
 if(/đồng hồ/.test(q))return 'Đồng hồ thường đeo ở tay không dùng để viết. Phần lớn các bạn viết bằng tay phải nên đeo đồng hồ ở tay trái.\nVậy đáp án: '+a+'.';
 if(/bầu trời/i.test(q))return 'Khi đứng trên mặt đất, ngẩng đầu lên ta mới thấy bầu trời. Vậy bầu trời '+a+' so với mặt đất.';
 if(/quay mặt/.test(q))return 'Vật ở ngay trước mặt ta (mắt nhìn thấy) là ở phía trước; vật ở sau lưng là ở phía sau. Quay mặt về bảng thì bảng ở '+a+'.';
 return 'Xác định vị trí dựa vào bản thân em: trên – dưới, trước – sau, trái – phải.\nVậy đáp án: '+a+'.';};

LG['bdtranh2']=function(it){const q=String(it.q||''),a=String(it.a||'');const re=/([A-ZÀ-Ỹa-zà-ỹĐđ]+):\s*(\d+)\s*quả/g;let m,v=[];while((m=re.exec(q)))v.push([m[1],+m[2]]);if(!v.length)return 'Đếm số quả từng loại rồi cộng lại, so sánh để tìm loại nhiều nhất.\nVậy: '+a;const S=v.reduce((p,c)=>p+c[1],0);const mx=Math.max(...v.map(x=>x[1]));const top=v.filter(x=>x[1]===mx).map(x=>x[0]);const L=['Số quả cả giỏ: '+v.map(x=>x[1]).join(' + ')+' = '+S+' (quả).','So sánh: '+v.map(x=>x[0]+' '+x[1]).join(', ')+'. Số lớn nhất là '+mx+'.'];if(top.length>1)L.push(top.join(' và ')+' cùng có '+mx+' quả (nhiều bằng nhau); đáp án chọn '+top[0]+'.');L.push('Vậy: '+a);return L.join('\n')};
LG['c1000']=function(it){function cot(a,b,op){const H=['đơn vị','chục','trăm','nghìn'];const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const n=Math.max(da.length,db.length);const L=[];let nho=0;for(let i=0;i<n;i++){const x=da[i]||0,y=db[i]||0;const h='Hàng '+H[i]+': ';if(op==='+'){if(i>=db.length&&nho===0){L.push(h+'hạ '+x+', viết '+x+'.');continue}let s,t;if(i>=db.length){s=x+nho;t=x+' thêm 1 bằng '+s}else{s=x+y+nho;t=x+' cộng '+y+' bằng '+(x+y)+(nho?', thêm 1 bằng '+s:'')}if(s>=10&&(i<n-1)){L.push(h+t+', viết '+(s-10)+', nhớ 1.');nho=1}else{L.push(h+t+', viết '+s+'.');nho=0}}else{let yy=y+nho,t='';if(i>=db.length&&nho===0){if(i===n-1&&x===0)break;L.push(h+'hạ '+x+', viết '+x+'.');continue}if(nho&&i<db.length)t=y+' thêm 1 bằng '+yy+'; ';if(x>=yy){const r=x-yy;if(i===n-1&&r===0&&n>1){L.push(h+t+x+' trừ '+yy+' bằng 0 (không viết).');}else L.push(h+t+x+' trừ '+yy+' bằng '+r+', viết '+r+'.');nho=0}else{L.push(h+t+x+' không trừ được '+yy+', lấy '+(x+10)+' trừ '+yy+' bằng '+(x+10-yy)+', viết '+(x+10-yy)+', nhớ 1.');nho=1}}}if(op==='+'&&nho)L.push('Viết 1 ở hàng '+H[n]+'.');return L}const q=String(it.q||''),a=String(it.a||'');const m=q.replace(/\s/g,'').match(/(\d+)([+\-–−])(\d+)/);if(!m)return 'Đặt tính thẳng cột, tính từ phải sang trái.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[3],op=m[2]==='+'?'+':'-';const r=op==='+'?x+y:x-y;const s=x+(op==='+'?' + ':' − ')+y;const L=['Đặt tính: viết '+y+' dưới '+x+' sao cho các chữ số cùng hàng thẳng cột, rồi tính từ phải sang trái:'].concat(cot(x,y,op));L.push('Vậy '+s+' = '+a+'.');return L.join('\n')};
LG['cn100']=function(it){function cot(a,b,op){const H=['đơn vị','chục','trăm','nghìn'];const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const n=Math.max(da.length,db.length);const L=[];let nho=0;for(let i=0;i<n;i++){const x=da[i]||0,y=db[i]||0;const h='Hàng '+H[i]+': ';if(op==='+'){if(i>=db.length&&nho===0){L.push(h+'hạ '+x+', viết '+x+'.');continue}let s,t;if(i>=db.length){s=x+nho;t=x+' thêm 1 bằng '+s}else{s=x+y+nho;t=x+' cộng '+y+' bằng '+(x+y)+(nho?', thêm 1 bằng '+s:'')}if(s>=10&&(i<n-1)){L.push(h+t+', viết '+(s-10)+', nhớ 1.');nho=1}else{L.push(h+t+', viết '+s+'.');nho=0}}else{let yy=y+nho,t='';if(i>=db.length&&nho===0){if(i===n-1&&x===0)break;L.push(h+'hạ '+x+', viết '+x+'.');continue}if(nho&&i<db.length)t=y+' thêm 1 bằng '+yy+'; ';if(x>=yy){const r=x-yy;if(i===n-1&&r===0&&n>1){L.push(h+t+x+' trừ '+yy+' bằng 0 (không viết).');}else L.push(h+t+x+' trừ '+yy+' bằng '+r+', viết '+r+'.');nho=0}else{L.push(h+t+x+' không trừ được '+yy+', lấy '+(x+10)+' trừ '+yy+' bằng '+(x+10-yy)+', viết '+(x+10-yy)+', nhớ 1.');nho=1}}}if(op==='+'&&nho)L.push('Viết 1 ở hàng '+H[n]+'.');return L}const q=String(it.q||''),a=String(it.a||'');const m=q.replace(/\s/g,'').match(/(\d+)([+\-–−])(\d+)/);if(!m)return 'Đặt tính thẳng cột, tính từ phải sang trái.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[3],op=m[2]==='+'?'+':'-';const r=op==='+'?x+y:x-y;const s=x+(op==='+'?' + ':' − ')+y;const L=['Đặt tính: viết '+y+' dưới '+x+' sao cho các chữ số cùng hàng thẳng cột, rồi tính từ phải sang trái:'].concat(cot(x,y,op));L.push('Vậy '+s+' = '+a+'.');return L.join('\n')};
LG['ctkhongnho2']=function(it){function cot(a,b,op){const H=['đơn vị','chục','trăm','nghìn'];const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const n=Math.max(da.length,db.length);const L=[];let nho=0;for(let i=0;i<n;i++){const x=da[i]||0,y=db[i]||0;const h='Hàng '+H[i]+': ';if(op==='+'){if(i>=db.length&&nho===0){L.push(h+'hạ '+x+', viết '+x+'.');continue}let s,t;if(i>=db.length){s=x+nho;t=x+' thêm 1 bằng '+s}else{s=x+y+nho;t=x+' cộng '+y+' bằng '+(x+y)+(nho?', thêm 1 bằng '+s:'')}if(s>=10&&(i<n-1)){L.push(h+t+', viết '+(s-10)+', nhớ 1.');nho=1}else{L.push(h+t+', viết '+s+'.');nho=0}}else{let yy=y+nho,t='';if(i>=db.length&&nho===0){if(i===n-1&&x===0)break;L.push(h+'hạ '+x+', viết '+x+'.');continue}if(nho&&i<db.length)t=y+' thêm 1 bằng '+yy+'; ';if(x>=yy){const r=x-yy;if(i===n-1&&r===0&&n>1){L.push(h+t+x+' trừ '+yy+' bằng 0 (không viết).');}else L.push(h+t+x+' trừ '+yy+' bằng '+r+', viết '+r+'.');nho=0}else{L.push(h+t+x+' không trừ được '+yy+', lấy '+(x+10)+' trừ '+yy+' bằng '+(x+10-yy)+', viết '+(x+10-yy)+', nhớ 1.');nho=1}}}if(op==='+'&&nho)L.push('Viết 1 ở hàng '+H[n]+'.');return L}const q=String(it.q||''),a=String(it.a||'');const m=q.replace(/\s/g,'').match(/(\d+)([+\-–−])(\d+)/);if(!m)return 'Đặt tính thẳng cột, tính từ phải sang trái.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[3],op=m[2]==='+'?'+':'-';const r=op==='+'?x+y:x-y;const s=x+(op==='+'?' + ':' − ')+y;const L=['Đặt tính: viết '+y+' dưới '+x+' sao cho các chữ số cùng hàng thẳng cột, rồi tính từ phải sang trái:'].concat(cot(x,y,op));L.push('Vậy '+s+' = '+a+'.');return L.join('\n')};
LG['c25']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/(\d+)\s*:\s*(\d+)/);if(!m)return 'Dựa vào bảng nhân để tìm thương.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[2];return 'Vì '+y+' × '+a+' = '+x+' nên '+x+' : '+y+' = '+a+'.'};
LG['cong20']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/(\d+)\s*\+\s*(\d+)/);if(!m)return 'Tách số để cộng cho tròn 10 rồi cộng tiếp.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[2];if(x>=10||y>=10||x+y<10)return x+' + '+y+' = '+a+'.';const c=10-x,d=y-c;return 'Tách '+y+' thành '+c+' và '+d+'.\n'+x+' + '+c+' = 10, 10 + '+d+' = '+(10+d)+'.\nVậy '+x+' + '+y+' = '+a+'.'};
LG['diem2']=function(it){const q=String(it.q||''),a=String(it.a||'');if(/thẳng hàng|cùng nằm trên một đường thẳng/i.test(q))return 'Ba điểm cùng nằm trên một đường thẳng gọi là ba điểm thẳng hàng.\nVậy đó là ba điểm '+a+'.';if(/mấy đầu/i.test(q))return 'Đoạn thẳng được giới hạn bởi hai điểm ở hai đầu.\nVậy đoạn thẳng có '+a+' đầu (điểm) giới hạn.';if(/Qua hai điểm/i.test(q))return 'Nối hai điểm A và B bằng thước, ta được đúng một đoạn thẳng AB.\nVậy vẽ được '+a+' đoạn thẳng AB.';return 'Đáp án: '+a+'.'};
LG['dongho2']=function(it){const a=String(it.a||'');let t='';const hm=a.match(/^(\d+) giờ rưỡi/);if(hm)t='Kim ngắn chỉ ở giữa số '+hm[1]+' và số '+(+hm[1]%12+1)+', kim dài chỉ số 6 nên là '+hm[1]+' giờ rưỡi (30 phút).';else if(/rưỡi|30 phút/.test(a))t='Kim ngắn chỉ ở giữa hai số, kim dài chỉ số 6 nên là giờ rưỡi (30 phút).';else if(/15 phút/.test(a))t='Kim dài chỉ số 3 nên là 15 phút.';else if(/45 phút|kém 15/.test(a))t='Kim dài chỉ số 9 nên là 45 phút (kém 15 phút).';else t='Kim dài chỉ số 12 nên là giờ đúng; kim ngắn chỉ số nào là bấy nhiêu giờ.';return 'Xem kim ngắn để biết giờ, xem kim dài để biết phút.\n'+t+'\nVậy đồng hồ chỉ '+a+'.'};
LG['donvichuc2']=function(it){const q=String(it.q||''),a=String(it.a||'');if(/đơn vị/.test(q))return '10 đơn vị = 1 chục.\nVậy 10 đơn vị bằng '+a+' chục.';if(/10 chục/.test(q))return '10 chục = 1 trăm.\nVậy 10 chục bằng '+a+' trăm.';if(/10 trăm/.test(q))return '10 trăm = 1 nghìn.\nVậy 10 trăm bằng '+a+' nghìn.';if(/nghìn bằng/.test(q))return '1 nghìn = 10 trăm.\nVậy 1 nghìn bằng '+a+' trăm.';return 'Nhớ: 10 đơn vị = 1 chục; 10 chục = 1 trăm; 10 trăm = 1 nghìn.\nĐáp án: '+a+'.'};
LG['dv2']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/(\d+)\s*(m|dm|cm)\s*=\s*\S*\s*(m|dm|cm)/);if(!m)return 'Nhớ: 1 m = 10 dm; 1 dm = 10 cm; 1 m = 100 cm.\nĐáp án: '+a+'.';const n=+m[1],u=m[2],v=m[3];const k={'dm-cm':10,'m-dm':10,'m-cm':100}[u+'-'+v];if(!k)return 'Đổi đơn vị theo bảng: 1 m = 10 dm; 1 dm = 10 cm.\nVậy '+n+' '+u+' = '+a+' '+v+'.';return '1 '+u+' = '+k+' '+v+' nên '+n+' '+u+' là '+n+' '+(k===100?'trăm':'chục')+' '+v+'.\nVậy '+n+' '+u+' = '+a+' '+v+'.'};
LG['gapkhuc2']=function(it){const q=String(it.q||''),a=String(it.a||'');if(/tứ giác/i.test(q))return 'Hình tứ giác có 4 cạnh và 4 đỉnh.\nVậy: '+a+'.';const ns=(q.match(/\d+(?=\s*cm)/g)||[]).map(Number);if(ns.length<2)return 'Độ dài đường gấp khúc bằng tổng độ dài các đoạn thẳng.\nĐáp số: '+a+'.';const S=ns.reduce((p,c)=>p+c,0);return 'Bài giải\nĐộ dài đường gấp khúc là:\n'+ns.join(' + ')+' = '+S+' (cm)\nĐáp số: '+a+'.'};
LG['kg2']=function(it){const q=String(it.q||''),a=String(it.a||'');const ns=(q.match(/\d+(?=\s*kg)/g)||[]).map(Number);if(ns.length<2)return 'Đáp số: '+a+'.';const [x,y]=ns;if(/Cả hai|cả hai/.test(q))return 'Bài giải\nCả hai bao nặng là:\n'+x+' + '+y+' = '+(x+y)+' (kg)\nĐáp số: '+a+'.';return 'Bài giải\nSố ki-lô-gam gạo còn lại là:\n'+x+' − '+y+' = '+(x-y)+' (kg)\nĐáp số: '+a+'.'};
LG['khanang2']=function(it){const q=String(it.q||''),a=String(it.a||'');let t='';if(/chắc chắn/.test(a))t='Trong hộp chỉ có bi đỏ nên lấy viên nào cũng là bi đỏ.';else if(/không thể/.test(a))t='Trong hộp không có bi đỏ nên không lấy được bi đỏ.';else if(/đồng xu/.test(q))t='Đồng xu có thể ra mặt sấp hoặc mặt ngửa, không biết trước.';else t='Sự việc có thể xảy ra, cũng có thể không xảy ra.';return t+'\nVậy điều này là '+a+'.'};
LG['khoi2']=function(it){const q=String(it.q||''),a=String(it.a||'');const t=/trụ/.test(a)?'Vật có hai mặt đáy là hình tròn, thân tròn đều như ống nên có dạng khối trụ.':/cầu/.test(a)?'Vật tròn đều mọi phía, lăn được theo mọi hướng nên có dạng khối cầu.':'Quan sát hình dạng của vật.';return t+'\nVậy đó là '+a+'.'};
LG['lientruoc2']=function(it){const q=String(it.q||''),a=String(it.a||'');let m;if((m=q.match(/liền sau của (\d+)/)))return 'Số liền sau thì hơn số đó 1 đơn vị: '+m[1]+' + 1 = '+a+'.\nVậy số liền sau của '+m[1]+' là '+a+'.';if((m=q.match(/liền trước của (\d+)/)))return 'Số liền trước thì kém số đó 1 đơn vị: '+m[1]+' − 1 = '+a+'.\nVậy số liền trước của '+m[1]+' là '+a+'.';if((m=q.match(/(\d+)\s*;\s*\.\.\.\s*;\s*(\d+)/)))return 'Trên tia số, mỗi số hơn số liền trước nó 1 đơn vị. Số đứng ngay sau '+m[1]+' là '+m[1]+' + 1 = '+a+'.\nVậy số còn thiếu là '+a+'.';return 'Đáp án: '+a+'.'};

LG['lit2']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/thứ nhất có (\d+) lít ([^\s,.]+).*?thứ hai có (\d+) lít/);if(!m)return 'Muốn tìm cả hai có bao nhiêu lít, ta làm phép cộng.\nĐáp số: '+a+'.';const x=+m[1],y=+m[3];return 'Bài giải\nCả hai can có số lít '+m[2]+' là:\n'+x+' + '+y+' = '+(x+y)+' (l)\nĐáp số: '+a+'.';};
LG['lv2n']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/Mỗi (\S+) có (\d+) (.+?)\.\s*Hỏi (\d+) (\S+) có bao nhiêu (.+?)\?/);if(!m)return 'Mỗi nhóm có số lượng bằng nhau nên ta làm phép nhân.\nĐáp số: '+a+'.';const x=+m[2],n=+m[4],dv=m[6].trim();return 'Bài giải\n'+n+' '+m[5]+' có số '+dv+' là:\n'+x+' × '+n+' = '+(x*n)+' ('+dv+')\nĐáp số: '+a+' '+dv+'.';};
LG['n25']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/(\d+)\s*×\s*(\d+)/);if(!m)return 'Dựa vào bảng nhân để tìm kết quả.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[2];const s=Array(y).fill(x).join(' + ');return 'Dựa vào bảng nhân '+x+': '+x+' × '+y+' = '+(x*y)+(y>1?' (vì '+s+' = '+(x*y)+')':'')+'.\nVậy '+x+' × '+y+' = '+a+'.';};
LG['nc2a']=function(it){const q=String(it.q).replace(/[–−]/g,'-').replace(/\.\.\.|…/g,'?'),a=String(it.a);const m=q.match(/:\s*(\d+|\?)\s*([+-])\s*(\d+|\?)\s*=\s*(\d+)\s*([+-])\s*(\d+)/);if(!m)return 'Tính vế phải trước, rồi tìm thành phần chưa biết.\nVậy số cần điền là '+a+'.';const p=+m[4],r=+m[6],op2=m[5]==='+'?' + ':' − ';const v=m[5]==='+'?p+r:p-r;const op=m[2];let L1='Bước 1: Tính vế phải: '+p+op2+r+' = '+v+'.',L2;
if(m[1]==='?'&&op==='+'){const b=+m[3];L2='Bước 2: … + '+b+' = '+v+'. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+v+' − '+b+' = '+(v-b)+'.';}
else if(m[1]==='?'){const b=+m[3];L2='Bước 2: … − '+b+' = '+v+'. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+v+' + '+b+' = '+(v+b)+'.';}
else if(op==='+'){const b=+m[1];L2='Bước 2: '+b+' + … = '+v+'. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+v+' − '+b+' = '+(v-b)+'.';}
else{const b=+m[1];L2='Bước 2: '+b+' − … = '+v+'. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+b+' − '+v+' = '+(b-v)+'.';}
return L1+'\n'+L2+'\nVậy số cần điền là '+a+'.';};
LG['nc2b']=function(it){const q=String(it.q),a=String(it.a);const part=q.slice(q.indexOf(':')+1);const toks=part.split(',').map(s=>s.trim());const nums=toks.map(s=>{const x=s.match(/^\d+/);return x?+x[0]:null;});const end='\nVậy số cần viết là '+a+'.';
if(/gấp đôi/.test(q)){const k=nums.filter(x=>x!==null);const l=k[k.length-1];return 'Mỗi số gấp đôi số đứng trước (lấy số đó nhân 2, hay cộng với chính nó).\nSố tiếp theo là: '+l+' + '+l+' = '+(2*l)+'.'+end;}
const k=nums.filter(x=>x!==null);if(k.length<2)return 'Tìm quy luật của dãy số rồi viết số còn thiếu.'+end;
if(/quy luật/.test(q)&&k.length>=3&&(k[2]-k[1])!==(k[1]-k[0])){const ds=[];for(let i=1;i<k.length;i++)ds.push(k[i]-k[i-1]);const nd=ds[ds.length-1]+1,l=k[k.length-1];return 'Khoảng cách giữa hai số liền nhau lần lượt là: '+ds.join(', ')+' (mỗi lần tăng thêm 1).\nVậy khoảng cách tiếp theo là '+nd+'.\nSố tiếp theo là: '+l+' + '+nd+' = '+(l+nd)+'.'+end;}
const idx=nums.indexOf(null);
if(idx>0&&idx<nums.length-1&&nums[idx-1]!==null){let d=null;for(let i=1;i<nums.length;i++)if(nums[i]!==null&&nums[i-1]!==null){d=nums[i]-nums[i-1];break;}const pv=nums[idx-1];return 'Hai số liền nhau trong dãy hơn kém nhau '+Math.abs(d)+' đơn vị (mỗi số '+(d>0?'thêm ':'bớt ')+Math.abs(d)+').\nSố còn thiếu là: '+pv+(d>0?' + ':' − ')+Math.abs(d)+' = '+(pv+d)+'.'+end;}
const d=k[1]-k[0],l=k[k.length-1];const ad=Math.abs(d);return (d<0?'Dãy số giảm dần đều, mỗi số kém số đứng trước '+ad+' đơn vị.':'Mỗi số trong dãy hơn số đứng trước '+ad+' đơn vị.')+'\nSố tiếp theo là: '+l+(d<0?' − ':' + ')+ad+' = '+(l+d)+'.'+end;};
LG['nc2c']=function(it){const q=String(it.q),a=String(it.a);let m;
if((m=q.match(/bà (\d+) tuổi, (\S+) (\d+) tuổi\. Hỏi khi \S+ (\d+) tuổi/))){const b=+m[1],c=+m[3],t=+m[4],h=b-c;return 'Bà hơn '+m[2]+' số tuổi là: '+b+' − '+c+' = '+h+' (tuổi).\nHiệu số tuổi của hai người không thay đổi theo thời gian.\nKhi '+m[2]+' '+t+' tuổi thì bà có số tuổi là: '+t+' + '+h+' = '+(t+h)+' (tuổi).\nĐáp số: '+a+'.';}
if((m=q.match(/Năm nay (\S+) (\d+) tuổi, em của \S+ (\d+) tuổi/))){const x=+m[2],y=+m[3];return 'Mỗi năm, cả hai người đều thêm 1 tuổi, nên '+m[1]+' luôn hơn em một số tuổi không đổi.\n'+m[1]+' hơn em số tuổi là: '+x+' − '+y+' = '+(x-y)+' (tuổi).\nĐáp số: '+a+'.';}
if((m=q.match(/(\S+) hơn (\S+) (\d+) tuổi\.\s*Hỏi (\d+ năm (?:nữa|trước))/))){return 'Mỗi năm, '+m[1]+' và '+m[2]+' đều thêm 1 tuổi (lùi lại thì đều bớt 1 tuổi), nên hiệu số tuổi không thay đổi.\nVì vậy '+m[4]+' '+m[1]+' vẫn hơn '+m[2]+' '+m[3]+' tuổi.\nĐáp số: '+a+'.';}if((m=q.match(/hơn (\S+) (\d+) tuổi/))){return 'Hiệu số tuổi của hai người không thay đổi theo thời gian, nên vẫn hơn '+m[2]+' tuổi.\nĐáp số: '+a+'.';}
return 'Hiệu số tuổi của hai người không thay đổi theo thời gian.\nĐáp số: '+a+'.';};
LG['nc2d']=function(it){const q=String(it.q),a=String(it.a);const ops=[];const re=/(cộng với|cộng tiếp|trừ đi|trừ tiếp)\s+(\d+)/g;let m;while((m=re.exec(q)))ops.push([m[1][0]==='c'?'+':'-',+m[2]]);const r=q.match(/được (\d+)/);if(!ops.length||!r)return 'Làm ngược lại từ kết quả: phép cộng thì ta trừ, phép trừ thì ta cộng.\nVậy số cần tìm là '+a+'.';let v=+r[1];const L=['Ta làm ngược lại từ cuối lên: đã cộng thì ta trừ đi, đã trừ thì ta cộng vào.'];for(let i=ops.length-1;i>=0;i--){const [o,n]=ops[i];const nv=o==='+'?v-n:v+n;L.push((o==='+'?'Trước khi cộng '+n+': ':'Trước khi trừ '+n+': ')+v+(o==='+'?' − ':' + ')+n+' = '+nv+'.');v=nv;}L.push('Vậy số cần tìm là '+a+'.');return L.join('\n');};
LG['ngaythang2']=function(it){const q=String(it.q),a=String(it.a);if(/tuần/.test(q))return 'Một tuần có các ngày: thứ Hai, thứ Ba, thứ Tư, thứ Năm, thứ Sáu, thứ Bảy, Chủ nhật.\nĐếm được 7 ngày.\nVậy một tuần có '+a+' ngày.';const m=q.match(/Tháng (\d+)/);const t=m?m[1]:'';if(t==='2')return 'Tháng 2 là tháng đặc biệt: năm thường có 28 ngày (năm nhuận có 29 ngày).\nVậy tháng 2 (năm thường) có '+a+' ngày.';return 'Các tháng có 31 ngày: 1, 3, 5, 7, 8, 10, 12.\nCác tháng có 30 ngày: 4, 6, 9, 11.\nVậy tháng '+t+' có '+a+' ngày.';};
LG['nh2']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/^(\S+) có (\d+) (.+?)\.\s*(\S+) có (nhiều|ít) hơn \S+ (\d+) /);if(!m)return 'Bài toán nhiều hơn thì làm phép cộng, ít hơn thì làm phép trừ.\nĐáp số: '+a+'.';const x=+m[2],y=+m[6],dv=m[3],nh=m[5]==='nhiều';return 'Bài giải\n'+m[4]+' có số '+dv+' là:\n'+x+(nh?' + ':' − ')+y+' = '+(nh?x+y:x-y)+' ('+dv+')\nĐáp số: '+a+'.';};
LG['phepchia2']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/(\d+)\s*:\s*(\d+)/);if(!m)return 'Dựa vào bảng nhân để tìm kết quả phép chia.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[2],t=x/y;return 'Dựa vào bảng nhân '+y+': '+y+' × '+t+' = '+x+'.\nVậy '+x+' : '+y+' = '+a+'.';};
LG['phepnhan2']=function(it){const q=String(it.q),a=String(it.a);if(/Chuyển/.test(q)){const p=q.slice(q.indexOf(':')+1).match(/\d+/g)||[];const n=p.length,x=p[0];return 'Số '+x+' được lấy '+n+' lần, ta viết thành phép nhân '+x+' × '+n+'.\nTính: '+p.join(' + ')+' = '+(+x*n)+'.\nVậy '+a+'.';}const m=q.match(/(\d+)\s*×\s*(\d+)/);if(!m)return 'Phép nhân là cách viết gọn tổng các số hạng bằng nhau.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[2];return x+' × '+y+' nghĩa là '+x+' được lấy '+y+' lần.\n'+x+' × '+y+' = '+Array(y).fill(x).join(' + ')+' = '+(x*y)+'.\nVậy '+x+' × '+y+' = '+a+'.';};
LG['sbc2']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/(\d+)\s*:\s*(\d+)\s*=\s*(\d+)/);if(!m)return 'Trong phép chia: số bị chia : số chia = thương.\nVậy số đó gọi là '+a+'.';return 'Trong phép chia '+m[1]+' : '+m[2]+' = '+m[3]+':\n'+m[1]+' là số bị chia, '+m[2]+' là số chia, '+m[3]+' là thương.\nVậy số đó gọi là '+a+'.';};
LG['so3cs2']=function(it){const q=String(it.q),a=String(it.a);let m;if((m=q.match(/Số (\d)(\d)(\d) gồm/)))return 'Số '+m[1]+m[2]+m[3]+': chữ số '+m[1]+' ở hàng trăm, chữ số '+m[2]+' ở hàng chục, chữ số '+m[3]+' ở hàng đơn vị.\nVậy số '+m[1]+m[2]+m[3]+' gồm '+a+'.';if((m=q.match(/(\d+) trăm (\d+) chục (\d+) đơn vị/)))return 'Viết lần lượt từ trái sang phải: hàng trăm '+m[1]+', hàng chục '+m[2]+', hàng đơn vị '+m[3]+'.\nVậy số đó là '+a+'.';return 'Xác định chữ số ở hàng trăm, hàng chục, hàng đơn vị.\nĐáp án: '+a+'.';};
LG['ss3cs2']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/(\d+)\s*(?:\.\.\.|…)\s*(\d+)/);if(!m)return 'So sánh từ hàng trăm, đến hàng chục, rồi hàng đơn vị.\nVậy điền dấu '+a+'.';const x=m[1],y=m[2];const H=['trăm','chục','đơn vị'];let i=0;while(i<3&&x[i]===y[i])i++;let L='So sánh từ hàng trăm sang phải.\n';if(i===3)L+='Hai số có các chữ số ở mọi hàng đều bằng nhau.\n';else{if(i>0)L+='Chữ số hàng '+H.slice(0,i).join(', hàng ')+' bằng nhau.\n';L+='Hàng '+H[i]+': '+x[i]+(x[i]>y[i]?' > ':' < ')+y[i]+'.\n';}return L+'Vậy '+x+' '+a+' '+y+'.';};
LG['tb2_19_1']=function(it){const q=String(it.q),a=String(it.a);const m=q.match(/(\d+)\s*\+\s*(\d+)/);if(!m)return 'Đặt tính thẳng cột, cộng từ phải sang trái.\nVậy kết quả là '+a+'.';const x=+m[1],y=+m[2];const xc=Math.floor(x/10),xd=x%10,yd=y%10,yc=Math.floor(y/10);const s=xd+yd,nho=s>=10?1:0;let L='Viết '+x+' rồi viết '+y+' dưới '+x+' sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu + và kẻ gạch ngang.\n';L+=nho?('• '+xd+' cộng '+yd+' bằng '+s+', viết '+(s%10)+', nhớ 1.\n'):('• '+xd+' cộng '+yd+' bằng '+s+', viết '+s+'.\n');const c=xc+yc+nho;L+='• '+(yc?xc+' cộng '+yc:xc)+(nho?' thêm 1':'')+' bằng '+c+', viết '+c+'.\n';return L+'Vậy '+x+' + '+y+' = '+a+'.';};

LG['tb2_19_2']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),cong=/\+/.test(q),truoc=/…\s*[+−-]/.test(q)||/\.\.\.\s*[+−-]/.test(q);
let L;
if(cong){const x=n[0],t=n[1],r=t-x;L=[truoc?'Ta nghĩ: số nào cộng với '+x+' thì được '+t+'?':'Ta nghĩ: '+x+' cộng với số nào thì được '+t+'?','Lấy '+t+' − '+x+' = '+r+'.',truoc?'Thử lại: '+r+' + '+x+' = '+t+'. Đúng.':'Thử lại: '+x+' + '+r+' = '+t+'. Đúng.'];}
else if(truoc){const b=n[0],h=n[1],r=h+b;L=['Ta nghĩ: số nào trừ đi '+b+' thì được '+h+'?','Lấy '+h+' + '+b+' = '+r+'.','Thử lại: '+r+' − '+b+' = '+h+'. Đúng.'];}
else{const a=n[0],h=n[1],r=a-h;L=['Ta nghĩ: '+a+' trừ đi số nào thì được '+h+'?','Lấy '+a+' − '+h+' = '+r+'.','Thử lại: '+a+' − '+r+' = '+h+'. Đúng.'];}
L.push('Vậy số cần điền là '+it.a+'.');return L.join('\n');
};
LG['tb2_19_3']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1];
return ['Bài giải','Cả hai bạn có số '+u+' là:',a+' + '+b+' = '+(a+b)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};
LG['tb2_19_4']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1],c=n[2];
return ['Bài giải','Số '+u+' còn lại ở thùng thứ nhất là:',a+' − '+c+' = '+(a-c)+' ('+u+')','Lúc này cả hai thùng có số '+u+' là:',(a-c)+' + '+b+' = '+(a-c+b)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};
LG['tb2_20_1']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const n=nums(it.q),op=/−|-/.test(it.q)?'−':'+',a=n[0],b=n[1],r=op==='+'?a+b:a-b;
const s=datTinh(a,b,op==='+'?'+':'-');
return ['Đặt tính: viết '+b+' dưới '+a+' sao cho các chữ số cùng hàng thẳng cột với nhau'+(b<10?' (chữ số '+b+' thẳng cột với chữ số hàng đơn vị '+(a%10)+').':'.'),'Tính từ phải sang trái:'].concat(s).concat(['Vậy '+a+' '+op+' '+b+' = '+it.a+'.']).join('\n');
};
LG['tb2_20_2']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),cong=/\+/.test(q),truoc=/…\s*[+−-]/.test(q)||/\.\.\.\s*[+−-]/.test(q);
let L;
if(cong){const x=n[0],t=n[1],r=t-x;L=[truoc?'Ta nghĩ: số nào cộng với '+x+' thì được '+t+'?':'Ta nghĩ: '+x+' cộng với số nào thì được '+t+'?','Lấy '+t+' − '+x+' = '+r+'.',truoc?'Thử lại: '+r+' + '+x+' = '+t+'. Đúng.':'Thử lại: '+x+' + '+r+' = '+t+'. Đúng.'];}
else if(truoc){const b=n[0],h=n[1],r=h+b;L=['Ta nghĩ: số nào trừ đi '+b+' thì được '+h+'?','Lấy '+h+' + '+b+' = '+r+'.','Thử lại: '+r+' − '+b+' = '+h+'. Đúng.'];}
else{const a=n[0],h=n[1],r=a-h;L=['Ta nghĩ: '+a+' trừ đi số nào thì được '+h+'?','Lấy '+a+' − '+h+' = '+r+'.','Thử lại: '+a+' − '+r+' = '+h+'. Đúng.'];}
L.push('Vậy số cần điền là '+it.a+'.');return L.join('\n');
};
LG['tb2_20_3']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1];
return ['Bài giải','Cả hai bạn có số '+u+' là:',a+' + '+b+' = '+(a+b)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};
LG['tb2_20_4']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1],c=n[2];
return ['Bài giải','Số '+u+' còn lại ở thùng thứ nhất là:',a+' − '+c+' = '+(a-c)+' ('+u+')','Lúc này cả hai thùng có số '+u+' là:',(a-c)+' + '+b+' = '+(a-c+b)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};
LG['tb2_22_1']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const n=nums(it.q),op=/−|-/.test(it.q)?'−':'+',a=n[0],b=n[1],r=op==='+'?a+b:a-b;
const s=datTinh(a,b,op==='+'?'+':'-');
return ['Đặt tính: viết '+b+' dưới '+a+' sao cho các chữ số cùng hàng thẳng cột với nhau'+(b<10?' (chữ số '+b+' thẳng cột với chữ số hàng đơn vị '+(a%10)+').':'.'),'Tính từ phải sang trái:'].concat(s).concat(['Vậy '+a+' '+op+' '+b+' = '+it.a+'.']).join('\n');
};
LG['tb2_22_2']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),cong=/\+/.test(q),truoc=/…\s*[+−-]/.test(q)||/\.\.\.\s*[+−-]/.test(q);
let L;
if(cong){const x=n[0],t=n[1],r=t-x;L=[truoc?'Ta nghĩ: số nào cộng với '+x+' thì được '+t+'?':'Ta nghĩ: '+x+' cộng với số nào thì được '+t+'?','Lấy '+t+' − '+x+' = '+r+'.',truoc?'Thử lại: '+r+' + '+x+' = '+t+'. Đúng.':'Thử lại: '+x+' + '+r+' = '+t+'. Đúng.'];}
else if(truoc){const b=n[0],h=n[1],r=h+b;L=['Ta nghĩ: số nào trừ đi '+b+' thì được '+h+'?','Lấy '+h+' + '+b+' = '+r+'.','Thử lại: '+r+' − '+b+' = '+h+'. Đúng.'];}
else{const a=n[0],h=n[1],r=a-h;L=['Ta nghĩ: '+a+' trừ đi số nào thì được '+h+'?','Lấy '+a+' − '+h+' = '+r+'.','Thử lại: '+a+' − '+r+' = '+h+'. Đúng.'];}
L.push('Vậy số cần điền là '+it.a+'.');return L.join('\n');
};
LG['tb2_22_3']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1];
return ['Bài giải','Cửa hàng còn lại số '+u+' là:',a+' − '+b+' = '+(a-b)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};
LG['tb2_22_4']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1],c=n[2];
return ['Bài giải','Sau lần chuyển thứ nhất, kho còn lại số '+u+' là:',a+' − '+b+' = '+(a-b)+' ('+u+')','Sau lần chuyển thứ hai, kho còn lại số '+u+' là:',(a-b)+' − '+c+' = '+(a-b-c)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};
LG['tb2_23_1']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const n=nums(it.q),op=/−|-/.test(it.q)?'−':'+',a=n[0],b=n[1],r=op==='+'?a+b:a-b;
const s=datTinh(a,b,op==='+'?'+':'-');
return ['Đặt tính: viết '+b+' dưới '+a+' sao cho các chữ số cùng hàng thẳng cột với nhau'+(b<10?' (chữ số '+b+' thẳng cột với chữ số hàng đơn vị '+(a%10)+').':'.'),'Tính từ phải sang trái:'].concat(s).concat(['Vậy '+a+' '+op+' '+b+' = '+it.a+'.']).join('\n');
};
LG['tb2_23_2']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),cong=/\+/.test(q),truoc=/…\s*[+−-]/.test(q)||/\.\.\.\s*[+−-]/.test(q);
let L;
if(cong){const x=n[0],t=n[1],r=t-x;L=[truoc?'Ta nghĩ: số nào cộng với '+x+' thì được '+t+'?':'Ta nghĩ: '+x+' cộng với số nào thì được '+t+'?','Lấy '+t+' − '+x+' = '+r+'.',truoc?'Thử lại: '+r+' + '+x+' = '+t+'. Đúng.':'Thử lại: '+x+' + '+r+' = '+t+'. Đúng.'];}
else if(truoc){const b=n[0],h=n[1],r=h+b;L=['Ta nghĩ: số nào trừ đi '+b+' thì được '+h+'?','Lấy '+h+' + '+b+' = '+r+'.','Thử lại: '+r+' − '+b+' = '+h+'. Đúng.'];}
else{const a=n[0],h=n[1],r=a-h;L=['Ta nghĩ: '+a+' trừ đi số nào thì được '+h+'?','Lấy '+a+' − '+h+' = '+r+'.','Thử lại: '+a+' − '+r+' = '+h+'. Đúng.'];}
L.push('Vậy số cần điền là '+it.a+'.');return L.join('\n');
};
LG['tb2_23_3']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1];
return ['Bài giải','Cửa hàng còn lại số '+u+' là:',a+' − '+b+' = '+(a-b)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};
LG['tb2_23_4']=function(it){
function datTinh(a,b,op){
  const s=[];const a1=a%10,a2=Math.floor(a/10),b1=b%10,b2=Math.floor(b/10);
  if(op==='+'){const u=a1+b1,n=u>=10?1:0;
    s.push(u>=10?a1+' cộng '+b1+' bằng '+u+', viết '+(u%10)+', nhớ 1.':a1+' cộng '+b1+' bằng '+u+', viết '+u+'.');
    const t=a2+b2+n;
    if(b2>0) s.push(a2+' cộng '+b2+' bằng '+(a2+b2)+(n?', thêm 1 bằng '+t:'')+', viết '+t+'.');
    else s.push(n?a2+' thêm 1 bằng '+t+', viết '+t+'.':'Hạ '+a2+', viết '+a2+'.');
    return s;}
  const n=a1<b1?1:0;
  s.push(n?a1+' không trừ được '+b1+', lấy '+(a1+10)+' trừ '+b1+' bằng '+(a1+10-b1)+', viết '+(a1+10-b1)+', nhớ 1.':a1+' trừ '+b1+' bằng '+(a1-b1)+', viết '+(a1-b1)+'.');
  const t=a2-b2-n;
  if(b2>0) s.push(n?b2+' thêm 1 bằng '+(b2+1)+', '+a2+' trừ '+(b2+1)+' bằng '+t+(t?', viết '+t+'.':', không viết.'):a2+' trừ '+b2+' bằng '+t+(t?', viết '+t+'.':', không viết.'));
  else s.push(n?a2+' trừ 1 bằng '+t+(t?', viết '+t+'.':', không viết.'):'Hạ '+a2+', viết '+a2+'.');
  return s;}
function nums(q){return (String(q).match(/\d+/g)||[]).map(Number);}
function dv(q){const m=String(q).match(/bao nhiêu ([^?]+)\?/);return m?m[1].trim():'';}
function fin(a,full){ // answer "47 bông" ; full noun "bông hoa"
  const A=String(a);if(full&&full.indexOf(A.replace(/^\d+\s*/,''))===0)return A.replace(/^(\d+)\s*.*$/,'$1 '+full);return A;}
const q=String(it.q),n=nums(q),u=dv(q),a=n[0],b=n[1],c=n[2];
return ['Bài giải','Sau lần chuyển thứ nhất, kho còn lại số '+u+' là:',a+' − '+b+' = '+(a-b)+' ('+u+')','Sau lần chuyển thứ hai, kho còn lại số '+u+' là:',(a-b)+' − '+c+' = '+(a-b-c)+' ('+u+')','Đáp số: '+fin(it.a,u)+'.'].join('\n');
};

LG['tb2_39_1']=function(it){
  var m=String(it.q).match(/(\d+)\s*×\s*(\d+)/);if(!m)return 'Nhẩm theo bảng nhân.\nVậy kết quả là '+it.a+'.';
  var a=+m[1],b=+m[2],r=a*b,seq=[];for(var i=1;i<=b;i++)seq.push(a*i);
  var res=String(r)===String(it.a).trim()?r:it.a;
  return a+' × '+b+' nghĩa là '+a+' được lấy '+b+' lần.\nĐếm thêm '+a+': '+seq.join(', ')+'.\nVậy '+a+' × '+b+' = '+res+'.';
};
LG['tb2_39_2']=function(it){
  var q=String(it.q),m;
  if((m=q.match(/(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/))){
    var x=m[1]*m[2],y=m[3]*m[4],s=x>y?'>':x<y?'<':'=';
    return 'Tính từng vế: '+m[1]+' × '+m[2]+' = '+x+'; '+m[3]+' × '+m[4]+' = '+y+'.\nSo sánh: '+x+' '+s+' '+y+'.\nVậy điền dấu '+it.a+' : '+m[1]+' × '+m[2]+' '+it.a+' '+m[3]+' × '+m[4]+'.';
  }
  if((m=q.match(/(\d+)\s*×\s*\?\s*=\s*(\d+)/))){
    var a=+m[1],p=+m[2],k=p/a;if(String(k)!==String(it.a).trim())k=it.a;
    return 'Nhẩm bảng nhân '+a+': '+a+' × '+k+' = '+p+'.\nVậy số cần điền là '+it.a+'.';
  }
  if((m=q.match(/\?\s*×\s*(\d+)\s*=\s*(\d+)/))){
    return 'Nhẩm bảng nhân: '+it.a+' × '+m[1]+' = '+m[2]+'.\nVậy số cần điền là '+it.a+'.';
  }
  return 'Nhẩm theo bảng nhân rồi điền.\nĐáp án: '+it.a+'.';
};
LG['tb2_39_3']=function(it){
  var q=String(it.q),m=q.match(/Mỗi\s+(\S+)\s+có\s+(\d+)\s+(.+?)\.\s*Hỏi\s+(\d+)\s+(\S+)/);
  if(!m)return 'Lấy số đồ vật ở mỗi nhóm nhân với số nhóm.\nĐáp số: '+it.a+'.';
  var each=+m[2],n=+m[4],unit=m[3],r=each*n,a=String(it.a).trim();
  var res=(a.split(' ')[0]===String(r))?r:a.split(' ')[0];
  return 'Bài giải\n'+n+' '+m[5]+' có tất cả số '+unit+' là:\n'+each+' × '+n+' = '+res+' ('+unit+')\nĐáp số: '+a+(unit.indexOf(a.split(' ').slice(1).join(' '))===0?unit.slice(a.split(' ').slice(1).join(' ').length):'')+'.';
};
LG['tb2_39_4']=function(it){
  var q=String(it.q),m=q.match(/^(.+?)\s+có\s+(\d+)\s+(\S+),\s*mỗi\s+\S+\s+có\s+(\d+)\s+(.+?)\.\s*(.+?)\s+cho bạn\s+(\d+)/);
  if(!m)return 'Tính số đồ vật lúc đầu (phép nhân), rồi trừ đi số đã cho bạn.\nĐáp số: '+it.a+'.';
  var who=m[1],n=+m[2],box=m[3],each=+m[4],unit=m[5],g=+m[7],tot=each*n,r=tot-g,a=String(it.a).trim();
  var rest=a.split(' ').slice(1).join(' '),tail=unit.indexOf(rest)===0?unit.slice(rest.length):'';
  if(a.split(' ')[0]!==String(r))r=a.split(' ')[0];
  return 'Bài giải\nSố '+unit+' '+who+' có là:\n'+each+' × '+n+' = '+tot+' ('+unit+')\nSố '+unit+' '+who+' còn lại là:\n'+tot+' − '+g+' = '+r+' ('+unit+')\nĐáp số: '+a+tail+'.';
};
LG['tb2_40_1']=LG['tb2_39_1'];
LG['tb2_40_2']=LG['tb2_39_2'];
LG['tb2_40_3']=LG['tb2_39_3'];
LG['tb2_40_4']=LG['tb2_39_4'];
LG['tb2_43_1']=function(it){
  var m=String(it.q).match(/(\d+)\s*:\s*(\d+)/);if(!m)return 'Dựa vào bảng nhân để tìm kết quả phép chia.\nVậy kết quả là '+it.a+'.';
  var a=+m[1],b=+m[2],r=a/b;if(String(r)!==String(it.a).trim())r=it.a;
  return 'Nhớ bảng nhân '+b+': '+b+' × '+r+' = '+a+'.\nNên '+a+' : '+b+' = '+r+'.';
};
LG['tb2_43_2']=function(it){
  var q=String(it.q),m;
  if((m=q.match(/\?\s*:\s*(\d+)\s*=\s*(\d+)/))){
    return 'Ta nghĩ: số nào chia cho '+m[1]+' thì được '+m[2]+'?\nNhẩm bảng nhân '+m[1]+': '+m[1]+' × '+m[2]+' = '+it.a+', nên '+it.a+' : '+m[1]+' = '+m[2]+'.\nVậy số cần điền là '+it.a+'.';
  }
  if((m=q.match(/(\d+)\s*:\s*\?\s*=\s*(\d+)/))){
    return 'Ta nghĩ: '+m[1]+' chia cho mấy thì được '+m[2]+'?\nNhẩm bảng nhân: '+it.a+' × '+m[2]+' = '+m[1]+', nên '+m[1]+' : '+it.a+' = '+m[2]+'.\nVậy số cần điền là '+it.a+'.';
  }
  if((m=q.match(/(\d+)\s*:\s*(\d+)\s*=\s*\?/))){
    return 'Nhẩm bảng chia: '+m[1]+' : '+m[2]+' = '+it.a+'.\nVậy số cần điền là '+it.a+'.';
  }
  return 'Dựa vào bảng nhân, bảng chia để tìm số.\nĐáp án: '+it.a+'.';
};
LG['tb2_43_3']=function(it){
  var q=String(it.q),m=q.match(/^(.+?)\s+có\s+(\d+)\s+(.+?),\s*chia đều vào\s+(\d+)\s+(\S+?)\./);
  if(!m)return 'Lấy tổng số đồ vật chia cho số nhóm.\nĐáp số: '+it.a+'.';
  var tot=+m[2],unit=m[3],n=+m[4],box=m[5],r=tot/n,a=String(it.a).trim();
  var rest=a.split(' ').slice(1).join(' '),tail=unit.indexOf(rest)===0?unit.slice(rest.length):'';
  if(a.split(' ')[0]!==String(r))r=a.split(' ')[0];
  return 'Bài giải\nMỗi '+box+' có số '+unit+' là:\n'+tot+' : '+n+' = '+r+' ('+unit+')\nĐáp số: '+a+tail+'.';
};
LG['tb2_43_4']=function(it){
  var q=String(it.q),m=q.match(/Có\s+(\d+)\s+(.+?)\s+chia đều vào\s+(\d+)\s+(\S+?)\.\s*(.+?)\s+lấy\s+(\d+)/);
  if(!m)return 'Tìm số đồ vật trong mỗi nhóm (phép chia), rồi nhân với số nhóm đã lấy.\nĐáp số: '+it.a+'.';
  var tot=+m[1],unit=m[2],n=+m[3],box=m[4],who=m[5],k=+m[6],e=tot/n,r=e*k,a=String(it.a).trim();
  var rest=a.split(' ').slice(1).join(' '),tail=unit.indexOf(rest)===0?unit.slice(rest.length):'';
  if(a.split(' ')[0]!==String(r))r=a.split(' ')[0];
  return 'Bài giải\nMỗi '+box+' có số '+unit+' là:\n'+tot+' : '+n+' = '+e+' ('+unit+')\n'+who+' lấy được số '+unit+' là:\n'+e+' × '+k+' = '+r+' ('+unit+')\nĐáp số: '+a+tail+'.';
};
LG['tb2_44_1']=LG['tb2_43_1'];
LG['tb2_44_2']=LG['tb2_43_2'];
LG['tb2_44_3']=LG['tb2_43_3'];

LG['tb2_44_4']=function(it){var q=String(it.q||''),a=String(it.a||'');var ds=function(kq,vat){var dv=vat.split(' ')[0];return (String(kq)+' '+dv===a.trim())?kq+' '+vat:a;};var m=q.match(/Có (\d+) (.+?) chia đều vào (\d+) (\S+)\.\s*(.+?) lấy (\d+) /);if(!m)return 'Tìm số đồ vật trong mỗi phần (phép chia), rồi nhân với số phần được lấy.\nĐáp số: '+a+'.';var t=+m[1],vat=m[2],n=+m[3],hop=m[4],ten=m[5],k=+m[6],dv=vat.split(' ')[0];var mt=t/n;return 'Bài giải\nMỗi '+hop+' có số '+vat+' là:\n'+t+' : '+n+' = '+mt+' ('+dv+')\n'+ten+' lấy được số '+vat+' là:\n'+mt+' × '+k+' = '+(mt*k)+' ('+dv+')\nĐáp số: '+ds(mt*k,vat)+'.';};
LG['tb2_59_1']=function(it){var q=String(it.q||''),a=String(it.a||'');var m=q.replace(/\s/g,' ').match(/(\d[\d ]*?)\s*([+−-])\s*(\d[\d ]*\d|\d)/);if(!m)return 'Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, hàng trăm thẳng hàng trăm. Tính từ phải sang trái.\nVậy kết quả là '+a+'.';var x=+m[1].replace(/ /g,''),y=+m[3].replace(/ /g,''),cong=(m[2]==='+');var r=cong?x+y:x-y;var H=['đơn vị','chục','trăm','nghìn'];var L=['Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục'+(Math.max(x,y)>=100?', hàng trăm thẳng hàng trăm':'')+'. Tính từ phải sang trái:'];var nh=0,n=Math.max(String(x).length,String(y).length);for(var i=0;i<n;i++){var dx=Math.floor(x/Math.pow(10,i))%10,dy=Math.floor(y/Math.pow(10,i))%10;var hx=x>=Math.pow(10,i),hy=y>=Math.pow(10,i);var s='- Hàng '+H[i]+': '; if(cong){var v=dx+dy+nh;if(!hy){s+=(nh?dx+' thêm '+nh+' bằng '+v:'hạ '+dx);}else if(!hx){s+=(nh?dy+' thêm '+nh+' bằng '+v:'hạ '+dy);}else{s+=dx+' cộng '+dy+' bằng '+(dx+dy)+(nh?', thêm '+nh+' bằng '+v:'');}  if(v>=10&&i<n-1){s+=', viết '+(v%10)+', nhớ 1';nh=1;}else{s+=', viết '+v;nh=0;}} else{var tr=dy+nh;if(!hy&&!nh){s+='hạ '+dx+', viết '+dx;}else{var pre=nh?(hy?dy+' thêm 1 bằng '+tr+'; ':''):'';if(dx>=tr){s+=pre+dx+' trừ '+tr+' bằng '+(dx-tr)+', viết '+(dx-tr);nh=0;}else{s+=pre+(10+dx)+' trừ '+tr+' bằng '+(10+dx-tr)+', viết '+(10+dx-tr)+', nhớ 1';nh=1;}}  if(i>0&&r<Math.pow(10,i)){s=s.replace(/, viết 0$/,', không viết 0 (chữ số 0 ở bên trái không cần viết)');}} L.push(s+'.');}if(cong&&nh){L.push('- Viết 1 sang hàng '+H[n]+'.');}L.push('Vậy '+x+' '+m[2]+' '+y+' = '+(String(r)===a.trim()?r:a)+'.');return L.join('\n');};
LG['tb2_60_1']=function(it){var q=String(it.q||''),a=String(it.a||'');var m=q.replace(/\s/g,' ').match(/(\d[\d ]*?)\s*([+−-])\s*(\d[\d ]*\d|\d)/);if(!m)return 'Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, hàng trăm thẳng hàng trăm. Tính từ phải sang trái.\nVậy kết quả là '+a+'.';var x=+m[1].replace(/ /g,''),y=+m[3].replace(/ /g,''),cong=(m[2]==='+');var r=cong?x+y:x-y;var H=['đơn vị','chục','trăm','nghìn'];var L=['Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục'+(Math.max(x,y)>=100?', hàng trăm thẳng hàng trăm':'')+'. Tính từ phải sang trái:'];var nh=0,n=Math.max(String(x).length,String(y).length);for(var i=0;i<n;i++){var dx=Math.floor(x/Math.pow(10,i))%10,dy=Math.floor(y/Math.pow(10,i))%10;var hx=x>=Math.pow(10,i),hy=y>=Math.pow(10,i);var s='- Hàng '+H[i]+': '; if(cong){var v=dx+dy+nh;if(!hy){s+=(nh?dx+' thêm '+nh+' bằng '+v:'hạ '+dx);}else if(!hx){s+=(nh?dy+' thêm '+nh+' bằng '+v:'hạ '+dy);}else{s+=dx+' cộng '+dy+' bằng '+(dx+dy)+(nh?', thêm '+nh+' bằng '+v:'');}  if(v>=10&&i<n-1){s+=', viết '+(v%10)+', nhớ 1';nh=1;}else{s+=', viết '+v;nh=0;}} else{var tr=dy+nh;if(!hy&&!nh){s+='hạ '+dx+', viết '+dx;}else{var pre=nh?(hy?dy+' thêm 1 bằng '+tr+'; ':''):'';if(dx>=tr){s+=pre+dx+' trừ '+tr+' bằng '+(dx-tr)+', viết '+(dx-tr);nh=0;}else{s+=pre+(10+dx)+' trừ '+tr+' bằng '+(10+dx-tr)+', viết '+(10+dx-tr)+', nhớ 1';nh=1;}}  if(i>0&&r<Math.pow(10,i)){s=s.replace(/, viết 0$/,', không viết 0 (chữ số 0 ở bên trái không cần viết)');}} L.push(s+'.');}if(cong&&nh){L.push('- Viết 1 sang hàng '+H[n]+'.');}L.push('Vậy '+x+' '+m[2]+' '+y+' = '+(String(r)===a.trim()?r:a)+'.');return L.join('\n');};
LG['tb2_5_1']=function(it){var q=String(it.q||''),a=String(it.a||'');var m=q.replace(/\s/g,' ').match(/(\d[\d ]*?)\s*([+−-])\s*(\d[\d ]*\d|\d)/);if(!m)return 'Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, hàng trăm thẳng hàng trăm. Tính từ phải sang trái.\nVậy kết quả là '+a+'.';var x=+m[1].replace(/ /g,''),y=+m[3].replace(/ /g,''),cong=(m[2]==='+');var r=cong?x+y:x-y;var H=['đơn vị','chục','trăm','nghìn'];var L=['Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục'+(Math.max(x,y)>=100?', hàng trăm thẳng hàng trăm':'')+'. Tính từ phải sang trái:'];var nh=0,n=Math.max(String(x).length,String(y).length);for(var i=0;i<n;i++){var dx=Math.floor(x/Math.pow(10,i))%10,dy=Math.floor(y/Math.pow(10,i))%10;var hx=x>=Math.pow(10,i),hy=y>=Math.pow(10,i);var s='- Hàng '+H[i]+': '; if(cong){var v=dx+dy+nh;if(!hy){s+=(nh?dx+' thêm '+nh+' bằng '+v:'hạ '+dx);}else if(!hx){s+=(nh?dy+' thêm '+nh+' bằng '+v:'hạ '+dy);}else{s+=dx+' cộng '+dy+' bằng '+(dx+dy)+(nh?', thêm '+nh+' bằng '+v:'');}  if(v>=10&&i<n-1){s+=', viết '+(v%10)+', nhớ 1';nh=1;}else{s+=', viết '+v;nh=0;}} else{var tr=dy+nh;if(!hy&&!nh){s+='hạ '+dx+', viết '+dx;}else{var pre=nh?(hy?dy+' thêm 1 bằng '+tr+'; ':''):'';if(dx>=tr){s+=pre+dx+' trừ '+tr+' bằng '+(dx-tr)+', viết '+(dx-tr);nh=0;}else{s+=pre+(10+dx)+' trừ '+tr+' bằng '+(10+dx-tr)+', viết '+(10+dx-tr)+', nhớ 1';nh=1;}}  if(i>0&&r<Math.pow(10,i)){s=s.replace(/, viết 0$/,', không viết 0 (chữ số 0 ở bên trái không cần viết)');}} L.push(s+'.');}if(cong&&nh){L.push('- Viết 1 sang hàng '+H[n]+'.');}L.push('Vậy '+x+' '+m[2]+' '+y+' = '+(String(r)===a.trim()?r:a)+'.');return L.join('\n');};
LG['tb2_61_1']=function(it){var q=String(it.q||''),a=String(it.a||'');var m=q.replace(/\s/g,' ').match(/(\d[\d ]*?)\s*([+−-])\s*(\d[\d ]*\d|\d)/);if(!m)return 'Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, hàng trăm thẳng hàng trăm. Tính từ phải sang trái.\nVậy kết quả là '+a+'.';var x=+m[1].replace(/ /g,''),y=+m[3].replace(/ /g,''),cong=(m[2]==='+');var r=cong?x+y:x-y;var H=['đơn vị','chục','trăm','nghìn'];var L=['Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục'+(Math.max(x,y)>=100?', hàng trăm thẳng hàng trăm':'')+'. Tính từ phải sang trái:'];var nh=0,n=Math.max(String(x).length,String(y).length);for(var i=0;i<n;i++){var dx=Math.floor(x/Math.pow(10,i))%10,dy=Math.floor(y/Math.pow(10,i))%10;var hx=x>=Math.pow(10,i),hy=y>=Math.pow(10,i);var s='- Hàng '+H[i]+': '; if(cong){var v=dx+dy+nh;if(!hy){s+=(nh?dx+' thêm '+nh+' bằng '+v:'hạ '+dx);}else if(!hx){s+=(nh?dy+' thêm '+nh+' bằng '+v:'hạ '+dy);}else{s+=dx+' cộng '+dy+' bằng '+(dx+dy)+(nh?', thêm '+nh+' bằng '+v:'');}  if(v>=10&&i<n-1){s+=', viết '+(v%10)+', nhớ 1';nh=1;}else{s+=', viết '+v;nh=0;}} else{var tr=dy+nh;if(!hy&&!nh){s+='hạ '+dx+', viết '+dx;}else{var pre=nh?(hy?dy+' thêm 1 bằng '+tr+'; ':''):'';if(dx>=tr){s+=pre+dx+' trừ '+tr+' bằng '+(dx-tr)+', viết '+(dx-tr);nh=0;}else{s+=pre+(10+dx)+' trừ '+tr+' bằng '+(10+dx-tr)+', viết '+(10+dx-tr)+', nhớ 1';nh=1;}}  if(i>0&&r<Math.pow(10,i)){s=s.replace(/, viết 0$/,', không viết 0 (chữ số 0 ở bên trái không cần viết)');}} L.push(s+'.');}if(cong&&nh){L.push('- Viết 1 sang hàng '+H[n]+'.');}L.push('Vậy '+x+' '+m[2]+' '+y+' = '+(String(r)===a.trim()?r:a)+'.');return L.join('\n');};
LG['tb2_59_2']=function(it){var q=String(it.q||''),a=String(it.a||'');var t=q.replace(/\s/g,' ');var m;if(m=t.match(/(\d+)\s*\+\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+A+' = '+(C-A)+'.\nThử lại: '+A+' + '+(C-A)+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*\+\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+B+' = '+(C-B)+'.\nThử lại: '+(C-B)+' + '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*[−-]\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số bị trừ.\nMuốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+C+' + '+B+' = '+(C+B)+'.\nThử lại: '+(C+B)+' − '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(\d+)\s*[−-]\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số trừ.\nMuốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+A+' − '+C+' = '+(A-C)+'.\nThử lại: '+A+' − '+(A-C)+' = '+C+'.\nVậy số cần điền là '+a+'.';}return 'Dựa vào mối quan hệ giữa các thành phần của phép tính để tìm số còn thiếu, rồi thử lại.\nVậy số cần điền là '+a+'.';};
LG['tb2_60_2']=function(it){var q=String(it.q||''),a=String(it.a||'');var t=q.replace(/\s/g,' ');var m;if(m=t.match(/(\d+)\s*\+\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+A+' = '+(C-A)+'.\nThử lại: '+A+' + '+(C-A)+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*\+\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+B+' = '+(C-B)+'.\nThử lại: '+(C-B)+' + '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*[−-]\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số bị trừ.\nMuốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+C+' + '+B+' = '+(C+B)+'.\nThử lại: '+(C+B)+' − '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(\d+)\s*[−-]\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số trừ.\nMuốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+A+' − '+C+' = '+(A-C)+'.\nThử lại: '+A+' − '+(A-C)+' = '+C+'.\nVậy số cần điền là '+a+'.';}return 'Dựa vào mối quan hệ giữa các thành phần của phép tính để tìm số còn thiếu, rồi thử lại.\nVậy số cần điền là '+a+'.';};
LG['tb2_5_2']=function(it){var q=String(it.q||''),a=String(it.a||'');var t=q.replace(/\s/g,' ');var m;if(m=t.match(/(\d+)\s*\+\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+A+' = '+(C-A)+'.\nThử lại: '+A+' + '+(C-A)+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*\+\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+B+' = '+(C-B)+'.\nThử lại: '+(C-B)+' + '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*[−-]\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số bị trừ.\nMuốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+C+' + '+B+' = '+(C+B)+'.\nThử lại: '+(C+B)+' − '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(\d+)\s*[−-]\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số trừ.\nMuốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+A+' − '+C+' = '+(A-C)+'.\nThử lại: '+A+' − '+(A-C)+' = '+C+'.\nVậy số cần điền là '+a+'.';}return 'Dựa vào mối quan hệ giữa các thành phần của phép tính để tìm số còn thiếu, rồi thử lại.\nVậy số cần điền là '+a+'.';};
LG['tb2_61_2']=function(it){var q=String(it.q||''),a=String(it.a||'');var t=q.replace(/\s/g,' ');var m;if(m=t.match(/(\d+)\s*\+\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+A+' = '+(C-A)+'.\nThử lại: '+A+' + '+(C-A)+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*\+\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số hạng chưa biết.\nMuốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+C+' − '+B+' = '+(C-B)+'.\nThử lại: '+(C-B)+' + '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(…|\.\.\.|\?)\s*[−-]\s*(\d+)\s*=\s*(\d+)/)){var B=+m[2],C=+m[3];return 'Số cần tìm là số bị trừ.\nMuốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+C+' + '+B+' = '+(C+B)+'.\nThử lại: '+(C+B)+' − '+B+' = '+C+'.\nVậy số cần điền là '+a+'.';}if(m=t.match(/(\d+)\s*[−-]\s*(…|\.\.\.|\?)\s*=\s*(\d+)/)){var A=+m[1],C=+m[3];return 'Số cần tìm là số trừ.\nMuốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+A+' − '+C+' = '+(A-C)+'.\nThử lại: '+A+' − '+(A-C)+' = '+C+'.\nVậy số cần điền là '+a+'.';}return 'Dựa vào mối quan hệ giữa các thành phần của phép tính để tìm số còn thiếu, rồi thử lại.\nVậy số cần điền là '+a+'.';};
LG['tb2_59_3']=function(it){var q=String(it.q||''),a=String(it.a||'');var ds=function(kq,vat){var dv=vat.split(' ')[0];return (String(kq)+' '+dv===a.trim())?kq+' '+vat:a;};var m=q.match(/^(.+?) có (\d+) (.+?), (.+?) có (\d+) (.+?)\./);if(!m)return 'Muốn biết cả hai bạn có bao nhiêu, ta làm phép cộng.\nĐáp số: '+a+'.';var x=+m[2],y=+m[5],vat=m[3],dv=vat.split(' ')[0];return 'Bài giải\nCả hai bạn có số '+vat+' là:\n'+x+' + '+y+' = '+(x+y)+' ('+dv+')\nĐáp số: '+ds(x+y,vat)+'.';};
LG['tb2_60_3']=function(it){var q=String(it.q||''),a=String(it.a||'');var ds=function(kq,vat){var dv=vat.split(' ')[0];return (String(kq)+' '+dv===a.trim())?kq+' '+vat:a;};var m=q.match(/^(.+?) có (\d+) (.+?), (.+?) có (\d+) (.+?)\./);if(!m)return 'Muốn biết cả hai bạn có bao nhiêu, ta làm phép cộng.\nĐáp số: '+a+'.';var x=+m[2],y=+m[5],vat=m[3],dv=vat.split(' ')[0];return 'Bài giải\nCả hai bạn có số '+vat+' là:\n'+x+' + '+y+' = '+(x+y)+' ('+dv+')\nĐáp số: '+ds(x+y,vat)+'.';};
LG['tb2_59_4']=function(it){var q=String(it.q||''),a=String(it.a||'');var ds=function(kq,vat){var dv=vat.split(' ')[0];return (String(kq)+' '+dv===a.trim())?kq+' '+vat:a;};var m=q.match(/thứ nhất có (\d+) (.+?), thùng thứ hai có (\d+) .+?lấy ra (\d+) /);if(!m)return 'Tính số còn lại ở thùng thứ nhất (phép trừ), rồi cộng với số ở thùng thứ hai.\nĐáp số: '+a+'.';var x=+m[1],vat=m[2],y=+m[3],z=+m[4],dv=vat.split(' ')[0];var c=x-z;return 'Bài giải\nThùng thứ nhất còn lại số '+vat+' là:\n'+x+' − '+z+' = '+c+' ('+dv+')\nLúc này cả hai thùng còn số '+vat+' là:\n'+c+' + '+y+' = '+(c+y)+' ('+dv+')\nĐáp số: '+ds(c+y,vat)+'.';};
LG['tb2_60_4']=function(it){var q=String(it.q||''),a=String(it.a||'');var ds=function(kq,vat){var dv=vat.split(' ')[0];return (String(kq)+' '+dv===a.trim())?kq+' '+vat:a;};var m=q.match(/thứ nhất có (\d+) (.+?), thùng thứ hai có (\d+) .+?lấy ra (\d+) /);if(!m)return 'Tính số còn lại ở thùng thứ nhất (phép trừ), rồi cộng với số ở thùng thứ hai.\nĐáp số: '+a+'.';var x=+m[1],vat=m[2],y=+m[3],z=+m[4],dv=vat.split(' ')[0];var c=x-z;return 'Bài giải\nThùng thứ nhất còn lại số '+vat+' là:\n'+x+' − '+z+' = '+c+' ('+dv+')\nLúc này cả hai thùng còn số '+vat+' là:\n'+c+' + '+y+' = '+(c+y)+' ('+dv+')\nĐáp số: '+ds(c+y,vat)+'.';};
LG['tb2_5_3']=function(it){var q=String(it.q||''),a=String(it.a||'');var ds=function(kq,vat){var dv=vat.split(' ')[0];return (String(kq)+' '+dv===a.trim())?kq+' '+vat:a;};var m=q.match(/có (\d+) (.+?), đã bán (\d+) /);if(!m)return 'Muốn biết còn lại bao nhiêu, ta lấy số lúc đầu trừ đi số đã bán.\nĐáp số: '+a+'.';var x=+m[1],vat=m[2],y=+m[3],dv=vat.split(' ')[0];return 'Bài giải\nCửa hàng còn lại số '+vat+' là:\n'+x+' − '+y+' = '+(x-y)+' ('+dv+')\nĐáp số: '+ds(x-y,vat)+'.';};
LG['tb2_5_4']=function(it){var q=String(it.q||''),a=String(it.a||'');var ds=function(kq,vat){var dv=vat.split(' ')[0];return (String(kq)+' '+dv===a.trim())?kq+' '+vat:a;};var m=q.match(/có (\d+) (.+?)\. Lần đầu chuyển đi (\d+) .+?lần sau chuyển đi (\d+) /);if(!m)return 'Lấy số lúc đầu trừ đi số chuyển lần đầu, rồi trừ tiếp số chuyển lần sau.\nĐáp số: '+a+'.';var x=+m[1],vat=m[2],y=+m[3],z=+m[4],dv=vat.split(' ')[0];var c=x-y;return 'Bài giải\nSau lần đầu, kho còn lại số '+vat+' là:\n'+x+' − '+y+' = '+c+' ('+dv+')\nKho còn lại số '+vat+' là:\n'+c+' − '+z+' = '+(c-z)+' ('+dv+')\nĐáp số: '+ds(c-z,vat)+'.';};

LG['tb2_61_3']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?), đã bán (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nMuốn biết còn lại bao nhiêu, ta lấy số lúc đầu trừ đi số đã bán.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],r=a-b,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSố '+dv+' cửa hàng còn lại là:\n'+a+' − '+b+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb2_61_4']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?)\. Lần đầu chuyển đi (\d+)[^,]*, lần sau chuyển đi (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nLấy số lúc đầu trừ đi số chuyển đi lần đầu, rồi trừ tiếp số chuyển đi lần sau.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],c=+m[4],x=a-b,r=x-c,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSau lần đầu, kho còn lại số '+dv+' là:\n'+a+' − '+b+' = '+x+' ('+u+')\nSau lần sau, kho còn lại số '+dv+' là:\n'+x+' − '+c+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb2_62_1']=function(it){
var m=String(it.q).replace(/\s+/g,' ').match(/(\d+)\s*[−\-–]\s*(\d+)/);
if(!m)return 'Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, hàng trăm thẳng hàng trăm, rồi trừ từ phải sang trái.\nVậy kết quả là '+it.a+'.';
var a=+m[1],b=+m[2],r=a-b;
var da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);
var ten=['đơn vị','chục','trăm'],L=['Đặt tính: viết '+b+' dưới '+a+' sao cho các chữ số cùng hàng thẳng cột với nhau, rồi trừ từ phải sang trái:'];
var nho=0;
for(var i=0;i<da.length;i++){
 var x=da[i],y=(db[i]||0),s='';
 if(i>=db.length&&nho===0){ if(i===da.length-1&&x===0)break; s='Hàng '+ten[i]+': hạ '+x+', viết '+x+'.'; L.push('• '+s); continue;}
 var y2=y+nho, pre='';
 if(nho&&i<db.length){pre=y+' thêm 1 bằng '+y2+'; ';}
 if(x>=y2){var d=x-y2; if(i>=String(r).length&&d===0&&i>0){s=pre+x+' trừ '+y2+' bằng 0 (không viết).';}else s=pre+x+' trừ '+y2+' bằng '+d+', viết '+d+'.'; nho=0;}
 else {var d2=x+10-y2; s=pre+x+' không trừ được '+y2+', lấy '+(x+10)+' trừ '+y2+' bằng '+d2+', viết '+d2+', nhớ 1.'; nho=1;}
 L.push('• Hàng '+ten[i]+': '+s);
}
L.push('Vậy '+a+' − '+b+' = '+(String(r)===String(it.a).trim()?r:it.a)+'.');
return L.join('\n');
};
LG['tb2_62_2']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/…\s*[−\-–]\s*(\d+)\s*=\s*(\d+)/);
if(m){var b=+m[1],c=+m[2];var r=b+c;var rs=String(r)===String(it.a).trim()?r:it.a;
 return 'Số cần tìm là số bị trừ.\nMuốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+c+' + '+b+' = '+rs+'.\nThử lại: '+rs+' − '+b+' = '+c+'. Vậy số cần điền là '+rs+'.';}
m=q.match(/(\d+)\s*[−\-–]\s*…\s*=\s*(\d+)/);
if(m){var a=+m[1],c2=+m[2];var r2=a-c2;var rs2=String(r2)===String(it.a).trim()?r2:it.a;
 return 'Số cần tìm là số trừ.\nMuốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+a+' − '+c2+' = '+rs2+'.\nThử lại: '+a+' − '+rs2+' = '+c2+'. Vậy số cần điền là '+rs2+'.';}
m=q.match(/…\s*\+\s*(\d+)\s*=\s*(\d+)|(\d+)\s*\+\s*…\s*=\s*(\d+)/);
if(m){var h=+(m[1]||m[3]),t=+(m[2]||m[4]);return 'Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+t+' − '+h+' = '+it.a+'.\nVậy số cần điền là '+it.a+'.';}
return 'Dựa vào mối quan hệ giữa các thành phần của phép tính để tìm số còn thiếu.\nVậy số cần điền là '+it.a+'.';
};
LG['tb2_62_3']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?), đã bán (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nMuốn biết còn lại bao nhiêu, ta lấy số lúc đầu trừ đi số đã bán.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],r=a-b,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSố '+dv+' cửa hàng còn lại là:\n'+a+' − '+b+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb2_62_4']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?)\. Lần đầu chuyển đi (\d+)[^,]*, lần sau chuyển đi (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nLấy số lúc đầu trừ đi số chuyển đi lần đầu, rồi trừ tiếp số chuyển đi lần sau.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],c=+m[4],x=a-b,r=x-c,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSau lần đầu, kho còn lại số '+dv+' là:\n'+a+' − '+b+' = '+x+' ('+u+')\nSau lần sau, kho còn lại số '+dv+' là:\n'+x+' − '+c+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb2_69_1']=function(it){
var m=String(it.q).replace(/\s+/g,' ').match(/(\d+)\s*[−\-–]\s*(\d+)/);
if(!m)return 'Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, hàng trăm thẳng hàng trăm, rồi trừ từ phải sang trái.\nVậy kết quả là '+it.a+'.';
var a=+m[1],b=+m[2],r=a-b;
var da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);
var ten=['đơn vị','chục','trăm'],L=['Đặt tính: viết '+b+' dưới '+a+' sao cho các chữ số cùng hàng thẳng cột với nhau, rồi trừ từ phải sang trái:'];
var nho=0;
for(var i=0;i<da.length;i++){
 var x=da[i],y=(db[i]||0),s='';
 if(i>=db.length&&nho===0){ if(i===da.length-1&&x===0)break; s='Hàng '+ten[i]+': hạ '+x+', viết '+x+'.'; L.push('• '+s); continue;}
 var y2=y+nho, pre='';
 if(nho&&i<db.length){pre=y+' thêm 1 bằng '+y2+'; ';}
 if(x>=y2){var d=x-y2; if(i>=String(r).length&&d===0&&i>0){s=pre+x+' trừ '+y2+' bằng 0 (không viết).';}else s=pre+x+' trừ '+y2+' bằng '+d+', viết '+d+'.'; nho=0;}
 else {var d2=x+10-y2; s=pre+x+' không trừ được '+y2+', lấy '+(x+10)+' trừ '+y2+' bằng '+d2+', viết '+d2+', nhớ 1.'; nho=1;}
 L.push('• Hàng '+ten[i]+': '+s);
}
L.push('Vậy '+a+' − '+b+' = '+(String(r)===String(it.a).trim()?r:it.a)+'.');
return L.join('\n');
};
LG['tb2_69_2']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/…\s*[−\-–]\s*(\d+)\s*=\s*(\d+)/);
if(m){var b=+m[1],c=+m[2];var r=b+c;var rs=String(r)===String(it.a).trim()?r:it.a;
 return 'Số cần tìm là số bị trừ.\nMuốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+c+' + '+b+' = '+rs+'.\nThử lại: '+rs+' − '+b+' = '+c+'. Vậy số cần điền là '+rs+'.';}
m=q.match(/(\d+)\s*[−\-–]\s*…\s*=\s*(\d+)/);
if(m){var a=+m[1],c2=+m[2];var r2=a-c2;var rs2=String(r2)===String(it.a).trim()?r2:it.a;
 return 'Số cần tìm là số trừ.\nMuốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+a+' − '+c2+' = '+rs2+'.\nThử lại: '+a+' − '+rs2+' = '+c2+'. Vậy số cần điền là '+rs2+'.';}
m=q.match(/…\s*\+\s*(\d+)\s*=\s*(\d+)|(\d+)\s*\+\s*…\s*=\s*(\d+)/);
if(m){var h=+(m[1]||m[3]),t=+(m[2]||m[4]);return 'Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+t+' − '+h+' = '+it.a+'.\nVậy số cần điền là '+it.a+'.';}
return 'Dựa vào mối quan hệ giữa các thành phần của phép tính để tìm số còn thiếu.\nVậy số cần điền là '+it.a+'.';
};
LG['tb2_69_3']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?), đã bán (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nMuốn biết còn lại bao nhiêu, ta lấy số lúc đầu trừ đi số đã bán.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],r=a-b,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSố '+dv+' cửa hàng còn lại là:\n'+a+' − '+b+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb2_69_4']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?)\. Lần đầu chuyển đi (\d+)[^,]*, lần sau chuyển đi (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nLấy số lúc đầu trừ đi số chuyển đi lần đầu, rồi trừ tiếp số chuyển đi lần sau.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],c=+m[4],x=a-b,r=x-c,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSau lần đầu, kho còn lại số '+dv+' là:\n'+a+' − '+b+' = '+x+' ('+u+')\nSau lần sau, kho còn lại số '+dv+' là:\n'+x+' − '+c+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb2_70_1']=function(it){
var m=String(it.q).replace(/\s+/g,' ').match(/(\d+)\s*[−\-–]\s*(\d+)/);
if(!m)return 'Đặt tính thẳng cột: hàng đơn vị thẳng hàng đơn vị, hàng chục thẳng hàng chục, hàng trăm thẳng hàng trăm, rồi trừ từ phải sang trái.\nVậy kết quả là '+it.a+'.';
var a=+m[1],b=+m[2],r=a-b;
var da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);
var ten=['đơn vị','chục','trăm'],L=['Đặt tính: viết '+b+' dưới '+a+' sao cho các chữ số cùng hàng thẳng cột với nhau, rồi trừ từ phải sang trái:'];
var nho=0;
for(var i=0;i<da.length;i++){
 var x=da[i],y=(db[i]||0),s='';
 if(i>=db.length&&nho===0){ if(i===da.length-1&&x===0)break; s='Hàng '+ten[i]+': hạ '+x+', viết '+x+'.'; L.push('• '+s); continue;}
 var y2=y+nho, pre='';
 if(nho&&i<db.length){pre=y+' thêm 1 bằng '+y2+'; ';}
 if(x>=y2){var d=x-y2; if(i>=String(r).length&&d===0&&i>0){s=pre+x+' trừ '+y2+' bằng 0 (không viết).';}else s=pre+x+' trừ '+y2+' bằng '+d+', viết '+d+'.'; nho=0;}
 else {var d2=x+10-y2; s=pre+x+' không trừ được '+y2+', lấy '+(x+10)+' trừ '+y2+' bằng '+d2+', viết '+d2+', nhớ 1.'; nho=1;}
 L.push('• Hàng '+ten[i]+': '+s);
}
L.push('Vậy '+a+' − '+b+' = '+(String(r)===String(it.a).trim()?r:it.a)+'.');
return L.join('\n');
};
LG['tb2_70_2']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/…\s*[−\-–]\s*(\d+)\s*=\s*(\d+)/);
if(m){var b=+m[1],c=+m[2];var r=b+c;var rs=String(r)===String(it.a).trim()?r:it.a;
 return 'Số cần tìm là số bị trừ.\nMuốn tìm số bị trừ, ta lấy hiệu cộng với số trừ: '+c+' + '+b+' = '+rs+'.\nThử lại: '+rs+' − '+b+' = '+c+'. Vậy số cần điền là '+rs+'.';}
m=q.match(/(\d+)\s*[−\-–]\s*…\s*=\s*(\d+)/);
if(m){var a=+m[1],c2=+m[2];var r2=a-c2;var rs2=String(r2)===String(it.a).trim()?r2:it.a;
 return 'Số cần tìm là số trừ.\nMuốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu: '+a+' − '+c2+' = '+rs2+'.\nThử lại: '+a+' − '+rs2+' = '+c2+'. Vậy số cần điền là '+rs2+'.';}
m=q.match(/…\s*\+\s*(\d+)\s*=\s*(\d+)|(\d+)\s*\+\s*…\s*=\s*(\d+)/);
if(m){var h=+(m[1]||m[3]),t=+(m[2]||m[4]);return 'Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết: '+t+' − '+h+' = '+it.a+'.\nVậy số cần điền là '+it.a+'.';}
return 'Dựa vào mối quan hệ giữa các thành phần của phép tính để tìm số còn thiếu.\nVậy số cần điền là '+it.a+'.';
};
LG['tb2_70_3']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?), đã bán (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nMuốn biết còn lại bao nhiêu, ta lấy số lúc đầu trừ đi số đã bán.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],r=a-b,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSố '+dv+' cửa hàng còn lại là:\n'+a+' − '+b+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb2_70_4']=function(it){
var q=String(it.q).replace(/\s+/g,' ');
var m=q.match(/có (\d+) ([^,.]+?)\. Lần đầu chuyển đi (\d+)[^,]*, lần sau chuyển đi (\d+)/);
var u=String(it.a).trim().replace(/^\d+\s*/,'');
if(!m)return 'Bài giải\nLấy số lúc đầu trừ đi số chuyển đi lần đầu, rồi trừ tiếp số chuyển đi lần sau.\nĐáp số: '+it.a+'.';
var a=+m[1],dv=m[2],b=+m[3],c=+m[4],x=a-b,r=x-c,an=String(it.a).trim().match(/^\d+/);var rs=(an&&+an[0]===r)?r:(an?an[0]:r);
return 'Bài giải\nSau lần đầu, kho còn lại số '+dv+' là:\n'+a+' − '+b+' = '+x+' ('+u+')\nSau lần sau, kho còn lại số '+dv+' là:\n'+x+' − '+c+' = '+rs+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['thanhphan2']=function(it){
var q=String(it.q).replace(/\s+/g,' ');var a=String(it.a).trim();
var m=q.match(/(\d+)\s*([+−\-–])\s*(\d+)\s*=\s*(\d+)/);
if(!m)return 'Trong phép cộng: số hạng + số hạng = tổng. Trong phép trừ: số bị trừ − số trừ = hiệu.\nVậy đó là '+a+'.';
var x=m[1],y=m[3],z=m[4];var hs=q.match(/(số [\d ]+(?:và [\d ]+)?)gọi là gì/);var hn=hs?hs[1].trim():'số đó';
if(m[2]==='+')return 'Trong phép cộng '+x+' + '+y+' = '+z+': '+x+' và '+y+' là số hạng, '+z+' là tổng.\nVậy '+hn+' gọi là '+a+'.';
return 'Trong phép trừ '+x+' − '+y+' = '+z+': '+x+' là số bị trừ, '+y+' là số trừ, '+z+' là hiệu.\nVậy '+hn+' gọi là '+a+'.';
};

LG['thembot2']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/có\s+(\d+)\s+([^,]+?),\s*(?:mẹ\s+)?(đặt thêm|thêm|lấy đi|đã lấy đi|bớt)\s+(\d+)/i);if(!m){m=q.match(/có\s+(\d+)\s+([^,]+?),.*?(đặt thêm|lấy đi)\s+(\d+)/i);}if(!m)return 'Đọc kĩ đề, xác định bài toán thêm (phép cộng) hay bớt (phép trừ).\nĐáp số: '+a;var x=+m[1],y=+m[4],dv=m[2].trim(),them=/thêm/.test(m[3]);var r=them?x+y:x-y;var ln=them?['Bài giải','Trên đĩa có tất cả số '+dv+' là:',x+' + '+y+' = '+r+' ('+dv+')']:['Bài giải','Số '+dv+' còn lại là:',x+' − '+y+' = '+r+' ('+dv+')'];ln.push('Đáp số: '+a);return ln.join('\n');};
LG['thuaso2']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)\s*[×x]\s*(\d+)(?:\s*=\s*(\d+))?/);if(!m)return 'Trong phép nhân, các số được nhân gọi là thừa số, kết quả gọi là tích.\nVậy đáp án: '+a;var x=m[1],y=m[2],t=m[3]||String(x*y);var s='Trong phép nhân '+x+' × '+y+' = '+t+':\n'+x+' và '+y+' là thừa số; '+t+' là tích.';if(/tích/.test(a))s+='\nVậy số '+t+' gọi là tích.';else s+='\nVậy '+x+' và '+y+' gọi là thừa số.';return s;};
LG['tien2']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var N=function(s){return +String(s).replace(/\s/g,'');};var m;
if((m=q.match(/(\d+)\s+tờ\s+(\d[\d ]*\d|\d)\s*đồng/))){var k=+m[1],v=N(m[2]),d=[];for(var i=1;i<=k;i++)d.push(f(v*i));return 'Mỗi tờ '+f(v)+' đồng, có '+k+' tờ. Ta đếm thêm '+f(v)+' đồng:\n'+d.join(', ')+'.\nVậy em được mẹ cho '+a+'.';}
if((m=q.match(/tờ\s+(\d[\d ]*\d|\d)\s*đồng.*?hết\s+(\d[\d ]*\d|\d)\s*đồng/))){var c=N(m[1]),e=N(m[2]);return 'Bài giải\nSố tiền người bán trả lại là:\n'+f(c)+' − '+f(e)+' = '+f(c-e)+' (đồng)\nĐáp số: '+a+'.';}
if((m=q.match(/hết\s+(\d[\d ]*\d|\d)\s*đồng.*?hết\s+(\d[\d ]*\d|\d)\s*đồng/))){var u=N(m[1]),w=N(m[2]);return 'Bài giải\nSố tiền phải trả tất cả là:\n'+f(u)+' + '+f(w)+' = '+f(u+w)+' (đồng)\nĐáp số: '+a+'.';}
return 'Đọc kĩ đề: gộp hai số tiền thì làm phép cộng, tìm tiền trả lại thì làm phép trừ.\nĐáp số: '+a;};
LG['tn100']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)\s*[–−-]\s*(\d+)/);if(!m)return 'Đặt tính rồi trừ từ phải sang trái.\nĐáp số: '+a;var x=+m[1],y=+m[2],r=x-y;var xc=Math.floor(x/10),xd=x%10,yc=Math.floor(y/10),yd=y%10;var ln=['Đặt tính: viết '+y+' dưới '+x+' sao cho đơn vị thẳng cột đơn vị, chục thẳng cột chục. Trừ từ phải sang trái:'];var nho=0;if(xd<yd){ln.push('• '+xd+' không trừ được '+yd+', lấy '+(xd+10)+' trừ '+yd+' bằng '+(xd+10-yd)+', viết '+(xd+10-yd)+', nhớ 1.');nho=1;}else ln.push('• '+xd+' trừ '+yd+' bằng '+(xd-yd)+', viết '+(xd-yd)+'.');var t=yc+nho;if(yc>0&&nho)ln.push('• '+yc+' thêm 1 bằng '+t+'; '+xc+' trừ '+t+' bằng '+(xc-t)+(xc-t?', viết '+(xc-t)+'.':' (không viết).'));else if(t>0)ln.push('• '+xc+' trừ '+t+' bằng '+(xc-t)+(xc-t?', viết '+(xc-t)+'.':' (không viết).'));else ln.push('• Hạ '+xc+', viết '+xc+'.');ln.push('Vậy '+x+' − '+y+' = '+a+'.');return ln.join('\n');};
LG['trontram2']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)\s*\.\.\.\s*(\d+)/);if(m){var x=+m[1],y=+m[2],s=x>y?'>':(x<y?'<':'=');return 'So sánh hai số tròn trăm, ta so sánh số trăm: '+x+' gồm '+x/100+' trăm, '+y+' gồm '+y/100+' trăm.\nVì '+x/100+' '+s+' '+y/100+' nên '+x+' '+s+' '+y+'.\nVậy điền dấu: '+a;}m=q.match(/liền sau\s+(\d+)/);if(m){var n=+m[1];return 'Hai số tròn chục liền nhau hơn kém nhau 1 chục (10 đơn vị). Đếm thêm 10: '+n+', '+(n+10)+'.\nVậy số tròn chục liền sau '+n+' là '+a+'.';}return 'Đọc kĩ đề và so sánh/đếm theo chục, theo trăm.\nĐáp án: '+a;};
LG['tru20']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)\s*[–−-]\s*(\d+)/);if(!m)return 'Tách số trừ để trừ cho tròn 10 rồi trừ tiếp.\nĐáp số: '+a;var x=+m[1],y=+m[2],u=x-10;if(u>0&&y>u){var c=y-u;return 'Tách '+y+' = '+u+' + '+c+'.\n'+x+' − '+u+' = 10; 10 − '+c+' = '+(10-c)+'.\nVậy '+x+' − '+y+' = '+a+'.';}return 'Ta có '+x+' − '+y+' = '+(x-y)+'.\nVậy '+x+' − '+y+' = '+a+'.';};
LG['viettong2']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/số\s+(\d+)/);if(!m)return 'Tách số thành trăm, chục, đơn vị.\n'+a;var n=+m[1],tr=Math.floor(n/100),ch=Math.floor(n/10)%10,dv=n%10;return 'Số '+n+' gồm '+tr+' trăm, '+ch+' chục và '+dv+' đơn vị.\n'+tr+' trăm = '+tr*100+', '+ch+' chục = '+ch*10+', '+dv+' đơn vị = '+dv+'.\nVậy '+a+'.';};

LG['bangsl3']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=[...q.matchAll(/(Tổ\s*\d+)\s*:\s*(\d+)/g)].map(function(x){return [x[1],+x[2]];});
  var ds=m.map(function(x){return x[0]+': '+x[1]+' cây';}).join('; ');
  if(/bao nhiêu/.test(q)){
    var s=m.reduce(function(p,c){return p+c[1];},0);
    return 'Đọc bảng số liệu: '+ds+'.\nBài giải\nSố cây cả bốn tổ trồng được là:\n'+m.map(function(x){return x[1];}).join(' + ')+' = '+s+' (cây)\nĐáp số: '+a+'.';
  }
  var nhieu=/nhiều nhất/.test(q);
  var v=m.map(function(x){return x[1];});var t=nhieu?Math.max.apply(null,v):Math.min.apply(null,v);
  return 'Đọc bảng số liệu: '+ds+'.\nSo sánh các số '+v.join(', ')+' ta thấy số '+(nhieu?'lớn':'bé')+' nhất là '+t+'.\nVậy tổ trồng '+(nhieu?'nhiều':'ít')+' nhất là: '+a+'.';
};
LG['c1']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.replace(/(\d) (?=\d{3})/g,'$1').match(/(\d+)\s*:\s*(\d+)/);
  if(!m)return 'Đặt tính rồi chia lần lượt từ trái sang phải.\nVậy kết quả là: '+a+'.';
  var A=m[1],b=+m[2],L=[],cur=0,started=false,ln=0;
  for(var i=0;i<A.length;i++){
    var d=+A[i];
    if(started){cur=cur*10+d;}else{cur=cur*10+d;}
    if(!started&&cur<b&&i<A.length-1){continue;}
    var qd=Math.floor(cur/b),r=cur-qd*b;
    var lay=(!started&&i>0)?'Lấy '+cur:(started?'Hạ '+d+', được '+cur:'Lấy '+cur);
    var line=lay+'; '+cur+' chia '+b+' được '+qd+', viết '+qd+';\n   '+qd+' nhân '+b+' bằng '+(qd*b)+'; '+cur+' trừ '+(qd*b)+' bằng '+r+'.';
    L.push((++ln)+') '+line);started=true;cur=r;
  }
  var Q=Math.floor(+A/b),R=+A%b;
  return 'Đặt tính '+A+' : '+b+' rồi chia từ trái sang phải:\n'+L.join('\n')+'\nVậy '+A+' : '+b+' = '+(R?Q+' (dư '+R+')':Q)+'.';
};
LG['c100k']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.replace(/(\d) (?=\d{3})/g,'$1').match(/(\d+)\s*([+\-–−])\s*(\d+)/);
  var fmt=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
  if(!m)return 'Đặt tính thẳng hàng rồi tính từ phải sang trái.\nVậy kết quả là: '+a+'.';
  var x=m[1],y=m[3],cong=m[2]==='+';
  var H=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn','hàng trăm nghìn'];
  var n=Math.max(x.length,y.length),c=0,L=[];
  for(var i=0;i<n;i++){
    var dx=+(x[x.length-1-i]||0),dy=+(y[y.length-1-i]||0),s,ln;
    var last=(i===n-1);
    if(cong){
      s=dx+dy+c;var t=dx+' + '+dy+(c?' + '+c+' (nhớ)':'')+' = '+s;
      if(s>=10&&!last){ln=t+', viết '+(s%10)+', nhớ 1.';c=1;}else{ln=t+', viết '+s+'.';c=0;}
    }else{
      var sub=dy+c;
      var pre=c?dy+' thêm 1 bằng '+sub+'; ':'';
      if(dx<sub){ln=pre+dx+' không trừ được '+sub+', lấy '+(dx+10)+' trừ '+sub+' bằng '+(dx+10-sub)+', viết '+(dx+10-sub)+', nhớ 1.';c=1;}
      else{var r=dx-sub;ln=pre+dx+' trừ '+sub+' bằng '+r+(last&&r===0&&i>0?' (không viết).':', viết '+r+'.');c=0;}
    }
    L.push('• '+H[i][0].toUpperCase()+H[i].slice(1)+': '+ln);
  }
  var R=cong?(+x)+(+y):(+x)-(+y);
  return 'Đặt tính: viết '+fmt(y)+' dưới '+fmt(x)+' sao cho các chữ số cùng hàng thẳng cột, rồi '+(cong?'cộng':'trừ')+' từ phải sang trái:\n'+L.join('\n')+'\nVậy '+fmt(x)+' '+(cong?'+':'−')+' '+fmt(y)+' = '+a+'.';
};
LG['chiadu3']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+)\s*:\s*(\d+)/);
  if(!m)return 'Tìm thương lớn nhất sao cho số dư bé hơn số chia.\nVậy kết quả: '+a+'.';
  var A=+m[1],b=+m[2],Q=Math.floor(A/b),R=A%b;
  if(R===0)return A+' chia '+b+' được '+Q+', '+Q+' nhân '+b+' bằng '+A+', '+A+' trừ '+A+' bằng 0.\nVậy '+A+' : '+b+' = '+a+' (phép chia hết).';
  return A+' chia '+b+' được '+Q+', '+Q+' nhân '+b+' bằng '+(Q*b)+', '+A+' trừ '+(Q*b)+' bằng '+R+'.\nSố dư '+R+' bé hơn số chia '+b+'.\nVậy '+A+' : '+b+' = '+Q+' (dư '+R+'). Viết kết quả: '+a+'.';
};
LG['chuvi3']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if(/tam giác|tứ giác/.test(q)){
    var ns=(q.match(/(\d+)\s*cm/g)||[]).map(function(s){return parseInt(s,10);});
    var s=ns.reduce(function(p,c){return p+c;},0);
    return 'Bài giải\nChu vi hình '+(/tam giác/.test(q)?'tam giác':'tứ giác')+' là:\n'+ns.join(' + ')+' = '+s+' (cm)\nĐáp số: '+a+'.';
  }
  if(/chữ nhật/.test(q)&&(m=q.match(/chiều dài\s*(\d+)\s*cm.*?chiều rộng\s*(\d+)\s*cm/))){
    var d=+m[1],r=+m[2];
    return 'Muốn tính chu vi hình chữ nhật, ta lấy chiều dài cộng chiều rộng (cùng đơn vị đo) rồi nhân với 2.\nBài giải\nChu vi hình chữ nhật là:\n('+d+' + '+r+') × 2 = '+((d+r)*2)+' (cm)\nĐáp số: '+a+'.';
  }
  if(/vuông/.test(q)&&(m=q.match(/cạnh\s*(\d+)\s*cm/))){
    var c=+m[1];
    return 'Muốn tính chu vi hình vuông, ta lấy độ dài một cạnh nhân với 4.\nBài giải\nChu vi hình vuông là:\n'+c+' × 4 = '+(c*4)+' (cm)\nĐáp số: '+a+'.';
  }
  return 'Chu vi một hình bằng tổng độ dài các cạnh của hình đó.\nĐáp số: '+a+'.';
};
LG['dientich3']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if(/chữ nhật/.test(q)&&(m=q.match(/chiều dài\s*(\d+)\s*cm.*?chiều rộng\s*(\d+)\s*cm/))){
    var d=+m[1],r=+m[2];
    return 'Muốn tính diện tích hình chữ nhật, ta lấy chiều dài nhân với chiều rộng (cùng đơn vị đo).\nBài giải\nDiện tích hình chữ nhật là:\n'+d+' × '+r+' = '+(d*r)+' (cm²)\nĐáp số: '+a+'.';
  }
  if(/vuông/.test(q)&&(m=q.match(/cạnh\s*(\d+)\s*cm/))){
    var c=+m[1];
    return 'Muốn tính diện tích hình vuông, ta lấy độ dài một cạnh nhân với chính nó.\nBài giải\nDiện tích hình vuông là:\n'+c+' × '+c+' = '+(c*c)+' (cm²)\nĐáp số: '+a+'.';
  }
  return 'Dùng quy tắc tính diện tích hình chữ nhật, hình vuông.\nĐáp số: '+a+'.';
};
LG['cv3']=function(it){
  return /diện tích/.test(String(it.q))?LG['dientich3'](it):LG['chuvi3'](it);
};
LG['dongho3']=function(it){
  var a=String(it.a),m=a.match(/(\d+)\s*giờ(?:\s*(\d+)\s*phút)?/);
  if(!m)return 'Quan sát kim ngắn (chỉ giờ) và kim dài (chỉ phút) trên mặt đồng hồ.\nVậy đồng hồ chỉ: '+a+'.';
  var h=+m[1],p=m[2]?+m[2]:0;
  var s='Quan sát đồng hồ: kim ngắn chỉ giờ, kim dài chỉ phút (kim dài đi từ số này sang số kế tiếp là 5 phút).\n';
  if(p===0)s+='Kim ngắn chỉ đúng số '+h+', kim dài chỉ số 12.\n';
  else s+='Kim ngắn chỉ qua số '+h+' (chưa tới số '+(h%12+1)+'), kim dài chỉ '+(p%5===0?'số '+(p/5):'vạch ứng với '+p+' phút')+(p%5===0?' (tức là '+p+' phút)':'')+'.\n';
  return s+'Vậy đồng hồ chỉ '+a+'.';
};
LG['gam3']=function(it){
  var q=String(it.q),a=String(it.a);
  if(/ki-lô-gam bằng/.test(q))return 'Ghi nhớ: 1 kg = 1000 g.\nVậy 1 ki-lô-gam bằng '+a+' gam.';
  var ns=(q.match(/(\d+)\s*g\b/g)||[]).map(function(s){return parseInt(s,10);});
  if(ns.length>=2){
    if(/hơn|nhẹ hơn|nặng hơn/.test(q)&&!/Cả hai/.test(q)){var D=Math.abs(ns[0]-ns[1]);return 'Bài giải\nSố gam chênh lệch là:\n'+Math.max(ns[0],ns[1])+' − '+Math.min(ns[0],ns[1])+' = '+D+' (g)\nĐáp số: '+a+'.';}
    var s=ns[0]+ns[1];
    return 'Bài giải\nCả hai gói nặng là:\n'+ns[0]+' + '+ns[1]+' = '+s+' (g)\nĐáp số: '+a+'.';
  }
  return 'Thực hiện phép tính với đơn vị gam (g).\nĐáp số: '+a+'.';
};
LG['gap']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if(m=q.match(/Gấp\s*(\d+)\s*lên\s*(\d+)\s*lần/i))return 'Muốn gấp một số lên nhiều lần, ta lấy số đó nhân với số lần.\n'+m[1]+' × '+m[2]+' = '+(+m[1]*+m[2])+'.\nVậy gấp '+m[1]+' lên '+m[2]+' lần được '+a+'.';
  if(m=q.match(/Giảm\s*(\d+)\s*đi\s*(\d+)\s*lần/i))return 'Muốn giảm một số đi nhiều lần, ta lấy số đó chia cho số lần.\n'+m[1]+' : '+m[2]+' = '+Math.floor(+m[1]/+m[2])+'.\nVậy giảm '+m[1]+' đi '+m[2]+' lần được '+a+'.';
  return 'Gấp lên thì làm phép nhân, giảm đi thì làm phép chia.\nĐáp số: '+a+'.';
};
LG['gapmaylan3']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if(m=q.match(/(\d+)\s*gấp mấy lần\s*(\d+)/))return 'Muốn tìm số lớn gấp mấy lần số bé, ta lấy số lớn chia cho số bé.\n'+m[1]+' : '+m[2]+' = '+(+m[1]/+m[2])+'.\nVậy '+m[1]+' gấp '+a+' lần '+m[2]+'.';
  if(m=q.match(/(\d+)\s*bằng một phần mấy của\s*(\d+)/)){var k=+m[2]/+m[1];return 'Trước hết tìm số lớn gấp mấy lần số bé: '+m[2]+' : '+m[1]+' = '+k+'.\n'+m[2]+' gấp '+k+' lần '+m[1]+' nên '+m[1]+' bằng 1/'+k+' của '+m[2]+'.\nVậy '+m[1]+' bằng '+a+' của '+m[2]+'.';}
  return 'Lấy số lớn chia cho số bé.\nĐáp số: '+a+'.';
};
LG['goc3']=function(it){
  var q=String(it.q),a=String(it.a);
  if(/lớn hơn góc vuông/.test(q))return 'Dùng ê ke để so sánh: góc có độ mở lớn hơn góc vuông (nhưng nhỏ hơn góc bẹt) là góc tù.\nVậy đó là '+a+'.';
  if(/nhỏ hơn góc vuông/.test(q))return 'Dùng ê ke để so sánh: góc có độ mở nhỏ hơn góc vuông là góc nhọn.\nVậy đó là '+a+'.';
  if(/bao nhiêu độ/.test(q))return 'Góc vuông là góc trùng khít với góc vuông của ê ke, có số đo 90 độ (90°).\nVậy góc vuông có số đo bằng '+a+' độ.';
  return 'Hai cạnh của góc vuông chung một đỉnh và vuông góc với nhau; đặt ê ke vào thì góc đó trùng khít với góc vuông của ê ke.\nVậy ở đỉnh tạo thành '+a+'.';
};
LG['hinh3']=function(it){
  var q=String(it.q),a=String(it.a);
  if(/chữ nhật.*góc vuông/.test(q))return 'Hình chữ nhật có 4 góc đều là góc vuông, hai cạnh dài bằng nhau, hai cạnh ngắn bằng nhau.\nVậy hình chữ nhật có '+a+' góc vuông.';
  if(/tứ giác.*cạnh/.test(q))return 'Hình tứ giác có 4 cạnh, 4 đỉnh, 4 góc.\nVậy hình tứ giác có '+a+' cạnh.';
  if(/tam giác.*cạnh/.test(q))return 'Hình tam giác có 3 cạnh, 3 đỉnh, 3 góc.\nVậy hình tam giác có '+a+' cạnh.';
  if(/vuông.*cạnh/.test(q))return 'Hình vuông có 4 góc vuông và 4 cạnh dài bằng nhau.\nVậy bốn cạnh của hình vuông '+a+'.';
  return 'Nhớ đặc điểm về số cạnh, số góc, số đỉnh của mỗi hình.\nĐáp án: '+a+'.';
};
LG['hinhtron3']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if(m=q.match(/bán kính\s*(\d+)\s*cm/))return 'Trong một hình tròn, độ dài đường kính gấp 2 lần độ dài bán kính.\nBài giải\nĐộ dài đường kính là:\n'+m[1]+' × 2 = '+(+m[1]*2)+' (cm)\nĐáp số: '+a+'.';
  if(m=q.match(/Đường kính dài\s*(\d+)\s*cm/))return 'Trong một hình tròn, độ dài bán kính bằng một nửa độ dài đường kính.\nBài giải\nĐộ dài bán kính là:\n'+m[1]+' : 2 = '+(+m[1]/2)+' (cm)\nĐáp số: '+a+'.';
  return 'Quan sát hình: đường kính đi qua tâm O, gồm hai bán kính nối liền nhau, nên độ dài đường kính gấp 2 lần độ dài bán kính.\nVậy đường kính gấp '+a+' lần bán kính.';
};
LG['khanang3']=function(it){
  var q=String(it.q),a=String(it.a);
  if(/đồng xu/.test(q))return 'Tung đồng xu có thể được mặt sấp hoặc mặt ngửa, ta không biết trước sẽ ra mặt nào.\nVậy khả năng được mặt ngửa là: '+a+'.';
  if(/chắc chắn/.test(q)){var m=q.match(/chỉ có\s*([^.]+)\./);return 'Trong hộp chỉ có '+(m?m[1]:'một loại')+' nên lấy ra quả nào cũng là '+(m?m[1]:'loại đó')+'.\nVậy chắc chắn lấy được '+a+'.';}
  var m2=q.match(/chỉ có\s*([^.]+)\./),m3=q.match(/Lấy được\s*(.+?)\s*là/);
  return 'Trong hộp '+(m2?'chỉ có '+m2[1]:'không có loại cần lấy')+', không có '+(m3?m3[1]:'loại cần lấy')+' nên không bao giờ lấy được '+(m3?m3[1]:'')+'.\nVậy đó là điều '+a+'.';
};

LG['khoi3']=function(it){var q=String(it.q),a=String(it.a);
if(/mặt/.test(q))return 'Khối lập phương có 6 mặt, các mặt đều là hình vuông bằng nhau.\nĐếm: mặt trên, mặt dưới và 4 mặt xung quanh: 1 + 1 + 4 = 6.\nVậy khối lập phương có '+a+' mặt.';
if(/đỉnh/.test(q))return 'Đỉnh là chỗ các cạnh gặp nhau.\nMặt trên có 4 đỉnh, mặt dưới có 4 đỉnh: 4 + 4 = 8.\nVậy khối lập phương có '+a+' đỉnh.';
if(/cạnh/.test(q))return 'Mặt trên có 4 cạnh, mặt dưới có 4 cạnh, xung quanh có 4 cạnh đứng: 4 + 4 + 4 = 12.\nVậy khối lập phương có '+a+' cạnh.';
if(/xúc xắc/.test(q))return 'Viên xúc xắc có 6 mặt đều là hình vuông bằng nhau.\nKhối có 6 mặt là hình vuông bằng nhau là khối lập phương.\nVậy viên xúc xắc có dạng '+a+'.';
return 'Quan sát khối hình: đếm số mặt, số đỉnh, số cạnh.\nĐáp số: '+a+'.';};

LG['lama3']=function(it){var q=String(it.q),a=String(it.a);
var M={1:'I',2:'II',3:'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX',10:'X',11:'XI',12:'XII',20:'XX',21:'XXI'};
var G={1:'I',2:'I và I (1 + 1 = 2)',3:'I, I và I (1 + 1 + 1 = 3)',4:'I đứng bên trái V nghĩa là bớt 1: 5 − 1 = 4',5:'V',6:'V và I đứng bên phải (5 + 1 = 6)',7:'V và II đứng bên phải (5 + 2 = 7)',8:'V và III đứng bên phải (5 + 3 = 8)',9:'I đứng bên trái X nghĩa là bớt 1: 10 − 1 = 9',10:'X',11:'X và I đứng bên phải (10 + 1 = 11)',12:'X và II đứng bên phải (10 + 2 = 12)',20:'X và X (10 + 10 = 20)',21:'XX và I đứng bên phải (10 + 10 + 1 = 21)'};
var base='Nhớ: I là 1, V là 5, X là 10. Chữ số ghi bên phải thì cộng thêm, chữ số I ghi bên trái V hoặc X thì bớt đi 1.';
var m=q.match(/Viết số (\d+)/);
if(m){var n=+m[1];return base+'\nSố '+n+(G[n]&&n!=1&&n!=5&&n!=10?': '+G[n]:'')+'.\nVậy số '+n+' viết bằng chữ số La Mã là '+a+'.';}
m=q.match(/La Mã ([IVX]+)/);
if(m){var r=m[1],n2=null;for(var k in M)if(M[k]===r)n2=+k;var g=(n2&&G[n2]&&n2!=1&&n2!=5&&n2!=10)?'\n'+r+': '+G[n2]+'.':'';return base+g+'\nVậy chữ số La Mã '+r+' là số '+a+'.';}
return base+'\nĐáp số: '+a+'.';};

LG['lamtron1000_3']=function(it){var q=String(it.q),a=String(it.a);
var m=q.match(/số\s+([\d\s ]+?)\s+đến hàng (chục nghìn|nghìn)/);
if(!m)return 'Xét chữ số ở hàng ngay bên phải hàng cần làm tròn: nhỏ hơn 5 thì làm tròn xuống, từ 5 trở lên thì làm tròn lên.\nĐáp số: '+a+'.';
var s=m[1].replace(/\D/g,''),n=+s,ch=m[2]==='chục nghìn';
var d=ch?Math.floor(n/1000)%10:Math.floor(n/100)%10,hang=ch?'hàng nghìn':'hàng trăm';
var src=m[1].trim();
return 'Làm tròn đến '+(ch?'hàng chục nghìn':'hàng nghìn')+' thì xét chữ số ở '+hang+'.\nSố '+src+' có chữ số '+hang+' là '+d+'; '+d+(d<5?' < 5 nên làm tròn xuống.':' ≥ 5 nên làm tròn lên.')+'\nVậy làm tròn số '+src+' đến '+(ch?'hàng chục nghìn':'hàng nghìn')+' ta được '+a+'.';};

LG['lamtron3']=function(it){var q=String(it.q),a=String(it.a);
var m=q.match(/số\s+(\d+)\s+đến hàng (chục|trăm)/);
if(!m)return 'Xét chữ số ở hàng ngay bên phải hàng cần làm tròn: nhỏ hơn 5 thì làm tròn xuống, từ 5 trở lên thì làm tròn lên.\nĐáp số: '+a+'.';
var n=+m[1],tr=m[2]==='trăm';var d=tr?Math.floor(n/10)%10:n%10,hang=tr?'hàng chục':'hàng đơn vị';
return 'Làm tròn đến hàng '+m[2]+' thì xét chữ số ở '+hang+'.\nSố '+n+' có chữ số '+hang+' là '+d+'; '+d+(d<5?' < 5 nên làm tròn xuống.':' ≥ 5 nên làm tròn lên.')+'\nVậy làm tròn số '+n+' đến hàng '+m[2]+' ta được '+a+'.';};

LG['lv3']=function(it){var q=String(it.q),a=String(it.a),m;
var L=function(arr){return 'Bài giải\n'+arr.join('\n')+'\nĐáp số: '+a+'.';};
if((m=q.match(/^(.+?) có (\d+) hộp bút chì, mỗi hộp có (\d+) cái\. .+? cho bạn (\d+) cái/))){var t=m[1],x=+m[2],y=+m[3],c=+m[4];
return L([t+' có số cái bút chì là:',x+' × '+y+' = '+(x*y)+' (cái)',t+' còn lại số cái bút chì là:',(x*y)+' − '+c+' = '+(x*y-c)+' (cái)']);}
if((m=q.match(/có (\d+) thùng táo, mỗi thùng có (\d+) quả\. .*?bán (\d+) thùng/))){var A=+m[1],B=+m[2],C=+m[3];
return L(['Cửa hàng còn lại số thùng táo là:',A+' − '+C+' = '+(A-C)+' (thùng)','Cửa hàng còn lại số quả táo là:',(A-C)+' × '+B+' = '+((A-C)*B)+' (quả)']);}
if((m=q.match(/có (\d+) bạn nam, số bạn nữ nhiều hơn số bạn nam (\d+) bạn/))){var A2=+m[1],B2=+m[2];
return L(['Lớp 3A có số bạn nữ là:',A2+' + '+B2+' = '+(A2+B2)+' (bạn)','Lớp 3A có tất cả số bạn là:',A2+' + '+(A2+B2)+' = '+(2*A2+B2)+' (bạn)']);}
if((m=q.match(/dài (\d+) m được cắt thành (\d+) đoạn bằng nhau\. Hỏi (\d+) đoạn/))){var D=+m[1],k=+m[2],c2=+m[3];
return L(['Mỗi đoạn dây dài là:',D+' : '+k+' = '+(D/k)+' (m)',c2+' đoạn dây như thế dài là:',(D/k)+' × '+c2+' = '+(D/k*c2)+' (m)']);}
if((m=q.match(/thứ nhất cân nặng (\d+) kg, .*?gấp (\d+) lần/))){var A3=+m[1],g=+m[2];
return L(['Bao gạo thứ hai cân nặng là:',A3+' × '+g+' = '+(A3*g)+' (kg)','Cả hai bao cân nặng là:',A3+' + '+(A3*g)+' = '+(A3+A3*g)+' (kg)']);}
if((m=q.match(/^(.+?) có (\d+) viên bi, mẹ cho thêm (\d+) viên bi\. .+? chia đều số bi cho (\d+) bạn/))){var t2=m[1],x2=+m[2],y2=+m[3],c3=+m[4],s=x2+y2;
return L([t2+' có tất cả số viên bi là:',x2+' + '+y2+' = '+s+' (viên)','Mỗi bạn được số viên bi là:',s+' : '+c3+' = '+(s/c3)+' (viên)']);}
return 'Bài giải\nBước 1: tìm số liệu trung gian theo dữ kiện thứ nhất.\nBước 2: dùng kết quả đó để trả lời câu hỏi.\nĐáp số: '+a+'.';};

LG['ml3']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/có (\d+) ml nước, rót thêm (\d+) ml/))){var x=+m[1],y=+m[2];return 'Bài giải\nTrong cốc có số mi-li-lít nước là:\n'+x+' + '+y+' = '+(x+y)+' (ml)\nĐáp số: '+a+'.';}
if(/1 lít/.test(q))return 'Ta có: 1 l = 1000 ml.\nVậy 1 lít bằng '+a+' mi-li-lít.';
return 'Nhớ: 1 l = 1000 ml.\nĐáp số: '+a+'.';};

LG['mm3']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/^(\d+) cm = \? mm/))){var x=+m[1];return 'Ta có: 1 cm = 10 mm.\nNên '+x+' cm = '+x+' × 10 mm = '+(x*10)+' mm.\nVậy '+x+' cm = '+a+'.';}
if((m=q.match(/^(\d+) mm = \? cm/))){var y=+m[1];return 'Ta có: 10 mm = 1 cm.\nNên '+y+' mm = ('+y+' : 10) cm = '+(y/10)+' cm.\nVậy '+y+' mm = '+a+'.';}
if(/1 cm/.test(q))return 'Ta có: 1 cm = 10 mm.\nVậy 1 cm bằng '+a+' mi-li-mét.';
return 'Nhớ: 1 cm = 10 mm.\nĐáp số: '+a+'.';};

LG['motphan3']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/Tìm 1\/(\d+) của (\d+)/))){var k=+m[1],S=+m[2];return 'Muốn tìm 1/'+k+' của '+S+' ta lấy '+S+' chia cho '+k+'.\n'+S+' : '+k+' = '+(S/k)+'.\nVậy 1/'+k+' của '+S+' là '+a+'.';}
if((m=q.match(/chia thành (\d+) phần bằng nhau/))){var n=m[1],W={2:'hai',3:'ba',4:'tư',5:'năm',6:'sáu',7:'bảy',8:'tám',9:'chín',10:'mười'};return 'Hình tròn được chia thành '+n+' phần bằng nhau, tô màu 1 phần.\nNên phần tô màu là một phần '+(W[n]||n)+' của hình tròn, viết là 1/'+n+'.\nVậy phần tô màu là '+a+' hình tròn.';}
return 'Chia thành mấy phần bằng nhau, lấy 1 phần thì được một phần mấy.\nĐáp số: '+a+'.';};

LG['n1']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*×\s*(\d+)/);
if(!m)return 'Đặt tính thẳng cột, nhân lần lượt từ phải sang trái.\nĐáp số: '+a+'.';
var A=m[1],b=+m[2],ds=A.split('').reverse().map(Number),hang=['hàng đơn vị','hàng chục','hàng trăm'],c=0,L=['Đặt tính: viết '+A+', viết '+b+' dưới '+A+' sao cho thẳng cột với chữ số hàng đơn vị, viết dấu × ở bên trái, kẻ vạch ngang. Nhân lần lượt từ phải sang trái:'];
for(var i=0;i<ds.length;i++){var p=ds[i]*b,s=p+c,last=i===ds.length-1;var t='• '+ds[i]+' × '+b+' = '+p+(c?', thêm '+c+' bằng '+s:'');
if(last)t+=', viết '+s+'.';else{t+=', viết '+(s%10)+(Math.floor(s/10)?', nhớ '+Math.floor(s/10):'')+'.';c=Math.floor(s/10);}
L.push(t);}
L.push('Vậy '+A+' × '+b+' = '+a+'.');return L.join('\n');};

LG['nb']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/(\d+)\s*×\s*(\d+)/))){var x=+m[1],y=+m[2];return 'Dựa vào bảng nhân '+x+': '+x+' được lấy '+y+' lần.\n'+x+' × '+y+' = '+(x*y)+'.\nVậy '+x+' × '+y+' = '+a+'.';}
if((m=q.match(/(\d+)\s*:\s*(\d+)/))){var s=+m[1],d=+m[2];return 'Dựa vào bảng chia '+d+' (nhẩm từ bảng nhân).\nVì '+d+' × '+(s/d)+' = '+s+' nên '+s+' : '+d+' = '+(s/d)+'.\nVậy '+s+' : '+d+' = '+a+'.';}
return 'Dựa vào bảng nhân, bảng chia.\nĐáp số: '+a+'.';};

LG['nc3a']=function(it){var q=String(it.q).replace(/[–−-]/g,'–'),a=String(it.a),m;
if((m=q.match(/x × (\d+) \+ (\d+) = (\d+)/))){var A=+m[1],B=+m[2],C=+m[3];return 'x × '+A+' + '+B+' = '+C+'\nx × '+A+' = '+C+' − '+B+' (muốn tìm số hạng, lấy tổng trừ số hạng kia)\nx × '+A+' = '+(C-B)+'\nx = '+(C-B)+' : '+A+' (muốn tìm thừa số, lấy tích chia cho thừa số kia)\n'+a;}
if((m=q.match(/x × (\d+) – (\d+) = (\d+)/))){var A1=+m[1],B1=+m[2],C1=+m[3];return 'x × '+A1+' − '+B1+' = '+C1+'\nx × '+A1+' = '+C1+' + '+B1+' (muốn tìm số bị trừ, lấy hiệu cộng số trừ)\nx × '+A1+' = '+(C1+B1)+'\nx = '+(C1+B1)+' : '+A1+' (muốn tìm thừa số, lấy tích chia cho thừa số kia)\n'+a;}
if((m=q.match(/x : (\d+) \+ (\d+) = (\d+)/))){var A2=+m[1],B2=+m[2],C2=+m[3];return 'x : '+A2+' + '+B2+' = '+C2+'\nx : '+A2+' = '+C2+' − '+B2+' (muốn tìm số hạng, lấy tổng trừ số hạng kia)\nx : '+A2+' = '+(C2-B2)+'\nx = '+(C2-B2)+' × '+A2+' (muốn tìm số bị chia, lấy thương nhân với số chia)\n'+a;}
if((m=q.match(/x : (\d+) – (\d+) = (\d+)/))){var A3=+m[1],B3=+m[2],C3=+m[3];return 'x : '+A3+' − '+B3+' = '+C3+'\nx : '+A3+' = '+C3+' + '+B3+' (muốn tìm số bị trừ, lấy hiệu cộng số trừ)\nx : '+A3+' = '+(C3+B3)+'\nx = '+(C3+B3)+' × '+A3+' (muốn tìm số bị chia, lấy thương nhân với số chia)\n'+a;}
if((m=q.match(/\(x \+ (\d+)\) × (\d+) = (\d+)/))){var B4=+m[1],A4=+m[2],C4=+m[3];return '(x + '+B4+') × '+A4+' = '+C4+'\nx + '+B4+' = '+C4+' : '+A4+' (muốn tìm thừa số, lấy tích chia cho thừa số kia)\nx + '+B4+' = '+(C4/A4)+'\nx = '+(C4/A4)+' − '+B4+' (muốn tìm số hạng, lấy tổng trừ số hạng kia)\n'+a;}
return 'Tìm lần lượt từng thành phần chưa biết, bắt đầu từ phép tính làm sau cùng.\nĐáp số: '+a;};

LG['nc3b']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/:\s*(.+)$/);
var p=m?m[1].split('+').map(function(s){return s.trim();}).filter(Boolean):[];
if(!p.length)return 'Tổng các số hạng bằng nhau thì chuyển thành phép nhân.\nĐáp số: '+a+'.';
var n=p[0],k=p.length;return 'Tổng có '+k+' số hạng, mỗi số hạng đều bằng '+n+'.\nNên ta chuyển thành phép nhân: '+n+' được lấy '+k+' lần.\n'+p.join(' + ')+' = '+a+'.';};

LG['nc3c']=function(it){var q=String(it.q),a=String(it.a),m,V=(q.match(/^Một (.+?) hình chữ nhật/)||[])[1]||'hình chữ nhật';
var g=+((q.match(/gấp (\d+) lần/)||[])[1]||0);
var E=function(arr){return 'Bài giải\n'+arr.join('\n')+'\nĐáp số: '+a+'.';};
if(g&&(m=q.match(/chiều rộng (\d+) m, chiều dài gấp/))){var r=+m[1],d=r*g;
if(/diện tích/.test(q))return E(['Chiều dài '+V+' là:',r+' × '+g+' = '+d+' (m)','Diện tích '+V+' là:',d+' × '+r+' = '+(d*r)+' (m²)']);
return E(['Chiều dài '+V+' là:',r+' × '+g+' = '+d+' (m)','Chu vi '+V+' là:','('+d+' + '+r+') × 2 = '+((d+r)*2)+' (m)']);}
if(g&&(m=q.match(/chiều dài (\d+) m, chiều dài gấp/))){var d2=+m[1],r2=d2/g;
return E(['Chiều rộng '+V+' là:',d2+' : '+g+' = '+r2+' (m)','Chu vi '+V+' là:','('+d2+' + '+r2+') × 2 = '+((d2+r2)*2)+' (m)']);}
if(g&&(m=q.match(/chu vi (\d+) m/))){var P=+m[1],h=P/2;
return E(['Nửa chu vi '+V+' (chiều dài + chiều rộng) là:',P+' : 2 = '+h+' (m)','Chiều dài gấp '+g+' lần chiều rộng nên nửa chu vi gấp '+g+' + 1 = '+(g+1)+' lần chiều rộng.','Chiều rộng '+V+' là:',h+' : '+(g+1)+' = '+(h/(g+1))+' (m)']);}
return 'Bài giải\nTìm cạnh còn lại từ quan hệ "gấp", rồi tính theo công thức chu vi (dài + rộng) × 2 hoặc diện tích dài × rộng.\nĐáp số: '+a+'.';};

LG['nc3d']=function(it){var q=String(it.q),a=String(it.a),m;
var E=function(arr){return 'Bài giải\n'+arr.join('\n')+'\nĐáp số: '+a+'.';};
if((m=q.match(/con (\d+) tuổi, tuổi bố gấp (\d+) lần .*?khi bố (\d+) tuổi/))){var c=+m[1],g=+m[2],B=+m[3],b=c*g,h=b-c;
return E(['Năm nay tuổi bố là:',c+' × '+g+' = '+b+' (tuổi)','Bố hơn con số tuổi là:',b+' − '+c+' = '+h+' (tuổi)','Hiệu số tuổi không thay đổi theo thời gian, nên khi bố '+B+' tuổi thì tuổi con là:',B+' − '+h+' = '+(B-h)+' (tuổi)']);}
if((m=q.match(/^Mẹ hơn (.+?) (\d+) tuổi\. .*?gấp (\d+) lần/))){var t=m[1],h2=+m[2],g2=+m[3];
return E(['Tuổi mẹ gấp '+g2+' lần tuổi '+t+', nên tuổi mẹ hơn tuổi '+t+' số lần tuổi '+t+' là:',g2+' − 1 = '+(g2-1)+' (lần)','Mẹ hơn '+t+' '+h2+' tuổi, tức là '+(g2-1)+' lần tuổi '+t+' bằng '+h2+' tuổi. Tuổi '+t+' năm nay là:',h2+' : '+(g2-1)+' = '+(h2/(g2-1))+' (tuổi)']);}
if((m=q.match(/^Năm nay (.+?) (\d+) tuổi, tuổi ông gấp (\d+) lần .*?Hỏi (\d+) năm trước/))){var t3=m[1],c3=+m[2],g3=+m[3],n=+m[4],o=c3*g3;
return E(['Năm nay tuổi ông là:',c3+' × '+g3+' = '+o+' (tuổi)',n+' năm trước tuổi ông là:',o+' − '+n+' = '+(o-n)+' (tuổi)']);}
return 'Bài giải\nTìm tuổi năm nay trước, nhớ hiệu số tuổi không thay đổi theo thời gian.\nĐáp số: '+a+'.';};

LG['nhietdo3']=function(it){var q=String(it.q),a=String(it.a);
if(/Đơn vị đo nhiệt độ/.test(q))return 'Để đo nhiệt độ ta dùng nhiệt kế, đơn vị đo thường dùng là độ C, viết tắt là °C.\nVậy đơn vị đo nhiệt độ thường dùng là '+a+'.';
if(/Nước đá/.test(q))return 'Nước đá đang tan có nhiệt độ khoảng 0°C.\nVậy câu trả lời là '+a+' độ C.';
if(/cơ thể người/.test(q))return 'Nhiệt độ ngoài trời thay đổi theo thời tiết, còn nhiệt độ cơ thể người khỏe mạnh luôn khoảng 37°C.\nVậy nhiệt độ cơ thể người bình thường khoảng '+a+' độ C.';
return 'Đọc nhiệt độ bằng đơn vị độ C (°C).\nĐáp số: '+a+'.';};

LG['so4cs3']=function(it){var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/(\d+)\s*nghìn\s*(\d+)\s*trăm\s*(\d+)\s*chục\s*(\d+)\s*đơn vị/))){
  return 'Viết lần lượt từ trái sang phải: chữ số hàng nghìn là '+m[1]+', hàng trăm là '+m[2]+', hàng chục là '+m[3]+', hàng đơn vị là '+m[4]+'.\nVậy số đó là '+a+'.';}
 if((m=q.match(/liền sau của\s*([\d ]+\d)/))){var n=m[1].trim();
  return 'Số liền sau của một số thì lớn hơn số đó 1 đơn vị.\n'+n+' + 1 = '+a+'.\nVậy số liền sau của '+n+' là '+a+'.';}
 if((m=q.match(/liền trước của\s*([\d ]+\d)/))){var n2=m[1].trim();
  return 'Số liền trước của một số thì bé hơn số đó 1 đơn vị.\n'+n2+' − 1 = '+a+'.\nVậy số liền trước của '+n2+' là '+a+'.';}
 return 'Dựa vào cấu tạo số có bốn chữ số (nghìn, trăm, chục, đơn vị) để tìm số.\nVậy đáp án là '+a+'.';};
LG['so5cs3']=function(it){var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/liền sau của\s*([\d ]+\d)/))){var n=m[1].trim();
  return 'Số liền sau của một số thì lớn hơn số đó 1 đơn vị.\n'+n+' + 1 = '+a+'.\nVậy số liền sau của '+n+' là '+a+'.';}
 if((m=q.match(/Số\s*([\d ]+\d)\s*gồm mấy chục nghìn/))){var n2=m[1].trim(),d=n2.replace(/\D/g,'');
  var nm=['chục nghìn','nghìn','trăm','chục','đơn vị'],p=[];
  if(d.length===5){for(var i=0;i<5;i++)p.push(d[i]+' '+nm[i]);}
  return 'Số '+n2+(p.length?' gồm '+p.join(', '):'')+'.\nChữ số hàng chục nghìn là chữ số đầu tiên bên trái.\nVậy số '+n2+' gồm '+a+' chục nghìn.';}
 return 'Dựa vào cấu tạo số có năm chữ số (chục nghìn, nghìn, trăm, chục, đơn vị).\nVậy đáp án là '+a+'.';};
LG['ss4so3']=function(it){var q=String(it.q),a=String(it.a);
 var m=q.match(/:\s*([\d ]*\d)\s*(?:\.\.\.|…)\s*([\d ]*\d)\s*$/);
 if(!m)return 'So sánh hai số: số nào có nhiều chữ số hơn thì lớn hơn; nếu cùng số chữ số thì so sánh từng hàng từ trái sang phải.\nVậy điền dấu '+a+'.';
 var x=m[1].trim(),y=m[2].trim(),dx=x.replace(/\D/g,''),dy=y.replace(/\D/g,''),L;
 var sign=a.trim(),ngh=a.trim()==='>'?'lớn hơn':(a.trim()==='<'?'bé hơn':'bằng');
 if(dx.length!==dy.length){var lon=dx.length>dy.length?x:y,be=dx.length>dy.length?y:x;
  L='Số '+lon+' có '+Math.max(dx.length,dy.length)+' chữ số, số '+be+' có '+Math.min(dx.length,dy.length)+' chữ số.\nSố nào có nhiều chữ số hơn thì lớn hơn.';}
 else{var nm=dx.length===5?['chục nghìn','nghìn','trăm','chục','đơn vị']:['nghìn','trăm','chục','đơn vị'],i=0;
  while(i<dx.length&&dx[i]===dy[i])i++;
  L='Hai số đều có '+dx.length+' chữ số, ta so sánh từng hàng từ trái sang phải.';
  if(i<dx.length){L+=(i>0?'\nCác chữ số ở hàng cao hơn bằng nhau.':'')+'\nỞ hàng '+nm[i]+': '+dx[i]+(+dx[i]>+dy[i]?' > ':' < ')+dy[i]+'.';}}
 return L+'\nVậy '+x+' '+sign+' '+y+' ('+x+' '+ngh+' '+y+').';};
(function(){
 function nhm(it){var q=String(it.q).replace(/\s+/g,' '),a=String(it.a),m;
  if((m=q.match(/(\d+)\s*×\s*(\d+)\s*=\s*\?/)))return 'Dựa vào bảng nhân '+(+m[1]<=10&&+m[1]>=2?m[1]:m[2])+': '+m[1]+' × '+m[2]+' = '+a+'.\nVậy '+m[1]+' × '+m[2]+' = '+a+'.';
  if((m=q.match(/(\d+)\s*:\s*(\d+)\s*=\s*\?/)))return 'Dựa vào bảng chia '+m[2]+': vì '+m[2]+' × '+a+' = '+m[1]+' nên '+m[1]+' : '+m[2]+' = '+a+'.\nVậy '+m[1]+' : '+m[2]+' = '+a+'.';
  return 'Dựa vào bảng nhân, bảng chia đã học để tính nhẩm.\nVậy kết quả là '+a+'.';}
 function ev(s){var m=s.match(/(\d+)\s*([×:])\s*(\d+)/);if(!m)return null;var x=+m[1],y=+m[3];return{t:m[1]+' '+m[2]+' '+m[3],v:m[2]==='×'?x*y:x/y};}
 function stt(it){var q=String(it.q).replace(/\s+/g,' '),a=String(it.a),m;
  if((m=q.match(/:\s*(.+?)\s*(?:…|\.\.\.)\s*(.+)$/))&&/dấu/.test(q)){var A=ev(m[1]),B=ev(m[2]);
   if(A&&B)return 'Tính giá trị từng vế:\n'+A.t+' = '+A.v+'; '+B.t+' = '+B.v+'.\nVì '+A.v+' '+(A.v>B.v?'>':A.v<B.v?'<':'=')+' '+B.v+' nên điền dấu '+a+'.\nVậy '+A.t+' '+a+' '+B.t+'.';
   return 'Tính giá trị hai vế rồi so sánh.\nVậy điền dấu '+a+'.';}
  if((m=q.match(/(\d+)\s*×\s*\?\s*=\s*(\d+)/)))return 'Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\n'+m[2]+' : '+m[1]+' = '+a+'.\nVậy '+m[1]+' × '+a+' = '+m[2]+'. Số cần điền là '+a+'.';
  if((m=q.match(/\?\s*×\s*(\d+)\s*=\s*(\d+)/)))return 'Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\n'+m[2]+' : '+m[1]+' = '+a+'.\nVậy '+a+' × '+m[1]+' = '+m[2]+'. Số cần điền là '+a+'.';
  if((m=q.match(/\?\s*:\s*(\d+)\s*=\s*(\d+)/)))return 'Muốn tìm số bị chia, ta lấy thương nhân với số chia.\n'+m[2]+' × '+m[1]+' = '+a+'.\nVậy '+a+' : '+m[1]+' = '+m[2]+'. Số cần điền là '+a+'.';
  if((m=q.match(/(\d+)\s*:\s*\?\s*=\s*(\d+)/)))return 'Muốn tìm số chia, ta lấy số bị chia chia cho thương.\n'+m[1]+' : '+m[2]+' = '+a+'.\nVậy '+m[1]+' : '+a+' = '+m[2]+'. Số cần điền là '+a+'.';
  if((m=q.match(/(\d+)\s*:\s*(\d+)\s*=\s*\?/))||(m=q.match(/(\d+)\s*×\s*(\d+)\s*=\s*\?/)))return nhm(it);
  return 'Dựa vào bảng nhân, bảng chia đã học để tìm số còn thiếu.\nVậy số cần điền là '+a+'.';}
 function lv(it){var q=String(it.q).replace(/\s+/g,' '),a=String(it.a),m,dv=a.replace(/^[\d ]+/,'').trim();
  if((m=q.match(/có (\d+) (.+?), chia đều vào (\d+) (\S+)\. Hỏi mỗi \S+ có bao nhiêu (.+?)\?/))){
   return 'Bài giải\nMỗi '+m[4]+' có số '+m[5]+' là:\n'+m[1]+' : '+m[3]+' = '+a.replace(/^([\d ]*\d).*$/,'$1')+' ('+m[5]+')'+'\nĐáp số: '+a+' '+m[5].replace(/^\S+\s*/,'')+'.';}
  if((m=q.match(/Mỗi (\S+) có (\d+) (.+?)\. Hỏi (\d+) \S+ như thế có tất cả bao nhiêu (.+?)\?/))){
   return 'Bài giải\n'+m[4]+' '+m[1]+' có tất cả số '+m[5]+' là:\n'+m[2]+' × '+m[4]+' = '+a.replace(/^([\d ]*\d).*$/,'$1')+' ('+m[5]+')'+'\nĐáp số: '+a+' '+m[5].replace(/^\S+\s*/,'')+'.';}
  return 'Bài giải\nDựa vào bảng nhân, bảng chia để chọn phép tính thích hợp.\nĐáp số: '+a+'.';}
 function hb(it){var q=String(it.q).replace(/\s+/g,' '),a=String(it.a),m;
  if((m=q.match(/^(.+?) có (\d+) (\S+), mỗi \S+ có (\d+) (.+?)\. .+? cho bạn (\d+) .+?\. Hỏi/))){
   var t=(+m[2])*(+m[4]),r=t-(+m[6]),bo=m[5].replace(/^\S+\s*/,'');
   return 'Bài giải\n'+m[1]+' có tất cả số '+m[5]+' là:\n'+m[4]+' × '+m[2]+' = '+t+' ('+m[5]+')\n'+m[1]+' còn lại số '+m[5]+' là:\n'+t+' − '+m[6]+' = '+a.replace(/^([\d ]*\d).*$/,'$1')+' ('+m[5]+')'+'\nĐáp số: '+a+' '+bo+'.';}
  return 'Bài giải\nBước 1: Tính số đồ vật có tất cả (phép nhân).\nBước 2: Tính số còn lại (phép trừ).\nĐáp số: '+a+'.';}
 [7,8,9].forEach(function(k,i){var p='tb3_'+(10+i)+'_';LG[p+'1']=nhm;LG[p+'2']=stt;LG[p+'3']=lv;LG[p+'4']=hb;});
})();

var DS3=function(r,v,a){var F=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')},t=F(r)+' '+v;return 'Đáp số: '+(t.indexOf(a)===0?t:a)+'.'};
LG['tb3_23_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const m=String(it.q).match(/(\d[\d ]*)\s*×\s*(\d[\d ]*)/);if(!m)return 'Đặt tính rồi tính theo thứ tự từ phải sang trái.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[2]),d=String(a).split('').reverse().map(Number),L=['Đặt tính: viết '+F(a)+' ở trên, '+b+' ở dưới thẳng cột với hàng đơn vị, viết dấu × ở giữa, kẻ gạch ngang.','Tính từ phải sang trái:'];let c=0;
 d.forEach((x,i)=>{const p=b*x,t=p+c,last=i===d.length-1;let s='• '+b+' nhân '+x+' bằng '+p+(c?', thêm '+c+' bằng '+t:'');if(last)s+=', viết '+t+'.';else{s+=', viết '+(t%10)+(t>=10?', nhớ '+Math.floor(t/10):'')+'.'}L.push(s);c=Math.floor(t/10)});
 L.push('Vậy '+F(a)+' × '+b+' = '+it.a+'.');return L.join('\n');};
LG['tb3_36_1']=LG['tb3_23_1'];

LG['tb3_23_2']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);let m;
 if((m=q.match(/x\s*:\s*(\d[\d ]*?)\s*=\s*(\d[\d ]*)/))){const b=N(m[1]),c=N(m[2]);return 'x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\nx = '+F(c)+' × '+F(b)+'\n'+it.a.replace(/^x\s*=\s*/,'x = ')+'\nVậy '+it.a+'.'}
 if((m=q.match(/x\s*×\s*(\d[\d ]*?)\s*=\s*(\d[\d ]*)/))){const b=N(m[1]),c=N(m[2]);return 'x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\nx = '+F(c)+' : '+F(b)+'\n'+it.a+'\nVậy '+it.a+'.'}
 if((m=q.match(/(\d[\d ]*?)\s*([×:])\s*(\d[\d ]*?)\s*\+\s*(\d[\d ]*)/))){const a=N(m[1]),b=N(m[3]),d=N(m[4]),p=m[2]==='×'?a*b:Math.floor(a/b);return 'Biểu thức có phép '+(m[2]==='×'?'nhân':'chia')+' và phép cộng: ta thực hiện phép '+(m[2]==='×'?'nhân':'chia')+' trước, phép cộng sau.\n'+F(a)+' '+m[2]+' '+F(b)+' + '+F(d)+' = '+F(p)+' + '+F(d)+'\n= '+it.a+'\nVậy giá trị của biểu thức là '+it.a+'.'}
 return 'Thực hiện theo quy tắc đã học.\nĐáp số: '+it.a;};
LG['tb3_26_2']=LG['tb3_23_2'];LG['tb3_36_2']=LG['tb3_23_2'];

LG['tb3_23_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/Mỗi (\S+) có (\d[\d ]*?) (.+?)\. Hỏi (\d[\d ]*?) \S+ như thế/);
 if(!m)return 'Bài giải\nTa lấy số đồ vật ở mỗi nhóm nhân với số nhóm.\nĐáp số: '+it.a;
 const h=m[1],a=N(m[2]),v=m[3],b=N(m[4]);
 return 'Bài giải\n'+F(b)+' '+h+' như thế có tất cả số '+v+' là:\n'+F(a)+' × '+F(b)+' = '+F(a*b)+' ('+v+')\n'+DS3(a*b,v,it.a);};
LG['tb3_36_3']=LG['tb3_23_3'];

LG['tb3_23_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/có (\d[\d ]*?) lô hàng, mỗi lô có (\d[\d ]*?) (.+?)\. Người ta đã chuyển đi (\d[\d ]*?) /);
 if(!m)return 'Bài giải\nBước 1: tính số hàng có trong kho (phép nhân).\nBước 2: lấy số đó trừ đi số đã chuyển đi.\nĐáp số: '+it.a;
 const b=N(m[1]),a=N(m[2]),v=m[3],k=N(m[4]),p=a*b;
 return 'Bài giải\nTrong kho có tất cả số '+v+' là:\n'+F(a)+' × '+F(b)+' = '+F(p)+' ('+v+')\nTrong kho còn lại số '+v+' là:\n'+F(p)+' − '+F(k)+' = '+F(p-k)+' ('+v+')\n'+DS3(p-k,v,it.a);};

LG['tb3_26_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const m=String(it.q).match(/(\d[\d ]*?)\s*:\s*(\d[\d ]*)/);if(!m)return 'Đặt tính rồi chia theo thứ tự từ trái sang phải.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[2]),ds=String(a).split('').map(Number),L=['Đặt tính rồi chia từ trái sang phải:'];let cur=0,started=false,first=true;
 ds.forEach((x,i)=>{cur=cur*10+x;if(!started&&cur<b&&i<ds.length-1)return;const qd=Math.floor(cur/b),r=cur-qd*b;
  let s='• '+(first?(i>0?'Lấy '+cur+' chia '+b:cur+' chia '+b):'Hạ '+x+', được '+cur+'; '+cur+' chia '+b)+' được '+qd+', viết '+qd+'.';
  s+=' '+qd+' nhân '+b+' bằng '+(qd*b)+'; '+cur+' trừ '+(qd*b)+' bằng '+r+'.';L.push(s);started=true;first=false;cur=r});
 const qt=Math.floor(a/b),r=a%b;
 L.push('Vậy '+F(a)+' : '+b+' = '+F(qt)+(r?' (dư '+r+'). Số dư '+r+' bé hơn số chia '+b+'.':'.'));
 const g=L.join('\n');return g.indexOf(it.a)>=0?g:g+'\nKết quả: '+it.a;};

LG['tb3_26_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/Có (\d[\d ]*?) (.+?) chia đều vào (\d[\d ]*?) (\S+)\./);
 if(!m)return 'Bài giải\nTa lấy tổng số đồ vật chia cho số phần bằng nhau.\nĐáp số: '+it.a;
 const a=N(m[1]),v=m[2],b=N(m[3]),h=m[4];
 return 'Bài giải\nMỗi '+h+' có số '+v+' là:\n'+F(a)+' : '+F(b)+' = '+F(Math.floor(a/b))+' ('+v+')\n'+DS3(Math.floor(a/b),v,it.a);};

LG['tb3_26_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/^(.+?) có (\d[\d ]*?) (.+?), chia đều vào (\d[\d ]*?) túi\. .+? lấy ra (\d[\d ]*?) túi/);
 if(!m)return 'Bài giải\nBước 1: tìm số đồ vật trong mỗi túi (phép chia).\nBước 2: nhân với số túi đem tặng.\nĐáp số: '+it.a;
 const t=m[1],a=N(m[2]),v=m[3],b=N(m[4]),k=N(m[5]),p=Math.floor(a/b);
 return 'Bài giải\nMỗi túi có số '+v+' là:\n'+F(a)+' : '+F(b)+' = '+F(p)+' ('+v+')\n'+t+' đã tặng số '+v+' là:\n'+F(p)+' × '+F(k)+' = '+F(p*k)+' ('+v+')\n'+DS3(p*k,v,it.a);};

LG['tb3_2_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const m=String(it.q).match(/(\d[\d ]*?)\s*([+−-])\s*(\d[\d ]*)/);if(!m)return 'Đặt tính thẳng cột rồi tính từ phải sang trái.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[3]),cong=m[2]==='+',x=String(a).split('').reverse().map(Number),y=String(b).split('').reverse().map(Number),n=Math.max(x.length,y.length);
 const H=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];
 const L=['Đặt tính: viết '+F(a)+' ở trên, '+F(b)+' ở dưới sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu '+(cong?'+':'−')+', kẻ gạch ngang.','Tính từ phải sang trái:'];let c=0;
 for(let i=0;i<n;i++){const u=x[i]||0,v=y[i]||0,last=i===n-1;let s='• '+H[i][0].toUpperCase()+H[i].slice(1)+': ';
  if(cong){if(i>=y.length&&!c){s+='hạ '+u+', viết '+u+'.';L.push(s);continue}
   const t=u+v+c;s+=u+' cộng '+v+' bằng '+(u+v)+(c?', thêm 1 bằng '+t:'')+', viết '+(last?t:t%10)+(!last&&t>=10?', nhớ 1':'')+'.';c=t>=10?1:0}
  else{if(i>=y.length&&!c){s+='hạ '+u+', viết '+u+'.';L.push(s);continue}
   const vv=v+c;let pre=c?v+' thêm 1 bằng '+vv+'; ':'';
   if(u>=vv){const r=u-vv;s+=pre+u+' trừ '+vv+' bằng '+r+(last&&r===0&&i>0?' (không viết chữ số 0 ở hàng cao nhất).':', viết '+r+'.');c=0}
   else{s+=pre+u+' không trừ được '+vv+', lấy 1'+u+' trừ '+vv+' bằng '+(10+u-vv)+', viết '+(10+u-vv)+', nhớ 1.';c=1}}
  L.push(s)}
 L.push('Vậy '+F(a)+' '+(cong?'+':'−')+' '+F(b)+' = '+it.a+'.');return L.join('\n');};

LG['tb3_2_2']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);let m;
 const kq=it.a+'\nVậy '+it.a+'.';
 if((m=q.match(/x\s*[−-]\s*(\d[\d ]*?)\s*=\s*(\d[\d ]*)/)))return 'x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\nx = '+F(N(m[2]))+' + '+F(N(m[1]))+'\n'+kq;
 if((m=q.match(/(\d[\d ]*?)\s*[−-]\s*x\s*=\s*(\d[\d ]*)/)))return 'x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\nx = '+F(N(m[1]))+' − '+F(N(m[2]))+'\n'+kq;
 if((m=q.match(/x\s*\+\s*(\d[\d ]*?)\s*=\s*(\d[\d ]*)/))||(m=q.match(/(\d[\d ]*?)\s*\+\s*x\s*=\s*(\d[\d ]*)/)))return 'x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nx = '+F(N(m[2]))+' − '+F(N(m[1]))+'\n'+kq;
 return 'Dựa vào quan hệ giữa các thành phần của phép tính để tìm x.\n'+kq;};

LG['tb3_2_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);let m;
 if((m=q.match(/cửa hàng có (\d[\d ]*?) (.+?), đã bán (\d[\d ]*?) /))){const a=N(m[1]),v=m[2],b=N(m[3]);
  return 'Bài giải\nCửa hàng còn lại số '+v+' là:\n'+F(a)+' − '+F(b)+' = '+F(a-b)+' ('+v+')\n'+DS3(a-b,v,it.a)}
 if((m=q.match(/^(.+?) có (\d[\d ]*?) (.+?), (.+?) có (\d[\d ]*?) /))){const a=N(m[2]),v=m[3],b=N(m[5]);
  return 'Bài giải\nCả hai bạn có số '+v+' là:\n'+F(a)+' + '+F(b)+' = '+F(a+b)+' ('+v+')\n'+DS3(a+b,v,it.a)}
 return 'Bài giải\nXác định phép tính phù hợp rồi tính.\nĐáp số: '+it.a;};

LG['tb3_2_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);let m;
 if((m=q.match(/kho có (\d[\d ]*?) (.+?)\. Lần đầu chuyển đi (\d[\d ]*?) .+?, lần sau chuyển đi (\d[\d ]*?) /))){const a=N(m[1]),v=m[2],b=N(m[3]),d=N(m[4]),p=a-b;
  return 'Bài giải\nSau lần đầu, kho còn lại số '+v+' là:\n'+F(a)+' − '+F(b)+' = '+F(p)+' ('+v+')\nKho còn lại số '+v+' là:\n'+F(p)+' − '+F(d)+' = '+F(p-d)+' ('+v+')\n'+DS3(p-d,v,it.a)}
 if((m=q.match(/thứ nhất có (\d[\d ]*?) (.+?), thùng thứ hai có (\d[\d ]*?) .+?lấy ra (\d[\d ]*?) /))){const a=N(m[1]),v=m[2],b=N(m[3]),d=N(m[4]);
  return 'Bài giải\nThùng thứ nhất còn lại số '+v+' là:\n'+F(a)+' − '+F(d)+' = '+F(a-d)+' ('+v+')\nLúc này cả hai thùng còn số '+v+' là:\n'+F(a-d)+' + '+F(b)+' = '+F(a-d+b)+' ('+v+')\n'+DS3(a-d+b,v,it.a)}
 return 'Bài giải\nBước 1: tính kết quả sau lần thứ nhất.\nBước 2: tính tiếp với lần thứ hai.\nĐáp số: '+it.a;};

LG["tb3_36_4"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_37_1"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_37_2"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_37_3"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_37_4"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_4_1"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_4_2"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_4_3"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_4_4"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_54_1"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_54_2"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_54_3"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_54_4"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_55_1"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};
LG["tb3_55_2"]=function(it){
const N=s=>+String(s).replace(/\s/g,'');
const F=n=>{const s=String(Math.abs(n));const t=s.length>4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):(s.length===4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s);return (n<0?'−':'')+t;};
const NUM='(\\d{1,3}(?: \\d{3})*)';
const q=String(it.q||'').normalize('NFC').replace(/[–-]/g,'−').trim(),A=String(it.a||'').trim();
const ns=(q.match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(N);
const dv=(A.match(/[^\d\s()]+$/)||[''])[0];
const vat=((q.match(/bao nhiêu ([^?]+)\?/)||[])[1]||dv).trim();
const fin=()=>'Đáp số: '+A+'.';
const cot=(a,b,cong)=>{const da=String(a).split('').reverse().map(Number),db=String(b).split('').reverse().map(Number);const L=Math.max(da.length,db.length);const r=cong?a+b:a-b;const rl=String(r).length;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];let nh=0,out=[];
 for(let i=0;i<L;i++){const x=da[i]??0,y=db[i];let s='• '+hang[i][0].toUpperCase()+hang[i].slice(1)+': ';
  if(cong){if(y===undefined||(i>=db.length)){const v=x+nh;s+=nh?`${x} thêm ${nh} bằng ${v}`:`hạ ${x}`;const w=v%10;s+=v>=10?`, viết ${w}, nhớ 1.`:`, viết ${v}.`;nh=v>=10?1:0;}
   else{const v=x+y;let t=`${x} cộng ${y} bằng ${v}`;let v2=v+nh;if(nh)t+=`, thêm ${nh} bằng ${v2}`;s+=t+(v2>=10?`, viết ${v2%10}, nhớ 1.`:`, viết ${v2}.`);nh=v2>=10?1:0;}}
  else{let yy=(i<db.length?y:0),t='';if(i>=db.length&&!nh){s+=`hạ ${x}`;const lead=i>=rl;s+=lead?'.':`, viết ${x}.`;out.push(s);continue}
   if(nh){if(i<db.length){t=`${y} thêm 1 bằng ${y+1}; `;yy=y+1}else{t='';yy=1}}
   if(x>=yy){const v=x-yy;s+=t+`${x} trừ ${yy} bằng ${v}`+(i>=rl?', chữ số 0 này đứng đầu nên không viết.':`, viết ${v}.`);nh=0}else{const v=10+x-yy;s+=t+`${x} không trừ được ${yy}, lấy ${10+x} trừ ${yy} bằng ${v}, viết ${v}, nhớ 1.`;nh=1}}
  out.push(s)}
 if(cong&&nh)out.push('• Viết 1 (nhớ) sang bên trái.');return out};
const chia=(a,b)=>{const d=String(a).split('').map(Number);let cur=0,out=[],qq='',started=false;
 for(let i=0;i<d.length;i++){cur=cur*10+d[i];const pre=i===0?'':`Hạ ${d[i]}, được ${cur}; `;
  if(!started&&cur<b&&i<d.length-1){continue}
  const k=Math.floor(cur/b),r=cur-k*b;
  const lead=(!started&&i>0)?`Lấy ${cur} chia ${b}`:'';
  const head=!started?(i>0?`• ${String(a).slice(0,i)} bé hơn ${b} nên lấy ${cur} chia ${b} được ${k}, viết ${k}.`:`• ${cur} chia ${b} được ${k}, viết ${k}.`):`• ${pre}${cur} chia ${b} được ${k}, viết ${k}.`;
  out.push(head+` ${k} nhân ${b} bằng ${k*b}; ${cur} trừ ${k*b} bằng ${r}.`);
  started=true;qq+=k;cur=r}
 return {out,qt:+qq,r:cur}};
const L=[];
let m;
/* Đặt tính rồi tính */
if(m=q.match(new RegExp('Đặt tính rồi tính:\\s*'+NUM+'\\s*([+−×:])\\s*'+NUM))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='+'||op==='−'){L.push(`Đặt tính: viết ${F(b)} dưới ${F(a)} sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu ${op}, kẻ vạch ngang.`);L.push('Tính từ phải sang trái:');L.push(...cot(a,b,op==='+'));L.push(`Vậy ${F(a)} ${op} ${F(b)} = ${A}.`);return L.join('\n')}
 if(op===':'){const c=chia(a,b);L.push(`Đặt tính: viết số bị chia ${F(a)}, kẻ dấu chia, viết số chia ${b}. Chia lần lượt từ trái sang phải:`);L.push(...c.out);L.push(c.r?`Phép chia có dư, số dư ${c.r} bé hơn số chia ${b}.`:'Phép chia hết.');L.push(`Vậy ${F(a)} : ${b} = ${A}.`);return L.join('\n')}
 if(op==='×'){const da=String(a).split('').reverse().map(Number);let nh=0;const hang=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];L.push(`Đặt tính: viết ${b} dưới chữ số hàng đơn vị của ${F(a)}, viết dấu ×, kẻ vạch ngang. Nhân từ phải sang trái:`);da.forEach((x,i)=>{const v=x*b;let s=`• ${b} nhân ${x} bằng ${v}`;const v2=v+nh;if(nh)s+=`, thêm ${nh} bằng ${v2}`;const last=i===da.length-1;s+=last?`, viết ${v2}.`:(v2>=10?`, viết ${v2%10}, nhớ ${Math.floor(v2/10)}.`:`, viết ${v2}.`);nh=Math.floor(v2/10);L.push(s)});L.push(`Vậy ${F(a)} × ${b} = ${A}.`);return L.join('\n')}}
/* Tìm x */
if(m=q.match(new RegExp('Tìm x:\\s*(x|'+NUM+')\\s*([+−×:])\\s*(x|'+NUM+')\\s*=\\s*'+NUM))){const l=m[1],op=m[3],r=m[4],c=N(m[6]);const xl=l==='x';const k=N(xl?r:l);let rule,ex,v;
 if(op==='+'){rule='x là số hạng chưa biết. Muốn tìm số hạng, ta lấy tổng trừ đi số hạng kia.';ex=`${F(c)} − ${F(k)}`;v=c-k}
 else if(op==='×'){rule='x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.';ex=`${F(c)} : ${F(k)}`;v=c/k}
 else if(op==='−'){if(xl){rule='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.';ex=`${F(c)} + ${F(k)}`;v=c+k}else{rule='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.';ex=`${F(k)} − ${F(c)}`;v=k-c}}
 else{if(xl){rule='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.';ex=`${F(c)} × ${F(k)}`;v=c*k}else{rule='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.';ex=`${F(k)} : ${F(c)}`;v=k/c}}
 L.push(rule);L.push(`${xl?'x':F(k)} ${op} ${xl?F(k):'x'} = ${F(c)}`);L.push(`x = ${ex}`);L.push(A.startsWith('x')?A:'x = '+A);return L.join('\n')}
/* Số? */
if(m=q.match(/Số\?\s*(\?|\d+)\s*([×:])\s*(\?|\d+)\s*=\s*(\d+)/)){const l=m[1],op=m[2],r=m[3],c=+m[4];let s;
 if(op==='×'){const k=+(l==='?'?r:l);s=`Thừa số chưa biết = tích : thừa số kia = ${c} : ${k} = ${c/k}.`}
 else if(l==='?'){const k=+r;s=`Số bị chia = thương × số chia = ${c} × ${k} = ${c*k}.`}
 else{const k=+l;s=`Số chia = số bị chia : thương = ${k} : ${c} = ${k/c}.`}
 L.push(s);L.push(`Vậy số cần điền là ${A}.`);return L.join('\n')}
/* Điền dấu */
if(m=q.match(/Điền dấu[^:]*:\s*(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const a=+m[1]*+m[2],b=+m[3]*+m[4];L.push(`Ta có: ${m[1]} × ${m[2]} = ${a}; ${m[3]} × ${m[4]} = ${b}.`);L.push(`Vì ${a} ${a>b?'>':a<b?'<':'='} ${b} nên ${m[1]} × ${m[2]} ${A} ${m[3]} × ${m[4]}.`);L.push(`Vậy điền dấu ${A}.`);return L.join('\n')}
/* Tính nhẩm a op b = ? */
if(m=q.match(new RegExp('^'+NUM+'\\s*([×:+−])\\s*'+NUM+'\\s*=\\s*\\?'))){const a=N(m[1]),op=m[2],b=N(m[3]);
 if(op==='×')L.push(`Dựa vào bảng nhân ${a}: ${a} × ${b} = ${a*b}.`);
 else if(op===':')L.push(`Dựa vào bảng nhân: ${b} × ${a/b} = ${a} nên ${a} : ${b} = ${a/b}.`);
 L.push(`Vậy ${m[1]} ${op} ${m[3]} = ${A}.`);return L.join('\n')}
/* Biểu thức */
if(m=q.match(new RegExp('Tính giá trị biểu thức:\\s*'+NUM+'\\s*([×:])\\s*'+NUM+'\\s*([+−])\\s*'+NUM))){const a=N(m[1]),b=N(m[3]),c=N(m[5]);const p=m[2]==='×'?a*b:a/b;const v=m[4]==='+'?p+c:p-c;
 L.push(`Biểu thức có phép ${m[2]==='×'?'nhân':'chia'} và phép ${m[4]==='+'?'cộng':'trừ'}: ta thực hiện phép ${m[2]==='×'?'nhân':'chia'} trước, phép ${m[4]==='+'?'cộng':'trừ'} sau.`);
 L.push(`${m[1]} ${m[2]} ${m[3]} ${m[4]} ${m[5]} = ${F(p)} ${m[4]} ${m[5]}`);L.push(`= ${A}`);L.push(`Vậy giá trị của biểu thức là ${A}.`);return L.join('\n')}
/* Lời văn */
L.push('Bài giải');
if(m=q.match(new RegExp('Một kho có '+NUM+' lô hàng, mỗi lô có '+NUM+' .*?chuyển đi '+NUM))){const b=N(m[1]),a=N(m[2]),k=N(m[3]);L.push(`Số ${vat} trong kho lúc đầu là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`,`Số ${vat} trong kho còn lại là:`,`${F(a*b)} − ${F(k)} = ${F(a*b-k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, chia đều vào '+NUM+' (\\S+)\\. .+? lấy ra '+NUM+' '))){const t=m[1],a=N(m[2]),b=N(m[3]),h=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,...(k===1?[`${t} lấy ra 1 túi để tặng bạn, nên ${t} đã tặng bạn ${F(p)} ${dv}.`]:[`${t} đã tặng bạn số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`]));L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Có '+NUM+' [^.]+? chia đều vào '+NUM+' (\\S+)\\. (.+?) lấy '+NUM+' '))){const a=N(m[1]),b=N(m[2]),h=m[3],t=m[4],k=N(m[5]);const p=a/b;L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(p)} (${dv})`,`${t} lấy được số ${vat} là:`,`${F(p)} × ${k} = ${F(p*k)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('(?:^Có|có) '+NUM+' [^,.]+?,? chia đều vào '+NUM+' (\\S+)\\. Hỏi mỗi'))){const a=N(m[1]),b=N(m[2]),h=m[3];L.push(`Mỗi ${h} có số ${vat} là:`,`${F(a)} : ${b} = ${F(a/b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Mỗi (\\S+) có '+NUM+' .+?Hỏi '+NUM+' '))){const h=m[1],a=N(m[2]),b=N(m[3]);L.push(`${b} ${h} có tất cả số ${vat} là:`,`${F(a)} × ${b} = ${F(a*b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' (\\S+), mỗi \\S+ có '+NUM+' .+? cho bạn '+NUM+' '))){const t=m[1],b=N(m[2]),h=m[3],a=N(m[4]),c=N(m[5]);L.push(`${t} có tất cả số ${vat} là:`,`${a} × ${b} = ${a*b} (${dv})`,`${t} còn lại số ${vat} là:`,`${a*b} − ${c} = ${a*b-c} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^Thùng thứ nhất có '+NUM+' .+?thùng thứ hai có '+NUM+' .+?lấy ra '+NUM+' '))){const a=N(m[1]),b=N(m[2]),d=N(m[3]);L.push(`Thùng thứ nhất còn lại số ${vat} là:`,`${F(a)} − ${F(d)} = ${F(a-d)} (${dv})`,`Lúc này cả hai thùng còn số ${vat} là:`,`${F(a-d)} + ${F(b)} = ${F(a-d+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('^(.+?) có '+NUM+' [^,]+, (.+?) có '+NUM+' .+?cả hai bạn'))){const a=N(m[2]),b=N(m[4]);L.push(`Cả hai bạn có số ${vat} là:`,`${F(a)} + ${F(b)} = ${F(a+b)} (${dv})`);L.push(fin());return L.join('\n')}
if(m=q.match(new RegExp('có '+NUM+' .+?đã bán '+NUM+' '))){const a=N(m[1]),b=N(m[2]);L.push(`Cửa hàng còn lại số ${vat} là:`,`${F(a)} − ${F(b)} = ${F(a-b)} (${dv})`);L.push(fin());return L.join('\n')}
L.push('Đọc kĩ đề, xác định cái đã cho và cái phải tìm, chọn phép tính thích hợp rồi tính.');L.push(fin());return L.join('\n');
};

LG['tb3_55_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/có (\d{1,3}(?: \d{3})*) (.+?), đã bán (\d{1,3}(?: \d{3})*) /);
 if(!m)return 'Bài giải\nMuốn biết còn lại bao nhiêu, ta lấy số lúc đầu trừ đi số đã bán.\nĐáp số: '+it.a+'.';
 const a=N(m[1]),v=m[2],b=N(m[3]);
 return 'Bài giải\nCửa hàng còn lại số '+v+' là:\n'+F(a)+' − '+F(b)+' = '+F(a-b)+' ('+v+')\nĐáp số: '+it.a+'.';};

LG['tb3_55_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/kho có (\d{1,3}(?: \d{3})*) (.+?)\. Lần đầu chuyển đi (\d{1,3}(?: \d{3})*) .+?, lần sau chuyển đi (\d{1,3}(?: \d{3})*) /);
 if(!m)return 'Bài giải\nBước 1: tính số còn lại sau lần chuyển thứ nhất.\nBước 2: lấy kết quả đó trừ tiếp số chuyển đi lần sau.\nĐáp số: '+it.a+'.';
 const a=N(m[1]),v=m[2],b=N(m[3]),d=N(m[4]),p=a-b;
 return 'Bài giải\nSau lần đầu chuyển đi, kho còn lại số '+v+' là:\n'+F(a)+' − '+F(b)+' = '+F(p)+' ('+v+')\nSau hai lần chuyển đi, kho còn lại số '+v+' là:\n'+F(p)+' − '+F(d)+' = '+F(p-d)+' ('+v+')\nĐáp số: '+it.a+'.';};

LG['tb3_56_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const m=String(it.q).match(/(\d[\d ]*?)\s*×\s*(\d[\d ]*)/);
 if(!m)return 'Đặt tính rồi nhân lần lượt từ phải sang trái.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[2]),d=String(a).split('').reverse().map(Number);
 const H=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn'];
 const L=['Đặt tính: viết '+F(a)+' ở trên, '+b+' ở dưới thẳng cột với hàng đơn vị, viết dấu × ở giữa, kẻ gạch ngang.','Nhân từ phải sang trái:'];let c=0;
 d.forEach((x,i)=>{const p=b*x,t=p+c,last=i===d.length-1;let s='• '+(H[i]||'')+': '+b+' nhân '+x+' bằng '+p+(c?', thêm '+c+' bằng '+t:'');
  if(last)s+=', viết '+t+'.';else s+=', viết '+(t%10)+(t>=10?', nhớ '+Math.floor(t/10):'')+'.';L.push(s);c=Math.floor(t/10)});
 L.push('Vậy '+F(a)+' × '+b+' = '+it.a+'.');return L.join('\n');};

LG['tb3_56_2']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);let m;
 if((m=q.match(/x\s*:\s*(\d[\d ]*?)\s*=\s*(\d[\d ]*)/))){const b=N(m[1]),c=N(m[2]);
  return 'x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\nx = '+F(c)+' × '+F(b)+'\nx = '+F(c*b)+'\nVậy '+it.a+'.'}
 if((m=q.match(/x\s*×\s*(\d[\d ]*?)\s*=\s*(\d[\d ]*)/))){const b=N(m[1]),c=N(m[2]);
  return 'x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\nx = '+F(c)+' : '+F(b)+'\nx = '+F(Math.floor(c/b))+'\nVậy '+it.a+'.'}
 if((m=q.match(/(\d[\d ]*?)\s*([×:])\s*(\d[\d ]*?)\s*\+\s*(\d[\d ]*)/))){const a=N(m[1]),b=N(m[3]),d=N(m[4]),nh=m[2]==='×',p=nh?a*b:Math.floor(a/b);
  return 'Biểu thức có phép '+(nh?'nhân':'chia')+' và phép cộng: ta thực hiện phép '+(nh?'nhân':'chia')+' trước, phép cộng sau.\n'+F(a)+' '+m[2]+' '+F(b)+' + '+F(d)+' = '+F(p)+' + '+F(d)+'\n= '+F(p+d)+'\nVậy giá trị của biểu thức là '+it.a+'.'}
 return 'Dựa vào quy tắc tìm thành phần chưa biết hoặc thứ tự thực hiện phép tính (nhân, chia trước; cộng, trừ sau).\nĐáp số: '+it.a+'.';};

LG['tb3_56_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/Mỗi (\S+) có (\d{1,3}(?: \d{3})*) (.+?)\. Hỏi (\d{1,3}(?: \d{3})*) \S+ như thế/);
 if(!m)return 'Bài giải\nTa lấy số đồ vật ở mỗi nhóm nhân với số nhóm.\nĐáp số: '+it.a+'.';
 const h=m[1],a=N(m[2]),v=m[3],b=N(m[4]);
 return 'Bài giải\n'+F(b)+' '+h+' như thế có tất cả số '+v+' là:\n'+F(a)+' × '+F(b)+' = '+F(a*b)+' ('+v+')\nĐáp số: '+it.a+'.';};

LG['tb3_56_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/có (\d{1,3}(?: \d{3})*) lô hàng, mỗi lô có (\d{1,3}(?: \d{3})*) (.+?)\. Người ta đã chuyển đi (\d{1,3}(?: \d{3})*) /);
 if(!m)return 'Bài giải\nBước 1: tính số hàng có trong kho (phép nhân).\nBước 2: lấy số đó trừ đi số đã chuyển đi.\nĐáp số: '+it.a+'.';
 const b=N(m[1]),a=N(m[2]),v=m[3],k=N(m[4]),p=a*b;
 return 'Bài giải\nTrong kho có tất cả số '+v+' là:\n'+F(a)+' × '+F(b)+' = '+F(p)+' ('+v+')\nTrong kho còn lại số '+v+' là:\n'+F(p)+' − '+F(k)+' = '+F(p-k)+' ('+v+')\nĐáp số: '+it.a+'.';};

LG['tb3_57_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const m=String(it.q).match(/(\d[\d ]*?)\s*:\s*(\d[\d ]*)/);
 if(!m)return 'Đặt tính rồi chia lần lượt từ trái sang phải.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[2]),ds=String(a).split('').map(Number),L=['Đặt tính rồi chia từ trái sang phải:'];let cur=0,started=false;
 ds.forEach((x,i)=>{cur=cur*10+x;if(!started&&cur<b&&i<ds.length-1)return;const qd=Math.floor(cur/b),r=cur-qd*b;
  let s='• '+(!started?'Lấy '+cur+' chia '+b:'Hạ '+x+', được '+cur+'; '+cur+' chia '+b)+' được '+qd+', viết '+qd+'; ';
  s+=qd+' nhân '+b+' bằng '+(qd*b)+'; '+cur+' trừ '+(qd*b)+' bằng '+r+'.';L.push(s);started=true;cur=r});
 const qt=Math.floor(a/b),r=a%b;
 L.push('Vậy '+F(a)+' : '+b+' = '+F(qt)+(r?' (dư '+r+'). Số dư '+r+' bé hơn số chia '+b+'.':'.'));
return L.join('\n');};

LG['tb3_57_2']=LG['tb3_56_2'];

LG['tb3_57_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/có (\d{1,3}(?: \d{3})*) (.+?),? chia đều vào (\d{1,3}(?: \d{3})*) (\S+)\./i);
 if(!m)return 'Bài giải\nTa lấy tổng số đồ vật chia cho số phần bằng nhau.\nĐáp số: '+it.a+'.';
 const a=N(m[1]),v=m[2],b=N(m[3]),h=m[4];
 return 'Bài giải\nMỗi '+h+' có số '+v+' là:\n'+F(a)+' : '+F(b)+' = '+F(Math.floor(a/b))+' ('+v+')\nĐáp số: '+it.a+'.';};

LG['tb3_57_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/^(.+?) có (\d{1,3}(?: \d{3})*) (.+?), chia đều vào (\d{1,3}(?: \d{3})*) túi\. .+? lấy ra (\d{1,3}(?: \d{3})*) túi/);
 if(!m)return 'Bài giải\nBước 1: tìm số đồ vật trong mỗi túi (phép chia).\nBước 2: nhân với số túi đem tặng.\nĐáp số: '+it.a+'.';
 const t=m[1],a=N(m[2]),v=m[3],b=N(m[4]),k=N(m[5]),p=Math.floor(a/b);
 if(k===1)return 'Bài giải\nMỗi túi có số '+v+' là:\n'+F(a)+' : '+F(b)+' = '+F(p)+' ('+v+')\n'+t+' lấy ra 1 túi để tặng bạn, nên '+t+' đã tặng '+F(p)+' '+v+'.\nĐáp số: '+it.a+'.';
 return 'Bài giải\nMỗi túi có số '+v+' là:\n'+F(a)+' : '+F(b)+' = '+F(p)+' ('+v+')\n'+t+' đã tặng số '+v+' là:\n'+F(p)+' × '+F(k)+' = '+F(p*k)+' ('+v+')\nĐáp số: '+it.a+'.';};

LG['tb3_5_1']=function(it){
 const q=String(it.q);let m;
 if((m=q.match(/(\d+)\s*×\s*(\d+)/))){const a=+m[1],b=+m[2];
  if(a!==3&&b===3)return 'Đổi chỗ hai thừa số: '+a+' × 3 = 3 × '+a+'.\nTheo bảng nhân 3: 3 × '+a+' = '+(a*b)+'.\nVậy '+a+' × 3 = '+it.a+'.';
  return a+' × '+b+' là '+a+' được lấy '+b+' lần. Theo bảng nhân '+a+': '+a+' × '+b+' = '+(a*b)+'.\nVậy '+a+' × '+b+' = '+it.a+'.'}
 if((m=q.match(/(\d+)\s*:\s*(\d+)/))){const a=+m[1],b=+m[2],c=Math.floor(a/b);
  return 'Dựa vào bảng nhân '+b+': '+b+' × '+c+' = '+a+', nên '+a+' : '+b+' = '+c+'.\nVậy '+a+' : '+b+' = '+it.a+'.'}
 return 'Nhẩm theo bảng nhân, bảng chia đã học.\nVậy kết quả là '+it.a+'.';};

LG['tb3_5_2']=function(it){
 const q=String(it.q);let m;
 if((m=q.match(/(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/))){const x=+m[1]*+m[2],y=+m[3]*+m[4];
  return 'Tính từng vế: '+m[1]+' × '+m[2]+' = '+x+'; '+m[3]+' × '+m[4]+' = '+y+'.\nSo sánh: '+x+' '+(x>y?'>':x<y?'<':'=')+' '+y+'.\nVậy '+m[1]+' × '+m[2]+' '+it.a+' '+m[3]+' × '+m[4]+'.'}
 if((m=q.match(/(\d+)\s*×\s*\?\s*=\s*(\d+)/))){const a=+m[1],c=+m[2];
  return '? là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\n'+c+' : '+a+' = '+(c/a)+' (vì '+a+' × '+(c/a)+' = '+c+').\nVậy số cần điền là '+it.a+'.'}
 if((m=q.match(/\?\s*:\s*(\d+)\s*=\s*(\d+)/))){const b=+m[1],c=+m[2];
  return '? là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\n'+c+' × '+b+' = '+(c*b)+'.\nVậy số cần điền là '+it.a+'.'}
 if((m=q.match(/(\d+)\s*:\s*\?\s*=\s*(\d+)/))){const a=+m[1],c=+m[2];
  return '? là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.\n'+a+' : '+c+' = '+(a/c)+'.\nVậy số cần điền là '+it.a+'.'}
 return 'Dựa vào bảng nhân, bảng chia để tìm số thích hợp.\nVậy đáp án là '+it.a+'.';};

LG['tb3_5_3']=function(it){
 const q=String(it.q);let m;
 if((m=q.match(/Mỗi (\S+) có (\d+) (.+?)\. Hỏi (\d+) \S+ như thế/))){const h=m[1],a=+m[2],v=m[3],b=+m[4];
  return 'Bài giải\n'+b+' '+h+' như thế có tất cả số '+v+' là:\n'+a+' × '+b+' = '+(a*b)+' ('+v+')\nĐáp số: '+it.a+'.'}
 if((m=q.match(/có (\d+) (.+?), chia đều vào (\d+) (\S+)\./))){const a=+m[1],v=m[2],b=+m[3],h=m[4];
  return 'Bài giải\nMỗi '+h+' có số '+v+' là:\n'+a+' : '+b+' = '+Math.floor(a/b)+' ('+v+')\nĐáp số: '+it.a+'.'}
 return 'Bài giải\nXác định phép nhân hay phép chia phù hợp rồi tính.\nĐáp số: '+it.a+'.';};

LG['tb3_5_4']=function(it){
 const q=String(it.q);let m;
 if((m=q.match(/^(.+?) có (\d+) (\S+), mỗi \S+ có (\d+) (.+?)\. .+? cho bạn (\d+) /))){const t=m[1],b=+m[2],h=m[3],a=+m[4],v=m[5],c=+m[6],p=a*b;
  return 'Bài giải\n'+t+' có tất cả số '+v+' là:\n'+a+' × '+b+' = '+p+' ('+v+')\n'+t+' còn lại số '+v+' là:\n'+p+' − '+c+' = '+(p-c)+' ('+v+')\nĐáp số: '+it.a+'.'}
 if((m=q.match(/Có (\d+) (.+?) chia đều vào (\d+) (\S+)\. (.+?) lấy (\d+) /))){const a=+m[1],v=m[2],b=+m[3],h=m[4],t=m[5],k=+m[6],p=Math.floor(a/b);
  return 'Bài giải\nMỗi '+h+' có số '+v+' là:\n'+a+' : '+b+' = '+p+' ('+v+')\n'+t+' lấy được số '+v+' là:\n'+p+' × '+k+' = '+(p*k)+' ('+v+')\nĐáp số: '+it.a+'.'}
 return 'Bài giải\nBước 1: tính tổng số đồ vật (hoặc số đồ vật mỗi phần).\nBước 2: tính tiếp theo yêu cầu đề bài.\nĐáp số: '+it.a+'.';};

LG['tb3_63_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const m=String(it.q).match(/(\d[\d ]*?)\s*([+−-])\s*(\d[\d ]*)/);
 if(!m)return 'Đặt tính thẳng cột rồi tính từ phải sang trái.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[3]),cong=m[2]==='+',x=String(a).split('').reverse().map(Number),y=String(b).split('').reverse().map(Number),n=Math.max(x.length,y.length);
 const H=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn','hàng trăm nghìn'];
 const L=['Đặt tính: viết '+F(a)+' ở trên, '+F(b)+' ở dưới sao cho các chữ số cùng hàng thẳng cột với nhau, viết dấu '+(cong?'+':'−')+', kẻ gạch ngang.','Tính từ phải sang trái:'];let c=0;
 for(let i=0;i<n;i++){const u=x[i]||0,v=y[i]||0,last=i===n-1;let s='• '+(H[i]||'')+': ';
  if(i>=y.length&&!c){s+='hạ '+u+', viết '+u+'.';L.push(s);continue}
  if(cong){const t=u+v+c;s+=u+' cộng '+v+' bằng '+(u+v)+(c?', thêm 1 bằng '+t:'')+', viết '+(last?t:t%10)+(!last&&t>=10?', nhớ 1':'')+'.';c=(!last&&t>=10)?1:0}
  else{const vv=v+c,pre=c?v+' thêm 1 bằng '+vv+'; ':'';
   if(u>=vv){const r=u-vv;s+=pre+u+' trừ '+vv+' bằng '+r+(last&&r===0&&i>0?' (không viết chữ số 0 ở hàng cao nhất).':', viết '+r+'.');c=0}
   else{s+=pre+u+' không trừ được '+vv+', lấy 1'+u+' trừ '+vv+' bằng '+(10+u-vv)+', viết '+(10+u-vv)+', nhớ 1.';c=1}}
  L.push(s)}
 L.push('Vậy '+F(a)+' '+(cong?'+':'−')+' '+F(b)+' = '+it.a+'.');return L.join('\n');};

LG['tb3_63_2']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const q=it.q.replace(/[−–]/g,'-');let m;
  if((m=q.match(/x\s*\+\s*([\d ]*\d)\s*=\s*([\d ]*\d)/))){const b=P(m[1]),c=P(m[2]);
    return 'x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nx + '+F(b)+' = '+F(c)+'\nx = '+F(c)+' − '+F(b)+'\nx = '+F(c-b)+'\nVậy '+it.a+'.';}
  if((m=q.match(/([\d ]*\d)\s*\+\s*x\s*=\s*([\d ]*\d)/))){const a=P(m[1]),c=P(m[2]);
    return 'x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\n'+F(a)+' + x = '+F(c)+'\nx = '+F(c)+' − '+F(a)+'\nx = '+F(c-a)+'\nVậy '+it.a+'.';}
  return 'Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nVậy '+it.a+'.';
};
LG['tb3_63_3']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.match(/^(.+?) có (\d[\d ]*\d|\d) ([^,]+), (.+?) có (\d[\d ]*\d|\d) ([^.]+)\./);
  if(!m) return 'Bài giải\nMuốn tìm số đồ vật của cả hai bạn, ta làm phép cộng.\nĐáp số: '+it.a+'.';
  const a=P(m[2]),b=P(m[5]),u=m[3].trim();
  return 'Bài giải\nCả hai bạn có số '+u+' là:\n'+F(a)+' + '+F(b)+' = '+F(a+b)+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb3_63_4']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.match(/thứ nhất có (\d[\d ]*\d|\d) ([^,]+), thùng thứ hai có (\d[\d ]*\d|\d) [^.]+\. Người ta lấy ra (\d[\d ]*\d|\d)/);
  if(!m) return 'Bài giải\nTính số còn lại ở thùng thứ nhất, rồi cộng với số ở thùng thứ hai.\nĐáp số: '+it.a+'.';
  const a=P(m[1]),u=m[2].trim(),b=P(m[3]),c=P(m[4]);
  return 'Bài giải\nSau khi lấy ra, thùng thứ nhất còn lại số '+u+' là:\n'+F(a)+' − '+F(c)+' = '+F(a-c)+' ('+u+')\nLúc này cả hai thùng còn số '+u+' là:\n'+F(a-c)+' + '+F(b)+' = '+F(a-c+b)+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb3_64_1']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.replace(/[−–]/g,'-').match(/(\d[\d ]*\d|\d)\s*-\s*(\d[\d ]*\d|\d)/);
  if(!m) return 'Đặt tính thẳng hàng, trừ từ phải sang trái.\nVậy kết quả là '+it.a+'.';
  const a=P(m[1]),b=P(m[2]);const A=String(a).split('').reverse().map(Number),B=String(b).split('').reverse().map(Number);
  const hang=['Hàng đơn vị','Hàng chục','Hàng trăm','Hàng nghìn','Hàng chục nghìn','Hàng trăm nghìn'];
  const L=['Đặt tính: viết '+F(b)+' dưới '+F(a)+' sao cho các chữ số cùng hàng thẳng cột với nhau, rồi trừ từ phải sang trái:'];
  let nho=0;
  for(let i=0;i<A.length;i++){const x=A[i],y0=(B[i]||0),y=y0+nho;let s=hang[i]+': ';
    if(i>=B.length&&nho===0){s+='hạ '+x+', viết '+x+'.';if(!(i===A.length-1&&x===0))L.push(s);continue;}
    if(nho) s+=y0+' thêm 1 bằng '+y+'; ';
    if(x>=y&&i>=String(a-b).length){s+=x+' trừ '+y+' bằng 0, không viết (chữ số 0 đứng đầu bên trái không cần viết).';nho=0;}
    else if(x>=y){s+=x+' trừ '+y+' bằng '+(x-y)+', viết '+(x-y)+'.';nho=0;}
    else{s+=x+' không trừ được '+y+', lấy '+(x+10)+' trừ '+y+' bằng '+(x+10-y)+', viết '+(x+10-y)+', nhớ 1.';nho=1;}
    L.push(s);}
  L.push('Vậy '+F(a)+' − '+F(b)+' = '+it.a+'.');return L.join('\n');
};
LG['tb3_64_2']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const q=it.q.replace(/[−–]/g,'-');let m;
  if((m=q.match(/(\d[\d ]*\d|\d)\s*-\s*x\s*=\s*(\d[\d ]*\d|\d)/))){const a=P(m[1]),c=P(m[2]);
    return 'x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\n'+F(a)+' − x = '+F(c)+'\nx = '+F(a)+' − '+F(c)+'\nx = '+F(a-c)+'\nVậy '+it.a+'.';}
  if((m=q.match(/x\s*-\s*(\d[\d ]*\d|\d)\s*=\s*(\d[\d ]*\d|\d)/))){const b=P(m[1]),c=P(m[2]);
    return 'x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\nx − '+F(b)+' = '+F(c)+'\nx = '+F(c)+' + '+F(b)+'\nx = '+F(c+b)+'\nVậy '+it.a+'.';}
  return 'Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ; muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\nVậy '+it.a+'.';
};
LG['tb3_64_3']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.match(/có (\d[\d ]*\d|\d) ([^,]+), đã bán (\d[\d ]*\d|\d)/);
  if(!m) return 'Bài giải\nLấy số ban đầu trừ đi số đã bán.\nĐáp số: '+it.a+'.';
  const a=P(m[1]),u=m[2].trim(),b=P(m[3]);
  return 'Bài giải\nCửa hàng còn lại số '+u+' là:\n'+F(a)+' − '+F(b)+' = '+F(a-b)+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb3_64_4']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.match(/có (\d[\d ]*\d|\d) ([^.]+)\. Lần đầu chuyển đi (\d[\d ]*\d|\d) [^,]+, lần sau chuyển đi (\d[\d ]*\d|\d)/);
  if(!m) return 'Bài giải\nLấy số ban đầu trừ lần lượt số chuyển đi mỗi lần.\nĐáp số: '+it.a+'.';
  const a=P(m[1]),u=m[2].trim(),b=P(m[3]),c=P(m[4]);
  return 'Bài giải\nSau lần đầu, kho còn lại số '+u+' là:\n'+F(a)+' − '+F(b)+' = '+F(a-b)+' ('+u+')\nSau lần sau, kho còn lại số '+u+' là:\n'+F(a-b)+' − '+F(c)+' = '+F(a-b-c)+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb3_6_1']=function(it){
  const m=it.q.match(/(\d+)\s*([×x:])\s*(\d+)/);
  if(!m) return 'Dựa vào bảng nhân 4, bảng chia 4 để tính nhẩm.\nVậy kết quả là '+it.a+'.';
  const a=+m[1],b=+m[3];
  if(m[2]===':'){const q=a/b;const t=b===4?'4 × '+q:q+' × '+b;
    return 'Nhẩm theo bảng nhân 4: '+t+' = '+a+'.\nVì '+t+' = '+a+' nên '+a+' : '+b+' = '+it.a+'.';}
  return 'Nhẩm theo bảng nhân 4, ta có:\n'+a+' × '+b+' = '+it.a+'.';
};
LG['tb3_6_2']=function(it){
  const q=it.q;let m;
  const ev=s=>{const t=s.match(/(\d+)\s*([×:+\-−])\s*(\d+)/);if(!t){const n=s.match(/\d+/);return n?[+n[0],n[0]]:[NaN,s];}
    const a=+t[1],b=+t[3],o=t[2];const v=o==='×'?a*b:o===':'?a/b:o==='+'?a+b:a-b;return [v,a+' '+(o==='-'?'−':o)+' '+b];};
  if(/Điền dấu/.test(q)&&(m=q.match(/:\s*(.+?)\s*(?:…|\.\.\.)\s*(.+)$/))){
    const L=ev(m[1]),R=ev(m[2]);const d=L[0]>R[0]?'>':L[0]<R[0]?'<':'=';
    const st=[];if(/[×:+\-−]/.test(m[1]))st.push(L[1]+' = '+L[0]);if(/[×:+\-−]/.test(m[2]))st.push(R[1]+' = '+R[0]);
    return 'Tính giá trị từng vế: '+st.join('; ')+'.\nVì '+L[0]+' '+d+' '+R[0]+' nên '+L[1]+' '+it.a+' '+R[1]+'.';}
  if((m=q.match(/(\d+)\s*×\s*\?\s*=\s*(\d+)/))) return 'Số cần tìm là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.\n'+m[2]+' : '+m[1]+' = '+(m[2]/m[1])+'\nVậy số cần điền là '+it.a+' ('+m[1]+' × '+it.a+' = '+m[2]+').';
  if((m=q.match(/\?\s*×\s*(\d+)\s*=\s*(\d+)/))) return 'Số cần tìm là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.\n'+m[2]+' : '+m[1]+' = '+(m[2]/m[1])+'\nVậy số cần điền là '+it.a+' ('+it.a+' × '+m[1]+' = '+m[2]+').';
  if((m=q.match(/\?\s*:\s*(\d+)\s*=\s*(\d+)/))) return 'Số cần tìm là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\n'+m[2]+' × '+m[1]+' = '+(m[2]*m[1])+'\nVậy số cần điền là '+it.a+' ('+it.a+' : '+m[1]+' = '+m[2]+').';
  if((m=q.match(/(\d+)\s*:\s*\?\s*=\s*(\d+)/))) return 'Số cần tìm là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.\n'+m[1]+' : '+m[2]+' = '+(m[1]/m[2])+'\nVậy số cần điền là '+it.a+' ('+m[1]+' : '+it.a+' = '+m[2]+').';
  return 'Dựa vào bảng nhân 4, bảng chia 4 để tìm số thích hợp.\nVậy đáp án là '+it.a+'.';
};
LG['tb3_6_3']=function(it){
  let m=it.q.match(/Mỗi (\S+) có (\d+) ([^.]+)\. Hỏi (\d+) /);
  if(m){const a=+m[2],n=+m[4],u=m[3].trim();
    return 'Bài giải\n'+n+' '+m[1]+' như thế có tất cả số '+u+' là:\n'+a+' × '+n+' = '+(a*n)+' ('+u+')\nĐáp số: '+it.a+'.';}
  m=it.q.match(/có (\d+) ([^,]+), chia đều vào (\d+) (\S+)\./);
  if(m){const a=+m[1],n=+m[3],u=m[2].trim();
    return 'Bài giải\nMỗi '+m[4]+' có số '+u+' là:\n'+a+' : '+n+' = '+(a/n)+' ('+u+')\nĐáp số: '+it.a+'.';}
  return 'Bài giải\nDùng bảng nhân 4, bảng chia 4 để tính.\nĐáp số: '+it.a+'.';
};
LG['tb3_6_4']=function(it){
  const m=it.q.match(/^(.+?) có (\d+) (\S+), mỗi \S+ có (\d+) ([^.]+)\. .+? cho bạn (\d+)/);
  if(!m) return 'Bài giải\nTính số đồ vật có tất cả, rồi trừ đi số đã cho bạn.\nĐáp số: '+it.a+'.';
  const n=+m[2],a=+m[4],u=m[5].trim(),c=+m[6],ten=m[1];
  return 'Bài giải\n'+ten+' có tất cả số '+u+' là:\n'+a+' × '+n+' = '+(a*n)+' ('+u+')\n'+ten+' còn lại số '+u+' là:\n'+(a*n)+' − '+c+' = '+(a*n-c)+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb3_70_1']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.match(/(\d[\d ]*\d|\d)\s*[×x]\s*(\d)\b/);
  if(!m) return 'Đặt tính, nhân lần lượt từ phải sang trái.\nVậy kết quả là '+it.a+'.';
  const a=P(m[1]),b=+m[2];const A=String(a).split('').reverse().map(Number);
  const hang=['Hàng đơn vị','Hàng chục','Hàng trăm','Hàng nghìn','Hàng chục nghìn'];
  const L=['Đặt tính: viết '+b+' dưới chữ số hàng đơn vị của '+F(a)+', rồi nhân lần lượt từ phải sang trái:'];
  let nho=0;
  for(let i=0;i<A.length;i++){const p=b*A[i],t=p+nho;let s=(hang[i]||'Tiếp')+': '+b+' nhân '+A[i]+' bằng '+p;
    if(nho)s+=', thêm '+nho+' bằng '+t;
    if(i<A.length-1&&t>=10){s+=', viết '+(t%10)+', nhớ '+Math.floor(t/10)+'.';nho=Math.floor(t/10);}
    else{s+=', viết '+(i<A.length-1?t:t)+'.';nho=0;}
    L.push(s);}
  L.push('Vậy '+F(a)+' × '+b+' = '+it.a+'.');return L.join('\n');
};
LG['tb3_70_2']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const q=it.q.replace(/[−–]/g,'-');let m;
  const N='(\\d[\\d ]*\\d|\\d)';
  if((m=q.match(new RegExp('x\\s*:\\s*'+N+'\\s*=\\s*'+N)))){const b=P(m[1]),c=P(m[2]);
    return 'x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\nx : '+b+' = '+F(c)+'\nx = '+F(c)+' × '+b+'\nx = '+F(c*b)+'\nVậy '+it.a+'.';}
  if((m=q.match(new RegExp('x\\s*×\\s*'+N+'\\s*=\\s*'+N)))||(m=q.match(new RegExp(N+'\\s*×\\s*x\\s*=\\s*'+N)))){const b=P(m[1]),c=P(m[2]);
    return 'x là thừa số chưa biết. Muốn tìm thừa số, ta lấy tích chia cho thừa số kia.\n'+m[0].replace(/-/g,'−')+'\nx = '+F(c)+' : '+F(b)+'\nx = '+F(c/b)+'\nVậy '+it.a+'.';}
  if((m=q.match(new RegExp(N+'\\s*×\\s*'+N+'\\s*([+-])\\s*'+N)))){const a=P(m[1]),b=P(m[2]),o=m[3],c=P(m[4]);const t=a*b,r=o==='+'?t+c:t-c;
    return 'Biểu thức có phép nhân và phép '+(o==='+'?'cộng':'trừ')+', ta thực hiện phép nhân trước, phép '+(o==='+'?'cộng':'trừ')+' sau.\n'+F(a)+' × '+F(b)+' '+(o==='+'?'+':'−')+' '+F(c)+' = '+F(t)+' '+(o==='+'?'+':'−')+' '+F(c)+'\n= '+F(r)+'\nVậy giá trị biểu thức là '+it.a+'.';}
  if((m=q.match(new RegExp(N+'\\s*([+-])\\s*'+N+'\\s*×\\s*'+N)))){const c=P(m[1]),o=m[2],a=P(m[3]),b=P(m[4]);const t=a*b,r=o==='+'?c+t:c-t;
    return 'Biểu thức có phép nhân và phép '+(o==='+'?'cộng':'trừ')+', ta thực hiện phép nhân trước.\n'+F(c)+' '+(o==='+'?'+':'−')+' '+F(a)+' × '+F(b)+' = '+F(c)+' '+(o==='+'?'+':'−')+' '+F(t)+'\n= '+F(r)+'\nVậy giá trị biểu thức là '+it.a+'.';}
  return 'Trong biểu thức có phép nhân và phép cộng, trừ, ta thực hiện phép nhân trước.\nVậy kết quả là '+it.a+'.';
};
LG['tb3_70_3']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.match(/Mỗi (\S+) có (\d[\d ]*\d|\d) ([^.]+)\. Hỏi (\d+) /);
  if(!m) return 'Bài giải\nLấy số đồ vật ở mỗi nhóm nhân với số nhóm.\nĐáp số: '+it.a+'.';
  const a=P(m[2]),n=+m[4],u=m[3].trim();
  return 'Bài giải\n'+n+' '+m[1]+' như thế có tất cả số '+u+' là:\n'+F(a)+' × '+n+' = '+F(a*n)+' ('+u+')\nĐáp số: '+it.a+'.';
};
LG['tb3_70_4']=function(it){
  const P=s=>parseInt(String(s).replace(/\s/g,''),10);
  const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
  const m=it.q.match(/có (\d+) lô hàng, mỗi lô có (\d[\d ]*\d|\d) ([^.]+)\. Người ta đã chuyển đi (\d[\d ]*\d|\d)/);
  if(!m) return 'Bài giải\nTính số hàng trong kho (phép nhân), rồi trừ đi số đã chuyển đi.\nĐáp số: '+it.a+'.';
  const n=+m[1],a=P(m[2]),u=m[3].trim(),c=P(m[4]);
  return 'Bài giải\nLúc đầu trong kho có số '+u+' là:\n'+F(a)+' × '+n+' = '+F(a*n)+' ('+u+')\nTrong kho còn lại số '+u+' là:\n'+F(a*n)+' − '+F(c)+' = '+F(a*n-c)+' ('+u+')\nĐáp số: '+it.a+'.';
};

LG['tb3_71_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const m=String(it.q).match(/(\d[\d ]*\d|\d)\s*:\s*(\d+)/);
 if(!m)return 'Đặt tính rồi chia lần lượt từ trái sang phải, mỗi lần: chia, nhân, trừ, hạ.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[2]),ds=String(a).split('').map(Number),L=[];
 let i=0,r=ds[0];
 if(r<b&&ds.length>1){i=1;r=r*10+ds[1];}
 let first=true;
 for(;i<ds.length;i++){
  if(!first){r=r*10+ds[i];}
  const q=Math.floor(r/b),p=q*b,rem=r-p;
  let s=first?'• '+r+' chia '+b+' được '+q+', viết '+q+'; '+q+' nhân '+b+' bằng '+p+'; '+r+' trừ '+p+' bằng '+rem+'.'
   :'• Hạ '+ds[i]+', được '+r+'; '+r+' chia '+b+' được '+q+', viết '+q+'; '+q+' nhân '+b+' bằng '+p+'; '+r+' trừ '+p+' bằng '+rem+'.';
  L.push(s);first=false;r=rem;
 }
 const kq=Math.floor(a/b);
 return 'Đặt tính rồi chia từ trái sang phải:\n'+L.join('\n')+'\nVậy '+F(a)+' : '+b+' = '+it.a+(r&&!/dư/.test(it.a)?' (dư '+r+')':'')+'.';};

LG['tb3_71_2']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const nm='(\\d{1,3}(?: \\d{3})*)';
 let m=q.match(new RegExp('x\\s*×\\s*'+nm+'\\s*=\\s*'+nm));
 if(m){const b=N(m[1]),c=N(m[2]);
  return 'x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\nx × '+F(b)+' = '+F(c)+'\nx = '+F(c)+' : '+F(b)+'\n'+it.a;}
 m=q.match(new RegExp(nm+'\\s*:\\s*'+nm+'\\s*\\+\\s*'+nm));
 if(m){const a=N(m[1]),b=N(m[2]),c=N(m[3]),t=Math.floor(a/b);
  return 'Biểu thức có phép chia và phép cộng: ta thực hiện phép chia trước, phép cộng sau.\n'+F(a)+' : '+F(b)+' + '+F(c)+' = '+F(t)+' + '+F(c)+'\n= '+F(t+c)+'\nVậy giá trị biểu thức là '+it.a+'.';}
 return 'Thực hiện phép nhân, chia trước; cộng, trừ sau.\nVậy kết quả là '+it.a+'.';};

LG['tb3_71_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/Có (\d{1,3}(?: \d{3})*) (.+?) chia đều vào (\d+) ([^.]+?)\./);
 if(!m)return 'Bài giải\nMuốn biết mỗi phần có bao nhiêu, ta lấy tổng số chia cho số phần.\nĐáp số: '+it.a+'.';
 const a=N(m[1]),v=m[2],b=N(m[3]),c=m[4];const u=String(it.a).replace(/^[\d ]+/,'').trim()||v;
 return 'Bài giải\nMỗi '+c+' có số '+v+' là:\n'+F(a)+' : '+b+' = '+F(Math.floor(a/b))+' ('+u+')\nĐáp số: '+it.a+'.';};

LG['tb3_71_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/^(.+?) có (\d{1,3}(?: \d{3})*) (.+?), chia đều vào (\d+) ([^.]+?)\. .+? lấy ra (\d+) /);
 if(!m)return 'Bài giải\nBước 1: tìm số đồ vật trong mỗi phần (phép chia).\nBước 2: nhân số trong mỗi phần với số phần đã lấy ra.\nĐáp số: '+it.a+'.';
 const ten=m[1],a=N(m[2]),v=m[3],b=N(m[4]),c=m[5],k=N(m[6]),t=Math.floor(a/b);const u=String(it.a).replace(/^[\d ]+/,'').trim()||v;
 return 'Bài giải\nMỗi '+c+' có số '+v+' là:\n'+F(a)+' : '+b+' = '+F(t)+' ('+u+')\n'+ten+' đã tặng bạn số '+v+' là:\n'+F(t)+' × '+k+' = '+F(t*k)+' ('+u+')\nĐáp số: '+it.a+'.';};

LG['tb3_77_1']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');
 const H=['hàng đơn vị','hàng chục','hàng trăm','hàng nghìn','hàng chục nghìn','hàng trăm nghìn'];
 const q=String(it.q);let m=q.match(/(\d{1,3}(?: \d{3})*)\s*([−\-+])\s*(\d{1,3}(?: \d{3})*)/);
 if(!m)return 'Đặt tính thẳng cột, tính từ phải sang trái.\nVậy kết quả là '+it.a+'.';
 const a=N(m[1]),b=N(m[3]),cong=m[2]==='+',A=String(a).split('').reverse().map(Number),B=String(b).split('').reverse().map(Number),L=[];
 let c=0;
 for(let i=0;i<A.length||(cong&&i<B.length);i++){
  const x=A[i]||0,y0=B[i]||0;
  if(i>=B.length&&c===0){L.push('• '+H[i][0].toUpperCase()+H[i].slice(1)+': hạ '+x+', viết '+x+'.');continue;}
  if(cong){const s=x+y0+c,w=s%10;let t='• '+H[i][0].toUpperCase()+H[i].slice(1)+': '+x+' cộng '+y0+' bằng '+(x+y0)+(c?', thêm 1 bằng '+s:'');t+=s>=10?', viết '+w+', nhớ 1.':', viết '+w+'.';L.push(t);c=s>=10?1:0;}
  else{const y=y0+c;let t='• '+H[i][0].toUpperCase()+H[i].slice(1)+': ';if(c)t+=y0+' thêm 1 bằng '+y+'; ';
   if(x<y){t+=x+' không trừ được '+y+', lấy '+(x+10)+' trừ '+y+' bằng '+(x+10-y)+', viết '+(x+10-y)+', nhớ 1.';c=1;}
   else{t+=x+' trừ '+y+' bằng '+(x-y)+((x-y)===0&&i===A.length-1?' (không viết chữ số 0 ở đầu).':', viết '+(x-y)+'.');c=0;}L.push(t);}
 }
 if(cong&&c)L.push('• Viết 1 (số nhớ) ở hàng tiếp theo.');
 return 'Đặt tính thẳng cột, tính từ phải sang trái:\n'+L.join('\n')+'\nVậy '+F(a)+' '+(cong?'+':'−')+' '+F(b)+' = '+it.a+'.';};

LG['tb3_77_2']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q).replace(/[–-]/g,'−');
 const nm='(\\d{1,3}(?: \\d{3})*)';let m;
 if(m=q.match(new RegExp('x\\s*−\\s*'+nm+'\\s*=\\s*'+nm))){const b=N(m[1]),c=N(m[2]);
  return 'x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\nx − '+F(b)+' = '+F(c)+'\nx = '+F(c)+' + '+F(b)+'\n'+it.a;}
 if(m=q.match(new RegExp(nm+'\\s*−\\s*x\\s*=\\s*'+nm))){const a=N(m[1]),c=N(m[2]);
  return 'x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\n'+F(a)+' − x = '+F(c)+'\nx = '+F(a)+' − '+F(c)+'\n'+it.a;}
 if(m=q.match(new RegExp('x\\s*\\+\\s*'+nm+'\\s*=\\s*'+nm))||q.match(new RegExp(nm+'\\s*\\+\\s*x\\s*=\\s*'+nm))){const b=N(m[1]),c=N(m[2]);
  return 'x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nx = '+F(c)+' − '+F(b)+'\n'+it.a;}
 return 'Xác định x là thành phần nào của phép tính rồi áp dụng quy tắc tìm thành phần chưa biết.\nVậy '+it.a+'.';};

LG['tb3_77_3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/có (\d{1,3}(?: \d{3})*) (.+?), đã bán (\d{1,3}(?: \d{3})*) /);
 if(!m)return 'Bài giải\nMuốn biết còn lại bao nhiêu, ta lấy số lúc đầu trừ đi số đã bán.\nĐáp số: '+it.a+'.';
 const a=N(m[1]),v=m[2],b=N(m[3]);const u=String(it.a).replace(/^[\d ]+/,'').trim()||v;
 return 'Bài giải\nCửa hàng còn lại số '+v+' là:\n'+F(a)+' − '+F(b)+' = '+F(a-b)+' ('+u+')\nĐáp số: '+it.a+'.';};

LG['tb3_77_4']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const m=q.match(/kho có (\d{1,3}(?: \d{3})*) (.+?)\. Lần đầu chuyển đi (\d{1,3}(?: \d{3})*) .+?, lần sau chuyển đi (\d{1,3}(?: \d{3})*) /);
 if(!m)return 'Bài giải\nBước 1: tính số còn lại sau lần chuyển thứ nhất.\nBước 2: lấy kết quả đó trừ tiếp số chuyển đi lần sau.\nĐáp số: '+it.a+'.';
 const a=N(m[1]),v=m[2],b=N(m[3]),d=N(m[4]),p=a-b;const u=String(it.a).replace(/^[\d ]+/,'').trim()||v;
 return 'Bài giải\nSau lần đầu, kho còn lại số '+v+' là:\n'+F(a)+' − '+F(b)+' = '+F(p)+' ('+u+')\nSau lần sau, kho còn lại số '+v+' là:\n'+F(p)+' − '+F(d)+' = '+F(p-d)+' ('+u+')\nĐáp số: '+it.a+'.';};

LG['tb3_9_1']=function(it){
 const q=String(it.q);let m;
 if(m=q.match(/(\d+)\s*×\s*(\d+)/)){const a=+m[1],b=+m[2],x=a===6?b:a;
  return (a===6?'':'Đổi chỗ các thừa số thì tích không thay đổi: '+a+' × '+b+' = 6 × '+x+'.\n')+'Theo bảng nhân 6: 6 × '+x+' = '+(6*x)+'.\nVậy '+a+' × '+b+' = '+it.a+'.';}
 if(m=q.match(/(\d+)\s*:\s*(\d+)/)){const a=+m[1],b=+m[2],x=a/b;
  return 'Theo bảng nhân 6: '+(b===6?'6 × '+x:'6 × '+b)+' = '+a+'.\nVậy '+a+' : '+b+' = '+it.a+'.';}
 return 'Dựa vào bảng nhân 6, bảng chia 6.\nVậy kết quả là '+it.a+'.';};

LG['tb3_9_2']=function(it){
 const q=String(it.q);let m;
 if(m=q.match(/(\d+)\s*×\s*(\d+)\s*…\s*(\d+)\s*×\s*(\d+)/)){const l=m[1]*m[2],r=m[3]*m[4];
  return 'Tính giá trị mỗi vế: '+m[1]+' × '+m[2]+' = '+l+'; '+m[3]+' × '+m[4]+' = '+r+'.\nVì '+l+' '+(l<r?'<':l>r?'>':'=')+' '+r+' nên ta điền dấu '+it.a+'.';}
 if(m=q.match(/(\d+)\s*×\s*\?\s*=\s*(\d+)/)||q.match(/\?\s*×\s*(\d+)\s*=\s*(\d+)/)){const a=+m[1],c=+m[2];
  return 'Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\n'+c+' : '+a+' = '+(c/a)+'.\nVậy số cần điền là '+it.a+'.';}
 if(m=q.match(/\?\s*:\s*(\d+)\s*=\s*(\d+)/)){const b=+m[1],c=+m[2];
  return 'Muốn tìm số bị chia, ta lấy thương nhân với số chia.\n'+c+' × '+b+' = '+(c*b)+'.\nVậy số cần điền là '+it.a+'.';}
 if(m=q.match(/(\d+)\s*:\s*\?\s*=\s*(\d+)/)){const a=+m[1],c=+m[2];
  return 'Muốn tìm số chia, ta lấy số bị chia chia cho thương.\n'+a+' : '+c+' = '+(a/c)+'.\nVậy số cần điền là '+it.a+'.';}
 return 'Dựa vào bảng nhân 6, bảng chia 6 để tìm số còn thiếu.\nVậy số cần điền là '+it.a+'.';};

LG['tb3_9_3']=function(it){
 const q=String(it.q);let m;
 if(m=q.match(/có (\d+) (.+?), chia đều vào (\d+) ([^.]+?)\./)){const a=+m[1],v=m[2],b=+m[3],c=m[4],u=String(it.a).replace(/^[\d ]+/,'').trim()||v;
  return 'Bài giải\nMỗi '+c+' có số '+v+' là:\n'+a+' : '+b+' = '+(a/b)+' ('+u+')\nĐáp số: '+it.a+'.';}
 if(m=q.match(/Mỗi (.+?) có (\d+) (.+?)\. Hỏi (\d+) /)){const c=m[1],a=+m[2],v=m[3],k=+m[4],u=String(it.a).replace(/^[\d ]+/,'').trim()||v;
  return 'Bài giải\n'+k+' '+c+' có tất cả số '+v+' là:\n'+a+' × '+k+' = '+(a*k)+' ('+u+')\nĐáp số: '+it.a+'.';}
 return 'Bài giải\nChia đều thì dùng phép chia; tìm tất cả nhiều nhóm bằng nhau thì dùng phép nhân.\nĐáp số: '+it.a+'.';};

LG['tb3_9_4']=function(it){
 const q=String(it.q);
 const m=q.match(/^(.+?) có (\d+) ([^,]+?), mỗi [^,]+? có (\d+) (.+?)\. .+? cho bạn (\d+) /);
 if(!m)return 'Bài giải\nBước 1: tính số đồ vật có tất cả (phép nhân).\nBước 2: lấy số có tất cả trừ đi số đã cho.\nĐáp số: '+it.a+'.';
 const ten=m[1],k=+m[2],a=+m[4],v=m[5],g=+m[6],t=k*a,u=String(it.a).replace(/^[\d ]+/,'').trim()||v;
 return 'Bài giải\n'+ten+' có tất cả số '+v+' là:\n'+a+' × '+k+' = '+t+' ('+u+')\n'+ten+' còn lại số '+v+' là:\n'+t+' − '+g+' = '+(t-g)+' ('+u+')\nĐáp số: '+it.a+'.';};

LG['tien3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const nm='(\\d{1,3}(?: \\d{3})*)';let m;
 if(m=q.match(new RegExp('Có '+nm+' đồng, mua đồ hết '+nm+' đồng'))){const a=N(m[1]),b=N(m[2]);
  return 'Bài giải\nSố tiền còn lại là:\n'+F(a)+' − '+F(b)+' = '+F(a-b)+' (đồng)\nĐáp số: '+it.a+'.';}
 if(m=q.match(new RegExp('Mua (.+?) '+nm+' đồng và (.+?) '+nm+' đồng'))){const a=N(m[2]),b=N(m[4]);
  return 'Bài giải\nMua cả hai thứ hết số tiền là:\n'+F(a)+' + '+F(b)+' = '+F(a+b)+' (đồng)\nĐáp số: '+it.a+'.';}
 return 'Bài giải\nTính số tiền theo yêu cầu của đề (cộng khi mua thêm, trừ khi tiêu bớt).\nĐáp số: '+it.a+'.';};

LG['timtp3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q).replace(/[–\-]/g,'−');
 const nm='(\\d{1,3}(?: \\d{3})*)';let m;
 if(m=q.match(new RegExp('x\\s*\\+\\s*'+nm+'\\s*=\\s*'+nm))||q.match(new RegExp(nm+'\\s*\\+\\s*x\\s*=\\s*'+nm))){const b=N(m[1]),c=N(m[2]),e=q.match(/Tìm x:\s*(.+)$/);
  return 'x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\n'+(e?e[1].trim()+'\n':'')+'x = '+F(c)+' − '+F(b)+'\n'+it.a;}
 if(m=q.match(new RegExp('x\\s*−\\s*'+nm+'\\s*=\\s*'+nm))){const b=N(m[1]),c=N(m[2]),e=q.match(/Tìm x:\s*(.+)$/);
  return 'x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\n'+(e?e[1].trim()+'\n':'')+'x = '+F(c)+' + '+F(b)+'\n'+it.a;}
 if(m=q.match(new RegExp(nm+'\\s*−\\s*x\\s*=\\s*'+nm))){const a=N(m[1]),c=N(m[2]),e=q.match(/Tìm x:\s*(.+)$/);
  return 'x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\n'+(e?e[1].trim()+'\n':'')+'x = '+F(a)+' − '+F(c)+'\n'+it.a;}
 return 'Xác định x là thành phần nào của phép tính rồi áp dụng quy tắc tìm thành phần chưa biết.\nVậy '+it.a+'.';};

LG['timtpnc3']=function(it){
 const N=s=>+String(s).replace(/\s/g,''),F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' '),q=String(it.q);
 const nm='(\\d{1,3}(?: \\d{3})*)';let m;
 if(m=q.match(new RegExp('x\\s*×\\s*'+nm+'\\s*=\\s*'+nm))||q.match(new RegExp(nm+'\\s*×\\s*x\\s*=\\s*'+nm))){const b=N(m[1]),c=N(m[2]),e=q.match(/Tìm x:\s*(.+)$/);
  return 'x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\n'+(e?e[1].trim()+'\n':'')+'x = '+F(c)+' : '+F(b)+'\n'+it.a;}
 if(m=q.match(new RegExp('x\\s*:\\s*'+nm+'\\s*=\\s*'+nm))){const b=N(m[1]),c=N(m[2]),e=q.match(/Tìm x:\s*(.+)$/);
  return 'x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\n'+(e?e[1].trim()+'\n':'')+'x = '+F(c)+' × '+F(b)+'\n'+it.a;}
 if(m=q.match(new RegExp(nm+'\\s*:\\s*x\\s*=\\s*'+nm))){const a=N(m[1]),c=N(m[2]),e=q.match(/Tìm x:\s*(.+)$/);
  return 'x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.\n'+(e?e[1].trim()+'\n':'')+'x = '+F(a)+' : '+F(c)+'\n'+it.a;}
 return 'Xác định x là thành phần nào của phép tính rồi áp dụng quy tắc tìm thành phần chưa biết.\nVậy '+it.a+'.';};

LG['trungdiem3']=function(it){var q=String(it.q||''),a=String(it.a||'');var m=q.match(/([A-Z])\s*là trung điểm của đoạn thẳng\s*([A-Z])([A-Z])\s*dài\s*(\d+)\s*(cm|mm|dm|m)/);if(m){var M=m[1],A=m[2],B=m[3],n=+m[4],u=m[5],h=n/2;return 'Bài giải\n'+M+' là trung điểm của đoạn thẳng '+A+B+' nên '+A+M+' = '+M+B+' (độ dài '+A+M+' bằng một nửa độ dài '+A+B+').\nĐộ dài đoạn thẳng '+A+M+' là:\n'+n+' : 2 = '+h+' ('+u+')\nĐáp số: '+a+'.';}if(/mấy phần bằng nhau/.test(q))return 'Trung điểm của đoạn thẳng là điểm ở giữa hai đầu của đoạn thẳng và chia đoạn thẳng đó thành hai đoạn dài bằng nhau.\nVậy trung điểm chia đoạn thẳng thành '+a+' phần bằng nhau.';return 'Trung điểm của đoạn thẳng là điểm ở giữa và chia đoạn thẳng thành hai phần bằng nhau, mỗi phần dài bằng một nửa đoạn thẳng.\nVậy đáp án là: '+a+'.';};

LG['bdc4']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
const m=[...q.matchAll(/Lớp\s*(\w+):\s*(\d+)/g)].map(x=>[x[1],+x[2]]);if(m.length<2)return 'Đọc số liệu của từng lớp rồi cộng lại; so sánh để tìm lớp nhiều nhất.\nĐáp số: '+A;
const S=m.reduce((p,c)=>p+c[1],0),mx=m.reduce((p,c)=>c[1]>p[1]?c:p);const srt=[...m].sort((x,y)=>y[1]-x[1]);
return 'Bài giải\nSố cây cả bốn lớp trồng được là:\n'+m.map(x=>x[1]).join(' + ')+' = '+S+' (cây)\nSo sánh số cây: '+srt.map((x,i)=>(i?(srt[i-1][1]===x[1]?' = ':' > '):'')+x[1]).join('')+'.\nLớp '+mx[0]+' trồng được nhiều nhất ('+mx[1]+' cây).\nĐáp số: '+A;};
LG['bt3']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m;const D=(s)=>'Bài giải\n'+s+'\nĐáp số: '+A;
if((m=q.match(/mua (\d+) kg gạo, mỗi ki-lô-gam giá ([\d ]+) đồng và (\d+) chai dầu ăn, mỗi chai giá ([\d ]+) đồng\. Mẹ đưa cô bán hàng ([\d ]+) đồng/))){const x=+m[1],y=N(m[2]),z=+m[3],w=N(m[4]),T=N(m[5]),g=x*y,d=z*w,t=g+d;
return D('Số tiền mua gạo là:\n'+F(y)+' × '+x+' = '+F(g)+' (đồng)\nSố tiền mua dầu ăn là:\n'+F(w)+' × '+z+' = '+F(d)+' (đồng)\nMẹ phải trả tất cả số tiền là:\n'+F(g)+' + '+F(d)+' = '+F(t)+' (đồng)\nCô bán hàng phải trả lại mẹ số tiền là:\n'+F(T)+' − '+F(t)+' = '+F(T-t)+' (đồng)');}
if((m=q.match(/có (\d+) bao gạo, mỗi bao nặng (\d+) kg\. Buổi sáng cửa hàng bán được (\d+) kg, buổi chiều bán được (\d+) kg/))){const a=+m[1],b=+m[2],c=+m[3],d=+m[4];
return D('Cửa hàng có tất cả số ki-lô-gam gạo là:\n'+b+' × '+a+' = '+F(a*b)+' (kg)\nCả hai buổi cửa hàng bán được số ki-lô-gam gạo là:\n'+c+' + '+d+' = '+F(c+d)+' (kg)\nCửa hàng còn lại số ki-lô-gam gạo là:\n'+F(a*b)+' − '+F(c+d)+' = '+F(a*b-c-d)+' (kg)');}
if((m=q.match(/Thùng thứ nhất chứa (\d+) l.*?nhiều hơn thùng thứ nhất (\d+) l.*?ít hơn thùng thứ hai (\d+) l/))){const a=+m[1],b=+m[2],c=+m[3],t2=a+b,t3=t2-c;
return D('Thùng thứ hai chứa số lít nước mắm là:\n'+a+' + '+b+' = '+t2+' (l)\nThùng thứ ba chứa số lít nước mắm là:\n'+t2+' − '+c+' = '+t3+' (l)\nCả ba thùng chứa số lít nước mắm là:\n'+a+' + '+t2+' + '+t3+' = '+F(a+t2+t3)+' (l)');}
if((m=q.match(/có (\d+) lớp, mỗi lớp có (\d+) học sinh\. Trong đó có (\d+) học sinh nam/))){const a=+m[1],b=+m[2],nam=+m[3],t=a*b,nu=t-nam;
return D('Cả khối lớp Bốn có số học sinh là:\n'+b+' × '+a+' = '+t+' (học sinh)\nKhối lớp Bốn có số học sinh nữ là:\n'+t+' − '+nam+' = '+nu+' (học sinh)\nSố học sinh nữ nhiều hơn số học sinh nam là:\n'+nu+' − '+nam+' = '+(nu-nam)+' (học sinh)');}
if((m=q.match(/Xe thứ nhất chở (\d+) bao.*?xe thứ hai chở (\d+) bao, mỗi bao nặng (\d+) kg\. Người ta đã dỡ xuống ([\d ]+) kg/))){const a=+m[1],b=+m[2],c=+m[3],d=N(m[4]),s=a+b,k=s*c;
return D('Cả hai xe chở số bao xi măng là:\n'+a+' + '+b+' = '+s+' (bao)\nCả hai xe chở số ki-lô-gam xi măng là:\n'+c+' × '+s+' = '+F(k)+' (kg)\nTrên hai xe còn lại số ki-lô-gam xi măng là:\n'+F(k)+' − '+F(d)+' = '+F(k-d)+' (kg)');}
return 'Đọc kĩ đề, tìm các bước trung gian rồi tính kết quả cuối cùng.\nĐáp số: '+A;};
LG['btchu']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m;
if((m=q.match(/a \+ b × (\d+) với a = (\d+), b = (\d+)/))){const c=+m[1],a=+m[2],b=+m[3];return 'Thay a = '+a+', b = '+b+' vào biểu thức, ta có:\n'+a+' + '+b+' × '+c+' = '+a+' + '+F(b*c)+' = '+F(a+b*c)+'\n(Nhân trước, cộng sau.)\nVậy giá trị của biểu thức là '+A+'.';}
if((m=q.match(/\(a \+ b\) × c với a = (\d+), b = (\d+), c = (\d+)/))){const a=+m[1],b=+m[2],c=+m[3];return 'Thay a = '+a+', b = '+b+', c = '+c+' vào biểu thức, ta có:\n('+a+' + '+b+') × '+c+' = '+(a+b)+' × '+c+' = '+F((a+b)*c)+'\n(Tính trong ngoặc trước.)\nVậy giá trị của biểu thức là '+A+'.';}
if((m=q.match(/P = a × 4\. Tính P với a = (\d+) cm/))){const s=+m[1];return 'Thay a = '+s+' cm vào công thức, ta có:\nP = '+s+' × 4 = '+(s*4)+' (cm)\nVậy P = '+A+'.';}
return 'Thay giá trị của các chữ vào biểu thức rồi tính.\nVậy kết quả là '+A+'.';};
LG['chanle']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m;
if((m=q.match(/có (\d+) học sinh\. Cô giáo muốn xếp/))){const n=+m[1];return n%2?'Xếp thành từng cặp tức là chia cho 2.\n'+n+' có chữ số tận cùng là '+(n%10)+' nên '+n+' là số lẻ, không chia hết cho 2: '+n+' : 2 = '+((n-1)/2)+' (dư 1).\nVậy: '+A+'.':'Xếp thành từng cặp tức là chia cho 2.\n'+n+' có chữ số tận cùng là '+(n%10)+' nên '+n+' là số chẵn: '+n+' : 2 = '+(n/2)+'.\nVậy: '+A+'.';}
const ch=/chẵn/.test(q),n=N(A),d=n%10;
return 'Số chẵn là số có chữ số tận cùng là 0, 2, 4, 6, 8.\nSố lẻ là số có chữ số tận cùng là 1, 3, 5, 7, 9.\nSố '+A+' có chữ số tận cùng là '+d+' nên là số '+(d%2?'lẻ':'chẵn')+'.\nVậy số '+(ch?'chẵn':'lẻ')+' cần chọn là '+A+'.';};
LG['chia2']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
const m=q.match(/([\d ]+\d)\s*:\s*(\d+)/);if(!m)return 'Đặt tính rồi chia từ trái sang phải.\nVậy thương là '+A+'.';
const X=N(m[1]),y=+m[2],s=String(X);let i=0,cur=0;while(i<s.length&&cur*10+ +s[i]<y){cur=cur*10+ +s[i];i++}
const L=[];let first=true;let qs='';
while(i<s.length){cur=cur*10+ +s[i];if(!first)L.push('Hạ '+s[i]+', được '+cur+'.');const k=Math.floor(cur/y),p=k*y,r=cur-p;L.push(k?cur+' chia '+y+' được '+k+', viết '+k+'; '+k+' nhân '+y+' bằng '+p+'; '+cur+' trừ '+p+' bằng '+r+', viết '+r+'.':cur+' bé hơn '+y+' nên '+cur+' chia '+y+' được 0, viết 0.');qs+=k;cur=r;first=false;i++}
return 'Đặt tính rồi chia từ trái sang phải:\n'+L.join('\n')+'\nVậy '+m[1].trim()+' : '+y+' = '+A+(cur?' (dư '+cur+')':'')+'.';};
LG['chiaps4']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
const m=q.match(/(\d+)\/(\d+)\s*:\s*(\d+)(?:\/(\d+))?/);const e=m?m[0].trim():'';
if(m&&m[4])return 'Muốn chia hai phân số, ta lấy phân số thứ nhất nhân với phân số thứ hai đảo ngược.\nPhân số đảo ngược của '+m[3]+'/'+m[4]+' là '+m[4]+'/'+m[3]+'.\n'+e+' '+A+(A.split('=').length>3?'\n(Rút gọn phân số ở bước cuối.)':'');
if(m)return 'Muốn chia một phân số cho một số tự nhiên (khác 0), ta giữ nguyên tử số và nhân mẫu số với số đó.\n'+e+' = '+m[1]+'/('+m[2]+' × '+m[3]+') '+A+(A.split('=').length>2?'\n(Rút gọn phân số ở bước cuối.)':'');
return 'Thực hiện phép chia phân số rồi rút gọn (nếu được).\nKết quả: '+A;};
LG['cnc']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
const m=q.match(/([\d ]+\d)\s*\+\s*([\d ]+\d)/);if(!m)return 'Đặt tính rồi cộng từ phải sang trái.\nVậy kết quả là '+A+'.';
const a=String(N(m[1])),b=String(N(m[2])),HN=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu'];const n=Math.max(a.length,b.length);let c=0;const L=[];
for(let k=0;k<n;k++){const x=+(a[a.length-1-k]||0),hy=k<b.length,hx=k<a.length,y=+(b[b.length-1-k]||0),s=x+y+c;const t=[hx?x:null,hy?y:null].filter(v=>v!==null).join(' + ')+(c?' + 1 (nhớ)':'')+' = '+s;const c2=s>=10?1:0;L.push('Hàng '+HN[k]+': '+t+(c2?', viết '+(s%10)+', nhớ 1.':', viết '+s+'.'));c=c2}
if(c)L.push('Viết 1 (nhớ) sang hàng '+HN[n]+'.');
return 'Đặt tính thẳng cột, cộng từ phải sang trái:\n'+L.join('\n')+'\nVậy '+m[1].trim()+' + '+m[2].trim()+' = '+A+'.';};
LG['cps4']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
const m=q.match(/(\d+)\/(\d+)\s*\+\s*(\d+)\/(\d+)/);if(!m)return 'Quy đồng mẫu số rồi cộng hai phân số cùng mẫu.\nKết quả: '+A;
const a=+m[1],b=+m[2],c=+m[3],d=+m[4],M=b*d;
return 'Quy đồng mẫu số hai phân số (mẫu số chung là '+b+' × '+d+' = '+M+'):\n'+a+'/'+b+' = ('+a+' × '+d+')/('+b+' × '+d+') = '+(a*d)+'/'+M+';  '+c+'/'+d+' = ('+c+' × '+b+')/('+d+' × '+b+') = '+(c*b)+'/'+M+'.\nCộng hai phân số cùng mẫu: cộng hai tử số, giữ nguyên mẫu số.\n'+m[0]+' '+A+(A.split('=').length>3?'\n(Rút gọn phân số ở bước cuối.)':'');};
LG['cvbh']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m;
if((m=q.match(/hai cạnh kề nhau dài (\d+) cm và (\d+) cm/))){const a=+m[1],b=+m[2];return 'Chu vi hình bình hành bằng tổng độ dài hai cạnh kề nhau nhân với 2: '+A+'.\nBài giải\nChu vi hình bình hành là:\n('+a+' + '+b+') × 2 = '+((a+b)*2)+' (cm)\nĐáp số: '+((a+b)*2)+' cm';}
if((m=q.match(/cạnh dài (\d+) cm/))){const a=+m[1];return 'Hình thoi có bốn cạnh bằng nhau nên chu vi bằng độ dài một cạnh nhân với 4: '+A+'.\nBài giải\nChu vi hình thoi là:\n'+a+' × 4 = '+(a*4)+' (cm)\nĐáp số: '+(a*4)+' cm';}
return 'Bài giải\nChu vi là: '+A+'.';};
LG['dayso']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m;
if(/hai số liên tiếp/.test(q))return 'Trong dãy số tự nhiên, mỗi số hơn số liền trước nó 1 đơn vị (VD: 5 hơn 4 là 1 đơn vị).\nVậy hai số liên tiếp hơn (kém) nhau '+A+'.';
if((m=q.match(/liền sau của ([\d ]+\d)/))){const x=N(m[1]);return 'Muốn tìm số liền sau, ta lấy số đó cộng thêm 1.\n'+m[1].trim()+' + 1 = '+F(x+1)+'\nVậy số liền sau của '+m[1].trim()+' là '+A+'.';}
if((m=q.match(/liền trước của ([\d ]+\d)/))){const x=N(m[1]);return 'Muốn tìm số liền trước, ta lấy số đó trừ đi 1.\n'+m[1].trim()+' − 1 = '+F(x-1)+'\nVậy số liền trước của '+m[1].trim()+' là '+A+'.';}
return 'Hai số tự nhiên liên tiếp hơn (kém) nhau 1 đơn vị.\nVậy đáp án là '+A+'.';};
LG['dogoc']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
if(/bẹt/.test(q))return 'Góc bẹt có hai cạnh nằm trên cùng một đường thẳng, bằng hai góc vuông: 90° + 90° = 180°.\nVậy góc bẹt có số đo là '+A+'.';
if(/vuông/.test(q))return 'Dùng thước đo góc (hoặc ê ke) kiểm tra: góc vuông có số đo 90°.\nVậy góc vuông có số đo là '+A+'.';
if(/3 giờ/.test(q))return 'Lúc 3 giờ đúng, kim phút chỉ số 12, kim giờ chỉ số 3; hai kim tạo thành góc vuông.\nVậy góc đó có số đo là '+A+'.';
if(/Dụng cụ/.test(q))return 'Muốn đo góc, ta dùng thước đo góc (có vạch chia từ 0° đến 180°).\nVậy dụng cụ dùng để đo góc là '+A+'.';
return 'Đặt thước đo góc để đo rồi đọc số đo.\nĐáp án: '+A;};
LG['dtdv']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m;
if((m=q.match(/^(\d+) m² (\d+) dm² = … dm²/))){const a=+m[1],b=+m[2];return '1 m² = 100 dm² nên '+a+' m² = '+(a*100)+' dm².\n'+a+' m² '+b+' dm² = '+(a*100)+' dm² + '+b+' dm² = '+(a*100+b)+' dm².\nVậy số cần điền là '+A+'.';}
if((m=q.match(/^(\d+) m² = … dm²/))){const a=+m[1];return '1 m² = 100 dm² nên '+a+' m² = '+a+' × 100 dm² = '+(a*100)+' dm².\nVậy số cần điền là '+A+'.';}
if((m=q.match(/^(\d+) cm² = … dm²/))){const a=+m[1];return '100 cm² = 1 dm² nên '+a+' cm² = ('+a+' : 100) dm² = '+(a/100)+' dm².\nVậy số cần điền là '+A+'.';}
if((m=q.match(/^(\d+) cm² = … mm²/))){const a=+m[1];return '1 cm² = 100 mm² nên '+a+' cm² = '+a+' × 100 mm² = '+(a*100)+' mm².\nVậy số cần điền là '+A+'.';}
return 'Hai đơn vị đo diện tích liền nhau gấp (kém) nhau 100 lần.\nVậy số cần điền là '+A+'.';};
LG['giay']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m;
if((m=q.match(/^(\d+) phút (\d+) giây = … giây/))){const a=+m[1],b=+m[2];return '1 phút = 60 giây nên '+a+' phút = 60 × '+a+' = '+(a*60)+' giây.\n'+a+' phút '+b+' giây = '+(a*60)+' giây + '+b+' giây = '+(a*60+b)+' giây.\nVậy số cần điền là '+A+'.';}
if((m=q.match(/^(\d+) phút = … giây/))){const a=+m[1];return '1 phút = 60 giây nên '+a+' phút = 60 × '+a+' = '+(a*60)+' giây.\nVậy số cần điền là '+A+'.';}
if((m=q.match(/Năm (\d+) thuộc thế kỉ/))){const y=+m[1],c=Math.ceil(y/100);return '1 thế kỉ = 100 năm. Thế kỉ '+A.replace(/^thế kỉ\s*/,'')+' tính từ năm '+((c-1)*100+1)+' đến năm '+(c*100)+'.\nNăm '+y+' nằm trong khoảng đó.\nVậy năm '+y+' thuộc '+A+'.';}
return '1 phút = 60 giây; 1 thế kỉ = 100 năm.\nĐáp án: '+A;};
LG['hanglop']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
const m=q.match(/số ([\d ]+\d), chữ số (\d) thuộc hàng/);if(!m)return 'Xác định vị trí chữ số tính từ phải sang trái.\nĐáp án: '+A;
const s=String(N(m[1])),dg=m[2],HN=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu','chục triệu','trăm triệu'],LP=['lớp đơn vị','lớp đơn vị','lớp đơn vị','lớp nghìn','lớp nghìn','lớp nghìn','lớp triệu','lớp triệu','lớp triệu'];const k=s.length-1-s.indexOf(dg);
return 'Kể từ phải sang trái, các hàng là: đơn vị, chục, trăm (lớp đơn vị); nghìn, chục nghìn, trăm nghìn (lớp nghìn); triệu (lớp triệu).\nTrong số '+m[1].trim()+', chữ số '+dg+' đứng ở vị trí thứ '+(k+1)+' từ phải sang nên thuộc hàng '+HN[k]+', '+LP[k]+'.\nVậy chữ số '+dg+' thuộc '+A+'.';};
LG['hcn4']=function(it){const N=s=>+String(s).replace(/[^\d]/g,'');const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const G=(a,b)=>b?G(b,a%b):a;const q=String(it.q||''),A=String(it.a||'');const NUMS=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);
let m,P=0,h=0,half=0,ask=/Tính chiều dài và chiều rộng/.test(q),V=(q.match(/[Mm]ột (mảnh vườn|thửa ruộng|mảnh đất|khu vườn|sân chơi)/)||[])[1]||'hình chữ nhật';const L=['Bài giải'];
if((m=q.match(/Nửa chu vi .*? là (\d+) m, chiều dài hơn chiều rộng (\d+) m/))){half=+m[1];h=+m[2];}
else if((m=q.match(/hết (\d+) m hàng rào\. Biết chiều dài hơn chiều rộng (\d+) m/))){P=+m[1];h=+m[2];L.push('Độ dài hàng rào chính là chu vi '+V+': '+P+' m.');}
else if((m=q.match(/chu vi (\d+) m, chiều (?:dài hơn chiều rộng|rộng kém chiều dài) (\d+) m/))){P=+m[1];h=+m[2];}
else return 'Tìm nửa chu vi, rồi dùng bài toán tổng – hiệu để tìm chiều dài, chiều rộng.\nĐáp số: '+A;
if(!half){half=P/2;L.push('Nửa chu vi '+V+' là:\n'+P+' : 2 = '+half+' (m)');}
const d=(half+h)/2,r=d-h;
L.push('Ta có: chiều dài + chiều rộng = '+half+' m; chiều dài − chiều rộng = '+h+' m.');
L.push('Chiều dài '+V+' là:\n('+half+' + '+h+') : 2 = '+d+' (m)');
L.push('Chiều rộng '+V+' là:\n'+d+' − '+h+' = '+r+' (m)');
if(!ask)L.push('Diện tích '+V+' là:\n'+d+' × '+r+' = '+F(d*r)+' (m²)');
L.push('Đáp số: '+A);return L.join('\n');};

LG['lamtron']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const n=nums(q)[0];const d=Math.floor(n/10000)%10;const r=Math.round(n/1e5)*1e5;
return fin(['Khi làm tròn đến hàng trăm nghìn, ta xét chữ số hàng chục nghìn.','Số '+f(n)+' có chữ số hàng chục nghìn là '+d+'.',
d<5?'Vì '+d+' < 5 nên làm tròn xuống: giữ nguyên chữ số hàng trăm nghìn, các chữ số bên phải thay bằng 0.':'Vì '+d+' ≥ 5 nên làm tròn lên: cộng thêm 1 vào chữ số hàng trăm nghìn, các chữ số bên phải thay bằng 0.',
'Vậy làm tròn số '+f(n)+' đến hàng trăm nghìn ta được số '+A+'.']);}catch(e){}return 'Đáp án: '+A;};
LG['loaigoc']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const d=nums(q)[0];
return fin(['Góc nhọn bé hơn góc vuông (bé hơn 90°); góc vuông bằng 90°; góc tù lớn hơn góc vuông nhưng bé hơn góc bẹt (lớn hơn 90° và bé hơn 180°); góc bẹt bằng 180°.',
d<90?d+'° < 90° nên đây là góc nhọn.':d===90?'Góc có số đo bằng 90° nên là góc vuông.':d<180?'90° < '+d+'° < 180° nên đây là góc tù.':'Góc có số đo bằng 180° nên là góc bẹt.','Vậy góc có số đo '+d+'° là '+A+'.']);}catch(e){}return 'Đáp án: '+A;};
LG['nc4a']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const m=q.match(/Tổng của hai số là (.+?)\. Hiệu của hai số là (.+?)\./);const n=nums(A);
const fx=x=>x.length>1?x[0]*1000+x[1]:x[0];
const ma=A.match(/Tổng ([\d ]+?), hiệu ([\d ]+?):/);const S=+ma[1].replace(/ /g,''),D=+ma[2].replace(/ /g,'');const L=(S+D)/2,Bn=(S-D)/2;
return fin(['Bài giải',(m?m[1].charAt(0).toUpperCase()+m[1].slice(1):'Tổng')+' là '+f(S)+'. Vậy tổng hai số là '+f(S)+'.',(m?m[2].charAt(0).toUpperCase()+m[2].slice(1):'Hiệu')+' là '+f(D)+'. Vậy hiệu hai số là '+f(D)+'.',
'Số lớn là:','('+f(S)+' + '+f(D)+') : 2 = '+f(L),'Số bé là:',f(L)+' − '+f(D)+' = '+f(Bn),'Đáp số: '+A+'.']);}catch(e){}return 'Đáp án: '+A;};
LG['nc4b']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const n=nums(q);
if(/của hai số là/.test(q)){const T=n[0],x=n[1],r=T*2-x;return fin(['Bài giải','Tổng của hai số là:',T+' × 2 = '+f(T*2),'Số còn lại là:',f(T*2)+' − '+x+' = '+f(r),'Đáp số: '+f(r)+'.']);}
if(/của ba số là/.test(q)){const T=n[0],x=n[1],y=n[2],r=T*3-x-y;return fin(['Bài giải','Tổng của ba số là:',T+' × 3 = '+f(T*3),'Số thứ ba là:',f(T*3)+' − '+x+' − '+y+' = '+f(r),'Đáp số: '+f(r)+'.']);}
if(/ô tô/.test(q)){const [g1,v1,g2,v2]=n;const s1=g1*v1,s2=g2*v2,r=(s1+s2)/(g1+g2);return fin(['Bài giải','Quãng đường ô tô đi trong '+g1+' giờ đầu là:',v1+' × '+g1+' = '+s1+' (km)','Quãng đường ô tô đi trong '+g2+' giờ sau là:',v2+' × '+g2+' = '+s2+' (km)','Tổng số giờ ô tô đã đi là:',g1+' + '+g2+' = '+(g1+g2)+' (giờ)','Trung bình mỗi giờ ô tô đi được là:','('+s1+' + '+s2+') : '+(g1+g2)+' = '+r+' (km)','Đáp số: '+r+' km.']);}
if(/cân nặng/.test(q)){const [a,b,c]=n;const r=(a+b+c)/3;return fin(['Bài giải','Tổng cân nặng của ba bạn là:',a+' + '+b+' + '+c+' = '+(a+b+c)+' (kg)','Trung bình mỗi bạn cân nặng là:',(a+b+c)+' : 3 = '+r+' (kg)','Đáp số: '+r+' kg.']);}
return fin(['Muốn tìm số trung bình cộng, ta tính tổng các số rồi chia cho số các số hạng.']);}catch(e){}return 'Đáp án: '+A;};
LG['nc4c']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const e=q.replace(/^.*?:\s*/,'').replace(/–/g,'−');let m;
if(m=e.match(/^(\d+) × (\d+) ([+−]) \1 × (\d+)$/)){const a=+m[1],b=+m[2],c=+m[4],s=m[3]==='+'?b+c:b-c;return fin([m[3]==='+'?'Áp dụng: một số nhân với một tổng (a × b + a × c = a × (b + c)).':'Áp dụng: một số nhân với một hiệu (a × b − a × c = a × (b − c)).',e,'= '+a+' × ('+b+' '+m[3]+' '+c+')','= '+a+' × '+f(s),'= '+f(a*s)]);}
if(m=e.match(/^(\d+) × (\d+) × (\d+)$/)){const a=+m[1],b=+m[2],c=+m[3];if(a===25&&c===4||(a*c%100===0&&b*c%100!==0)){return fin(['Áp dụng tính chất giao hoán và kết hợp của phép nhân: nhóm '+a+' × '+c+' = '+(a*c)+' trước cho dễ tính.',e,'= ('+a+' × '+c+') × '+b,'= '+f(a*c)+' × '+b,'= '+f(a*b*c)]);}return fin(['Áp dụng tính chất kết hợp của phép nhân: nhóm '+b+' × '+c+' = '+(b*c)+' trước cho dễ tính.',e,'= '+a+' × ('+b+' × '+c+')','= '+a+' × '+f(b*c),'= '+f(a*b*c)]);}
if(m=e.match(/^(\d+) × (\d+) \+ \1$/)){const a=+m[1],b=+m[2];return fin(['Viết '+a+' thành '+a+' × 1 rồi áp dụng một số nhân với một tổng.',e,'= '+a+' × '+b+' + '+a+' × 1','= '+a+' × ('+b+' + 1)','= '+a+' × '+f(b+1),'= '+f(a*(b+1))]);}
return fin(['Áp dụng tính chất của phép nhân để nhóm thành số tròn chục, tròn trăm rồi tính.']);}catch(e){}return 'Đáp án: '+A;};
LG['nc4d']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const n=nums(q);const nm=(q.match(/của (?:bố|mẹ) và ([^ ]+(?: [^ ]+)?) là/)||[])[1]||'con';const name=nm.trim();const ng=/mẹ/.test(q)?'mẹ':'bố';const Ng=ng[0].toUpperCase()+ng.slice(1);
if(/năm nữa tổng/.test(q)){const [k,S,D]=n;const T=S-k*2,c=(T-D)/2;return fin(['Bài giải','Mỗi năm, mỗi người tăng thêm 1 tuổi nên sau '+k+' năm tổng số tuổi của hai người tăng thêm '+k+' × 2 = '+(k*2)+' tuổi.','Tổng số tuổi của '+ng+' và '+name+' hiện nay là:',S+' − '+k+' × 2 = '+T+' (tuổi)','Hiệu số tuổi không thay đổi theo thời gian. Tuổi của '+name+' hiện nay là:','('+T+' − '+D+') : 2 = '+c+' (tuổi)','Đáp số: '+c+' tuổi.']);}
if(/năm nữa (?:bố|mẹ) bao nhiêu/.test(q)){const [S,D,k]=n;const b=(S+D)/2;return fin(['Bài giải','Tuổi của '+ng+' hiện nay là:','('+S+' + '+D+') : 2 = '+b+' (tuổi)','Tuổi của '+ng+' '+k+' năm nữa là:',b+' + '+k+' = '+(b+k)+' (tuổi)','Đáp số: '+(b+k)+' tuổi.']);}
{const [S,D]=n;const c=(S-D)/2;return fin(['Bài giải','Tuổi của '+name+' là:','('+S+' − '+D+') : 2 = '+c+' (tuổi)','Tuổi của '+ng+' là:',c+' + '+D+' = '+(c+D)+' (tuổi)','Đáp số: '+name+': '+c+' tuổi; '+ng+': '+(c+D)+' tuổi.']);}}catch(e){}return 'Đáp án: '+A;};
LG['nc4e']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const n=nums(q);const u=(q.match(/chu vi \d+ (cm|m|dm)/)||[])[1]||'m';
if(/chiều dài hơn chiều rộng/.test(q)){const [d,P]=n;const r=(P/2-d)/2;return fin(['Bài giải','Nửa chu vi tấm bìa là:',P+' : 2 = '+(P/2)+' ('+u+')','Chiều rộng tấm bìa là:','('+(P/2)+' − '+d+') : 2 = '+r+' ('+u+')','Cắt bớt chiều dài '+d+' '+u+' thì chiều dài bằng chiều rộng, nên cạnh hình vuông bằng chiều rộng: '+r+' '+u+'.','Chu vi hình vuông là:',r+' × 4 = '+(r*4)+' ('+u+')','Đáp số: '+(r*4)+' '+u+'.']);}
{const [P,d]=n;const h=P/2,r=(h-d)/2,L=r+d;const obj=(q.match(/Một (mảnh vườn|mảnh đất|thửa ruộng|[^ ]+ [^ ]+) hình chữ nhật/)||[])[1]||'hình chữ nhật';
return fin(['Bài giải',(/giảm chiều dài/.test(q)?'Giảm chiều dài đi '+d+' '+u:'Tăng chiều rộng thêm '+d+' '+u)+' thì được hình vuông, nên chiều dài hơn chiều rộng '+d+' '+u+'.','Nửa chu vi '+obj+' là:',P+' : 2 = '+h+' ('+u+')','Chiều rộng '+obj+' là:','('+h+' − '+d+') : 2 = '+r+' ('+u+')','Chiều dài '+obj+' là:',r+' + '+d+' = '+L+' ('+u+')','Diện tích '+obj+' ban đầu là:',L+' × '+r+' = '+f(L*r)+' ('+u+'²)','Đáp số: '+f(L*r)+' '+u+'².']);}}catch(e){}return 'Đáp án: '+A;};
LG['nhan2']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const mul1=(a,d)=>{const ds=String(a).split('').reverse().map(Number);let c=0,parts=[];ds.forEach((x,i)=>{const p=d*x,t=p+c;const last=i===ds.length-1;let s=d+' × '+x+' = '+p+(c?', thêm '+c+' bằng '+t:'');if(last){s+=', viết '+t;c=0}else{s+=', viết '+(t%10)+(t>=10?' nhớ '+Math.floor(t/10):'');c=Math.floor(t/10)}parts.push(s)});return parts.join('; ')+'.';};const [a,b]=nums(q);const u=b%10,t=Math.floor(b/10);
if(u===0)return fin(['Nhân với số tròn chục: ta lấy '+a+' nhân với '+t+', rồi viết thêm một chữ số 0 vào bên phải tích.','• Đặt tính '+a+' × '+t+', nhân từ phải sang trái: '+mul1(a,t),'  → '+a+' × '+t+' = '+f(a*t)+'.','• Viết thêm chữ số 0 vào bên phải '+f(a*t)+' được '+f(a*b)+'.','Vậy '+a+' × '+b+' = '+A+'.']);
return fin(['Đặt tính: viết '+a+' ở trên, '+b+' ở dưới sao cho các chữ số cùng hàng thẳng cột, rồi nhân từ phải sang trái.','• Nhân với '+u+' (hàng đơn vị): '+mul1(a,u),'  → Tích riêng thứ nhất: '+f(a*u)+'.','• Nhân với '+t+' (hàng chục): '+mul1(a,t),'  → Tích riêng thứ hai: '+f(a*t)+', viết lùi sang trái một cột so với tích riêng thứ nhất.','• Cộng hai tích riêng: '+f(a*u)+' + '+f(a*t*10)+' = '+f(a*b)+'.','Vậy '+a+' × '+b+' = '+A+'.']);}catch(e){}return 'Đáp án: '+A;};
LG['pt100k']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const mul1=(a,d)=>{const ds=String(a).split('').reverse().map(Number);let c=0,parts=[];ds.forEach((x,i)=>{const p=d*x,t=p+c;const last=i===ds.length-1;let s=d+' × '+x+' = '+p+(c?', thêm '+c+' bằng '+t:'');if(last){s+=', viết '+t;c=0}else{s+=', viết '+(t%10)+(t>=10?' nhớ '+Math.floor(t/10):'');c=Math.floor(t/10)}parts.push(s)});return parts.join('; ')+'.';};const n=nums(q);const a=n[0],b=n[1];
if(/×/.test(q)){return fin(['Đặt tính rồi nhân từ phải sang trái:',mul1(a,b),'Vậy '+f(a)+' × '+b+' = '+A+'.']);}
const ds=String(a).split('').map(Number);let i=0,cur=ds[0];while(cur<b&&i<ds.length-1){i++;cur=cur*10+ds[i]}const st=[];let first=true,r=0;
while(true){const qq=Math.floor(cur/b);r=cur-qq*b;st.push(!first&&cur===0?'Hạ 0; 0 chia '+b+' được 0, viết 0.':(first?'Lấy '+cur:'Hạ '+ds[i]+', được '+cur+'; '+cur)+' chia '+b+' được '+qq+', viết '+qq+'; '+qq+' nhân '+b+' bằng '+(qq*b)+'; '+cur+' trừ '+(qq*b)+' bằng '+r+'.');first=false;i++;if(i>=ds.length)break;cur=r*10+ds[i];}
return fin(['Đặt tính rồi chia từ trái sang phải:'].concat(st.map(s=>'• '+s)).concat([r?'Vậy '+f(a)+' : '+b+' = '+f(Math.floor(a/b))+' (dư '+r+').':'Vậy '+f(a)+' : '+b+' = '+A+'.']));}catch(e){}return 'Đáp án: '+A;};
LG['nhanps4']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const m=q.match(/(\d+)\/(\d+) × (\d+)(?:\/(\d+))?/);const a=+m[1],b=+m[2],c=+m[3],d=m[4]?+m[4]:0;
const tu=a*c,mau=d?b*d:b,g=gcd(tu,mau);const rg=g>1?(mau/g===1?' = '+(tu/g):' = '+(tu/g)+'/'+(mau/g)):'';
const L=[d?'Muốn nhân hai phân số, ta lấy tử số nhân với tử số, mẫu số nhân với mẫu số.':'Muốn nhân phân số với số tự nhiên, ta lấy tử số nhân với số tự nhiên, giữ nguyên mẫu số.',
(d?a+'/'+b+' × '+c+'/'+d+' = ('+a+' × '+c+')/('+b+' × '+d+') ':a+'/'+b+' × '+c+' = ('+a+' × '+c+')/'+b+' ')+'= '+tu+'/'+mau+rg];
if(g>1)L.push('(Rút gọn: chia cả tử số và mẫu số của '+tu+'/'+mau+' cho '+g+'.)');return fin(L);}catch(e){}return 'Đáp án: '+A;};
LG['ps4']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{let m;
if(m=q.match(/Rút gọn phân số (\d+)\/(\d+)/)){const t=+m[1],s=+m[2],g=gcd(t,s);return fin(['Ta thấy '+t+' và '+s+' cùng chia hết cho '+g+'.','Chia cả tử số và mẫu số cho '+g+':',t+'/'+s+' = ('+t+' : '+g+')/('+s+' : '+g+') = '+(t/g)+'/'+(s/g),(t/g)+'/'+(s/g)+' không rút gọn được nữa (phân số tối giản).','Vậy rút gọn '+t+'/'+s+' được '+A+'.']);}
m=q.match(/(\d+)\/(\d+) ([+–−-]) (\d+)\/(\d+)/);const a=+m[1],M=+m[2],op=m[3]==='+'?'+':'−',b=+m[4];const r=op==='+'?a+b:a-b,g=gcd(r,M);
return fin([op==='+'?'Muốn cộng hai phân số cùng mẫu số, ta cộng hai tử số với nhau và giữ nguyên mẫu số.':'Muốn trừ hai phân số cùng mẫu số, ta trừ tử số của phân số thứ nhất cho tử số của phân số thứ hai và giữ nguyên mẫu số.',a+'/'+M+' '+op+' '+b+'/'+M+' = ('+a+' '+op+' '+b+')/'+M+' = '+r+'/'+M+(g>1?(M/g===1?' = '+r/g:' = '+(r/g)+'/'+(M/g)):''),g>1?'(Rút gọn '+r+'/'+M+': chia cả tử số và mẫu số cho '+g+'.)':'','Vậy kết quả là '+A+'.'].filter(Boolean));}catch(e){}return 'Đáp án: '+A;};
LG['psbn4']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{let m;
if(m=q.match(/bằng (\d+)\/(\d+) và có mẫu số là (\d+)/)){const t=+m[1],s=+m[2],M=+m[3],k=M/s;return fin(['Ta có '+M+' : '+s+' = '+k+'.','Nhân cả tử số và mẫu số của '+t+'/'+s+' với '+k+' (tính chất cơ bản của phân số):',t+'/'+s+' = ('+t+' × '+k+')/('+s+' × '+k+') = '+(t*k)+'/'+M,'Vậy '+A+'.']);}
m=q.match(/(\d+)\/(\d+)/);const t=+m[1],s=+m[2],g=gcd(t,s);return fin(['Ta thấy '+t+' và '+s+' cùng chia hết cho '+g+'.','Chia cả tử số và mẫu số cho '+g+':',t+'/'+s+' = ('+t+' : '+g+')/('+s+' : '+g+') = '+(t/g)+'/'+(s/g),'Vậy '+A+'.']);}catch(e){}return 'Đáp án: '+A;};
LG['psc4']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const [a,b]=nums(q);return fin(['Thương của phép chia số tự nhiên cho số tự nhiên (khác 0) có thể viết thành một phân số: tử số là số bị chia, mẫu số là số chia.','Số bị chia là '+a+' (tử số), số chia là '+b+' (mẫu số).','Vậy '+A+'.']);}catch(e){}return 'Đáp án: '+A;};
LG['pscua4']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const m=q.match(/(\d+)\/(\d+) của ([\d ]+)/);const t=+m[1],s=+m[2],S=+m[3].replace(/ /g,'');
return fin(['Muốn tìm '+t+'/'+s+' của '+f(S)+', ta lấy '+f(S)+' chia cho '+s+' rồi nhân với '+t+'.',t+'/'+s+' của '+f(S)+' là:',f(S)+' : '+s+' × '+t+' = '+f(S/s*t),'Đáp số: '+f(S/s*t)+'.']);}catch(e){}return 'Đáp án: '+A;};
LG['qd4']=function(it){const q=String(it.q||''),A=String(it.a||'');
const nz=s=>String(s).normalize('NFC').replace(/\s+/g,'').replace(/[−–]/g,'-').toLowerCase();
const f=n=>{const s=String(Math.abs(n));const r=s.length>=4?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s;return (n<0?'−':'')+r;};
const nums=s=>(String(s).match(/\d{1,3}(?: \d{3})+(?!\d)|\d+/g)||[]).map(x=>+x.replace(/ /g,''));
const gcd=(a,b)=>{a=Math.abs(a);b=Math.abs(b);while(b){[a,b]=[b,a%b]}return a||1;};
const fin=(L)=>{let s=L.join('\n');if(!nz(s).includes(nz(A)))s+='\nViết gọn: '+A;return s;};
try{const m=q.match(/(\d+)\/(\d+) và (\d+)\/(\d+)/);const a=+m[1],b=+m[2],c=+m[3],d=+m[4];const M=nums(A.split(';')[0]).pop()||b*d;const k1=M/b,k2=M/d;
return fin(['Lấy tích hai mẫu số làm mẫu số chung: '+b+' × '+d+' = '+M+'.','Nhân cả tử số và mẫu số của phân số thứ nhất với '+k1+', của phân số thứ hai với '+k2+':',a+'/'+b+' = ('+a+' × '+k1+')/('+b+' × '+k1+') = '+(a*k1)+'/'+M,c+'/'+d+' = ('+c+' × '+k2+')/('+d+' × '+k2+') = '+(c*k2)+'/'+M,'Vậy quy đồng mẫu số hai phân số '+a+'/'+b+' và '+c+'/'+d+' được: '+A+'.']);}catch(e){}return 'Đáp án: '+A;};

LG['so100k']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/số\s+(\d[\d ]*\d|\d)\s*,\s*chữ số\s+(\d)/);if(!m)return 'Xác định chữ số đó đứng ở hàng nào rồi đọc giá trị theo hàng.\nVậy giá trị là: '+a;var s=m[1].replace(/\s/g,''),d=m[2],i=s.indexOf(d);var H=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu'];if(i<0)return 'Xác định chữ số đó đứng ở hàng nào rồi đọc giá trị theo hàng.\nVậy giá trị là: '+a;var p=s.length-1-i;return 'Trong số '+m[1]+', chữ số '+d+' đứng ở hàng '+H[p]+'.\nNên chữ số '+d+' có giá trị là '+d+' '+H[p]+', tức là '+a+'.\nVậy chữ số '+d+' có giá trị là '+a+'.';};
LG['so6']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)\s*trăm nghìn,\s*(\d+)\s*chục nghìn,\s*(\d+)\s*nghìn,\s*(\d+)\s*trăm,\s*(\d+)\s*chục\s*và\s*(\d+)\s*đơn vị/);if(!m)return 'Viết lần lượt các chữ số từ hàng cao đến hàng thấp (hàng nào không có thì viết 0).\nVậy số đó viết là: '+a;var H=['trăm nghìn','chục nghìn','nghìn','trăm','chục','đơn vị'];var t=[];for(var i=0;i<6;i++)t.push('hàng '+H[i]+': '+m[i+1]);return 'Viết lần lượt các chữ số từ hàng cao đến hàng thấp:\n'+t.join('; ')+'.\nVậy số đó viết là: '+a+'.';};
LG['sosanh']=function(it){return LG['ss100k'](it);};
LG['ss100k']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/:\s*(\d[\d ]*\d|\d)\s*…\s*(\d[\d ]*\d|\d)/);var H=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu','chục triệu','trăm triệu','tỉ'];if(!m)return 'So sánh số chữ số trước; nếu bằng nhau thì so sánh từng cặp chữ số từ trái sang phải.\nVậy điền dấu: '+a;var x=m[1].replace(/\s/g,''),y=m[2].replace(/\s/g,'');var L=[];if(x.length!==y.length){L.push('Số '+m[1]+' có '+x.length+' chữ số, số '+m[2]+' có '+y.length+' chữ số.');L.push('Số nào có nhiều chữ số hơn thì lớn hơn.');}else if(x===y){L.push('Hai số có các chữ số ở từng hàng đều giống nhau.');}else{L.push('Hai số đều có '+x.length+' chữ số. So sánh từng cặp chữ số từ trái sang phải:');var i=0;while(x[i]===y[i])i++;var p=x.length-1-i;if(i===1)L.push('Chữ số hàng '+H[x.length-1]+' giống nhau.');else if(i>1)L.push('Các chữ số từ hàng '+H[x.length-1]+' đến hàng '+H[p+1]+' giống nhau.');L.push('Ở hàng '+H[p]+': '+x[i]+(x[i]>y[i]?' > ':' < ')+y[i]+'.');}L.push('Vậy '+m[1]+' '+a+' '+m[2]+'.');return L.join('\n');};
LG['ss4']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)\/(\d+)\s*và\s*(\d+)\/(\d+)/);if(!m)return 'Nếu hai phân số cùng mẫu số: phân số nào có tử số lớn hơn thì lớn hơn. Nếu khác mẫu số: quy đồng mẫu số rồi so sánh.\nĐáp số: '+a;var t1=+m[1],m1=+m[2],t2=+m[3],m2=+m[4];var s=function(u,v){return u>v?'>':u<v?'<':'=';};var P1=m[1]+'/'+m[2],P2=m[3]+'/'+m[4];if(m1===m2){return 'Hai phân số có cùng mẫu số là '+m1+', ta so sánh hai tử số: '+t1+' '+s(t1,t2)+' '+t2+'.\n'+(t1===t2?'Hai tử số bằng nhau nên hai phân số bằng nhau.':'Phân số nào có tử số lớn hơn thì phân số đó lớn hơn.')+'\nVậy '+a+'.';}var M=m1*m2,L=t1*m2,R=t2*m1,k=s(L,R);return 'Hai phân số khác mẫu số, ta quy đồng mẫu số hai phân số (mẫu số chung là '+m1+' × '+m2+' = '+M+'):\n'+P1+' = ('+t1+' × '+m2+')/('+m1+' × '+m2+') = '+L+'/'+M+'\n'+P2+' = ('+t2+' × '+m1+')/('+m2+' × '+m1+') = '+R+'/'+M+'\nHai phân số cùng mẫu số '+M+', so sánh tử số: '+L+' '+k+' '+R+' nên '+L+'/'+M+' '+k+' '+R+'/'+M+', tức là '+P1+' '+k+' '+P2+'.\nĐáp số: '+a+'.';};
LG['tb4_38_1']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var m=q.match(/(\d[\d ]*\d|\d)\s*[×x]\s*(\d+)/);if(!m)return 'Đặt tính thẳng cột, nhân lần lượt từ phải sang trái.\nVậy kết quả là: '+a;var A=m[1].replace(/\s/g,''),b=+m[2];var H=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn'];var L=['Đặt tính: viết '+m[1]+', viết '+b+' thẳng cột với hàng đơn vị, nhân lần lượt từ phải sang trái:'];var r=0;for(var i=A.length-1,k=0;i>=0;i--,k++){var d=+A[i],p=d*b,s=p+r;var t='• '+b+' nhân '+d+' bằng '+p+(r?', thêm '+r+' bằng '+s:'');var last=i===0;if(last)t+=', viết '+s+'.';else t+=', viết '+(s%10)+(s>=10?', nhớ '+Math.floor(s/10):'')+'.';L.push(t);r=last?0:Math.floor(s/10);}L.push('Vậy '+m[1]+' × '+b+' = '+f(+A*b)+'.');if(f(+A*b)!==a)L.push('Đáp số: '+a);return L.join('\n');};
LG['tb4_39_1']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var m=q.match(/(\d[\d ]*\d|\d)\s*:\s*(\d+)/);if(!m)return 'Đặt tính rồi chia lần lượt từ trái sang phải.\nVậy kết quả là: '+a;var A=m[1].replace(/\s/g,''),b=+m[2];var L=['Đặt tính rồi chia lần lượt từ trái sang phải:'];var i=0,cur=+A[0];while(cur<b&&i<A.length-1){i++;cur=cur*10+(+A[i]);}var first=true;while(true){var qd=Math.floor(cur/b),pr=qd*b,re=cur-pr;L.push('• '+(first?'':'Hạ '+A[i]+', được '+cur+'; ')+cur+' chia '+b+' được '+qd+', viết '+qd+'; '+qd+' nhân '+b+' bằng '+pr+'; '+cur+' trừ '+pr+' bằng '+re+'.');first=false;if(i>=A.length-1){cur=re;break;}i++;cur=re*10+(+A[i]);}var Q=Math.floor(+A/b),Rm=+A%b;L.push('Vậy '+m[1]+' : '+b+' = '+f(Q)+(Rm?' (dư '+Rm+')':'')+'.');var ans=f(Q)+(Rm?' (dư '+Rm+')':'');if(ans!==a)L.push('Đáp số: '+a);return L.join('\n');};
LG['tb4_43_1']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var m=q.match(/(\d[\d ]*\d|\d)\s*[×x]\s*(\d+)/);if(!m)return 'Đặt tính, nhân lần lượt với chữ số hàng đơn vị, rồi hàng chục (tích riêng thứ hai viết lùi sang trái một cột), sau đó cộng hai tích riêng.\nVậy kết quả là: '+a;var A=+m[1].replace(/\s/g,''),b=+m[2],u=b%10,c=Math.floor(b/10);var p1=A*u,p2=A*c;var L;if(u===0){L=['Đặt tính: viết '+m[1]+', viết '+b+' ở dưới sao cho các hàng thẳng cột.',b+' là số tròn chục, ta có: '+m[1]+' × '+b+' = '+m[1]+' × '+c+' × 10.','• Viết chữ số 0 ở hàng đơn vị của tích.','• '+m[1]+' nhân '+c+' bằng '+f(p2)+', viết '+f(p2)+' vào bên trái chữ số 0, được '+f(A*b)+'.'];}else{L=['Đặt tính: viết '+m[1]+', viết '+b+' ở dưới sao cho các hàng thẳng cột.','• Nhân với '+u+' (chữ số hàng đơn vị): '+m[1]+' × '+u+' = '+f(p1)+' (tích riêng thứ nhất).','• Nhân với '+c+' (chữ số hàng chục): '+m[1]+' × '+c+' = '+f(p2)+' (tích riêng thứ hai), viết lùi sang trái một cột so với tích riêng thứ nhất.','• Cộng hai tích riêng (tích riêng thứ hai viết lùi một cột nên có giá trị là '+f(p2*10)+'): '+f(p1)+' + '+f(p2*10)+' = '+f(A*b)+'.'];}L.push('Vậy '+m[1]+' × '+b+' = '+f(A*b)+'.');if(f(A*b)!==a)L.push('Đáp số: '+a);return L.join('\n');};
LG['tb4_38_2']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var N=function(s){return +String(s).replace(/\s/g,'');};var D='(\\d[\\d ]*\\d|\\d)';var m;
if((m=q.match(new RegExp(D+'\\s*([×:])\\s*'+D+'\\s*\\+\\s*'+D)))){var x=N(m[1]),y=N(m[3]),z=N(m[4]),mul=m[2]==='×';var t=mul?x*y:x/y;var r=t+z;return 'Biểu thức có phép '+(mul?'nhân':'chia')+' và phép cộng, ta thực hiện phép '+(mul?'nhân':'chia')+' trước, phép cộng sau:\n'+m[1]+' '+m[2]+' '+m[3]+' + '+m[4]+' = '+f(t)+' + '+m[4]+'\n= '+f(r)+(f(r)===a?'':'\nĐáp số: '+a);}
if((m=q.match(new RegExp('x\\s*:\\s*'+D+'\\s*=\\s*'+D)))){var b=N(m[1]),c=N(m[2]);return 'x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\nx : '+m[1]+' = '+m[2]+'\nx = '+m[2]+' × '+m[1]+'\n'+(f(b*c)===a.replace(/^x\s*=\s*/,'')?a:'x = '+f(b*c)+'\nĐáp số: '+a);}
if((m=q.match(new RegExp('x\\s*×\\s*'+D+'\\s*=\\s*'+D)))){var b2=N(m[1]),c2=N(m[2]);return 'x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\nx × '+m[1]+' = '+m[2]+'\nx = '+m[2]+' : '+m[1]+'\n'+(f(c2/b2)===a.replace(/^x\s*=\s*/,'')?a:'x = '+f(c2/b2)+'\nĐáp số: '+a);}
return 'Biểu thức có nhân, chia và cộng, trừ thì thực hiện nhân, chia trước, cộng, trừ sau.\nĐáp số: '+a;};
LG['tb4_39_2']=function(it){return LG['tb4_38_2'](it);};
LG['tb4_43_2']=function(it){return LG['tb4_38_2'](it);};
LG['tb4_38_3']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var N=function(s){return +String(s).replace(/\s/g,'');};var m=q.match(/Mỗi\s+(\S+)\s+có\s+(\d[\d ]*\d|\d)\s+([^.]+?)\.\s*Hỏi\s+(\d+)\s+(\S+)/);var dv=(a.match(/\d\s+([^\d\s].*)$/)||[,''])[1];if(!m)return 'Muốn tìm số lượng của nhiều nhóm bằng nhau, ta lấy số lượng một nhóm nhân với số nhóm.\nĐáp số: '+a;var x=N(m[2]),k=+m[4];return 'Bài giải\n'+m[4]+' '+m[5]+' như thế có tất cả số '+m[3]+' là:\n'+f(x)+' × '+k+' = '+f(x*k)+' ('+(dv||m[3])+')\nĐáp số: '+a+'.';};
LG['tb4_38_4']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var N=function(s){return +String(s).replace(/\s/g,'');};var D='(\\d[\\d ]*\\d|\\d)';var m=q.match(new RegExp('có\\s+(\\d+)\\s+lô hàng,\\s*mỗi lô có\\s+'+D+'\\s+([^.]+?)\\.\\s*Người ta đã chuyển đi\\s+'+D));var dv=(a.match(/\d\s+([^\d\s].*)$/)||[,''])[1];if(!m)return 'Bước 1: tính số hàng trong kho (phép nhân). Bước 2: lấy số đó trừ đi số đã chuyển đi.\nĐáp số: '+a;var k=+m[1],x=N(m[2]),y=N(m[4]),t=x*k;return 'Bài giải\nTrong kho có tất cả số '+m[3]+' là:\n'+f(x)+' × '+k+' = '+f(t)+' ('+dv+')\nTrong kho còn lại số '+m[3]+' là:\n'+f(t)+' − '+f(y)+' = '+f(t-y)+' ('+dv+')\nĐáp số: '+a+'.';};
LG['tb4_39_3']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var N=function(s){return +String(s).replace(/\s/g,'');};var m=q.match(/Có\s+(\d[\d ]*\d|\d)\s+(.+?)\s+chia đều vào\s+(\d+)\s+(\S+?)\.?\s+Hỏi/);var dv=(a.match(/\d\s+([^\d\s].*)$/)||[,''])[1];if(!m)return 'Muốn tìm số lượng mỗi phần, ta lấy tổng số chia cho số phần.\nĐáp số: '+a;var x=N(m[1]),k=+m[3];var r=Math.floor(x/k);return 'Bài giải\nMỗi '+m[4]+' có số '+m[2]+' là:\n'+f(x)+' : '+k+' = '+f(r)+' ('+dv+')\nĐáp số: '+a+'.';};
LG['tb4_39_4']=function(it){var q=String(it.q),a=String(it.a);var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};var N=function(s){return +String(s).replace(/\s/g,'');};var m=q.match(/^(.+?)\s+có\s+(\d[\d ]*\d|\d)\s+(.+?),\s*chia đều vào\s+(\d+)\s+(\S+?)\.?\s+.*?lấy ra\s+(\d+)\s+(\S+)/);var dv=(a.match(/\d\s+([^\d\s].*)$/)||[,''])[1];if(!m)return 'Bước 1: tìm số lượng trong mỗi phần (phép chia). Bước 2: nhân với số phần đã lấy.\nĐáp số: '+a;var x=N(m[2]),k=+m[4],l=+m[6],e=Math.floor(x/k);return 'Bài giải\nMỗi '+m[5]+' có số '+m[3]+' là:\n'+f(x)+' : '+k+' = '+f(e)+' ('+dv+')\n'+(l===1?m[1]+' lấy ra 1 '+m[5]+' nên số '+m[3]+' '+m[1]+' đã tặng bạn bằng số '+m[3]+' trong 1 '+m[5]+', tức là '+f(e)+' '+dv+'.\n':m[1]+' đã tặng bạn số '+m[3]+' là:\n'+f(e)+' × '+l+' = '+f(e*l)+' ('+dv+')\n')+'Đáp số: '+a+'.';};

LG['tb4_43_3']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const nhan=(x,y)=>{const u=y%10,c=Math.floor(y/10);if(y<10||y>99)return '';if(u===0)return 'Cách tính: '+F(x)+' × '+F(y)+' = '+F(x)+' × '+c+' × 10 = '+F(x*c)+' × 10 = '+F(x*y)+'.';return 'Cách tính: '+F(x)+' × '+u+' = '+F(x*u)+' (tích riêng thứ nhất); '+F(x)+' × '+c+' = '+F(x*c)+' (tích riêng thứ hai, viết lùi sang trái một cột); cộng hai tích riêng: '+F(x*u)+' + '+F(x*c*10)+' = '+F(x*y)+'.';};const m=q.match(/Mỗi (\S+) có (\d{1,3}(?: \d{3})*) (.+?)\. Hỏi (\d{1,3}(?: \d{3})*) \S+/);const x=m?N(m[2]):ns[0],y=m?N(m[4]):ns[1],dd=m?m[3]:dv,ct=m?m[1]:'';const k=x*y;return 'Bài giải\nSố '+dd+' có tất cả là:\n'+F(x)+' × '+F(y)+' = '+F(k)+' ('+(dv||dd)+')\n'+nhan(x,y)+'\nĐáp số: '+a+(dd.indexOf(dv)===0?dd.slice(dv.length):'')+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4_43_4']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const m=q.match(/có (\d{1,3}(?: \d{3})*) lô hàng, mỗi lô có (\d{1,3}(?: \d{3})*) (.+?)\. .*?chuyển đi (\d{1,3}(?: \d{3})*) /);const l=m?N(m[1]):ns[0],x=m?N(m[2]):ns[1],dd=m?m[3]:dv,c=m?N(m[4]):ns[2];const t=l*x,r=t-c;return 'Bài giải\nSố '+dd+' trong kho lúc đầu là:\n'+F(x)+' × '+F(l)+' = '+F(t)+' ('+dv+')\nSố '+dd+' trong kho còn lại là:\n'+F(t)+' − '+F(c)+' = '+F(r)+' ('+dv+')\nĐáp số: '+a+(dd.indexOf(dv)===0?dd.slice(dv.length):'')+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4_44_1']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const chia=(x,b)=>{const s=String(x);let i=0,cur=0,L=[],first=true;while(i<s.length&&(cur*10+ +s[i]<b||cur===0&&i===0&&false)){cur=cur*10+ +s[i];i++;if(cur>=b)break;}if(cur<b&&i<s.length){cur=cur*10+ +s[i];i++;}while(true){const t=Math.floor(cur/b),p=t*b,r=cur-p;L.push((first?'• Lấy '+F(cur):'• Hạ '+s[i-1]+', được '+cur+';')+(first?' chia ':' '+cur+' chia ')+b+' được '+t+', viết '+t+'; '+t+' nhân '+b+' bằng '+p+'; '+cur+' trừ '+p+' bằng '+r+'.');first=false;if(i>=s.length){return {L,t:Math.floor(x/b),r:x%b};}cur=r*10+ +s[i];i++;}};const x=ns[0],b=ns[1];if(!b)return 'Đặt tính rồi chia từ trái sang phải.\nVậy kết quả là '+a+'.';const c=chia(x,b);const kq=F(c.t)+(c.r?' (dư '+c.r+')':'');return 'Đặt tính rồi chia từ trái sang phải:\n'+c.L.join('\n')+'\nVậy '+F(x)+' : '+b+' = '+a+(c.r?'.\nThử lại: '+F(c.t)+' × '+b+' + '+c.r+' = '+F(x)+'.':'.');}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4_44_2']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();if(/Tìm x/i.test(q)){const m=q.match(/x × (\d{1,3}(?: \d{3})*) = (\d{1,3}(?: \d{3})*)/);const b=m?N(m[1]):ns[0],t=m?N(m[2]):ns[1];return 'x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\nx × '+F(b)+' = '+F(t)+'\nx = '+F(t)+' : '+F(b)+'\nx = '+F(b?t/b:0)+'\nVậy '+a+'.';}const m=q.match(/(\d{1,3}(?: \d{3})*) : (\d{1,3}(?: \d{3})*) \+ (\d{1,3}(?: \d{3})*)/);const x=m?N(m[1]):ns[0],b=m?N(m[2]):ns[1],c=m?N(m[3]):ns[2];const t=b?Math.floor(x/b):0;return 'Biểu thức có phép chia và phép cộng: ta thực hiện phép chia trước, phép cộng sau.\n'+F(x)+' : '+b+' + '+F(c)+' = '+F(t)+' + '+F(c)+'\n= '+F(t+c)+'\nVậy giá trị của biểu thức là '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4_44_3']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const m=q.match(/Có (\d{1,3}(?: \d{3})*) (.+?) chia đều vào (\d{1,3}(?: \d{3})*) (\S+?)\./);const x=m?N(m[1]):ns[0],dd=m?m[2]:dv,b=m?N(m[3]):ns[1],ct=m?m[4]:'phần';return 'Bài giải\nSố '+dd+' ở mỗi '+ct+' là:\n'+F(x)+' : '+b+' = '+F(b?Math.floor(x/b):0)+' ('+dv+')\nĐáp số: '+a+(dd.indexOf(dv)===0?dd.slice(dv.length):'')+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4_44_4']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const m=q.match(/^(\S+) có (\d{1,3}(?: \d{3})*) (.+?), chia đều vào (\d{1,3}(?: \d{3})*) túi\. .*?lấy ra (\d{1,3}(?: \d{3})*) túi/);const ten=m?m[1]:'Bạn đó',x=m?N(m[2]):ns[0],dd=m?m[3]:dv,b=m?N(m[4]):ns[1],k=m?N(m[5]):ns[2];const t=b?Math.floor(x/b):0;return 'Bài giải\nSố '+dd+' trong mỗi túi là:\n'+F(x)+' : '+b+' = '+F(t)+' ('+dv+')\nSố '+dd+' '+ten+' đã tặng bạn là:\n'+F(t)+' × '+k+' = '+F(t*k)+' ('+dv+')\nĐáp số: '+a+(dd.indexOf(dv)===0?dd.slice(dv.length):'')+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_10_1']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const HG=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu','chục triệu','trăm triệu'];const m=q.match(/số (\d{1,3}(?: \d{3})*)(?:,| thành)/);const n=m?N(m[1]):ns[0];const s=String(n);if(/tổng/.test(q)){const T=[];for(let i=0;i<s.length;i++){const d=+s[i];if(d)T.push(F(d*Math.pow(10,s.length-1-i)));}const P=[];for(let i=0;i<s.length;i++)P.push(s[i]+' '+HG[s.length-1-i]);return 'Số '+F(n)+' gồm '+P.join(', ')+'.\nViết thành tổng theo các hàng (bỏ qua hàng có chữ số 0):\n'+F(n)+' = '+a;}const h=(q.match(/ở hàng (.+?) có giá trị/)||[])[1]||'';const d=(q.match(/chữ số (\d)/)||[])[1]||'';const p=HG.indexOf(h);const v=p>=0?F(+d*Math.pow(10,p)):a;return 'Chữ số '+d+' ở hàng '+h+' nên có giá trị là '+d+(p>0?' '+HG[p]:'')+(p>0?', tức là '+v:'')+'.\nVậy giá trị của chữ số '+d+' là '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_10_2']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const n=ns[0]||0;if(/liền trước/.test(q))return 'Số liền trước của một số thì bé hơn số đó 1 đơn vị.\n'+F(n)+' − 1 = '+F(n-1)+'\nVậy số liền trước của '+F(n)+' là '+a+'.';if(/liền sau/.test(q))return 'Số liền sau của một số thì lớn hơn số đó 1 đơn vị.\n'+F(n)+' + 1 = '+F(n+1)+(n===999999?' (một triệu)':'')+'\nVậy số liền sau của '+F(n)+' là '+a+'.';if(/trăm nghìn/.test(q))return '10 trăm nghìn = 1 triệu, tức là 100 000 × 10 = 1 000 000.\nVậy '+F(n)+' gồm '+a+'.';if(/chục nghìn/.test(q))return '100 chục nghìn = 1 triệu (10 000 × 100 = 1 000 000).\nVậy '+F(n)+' gồm '+a+'.';return 'Dựa vào cấu tạo của số '+F(n)+'.\nĐáp án: '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_11_1']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const m=q.match(/số (\d{1,3}(?: \d{3})*) (?:là|gồm)/);const n=m?N(m[1]):ns[0];const g=F(n).split(' ');const tr=g.length>=3?g[0]:'',ng=g.length>=2?g[g.length-2]:'',dvv=g[g.length-1];const tach='Tách số '+F(n)+' thành các lớp, từ phải sang trái mỗi lớp 3 chữ số: '+(tr?'lớp triệu '+tr+', ':'')+(ng?'lớp nghìn '+ng+', ':'')+'lớp đơn vị '+dvv+'.';if(/lớp nghìn/i.test(q))return 'Lớp nghìn gồm các hàng: trăm nghìn, chục nghìn, nghìn.\n'+tach+'\nVậy các chữ số thuộc lớp nghìn là: '+a+'.';if(/lớp triệu/i.test(q))return 'Lớp triệu gồm các hàng: trăm triệu, chục triệu, triệu.\n'+tach+'\nVậy lớp triệu gồm các chữ số: '+a+'.';return tach+'\nĐáp án: '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_11_2']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const HG=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu','chục triệu','trăm triệu'];const m=q.match(/chữ số (\d) trong số (\d{1,3}(?: \d{3})*) \(chữ số thứ (\d+)/);const d=m?m[1]:'',n=m?N(m[2]):ns[1],k=m?+m[3]:1;const s=String(n);const p=s.length-k;const h=HG[p]||'';const v=F(+d*Math.pow(10,Math.max(p,0)));return 'Số '+F(n)+' có '+s.length+' chữ số. Chữ số '+d+' là chữ số thứ '+k+' tính từ trái sang nên nằm ở hàng '+h+'.\nGiá trị của chữ số '+d+' là '+d+(p>0?' '+h+' = '+v:'')+'.\nVậy giá trị của chữ số '+d+' là '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_12_1']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();if(/Viết số gồm/.test(q)){const m=q.match(/gồm (\d{1,3}(?: \d{3})*) triệu, (\d{1,3}(?: \d{3})*) nghìn và (\d{1,3}(?: \d{3})*) đơn vị/);const t=m?N(m[1]):ns[0],g=m?N(m[2]):ns[1],u=m?N(m[3]):ns[2];const p3=x=>String(x).padStart(3,'0');return 'Viết lần lượt từ trái sang phải: lớp triệu '+t+', lớp nghìn '+p3(g)+', lớp đơn vị '+p3(u)+' (mỗi lớp nghìn, lớp đơn vị đủ 3 chữ số).\nVậy số cần viết là '+a+'.';}const n=ns[0]||0;const g=F(n).split(' ');return 'Tách số '+F(n)+' thành các lớp từ phải sang trái, mỗi lớp 3 chữ số: lớp triệu là '+(g.length>2?g[0]:'0')+', lớp nghìn là '+(g.length>1?g[g.length-2]:'0')+', lớp đơn vị là '+g[g.length-1]+'.\nVậy số '+F(n)+' gồm '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_12_2']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const m=q.match(/là (\d{1,3}(?: \d{3})*)\.|số dân (\d{1,3}(?: \d{3})*)\.|([\d ]{7,})/);const n=m?N(m[1]||m[2]||m[3]):ns[0];const s=String(n);const d=s.length>=7?s[s.length-7]:'0';return 'Số '+F(n)+' có '+s.length+' chữ số. Tính từ phải sang trái, hàng triệu là hàng thứ bảy (hàng thấp nhất của lớp triệu).\nTrong số '+F(n)+', chữ số ở hàng triệu là '+d+'.\nVậy chữ số hàng triệu là '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_13_1']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const lt=n=>{const c=Math.floor(n/10000)%10,b=Math.floor(n/100000)*100000;return {c,v:c>=5?b+100000:b};};const n=ns[0]||0;const R=lt(n);return 'Làm tròn đến hàng trăm nghìn: ta xét chữ số hàng chục nghìn. Nếu chữ số đó bé hơn 5 thì làm tròn xuống, nếu lớn hơn hoặc bằng 5 thì làm tròn lên.\nSố '+F(n)+' có chữ số hàng chục nghìn là '+R.c+(R.c<5?' (bé hơn 5) nên làm tròn xuống':' (lớn hơn hoặc bằng 5) nên làm tròn lên')+' được '+F(R.v)+'.\nVậy số '+F(n)+' làm tròn đến hàng trăm nghìn là '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_13_2']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const ns=(q.match(/\d{1,3}(?: \d{3})+|\d+/g)||[]).map(N);const dv=a.replace(/^[\d\s]+/,'').trim();const lt=n=>{const c=Math.floor(n/10000)%10,b=Math.floor(n/100000)*100000;return {c,v:c>=5?b+100000:b};};const n=ns[0]||0;const R=lt(n);return 'Làm tròn đến hàng trăm nghìn: ta xét chữ số hàng chục nghìn.\nSố '+F(n)+' có chữ số hàng chục nghìn là '+R.c+(R.c<5?', bé hơn 5 nên làm tròn xuống':', lớn hơn hoặc bằng 5 nên làm tròn lên')+' được '+F(R.v)+'.\nVậy số dân thành phố đó '+(a.charAt(0).toLowerCase()+a.slice(1))+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['tb4x_14_1']=function(it){try{const q=String(it.q||''),a=String(it.a||'');const N=s=>Number(String(s).replace(/[^\d]/g,''))||0;const F=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');const HG=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu','chục triệu','trăm triệu'];const CS=['','một','hai','ba','bốn','năm','sáu','bảy','tám','chín'];const m=q.match(/(?:lớn:|các số) (.+?)(?:\.$| là số nào)/);const L=(m?m[1]:q).split(';').map(s=>s.trim()).filter(s=>/\d/.test(s)).map(N);const S=L.slice().sort((x,y)=>x-y);const so=(x,y)=>{const a1=String(x),b1=String(y);if(a1.length!==b1.length)return F(x)+' < '+F(y)+' ('+F(x)+' có '+CS[a1.length]+' chữ số, '+F(y)+' có '+CS[b1.length]+' chữ số)';let i=0;while(i<a1.length&&a1[i]===b1[i])i++;return F(x)+' < '+F(y)+' (hàng '+HG[a1.length-1-i]+': '+a1[i]+' < '+b1[i]+')';};const qt='Quy tắc: số nào có nhiều chữ số hơn thì lớn hơn; nếu hai số có số chữ số bằng nhau thì so sánh từng cặp chữ số cùng hàng, kể từ trái sang phải.';const B=[];for(let i=0;i+1<S.length;i++)B.push(so(S[i],S[i+1]));const kq='So sánh các số:\n'+B.join('\n')+'\nTa có: '+S.map(F).join(' < ')+'.';if(/lớn nhất/.test(q))return qt+'\n'+kq+'\nVậy số lớn nhất là '+a+'.';if(/bé nhất/.test(q))return qt+'\n'+kq+'\nVậy số bé nhất là '+a+'.';return qt+'\n'+kq+'\nVậy thứ tự từ bé đến lớn là: '+a+'.';}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};

LG['tb4x_14_2']=function(it){
 var q=String(it.q),a=String(it.a);
 var m=q.match(/A có ([\d ]+?) cuốn[\s\S]*?B có ([\d ]+?) cuốn/);
 var f=function(s){return s.trim().replace(/(\d)(?=(\d{3})+$)/g,'$1 ');};
 if(!m) return 'So sánh hai số: số nào lớn hơn thì thư viện đó có nhiều sách hơn.\nVậy '+a+' có nhiều sách hơn.';
 var x=+m[1].replace(/\s/g,''),y=+m[2].replace(/\s/g,''),sx=m[1].trim(),sy=m[2].trim();
 var dx=String(x),dy=String(y),L=[];
 L.push('So sánh hai số '+sx+' và '+sy+':');
 var hang=['triệu','trăm nghìn','chục nghìn','nghìn','trăm','chục','đơn vị'];
 if(dx.length!==dy.length){L.push(sx+' có '+dx.length+' chữ số, '+sy+' có '+dy.length+' chữ số. Số nào có nhiều chữ số hơn thì số đó lớn hơn.');}
 else{var i=0;while(i<dx.length&&dx[i]===dy[i])i++;
  var off=7-dx.length,h=hang[off+i]||'',gi=[];for(var j=0;j<i;j++)gi.push(hang[off+j]);
  L.push('Hai số đều có '+dx.length+' chữ số, ta so sánh từng cặp chữ số từ trái sang phải.');
  if(i>0)L.push('Chữ số hàng '+gi.join(', hàng ')+' giống nhau.');
  if(i<dx.length)L.push('Ở hàng '+h+': '+dx[i]+(dx[i]>dy[i]?' > ':' < ')+dy[i]+'.');}
 L.push('Vì '+(x>y?sx+' > '+sy:sx+' < '+sy)+' nên '+a.charAt(0).toLowerCase()+a.slice(1)+' có nhiều sách hơn.');
 L.push('Đáp số: '+a+'.');return L.join('\n');};

LG['tb4x_15_1']=function(it){
 var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/từ ([\d ]+?) đến ([\d ]+?)\?/))){var x=+m[1].replace(/\s/g,''),y=+m[2].replace(/\s/g,'');
  return 'Số các số tự nhiên liên tiếp từ '+x+' đến '+y+' bằng: số cuối − số đầu + 1.\n'+y+' − '+x+' + 1 = '+(y-x+1)+'.\nVậy có '+a+'.';}
 if((m=q.match(/ở giữa là ([\d ]+)/))){var n=+m[1].replace(/\s/g,'');
  return 'Hai số tự nhiên liên tiếp hơn (kém) nhau 1 đơn vị.\nSố liền trước '+n+' là '+(n-1)+', số liền sau '+n+' là '+(n+1)+'.\nVậy ba số cần viết là: '+a+'.';}
 return 'Hai số tự nhiên liên tiếp hơn kém nhau 1 đơn vị.\nĐáp số: '+a+'.';};

LG['tb4x_17_1']=function(it){
 var q=String(it.q),a=String(it.a),m;
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 if((m=q.match(/(\d+) tấn (\d+) tạ = … kg/))){var t=+m[1],z=+m[2];
  return '1 tấn = 1 000 kg; 1 tạ = 100 kg.\n'+t+' tấn = '+f(t*1000)+' kg; '+z+' tạ = '+f(z*100)+' kg.\n'+t+' tấn '+z+' tạ = '+f(t*1000)+' kg + '+f(z*100)+' kg = '+f(t*1000+z*100)+' kg.\nVậy '+t+' tấn '+z+' tạ = '+a+' kg.';}
 if((m=q.match(/([\d ]+?) (tấn|tạ|yến|kg) … ([\d ]+?) (tấn|tạ|yến|kg)/))){
  var k={'tấn':1000,'tạ':100,'yến':10,'kg':1},x=+m[1].replace(/\s/g,''),y=+m[3].replace(/\s/g,'');
  var L=['Đổi về cùng đơn vị ki-lô-gam để so sánh.'];
  var vx=x*k[m[2]],vy=y*k[m[4]];
  if(m[2]!=='kg')L.push(x===1?'1 '+m[2]+' = '+f(vx)+' kg.':'1 '+m[2]+' = '+f(k[m[2]])+' kg nên '+x+' '+m[2]+' = '+f(vx)+' kg.');
  if(m[4]!=='kg')L.push(y===1?'1 '+m[4]+' = '+f(vy)+' kg.':'1 '+m[4]+' = '+f(k[m[4]])+' kg nên '+y+' '+m[4]+' = '+f(vy)+' kg.');
  L.push(f(vx)+' kg '+(vx>vy?'>':vx<vy?'<':'=')+' '+f(vy)+' kg.');
  L.push('Vậy '+m[1].trim()+' '+m[2]+' '+a+' '+m[3].trim()+' '+m[4]+'.');return L.join('\n');}
 return '1 tấn = 10 tạ = 1 000 kg; 1 tạ = 10 yến = 100 kg; 1 yến = 10 kg.\nĐáp số: '+a+'.';};

LG['tb4x_17_2']=function(it){
 var q=String(it.q),a=String(it.a);
 var m=q.match(/chở (\d+) tấn (\d+) tạ[\s\S]*?ít hơn xe thứ nhất (\d+) tạ/);
 if(!m) return 'Đổi về cùng đơn vị tạ (1 tấn = 10 tạ), tìm số gạo xe thứ hai rồi cộng lại.\nĐáp số: '+a+'.';
 var t=+m[1],z=+m[2],d=+m[3],x=t*10+z,y=x-d;
 return 'Bài giải\nĐổi: '+t+' tấn '+z+' tạ = '+x+' tạ (vì 1 tấn = 10 tạ).\nXe thứ hai chở được số tạ gạo là:\n'+x+' − '+d+' = '+y+' (tạ)\nCả hai xe chở được số tạ gạo là:\n'+x+' + '+y+' = '+(x+y)+' (tạ)\nĐáp số: '+a+'.';};

LG['tb4x_18_1']=function(it){
 var q=String(it.q),a=String(it.a);
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 var m=q.match(/dài (\d+) m, chiều rộng (\d+) m/);
 if(!m) return 'Diện tích hình chữ nhật = chiều dài × chiều rộng; 1 m² = 100 dm².\nĐáp số: '+a+'.';
 var d=+m[1],r=+m[2],s=d*r;
 return 'Bài giải\nDiện tích căn phòng là:\n'+d+' × '+r+' = '+s+' (m²)\nĐổi: '+s+' m² = '+f(s*100)+' dm² (vì 1 m² = 100 dm²).\nĐáp số: '+a+'.';};

LG['tb4x_18_2']=function(it){
 var q=String(it.q),a=String(it.a);
 var m=q.match(/(\d+) m² … ([\d ]+?) dm²/);
 if(!m) return 'Đổi về cùng đơn vị (1 m² = 100 dm²) rồi so sánh.\nVậy điền dấu '+a+'.';
 var x=+m[1],y=+m[2].replace(/\s/g,'');
 return 'Đổi: 1 m² = 100 dm² nên '+x+' m² = '+(x*100)+' dm².\nSo sánh: '+(x*100)+' dm² '+a+' '+y+' dm².\nVậy '+x+' m² '+a+' '+m[2].trim()+' dm².';};

LG['tb4x_19_1']=function(it){
 var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/Năm (\d+) thuộc thế kỉ/))){var y=+m[1],c=Math.ceil(y/100);
  return 'Thế kỉ thứ '+c+' gồm các năm từ năm '+((c-1)*100+1)+' đến năm '+(c*100)+'.\nNăm '+y+' nằm trong khoảng đó.\nVậy năm '+y+' thuộc '+a+'.';}
 if((m=q.match(/^(.+?) chạy hết 1 phút (\d+) giây, (.+?) chạy hết (\d+) giây/))){
  var A=m[1].trim(),s=+m[2],B=m[3].trim(),t=+m[4],x=60+s;
  var L=['Bài giải','Đổi: 1 phút '+s+' giây = 60 giây + '+s+' giây = '+x+' giây.'];
  if(x===t){L.push('Hai bạn chạy hết thời gian bằng nhau.');}
  else{var nh=x<t?A:B;L.push('Vì '+Math.min(x,t)+' giây < '+Math.max(x,t)+' giây nên '+nh+' chạy nhanh hơn (chạy hết ít thời gian hơn).');
   L.push(nh+' chạy nhanh hơn số giây là:');L.push(Math.max(x,t)+' − '+Math.min(x,t)+' = '+Math.abs(x-t)+' (giây)');}
  L.push('Đáp số: '+a+'.');return L.join('\n');}
 return '1 phút = 60 giây; 1 thế kỉ = 100 năm.\nĐáp số: '+a+'.';};

LG['tb4x_22_1']=function(it){
 var q=String(it.q),a=String(it.a);
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 var m=q.match(/có ([\d ]+?) cuốn[\s\S]*?thêm ([\d ]+?) cuốn/);
 if(!m) return 'Muốn tìm số sách có tất cả, ta làm phép cộng.\nĐáp số: '+a+'.';
 var x=+m[1].replace(/\s/g,''),y=+m[2].replace(/\s/g,'');
 return 'Bài giải\nNăm nay thư viện có tất cả số cuốn sách là:\n'+f(x)+' + '+f(y)+' = '+f(x+y)+' (cuốn)\nĐáp số: '+a+' sách.';};

LG['tb4x_22_2']=function(it){
 var q=String(it.q),a=String(it.a);
 var m=q.match(/([\d ]+?) \+ ([\d ]+)$/);
 if(!m) return 'Nhẩm theo số chục nghìn (hoặc trăm nghìn) rồi viết thêm các chữ số 0.\nVậy kết quả là '+a+'.';
 var x=+m[1].replace(/\s/g,''),y=+m[2].replace(/\s/g,'');
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 var u=(x%100000===0&&y%100000===0)?100000:(x%10000===0&&y%10000===0)?10000:(x%1000===0&&y%1000===0)?1000:1;
 var ten=u===100000?'trăm nghìn':u===10000?'chục nghìn':u===1000?'nghìn':'';
 if(!ten) return 'Tính: '+f(x)+' + '+f(y)+' = '+f(x+y)+'.\nVậy '+m[1].trim()+' + '+m[2].trim()+' = '+a+'.';
 return 'Nhẩm: '+(x/u)+' '+ten+' + '+(y/u)+' '+ten+' = '+((x+y)/u)+' '+ten+' = '+f(x+y)+'.\nVậy '+m[1].trim()+' + '+m[2].trim()+' = '+a+'.';};

LG['tb4x_23_1']=function(it){
 var q=String(it.q),a=String(it.a);
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 var m=q.match(/sản xuất ([\d ]+?) sản phẩm[\s\S]*?được ([\d ]+?) sản phẩm/);
 if(!m) return 'Muốn tìm số sản phẩm còn phải làm, ta lấy số dự định trừ đi số đã làm được.\nĐáp số: '+a+'.';
 var x=+m[1].replace(/\s/g,''),y=+m[2].replace(/\s/g,'');
 return 'Bài giải\nNhà máy còn phải sản xuất số sản phẩm là:\n'+f(x)+' − '+f(y)+' = '+f(x-y)+' (sản phẩm)\nĐáp số: '+a+'.';};

LG['tb4x_23_2']=function(it){
 var q=String(it.q),a=String(it.a),m;
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 var g=function(s){return +s.replace(/\s/g,'');};
 if((m=q.match(/([\d ]+?) [–−-] x = ([\d ]+)/))){var x=g(m[1]),y=g(m[2]);
  return 'Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\n'+m[1].trim()+' − x = '+m[2].trim()+'\nx = '+f(x)+' − '+f(y)+'\nx = '+f(x-y)+'\nVậy '+a+'.';}
 if((m=q.match(/x [–−-] ([\d ]+?) = ([\d ]+)/))){var x2=g(m[1]),y2=g(m[2]);
  return 'Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\nx − '+m[1].trim()+' = '+m[2].trim()+'\nx = '+f(y2)+' + '+f(x2)+'\nx = '+f(x2+y2)+'\nVậy '+a+'.';}
 return 'Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ; muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\nVậy '+a+'.';};

LG['tb4x_24_1']=function(it){
 var q=String(it.q),a=String(it.a);
 if(/\(.*\).*\(/.test(q)) return 'Tính chất kết hợp: (a + b) + c = a + (b + c).\nKhi cộng tổng hai số với số thứ ba, ta có thể cộng số thứ nhất với tổng của số thứ hai và số thứ ba.\nVậy số cần điền là '+a+'.';
 return 'Tính chất giao hoán: a + b = b + a.\nKhi đổi chỗ các số hạng trong một tổng thì tổng không thay đổi.\nVậy số cần điền là '+a+'.';};

LG['tb4x_25_1']=function(it){
 var q=String(it.q),a=String(it.a);
 var m=q.match(/tổng[^\d]*([\d ]+?) và hiệu[^\d]*([\d ]+?)\./);
 if(!m) return 'Số lớn = (tổng + hiệu) : 2; số bé = tổng − số lớn.\nĐáp số: '+a+'.';
 var s=+m[1].replace(/\s/g,''),h=+m[2].replace(/\s/g,''),l=(s+h)/2,b=s-l;
 return 'Bài giải\nSố lớn là:\n('+s+' + '+h+') : 2 = '+l+'\nSố bé là:\n'+s+' − '+l+' = '+b+'\nThử lại: '+l+' + '+b+' = '+s+'; '+l+' − '+b+' = '+h+'.\nĐáp số: '+a+'.';};

LG['tb4x_27_1']=function(it){
 var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/hình chữ nhật ([A-Z]+)\. Cạnh ([A-Z]{2})/))){
  return 'Hình chữ nhật '+m[1]+' có 4 góc vuông, mỗi cạnh vuông góc với hai cạnh kề với nó (hai cạnh có chung một đỉnh).\nCạnh '+m[2]+' vuông góc với cạnh đi qua đỉnh '+m[2][0]+' và cạnh đi qua đỉnh '+m[2][1]+'.\nVậy cạnh '+m[2]+' vuông góc với '+a+'.';}
 if(/dụng cụ/.test(q)) return 'Ta đặt một cạnh góc vuông của ê ke trùng với một đường thẳng; nếu đường thẳng kia trùng với cạnh góc vuông còn lại thì hai đường thẳng vuông góc.\nVậy ta dùng '+a+'.';
 if(/mấy góc vuông/.test(q)) return 'Hai đường thẳng vuông góc cắt nhau tại một điểm, tạo thành 4 góc đều là góc vuông.\nVậy có '+a+'.';
 return 'Dùng ê ke để kiểm tra hai đường thẳng vuông góc.\nĐáp số: '+a+'.';};

LG['tb4x_27_2']=function(it){
 var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/Hình chữ nhật ([A-Z])([A-Z])([A-Z])([A-Z]) có mấy cặp/))){var p=m.slice(1,5),c=[];
  for(var i=0;i<4;i++){var x=p[i],y=p[(i+1)%4],z=p[(i+3)%4];c.push(z+x+' và '+x+y);}
  return 'Hình chữ nhật có 4 góc vuông, mỗi góc vuông cho một cặp cạnh vuông góc với nhau:\n'+c.join('; ')+'.\nVậy có '+a+'.';}
 if((m=q.match(/Hình (vuông|chữ nhật) ([A-Z]+) có mấy góc vuông/))) return 'Hình '+m[1]+' '+m[2]+' có 4 góc ở 4 đỉnh '+m[2].split('').join(', ')+' và cả 4 góc đều là góc vuông.\nVậy có '+a+'.';
 return 'Dùng ê ke để kiểm tra các góc của hình.\nĐáp số: '+a+'.';};

LG['tb4x_29_1']=function(it){
 var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/hình chữ nhật ([A-Z]{4})\. Cạnh ([A-Z]{2})/))){
  return 'Trong hình chữ nhật '+m[1]+', hai cạnh đối diện thì song song với nhau.\nCạnh đối diện với cạnh '+m[2]+' là cạnh '+a+'.\nVậy cạnh '+m[2]+' song song với cạnh '+a+'.';}
 if(/cắt nhau/.test(q)) return 'Hai đường thẳng song song với nhau thì dù kéo dài mãi về hai phía cũng không gặp nhau.\nVậy hai đường thẳng song song với nhau '+a.charAt(0).toLowerCase()+a.slice(1)+'.';
 return 'Hai đường thẳng song song không bao giờ cắt nhau; trong hình chữ nhật, các cạnh đối diện song song với nhau.\nĐáp án: '+a+'.';};

LG['tb4x_29_2']=function(it){
 var q=String(it.q),a=String(it.a),m=q.match(/hình chữ nhật ([A-Z]{4})/i);
 var n=m?m[1]:'đó';
 return 'Trong hình chữ nhật '+n+', mỗi cạnh song song với cạnh đối diện với nó.\nHình chữ nhật có 2 cặp cạnh đối diện nên có 2 cặp cạnh song song.\nVậy: '+a+'.';};

LG['tb4x_31_1']=function(it){
 var q=String(it.q),a=String(it.a);
 if(/Hình thoi có đặc điểm/.test(q)) return 'Quan sát hình thoi: hai cặp cạnh đối diện song song với nhau, đo bốn cạnh thấy dài bằng nhau.\nVậy hình thoi có đặc điểm: '+a+'.';
 if(/Hình bình hành có đặc điểm/.test(q)) return 'Quan sát hình bình hành: hai cặp cạnh đối diện song song với nhau, đo thấy hai cạnh đối diện dài bằng nhau.\nVậy hình bình hành có đặc điểm: '+a+'.';
 if(/bốn cạnh bằng nhau/.test(q)) return 'Hình có bốn cạnh bằng nhau là hình vuông hoặc hình thoi. Hình vuông luôn có 4 góc vuông, còn hình thoi không nhất thiết có góc vuông.\nVậy đó là '+a+'.';
 return 'Hình bình hành có hai cặp cạnh đối diện song song và bằng nhau; hình thoi có hai cặp cạnh đối diện song song và bốn cạnh bằng nhau.\nĐáp án: '+a+'.';};

LG['tb4x_31_2']=function(it){
 var q=String(it.q),a=String(it.a),m;
 if(/Hình thoi/.test(q)&&(m=q.match(/cạnh ([A-Z]{2}) = (\d+) cm/))){
  return 'Hình thoi có bốn cạnh bằng nhau.\nCạnh '+m[1]+' = '+m[2]+' cm nên các cạnh còn lại cũng dài '+m[2]+' cm.\nVậy: '+a+'.';}
 var s=[],re=/cạnh ([A-Z]{2}) = (\d+) cm/g,x;while((x=re.exec(q)))s.push(x);
 var t=[],re2=/([A-Z]{2}) = (\d+) cm/g;while((x=re2.exec(a)))t.push(x);
 if(s.length>=2&&t.length>=2){
  return 'Hình bình hành có hai cặp cạnh đối diện bằng nhau.\nCạnh '+t[0][1]+' đối diện với cạnh '+s[0][1]+' nên '+t[0][1]+' = '+s[0][1]+' = '+s[0][2]+' cm.\nCạnh '+t[1][1]+' đối diện với cạnh '+s[1][1]+' nên '+t[1][1]+' = '+s[1][1]+' = '+s[1][2]+' cm.\nVậy: '+a+'.';}
 return 'Hình bình hành có hai cặp cạnh đối diện bằng nhau; hình thoi có bốn cạnh bằng nhau.\nVậy: '+a+'.';};

LG['tb4x_3_1']=function(it){
 var q=String(it.q),a=String(it.a),m;
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 if((m=q.match(/số (chẵn|lẻ) từ (\d+) đến (\d+)/))){
  var ch=m[1]==='chẵn',x=+m[2],y=+m[3],r=ch?0:1;
  var d=x%2===r?x:x+1,c=y%2===r?y:y-1,n=c>=d?(c-d)/2+1:0;
  return 'Số '+m[1]+' đầu tiên là '+d+', số '+m[1]+' cuối cùng là '+c+'. Hai số '+m[1]+' liên tiếp hơn kém nhau 2 đơn vị.\nSố các số '+m[1]+' là: ('+c+' − '+d+') : 2 + 1 = '+n+' (số).\nVậy có '+a+'.';}
 if((m=q.match(/Số ([\d ]+?) là số chẵn hay số lẻ/))){
  var t=m[1].replace(/\s/g,''),u=t[t.length-1];
  return 'Số '+m[1]+' có chữ số tận cùng là '+u+'.\nCác số có chữ số tận cùng là 0, 2, 4, 6, 8 là số chẵn; tận cùng là 1, 3, 5, 7, 9 là số lẻ.\nVậy: '+a+'.';}
 if((m=q.match(/số (chẵn|lẻ) (lớn nhất|bé nhất) có (\S+) chữ số/))){
  if(m[2]==='lớn nhất') return 'Số lớn nhất có '+m[3]+' chữ số có các chữ số đều là 9; muốn là số chẵn thì chữ số hàng đơn vị phải là chữ số chẵn lớn nhất, tức là 8.\nVậy số chẵn lớn nhất có '+m[3]+' chữ số là '+a+'.';
  return 'Số bé nhất có '+m[3]+' chữ số có chữ số đầu là 1, các chữ số sau là 0; muốn là số lẻ thì chữ số hàng đơn vị phải là chữ số lẻ bé nhất, tức là 1.\nVậy số lẻ bé nhất có '+m[3]+' chữ số là '+a+'.';}
 return 'Số chẵn có chữ số tận cùng là 0, 2, 4, 6, 8; số lẻ có chữ số tận cùng là 1, 3, 5, 7, 9.\nĐáp án: '+a+'.';};

LG['tb4x_3_2']=function(it){
 var q=String(it.q),a=String(it.a),m;
 if((m=q.match(/có (\d+) học sinh/))){var n=+m[1];
  if(n%2===0) return n+' có chữ số tận cùng là '+(n%10)+' nên '+n+' là số chẵn, xếp thành từng cặp thì vừa hết.\n'+n+' : 2 = '+(n/2)+' (cặp).\nXếp được '+(n/2)+' cặp, không thừa bạn nào.\nVậy: '+a+'.';
  return n+' có chữ số tận cùng là '+(n%10)+' nên '+n+' là số lẻ, xếp thành từng cặp thì còn thừa.\n'+n+' : 2 = '+((n-1)/2)+' (dư 1).\nXếp được '+((n-1)/2)+' cặp, còn thừa 1 bạn.\nVậy: '+a+'.';}
 if((m=q.match(/liên tiếp: (\d+), (\d+), (\d+)/))){var x=+m[1],s=+m[2]-x;
  var L=[x];for(var i=1;i<6;i++)L.push(x+s*i);
  return 'Các số chẵn liên tiếp hơn kém nhau 2 đơn vị. Đếm thêm 2 từ '+x+':\n'+L.join(', ')+'.\nNgôi nhà thứ sáu mang số '+L[5]+'.\nVậy ngôi nhà thứ sáu mang số '+a+'.';}
 return 'Số chẵn chia thành từng cặp vừa hết; số lẻ thì thừa 1.\nĐáp án: '+a+'.';};

LG['tb4x_40_1']=function(it){
 var q=String(it.q),a=String(it.a),m=q.match(/(\d+) × (\d+) × (\d+)/);
 if(m){var x=+m[1],y=+m[2],z=+m[3],p=x*z;
  return 'Ta thấy '+x+' × '+z+' = '+p+' là số tròn '+(p===10?'chục':'trăm')+', nên dùng tính chất giao hoán và kết hợp để nhân '+x+' với '+z+' trước:\n'+x+' × '+y+' × '+z+' = '+a+'.';}
 return 'Dùng tính chất giao hoán và kết hợp, nhóm các thừa số có tích tròn chục, tròn trăm lại với nhau:\n'+a+'.';};

LG['tb4x_40_2']=function(it){
 var q=String(it.q),a=String(it.a);
 if(/\(.*\) × .*= .* × \(/.test(q)) return 'Tính chất kết hợp: (a × b) × c = a × (b × c).\nKhi nhân một tích hai số với số thứ ba, ta có thể nhân số thứ nhất với tích của số thứ hai và số thứ ba.\nVậy số cần điền là '+a+'.';
 return 'Tính chất giao hoán: a × b = b × a.\nKhi đổi chỗ các thừa số trong một tích thì tích không thay đổi.\nVậy số cần điền là '+a+'.';};

LG['tb4x_41_1']=function(it){
 var q=String(it.q),a=String(it.a),m;
 var nm=function(k){return k==='10'?'một':k==='100'?'hai':'ba';};
 if((m=q.match(/Tính nhẩm: ([\d ]+?) × (1 000|100|10)\s*$/))){var k=m[2].replace(/\s/g,'');
  return 'Khi nhân một số tự nhiên với '+m[2]+', ta chỉ việc viết thêm '+nm(k)+' chữ số 0 vào bên phải số đó.\n'+m[1]+' × '+m[2]+' = '+a+'.';}
 if((m=q.match(/Tính nhẩm: ([\d ]+?) : (1 000|100|10)\s*$/))){var k2=m[2].replace(/\s/g,'');
  return 'Khi chia số tròn chục, tròn trăm, tròn nghìn cho '+m[2]+', ta chỉ việc bỏ bớt '+nm(k2)+' chữ số 0 ở bên phải số đó.\n'+m[1]+' : '+m[2]+' = '+a+'.';}
 if((m=q.match(/([\d ]+?) × … = ([\d ]+)/))){
  return 'Số '+m[2].trim()+' có được khi viết thêm các chữ số 0 vào bên phải số '+m[1].trim()+'. Đếm số chữ số 0 viết thêm để biết nhân với 10, 100 hay 1 000.\n'+m[1].trim()+' × '+a+' = '+m[2].trim()+'.\nVậy số cần điền là '+a+'.';}
 if((m=q.match(/… : (1 000|100|10) = ([\d ]+)/))){
  return 'Muốn tìm số bị chia, ta lấy thương nhân với số chia.\n'+m[2].trim()+' × '+m[1]+' = '+a+'.\nVậy số cần điền là '+a+'.';}
 return 'Nhân với 10, 100, 1 000: viết thêm một, hai, ba chữ số 0 vào bên phải; chia cho 10, 100, 1 000: bỏ bớt một, hai, ba chữ số 0 ở bên phải.\nĐáp án: '+a+'.';};

LG['tb4x_41_2']=function(it){
 var q=String(it.q),a=String(it.a),m=q.match(/Mỗi (\S+) có ([\d ]+?) (.+?)\. Hỏi ([\d ]+?) \S+ như thế/);
 if(m){var v=function(s){return +String(s).replace(/\s/g,'');},f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
  return 'Bài giải\n'+m[4]+' '+m[1]+' có số '+m[3]+' là:\n'+m[2]+' × '+m[4]+' = '+f(v(m[2])*v(m[4]))+' ('+m[3]+')\n(Nhân với '+m[4]+': viết thêm '+(m[4].replace(/\s/g,'').length-1)+' chữ số 0 vào bên phải số '+m[2]+'.)\nĐáp số: '+a+'.';}
 return 'Bài giải\nLấy số đồ vật trong mỗi hộp nhân với số hộp.\nĐáp số: '+a+'.';};

LG['tb4x_42_1']=function(it){
 var q=String(it.q),a=String(it.a),parts=a.split(';'),c1=(parts[0]||'').trim(),c2=(parts[1]||'').trim();
 var m=q.match(/\((\d+) \+ (\d+)\) × (\d+)/),m2=q.match(/(\d+) × \((\d+) \+ (\d+)\)/),L=[];
 if(m){var x=+m[1],y=+m[2],k=+m[3];
  L.push('Cách 1: Tính trong ngoặc trước: ('+x+' + '+y+') × '+k+' = '+c1+'.');
  L.push('Cách 2: Nhân một tổng với một số: ('+x+' + '+y+') × '+k+' = '+x+' × '+k+' + '+y+' × '+k+' = '+(x*k)+' + '+(y*k)+' = '+(x+y)*k+'.');}
 else if(m2){var k2=+m2[1],x2=+m2[2],y2=+m2[3];
  L.push('Cách 1: Tính trong ngoặc trước: '+k2+' × ('+x2+' + '+y2+') = '+c1+'.');
  L.push('Cách 2: Nhân một số với một tổng: '+k2+' × ('+x2+' + '+y2+') = '+c2+'.');}
 else{L.push('Cách 1: '+c1+'.');L.push('Cách 2: '+c2+'.');}
 L.push('Vậy: '+a+'.');return L.join('\n');};

LG['tb4x_42_2']=function(it){
 var q=String(it.q),a=String(it.a),m=q.match(/có (\d+) thùng (.+?) và (\d+) thùng (.+?), mỗi thùng đều có (\d+) chai/);
 if(m){var x=+m[1],y=+m[3],k=+m[5];
  return 'Bài giải\nSố thùng nước cửa hàng có là:\n'+x+' + '+y+' = '+(x+y)+' (thùng)\nSố chai nước cửa hàng có tất cả là:\n'+k+' × '+(x+y)+' = '+String(k*(x+y)).replace(/\B(?=(\d{3})+(?!\d))/g,' ')+' (chai)\n(Có thể viết gộp: '+a+'.)\nĐáp số: '+String(k*(x+y)).replace(/\B(?=(\d{3})+(?!\d))/g,' ')+' chai nước.';}
 return 'Bài giải\nLấy số chai mỗi thùng nhân với tổng số thùng.\nĐáp số: '+a+'.';};

LG['tb4x_47_1']=function(it){
 var q=String(it.q),a=String(it.a);
 var ns=(q.match(/\d[\d ]*\d|\d/g)||[]).map(function(s){return s.trim();});
 var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
 var v=function(s){return +String(s).replace(/\s/g,'');};
 if(ns.length<3) return 'Bài giải\nBước 1: Tìm giá trị của một phần (phép chia).\nBước 2: Tìm giá trị của nhiều phần (phép nhân).\nĐáp số: '+a+'.';
 var k=v(ns[0]),N=v(ns[1]),M=v(ns[2]),one=N/k,tot=one*M,L=['Bài giải'];
 if(/xe tải/.test(q)){L.push('Mỗi xe chở được số tấn hàng là:',f(N)+' : '+k+' = '+f(one)+' (tấn)',M+' xe chở được số tấn hàng là:',f(one)+' × '+M+' = '+f(tot)+' (tấn)');}
 else if(/hộp bút/.test(q)){L.push('Mỗi hộp có số cái bút là:',f(N)+' : '+k+' = '+f(one)+' (cái)',M+' hộp có số cái bút là:',f(one)+' × '+M+' = '+f(tot)+' (cái)');}
 else if(/kg/.test(q)){L.push('Mua 1 kg táo hết số tiền là:',f(N)+' : '+k+' = '+f(one)+' (đồng)','Mua '+M+' kg táo hết số tiền là:',f(one)+' × '+M+' = '+f(tot)+' (đồng)');}
 else if(/giờ/.test(q)){L.push('Mỗi giờ người đó đi được số ki-lô-mét là:',f(N)+' : '+k+' = '+f(one)+' (km)','Trong '+M+' giờ người đó đi được số ki-lô-mét là:',f(one)+' × '+M+' = '+f(tot)+' (km)');}
 else{L.push('Giá trị một phần là:',f(N)+' : '+k+' = '+f(one),'Giá trị '+M+' phần là:',f(one)+' × '+M+' = '+f(tot));}
 L.push('Đáp số: '+a+'.');return L.join('\n');};

LG['tb4x_49_1']=function(it){
 var q=String(it.q),a=String(it.a),m=q.match(/:\s*([\d; ]+\d)\./),L=[];
 var arr=m?m[1].split(';').map(function(s){return +s.trim();}):[];
 if(/bao nhiêu số liệu/.test(q)){
  return 'Dãy số liệu là: '+arr.join('; ')+'.\nĐếm từng số trong dãy: có '+arr.length+' số.\nVậy dãy số liệu trên có '+a+'.';}
 var t=q.match(/thứ (\d+)/);
 if(t){var i=+t[1];return 'Đọc các số liệu theo thứ tự từ trái sang phải: '+arr.join('; ')+'.\nSố liệu thứ '+i+' là '+(arr[i-1]!==undefined?arr[i-1]:'')+'.\nVậy số liệu thứ '+i+' của dãy là '+a+'.';}
 if(/cao nhất/.test(q)&&arr.length){var mx=Math.max.apply(null,arr);
  return 'So sánh các số liệu: '+arr.join('; ')+'.\nSố lớn nhất trong dãy là '+mx+'.\nVậy bạn cao nhất cao '+a+'.';}
 if(/thấp nhất/.test(q)&&arr.length){var mn=Math.min.apply(null,arr);
  return 'So sánh các số liệu: '+arr.join('; ')+'.\nSố bé nhất trong dãy là '+mn+'.\nVậy bạn thấp nhất cao '+a+'.';}
 return 'Đọc kĩ dãy số liệu theo thứ tự từ trái sang phải.\nĐáp án: '+a+'.';};

LG['tb4x_49_2']=function(it){
 var q=String(it.q),a=String(it.a),m=q.match(/lần lượt là:\s*([\d; ]+\d)\./);
 var arr=m?m[1].split(';').map(function(s){return +s.trim();}):[];
 if(arr.length){var mx=Math.max.apply(null,arr),mn=Math.min.apply(null,arr);
  return 'Bài giải\nTrong dãy số liệu '+arr.join('; ')+': số lớn nhất là '+mx+', số bé nhất là '+mn+'.\nTổ nhiều điểm 10 nhất hơn tổ ít điểm 10 nhất số điểm 10 là:\n'+mx+' − '+mn+' = '+(mx-mn)+' (điểm 10)\n(Viết gọn: '+a+'.)\nĐáp số: '+(mx-mn)+' điểm 10.';}
 return 'Bài giải\nTìm số lớn nhất và số bé nhất trong dãy rồi lấy số lớn trừ số bé.\nĐáp số: '+a+'.';};

LG['tb4x_4_1']=function(it){
  var q=String(it.q),a=String(it.a),m;
  m=q.match(/([a-z])\s*=\s*(\d+)[^]*?biểu thức\s+(\d+)\s*[–-]\s*[a-z]\s*×\s*(\d+)/);
  if(m){var v=+m[2],c=+m[3],k=+m[4];return 'Thay '+m[1]+' = '+v+' vào biểu thức (biểu thức có phép trừ và phép nhân thì thực hiện phép nhân trước), ta có:\n'+c+' − '+v+' × '+k+' = '+c+' − '+(v*k)+' = '+(c-v*k)+'\nVậy giá trị của biểu thức là '+a+'.';}
  m=q.match(/([a-z])\s*=\s*(\d+)[^]*?biểu thức\s+[a-z]\s*×\s*(\d+)/);
  if(m){var v=+m[2],k=+m[3];return 'Thay '+m[1]+' = '+v+' vào biểu thức, ta có:\n'+v+' × '+k+' = '+(v*k)+'\nVậy giá trị của biểu thức là '+a+'.';}
  m=q.match(/([a-z])\s*=\s*(\d+)[^]*?biểu thức\s+[a-z]\s*\+\s*(\d+)/);
  if(m){var v=+m[2],k=+m[3];return 'Thay '+m[1]+' = '+v+' vào biểu thức, ta có:\n'+v+' + '+k+' = '+(v+k)+'\nVậy giá trị của biểu thức là '+a+'.';}
  return 'Thay giá trị của chữ vào biểu thức rồi tính (nhân, chia trước; cộng, trừ sau).\nVậy giá trị của biểu thức là '+a+'.';
};
LG['tb4x_4_2']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/a\s*=\s*(\d+)\s*cm,\s*b\s*=\s*(\d+)\s*cm/);
  var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ');};
  if(m){var x=+m[1],y=+m[2];
    if(/Chu vi|P\s*=/.test(q))return 'Thay a = '+x+' cm, b = '+y+' cm vào công thức P = (a + b) × 2, ta có:\nP = ('+x+' + '+y+') × 2 = '+f(x+y)+' × 2 = '+f((x+y)*2)+' (cm)\nVậy P = '+a+'.';
    return 'Thay a = '+x+' cm, b = '+y+' cm vào công thức S = a × b, ta có:\nS = '+x+' × '+y+' = '+f(x*y)+' (cm²)\nVậy S = '+a+'.';}
  return 'Thay số đo chiều dài, chiều rộng vào công thức rồi tính.\nVậy kết quả là '+a+'.';
};
LG['tb4x_50_1']=function(it){
  var q=String(it.q),a=String(it.a),re=/(Thứ (?:Hai|Ba|Tư|Năm|Sáu|Bảy)|Chủ nhật):\s*(\d+)\s*quyển/g,m,d={},ds=[];
  while((m=re.exec(q))){d[m[1]]=+m[2];ds.push(m[1]);}
  var bang=ds.map(function(k){return k+': '+d[k]+' quyển';}).join('; ');
  m=q.match(/\?\s*$/)?q.match(/(Thứ (?:Hai|Ba|Tư|Năm|Sáu|Bảy)|Chủ nhật) cho mượn nhiều hơn hay ít hơn (Thứ (?:Hai|Ba|Tư|Năm|Sáu|Bảy)|Chủ nhật)/):null;
  if(m&&d[m[1]]!=null&&d[m[2]]!=null){var x=d[m[1]],y=d[m[2]];
    var l1='Đọc biểu đồ: '+m[1]+' cho mượn '+x+' quyển, '+m[2]+' cho mượn '+y+' quyển.';
    if(x>=y)return l1+'\nVì '+x+' > '+y+' nên '+m[1]+' cho mượn nhiều hơn.\n'+x+' − '+y+' = '+(x-y)+' (quyển)\nVậy: '+a+'.';
    return l1+'\nVì '+x+' < '+y+' nên '+m[1]+' cho mượn ít hơn.\n'+y+' − '+x+' = '+(y-x)+' (quyển)\nVậy: '+a+'.';}
  if(/nhất/.test(q)&&ds.length){var it2=/ít/.test(q.slice(q.lastIndexOf('.')));
    return 'Đọc biểu đồ: '+bang+'.\nSo sánh các số liệu, cột '+(it2?'thấp':'cao')+' nhất ứng với '+a+'.\nVậy ngày thư viện cho mượn '+(it2?'ít':'nhiều')+' sách nhất là '+a+'.';}
  return 'Đọc số liệu trên biểu đồ'+(bang?': '+bang:'')+'.\nSo sánh (hoặc tính hiệu) các số liệu theo yêu cầu.\nVậy: '+a+'.';
};
LG['tb4x_51_1']=function(it){
  var q=String(it.q),a=String(it.a),m;
  m=q.match(/Làm như vậy (\d+) lần thì có (\d+) lần lấy được bóng (xanh|đỏ)/);
  if(m){var n=+m[1],k=+m[2],kia=m[3]==='xanh'?'đỏ':'xanh';return 'Bài giải\nMỗi lần lấy chỉ được bóng đỏ hoặc bóng xanh.\nSố lần lấy được bóng '+kia+' là:\n'+n+' − '+k+' = '+(n-k)+' (lần)\nĐáp số: '+a+'.';}
  m=q.match(/Tung một đồng xu (\d+) lần, có (\d+) lần xuất hiện mặt (sấp|ngửa)/);
  if(m){var n=+m[1],k=+m[2],kia=m[3]==='sấp'?'ngửa':'sấp';return 'Bài giải\nMỗi lần tung, đồng xu xuất hiện mặt sấp hoặc mặt ngửa.\nSố lần xuất hiện mặt '+kia+' là:\n'+n+' − '+k+' = '+(n-k)+' (lần)\nĐáp số: '+a+'.';}
  m=q.match(/kết quả lần lượt là:\s*([\d;\s]+)\.\s*Mặt (\d+) chấm/);
  if(m){var arr=m[1].split(/[;\s]+/).filter(Boolean),c=m[2],cnt=arr.filter(function(x){return x===c;}).length;
    return 'Đếm trong dãy kết quả '+arr.join('; ')+' các lần ra mặt '+c+' chấm: có '+cnt+' lần.\nVậy mặt '+c+' chấm xuất hiện '+a+'.';}
  return 'Đếm số lần sự kiện xảy ra (hoặc lấy tổng số lần trừ đi số lần của sự kiện còn lại).\nĐáp số: '+a+'.';
};
LG['tb4x_53_1']=function(it){
  var q=String(it.q),a=String(it.a),m;
  m=q.match(/Phân số (\d+)\/(\d+) có tử số/);
  if(m)return 'Trong phân số '+m[1]+'/'+m[2]+': số viết trên gạch ngang là tử số, số viết dưới gạch ngang là mẫu số.\nVậy: '+a+'.';
  m=q.match(/Phân số (\d+)\/(\d+) đọc là gì/);
  if(m)return 'Đọc phân số: đọc tử số trước, rồi đọc "phần", sau đó đọc mẫu số.\nPhân số '+m[1]+'/'+m[2]+' đọc là: '+a+'.';
  m=q.match(/Viết phân số:\s*(.+?)\.?$/);
  if(m)return 'Số đọc trước chữ "phần" là tử số (viết trên gạch ngang), số đọc sau chữ "phần" là mẫu số (viết dưới gạch ngang).\n'+m[1].charAt(0).toUpperCase()+m[1].slice(1)+' viết là: '+a+'.';
  return 'Phân số gồm tử số (viết trên gạch ngang) và mẫu số (viết dưới gạch ngang).\nVậy: '+a+'.';
};
LG['tb4x_53_2']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/Một (.+?) được chia thành (\d+) phần bằng nhau, đã tô màu (\d+) phần/);
  if(m){var n=+m[2],k=+m[3];return m[1].charAt(0).toUpperCase()+m[1].slice(1)+' được chia thành '+n+' phần bằng nhau nên mẫu số là '+n+'.\nĐã tô màu '+k+' phần nên phân số chỉ phần đã tô màu là '+k+'/'+n+'.\nSố phần chưa tô màu là: '+n+' − '+k+' = '+(n-k)+' (phần), nên phân số chỉ phần chưa tô màu là '+(n-k)+'/'+n+'.\nVậy: '+a+'.';}
  return 'Mẫu số là số phần bằng nhau được chia ra, tử số là số phần được tô màu (hoặc chưa tô màu).\nVậy: '+a+'.';
};
LG['tb4x_54_1']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\/(\d+)/);
  if(m){var t=+m[1],s=+m[2],r=t>s?'Tử số '+t+' lớn hơn mẫu số '+s+' nên phân số lớn hơn 1.':t<s?'Tử số '+t+' bé hơn mẫu số '+s+' nên phân số bé hơn 1.':'Tử số bằng mẫu số ('+t+' = '+s+') nên phân số bằng 1.';
    return 'Ghi nhớ: phân số có tử số lớn hơn mẫu số thì lớn hơn 1; tử số bằng mẫu số thì bằng 1; tử số bé hơn mẫu số thì bé hơn 1.\nPhân số '+t+'/'+s+': '+r+'\nVậy: '+a+'.';}
  return 'So sánh tử số với mẫu số để biết phân số lớn hơn, bằng hay bé hơn 1.\nVậy: '+a+'.';
};
LG['tb4x_54_2']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/Có (\d+) (.+?) chia đều cho (\d+) (.+?)\./);
  if(m)return 'Bài giải\nThương của phép chia số tự nhiên cho số tự nhiên (khác 0) có thể viết thành phân số: tử số là số bị chia, mẫu số là số chia.\nMỗi '+m[4].replace(/^các\s+/,'').replace(/^bạn$/,'bạn')+' được số '+m[2]+' là:\n'+a+'\nĐáp số: '+m[1]+'/'+m[3]+' '+m[2]+'.';
  return 'Bài giải\nTa lấy số bánh chia cho số bạn, viết thương dưới dạng phân số.\n'+a;
};
LG['tb4x_56_1']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\/(\d+)/);
  var g=function(x,y){while(y){var t=x%y;x=y;y=t;}return x;};
  if(m){var t=+m[1],s=+m[2],d=g(t,s);
    return 'Ta thấy '+t+' và '+s+' cùng chia hết cho '+d+'.\nChia cả tử số và mẫu số cho '+d+':\n'+t+'/'+s+' = ('+t+' : '+d+')/('+s+' : '+d+') = '+(t/d)+'/'+(s/d)+'\nPhân số '+(t/d)+'/'+(s/d)+' không rút gọn được nữa (là phân số tối giản).\nVậy '+a+'.';}
  return 'Chia cả tử số và mẫu số cho cùng một số tự nhiên lớn hơn 1 cho đến khi được phân số tối giản.\nVậy '+a+'.';
};
LG['tb4x_56_2']=function(it){
  var a=String(it.a),m=a.match(/(\d+)\/(\d+)/);
  var s='Phân số tối giản là phân số mà tử số và mẫu số không cùng chia hết cho số tự nhiên nào lớn hơn 1.\nCác phân số còn lại đều có tử số và mẫu số là số chẵn, cùng chia hết cho 2 nên rút gọn được, không phải phân số tối giản.';
  if(m)s+='\nPhân số '+m[1]+'/'+m[2]+' có tử số '+m[1]+' và mẫu số '+m[2]+' không cùng chia hết cho số nào lớn hơn 1.';
  return s+'\nVậy phân số tối giản là '+a+'.';
};
LG['tb4x_58_1']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\/(\d+)/);
  if(m){var t=+m[1],s=+m[2],r=t>s?'Tử số '+t+' lớn hơn mẫu số '+s+' nên '+t+'/'+s+' > 1.':t<s?'Tử số '+t+' bé hơn mẫu số '+s+' nên '+t+'/'+s+' < 1.':'Tử số bằng mẫu số nên '+t+'/'+s+' = 1.';
    return r+'\nVậy dấu cần điền là: '+a;}
  return 'So sánh tử số với mẫu số: tử lớn hơn mẫu thì phân số > 1; tử bé hơn mẫu thì < 1; bằng nhau thì = 1.\nVậy dấu cần điền là: '+a;
};
LG['tb4x_60_1']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\/(\d+)\s*\+\s*(\d+)\/(\d+)/);
  if(m){var s='Muốn cộng hai phân số cùng mẫu số, ta cộng hai tử số với nhau và giữ nguyên mẫu số.\n'+m[1]+'/'+m[2]+' + '+m[3]+'/'+m[4]+' = ('+m[1]+' + '+m[3]+')/'+m[2]+' = '+(+m[1]+ +m[3])+'/'+m[2];
    if(/=/.test(a))s+='\nRút gọn phân số: '+a;
    return s+'\nVậy '+m[1]+'/'+m[2]+' + '+m[3]+'/'+m[4]+' = '+a+'.';}
  return 'Cộng hai tử số, giữ nguyên mẫu số (rút gọn nếu được).\nVậy kết quả là '+a+'.';
};
LG['tb4x_60_2']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\/(\d+) cuốn sách, ngày thứ hai đọc được (\d+)\/(\d+)/);
  if(m)return 'Bài giải\nCả hai ngày bạn đọc được số phần cuốn sách là:\n'+m[1]+'/'+m[2]+' + '+m[3]+'/'+m[4]+' = '+(+m[1]+ +m[3])+'/'+m[2]+' (cuốn sách)\nĐáp số: '+a+'.';
  return 'Bài giải\nCộng số phần cuốn sách đọc được của hai ngày (cộng tử số, giữ nguyên mẫu số).\nĐáp số: '+a+'.';
};
LG['tb4x_61_1']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\/(\d+)\s*[–−-]\s*(\d+)\/(\d+)/);
  if(m){var s='Muốn trừ hai phân số cùng mẫu số, ta trừ tử số của phân số thứ nhất cho tử số của phân số thứ hai và giữ nguyên mẫu số.\n'+m[1]+'/'+m[2]+' − '+m[3]+'/'+m[4]+' = ('+m[1]+' − '+m[3]+')/'+m[2]+' = '+(m[1]-m[3])+'/'+m[2];
    if(/=/.test(a))s+='\nRút gọn phân số: '+a;
    return s+'\nVậy '+m[1]+'/'+m[2]+' − '+m[3]+'/'+m[4]+' = '+a+'.';}
  return 'Trừ hai tử số, giữ nguyên mẫu số (rút gọn nếu được).\nVậy kết quả là '+a+'.';
};
LG['tb4x_63_1']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/chiều dài (\d+)\/(\d+) m, chiều rộng (\d+)\/(\d+) m/);
  var ans=a.replace(/\s*\(m²\)\s*$/,'');
  var kq=ans.split('=').pop().trim();
  if(m)return 'Bài giải\nMuốn tính diện tích hình chữ nhật, ta lấy chiều dài nhân với chiều rộng (cùng đơn vị đo).\nMuốn nhân hai phân số, ta lấy tử số nhân tử số, mẫu số nhân mẫu số'+((ans.match(/=/g)||[]).length>1?'; được kết quả thì rút gọn thành phân số tối giản':'')+'.\nDiện tích hình chữ nhật là:\n'+a+'\nĐáp số: '+kq+' m².';
  return 'Bài giải\nDiện tích hình chữ nhật là:\n'+a+'\nĐáp số: '+kq+' m².';
};

LG['tb4x_65_1']=function(it){var q=it.q,a=it.a;var m=q.match(/có\s+([\d ]+?)\s+(.+?),\s*trong đó\s+(\d+)\/(\d+)\s+số\s+(.+?)\s+(là|đã)\s+(.+?)\.\s*Hỏi\s+(.+?)\?/);
var ma=a.match(/^(.*?)=\s*([\d ]+?)\s*(\D*)$/);var kq=ma?ma[2].trim():'',dv=ma?ma[3].trim():'',bt=ma?ma[1].trim():'';
var pt=ma?bt+' = '+kq+' ('+dv+')':a;
if(!m)return 'Muốn tìm phân số của một số, ta lấy số đó nhân với phân số.\nBài giải\n'+pt+'\nĐáp số: '+kq+' '+dv+'.\nTrả lời: '+a+'.';
var n=m[1].trim(),t=m[3],s=m[4],cau=m[8].replace(/^có bao nhiêu\s+/,'');
var lv=/^kg\s+/.test(cau)?'Số ki-lô-gam '+cau.replace(/^kg\s+/,'').replace('đã được bán','đã bán')+' là:':'Số '+cau+' là:';
return 'Muốn tìm '+t+'/'+s+' của '+n+', ta lấy '+n+' nhân với '+t+'/'+s+'.\nBài giải\n'+lv+'\n'+pt+'\nĐáp số: '+kq+' '+dv+'.\nTóm lại: '+a+'.';};
LG['tb4x_8_1']=function(it){var a=it.a,q=it.q;var g=(q.match(/góc\s+(nhọn|tù|bẹt|vuông)/)||[])[1]||'';
var dh={'nhọn':'Góc nhọn bé hơn góc vuông (bé hơn 90°).','tù':'Góc tù lớn hơn góc vuông nhưng bé hơn góc bẹt (lớn hơn 90° và bé hơn 180°).','bẹt':'Góc bẹt bằng hai góc vuông (bằng 180°), hai cạnh của góc bẹt nằm trên một đường thẳng.','vuông':'Góc vuông có số đo 90°.'}[g]||'So sánh số đo mỗi góc với góc vuông (90°) và góc bẹt (180°).';
return 'Ta nhớ: góc vuông = 90°, góc bẹt = 180°.\n'+dh+'\nDùng ê ke để so sánh từng góc với góc vuông (hoặc dùng thước đo góc để đo).\nTrong các góc đã cho, góc có số đo '+a+' là góc '+g+'.\nVậy góc '+g+' là góc có số đo '+a+'.';};
LG['tb4x_8_2']=function(it){var q=it.q,a=it.a;var d=+((q.match(/(\d+)\s*°/)||[])[1]);var s='Góc vuông có số đo 90°, góc bẹt có số đo 180°.\n';
if(d<90)s+='Vì '+d+'° < 90° nên góc này bé hơn góc vuông, đó là góc nhọn.';else if(d===90)s+='Vì góc có số đo 90° nên đó là góc vuông.';else if(d<180)s+='Vì 90° < '+d+'° < 180° nên góc này lớn hơn góc vuông và bé hơn góc bẹt, đó là góc tù.';else if(d===180)s+='Góc có số đo 180° là góc bẹt (bằng hai góc vuông).';else s+='So sánh '+d+'° với 90° và 180°.';
return s+'\nVậy: '+a+'.';};
LG['tbc']=function(it){var q=it.q,a=it.a;var p=(q.split(':').pop()||'').split(';').map(function(x){return x.replace(/\s/g,'')}).filter(function(x){return /^\d+$/.test(x)});
var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')};if(!p.length)return 'Muốn tìm số trung bình cộng của nhiều số, ta tính tổng các số đó rồi chia tổng đó cho số các số hạng.\nVậy số trung bình cộng là '+a+'.';
var sum=p.reduce(function(s,x){return s+ +x},0);
return 'Muốn tìm số trung bình cộng của nhiều số, ta tính tổng của các số đó, rồi chia tổng đó cho số các số hạng.\nCó '+p.length+' số hạng.\n('+p.map(function(x){return f(+x)}).join(' + ')+') : '+p.length+' = '+f(sum)+' : '+p.length+' = '+a+'\nVậy số trung bình cộng của các số đã cho là '+a+'.';};
LG['th']=function(it){var q=it.q,a=it.a;var m=q.match(/^(.+?)\s+và\s+(.+?)\s+có tất cả\s+([\d ]+?)\s+(.+?)\.\s*\1\s+có nhiều hơn\s+\2\s+([\d ]+?)\s+/);
var parts=a.replace(/–/g,'−').split(';').map(function(s){return s.trim()});
if(!m)return 'Số lớn = (Tổng + Hiệu) : 2; Số bé = Tổng − Số lớn.\nBài giải\n'+parts.join('\n')+'\nĐáp số: '+a+'.';
var A=m[1],B=m[2],T=m[3].trim(),dv=m[4],H=m[5].trim();
var c1=(parts[0]||'').replace(/^[^:]+:\s*/,''),c2=(parts[1]||'').replace(/^[^:]+:\s*/,'');var x=(c1.match(/=\s*([\d ]+)$/)||[])[1]||'',y=(c2.match(/=\s*([\d ]+)$/)||[])[1]||'';x=x.trim();y=y.trim();
return 'Đây là bài toán tìm hai số khi biết tổng ('+T+') và hiệu ('+H+') của hai số đó. Số lớn = (Tổng + Hiệu) : 2.\nBài giải\nSố '+dv+' của '+A+' là:\n'+c1+' ('+dv+')\nSố '+dv+' của '+B+' là:\n'+c2+' ('+dv+')\nĐáp số: '+A+': '+x+' '+dv+'; '+B+': '+y+' '+dv+'.\nViết gọn: '+a;};
LG['timx']=function(it){var q=it.q,a=it.a;var m=q.match(/x\s*([+–−\-])\s*([\d ]+?)\s*=\s*([\d ]+)/);if(!m)return 'Ta tìm thành phần chưa biết theo quy tắc.\nVậy '+a;
var op=m[1],b=m[2].trim(),c=m[3].trim();
if(op==='+')return 'x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nx + '+b+' = '+c+'\nx = '+c+' − '+b+'\n'+a;
return 'x là số bị trừ chưa biết. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\nx − '+b+' = '+c+'\nx = '+c+' + '+b+'\n'+a;};
LG['tnc']=function(it){var q=it.q,a=it.a;var m=q.match(/([\d ]+?)\s*[–−\-]\s*([\d ]+)\s*$/);if(!m)return 'Đặt tính thẳng hàng, trừ từ phải sang trái.\nKết quả: '+a;
var A=m[1].replace(/\s/g,''),B=m[2].replace(/\s/g,'');var H=['đơn vị','chục','trăm','nghìn','chục nghìn','trăm nghìn','triệu','chục triệu','trăm triệu'];
var L=['Đặt tính: viết '+m[2].trim()+' dưới '+m[1].trim()+' sao cho các chữ số cùng hàng thẳng cột với nhau, rồi trừ từ phải sang trái:'];var nho=0;
for(var i=0;i<A.length;i++){var da=+A[A.length-1-i],db=i<B.length?+B[B.length-1-i]:0;var sub=db+nho,s='Hàng '+(H[i]||'')+': ';
if(i>=B.length&&nho===0){s+='hạ '+da+', viết '+da+'.';L.push(s);continue}
if(nho)s+=db+' thêm 1 bằng '+sub+'; ';var nn=0;
if(da>=sub){s+=da+' trừ '+sub+' bằng '+(da-sub)+((da-sub)===0&&i===A.length-1?' (chữ số 0 ở hàng cao nhất không viết).':', viết '+(da-sub)+'.');}else{s+=da+' không trừ được '+sub+', lấy '+(da+10)+' trừ '+sub+' bằng '+(da+10-sub)+', viết '+(da+10-sub)+', nhớ 1.';nn=1}
nho=nn;L.push(s);}
L.push('Vậy '+m[1].trim()+' − '+m[2].trim()+' = '+a+'.');return L.join('\n');};
LG['tps4']=function(it){var q=it.q,a=it.a.replace(/–/g,'−');var m=q.match(/(\d+)\/(\d+)\s*[–−\-]\s*(\d+)\/(\d+)/);var ch=a.replace(/^\s*=\s*/,'');
var s='Muốn trừ hai phân số khác mẫu số, ta quy đồng mẫu số hai phân số, rồi trừ hai phân số đó.\n';
if(!m)return s+a;
var p=ch.split('=').map(function(x){return x.trim()});var mm=(p[0]||'').match(/(\d+)\/(\d+)\s*−\s*(\d+)\/(\d+)/);
if(mm){var M=+mm[2];s+='Quy đồng mẫu số hai phân số (mẫu số chung là '+M+'):\n'+m[1]+'/'+m[2]+' = '+'('+m[1]+' × '+(M/m[2])+')/('+m[2]+' × '+(M/m[2])+') = '+mm[1]+'/'+M+'; '+m[3]+'/'+m[4]+' = '+'('+m[3]+' × '+(M/m[4])+')/('+m[4]+' × '+(M/m[4])+') = '+mm[3]+'/'+M+'\n';}
s+='Trừ hai tử số và giữ nguyên mẫu số'+(p.length>2?', rồi rút gọn phân số':'')+':\n'+m[1]+'/'+m[2]+' − '+m[3]+'/'+m[4]+' '+a;
if(p.length>2){var r1=p[p.length-2].split('/'),r2=p[p.length-1].split('/');var k=(+r1[0])/(+r2[0]);if(k>1&&(+r1[1])/(+r2[1])===k)s+='\n(Rút gọn: chia cả tử số và mẫu số của '+p[p.length-2]+' cho '+k+' được '+p[p.length-1]+'.)';}
return s;};
LG['trieu']=function(it){var q=it.q,a=it.a;var H={'triệu':6,'trăm nghìn':5,'chục nghìn':4,'nghìn':3,'trăm':2,'chục':1,'đơn vị':0};var d=[0,0,0,0,0,0,0];var re=/(\d+)\s+(triệu|trăm nghìn|chục nghìn|nghìn|trăm|chục|đơn vị)/g,x,ds=[];
while((x=re.exec(q))){var k=H[x[2]];if(k===undefined||k>6)continue;d[k]=+x[1];ds.push('hàng '+x[2]+': '+x[1]);}
var miss=[];['triệu','trăm nghìn','chục nghìn','nghìn','trăm','chục','đơn vị'].forEach(function(h){if(!d[H[h]])miss.push(h)});
return 'Viết chữ số của mỗi hàng từ hàng cao đến hàng thấp: '+ds.join('; ')+'.\n'+(miss.length?'Các hàng không được nêu ('+miss.join(', ')+') viết chữ số 0.\n':'')+'Vậy số đó viết là: '+a+'.';};
LG['tth']=function(it){var q=it.q,a=it.a;var m=a.match(/^\(([\d ]+?)\s*\+\s*([\d ]+?)\)\s*\+\s*([\d ]+?)\s*=\s*([\d ]+?)\s*\+/);
var s='Áp dụng tính chất giao hoán và kết hợp của phép cộng: nhóm hai số có tổng là số tròn trăm, tròn nghìn lại với nhau.\n';
if(m)s+='Ta thấy '+m[1].trim()+' + '+m[2].trim()+' = '+m[4].trim()+' (số tròn), nên đổi chỗ và nhóm hai số này:\n';
return s+(q.split(':').pop()||'').trim()+' = '+a;};
LG['yen']=function(it){var q=it.q,a=it.a;var K={'kg':1,'yến':10,'tạ':100,'tấn':1000};var f=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')};
var s='Ta có: 1 yến = 10 kg; 1 tạ = 10 yến = 100 kg; 1 tấn = 10 tạ = 1 000 kg.\n';var m=q.split('=');if(m.length<2)return s+'Vậy đáp án là '+a+'.';
var L=m[0].trim(),R=m[1].replace(/[….]/g,'').trim();var re=/([\d ]+?)\s*(kg|yến|tạ|tấn)/g,x,parts=[];while((x=re.exec(L)))parts.push([+x[1].replace(/\s/g,''),x[2]]);
if(!parts.length||!K[R])return s+'Vậy '+L+' = '+a+' '+R+'.';
var st=[],tot=0;parts.forEach(function(p){var v=p[0]*K[p[1]];tot+=v;if(p[1]!=='kg')st.push(f(p[0])+' '+p[1]+' = '+f(v)+' kg');});
if(R==='kg'){if(parts.length>1)s+=st.join('; ')+'\nNên '+L+' = '+st.map(function(t){return t.split('= ')[1].replace(' kg','')}).concat(parts.filter(function(p){return p[1]==='kg'}).map(function(p){return f(p[0])})).join(' + ')+' = '+a+' kg.';else s+=parts[0][0]+' '+parts[0][1]+' = '+parts[0][0]+' × '+f(K[parts[0][1]])+' kg = '+a+' kg.';}
else if(parts.length===1&&K[parts[0][1]]<K[R]){s+=f(K[R]/K[parts[0][1]])+' '+parts[0][1]+' = 1 '+R+', nên '+L+' = '+f(parts[0][0])+' : '+f(K[R]/K[parts[0][1]])+' = '+a+' '+R+'.';}
else if(parts.length===1){s+='1 '+parts[0][1]+' = '+f(K[parts[0][1]]/K[R])+' '+R+', nên '+L+' = '+f(parts[0][0])+' × '+f(K[parts[0][1]]/K[R])+' = '+a+' '+R+'.';}
else s+='Đổi từng phần ra '+R+' rồi cộng lại: '+L+' = '+a+' '+R+'.';
return s+'\nVậy số cần điền là '+a+'.';};

LG['bdquat5']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+(?:,\d+)?)\s*%[^\d]*?(\d[\d\s]*\d|\d)\s*học sinh/);
  if(!m)return 'Muốn tìm số học sinh thích môn Toán, ta lấy tổng số học sinh chia cho 100 rồi nhân với số phần trăm.\nĐáp số: '+a+'.';
  var p=m[1],n=m[2].replace(/\s/g,'');
  var tp=q.match(/thích\s+(môn\s+[^.?]+?)\./);var mon=tp?tp[1]:'môn Toán';
  return 'Bài giải\nSố học sinh thích '+mon+' là:\n'+n+' : 100 × '+p+' = '+a.replace(/\s*học sinh/,'')+' (học sinh)\nĐáp số: '+a+'.';
};
LG['chtp']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+(?:,\d+)?)\s*:\s*(\d+)/);
  if(!m)return 'Chia phần nguyên trước, viết dấu phẩy vào thương rồi chia tiếp phần thập phân.\nVậy kết quả là '+a+'.';
  var s=m[1],b=parseInt(m[2],10);
  var ip=s.split(',')[0],dp=s.split(',')[1]||'';
  var L=[],r=0,first=true,qs='';
  // phần nguyên
  var cur=0,started=false;
  for(var i=0;i<ip.length;i++){
    cur=r*10+(+ip[i]);
    if(!started&&cur<b&&i<ip.length-1){r=cur;continue;}
    started=true;var d=Math.floor(cur/b),p=d*b;r=cur-p;qs+=d;
    L.push((first?'':'Hạ '+ip[i]+' được '+cur+'; ')+cur+' chia '+b+' được '+d+', viết '+d+'; '+d+' nhân '+b+' bằng '+p+'; '+cur+' trừ '+p+' bằng '+r+'.');
    first=false;
  }
  if(dp.length||r){
    L.push('Viết dấu phẩy vào bên phải '+qs+' ở thương.');
    var k=0,guard=0;
    while((k<dp.length||r)&&guard<8){
      guard++;var dig,note;
      if(k<dp.length){dig=+dp[k];note='Hạ '+dig+' được ';}else{dig=0;note='Thêm chữ số 0 vào bên phải số dư '+r+' được ';}
      cur=r*10+dig;var d2=Math.floor(cur/b),p2=d2*b;r=cur-p2;qs+=d2;
      L.push(note+cur+'; '+cur+' chia '+b+' được '+d2+', viết '+d2+'; '+d2+' nhân '+b+' bằng '+p2+'; '+cur+' trừ '+p2+' bằng '+r+'.');
      k++;
    }
  }
  return 'Đặt tính rồi chia như chia số tự nhiên:\n'+L.join('\n')+'\nVậy '+s+' : '+b+' = '+a+'.';
};
LG['ctp']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+(?:,\d+)?)\s*([+\-–−])\s*(\d+(?:,\d+)?)/);
  if(!m)return 'Viết số này dưới số kia sao cho các chữ số ở cùng một hàng thẳng cột, dấu phẩy thẳng dấu phẩy, rồi tính như với số tự nhiên.\nVậy kết quả là '+a+'.';
  var x=m[1],y=m[3],add=m[2]==='+',op=add?'+':'–';
  var xi=x.split(','),yi=y.split(',');var xd=xi[1]||'',yd=yi[1]||'';
  var n=Math.max(xd.length,yd.length);
  var L=['Đặt tính: viết '+y+' dưới '+x+' sao cho các chữ số cùng hàng thẳng cột, dấu phẩy thẳng dấu phẩy.'];
  if(xd.length!==yd.length&&n>0){
    var sh=xd.length<n?x:y;
    L.push('Coi '+sh+' là '+(sh.split(',')[0])+','+((sh.split(',')[1]||'')+'00').slice(0,n)+' (viết thêm chữ số 0 vào bên phải phần thập phân).');
  }
  var X=xi[0]+(xd+'00').slice(0,n),Y=yi[0]+(yd+'00').slice(0,n);
  var len=Math.max(X.length,Y.length);X=X.padStart(len,'0');Y=Y.padStart(len,'0');
  var c=0,res='',steps=[];
  for(var i=len-1;i>=0;i--){
    var u=+X[i],v=+Y[i];var lead=(i<len-Math.max(X.replace(/^0+/,'').length,1))&&u===0;
    var vExists=i>=len-yi[0].length-n, uExists=i>=len-xi[0].length-n;
    if(add){
      var s=u+v+c,txt;
      if(!vExists&&!uExists)break;
      if(vExists&&uExists)txt=u+' cộng '+v+(c?' bằng '+(u+v)+', thêm '+c+' bằng '+s:' bằng '+s);
      else txt=(uExists?u:v)+(c?' thêm '+c+' bằng '+s:', viết '+s);
      if(vExists&&uExists||c){txt+=', viết '+(s%10)+(s>=10?', nhớ 1':'');}
      c=s>=10?1:0;res=(s%10)+res;steps.push(txt+'.');
    }else{
      if(!uExists)break;
      var vv=v+c,txt2;
      if(!vExists&&!c){res=u+res;steps.push('Hạ '+u+'.');continue;}
      var pre=c?(vExists?v+' thêm '+c+' bằng '+vv+'; ':''):'';
      if(u>=vv){var lastCol=(i===len-xi[0].length-n);txt2=pre+u+' trừ '+vv+' bằng '+(u-vv)+((lastCol&&u===vv&&i<len-n-1)?' (không viết chữ số 0 ở đầu)':', viết '+(u-vv));res=(u-vv)+res;c=0;}
      else{txt2=pre+u+' không trừ được '+vv+', lấy '+(u+10)+' trừ '+vv+' bằng '+(u+10-vv)+', viết '+(u+10-vv)+', nhớ 1';res=(u+10-vv)+res;c=1;}
      steps.push(txt2+'.');
    }
  }
  if(add&&c){res='1'+res;steps.push('Viết 1.');}
  L.push('Tính từ phải sang trái:');
  L=L.concat(steps);
  L.push('Viết dấu phẩy ở kết quả thẳng cột với các dấu phẩy.');
  L.push('Vậy '+x+' '+op+' '+y+' = '+a+'.');
  return L.join('\n');
};
LG['cttg5']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+)\s*giờ\s*(\d+)\s*phút\s*([+\-–−])\s*(\d+)\s*giờ\s*(\d+)\s*phút/);
  if(!m)return 'Đặt tính thẳng cột: giờ dưới giờ, phút dưới phút rồi tính từng loại đơn vị; nếu số phút từ 60 trở lên thì đổi 60 phút = 1 giờ.\nVậy kết quả là '+a+'.';
  var h1=+m[1],p1=+m[2],h2=+m[4],p2=+m[5],add=m[3]==='+';
  var L=['Đặt tính: giờ thẳng cột với giờ, phút thẳng cột với phút.'];
  if(add){
    var P=p1+p2,H=h1+h2;
    L.push('Cộng phút: '+p1+' + '+p2+' = '+P+' (phút).');
    L.push('Cộng giờ: '+h1+' + '+h2+' = '+H+' (giờ).');
    if(P>=60){L.push('Ta được '+H+' giờ '+P+' phút. Vì '+P+' phút = 1 giờ '+(P-60)+' phút nên '+H+' giờ '+P+' phút = '+(H+1)+' giờ '+(P-60)+' phút.');}
    L.push('Vậy '+h1+' giờ '+p1+' phút + '+h2+' giờ '+p2+' phút = '+a+'.');
  }else{
    var hh=h1,pp=p1;
    if(p1<p2){L.push('Vì '+p1+' phút không trừ được '+p2+' phút nên đổi 1 giờ = 60 phút: '+h1+' giờ '+p1+' phút = '+(h1-1)+' giờ '+(p1+60)+' phút.');hh=h1-1;pp=p1+60;}
    L.push('Trừ phút: '+pp+' − '+p2+' = '+(pp-p2)+' (phút).');
    L.push('Trừ giờ: '+hh+' − '+h2+' = '+(hh-h2)+' (giờ).');
    L.push('Vậy '+h1+' giờ '+p1+' phút − '+h2+' giờ '+p2+' phút = '+a+'.');
  }
  return L.join('\n');
};
(function(){
  function num(s){return s.replace(/\s/g,'').replace(',','.');}
  function vn(x){var r=Math.round(x*1000)/1000;return String(r).replace('.',',');}
  function hthang(it,dvAll){
    var q=String(it.q),a=String(it.a);
    var m=q.match(/hai đáy\s*(\d+(?:,\d+)?)\s*([a-z]+)\s*và\s*(\d+(?:,\d+)?)\s*[a-z]+\s*,\s*chiều cao\s*(\d+(?:,\d+)?)/)||
          q.match(/đáy lớn\s*(\d+(?:,\d+)?)\s*([a-z]+)\s*,\s*đáy bé\s*(\d+(?:,\d+)?)\s*[a-z]+\s*,\s*chiều cao\s*(\d+(?:,\d+)?)/);
    if(!m)return null;
    var A=+num(m[1]),u=m[2],B=+num(m[3]),h=+num(m[4]);
    var ten=/thửa ruộng/.test(q)?'thửa ruộng':'hình thang';
    return 'Bài giải\nDiện tích '+ten+' là:\n('+vn(A)+' + '+vn(B)+') × '+vn(h)+' : 2 = '+vn((A+B)*h/2)+' ('+u+'²)\nĐáp số: '+a+'.';
  }
  function tgiac(it){
    var q=String(it.q),a=String(it.a),m;
    if((m=q.match(/diện tích\s*(\d+(?:,\d+)?)\s*([a-z]+)²\s*,\s*độ dài đáy\s*(\d+(?:,\d+)?)/))){
      var S=+num(m[1]),u=m[2],d=+num(m[3]);
      return 'Muốn tìm chiều cao hình tam giác, ta lấy diện tích nhân với 2 rồi chia cho độ dài đáy.\nBài giải\nChiều cao của hình tam giác là:\n'+vn(S)+' × 2 : '+vn(d)+' = '+vn(S*2/d)+' ('+u+')\nĐáp số: '+a+'.';
    }
    if((m=q.match(/đáy\s*(\d+(?:,\d+)?)\s*([a-z]+)\s*,\s*chiều cao\s*(\d+(?:,\d+)?)/))){
      var d2=+num(m[1]),u2=m[2],h=+num(m[3]);
      var ten=/mảnh bìa/.test(q)?'mảnh bìa':'hình tam giác';
      return 'Muốn tính diện tích hình tam giác, ta lấy độ dài đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho 2.\nBài giải\nDiện tích '+ten+' là:\n'+vn(d2)+' × '+vn(h)+' : 2 = '+vn(d2*h/2)+' ('+u2+'²)\nĐáp số: '+a+'.';
    }
    return null;
  }
  var QT='Muốn tính diện tích hình thang, ta lấy tổng độ dài hai đáy nhân với chiều cao (cùng đơn vị đo) rồi chia cho 2.\n';
  LG['dt5']=function(it){
    if(/hình thang/.test(String(it.q))){var r=hthang(it);if(r)return QT+r;}
    var t=tgiac(it);if(t)return t;
    return 'Diện tích hình tam giác = đáy × chiều cao : 2; diện tích hình thang = (đáy lớn + đáy bé) × chiều cao : 2.\nĐáp số: '+it.a+'.';
  };
  LG['dtht5']=function(it){var r=hthang(it);return r?QT+r:QT+'Đáp số: '+it.a+'.';};
  LG['dttg5']=function(it){var t=tgiac(it);return t||('Diện tích hình tam giác = độ dài đáy × chiều cao : 2; chiều cao = diện tích × 2 : độ dài đáy.\nĐáp số: '+it.a+'.');};
  LG['hinhtron5']=function(it){
    var q=String(it.q),a=String(it.a);
    var m=q.match(/bán kính\s*(\d+(?:,\d+)?)\s*([a-z]+)/),md=q.match(/đường kính\s*(\d+(?:,\d+)?)\s*([a-z]+)/);
    var cv=/chu vi/.test(q);
    if(m){var r=+num(m[1]),u=m[2];
      if(cv)return 'Muốn tính chu vi hình tròn, ta lấy 2 lần bán kính nhân với số 3,14.\nBài giải\nChu vi hình tròn là:\n'+vn(r)+' × 2 × 3,14 = '+vn(r*2*3.14)+' ('+u+')\nĐáp số: '+a+'.';
      return 'Muốn tính diện tích hình tròn, ta lấy bán kính nhân với bán kính rồi nhân với số 3,14.\nBài giải\nDiện tích hình tròn là:\n'+vn(r)+' × '+vn(r)+' × 3,14 = '+vn(r*r*3.14)+' ('+u+'²)\nĐáp số: '+a+'.';}
    if(md&&cv){var d=+num(md[1]);return 'Muốn tính chu vi hình tròn, ta lấy đường kính nhân với số 3,14.\nBài giải\nChu vi hình tròn là:\n'+vn(d)+' × 3,14 = '+vn(d*3.14)+' ('+md[2]+')\nĐáp số: '+a+'.';}
    return 'Chu vi hình tròn = bán kính × 2 × 3,14; diện tích hình tròn = bán kính × bán kính × 3,14.\nĐáp số: '+a+'.';
  };
  LG['dvdt5']=function(it){
    var q=String(it.q),a=String(it.a);
    var m=q.match(/(\d+(?:,\d+)?)\s*(km|hm|dam|m|dm|cm|mm)²\s*=\s*\?\s*(km|hm|dam|m|dm|cm|mm)²/);
    if(!m)return 'Hai đơn vị đo diện tích liền nhau thì đơn vị lớn gấp 100 lần đơn vị bé.\nVậy kết quả là '+a+'.';
    var U=['km','hm','dam','m','dm','cm','mm'],i=U.indexOf(m[2]),j=U.indexOf(m[3]);
    if(j===i+1)return 'Hai đơn vị đo diện tích liền nhau thì đơn vị lớn gấp 100 lần đơn vị bé.\nTa có 1 '+m[2]+'² = 100 '+m[3]+'², nên '+m[1]+' '+m[2]+'² = '+m[1]+' × 100 '+m[3]+'² = '+a+'.\nVậy '+m[1]+' '+m[2]+'² = '+a+'.';
    if(j===i-1)return 'Hai đơn vị đo diện tích liền nhau thì đơn vị bé bằng 1/100 đơn vị lớn.\nTa có 100 '+m[2]+'² = 1 '+m[3]+'², nên '+m[1]+' '+m[2]+'² = '+m[1]+' : 100 '+m[3]+'².\nVậy '+m[1]+' '+m[2]+'² = '+a+'.';
    return 'Mỗi đơn vị đo diện tích gấp 100 lần đơn vị bé hơn tiếp liền.\nVậy '+m[1]+' '+m[2]+'² = '+a+'.';
  };
})();
var _lg5ket=function(q,a){
  var t=/^\d{5,}$/.test(a)?a.replace(/\B(?=(\d{3})+(?!\d))/g,' '):a,m;
  if((m=q.match(/^(.*?)\s+bằng bao nhiêu\s+(.+?)\s*\?/)))return 'Vậy '+m[1]+' bằng '+t+' '+m[2]+'.';
  if((m=q.match(/^(.*?)\s+có bao nhiêu\s+(.+?)\s*\?/)))return 'Vậy '+m[1]+' có '+t+' '+m[2]+'.';
  return 'Vậy đáp số là '+t+'.';
};
LG['dvtg5']=function(it){
  var q=String(it.q),a=String(it.a);
  var T=[[/thế kỉ.*năm/,'1 thế kỉ = 100 năm.'],[/phút.*giây/,'1 phút = 60 giây.'],[/năm thường.*ngày/,'Năm thường có 365 ngày (năm nhuận có 366 ngày, cứ 4 năm lại có 1 năm nhuận).'],[/năm nhuận.*ngày/,'Năm nhuận có 366 ngày, năm thường có 365 ngày.'],[/giờ.*phút/,'1 giờ = 60 phút.'],[/ngày.*giờ/,'1 ngày = 24 giờ.'],[/tuần.*ngày/,'1 tuần lễ = 7 ngày.'],[/năm.*tháng/,'1 năm = 12 tháng.']];
  var s='Ghi nhớ bảng đơn vị đo thời gian.';
  for(var i=0;i<T.length;i++)if(T[i][0].test(q)){s=T[i][1];break;}
  return s+'\n'+_lg5ket(q,a);
};
LG['dvtt5']=function(it){
  var q=String(it.q),a=String(it.a),s='Mỗi đơn vị đo thể tích gấp 1000 lần đơn vị bé hơn tiếp liền.';
  if(/lít/.test(q))s='1 lít = 1 dm³ (1 đề-xi-mét khối).';
  else if(/1 dm³.*cm³/.test(q))s='Hình lập phương cạnh 1 dm xếp vừa 10 × 10 × 10 = 1000 hình lập phương cạnh 1 cm, nên 1 dm³ = 1000 cm³.';
  else if(/1 m³.*dm³/.test(q))s='Hình lập phương cạnh 1 m xếp vừa 10 × 10 × 10 = 1000 hình lập phương cạnh 1 dm, nên 1 m³ = 1000 dm³.';
  else if(/1 m³.*cm³/.test(q))s='1 m³ = 1000 dm³ = 1 000 000 cm³.';
  return s+'\n'+_lg5ket(q,a);
};
LG['honso5']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if((m=q.match(/hỗn số\s*(\d+)\s+(\d+)\/(\d+)/))){
    var n=+m[1],t=+m[2],d=+m[3];
    return 'Muốn viết hỗn số thành phân số: tử số bằng phần nguyên nhân với mẫu số rồi cộng với tử số ở phần phân số; mẫu số giữ nguyên.\n'+n+' '+t+'/'+d+' = ('+n+' × '+d+' + '+t+')/'+d+' = '+(n*d+t)+'/'+d+'.\nVậy '+n+' '+t+'/'+d+' = '+a+'.';
  }
  if((m=q.match(/phân số\s*(\d+)\/(\d+)/))){
    var T=+m[1],D=+m[2],th=Math.floor(T/D),du=T%D;
    return 'Lấy tử số chia cho mẫu số: thương là phần nguyên, số dư là tử số, mẫu số giữ nguyên.\n'+T+' : '+D+' = '+th+' (dư '+du+').\nVậy '+T+'/'+D+' = '+a+'.';
  }
  return 'Hỗn số gồm phần nguyên và phần phân số (phần phân số luôn bé hơn 1).\nVậy kết quả là '+a+'.';
};
LG['khainiemstp5']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+),(\d+)/);
  if(!m)return 'Mỗi số thập phân gồm hai phần: phần nguyên ở bên trái dấu phẩy, phần thập phân ở bên phải dấu phẩy.\nVậy đáp số là '+a+'.';
  var s=m[1]+','+m[2];
  if(/phần thập phân/.test(q)&&!/phần nguyên/.test(q))return 'Những chữ số ở bên phải dấu phẩy thuộc về phần thập phân.\nSố '+s+' có phần nguyên là '+m[1]+'; các chữ số '+m[2].split('').join(', ')+' thuộc về phần thập phân.\nVậy đáp số là '+a+'.';
  return 'Những chữ số ở bên trái dấu phẩy thuộc về phần nguyên, những chữ số ở bên phải dấu phẩy thuộc về phần thập phân.\nSố '+s+' có '+m[1]+' ở bên trái dấu phẩy.\nVậy số thập phân '+s+' có phần nguyên là '+a+'.';
};
LG['khaitrien5']=function(it){
  var q=String(it.q),a=String(it.a);
  if(/hộp chữ nhật/.test(q))return 'Hình hộp chữ nhật có 6 mặt đều là hình chữ nhật (2 mặt đáy và 4 mặt bên), nên hình khai triển gồm 6 hình chữ nhật.\nVậy hình hộp chữ nhật khi khai triển gồm '+a+' mặt.';
  if(/khai triển/.test(q))return 'Hình lập phương có 6 mặt là các hình vuông bằng nhau, nên hình khai triển của nó gồm 6 hình vuông bằng nhau.\nVậy hình khai triển của hình lập phương gồm '+a+' hình vuông bằng nhau.';
  return 'Hình lập phương có 6 mặt, các mặt đều là hình vuông bằng nhau.\nVậy hình lập phương có '+a+' mặt.';
};
LG['km2_5']=function(it){
  var q=String(it.q),a=String(it.a),s='1 km² = 100 ha = 1 000 000 m²; 1 ha = 10 000 m².';
  if(/ha.*mét vuông/.test(q))s='1 ha = 1 hm², mà 1 hm² = 100 dam² = 10 000 m².';
  else if(/km².*mét vuông/.test(q))s='1 km² = 100 hm² = 10 000 dam² = 1 000 000 m².';
  else if(/km².*ha/.test(q))s='1 ha = 1 hm², mà 1 km² = 100 hm².';
  return s+'\n'+_lg5ket(q,a).replace('héc-ta (ha)','ha');
};

LG['lamtronstp5']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(/số (\d+),?(\d*) đến hàng (đơn vị|phần mười)/);if(!m)return 'Đáp án: '+a+'.';
const ip=m[1],dp=(m[2]+'00').slice(0,2),so=m[2]?ip+','+m[2]:ip;
if(m[3]==='đơn vị'&&!m[2])return 'Số '+so+' là số tự nhiên, không có phần thập phân nên làm tròn đến hàng đơn vị vẫn được chính nó.\nVậy làm tròn số '+so+' đến hàng đơn vị được '+a+'.';
if(m[3]==='phần mười'&&m[2].length<2)return 'Số '+so+' chỉ có '+(m[2]?'một chữ số ở phần thập phân (chữ số hàng phần mười là '+m[2]+')':'phần nguyên')+', không có chữ số hàng phần trăm nên giữ nguyên số đó.\nVậy làm tròn số '+so+' đến hàng phần mười được '+a+'.';
if(m[3]==='đơn vị'){const c=+dp[0];return 'Muốn làm tròn đến hàng đơn vị, ta xét chữ số hàng phần mười.\nSố '+so+' có chữ số hàng phần mười là '+c+'.\n'+(c>=5?'Vì '+c+' ≥ 5 nên ta làm tròn lên: cộng thêm 1 vào phần nguyên và bỏ phần thập phân: '+ip+' + 1 = '+(+ip+1)+'.':'Vì '+c+' < 5 nên ta làm tròn xuống: giữ nguyên phần nguyên và bỏ phần thập phân.')+'\nVậy làm tròn số '+so+' đến hàng đơn vị được '+a+'.';}
const c=+dp[1];return 'Muốn làm tròn đến hàng phần mười, ta xét chữ số hàng phần trăm.\nSố '+so+' có chữ số hàng phần trăm là '+c+'.\n'+(c>=5?'Vì '+c+' ≥ 5 nên ta làm tròn lên: cộng thêm 1 vào chữ số hàng phần mười và bỏ chữ số hàng phần trăm: '+ip+','+dp[0]+' + 0,1 = '+(dp[0]==='9'?(+ip+1)+',0 = '+(+ip+1):ip+','+(+dp[0]+1))+'.':'Vì '+c+' < 5 nên ta làm tròn xuống: giữ nguyên chữ số hàng phần mười và bỏ chữ số hàng phần trăm.')+'\nVậy làm tròn số '+so+' đến hàng phần mười được '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['mtct5']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(/(\d[\d ]*?)\s*([×:])\s*(\d[\d ]*)/);if(!m)return 'Dùng máy tính cầm tay để tính.\nĐáp án: '+a+'.';
const x=P(m[1]),y=P(m[3]),op=m[2],k=op==='×'?x*y:x/y;const keys=s=>String(s).split('').join(' ');
return 'Bấm lần lượt các phím: '+keys(m[1].replace(/ /g,''))+' '+op+' '+keys(m[3].replace(/ /g,''))+' =\nMàn hình hiện kết quả: '+String(k).replace('.',',')+'.\n'+(op==='×'?'Kiểm tra: '+F(k)+' : '+F(y)+' = '+F(x)+'.':'Thử lại: '+F(k)+' × '+F(y)+' = '+F(x)+'.')+'\nVậy '+F(x)+' '+op+' '+F(y)+' = '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['n10']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(RX('# ([×:]) (10+)'));if(!m)return 'Đáp án: '+a+'.';
const p=m[3].length-1,ch=['','một','hai','ba'][p]||p,x=m[1],op=m[2];
const r=op==='×'?'Khi nhân một số thập phân với '+m[3]+', ta chỉ việc chuyển dấu phẩy của số đó sang bên phải '+ch+' chữ số'+(p>1?' (thiếu chữ số thì viết thêm chữ số 0 vào bên phải).':'.'):'Khi chia một số thập phân cho '+m[3]+', ta chỉ việc chuyển dấu phẩy của số đó sang bên trái '+ch+' chữ số (thiếu chữ số thì viết thêm chữ số 0 vào bên trái).';
return r+(x.indexOf(',')<0?'\nSố tự nhiên '+x+' có thể viết là '+x+',0.':'')+'\nVậy '+x+' '+op+' '+m[3]+' = '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['nc5a']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
let m;
if((m=q.match(RX('(?:cách nhau|dài) # km.*?vận tốc # km/giờ.*?vận tốc # km/giờ.*?Hỏi sau mấy giờ')))){const S=P(m[1]),v1=P(m[2]),v2=P(m[3]),t=S/(v1+v2);
return 'Bài giải\nSau mỗi giờ, cả hai xe đi được quãng đường là:\n'+F(v1)+' + '+F(v2)+' = '+F(v1+v2)+' (km)\nThời gian để hai xe gặp nhau là:\n'+F(S)+' : '+F(v1+v2)+' = '+F(t)+' (giờ)\n'+DS(F(t)+' giờ')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('dài # km.*?vận tốc # km/giờ.*?vận tốc # km/giờ.*?cách A')))){const S=P(m[1]),v1=P(m[2]),v2=P(m[3]),t=S/(v1+v2);
return 'Bài giải\nTổng vận tốc của hai xe là:\n'+F(v1)+' + '+F(v2)+' = '+F(v1+v2)+' (km/giờ)\nThời gian để hai xe gặp nhau là:\n'+F(S)+' : '+F(v1+v2)+' = '+F(t)+' (giờ)\nChỗ gặp nhau cách A một quãng đường bằng quãng đường ô tô đi được:\n'+F(v1)+' × '+F(t)+' = '+F(v1*t)+' (km)\n'+DS(F(v1*t)+' km')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('dài # km.*?vận tốc # km/giờ.*?Sau # giờ hai xe gặp nhau')))){const S=P(m[1]),v1=P(m[2]),t=P(m[3]),T=S/t;
return 'Bài giải\nTổng vận tốc của hai xe là:\n'+F(S)+' : '+F(t)+' = '+F(T)+' (km/giờ)\nVận tốc của xe máy là:\n'+F(T)+' − '+F(v1)+' = '+F(T-v1)+' (km/giờ)\n'+DS(F(T-v1)+' km/giờ')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('vận tốc # km/giờ.*?vận tốc # km/giờ.*?Sau # giờ')))){const v1=P(m[1]),v2=P(m[2]),t=P(m[3]);
return 'Bài giải\nTổng vận tốc của hai xe là:\n'+F(v1)+' + '+F(v2)+' = '+F(v1+v2)+' (km/giờ)\nQuãng đường AB dài là:\n'+F(v1+v2)+' × '+F(t)+' = '+F((v1+v2)*t)+' (km)\n'+DS(F((v1+v2)*t)+' km')+'\n(Viết gọn: '+a+')';}
return 'Hai xe đi ngược chiều: thời gian gặp nhau = quãng đường : tổng vận tốc.\nĐáp án: '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['nc5b']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
let m;const vat=(q.match(/^(?:Một )?(.+?) (?:giá|sau khi)/)||[])[1]||'món hàng';
if((m=q.match(RX('giá # đồng\\. Sau đó cửa hàng tăng giá thêm #%')))){const g=P(m[1]),p=P(m[2]),t=g*p/100;
return 'Bài giải\nSố tiền tăng thêm là:\n'+F(g)+' × '+F(p)+' : 100 = '+F(t)+' (đồng)\nGiá mới của '+vat+' là:\n'+F(g)+' + '+F(t)+' = '+F(g+t)+' (đồng)\n'+DS(F(g+t)+' đồng')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('giá # đồng, được giảm # đồng')))){const g=P(m[1]),d=P(m[2]),p=d/g*100;
return 'Bài giải\nTỉ số phần trăm của số tiền được giảm so với giá ban đầu là:\n'+F(d)+' : '+F(g)+' = '+F(d/g)+' = '+F(p)+'%\n'+DS(F(p)+'%')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('sau khi giảm giá #% còn # đồng')))){const p=P(m[1]),c=P(m[2]),r=100-p,g=c/r*100;
return 'Bài giải\nCoi giá ban đầu là 100%.\nSố tiền còn lại ứng với:\n100% − '+F(p)+'% = '+F(r)+'% (giá ban đầu)\nGiá ban đầu của '+vat+' là:\n'+F(c)+' : '+F(r)+' × 100 = '+F(g)+' (đồng)\n'+DS(F(g)+' đồng')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('giá # đồng, nay được giảm giá #%')))){const g=P(m[1]),p=P(m[2]),t=g*p/100;
return 'Bài giải\nSố tiền được giảm là:\n'+F(g)+' × '+F(p)+' : 100 = '+F(t)+' (đồng)\nGiá '+vat+' sau khi giảm là:\n'+F(g)+' − '+F(t)+' = '+F(g-t)+' (đồng)\n'+DS(F(g-t)+' đồng')+'\n(Viết gọn: '+a+')';}
return 'Muốn tìm a% của một số, ta lấy số đó nhân với a rồi chia cho 100.\nĐáp án: '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['nc5c']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(RX('(?:là|tất cả|có) #(?: ([^.,]+?))?[.,] .*?(\\d+)/(\\d+)'));if(!m)return 'Đáp án: '+a+'.';
const S=P(m[1]),dv0=(m[2]||'').trim(),x=+m[3],y=+m[4],t=x+y,u=S/t;
let n1='Số bé',n2='Số lớn',dv='',k;
if((k=q.match(/^(\S+) và (\S+) có tất cả/))){n1='Số vở của '+k[1];n2='Số vở của '+k[2];dv='quyển';}
else if(/học sinh nam/.test(q)){n1='Số học sinh nam';n2='Số học sinh nữ';dv='học sinh';}
else if(/kho thứ nhất/.test(q)){n1='Kho thứ nhất chứa';n2='Kho thứ hai chứa';dv='kg';}
const b1=x<=y?[n1,x]:[n1,x],b2=[n2,y];
const kq1=u*x,kq2=u*y;const D=v=>F(v)+(dv?' ('+dv+')':'');
const so=!dv;
return 'Bài giải\nTheo đề bài, nếu coi '+(so?'số bé':n1.replace(/^Số /,'số ').replace(/ chứa$/,'').replace(/^Kho/,'kho'))+' gồm '+x+' phần thì '+(so?'số lớn':n2.replace(/^Số /,'số ').replace(/ chứa$/,'').replace(/^Kho/,'kho'))+' gồm '+y+' phần như thế.\nTổng số phần bằng nhau là:\n'+x+' + '+y+' = '+t+' (phần)\nGiá trị của một phần là:\n'+F(S)+' : '+t+' = '+F(u)+(dv?' ('+dv+')':'')+'\n'+(so?'Số bé là':n1+(n1.endsWith('chứa')?' số gạo là':' là'))+':\n'+F(u)+' × '+x+' = '+D(kq1)+'\n'+(so?'Số lớn là':n2+(n2.endsWith('chứa')?' số gạo là':' là'))+':\n'+F(S)+' − '+F(kq1)+' = '+D(kq2)+'\n'+DS(a);
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['nc5d']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
let m;
if((m=q.match(RX('vận tốc # km/giờ.*?vận tốc # km/giờ.*?cách nhau # km')))){const v1=P(m[1]),v2=P(m[2]),S=P(m[3]),t=S/(v2-v1);
return 'Bài giải\nSau mỗi giờ, người thứ hai đến gần người thứ nhất thêm:\n'+F(v2)+' − '+F(v1)+' = '+F(v2-v1)+' (km)\nThời gian để người thứ hai đuổi kịp người thứ nhất là:\n'+F(S)+' : '+F(v2-v1)+' = '+F(t)+' (giờ)\n'+DS(F(t)+' giờ')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('vận tốc # km/giờ, đi trước người thứ hai # km.*?vận tốc # km/giờ')))){const v1=P(m[1]),S=P(m[2]),v2=P(m[3]),t=S/(v2-v1);
return 'Bài giải\nHiệu vận tốc của hai người là:\n'+F(v2)+' − '+F(v1)+' = '+F(v2-v1)+' (km/giờ)\nThời gian để người thứ hai đuổi kịp là:\n'+F(S)+' : '+F(v2-v1)+' = '+F(t)+' (giờ)\nQuãng đường người thứ hai đã đi được là:\n'+F(v2)+' × '+F(t)+' = '+F(v2*t)+' (km)\n'+DS(F(v2*t)+' km')+'\n(Viết gọn: '+a+')';}
if((m=q.match(RX('Lúc # giờ.*?vận tốc # km/giờ.*?cách A # km.*?vận tốc # km/giờ')))){const h=P(m[1]),v1=P(m[2]),S=P(m[3]),v2=P(m[4]),t=S/(v2-v1);
return 'Bài giải\nHiệu vận tốc của hai xe là:\n'+F(v2)+' − '+F(v1)+' = '+F(v2-v1)+' (km/giờ)\nThời gian để xe đi từ B đuổi kịp xe đi từ A là:\n'+F(S)+' : '+F(v2-v1)+' = '+F(t)+' (giờ)\nHai xe gặp nhau lúc:\n'+F(h)+' giờ + '+F(t)+' giờ = '+F(h+t)+' giờ\n'+DS(F(h+t)+' giờ')+'\n(Viết gọn: '+a+')';}
return 'Hai chuyển động cùng chiều đuổi nhau: thời gian đuổi kịp = khoảng cách : hiệu vận tốc.\nĐáp án: '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['nc5e']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.replace(/[−–-]/g,'–').match(/(x|\d+(?:,\d+)?) ([+–×:]) (x|\d+(?:,\d+)?) = (\d+(?:,\d+)?)/);if(!m)return 'Đáp án: '+a+'.';
const L=m[1],op=m[2],R2=m[3],b=m[4],c=P(b);let r,lines;
if(L==='x'){const n=P(R2);
 if(op==='+'){r=c-n;lines='x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nx = '+b+' − '+R2;}
 else if(op==='–'){r=c+n;lines='x là số bị trừ. Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\nx = '+b+' + '+R2;}
 else if(op==='×'){r=c/n;lines='x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\nx = '+b+' : '+R2;}
 else {r=c*n;lines='x là số bị chia. Muốn tìm số bị chia, ta lấy thương nhân với số chia.\nx = '+b+' × '+R2;}
}else{const n=P(L);
 if(op==='+'){r=c-n;lines='x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nx = '+b+' − '+L;}
 else if(op==='–'){r=n-c;lines='x là số trừ. Muốn tìm số trừ, ta lấy số bị trừ trừ đi hiệu.\nx = '+L+' − '+b;}
 else if(op==='×'){r=c/n;lines='x là thừa số chưa biết. Muốn tìm thừa số chưa biết, ta lấy tích chia cho thừa số đã biết.\nx = '+b+' : '+L;}
 else {r=n/c;lines='x là số chia. Muốn tìm số chia, ta lấy số bị chia chia cho thương.\nx = '+L+' : '+b;}
}
return m[0].replace('–','−')+'\n'+lines+'\nx = '+F(r)+'\nVậy '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['nctg5']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(/\((\d+) giờ (\d+) phút\) × (\d+)/);if(!m)return 'Nhân số giờ, số phút với số đó rồi đổi phút ra giờ (nếu đủ 60 phút).\nĐáp án: '+a+'.';
const g=+m[1],p=+m[2],k=+m[3],G=g*k,Pp=p*k;let s='Ta nhân lần lượt số giờ và số phút với '+k+':\n('+g+' giờ '+p+' phút) × '+k+' = '+g+' giờ × '+k+' + '+p+' phút × '+k+' = '+G+' giờ '+Pp+' phút';
if(Pp>=60){const h=Math.floor(Pp/60),r=Pp%60;s+='\nVì '+Pp+' phút = '+h+' giờ'+(r?' '+r+' phút':'')+' nên '+G+' giờ '+Pp+' phút = '+(G+h)+' giờ'+(r?' '+r+' phút':'')+'.';}else s+='.';
return s+'\nVậy ('+g+' giờ '+p+' phút) × '+k+' = '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['ntp']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(/(\d[\d ]*?)(?:,(\d+))? × (\d+)/);if(m&&!m[2]){const x=+m[1].replace(/ /g,''),k=+m[3],D=String(x).split('').map(Number).reverse();let nho=0,st=[];D.forEach((d,i)=>{const t=d*k+nho;if(i===D.length-1)st.push(k+' nhân '+d+' bằng '+(d*k)+(nho?', thêm '+nho+' bằng '+t:'')+', viết '+t+'.');else st.push(k+' nhân '+d+' bằng '+(d*k)+(nho?', thêm '+nho+' bằng '+t:'')+', viết '+(t%10)+(Math.floor(t/10)?', nhớ '+Math.floor(t/10):'')+'.');nho=Math.floor(t/10);});return 'Đặt tính: viết '+F(x)+' ở trên, '+k+' ở dưới, thẳng cột bên phải rồi nhân từ phải sang trái:\n'+st.map(z=>'• '+z).join('\n')+'\nVậy '+F(x)+' × '+k+' = '+a+'.';}if(!m)return 'Nhân như nhân số tự nhiên rồi đếm chữ số ở phần thập phân để đặt dấu phẩy.\nĐáp án: '+a+'.';
const ip=m[1].replace(/ /g,''),dp=m[2],k=+m[3],D=(ip+dp).split('').map(Number).reverse();let nho=0,st=[];const ten=['','',''];
D.forEach((d,i)=>{const t=d*k+nho;const last=i===D.length-1;const ph=k+' nhân '+d+' bằng '+(d*k)+(nho?', thêm '+nho+' bằng '+t:'');if(last){st.push(ph+', viết '+t+'.');}else{st.push(ph+', viết '+(t%10)+(Math.floor(t/10)?', nhớ '+Math.floor(t/10):'')+'.');}nho=Math.floor(t/10);});
const prod=String(Number(ip+dp)*k);const pz=prod.padStart(dp.length+1,'0'),raw=pz.slice(0,pz.length-dp.length)+','+pz.slice(-dp.length),cut=raw.replace(/0+$/,'').replace(/,$/,'');
return 'Đặt tính: viết '+ip+','+dp+' ở trên, '+k+' ở dưới, thẳng cột bên phải; nhân như nhân số tự nhiên:\n'+st.map(x=>'• '+x).join('\n')+'\nĐược '+prod+'. Phần thập phân của số '+ip+','+dp+' có '+dp.length+' chữ số, ta dùng dấu phẩy tách ở tích ra '+dp.length+' chữ số kể từ phải sang trái, được '+raw+(cut!==raw?' = '+cut+' (bỏ chữ số 0 ở tận cùng bên phải phần thập phân)':'')+'.\nVậy '+F(P(ip))+','+dp+' × '+k+' = '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['ps5']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(/(\d+)\/(\d+) ([+–−-]) (\d+)\/(\d+)/);if(!m)return 'Quy đồng mẫu số rồi cộng (trừ) các tử số, giữ nguyên mẫu số chung.\nĐáp án: '+a+'.';
const g=(x,y)=>y?g(y,x%y):x;const t1=+m[1],m1=+m[2],t2=+m[4],m2=+m[5],cong=m[3]==='+',sg=cong?'+':'−';const M=m1*m2/g(m1,m2);const k1=M/m1,k2=M/m2,u1=t1*k1,u2=t2*k2,T=cong?u1+u2:u1-u2;
const fr=(t,m,k)=>t+'/'+m+' = ('+t+' × '+k+')/('+m+' × '+k+') = '+(t*k)+'/'+(m*k);let s;
if(m1===m2)s='Hai phân số có cùng mẫu số '+M+', ta '+(cong?'cộng':'trừ')+' hai tử số với nhau và giữ nguyên mẫu số.\n';
else{s='Quy đồng mẫu số hai phân số, chọn mẫu số chung là '+M+':\n';
s+=(k1===1?t1+'/'+m1+' giữ nguyên':fr(t1,m1,k1))+'; '+(k2===1?t2+'/'+m2+' giữ nguyên':fr(t2,m2,k2))+'.\n';}
s+=t1+'/'+m1+' '+sg+' '+t2+'/'+m2+(m1===m2?'':' = '+u1+'/'+M+' '+sg+' '+u2+'/'+M)+' = '+T+'/'+M;
const d=g(Math.abs(T),M)||1;if(T===0)s+=' = 0';else if(M/d===1)s+=' = '+(T/d);else if(d>1)s+=' = '+(T/d)+'/'+(M/d)+' (rút gọn: chia cả tử số và mẫu số cho '+d+')';
return s+'.\nVậy '+t1+'/'+m1+' '+sg+' '+t2+'/'+m2+' = '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['pstp5']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(/(\d+)\/(10+)/);if(!m)return 'Mẫu số có bao nhiêu chữ số 0 thì phần thập phân có bấy nhiêu chữ số.\nĐáp án: '+a+'.';
const t=m[1],z=m[2].length-1,ch=['','một','hai','ba'][z]||z;const pad=t.padStart(z+1,'0');const raw=pad.slice(0,pad.length-z)+','+pad.slice(-z);
return 'Mẫu số '+m[2]+' có '+ch+' chữ số 0 nên số thập phân có '+ch+' chữ số ở phần thập phân'+(pad!==t?' (thiếu chữ số thì viết thêm chữ số 0 vào bên trái tử số)':'')+'.\nTừ tử số '+t+', đếm từ phải sang trái '+z+' chữ số rồi đặt dấu phẩy: '+t+'/'+m[2]+' = '+raw+(raw!==a&&raw.replace(/0+$/,'').replace(/,$/,'')===a?' = '+a+' (bỏ chữ số 0 ở tận cùng bên phải phần thập phân)':'')+'.\nVậy '+t+'/'+m[2]+' = '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['pt']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
let m;
if((m=q.match(RX('Tìm #% của #')))){const p=P(m[1]),b=P(m[2]);return 'Muốn tìm '+F(p)+'% của '+F(b)+', ta lấy '+F(b)+' nhân với '+F(p)+' rồi chia cho 100.\n'+F(b)+' × '+F(p)+' : 100 = '+F(b*p/100)+'\nVậy '+F(p)+'% của '+F(b)+' là '+a+'.';}
if((m=q.match(RX('có # học sinh, trong đó có # bạn')))){const s=P(m[1]),d=P(m[2]),r=d/s;return 'Bài giải\nTỉ số phần trăm số bạn được khen thưởng so với số học sinh cả lớp là:\n'+F(d)+' : '+F(s)+' = '+F(r)+' = '+F(r*100)+'%\n'+DS(a);}
return 'Đáp án: '+a+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['sstp5']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(/: (\d[\d ]*(?:,\d+)?) \.\.\. (\d[\d ]*(?:,\d+)?)/);if(!m)return 'So sánh phần nguyên trước, nếu bằng nhau thì so sánh lần lượt các hàng của phần thập phân.\nĐáp án: '+a+'.';
const x=m[1],y=m[2],sp=s=>{const [i,d]=s.replace(/ /g,'').split(',');return [Number(i),(d||'')];};const [i1,d1]=sp(x),[i2,d2]=sp(y);const s=a.trim();
let r;if(i1!==i2)r='So sánh phần nguyên: '+i1+' '+(i1>i2?'>':'<')+' '+i2+' nên '+x+' '+s+' '+y+'.';
else{const L=Math.max(d1.length,d2.length),e1=d1.padEnd(L,'0'),e2=d2.padEnd(L,'0');const hang=['phần mười','phần trăm','phần nghìn'];let j=0;while(j<L&&e1[j]===e2[j])j++;
r='Hai số có phần nguyên bằng nhau ('+i1+'), ta so sánh phần thập phân.\n'+(j<L?'Ở hàng '+(hang[j]||'tiếp theo')+': '+e1[j]+' '+(e1[j]>e2[j]?'>':'<')+' '+e2[j]+' nên '+x+' '+s+' '+y+'.':'Phần thập phân cũng bằng nhau nên '+x+' = '+y+'.');}
return r+'\nVậy điền dấu '+s+': '+x+' '+s+' '+y+'.';
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};
LG['sxqhhcn5']=function(it){try{const q=String(it&&it.q||''),a=String(it&&it.a||'');
const P=s=>{s=String(s).replace(/\s/g,'').replace(',','.');const v=parseFloat(s);return isNaN(v)?0:v;};
const F=n=>{n=Math.round(n*1e6)/1e6;const neg=n<0;n=Math.abs(n);let [i,d]=String(n).split('.');i=i.replace(/\B(?=(\d{3})+(?!\d))/g,' ');return (neg?'−':'')+i+(d?','+d:'');};
const NUM='(\\d{1,3}(?: \\d{3})+(?:,\\d+)?|\\d+(?:,\\d+)?)';
const RX=s=>new RegExp(s.split('#').join(NUM));
const ns=(q.match(/\d{1,3}(?: \d{3})+(?:,\d+)?|\d+(?:,\d+)?/g)||[]).map(P);
const DS=x=>'Đáp số: '+x+'.';
const m=q.match(RX('dài # cm, rộng # cm, cao # cm'));if(!m)return 'Sxq = chu vi đáy × chiều cao; Stp = Sxq + 2 × diện tích đáy.\nĐáp án: '+a+'.';
const d=P(m[1]),r=P(m[2]),h=P(m[3]),cv=(d+r)*2,xq=cv*h,day=d*r;
let s='Bài giải\nChu vi mặt đáy của hình hộp chữ nhật là:\n('+F(d)+' + '+F(r)+') × 2 = '+F(cv)+' (cm)\nDiện tích xung quanh của hình hộp chữ nhật là:\n'+F(cv)+' × '+F(h)+' = '+F(xq)+' (cm²)';
if(/toàn phần/.test(q))s+='\nDiện tích một mặt đáy là:\n'+F(d)+' × '+F(r)+' = '+F(day)+' (cm²)\nDiện tích toàn phần của hình hộp chữ nhật là:\n'+F(xq)+' + '+F(day)+' × 2 = '+F(xq+2*day)+' (cm²)';
return s+'\n'+DS(a);
}catch(e){return 'Đáp án: '+String(it&&it.a)+'.';}};

LG['sxqlp5']=function(it){
 const f=n=>{const s=String(Math.abs(n));return (n<0?'−':'')+(n>=1000?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s)};
 const q=String(it.q||''),m=q.match(/cạnh\s*(\d+)/);const a=m?+m[1]:NaN;const tp=/toàn phần/.test(q);
 if(!isFinite(a))return 'Diện tích xung quanh = diện tích một mặt × 4; diện tích toàn phần = diện tích một mặt × 6.\nĐáp số: '+it.a;
 const mat=a*a;
 return 'Bài giải\nDiện tích một mặt của hình lập phương là:\n'+a+' × '+a+' = '+f(mat)+' (cm²)\n'+
  (tp?'Diện tích toàn phần của hình lập phương là:\n'+f(mat)+' × 6 = '+f(mat*6)+' (cm²)':'Diện tích xung quanh của hình lập phương là:\n'+f(mat)+' × 4 = '+f(mat*4)+' (cm²)')+
  '\nĐáp số: '+it.a;
};
LG['tb5']=function(it){
 const q=String(it.q||''),A=String(it.a||'');
 const ans=A.match(/^(.+?):\s*(\d+)\s*quyển;\s*(.+?):\s*(\d+)\s*quyển/);
 const m=q.match(/gấp\s*(\d+)\s*lần/);const k=m?+m[1]:NaN;
 if(!ans||!isFinite(k))return 'Vẽ sơ đồ, tìm giá trị một phần rồi tính số của mỗi bạn.\nĐáp số: '+A;
 const x=ans[1],y=ans[3],a=+ans[2],b=+ans[4];
 let mt=q.match(/tất cả\s*(\d+)/),mh=q.match(/là\s*(\d+)\s*quyển/);
 if(mt){const S=+mt[1],p=k+1,u=S/p;
  return 'Bài giải\nCoi số truyện của '+y+' là 1 phần thì số truyện của '+x+' là '+k+' phần như thế.\nTổng số phần bằng nhau là:\n'+k+' + 1 = '+p+' (phần)\nSố truyện của '+y+' là:\n'+S+' : '+p+' = '+u+' (quyển)\nSố truyện của '+x+' là:\n'+u+' × '+k+' = '+(u*k)+' (quyển)\nĐáp số: '+A;}
 if(mh){const H=+mh[1],p=k-1,u=H/p;
  if(p===1)return 'Bài giải\nCoi số truyện của '+y+' là 1 phần thì số truyện của '+x+' là 2 phần như thế.\nHiệu số phần bằng nhau là:\n2 − 1 = 1 (phần)\nVậy số truyện của '+y+' bằng hiệu và bằng '+H+' quyển.\nSố truyện của '+x+' là:\n'+H+' × 2 = '+(H*2)+' (quyển)\nĐáp số: '+A;
  return 'Bài giải\nCoi số truyện của '+y+' là 1 phần thì số truyện của '+x+' là '+k+' phần như thế.\nHiệu số phần bằng nhau là:\n'+k+' − 1 = '+p+' (phần)\nSố truyện của '+y+' là:\n'+H+' : '+p+' = '+u+' (quyển)\nSố truyện của '+x+' là:\n'+u+' × '+k+' = '+(u*k)+' (quyển)\nĐáp số: '+A;}
 return 'Vẽ sơ đồ, tìm giá trị một phần rồi tính số của mỗi bạn.\nĐáp số: '+A;
};
LG['thuthap5']=function(it){
 const q=String(it.q||''),A=String(it.a);const m=q.match(/:\s*([\d,\s]+?)\.\s/);
 const v=m?m[1].split(',').map(s=>+s.trim()).filter(n=>isFinite(n)):[];
 if(/Tổng/.test(q)&&v.length){return 'Cộng điểm của cả bốn tổ:\n'+v.join(' + ')+' = '+v.reduce((p,c)=>p+c,0)+'\nVậy tổng điểm của cả bốn tổ là '+A+'.';}
 if(v.length){const s=v.slice().sort((a,b)=>a-b);const lon=/lớn nhất/.test(q);
  return 'Sắp xếp các số liệu theo thứ tự từ bé đến lớn: '+s.join(', ')+'.\nSố đứng '+(lon?'cuối':'đầu')+' là số '+(lon?'lớn':'bé')+' nhất.\nVậy số liệu '+(lon?'lớn':'bé')+' nhất là '+A+'.';}
 return 'So sánh các số liệu trong dãy.\nĐáp số: '+A;
};
LG['tilebando5']=function(it){
 const f=n=>{const s=String(Math.abs(n));return (n>=1000?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s)};
 const q=String(it.q||'');const m=q.match(/1\s*:\s*([\d ]+?),/),d=q.match(/dài\s*(\d+)\s*cm/);
 if(!m||!d)return 'Khoảng cách thật = độ dài trên bản đồ × số lần của tỉ lệ.\nĐáp số: '+it.a;
 const tl=+m[1].replace(/\s/g,''),dd=+d[1];
 return 'Bài giải\nTỉ lệ 1 : '+f(tl)+' nghĩa là 1 cm trên bản đồ ứng với '+f(tl)+' cm ngoài thực tế.\nKhoảng cách thật là:\n'+dd+' × '+f(tl)+' = '+f(dd*tl)+' (cm)\nĐáp số: '+it.a;
};
LG['timgtpt5']=function(it){
 const f=n=>{const s=String(Math.abs(n));return (n>=1000?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s)};
 const q=String(it.q||'');const m=q.match(/(\d+)%\s*của\s*([\d ]+\d)/);
 if(!m)return 'Muốn tìm p% của một số, ta lấy số đó chia cho 100 rồi nhân với p.\nĐáp số: '+it.a;
 const p=+m[1],S=+m[2].replace(/\s/g,'');
 return 'Muốn tìm '+p+'% của '+f(S)+', ta lấy '+f(S)+' chia cho 100 rồi nhân với '+p+':\n'+f(S)+' : 100 × '+p+' = '+f(S/100)+' × '+p+' = '+f(S*p/100)+'\nVậy '+p+'% của '+f(S)+' là '+it.a+'.';
};
LG['timtspt5']=function(it){
 const q=String(it.q||'');const m=q.match(/của\s*(\d+)\s*và\s*(\d+)/);const A=String(it.a);
 if(!m)return 'Tìm thương của hai số, nhân thương với 100 rồi viết thêm kí hiệu % vào bên phải.\nĐáp số: '+A;
 const a=+m[1],b=+m[2];const th=String(Math.round(a/b*10000)/10000).replace('.',',');
 return 'Muốn tìm tỉ số phần trăm của '+a+' và '+b+', ta tìm thương của '+a+' và '+b+', rồi nhân thương với 100 và viết thêm kí hiệu % vào bên phải.\n'+a+' : '+b+' = '+th+'\n'+th+' × 100 = '+A.replace('%','')+'\nVậy tỉ số phần trăm của '+a+' và '+b+' là '+A+'.';
};
LG['tthhcn5']=function(it){
 const f=n=>{const s=String(Math.abs(n));return (n>=1000?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s)};
 const q=String(it.q||'');const d=q.match(/dài\s*(\d+)/),r=q.match(/rộng\s*(\d+)/),c=q.match(/cao\s*(\d+)/);
 if(!d||!r||!c)return 'Thể tích hình hộp chữ nhật = chiều dài × chiều rộng × chiều cao (cùng đơn vị đo).\nĐáp số: '+it.a;
 const a=+d[1],b=+r[1],h=+c[1];
 return 'Bài giải\nMuốn tính thể tích hình hộp chữ nhật, ta lấy chiều dài nhân với chiều rộng rồi nhân với chiều cao (cùng đơn vị đo).\nThể tích hình hộp chữ nhật là:\n'+a+' × '+b+' × '+h+' = '+f(a*b*h)+' (cm³)\nĐáp số: '+it.a;
};
LG['ttlp5']=function(it){
 const f=n=>{const s=String(Math.abs(n));return (n>=1000?s.replace(/\B(?=(\d{3})+(?!\d))/g,' '):s)};
 const q=String(it.q||'');const m=q.match(/cạnh\s*(\d+)/);
 if(!m)return 'Thể tích hình lập phương = cạnh × cạnh × cạnh.\nĐáp số: '+it.a;
 const a=+m[1];
 return 'Bài giải\nMuốn tính thể tích hình lập phương, ta lấy cạnh nhân với cạnh rồi nhân với cạnh.\nThể tích hình lập phương là:\n'+a+' × '+a+' × '+a+' = '+f(a*a*a)+' (cm³)\nĐáp số: '+it.a;
};
LG['vietstp5']=function(it){
 const q=String(it.q||''),A=String(it.a);
 let m=q.match(/(\d+)\s*m\s*(\d+)\s*cm/);
 if(m){const cm=+m[2],ps=cm+'/100';
  return 'Ta có 1 m = 100 cm nên '+cm+' cm = '+ps+' m.\n'+m[1]+' m '+cm+' cm = '+m[1]+' m + '+ps+' m = '+A+'.\nVậy '+m[1]+' m '+cm+' cm = '+A+'.';}
 m=q.match(/(\d+)\s*kg\s*(\d+)\s*g/);
 if(m){const g=+m[2],ps=g+'/1000';
  return 'Ta có 1 kg = 1 000 g nên '+g+' g = '+ps+' kg.\n'+m[1]+' kg '+g+' g = '+m[1]+' kg + '+ps+' kg = '+A+'.\nVậy '+m[1]+' kg '+g+' g = '+A+'.';}
 return 'Đổi đơn vị bé ra phân số thập phân của đơn vị lớn rồi viết thành số thập phân.\nĐáp số: '+A;
};
LG['vt']=function(it){
 const q=String(it.q||''),A=String(it.a);const xe=/xe đạp/.test(q)?'người đi xe đạp':(/ô tô/.test(q)?'ô tô':'');const cua=xe?' của '+xe:'';const v=q.match(/vận tốc\s*(\d+)\s*km\/giờ/),t=q.match(/(?:trong|hết)\s*(\d+)\s*giờ/),s=q.match(/quãng đường\s*(\d+)\s*km/);
 if(/Tính quãng đường/.test(q)&&v&&t)return 'Bài giải\nQuãng đường '+xe+(xe?' ':'')+'đi được là:\n'+v[1]+' × '+t[1]+' = '+(v[1]*t[1])+' (km)\nĐáp số: '+A;
 if(/Tính vận tốc/.test(q)&&s&&t)return 'Bài giải\nVận tốc'+cua+' là:\n'+s[1]+' : '+t[1]+' = '+(s[1]/t[1])+' (km/giờ)\nĐáp số: '+A;
 if(/Tính thời gian/.test(q)&&s&&v)return 'Bài giải\nThời gian '+(xe?xe+' ':'')+'đi hết quãng đường là:\n'+s[1]+' : '+v[1]+' = '+(s[1]/v[1])+' (giờ)\nĐáp số: '+A;
 return 'Dùng các công thức: s = v × t; v = s : t; t = s : v.\nĐáp số: '+A;
};
LG['xacsuat5']=function(it){
 const q=String(it.q||''),A=String(it.a);const n=q.match(/xúc xắc\s*(\d+)\s*lần/),k=q.match(/có\s*(\d+)\s*lần/);
 if(!n||!k)return 'Tỉ số = số lần xuất hiện sự kiện : tổng số lần thực hiện.\nĐáp số: '+A;
 return 'Số lần xuất hiện mặt 6 chấm là '+k[1]+', tổng số lần gieo là '+n[1]+'.\nTỉ số số lần xuất hiện mặt 6 chấm so với tổng số lần gieo là '+k[1]+' : '+n[1]+' hay '+A+'.\nĐáp số: '+A;
};

LG['t6_bangtk']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/ứng với\s*(\d+)[^.]*?\.\s*Một hàng có\s*(\d+)/);if(!m)return 'Số học sinh = số biểu tượng × số học sinh ứng với mỗi biểu tượng.\nVậy hàng đó biểu diễn '+a+' học sinh.';var k=+m[1],n=+m[2];return 'Mỗi biểu tượng ★ ứng với '+k+' học sinh, hàng có '+n+' biểu tượng.\nSố học sinh hàng đó biểu diễn là: '+n+' × '+k+' = '+(n*k)+' (học sinh).\nVậy hàng đó biểu diễn '+a+' học sinh.';};
LG['t6_bcnn']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/BCNN\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)/);var sup={'0':'⁰','1':'¹','2':'²','3':'³','4':'⁴','5':'⁵','6':'⁶','7':'⁷','8':'⁸','9':'⁹'};function pw(e){return e>1?String(e).split('').map(function(c){return sup[c]}).join(''):''}function fac(n){var r={},p=2;while(n>1&&p*p<=n){while(n%p===0){r[p]=(r[p]||0)+1;n/=p}p++}if(n>1)r[n]=(r[n]||0)+1;return r}function show(o){var ks=Object.keys(o).map(Number).sort(function(x,y){return x-y});return ks.length?ks.map(function(p){return p+pw(o[p])}).join('.'):'1'}if(!m)return 'Phân tích các số ra thừa số nguyên tố, chọn các thừa số chung và riêng, mỗi thừa số lấy số mũ lớn nhất rồi lập tích.\nVậy BCNN = '+a+'.';var x=+m[1],y=+m[2];if(x===y)return 'Hai số bằng nhau nên BCNN('+x+', '+y+') = '+x+'.\nVậy BCNN('+x+', '+y+') = '+a+'.';var big=Math.max(x,y),sm=Math.min(x,y);if(sm>0&&big%sm===0)return 'Vì '+big+' ⋮ '+sm+' nên BCNN('+x+', '+y+') = '+big+'.\nVậy BCNN('+x+', '+y+') = '+a+'.';var fx=fac(x),fy=fac(y),u={};Object.keys(fx).forEach(function(p){u[p]=fx[p]});Object.keys(fy).forEach(function(p){u[p]=Math.max(u[p]||0,fy[p])});var L=[];if(x===1||y===1)return 'BCNN của một số với 1 bằng chính số đó.\nVậy BCNN('+x+', '+y+') = '+a+'.';var ks=Object.keys(u).map(Number).sort(function(p,r){return p-r});var common=Object.keys(fx).some(function(p){return fy[p]});return 'Phân tích ra thừa số nguyên tố: '+x+' = '+show(fx)+'; '+y+' = '+show(fy)+'.\n'+(common?'Chọn các thừa số nguyên tố chung và riêng, mỗi thừa số lấy với số mũ lớn nhất: ':'Hai số không có thừa số nguyên tố chung (hai số nguyên tố cùng nhau) nên BCNN là tích của chúng: ')+'BCNN('+x+', '+y+') = '+(common?show(u):x+' . '+y)+' = '+a+'.\nVậy BCNN('+x+', '+y+') = '+a+'.';};
LG['t6_bdcot']=function(it){var q=String(it.q),a=String(it.a);var re=/(Toán|Văn|Anh|Tin)\s+(\d+)/g,m,L=[],V=[];while((m=re.exec(q))){L.push(m[1]);V.push(+m[2])}if(V.length<2)return 'Đọc số liệu trên từng cột rồi tính theo yêu cầu.\nĐáp số: '+a+'.';if(/Tổng/i.test(q)){var s=V.reduce(function(p,c){return p+c},0);return 'Đọc số liệu trên các cột: '+L.map(function(l,i){return l+' '+V[i]}).join(', ')+'.\nTổng số lượt đạt điểm giỏi là: '+V.join(' + ')+' = '+s+' (lượt).\nĐáp số: '+a+' lượt.';}var mx=Math.max.apply(null,V),mn=Math.min.apply(null,V);return 'Môn cao nhất là '+L[V.indexOf(mx)]+' ('+mx+' học sinh), môn thấp nhất là '+L[V.indexOf(mn)]+' ('+mn+' học sinh).\nMôn cao nhất hơn môn thấp nhất: '+mx+' − '+mn+' = '+(mx-mn)+' (học sinh).\nĐáp số: '+a+' học sinh.';};
LG['t6_bdcotkep']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/6A trồng\s*(\d+)[^,]*,\s*lớp 6B trồng\s*(\d+)/);if(!m)return 'Đọc số liệu của hai cột trên biểu đồ rồi cộng lại.\nĐáp số: '+a+'.';var x=+m[1],y=+m[2];return 'Đọc biểu đồ: lớp 6A trồng '+x+' cây, lớp 6B trồng '+y+' cây.\nHai lớp trồng được tất cả: '+x+' + '+y+' = '+(x+y)+' (cây).\nĐáp số: '+a+' cây.';};
LG['t6_boinguyen']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/bội của\s*(-?\d+)/);var b=m?+m[1]:0,n=parseInt(a,10);if(b&&!isNaN(n)&&n%b===0)return 'Số a là bội của b nếu a chia hết cho b, tức là a = b . k (k là số nguyên).\nTa có '+n+' = '+b+' . '+(n/b)+' nên '+n+' ⋮ '+b+'. Các số còn lại không chia hết cho '+b+'.\nVậy số là bội của '+b+' là: '+a+'.';return 'Số a là bội của b nếu a chia hết cho b. Kiểm tra từng số, chọn số chia hết.\nVậy đáp án là '+a+'.';};
LG['t6_chiahet']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/chia hết cho\s*(\d+)/);var d=m?+m[1]:0,ds=a.replace(/\D/g,'').split('').map(Number),s=ds.reduce(function(p,c){return p+c},0),last=ds[ds.length-1];var r;if(d===2)r='Dấu hiệu chia hết cho 2: các số có chữ số tận cùng là 0, 2, 4, 6, 8.\nSố '+a+' có chữ số tận cùng là '+last+' (chữ số chẵn) nên chia hết cho 2; các số còn lại có tận cùng là chữ số lẻ.';else if(d===5)r='Dấu hiệu chia hết cho 5: các số có chữ số tận cùng là 0 hoặc 5.\nSố '+a+' có chữ số tận cùng là '+last+' nên chia hết cho 5; các số còn lại không tận cùng bằng 0 hoặc 5.';else if(d===3||d===9)r='Dấu hiệu chia hết cho '+d+': các số có tổng các chữ số chia hết cho '+d+'.\nSố '+a+' có tổng các chữ số '+ds.join(' + ')+' = '+s+', mà '+s+' ⋮ '+d+' nên '+a+' ⋮ '+d+'; các số còn lại có tổng các chữ số không chia hết cho '+d+'.';else r='Dùng dấu hiệu chia hết để kiểm tra từng số.';return r+'\nVậy số chia hết cho '+(d||'')+' là '+a+'.';};
LG['t6_chiahettc']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/Cho\s*(\d+)\s*⋮\s*(\d+)\s*và\s*(\d+)\s*⋮\s*(\d+)/);if(m){var x=+m[1],b=+m[2],y=+m[3];return 'Tính chất chia hết của một tổng: nếu tất cả các số hạng của tổng đều chia hết cho cùng một số thì tổng chia hết cho số đó.\nVì '+x+' ⋮ '+b+' và '+y+' ⋮ '+b+' nên ('+x+' + '+y+') ⋮ '+b+' (thật vậy, '+x+' + '+y+' = '+(x+y)+' = '+b+' . '+((x+y)/b)+').\nVậy câu trả lời là: '+a+'.';}var k=q.match(/Số\s*(\d+)\s*có chia hết cho\s*(\d+)/);if(k){var n=+k[1],d=+k[2],qq=Math.floor(n/d),r=n%d;if(r===0)return 'Thực hiện phép chia: '+n+' : '+d+' = '+qq+' (phép chia hết, số dư bằng 0).\nDo đó '+n+' ⋮ '+d+'.\nVậy câu trả lời là: '+a+'.';return 'Thực hiện phép chia: '+n+' : '+d+' = '+qq+' (dư '+r+'), tức là '+n+' = '+d+' . '+qq+' + '+r+'.\nSố dư khác 0 nên '+n+' không chia hết cho '+d+'.\nVậy câu trả lời là: '+a+'.';}return 'Số a chia hết cho b nếu phép chia a cho b có số dư bằng 0.\nVậy câu trả lời là: '+a+'.';};
LG['t6_chuvi']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/cạnh\s*(\d+(?:,\d+)?)\s*(\w+)/);var c=m?parseFloat(m[1].replace(',','.')):NaN,u=m?m[2]:'cm';var fmt=function(v){return String(Math.round(v*1000)/1000).replace('.',',')};var cs=m?m[1]:'a';if(/diện tích/i.test(q)&&/hình vuông/.test(q))return 'Diện tích hình vuông cạnh a là: S = a . a.\nDiện tích hình vuông là: '+cs+' . '+cs+' = '+fmt(c*c)+' ('+u+'²).\nĐáp số: '+a+'.';var k=0,ten='',ct='';if(/lục giác/.test(q)){k=6;ten='hình lục giác đều';ct='C = 6 . a'}else if(/hình vuông/.test(q)){k=4;ten='hình vuông';ct='C = 4 . a'}else if(/tam giác/.test(q)){k=3;ten='tam giác đều';ct='C = 3 . a'}if(k&&/chu vi/i.test(q)&&!isNaN(c))return 'Chu vi '+ten+' cạnh a là: '+ct+'.\nChu vi '+ten+' là: '+k+' . '+cs+' = '+fmt(k*c)+' ('+u+').\nĐáp số: '+a+'.';return 'Áp dụng công thức tính chu vi, diện tích của hình đã cho.\nĐáp số: '+a+'.';};
LG['t6_congnguyen']=function(it){var q=String(it.q).replace(/[−–]/g,'–'),a=String(it.a);var m=q.match(/^\s*\(?\s*(-?\d+)\s*\)?\s*([+–])\s*\(?\s*(-?\d+)\s*\)?/);var S=function(v){return v<0?'(−'+(-v)+')':String(v)};var N=function(v){return v<0?'−'+(-v):String(v)};if(!m)return 'Áp dụng quy tắc cộng, trừ số nguyên.\nKết quả: '+a+'.';var x=+m[1],op=m[2],y=+m[3],L=[],ex=S(x)+' '+(op==='+'?'+':'−')+' '+S(y);if(op==='–'&&x>=0&&y>=0&&x>=y)return 'Hai số tự nhiên, số bị trừ lớn hơn hoặc bằng số trừ nên trừ như số tự nhiên: '+x+' − '+y+' = '+(x-y)+'.\nVậy '+ex+' = '+a+'.';var b=y;if(op==='–'){b=-y;L.push('Muốn trừ số nguyên a cho số nguyên b, ta cộng a với số đối của b: '+ex+' = '+S(x)+' + '+S(b)+'.');}var r=x+b,ax=Math.abs(x),ab=Math.abs(b);if(x>=0&&b>=0)L.push('Cộng hai số nguyên dương: '+x+' + '+b+' = '+r+'.');else if(x<0&&b<0)L.push('Cộng hai số nguyên âm: cộng hai phần số tự nhiên rồi đặt dấu “−” trước kết quả: '+S(x)+' + '+S(b)+' = −('+ax+' + '+ab+') = '+N(r)+'.');else{if(ax===ab)L.push('Hai số đối nhau có tổng bằng 0: '+S(x)+' + '+S(b)+' = 0.');else{var neg=(x<0?ax:ab)>(x<0?ab:ax);L.push('Cộng hai số nguyên khác dấu: lấy phần số tự nhiên lớn trừ phần số tự nhiên nhỏ, đặt trước kết quả dấu của số có phần số tự nhiên lớn hơn: '+S(x)+' + '+S(b)+' = '+(neg?'−('+Math.max(ax,ab)+' − '+Math.min(ax,ab)+')':Math.max(ax,ab)+' − '+Math.min(ax,ab))+' = '+N(r)+'.');}}L.push('Vậy '+ex+' = '+a.replace(/^-/,'−')+'.');return L.join('\n');};
LG['t6_congps']=function(it){var q=String(it.q).replace(/[−–-]/g,'–'),a=String(it.a);var m=q.match(/(\d+)\s*\/\s*(\d+)\s*([+–])\s*(\d+)\s*\/\s*(\d+)/);function g(x,y){x=Math.abs(x);y=Math.abs(y);while(y){var t=x%y;x=y;y=t}return x}if(!m)return 'Quy đồng mẫu số các phân số rồi cộng (trừ) các tử số, giữ nguyên mẫu chung, rút gọn kết quả.\nKết quả: '+a+'.';var a1=+m[1],m1=+m[2],op=m[3],b1=+m[4],m2=+m[5],sg=op==='+'?1:-1,os=op==='+'?' + ':' − ';var L=[],ex=a1+'/'+m1+os+b1+'/'+m2;var M=m1*m2/g(m1,m2),t1=a1*(M/m1),t2=b1*(M/m2),t=t1+sg*t2;var st;if(m1===m2){L.push('Hai phân số cùng mẫu: '+(op==='+'?'cộng':'trừ')+' các tử số và giữ nguyên mẫu.');st=ex+' = ('+a1+os+b1+')/'+M+' = '+t+'/'+M;}else{L.push('Quy đồng mẫu số: mẫu chung là BCNN('+m1+', '+m2+') = '+M+'.');st=ex+' = '+t1+'/'+M+os+t2+'/'+M+' = '+t+'/'+M;}var gg=g(t,M)||1,res=t===0?'0':(M/gg===1?String(t/gg):(t/gg)+'/'+(M/gg));if(t===0)L.push(st+' = 0.');else if(gg>1)L.push(st+' = '+res+(M/gg===1?'':' (rút gọn cho '+gg+')')+'.');else L.push(st+'.');L.push('Vậy '+ex+' = '+a+'.');return L.join('\n');};
LG['t6_congtrutn']=function(it){var q=String(it.q).replace(/[−–]/g,'–'),a=String(it.a);var num='(\\d{1,3}(?:[ \\u00a0\\u202f]\\d{3})*)';var P=function(s){return +s.replace(/\D/g,'')};var F=function(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')};var m;if((m=q.match(new RegExp('x\\s*\\+\\s*'+num+'\\s*=\\s*'+num)))){var b=P(m[1]),s=P(m[2]);return 'x là số hạng chưa biết. Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.\nx = '+F(s)+' − '+F(b)+'\nx = '+F(s-b)+'\nVậy '+a+'.';}if((m=q.match(new RegExp(num+'\\s*([+–])\\s*'+num)))){var x=P(m[1]),y=P(m[3]),pl=m[2]==='+',r=pl?x+y:x-y;return 'Đặt tính sao cho các chữ số cùng hàng thẳng cột với nhau, rồi '+(pl?'cộng':'trừ')+' lần lượt từ phải sang trái (hàng đơn vị, hàng chục, hàng trăm, …)'+(pl?', chú ý nhớ sang hàng liền trước khi tổng của một hàng lớn hơn 9.':', chú ý khi chữ số bị trừ nhỏ hơn thì mượn 1 ở hàng liền trước.')+'\n'+F(x)+(pl?' + ':' − ')+F(y)+' = '+F(r)+'\nVậy kết quả là '+a+'.';}return 'Đặt tính rồi tính theo từng hàng.\nKết quả: '+a+'.';};
LG['t6_ctp']=function(it){var q=String(it.q).replace(/[−–]/g,'–'),a=String(it.a);var m=q.match(/(\d+(?:,\d+)?)\s*([+–])\s*(\d+(?:,\d+)?)/);if(!m)return 'Đặt tính sao cho các chữ số cùng hàng thẳng cột, dấu phẩy thẳng dấu phẩy, rồi tính như số tự nhiên.\nKết quả: '+a+'.';var x=m[1],y=m[3],pl=m[2]==='+';var dx=(x.split(',')[1]||'').length,dy=(y.split(',')[1]||'').length;var L=[];L.push('Đặt tính sao cho các chữ số cùng hàng thẳng cột với nhau, dấu phẩy thẳng cột với dấu phẩy.');if(dx!==dy)var iz=(dx<dy?x:y).indexOf(',')<0;L.push((iz?'Viết số tự nhiên dưới dạng số thập phân cho số chữ số ở phần thập phân bằng nhau: ':'Viết thêm chữ số 0 vào bên phải phần thập phân cho số chữ số ở phần thập phân bằng nhau: ')+(dx<dy?x+' = '+x+(x.indexOf(',')<0?',':'')+'0'.repeat(dy-dx):y+' = '+y+(y.indexOf(',')<0?',':'')+'0'.repeat(dx-dy))+'.');L.push((pl?'Cộng':'Trừ')+' như '+(pl?'cộng':'trừ')+' các số tự nhiên, rồi đặt dấu phẩy ở kết quả thẳng cột với các dấu phẩy.');L.push(x+(pl?' + ':' − ')+y+' = '+a);L.push('Vậy kết quả là '+a+'.');return L.join('\n');};
LG['t6_diemdt']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/Cho\s*(\d+)\s*điểm/);if(m){var n=+m[1];return 'Mỗi điểm nối với '+(n-1)+' điểm còn lại tạo thành '+(n-1)+' đường thẳng, nên có '+n+' . '+(n-1)+' = '+(n*(n-1))+' đường thẳng; nhưng mỗi đường thẳng được tính hai lần.\nSố đường thẳng là: '+n+' . '+(n-1)+' : 2 = '+(n*(n-1)/2)+' (đường thẳng).\nVậy kẻ được '+a+' đường thẳng.';}if(/hai điểm/.test(q))return 'Có một và chỉ một đường thẳng đi qua hai điểm phân biệt.\nVậy kẻ được '+a+' đường thẳng.';return 'Áp dụng: qua hai điểm phân biệt có một và chỉ một đường thẳng.\nĐáp số: '+a+'.';};
LG['t6_doandai']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/AM\s*=\s*(\d+(?:,\d+)?)\s*(\w+),\s*MB\s*=\s*(\d+(?:,\d+)?)/);if(!m)return 'Nếu điểm M nằm giữa hai điểm A và B thì AM + MB = AB.\nĐáp số: '+a+'.';var x=parseFloat(m[1].replace(',','.')),y=parseFloat(m[3].replace(',','.')),u=m[2];return 'Vì điểm M nằm giữa hai điểm A và B nên AM + MB = AB.\nAB = '+m[1]+' + '+m[3]+' = '+String(Math.round((x+y)*1000)/1000).replace('.',',')+' ('+u+').\nVậy AB = '+a+'.';};
LG['t6_dulieu']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/dữ liệu:\s*([\d,\s]+?)\.\s*Hỏi.*?lớn hơn\s*(\d+)/);if(!m)return 'Đọc lần lượt từng giá trị trong dãy dữ liệu và đếm các giá trị thỏa mãn yêu cầu.\nĐáp số: '+a+'.';var arr=m[1].split(',').map(function(s){return +s.trim()}).filter(function(v){return !isNaN(v)}),k=+m[2],f=arr.filter(function(v){return v>k});return 'Lần lượt xét các giá trị trong dãy, các giá trị lớn hơn '+k+' là: '+(f.length?f.join(', '):'không có')+'.\nĐếm được '+f.length+' giá trị.\nVậy có '+a+' giá trị lớn hơn '+k+'.';};

LG['t6_ghiso']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if((m=q.match(/Số La Mã\s+([IVXLCDM]+)/))){
    var s=m[1],V={I:1,V:5,X:10,L:50,C:100,D:500,M:1000},parts=[],i=0;
    while(i<s.length){var c=s[i],n=s[i+1];
      if(n&&V[n]>V[c]){parts.push(s.substr(i,2)+' = '+(V[n]-V[c]));i+=2;}
      else{parts.push(c+' = '+V[c]);i++;}}
    var vals=parts.map(function(p){return p.split(' = ')[1];});
    var L=['Nhớ: I = 1, V = 5, X = 10; IV = 4, IX = 9 (chữ số nhỏ đứng trước chữ số lớn thì lấy số lớn trừ số nhỏ).'];
    if(parts.length>1)L.push('Tách '+s+' thành các nhóm: '+parts.join('; ')+'.','Cộng lại: '+vals.join(' + ')+' = '+a+'.');
    L.push('Vậy số La Mã '+s+' biểu diễn số '+a+'.');
    return L.join('\n');
  }
  if((m=q.match(/số\s+([\d\s]+?),\s*chữ số\s+(\d)\s+ở\s+hàng\s+([^\s]+(?:\s+vị)?)/))){
    var hang=m[3],z={'đơn vị':0,'chục':1,'trăm':2,'nghìn':3}[hang];
    var L2=['Giá trị của chữ số = chữ số đó × giá trị của hàng.'];
    if(z!=null)L2.push('Hàng '+hang+' có giá trị '+String(Math.pow(10,z)).replace(/\B(?=(\d{3})+$)/g,' ')+', nên chữ số '+m[2]+' có giá trị '+m[2]+' × '+String(Math.pow(10,z)).replace(/\B(?=(\d{3})+$)/g,' ')+' = '+a+'.');
    L2.push('Vậy chữ số '+m[2]+' ở hàng '+hang+' có giá trị bằng '+a+'.');
    return L2.join('\n');
  }
  return 'Xác định hàng của chữ số rồi tính giá trị theo hàng.\nVậy đáp án là '+a+'.';
};
LG['t6_goc']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*°/),d=m?m[1]+'°':'đã cho';
  var L=['Nhớ: góc nhọn nhỏ hơn 90°; góc vuông bằng 90°; góc tù lớn hơn 90° và nhỏ hơn 180°; góc bẹt bằng 180°.'];
  var lyDo={'góc nhọn':d+' < 90°','góc vuông':d+' = 90°','góc tù':'90° < '+d+' < 180°','góc bẹt':d+' = 180°'}[a];
  if(lyDo)L.push('Ta có '+lyDo+'.');
  L.push('Vậy góc có số đo '+d+' là '+a+'.');
  return L.join('\n');
};
LG['t6_hcn']=function(it){
  var q=String(it.q),a=String(it.a),n=(q.match(/\d+(?:,\d+)?/g)||[]),x=n[0],y=n[1],v=a.replace(/\s*cm²/,'');
  if(/chữ nhật/.test(q))return 'Diện tích hình chữ nhật = chiều dài × chiều rộng.\nS = '+x+' × '+y+' = '+v+' (cm²).\nVậy diện tích hình chữ nhật là '+a+'.';
  if(/bình hành/.test(q))return 'Diện tích hình bình hành = cạnh đáy × chiều cao.\nS = '+x+' × '+y+' = '+v+' (cm²).\nVậy diện tích hình bình hành là '+a+'.';
  if(/thoi/.test(q))return 'Diện tích hình thoi = nửa tích hai đường chéo.\nS = '+x+' × '+y+' : 2 = '+v+' (cm²).\nVậy diện tích hình thoi là '+a+'.';
  return 'Áp dụng công thức tính diện tích của hình đã cho.\nVậy diện tích là '+a+'.';
};
LG['t6_ketqua']=function(it){
  var q=String(it.q),a=String(it.a);
  if(/xúc xắc/.test(q))return 'Con xúc xắc có 6 mặt, mỗi lần gieo xuất hiện đúng 1 mặt: 1, 2, 3, 4, 5 hoặc 6 chấm.\nVậy có '+a+' kết quả có thể xảy ra.';
  if(/đồng xu/.test(q))return 'Đồng xu có 2 mặt: sấp (S) hoặc ngửa (N).\nVậy có '+a+' kết quả có thể xảy ra.';
  var m=q.match(/(\d+)\s*quả bóng/);
  if(m)return 'Hộp có '+m[1]+' quả bóng khác màu, lấy 1 quả thì có thể lấy được bất kì quả nào trong '+m[1]+' quả.\nMỗi quả là một kết quả có thể.\nVậy có '+a+' kết quả có thể xảy ra.';
  return 'Liệt kê tất cả các kết quả có thể xảy ra rồi đếm.\nVậy có '+a+' kết quả có thể xảy ra.';
};
LG['t6_luythua']=function(it){
  var q=String(it.q),a=String(it.a),m;
  var SUP={'⁰':0,'¹':1,'²':2,'³':3,'⁴':4,'⁵':5,'⁶':6,'⁷':7,'⁸':8,'⁹':9};
  if((m=q.match(/Viết gọn[^:]*:\s*(.+)$/))){
    var f=m[1].split('×').map(function(x){return x.trim();}).filter(Boolean);
    return 'Tích của '+f.length+' thừa số bằng nhau, mỗi thừa số bằng '+f[0]+', viết gọn thành lũy thừa: cơ số '+f[0]+', số mũ '+f.length+'.\nVậy '+m[1].trim()+' = '+a+'.';
  }
  if((m=q.match(/(\d+)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/))){
    var b=m[1],e=0;for(var c of m[2])e=e*10+SUP[c];
    var f2=[];for(var i=0;i<e;i++)f2.push(b);
    return b+m[2]+' là tích của '+e+' thừa số '+b+'.\n'+b+m[2]+' = '+f2.join(' × ')+' = '+a+'.\nVậy '+b+m[2]+' = '+a+'.';
  }
  return 'aⁿ là tích của n thừa số bằng nhau, mỗi thừa số bằng a.\nVậy đáp án là '+a+'.';
};
LG['t6_luythua2']=function(it){
  var q=String(it.q),a=String(it.a);
  var SUP='⁰¹²³⁴⁵⁶⁷⁸⁹',p=function(s){var e=0;for(var c of s)e=e*10+SUP.indexOf(c);return e;};
  var sup=function(n){return String(n).split('').map(function(d){return SUP[+d];}).join('');};
  var m=q.match(/(\d+)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)\s*([×:])\s*(\d+)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/);
  if(!m)return 'Nhân hai lũy thừa cùng cơ số: giữ nguyên cơ số và cộng các số mũ; chia: giữ nguyên cơ số và trừ các số mũ.\nVậy kết quả là '+a+'.';
  var b=m[1],x=p(m[2]),y=p(m[5]),ex=m[1]+m[2]+' '+m[3]+' '+m[4]+m[5];
  if(m[3]==='×')return 'Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: aᵐ · aⁿ = aᵐ⁺ⁿ.\n'+ex+' = '+b+sup(x)+'⁺'+sup(y)+' = '+b+sup(x+y)+'.\nVậy '+ex+' = '+a+'.';
  return 'Khi chia hai lũy thừa cùng cơ số (khác 0), ta giữ nguyên cơ số và trừ các số mũ: aᵐ : aⁿ = aᵐ⁻ⁿ (m ≥ n).\n'+ex+' = '+b+sup(x)+'⁻'+sup(y)+' = '+b+sup(x-y)+'.\nVậy '+ex+' = '+a+'.';
};
LG['t6_mrps']=function(it){
  var q=String(it.q),a=String(it.a),m;
  var g=function(x,y){x=Math.abs(x);y=Math.abs(y);while(y){var t=x%y;x=y;y=t;}return x;};
  if((m=q.match(/Rút gọn phân số\s+(-?\d+)\/(-?\d+)/))){
    var t=+m[1],u=+m[2],d=g(t,u);
    return 'Tìm ƯCLN của tử và mẫu: ƯCLN('+Math.abs(t)+', '+Math.abs(u)+') = '+d+'.\nChia cả tử và mẫu cho '+d+': '+t+'/'+u+' = ('+t+' : '+d+')/('+u+' : '+d+') = '+(t/d)+'/'+(u/d)+'.\nVậy phân số tối giản là '+a+'.';
  }
  if((m=q.match(/(-?\d+)\/(-?\d+)\s*=\s*(-?\d+)\/x/))){
    var A=+m[1],B=+m[2],C=+m[3],X=B*C/A;
    return 'Hai phân số a/b = c/d khi a · d = b · c.\nTừ '+A+'/'+B+' = '+C+'/x suy ra '+A+' · x = '+B+' · '+C+'.\nx = '+B+' · '+C+' : '+A+' = '+(B*C)+' : '+A+' = '+X+'.\nVậy '+a+'.';
  }
  return 'Áp dụng tính chất cơ bản của phân số.\nVậy đáp án là '+a+'.';
};
LG['t6_nc1']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.replace(/[−–]/g,'-').match(/(-?\d*)x\s*([+-])\s*\(?\s*(-?\d+)\s*\)?\s*=\s*\(?\s*(-?\d+)\s*\)?/);
  if(!m)return 'Chuyển các số hạng không chứa x sang vế phải (đổi dấu), rồi chia hai vế cho hệ số của x.\nVậy '+a+'.';
  var k=m[1]===''?1:(m[1]==='-'?-1:+m[1]),b=+m[3]*(m[2]==='-'?-1:1),c=+m[4],r=c-b,x=r/k;
  var ps=function(n){return n<0?'('+n+')':String(n);};
  var L=[k+'x + '+ps(b)+' = '+c,
    k+'x = '+c+' − '+ps(b)+'   (chuyển vế, đổi dấu)',
    k+'x = '+r,
    'x = '+r+' : '+ps(k),
    'x = '+x,
    'Vậy '+a+'.'];
  return L.join('\n');
};
LG['t6_nc2']=function(it){
  var q=String(it.q),a=String(it.a);
  var n=(q.match(/\d+/g)||[]).map(Number),x=n[0],y=n[1];
  var fac=function(v){var r=[],p=2;while(v>1){var e=0;while(v%p===0){v/=p;e++;}if(e)r.push(p+(e>1?String(e).split('').map(function(d){return '⁰¹²³⁴⁵⁶⁷⁸⁹'[+d];}).join(''):''));p++;}return r.join(' · ')||'1';};
  var g=function(u,v){while(v){var t=u%v;u=v;v=t;}return u;};
  if(/nhiều nhất/.test(q)&&x&&y){
    var d=g(x,y);
    return 'Bài giải\nGọi số phần quà là k. Vì số bút và số vở chia đều vào các phần nên k là ước chung của '+x+' và '+y+'; k nhiều nhất nên k = ƯCLN('+x+', '+y+').\n'+x+' = '+fac(x)+'; '+y+' = '+fac(y)+'.\nƯCLN('+x+', '+y+') = '+d+'.\nMỗi phần có '+(x/d)+' bút chì và '+(y/d)+' quyển vở.\nĐáp số: '+a+'.';
  }
  if(/ít nhất|BCNN/i.test(q)&&x&&y){
    var l=x*y/g(x,y);
    return 'Bài giải\nSố cần tìm là bội chung nhỏ nhất của '+x+' và '+y+'.\n'+x+' = '+fac(x)+'; '+y+' = '+fac(y)+'.\nBCNN('+x+', '+y+') = '+l+'.\nĐáp số: '+a+'.';
  }
  return 'Bài giải\nPhân tích các số ra thừa số nguyên tố rồi tìm ƯCLN (hoặc BCNN) theo yêu cầu bài toán.\nĐáp số: '+a+'.';
};
LG['t6_ngoac']=function(it){
  var q=String(it.q).replace(/[–−]/g,'-'),a=String(it.a);
  var m=q.match(/(-?\d+)\s*([+-])\s*\(\s*(-?\d+)\s*([+-])\s*(-?\d+)\s*\)/);
  if(!m)return 'Khi bỏ dấu ngoặc có dấu "−" đằng trước, ta phải đổi dấu tất cả các số hạng trong ngoặc.\nVậy kết quả là '+a+'.';
  var A=+m[1],B=+m[3],C=+m[5],o1=m[2],o2=m[4];
  var sC=o2,sB='+';
  if(o1==='-'){sB='-';sC=(o2==='+'?'-':'+');}
  var r=A+(sB==='-'?-B:B)+(sC==='-'?-C:C);
  var M=function(s){return s==='-'?'−':'+';};
  var L=[];
  L.push(o1==='-'?'Bỏ dấu ngoặc có dấu "−" đằng trước: đổi dấu tất cả các số hạng trong ngoặc.':'Bỏ dấu ngoặc có dấu "+" đằng trước: giữ nguyên dấu các số hạng trong ngoặc.');
  var step2=A+' '+M(sB)+' '+B+' '+M(sC)+' '+C;
  L.push(A+' '+M(o1)+' ('+B+' '+M(o2)+' '+C+') = '+step2);
  var AB=A+(sB==='-'?-B:B);
  L.push('= '+(AB<0?'('+AB+')':AB)+' '+M(sC)+' '+C);
  L.push('= '+r);
  L.push('Vậy kết quả là '+a+'.');
  return L.join('\n');
};
LG['t6_nhanchiatn']=function(it){
  var q=String(it.q),a=String(it.a),m;
  var fmt=function(n){return String(n).replace(/\B(?=(\d{3})+$)/g,' ');};
  var num=function(s){return +s.replace(/\s/g,'');};
  if((m=q.match(/(\d[\d\s]*?)\s*×\s*(\d[\d\s]*)/))){
    var x=num(m[1]),y=num(m[2]),ds=String(y).split('').reverse(),L=['Đặt tính rồi tính: nhân '+fmt(x)+' lần lượt với từng chữ số của '+fmt(y)+' (từ phải sang trái).'],tot=0;
    ds.forEach(function(d,i){var p=x*(+d);tot+=p*Math.pow(10,i);
      L.push(fmt(x)+' × '+d+' = '+fmt(p)+(i?' (tích riêng thứ '+(i+1)+', viết lùi sang trái '+i+' cột)':' (tích riêng thứ nhất)'));});
    if(ds.length>1)L.push('Cộng các tích riêng được '+fmt(tot)+'.');
    L.push('Vậy '+fmt(x)+' × '+fmt(y)+' = '+a+'.');
    return L.join('\n');
  }
  if((m=q.match(/(\d[\d\s]*?)\s*:\s*(\d+)/))){
    var D=num(m[1]),b=+m[2],s=String(D),L2=['Đặt tính rồi chia từ trái sang phải:'],r=0,started=false,qs='';
    for(var i=0;i<s.length;i++){var cur=r*10+(+s[i]);
      if(!started&&cur<b&&i<s.length-1){r=cur;continue;}
      var dd=Math.floor(cur/b),pp=dd*b;
      L2.push((started?'Hạ '+s[i]+' được '+cur+'; ':'')+cur+' chia '+b+' được '+dd+', viết '+dd+'; '+dd+' nhân '+b+' bằng '+pp+'; '+cur+' trừ '+pp+' bằng '+(cur-pp)+'.');
      started=true;r=cur-pp;qs+=dd;}
    var Q=Math.floor(D/b),R=D%b;
    if(/dư/.test(q)){L2.push('Thử lại: '+fmt(Q)+' × '+b+' + '+R+' = '+fmt(D)+'.');L2.push('Vậy phép chia '+fmt(D)+' : '+b+' có '+a.charAt(0).toLowerCase()+a.slice(1)+'.');}
    else L2.push('Vậy '+fmt(D)+' : '+b+' = '+a+'.');
    return L2.join('\n');
  }
  return 'Đặt tính rồi tính.\nVậy kết quả là '+a+'.';
};
LG['t6_nhannguyen']=function(it){
  var q=String(it.q).replace(/[−–]/g,'-'),a=String(it.a);
  var m=q.match(/\(?\s*(-?\d+)\s*\)?\s*([×:])\s*\(?\s*(-?\d+)\s*\)?/);
  if(!m)return 'Nhân (chia) hai số nguyên cùng dấu được số dương, khác dấu được số âm.\nVậy kết quả là '+a+'.';
  var x=+m[1],y=+m[3],op=m[2],ax=Math.abs(x),ay=Math.abs(y),ps=function(n){return n<0?'('+n+')':String(n);};
  var ex=ps(x)+' '+op+' '+ps(y),v=op==='×'?ax*ay:ax/ay,L=[];
  var ten=op==='×'?'tích':'thương',dt=op==='×'?'Nhân':'Chia';
  if(x===0||y===0&&op==='×'){L.push(op==='×'?'Số nào nhân với 0 cũng bằng 0.':'0 chia cho số nguyên khác 0 bằng 0.');}
  else if(x<0&&y<0)L.push(dt+' hai số nguyên âm: '+(op==='×'?'nhân':'chia')+' hai số đối của chúng, '+ten+' là số dương.',ex+' = '+ax+' '+op+' '+ay+' = '+v);
  else if(x<0||y<0)L.push(dt+' hai số nguyên khác dấu: '+(op==='×'?'nhân':'chia')+' phần số tự nhiên rồi đặt dấu "−" trước kết quả.',ex+' = −('+ax+' '+op+' '+ay+') = −'+v);
  else L.push(dt+' hai số nguyên dương như '+(op==='×'?'nhân':'chia')+' hai số tự nhiên.',ex+' = '+v);
  L.push('Vậy '+ex+' = '+a+'.');
  return L.join('\n');
};
LG['t6_nhanps']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(-?\d+)\/(-?\d+)\s*([×:])\s*(-?\d+)\/(-?\d+)/);
  if(!m)return 'Nhân phân số: tử nhân tử, mẫu nhân mẫu. Chia phân số: nhân với phân số nghịch đảo của số chia.\nVậy kết quả là '+a+'.';
  var A=+m[1],B=+m[2],C=+m[4],D=+m[5],op=m[3],f1=A+'/'+B,f2=C+'/'+D,L=[];
  var g=function(x,y){x=Math.abs(x);y=Math.abs(y);while(y){var t=x%y;x=y;y=t;}return x;};
  if(op===':'){L.push('Muốn chia một phân số cho một phân số, ta nhân số bị chia với phân số nghịch đảo của số chia.');
    L.push(f1+' : '+f2+' = '+f1+' × '+D+'/'+C);var t=C;C=D;D=t;}
  else L.push('Muốn nhân hai phân số, ta nhân các tử với nhau và nhân các mẫu với nhau.');
  var T=A*C,M=B*D,d=g(T,M);
  L.push((op===':'?'= ':f1+' × '+f2+' = ')+'('+A+' × '+C+')/('+B+' × '+D+') = '+T+'/'+M);
  if(d>1)L.push('Rút gọn (chia cả tử và mẫu cho '+d+'): '+T+'/'+M+' = '+(T/d)+'/'+(M/d)+(M/d===1?' = '+(T/d):''));
  L.push('Vậy kết quả là '+a+'.');
  return L.join('\n');
};
LG['t6_lamtron']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/số\s+(\d+),(\d+)/);
  var R='Quy tắc: xét chữ số ngay bên phải hàng làm tròn (hàng phần mười); nếu chữ số đó nhỏ hơn 5 thì giữ nguyên chữ số hàng phần mười, nếu lớn hơn hoặc bằng 5 thì cộng thêm 1 vào chữ số hàng phần mười, rồi bỏ các chữ số bên phải.';
  if(!m)return R+'\nVậy kết quả là '+a+'.';
  var ip=m[1],dp=m[2],s=ip+','+dp,t=+dp[0],L=[R];
  if(dp.length===1){L.push('Số '+s+' có chữ số hàng phần mười là '+t+', bên phải không còn chữ số nào nên giữ nguyên.');L.push('Vậy '+s+' ≈ '+a+'.');return L.join('\n');}
  var d=+dp[1];
  L.push('Chữ số hàng phần mười của '+s+' là '+t+'; chữ số ngay bên phải nó (hàng phần trăm) là '+d+'.');
  var n=(+ip)*10+t+(d>=5?1:0),ni=Math.floor(n/10),nt=n%10,raw=ni+','+nt;
  if(d<5)L.push('Vì '+d+' < 5 nên giữ nguyên chữ số '+t+' và bỏ chữ số '+d+', được '+raw+(nt===0?' = '+ni:'')+'.');
  else if(t<9)L.push('Vì '+d+' ≥ 5 nên cộng thêm 1 vào chữ số hàng phần mười: '+t+' + 1 = '+(t+1)+', bỏ chữ số '+d+', được '+raw+'.');
  else L.push('Vì '+d+' ≥ 5 nên cộng thêm 1 vào chữ số hàng phần mười: 9 + 1 = 10, viết 0 và nhớ 1 sang hàng đơn vị: '+ip+' + 1 = '+ni+', được '+raw+' = '+ni+'.');
  L.push('Vậy '+s+' ≈ '+a+'.');
  return L.join('\n');
};
LG['t6_nhantp']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+(?:,\d+)?)\s*([×:])\s*(\d+)/);
  if(!m)return 'Thực hiện như với số tự nhiên rồi đặt dấu phẩy đúng vị trí.\nVậy kết quả là '+a+'.';
  var x=m[1],y=m[3],op=m[2],dp=(x.split(',')[1]||'').length,L=[];
  if(op==='×'){
    var xi=x.replace(',',''),p=String((+xi)*(+y));
    L.push('Muốn nhân một số thập phân với một số tự nhiên, ta nhân như nhân số tự nhiên rồi đếm phần thập phân của thừa số thập phân để đặt dấu phẩy ở tích.');
    L.push(xi+' × '+y+' = '+p+'.');
    if(dp){var raw=p.slice(0,p.length-dp)+','+p.slice(-dp);
      L.push('Thừa số '+x+' có '+dp+' chữ số ở phần thập phân nên dùng dấu phẩy tách ở tích ra '+dp+' chữ số kể từ phải sang trái: '+raw+(raw!==a?' = '+a+' (bỏ chữ số 0 ở cuối phần thập phân)':'')+'.');}
  } else {
    var b=+y,ds=x.replace(',',''),ci=x.indexOf(','),nInt=ci<0?ds.length:ci,r=0,started=false,cm=false;
    L.push(dp?'Đặt tính rồi chia như chia số tự nhiên; khi chia hết phần nguyên thì viết dấu phẩy vào bên phải thương rồi chia tiếp phần thập phân:':'Đặt tính rồi chia từ trái sang phải:');
    for(var i=0;i<ds.length;i++){
      if(i===nInt&&dp){L.push('Hết phần nguyên, viết dấu phẩy vào bên phải thương'+(started?'':' (thương có phần nguyên là 0)')+'.');cm=true;}
      var cur=r*10+(+ds[i]);
      if(!started&&cur<b&&i<nInt-1){r=cur;continue;}
      var dd=Math.floor(cur/b),pp=dd*b;
      L.push((started||cm?'Hạ '+ds[i]+' được '+cur+'; ':'')+cur+' chia '+b+' được '+dd+', viết '+dd+'; '+dd+' nhân '+b+' bằng '+pp+'; '+cur+' trừ '+pp+' bằng '+(cur-pp)+'.');
      started=true;r=cur-pp;}
  }
  L.push('Vậy '+x+' '+op+' '+y+' = '+a+'.');
  return L.join('\n');
};

LG['t6_phantram']=function(it){var q=String(it.q),a=String(it.a),m;
var fmt=function(x){return String(Math.round(x*100)/100).replace('.',',');};
if((m=q.match(/Tìm\s*(\d+(?:,\d+)?)\s*%\s*của\s*(\d+(?:,\d+)?)/))){var p=m[1],b=m[2],pv=parseFloat(p.replace(',','.')),bv=parseFloat(b.replace(',','.'));
return 'Muốn tìm '+p+'% của '+b+', ta lấy '+b+' nhân với '+p+' rồi chia cho 100.\n'+p+'% của '+b+' là: '+b+' × '+p+' : 100 = '+fmt(bv*pv/100)+'.\nVậy '+p+'% của '+b+' là '+a+'.';}
if((m=q.match(/có\s*(\d+)\s*học sinh[^\d]*?(\d+)\s*bạn/))){var s=+m[1],d=+m[2];
return 'Tỉ số phần trăm của a và b là (a × 100 : b)%.\nTỉ số phần trăm học sinh giỏi so với cả lớp là:\n'+d+' × 100 : '+s+' = '+fmt(d*100/s)+' (%)\nĐáp số: '+a+'.';}
return 'Áp dụng: muốn tìm m% của b ta tính b × m : 100; tỉ số phần trăm của a và b là (a × 100 : b)%.\nĐáp số: '+a+'.';};

LG['t6_ps_tuso']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/Tìm\s*(\d+)\s*\/\s*(\d+)\s*của\s*(\d+)/);
if(!m)return 'Muốn tìm m/n của số b, ta tính b × m/n (lấy b chia cho n rồi nhân với m).\nĐáp số: '+a+'.';
var t=+m[1],n=+m[2],b=+m[3];
return 'Muốn tìm '+t+'/'+n+' của '+b+', ta tính '+b+' × '+t+'/'+n+'.\n'+b+' × '+t+'/'+n+' = '+(t===1?b+' : '+n+' = '+(b/n):b+' : '+n+' × '+t+' = '+(b/n)+' × '+t+' = '+(b*t/n))+'.\nVậy '+t+'/'+n+' của '+b+' là '+a+'.';};

LG['t6_snt']=function(it){var q=String(it.q),a=String(it.a),r=parseInt(a,10);var dv=[];if(!isNaN(r))for(var i=1;i<=r;i++)if(r%i===0)dv.push(i);
if(/hợp số/.test(q)){var k=dv.filter(function(x){return x>1&&x<r;})[0];
return 'Hợp số là số tự nhiên lớn hơn 1, có nhiều hơn hai ước.\n'+(k?('Số '+r+' có các ước là '+dv.join('; ')+' (chẳng hạn '+r+' = '+k+' × '+(r/k)+'), nhiều hơn hai ước nên '+r+' là hợp số.\n'):'')+'Các số còn lại chỉ có hai ước là 1 và chính nó nên là số nguyên tố.\nVậy số cần chọn là '+a+'.';}
return 'Số nguyên tố là số tự nhiên lớn hơn 1, chỉ có hai ước là 1 và chính nó.\n'+(dv.length?('Số '+r+' chỉ có hai ước là '+dv.join(' và ')+' nên '+r+' là số nguyên tố.\n'):'')+'Các số còn lại đều có thêm ước khác 1 và chính nó nên là hợp số.\nVậy số cần chọn là '+a+'.';};

LG['t6_songuyen']=function(it){var q=String(it.q).replace(/[−–]/g,'-'),a=String(it.a),m;
var sh=function(x){return x<0?('–'+(-x)):String(x);};
if((m=q.match(/số đối của\s*(-?\d+)/))){var x=+m[1];
if(x===0)return 'Số đối của 0 là 0.\nVậy số đối của 0 là '+a+'.';
return 'Hai số đối nhau là hai số nằm cách đều điểm 0 trên trục số, về hai phía của điểm 0.\nSố đối của '+sh(x)+' là '+sh(-x)+'.\nVậy số đối của '+sh(x)+' là '+a+'.';}
if((m=q.match(/\|\s*(-?\d+)\s*\|/))){var y=+m[1];
return 'Giá trị tuyệt đối của một số nguyên là khoảng cách từ điểm biểu diễn số đó đến điểm 0 trên trục số.\n'+(y<0?'Giá trị tuyệt đối của số nguyên âm là số đối của nó: ':(y>0?'Giá trị tuyệt đối của số nguyên dương là chính nó: ':''))+'|'+sh(y)+'| = '+Math.abs(y)+'.\nVậy |'+sh(y)+'| = '+a+'.';}
if((m=q.match(/:\s*(-?\d+)\s*…\s*(-?\d+)/))){var u=+m[1],v=+m[2],s=u>v?'>':u<v?'<':'=',ly;
if(u===v)ly='Hai số bằng nhau.';
else if(u>=0&&v>=0)ly='Hai số nguyên không âm: so sánh như hai số tự nhiên.';
else if(u<0&&v<0)ly='Hai số nguyên âm: số nào có giá trị tuyệt đối lớn hơn thì nhỏ hơn (|'+sh(u)+'| = '+(-u)+', |'+sh(v)+'| = '+(-v)+').';
else ly='Mọi số nguyên âm đều nhỏ hơn 0 và nhỏ hơn mọi số nguyên dương.';
return ly+'\nTa có: '+sh(u)+' '+s+' '+sh(v)+'.\nVậy điền dấu '+a+'.';}
return 'Dựa vào trục số: số nằm bên trái nhỏ hơn số nằm bên phải; số đối của a là –a; |a| là khoảng cách từ a đến 0.\nĐáp án: '+a+'.';};

LG['t6_sosanhps']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*\/\s*(\d+)\s*…\s*(\d+)\s*\/\s*(\d+)/);
if(!m)return 'Quy đồng mẫu hai phân số (mẫu dương) rồi so sánh tử: phân số nào có tử lớn hơn thì lớn hơn.\nVậy điền dấu '+a+'.';
var a1=+m[1],b1=+m[2],a2=+m[3],b2=+m[4];var g=function(x,y){while(y){var t=y;y=x%y;x=t;}return x;};var M=b1*b2/g(b1,b2);
var t1=a1*M/b1,t2=a2*M/b2,s=t1>t2?'>':t1<t2?'<':'=';
var L='Quy đồng mẫu hai phân số với mẫu chung '+M+':\n';
L+= (b1===M?a1+'/'+b1+' giữ nguyên':a1+'/'+b1+' = ('+a1+' × '+(M/b1)+')/('+b1+' × '+(M/b1)+') = '+t1+'/'+M)+'; '+(b2===M?a2+'/'+b2+' giữ nguyên':a2+'/'+b2+' = ('+a2+' × '+(M/b2)+')/('+b2+' × '+(M/b2)+') = '+t2+'/'+M)+'.\n';
L+='So sánh tử: '+t1+' '+s+' '+t2+' nên '+t1+'/'+M+' '+s+' '+t2+'/'+M+'.\nVậy '+a1+'/'+b1+' '+a+' '+a2+'/'+b2+'.';return L;};

LG['t6_sothapphan']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/(\d+)\s*\/\s*(10+)\b/))){var z=m[2].length-1;
return 'Phân số thập phân có mẫu là '+m[2]+' (có '+z+' chữ số 0) thì viết được thành số thập phân có '+z+' chữ số ở phần thập phân.\n'+m[1]+'/'+m[2]+' = '+a+'.\nVậy '+m[1]+'/'+m[2]+' = '+a+'.';}
if((m=q.match(/(\d+(?:,\d+)?)\s*…\s*(\d+(?:,\d+)?)/))){var x=m[1],y=m[2],xi=x.split(',')[0],yi=y.split(',')[0],xv=parseFloat(x.replace(',','.')),yv=parseFloat(y.replace(',','.')),s=xv>yv?'>':xv<yv?'<':'=';
var L='So sánh phần nguyên trước: phần nguyên của '+x+' là '+xi+', của '+y+' là '+yi+'.\n';
if(+xi!==+yi)L+='Vì '+xi+' '+(+xi>+yi?'>':'<')+' '+yi+' nên '+x+' '+s+' '+y+'.\n';
else L+='Phần nguyên bằng nhau nên so sánh lần lượt các chữ số ở phần thập phân (hàng phần mười, phần trăm, …): '+x+' '+s+' '+y+'.\n';
return L+'Vậy điền dấu '+a+'.';}
return 'So sánh phần nguyên trước, nếu bằng nhau thì so sánh lần lượt từng hàng ở phần thập phân.\nĐáp án: '+a+'.';};

LG['t6_tamdx']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/^(.*?)\s*có tâm đối xứng/);var h=m?m[1]:'Hình này';
var gt={'Hình bình hành':'Tâm đối xứng là giao điểm của hai đường chéo.','Hình chữ nhật':'Tâm đối xứng là giao điểm của hai đường chéo.','Hình vuông':'Tâm đối xứng là giao điểm của hai đường chéo.','Hình thoi':'Tâm đối xứng là giao điểm của hai đường chéo.','Lục giác đều':'Tâm đối xứng là giao điểm của ba đường chéo chính.','Hình tròn':'Tâm đối xứng chính là tâm của hình tròn.','Hình thang cân':'Không có điểm nào để khi quay hình nửa vòng quanh điểm đó, hình trùng với chính nó.','Tam giác đều':'Quay tam giác đều nửa vòng quanh bất kì điểm nào, hình không trùng với chính nó.'};
return 'Hình có tâm đối xứng O nếu khi quay hình nửa vòng xung quanh O thì hình trùng với chính nó.\n'+(gt[h]||'')+'\nVậy '+h.charAt(0).toLowerCase()+h.slice(1)+(/^Có/.test(a)?' có':' không có')+' tâm đối xứng. Đáp án: '+a+'.';};

LG['t6_taphop']=function(it){var q=String(it.q).replace(/[−–]/g,'-'),a=String(it.a),m=q.match(/\|\s*(-?\d+)\s*≤\s*x\s*≤\s*(-?\d+)/);
if(!m)return 'Liệt kê các phần tử của tập hợp rồi đếm hoặc kiểm tra.\nĐáp án: '+a+'.';var lo=+m[1],hi=+m[2],ls=[];for(var i=lo;i<=hi;i++)ls.push(i);
var lk='A = {'+ls.join('; ')+'}.';var y=q.match(/Số\s*(-?\d+)\s*có thuộc/);
if(y){var v=+y[1],vs=v<0?'–'+(-v):String(v);var co=v>=lo&&v<=hi;
return 'Liệt kê các phần tử: '+lk+'\n'+(v<0?'Số '+vs+' không phải là số tự nhiên nên '+vs+' ∉ A.':co?'Số '+vs+' thỏa mãn '+lo+' ≤ '+vs+' ≤ '+hi+' nên '+vs+' ∈ A.':'Số '+vs+' không thỏa mãn '+lo+' ≤ x ≤ '+hi+' nên '+vs+' ∉ A.')+'\nĐáp án: '+a+'.';}
return 'Liệt kê các phần tử: '+lk+'\nSố phần tử của A là: '+hi+' – '+lo+' + 1 = '+(hi-lo+1)+'.\nVậy tập hợp A có '+a+' phần tử.';};

LG['t6_thutu']=function(it){var q=String(it.q).replace(/[−–]/g,'-'),a=String(it.a),m;
if((m=q.match(/\(\s*(\d+)\s*([+-])\s*(\d+)\s*\)\s*[×x]\s*(\d+)/))){var s=m[2]==='+'?(+m[1])+(+m[3]):(+m[1])-(+m[3]),o=m[2]==='+'?'+':'–';
return 'Biểu thức có dấu ngoặc: thực hiện phép tính trong ngoặc trước.\n('+m[1]+' '+o+' '+m[3]+') × '+m[4]+' = '+s+' × '+m[4]+' = '+(s*m[4])+'.\nVậy kết quả là '+a+'.';}
if((m=q.match(/(\d+)\s*:\s*(\d+)\s*([+-])\s*(\d+)/))){var t=m[1]/m[2],o2=m[3]==='+'?'+':'–';
return 'Biểu thức không có dấu ngoặc: thực hiện phép chia trước, phép trừ sau.\n'+m[1]+' : '+m[2]+' '+o2+' '+m[4]+' = '+t+' '+o2+' '+m[4]+' = '+(m[3]==='+'?t+(+m[4]):t-m[4])+'.\nVậy kết quả là '+a+'.';}
if((m=q.match(/(\d+)\s*([+-])\s*(\d+)\s*[×x]\s*(\d+)/))){var p=m[3]*m[4],o3=m[2]==='+'?'+':'–';
return 'Biểu thức không có dấu ngoặc: thực hiện phép nhân trước, phép cộng sau.\n'+m[1]+' '+o3+' '+m[3]+' × '+m[4]+' = '+m[1]+' '+o3+' '+p+' = '+(m[2]==='+'?(+m[1])+p:m[1]-p)+'.\nVậy kết quả là '+a+'.';}
return 'Thứ tự thực hiện: trong ngoặc trước; không có ngoặc thì lũy thừa → nhân, chia → cộng, trừ.\nVậy kết quả là '+a+'.';};

LG['t6_thututn']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/:\s*(\d+)\s*…\s*(\d+)/))){var x=m[1],y=m[2],s=+x>+y?'>':+x<+y?'<':'=';var L;
if(x.length!==y.length)L='Số '+(x.length>y.length?x:y)+' có nhiều chữ số hơn ('+Math.max(x.length,y.length)+' chữ số so với '+Math.min(x.length,y.length)+' chữ số) nên lớn hơn.';
else{var i=0;while(i<x.length&&x[i]===y[i])i++;L=i>=x.length?'Hai số giống nhau ở mọi hàng.':'Hai số có cùng số chữ số; so sánh từng cặp chữ số từ trái sang phải: '+(i>0?'các chữ số đầu giống nhau, ':'')+'ở cặp chữ số khác nhau đầu tiên có '+x[i]+' '+(x[i]>y[i]?'>':'<')+' '+y[i]+'.';}
return L+'\nVậy '+x+' '+s+' '+y+', điền dấu '+a+'.';}
var ns=(q.split(':').slice(1).join(':').match(/\d+/g)||[]);var L2='So sánh các số: số nào có nhiều chữ số hơn thì lớn hơn; nếu cùng số chữ số thì so sánh từng cặp chữ số từ trái sang phải.\n';
if(ns.length>1){var so=ns.slice().sort(function(u,v){return u-v;});L2+='Số bé nhất là '+so[0]+', số lớn nhất là '+so[so.length-1]+'.\n';}
return L2+'Sắp xếp từ bé đến lớn: '+a+'.';};

LG['t6_tia']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/điểm\s*([A-Z])\.\s*Điểm/);
if(m){var o=m[1];return 'Điểm '+o+' trên đường thẳng chia đường thẳng thành hai phần, mỗi phần cùng với điểm '+o+' là một tia gốc '+o+'.\nHai tia đó là hai tia đối nhau.\nVậy có '+a+' tia gốc '+o+'.';}
return 'Ba điểm A, B, C theo thứ tự đó trên một đường thẳng thì điểm B ở giữa: A và C nằm về hai phía của B.\nVậy điểm nằm giữa hai điểm còn lại là: '+a+'.';};

LG['t6_tructdx']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/^(.*?)\s*có bao nhiêu trục/);var h=m?m[1]:'Hình này';var hh=h.replace(/\s*\(.*\)/,'');
var gt={'Hình tròn':'Mọi đường thẳng đi qua tâm đều là trục đối xứng.','Lục giác đều':'Có 3 đường thẳng đi qua hai đỉnh đối diện và 3 đường thẳng đi qua trung điểm hai cạnh đối diện.','Tam giác đều':'Mỗi trục đi qua một đỉnh và trung điểm cạnh đối diện.','Hình thang cân':'Trục là đường thẳng đi qua trung điểm hai cạnh đáy.','Hình vuông':'Có 2 đường chéo và 2 đường thẳng đi qua trung điểm các cặp cạnh đối.','Hình chữ nhật':'Hai trục đối xứng là 2 đường thẳng đi qua trung điểm các cặp cạnh đối.','Hình thoi':'Hai trục đối xứng là 2 đường chéo.','Hình bình hành':'Gấp theo bất kì đường thẳng nào, hai phần cũng không chồng khít lên nhau.'};
return 'Trục đối xứng là đường thẳng chia hình thành hai phần mà khi gấp theo đường thẳng đó, hai phần chồng khít lên nhau.\n'+(gt[hh]||'')+'\nVậy '+h.charAt(0).toLowerCase()+h.slice(1)+(a==='0'?' không có trục đối xứng nào (số trục đối xứng là 0).':' có '+a+' trục đối xứng.');};

LG['t6_trungdiem']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/AM\s*=\s*(\d+(?:,\d+)?)\s*cm[^]*Tính AB/))){var x=parseFloat(m[1].replace(',','.'));
return 'Vì M là trung điểm của đoạn thẳng AB nên AM = MB = AB : 2, hay AB = 2 × AM.\nAB = 2 × '+m[1]+' = '+String(2*x).replace('.',',')+' (cm).\nVậy AB = '+a+'.';}
if((m=q.match(/AB\s*=\s*(\d+(?:,\d+)?)\s*cm/))){var y=parseFloat(m[1].replace(',','.'));
return 'Vì M là trung điểm của đoạn thẳng AB nên AM = MB = AB : 2.\nAM = '+m[1]+' : 2 = '+String(y/2).replace('.',',')+' (cm).\nVậy AM = '+a+'.';}
return 'M là trung điểm của AB nên AM = MB = AB : 2.\nĐáp số: '+a+'.';};

LG['t6_ucln']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/\(\s*(\d+)\s*,\s*(\d+)\s*\)/);
if(!m)return 'Phân tích các số ra thừa số nguyên tố, chọn các thừa số chung với số mũ nhỏ nhất rồi lập tích.\nĐáp số: '+a+'.';
var x=+m[1],y=+m[2];var pt=function(n){var r={},p=2;while(n>1){while(n%p===0){r[p]=(r[p]||0)+1;n/=p;}p++;}return r;};
var sup=function(e){return e===1?'':String(e).split('').map(function(c){return '⁰¹²³⁴⁵⁶⁷⁸⁹'[+c];}).join('');};
var ws=function(n,r){var k=Object.keys(r);return k.length?k.map(function(p){return p+sup(r[p]);}).join(' . '):String(n);};
var A=pt(x),B=pt(y),C={};for(var p in A)if(B[p])C[p]=Math.min(A[p],B[p]);
var L='Phân tích ra thừa số nguyên tố:\n'+x+' = '+ws(x,A)+'; '+y+' = '+ws(y,B)+'.\n';
if(Object.keys(C).length){var g=1;for(var p2 in C)g*=Math.pow(+p2,C[p2]);L+='Thừa số nguyên tố chung (lấy số mũ nhỏ nhất): '+ws(g,C)+'.\n'+(ws(g,C)===String(g)?'':'ƯCLN('+x+', '+y+') = '+ws(g,C)+' = '+g+'.\n');}
else L+='Hai số không có thừa số nguyên tố chung nên ƯCLN('+x+', '+y+') = 1 (hai số nguyên tố cùng nhau).\n';
return L+'Vậy ƯCLN('+x+', '+y+') = '+a+'.';};

LG['t6_xacsuat']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/đồng xu\s*(\d+)\s*lần[^\d]*(\d+)\s*lần/);
if(!m)return 'Xác suất thực nghiệm = số lần sự kiện xảy ra : tổng số lần thực hiện.\nĐáp số: '+a+'.';
var n=+m[1],k=+m[2];var g=function(x,y){while(y){var t=y;y=x%y;x=t;}return x;},d=g(k,n);
return 'Xác suất thực nghiệm của biến cố = (số lần biến cố xảy ra) : (tổng số lần thực hiện).\nXác suất thực nghiệm của biến cố "xuất hiện mặt ngửa" là: '+k+'/'+n+(d>1?' = '+(k/d)+'/'+(n/d):'')+'.\nĐổi ra tỉ số phần trăm: '+(k/d)+'/'+(n/d)+' = '+(k/d)+' : '+(n/d)+' × 100% = '+Math.round(k*100/n)+'%.\nĐáp số: '+a+'.';};

LG['t7_bddoan']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/:\s*([\d°,\s]+)\./),v=m?m[1].split(',').map(function(s){return parseInt(s,10);}).filter(function(x){return !isNaN(x);}):[];
  var d=q.match(/ngày\s*(\d+)\s*sang ngày\s*(\d+)/);
  if(!d||v.length<5)return 'Đọc trên biểu đồ nhiệt độ của hai ngày, lấy hiệu hai giá trị để biết nhiệt độ tăng hay giảm bao nhiêu.\nVậy nhiệt độ: '+a+'.';
  var i=+d[1],j=+d[2],x=v[i-1],y=v[j-1],h=y-x;
  var s='Đọc trên biểu đồ: ngày '+i+' là '+x+'°, ngày '+j+' là '+y+'°.\n';
  if(h>=0)s+='Vì '+y+' > '+x+' nên nhiệt độ tăng: '+y+' − '+x+' = '+h+' (°).\n';
  else s+='Vì '+y+' < '+x+' nên nhiệt độ giảm: '+x+' − '+y+' = '+(-h)+' (°).\n';
  if(h===0)s='Đọc trên biểu đồ: ngày '+i+' là '+x+'°, ngày '+j+' là '+y+'°.\nHai giá trị bằng nhau: '+y+' − '+x+' = 0 (°), nhiệt độ không thay đổi.\n';
  return s+'Vậy từ ngày '+i+' sang ngày '+j+', nhiệt độ: '+a+'.';
};
LG['t7_bdquat']=function(it){
  var q=String(it.q),a=String(it.a),m;
  if((m=q.match(/chiếm\s*(\d+)%\s*của tổng\s*(\d+)/))){
    var p=+m[1],n=+m[2];
    return 'Số học sinh của loại đó bằng '+p+'% của '+n+'.\nTa có: '+n+' × '+p+'% = '+n+' × '+p+' : 100 = '+(n*p/100)+' (học sinh).\nVậy loại đó có '+a+' học sinh.';
  }
  if((m=q.match(/(\d+)%/))){
    var p2=+m[1];
    return 'Cả hình tròn (100%) ứng với 360°.\nHình quạt ứng với '+p2+'% có số đo cung: 360° × '+p2+'% = 360° × '+p2+' : 100 = '+(360*p2/100)+'°.\nVậy số đo cung bằng '+a+'.';
  }
  return 'Cả hình tròn ứng với 100% và 360°; lấy tỉ lệ phần trăm nhân với tổng tương ứng.\nĐáp án: '+a+'.';
};
LG['t7_bdt_tg']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*cm\s*và\s*(\d+)\s*cm/);
  if(!m)return 'Theo bất đẳng thức tam giác, mỗi cạnh lớn hơn hiệu và nhỏ hơn tổng hai cạnh còn lại.\nĐáp án: '+a+'.';
  var x=+m[1],y=+m[2],lo=Math.abs(x-y),hi=x+y,big=Math.max(x,y),sm=Math.min(x,y);
  return 'Gọi độ dài cạnh thứ ba là c (cm). Theo bất đẳng thức tam giác:\n'+big+' − '+sm+' < c < '+big+' + '+sm+', tức là '+lo+' < c < '+hi+'.\nTrong các độ dài đã cho, chỉ có '+a+' thỏa mãn '+lo+' < '+a+' < '+hi+'.\nVậy cạnh thứ ba có thể là '+a+' cm.';
};
LG['t7_biencolam']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/"([^"]+)"|“([^”]+)”/),e=m?(m[1]||m[2]):'';
  var head=e?'Xét biến cố "'+e+'".\n':'';
  var al=a.toLowerCase(),ly;
  if(al.indexOf('chắc chắn')>=0)ly='Biến cố này luôn xảy ra (ta biết trước chắc chắn nó xảy ra) nên là biến cố chắc chắn.';
  else if(al.indexOf('không thể')>=0)ly='Biến cố này không bao giờ xảy ra nên là biến cố không thể.';
  else ly='Biến cố này có thể xảy ra, cũng có thể không xảy ra; ta không biết trước được nên là biến cố ngẫu nhiên.';
  return head+ly+'\nVậy đây là biến cố '+a+'.';
};
LG['t7_c.bachai']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/√\s*(\d+)/)||q.match(/của\s*(\d+)/);
  if(!m)return 'Căn bậc hai số học của a (a ≥ 0) là số x ≥ 0 sao cho x² = a.\nĐáp án: '+a+'.';
  var n=+m[1];
  return 'Căn bậc hai số học của '+n+' là số không âm x sao cho x² = '+n+'.\nVì '+a+' ≥ 0 và '+a+'² = '+a+' · '+a+' = '+n+' nên √'+n+' = '+a+'.\nVậy kết quả là '+a+'.';
};
LG['t7_chiada1']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/\((\d+)x³\s*\+\s*(\d+)x²\)\s*:\s*\((\d+)x\)/);
  if(!m)return 'Muốn chia đa thức cho đơn thức, ta chia từng hạng tử của đa thức cho đơn thức rồi cộng các kết quả.\nKết quả: '+a+'.';
  var p=+m[1],r=+m[2],c=+m[3],k1=p/c,k2=r/c;
  var t1=(k1===1?'':k1)+'x²',t2=(k2===1?'':k2)+'x';
  return 'Muốn chia đa thức cho đơn thức, ta chia từng hạng tử của đa thức cho đơn thức rồi cộng các kết quả.\n('+p+'x³ + '+r+'x²) : ('+c+'x) = '+p+'x³ : '+c+'x + '+r+'x² : '+c+'x\n= ('+p+' : '+c+')x³⁻¹ + ('+r+' : '+c+')x²⁻¹\n= '+t1+' + '+t2+'.\nVậy kết quả là '+a+'.';
};
LG['t7_chiati']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/Chia\s*(\d+)\s*(.+?)\s*cho\s*(.+?)\s*và\s*(.+?)\s*theo tỉ lệ\s*(\d+)\s*:\s*(\d+)/);
  if(!m)return 'Gọi số phần của mỗi người là x, y; áp dụng tính chất dãy tỉ số bằng nhau.\nĐáp số: '+a+'.';
  var T=+m[1],dv=m[2],A=m[3],B=m[4],p=+m[5],r=+m[6],k=T/(p+r);
  var un=(dv.split(/\s+/)[0])||'';
  return 'Gọi số '+dv+' của '+A+' và '+B+' lần lượt là x, y ('+un+').\nTheo đề bài: x/'+p+' = y/'+r+' và x + y = '+T+'.\nÁp dụng tính chất dãy tỉ số bằng nhau:\nx/'+p+' = y/'+r+' = (x + y)/('+p+' + '+r+') = '+T+'/'+(p+r)+' = '+k+'.\nSuy ra x = '+p+' · '+k+' = '+(p*k)+'; y = '+r+' · '+k+' = '+(r*k)+'.\nVậy '+a+'.';
};
LG['t7_congda']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/\((\d+)x\s*\+\s*(\d+)\)\s*\+\s*\((\d+)x\s*\+\s*(\d+)\)/);
  if(!m)return 'Bỏ dấu ngoặc, nhóm các hạng tử cùng bậc (đồng dạng) rồi thu gọn.\nKết quả: '+a+'.';
  var x1=+m[1],y1=+m[2],x2=+m[3],y2=+m[4];
  return 'Bỏ dấu ngoặc (trước ngoặc là dấu +, giữ nguyên dấu các hạng tử), rồi nhóm các hạng tử cùng bậc:\n('+x1+'x + '+y1+') + ('+x2+'x + '+y2+') = '+x1+'x + '+y1+' + '+x2+'x + '+y2+'\n= ('+x1+'x + '+x2+'x) + ('+y1+' + '+y2+')\n= '+(x1+x2)+'x + '+(y1+y2)+'.\nVậy kết quả là '+a+'.';
};
LG['t7_conghuuti']=function(it){
  var q=String(it.q),a=String(it.a);
  function g(x,y){x=Math.abs(x);y=Math.abs(y);while(y){var t=x%y;x=y;y=t;}return x||1;}
  function P(s){var m=s.match(/^(-?\d+)(?:\/(\d+))?$/);return m?[+m[1],m[2]?+m[2]:1]:null;}
  function F(n,d){if(d<0){n=-n;d=-d;}var k=g(n,d);n/=k;d/=k;return d===1?String(n):n+'/'+d;}
  function W(n,d){var s=d===1?String(n):n+'/'+d;return n<0?'('+s+')':s;}
  var m=q.match(/Tính:\s*(-?\d+(?:\/\d+)?)\s*([+–−-])\s*(-?\d+(?:\/\d+)?)/);
  if(!m)return 'Viết các số hữu tỉ dưới dạng phân số cùng mẫu dương rồi cộng (trừ) các tử, giữ nguyên mẫu.\nKết quả: '+a+'.';
  var A=P(m[1]),B=P(m[3]),tru=m[2]!=='+';
  if(!A||!B)return 'Quy đồng mẫu rồi cộng (trừ) các tử số.\nKết quả: '+a+'.';
  var L=A[1]*B[1]/g(A[1],B[1]),na=A[0]*L/A[1],nb=B[0]*L/B[1],r=tru?na-nb:na+nb;
  var op=tru?' − ':' + ';
  var s='Ta có: '+W(A[0],A[1])+op+W(B[0],B[1]);
  if(L===1){s+=' = '+r+'.';}
  else{
    s+='\nQuy đồng mẫu (mẫu chung '+L+'):\n= '+W(na,L)+op+W(nb,L);
    s+='\n= ('+na+op+(nb<0?'('+nb+')':nb)+')/'+L+' = '+r+'/'+L;
    var fr=F(r,L);if(fr!==r+'/'+L)s+=' = '+fr+' (rút gọn)';
    s+='.';
  }
  return s+'\nVậy kết quả là '+a+'.';
};
LG['t7_ddtsongsong']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/bằng\s*(\d+)°/),v=m?m[1]+'°':a;
  if(/so le/.test(q))return 'Vì a // b nên hai góc so le trong bằng nhau (tính chất hai đường thẳng song song).\nDo đó góc so le trong với góc '+v+' cũng bằng '+v+'.\nVậy góc cần tìm bằng '+a+'.';
  return 'Vì a // b nên hai góc đồng vị bằng nhau (tính chất hai đường thẳng song song).\nDo đó góc đồng vị với góc '+v+' cũng bằng '+v+'.\nVậy góc cần tìm bằng '+a+'.';
};
LG['t7_dinhli']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/góc A\s*=\s*(\d+)°,\s*góc B\s*=\s*(\d+)°/);
  if(!m)return 'Góc ngoài của tam giác bằng tổng hai góc trong không kề với nó.\nĐáp án: '+a+'.';
  var A=+m[1],B=+m[2];
  return 'Góc ngoài tại đỉnh C không kề với góc A và góc B.\nTheo tính chất góc ngoài của tam giác: góc ngoài tại C = góc A + góc B\n= '+A+'° + '+B+'° = '+(A+B)+'°.\nVậy góc ngoài tại đỉnh C bằng '+a+'.';
};
LG['t7_dongquy']=function(it){
  var q=String(it.q),a=String(it.a),s;
  if(/phân giác/.test(q))s='Ba đường phân giác của tam giác cùng đi qua một điểm. Mỗi điểm nằm trên tia phân giác của một góc thì cách đều hai cạnh của góc đó.\nNên giao điểm ba đường phân giác cách đều ba cạnh của tam giác.';
  else if(/trung tuyến/.test(q))s='Ba đường trung tuyến của tam giác cùng đi qua một điểm, điểm đó gọi là trọng tâm của tam giác.\nTrọng tâm cách mỗi đỉnh một khoảng bằng 2/3 độ dài đường trung tuyến đi qua đỉnh ấy.';
  else if(/trung trực/.test(q))s='Ba đường trung trực của tam giác cùng đi qua một điểm. Mỗi điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.\nNên giao điểm ba đường trung trực cách đều ba đỉnh của tam giác.';
  else if(/đường cao/.test(q))s='Ba đường cao của tam giác cùng đi qua một điểm, điểm đó gọi là trực tâm của tam giác.';
  else s='Nhớ lại tính chất ba đường đồng quy của tam giác.';
  return s+'\nVậy giao điểm đó '+a+'.';
};
LG['t7_duongxien']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/là\s*([\d\s,cm]+?)\.\s*Đường/);
  var v=m?(m[1].match(/\d+/g)||[]).map(Number):[];
  var s='Gọi H là chân đường vuông góc kẻ từ A đến d. Với hai đường xiên AB, AC (B, C cùng phía với H) mà HB < HC thì B nằm giữa H và C, góc ABC là góc ngoài của tam giác vuông AHB nên là góc tù; trong tam giác ABC, cạnh AC đối diện góc tù nên AC > AB.\nDo đó: đường xiên nào có hình chiếu nhỏ hơn thì ngắn hơn.\n';
  if(v.length){var mn=Math.min.apply(null,v);s+='So sánh các hình chiếu: '+v.slice().sort(function(x,y){return x-y;}).join(' cm < ')+' cm, hình chiếu nhỏ nhất là '+mn+' cm.\n';}
  return s+'Vậy đường xiên ngắn nhất là: '+a+'.';
};
LG['t7_goccanh']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/góc A\s*=\s*(\d+)°,\s*góc B\s*=\s*(\d+)°,\s*góc C\s*=\s*(\d+)°/);
  var s='Trong một tam giác, cạnh đối diện với góc lớn hơn là cạnh lớn hơn.\n';
  if(m){
    var g=[['A',+m[1]],['B',+m[2]],['C',+m[3]]].sort(function(x,y){return y[1]-x[1];}),c={A:'BC',B:'CA',C:'AB'};
    s+='So sánh các góc: góc '+g[0][0]+' = '+g[0][1]+'° là góc lớn nhất (vì '+g[0][1]+'° > '+g[1][1]+'° > '+g[2][1]+'°).\nCạnh đối diện với góc '+g[0][0]+' là cạnh '+c[g[0][0]]+'.\n';
  }
  return s+'Vậy cạnh lớn nhất là: '+a+'.';
};
LG['t7_gocdb']=function(it){
  var q=String(it.q),a=String(it.a),m=q.match(/(\d+)°/),v=m?+m[1]:NaN;
  if(/đối đỉnh/.test(q))return 'Hai góc đối đỉnh thì bằng nhau.\nDo đó góc đối đỉnh với góc '+v+'° cũng bằng '+v+'°.\nVậy số đo góc đó là '+a+'.';
  if(/kề bù/.test(q))return 'Hai góc kề bù có tổng số đo bằng 180°.\nSố đo góc còn lại là: 180° − '+v+'° = '+(180-v)+'°.\nVậy góc còn lại bằng '+a+'.';
  if(/phân giác/.test(q)){
    var mm=q.match(/góc\s+(\w+)\s+có số đo/),gn=mm?mm[1]:'xOy';
    var tg=q.match(/Tính số đo góc\s+(\w+)/);
    return 'Vì Oz là tia phân giác của góc '+gn+' nên tia Oz chia góc '+gn+' thành hai góc bằng nhau.\nDo đó góc '+(tg?tg[1]:'xOz')+' = '+v+'° : 2 = '+(v/2)+'°.\nVậy góc '+(tg?tg[1]:'xOz')+' bằng '+a+'.';
  }
  return 'Áp dụng tính chất các góc ở vị trí đặc biệt.\nĐáp án: '+a+'.';
};

LG['t7_gocsong']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/(\d+)\s*°/);const d=m?m[1]:a.replace('°','');return 'Hai đường thẳng song song bị cắt bởi một đường thẳng thì hai góc so le trong bằng nhau.\nMột góc so le trong bằng '+d+'° nên góc so le trong còn lại cũng bằng '+d+'°.\nVậy góc so le trong còn lại có số đo '+a+'.'};
LG['t7_gtbt']=function(it){const q=String(it.q||''),a=String(it.a||'');const N='\\(?\\s*([-–−]?\\d+)\\s*\\)?';const m=q.match(new RegExp('(\\d+)x\\s*\\+\\s*'+N+'\\s*tại\\s*x\\s*=\\s*'+N));if(!m)return 'Thay giá trị của x vào biểu thức rồi thực hiện phép tính (nhân trước, cộng sau).\nVậy giá trị của biểu thức là '+a+'.';const n=s=>+String(s).replace(/[–−]/g,'-');const A=n(m[1]),B=n(m[2]),X=n(m[3]);const sh=v=>v<0?'('+v+')':String(v);const p=A*X,v=p+B;return 'Thay x = '+X+' vào biểu thức '+A+'x + '+sh(B)+', ta được:\n'+A+' × '+sh(X)+' + '+sh(B)+' = '+p+' + '+sh(B)+' = '+v+'.\nVậy giá trị của biểu thức tại x = '+X+' là '+a+'.'};
LG['t7_gttd']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/\|\s*([-–−]?\d+)\s*\|/);if(!m)return 'Giá trị tuyệt đối của một số là khoảng cách từ điểm biểu diễn số đó đến điểm 0 trên trục số.\nVậy kết quả là '+a+'.';const x=+m[1].replace(/[–−]/g,'-');let L='Giá trị tuyệt đối của một số là khoảng cách từ điểm biểu diễn số đó đến điểm 0 trên trục số, nên luôn không âm.\n';if(x<0)L+='Vì '+x+' < 0 nên |'+x+'| = −('+x+') = '+(-x)+'.';else if(x>0)L+='Vì '+x+' > 0 nên |'+x+'| = '+x+'.';else L+='|0| = 0.';return L+'\nVậy |'+x+'| = '+a+'.'};
LG['t7_hinhhop']=function(it){const q=String(it.q||''),a=String(it.a||'');let m=q.match(/ba kích thước\s*(\d+)\s*cm,\s*(\d+)\s*cm,\s*(\d+)\s*cm/);if(m){const x=+m[1],y=+m[2],z=+m[3];return 'Thể tích hình hộp chữ nhật: V = chiều dài × chiều rộng × chiều cao.\nV = '+x+' × '+y+' × '+z+' = '+(x*y*z)+' (cm³).\nĐáp số: '+a+'.'}m=q.match(/cạnh\s*(\d+)\s*cm/);if(m){const c=+m[1];if(/diện tích/i.test(q))return 'Diện tích một mặt của hình lập phương: '+c+' × '+c+' = '+(c*c)+' (cm²).\nDiện tích toàn phần (6 mặt): S = 6 × '+(c*c)+' = '+(6*c*c)+' (cm²).\nĐáp số: '+a+'.';return 'Thể tích hình lập phương: V = cạnh × cạnh × cạnh.\nV = '+c+' × '+c+' × '+c+' = '+(c*c*c)+' (cm³).\nĐáp số: '+a+'.'}return 'Áp dụng công thức: thể tích hình hộp chữ nhật V = a × b × c; hình lập phương V = a × a × a, diện tích toàn phần S = 6 × a × a.\nĐáp số: '+a+'.'};
LG['t7_lamtron7']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/số\s*([\d\s]+(?:,\d+)?)\s*đến hàng\s*(phần mười|phần trăm)/);if(!m)return 'Xét chữ số ngay bên phải hàng làm tròn: nếu nhỏ hơn 5 thì giữ nguyên, nếu lớn hơn hoặc bằng 5 thì cộng thêm 1 vào chữ số hàng làm tròn, rồi bỏ các chữ số phía sau.\nVậy kết quả là '+a+'.';const s=m[1].replace(/\s/g,''),h=m[2],k=h==='phần mười'?1:2;const parts=s.split(','),d=parts[1]||'';if(d.length<=k)return (d.length?'Số '+s+' có '+d.length+' chữ số ở phần thập phân, không có chữ số nào sau hàng '+h+'.':'Số '+s+' là số nguyên, không có chữ số nào ở phần thập phân.')+'\nNên khi làm tròn đến hàng '+h+', số vẫn giữ nguyên.\nVậy '+s+' ≈ '+a+'.';const hn=k===1?'phần trăm':'phần nghìn';const cur=d[k-1],nx=+d[k];let L='Chữ số hàng '+h+' của '+s+' là '+cur+'; chữ số ngay bên phải nó (hàng '+hn+') là '+nx+'.\n';if(nx>=5)L+='Vì '+nx+' ≥ 5 nên ta cộng thêm 1 vào chữ số hàng '+h+' và bỏ các chữ số phía sau'+(cur==='9'?' (9 + 1 = 10, viết 0, nhớ 1 sang chữ số bên trái).':'.');else L+='Vì '+nx+' < 5 nên ta giữ nguyên chữ số hàng '+h+' và bỏ các chữ số phía sau.';const p=10**d.length,iv=+parts[0]*p+ +d.padEnd(d.length,'0');const step=10**(d.length-k);const r=Math.round(iv/step);const ip=Math.floor(r/10**k),dp=String(r%10**k).padStart(k,'0');const raw=ip+','+dp;const tr=dp.replace(/0+$/,'');const nice=ip+(tr?','+tr:'');L+='\nKết quả: '+raw+(nice!==raw?' = '+nice:'')+'.';return L+'\nVậy '+s+' ≈ '+a+'.'};
LG['t7_langtru']=function(it){const q=String(it.q||''),a=String(it.a||'');let m=q.match(/hai cạnh góc vuông\s*(\d+)\s*cm\s*và\s*(\d+)\s*cm,\s*chiều cao lăng trụ\s*(\d+)\s*cm/);if(m){const x=+m[1],y=+m[2],h=+m[3],S=x*y/2;return 'Thể tích hình lăng trụ đứng: V = S đáy × h.\nDiện tích đáy (tam giác vuông): S = '+x+' × '+y+' : 2 = '+S+' (cm²).\nThể tích: V = '+S+' × '+h+' = '+(S*h)+' (cm³).\nĐáp số: '+a+'.'}m=q.match(/chữ nhật\s*(\d+)\s*cm\s*×\s*(\d+)\s*cm,\s*chiều cao\s*(\d+)\s*cm/);if(m){const x=+m[1],y=+m[2],h=+m[3],S=x*y;return 'Thể tích hình lăng trụ đứng: V = S đáy × h.\nDiện tích đáy (hình chữ nhật): S = '+x+' × '+y+' = '+S+' (cm²).\nThể tích: V = '+S+' × '+h+' = '+(S*h)+' (cm³).\nĐáp số: '+a+'.'}return 'Thể tích hình lăng trụ đứng: V = S đáy × chiều cao.\nĐáp số: '+a+'.'};
LG['t7_luythuahuuti']=function(it){const q=String(it.q||''),a=String(it.a||'');const SU='⁰¹²³⁴⁵⁶⁷⁸⁹';const un=s=>+s.split('').map(c=>SU.indexOf(c)).join('');const su=n=>String(n).split('').map(c=>SU[+c]).join('');let m=q.match(/(\d+)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)\s*×\s*(\d+)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/);if(m&&m[1]===m[3]){const b=m[1],x=un(m[2]),y=un(m[4]);return 'Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ: aᵐ × aⁿ = aᵐ⁺ⁿ.\n'+b+su(x)+' × '+b+su(y)+' = '+b+su(x)+'⁺'+su(y)+' = '+b+su(x+y)+'.\nVậy kết quả là '+a+'.'}m=q.match(/\(\s*(\d+)\s*\/\s*(\d+)\s*\)([⁰¹²³⁴⁵⁶⁷⁸⁹]+)/);if(m){const t=+m[1],d=+m[2],n=un(m[3]);return 'Lũy thừa của một thương: (a/b)ⁿ = aⁿ/bⁿ.\n('+t+'/'+d+')'+su(n)+' = '+t+su(n)+'/'+d+su(n)+' = '+(t**n)+'/'+(d**n)+'.\nVậy kết quả là '+a+'.'}return 'Áp dụng quy tắc: aᵐ × aⁿ = aᵐ⁺ⁿ; (a/b)ⁿ = aⁿ/bⁿ.\nVậy kết quả là '+a+'.'};
LG['t7_nc1']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/x\s*[–−-]\s*(\d+)\s*\/\s*(\d+)\s*=\s*(\d+)/);if(!m)return 'Muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ.\nVậy '+a+'.';const t=+m[1],d=+m[2],b=+m[3];const g=(x,y)=>y?g(y,x%y):x;const n=b*d+t,k=g(n,d);const r=d/k===1?String(n/k):(n/k)+'/'+(d/k);let L='x = '+b+' + '+t+'/'+d+' (muốn tìm số bị trừ, ta lấy hiệu cộng với số trừ)\nx = '+(b*d)+'/'+d+' + '+t+'/'+d+'\nx = '+n+'/'+d;if(k>1)L+=' = '+r;return L+'\nVậy '+a+'.'};
LG['t7_nc2']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/tỉ lệ với\s*(\d+)\s*và\s*(\d+).*?có\s*([\d\s]+?)\s*học sinh/);if(!m)return 'Gọi số học sinh nam, nữ là x, y. Áp dụng tính chất dãy tỉ số bằng nhau để tìm x.\nĐáp số: '+a+'.';const p=+m[1],r=+m[2],N=+m[3].replace(/\s/g,''),u=N/(p+r);return 'Gọi số học sinh nam và nữ lần lượt là x và y (học sinh).\nTheo đề bài: x/'+p+' = y/'+r+' và x + y = '+N+'.\nÁp dụng tính chất dãy tỉ số bằng nhau:\nx/'+p+' = y/'+r+' = (x + y)/('+p+' + '+r+') = '+N+'/'+(p+r)+' = '+u+'.\nSuy ra x = '+p+' × '+u+' = '+(p*u)+'.\nVậy số học sinh nam là '+(p*u)+' học sinh.\nĐáp số: '+a+'.'};
LG['t7_nghiemda']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/=\s*(\d+)x\s*([+–−-])\s*(\d+)/);if(!m)return 'Cho đa thức bằng 0 rồi tìm x.\nVậy nghiệm của đa thức là '+a+'.';const A=+m[1],B=(m[2]==='+'?1:-1)*+m[3];const x=-B/A;const sb=B<0?' – '+(-B):' + '+B;return 'Cho P(x) = 0, ta có:\n'+A+'x'+sb+' = 0\n'+A+'x = '+(-B)+'\nx = '+(-B)+' : '+A+'\nx = '+x+'\nVậy nghiệm của đa thức P(x) là '+a+'.'};
LG['t7_nhanda1']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/\(x\s*([+–−-])\s*(\d+)\)\s*\(x\s*([+–−-])\s*(\d+)\)/);if(!m)return 'Nhân mỗi hạng tử của đa thức này với từng hạng tử của đa thức kia rồi cộng các kết quả, thu gọn.\nVậy kết quả là '+a+'.';const sg=s=>s==='+'?1:-1;const A=sg(m[1])*+m[2],B=sg(m[3])*+m[4];const T=(k,v,first)=>{const av=Math.abs(k);const body=v==='x'?(av===1?'':av)+'x':String(av);return first?(k<0?'–':'')+body:(k<0?' – ':' + ')+body};const P=terms=>{let o='';terms.forEach(([k,v])=>{if(k===0)return;if(v==='x²'){o+=(o?(k<0?' – ':' + '):(k<0?'–':''))+(Math.abs(k)===1?'':Math.abs(k))+'x²';return}o+=T(k,v,o==='')});return o||'0'};const sa=A<0?'– '+(-A):'+ '+A,sb=B<0?'– '+(-B):'+ '+B;const cx=v=>Math.abs(v)===1?'':Math.abs(v);const step='x² '+(B<0?'– '+cx(B):'+ '+cx(B))+'x '+(A<0?'– '+cx(A):'+ '+cx(A))+'x '+(A*B<0?'– '+(-A*B):'+ '+A*B);let L='Nhân mỗi hạng tử của đa thức thứ nhất với từng hạng tử của đa thức thứ hai rồi cộng các kết quả:\n(x '+sa+')(x '+sb+') = x × x + x × '+(B<0?'('+B+')':B)+' + '+(A<0?'('+A+')':A)+' × x + '+(A<0?'('+A+')':A)+' × '+(B<0?'('+B+')':B)+'\n= '+step+'\n= '+P([[1,'x²'],[A+B,'x'],[A*B,'']])+' (thu gọn các hạng tử đồng dạng).';return L+'\nVậy (x '+sa+')(x '+sb+') = '+a+'.'};
LG['t7_nhanhuuti']=function(it){const q=String(it.q||''),a=String(it.a||'');const F='([-–−]?\\d+)(?:\\s*\\/\\s*(\\d+))?';const m=q.match(new RegExp(F+'\\s*([×:])\\s*'+F));if(!m)return 'Nhân hai phân số: nhân tử với tử, mẫu với mẫu. Chia cho một số hữu tỉ khác 0: nhân với số nghịch đảo của nó.\nVậy kết quả là '+a+'.';const n=s=>+String(s).replace(/[–−]/g,'-');let t1=n(m[1]),d1=m[2]?+m[2]:1,op=m[3],t2=n(m[4]),d2=m[5]?+m[5]:1;const g=(x,y)=>y?g(y,x%y):x;const fs=(t,d)=>{if(d<0){t=-t;d=-d}const k=g(Math.abs(t),d)||1;t/=k;d/=k;return d===1?String(t):t+'/'+d};const w=(t,d)=>(d===1?String(t):t+'/'+d);const pw=(t,d)=>t<0?'('+w(t,d)+')':w(t,d);const pn=x=>x<0?'('+x+')':String(x);let L='';const s1=w(t1,d1),s2=w(t2,d2);if(op===':'){let rt=d2,rd=t2;if(rd<0){rt=-rt;rd=-rd}L='Muốn chia cho một số hữu tỉ khác 0, ta nhân với số nghịch đảo của nó. Số nghịch đảo của '+s2+' là '+w(rt,rd)+'.\n'+s1+' : '+pw(t2,d2)+' = '+s1+' × '+pw(rt,rd)+'\n';t2=rt;d2=rd}else L='Muốn nhân hai phân số, ta nhân tử với tử, mẫu với mẫu.\n'+s1+' × '+pw(t2,d2)+' ';const T=t1*t2,D=d1*d2;const dd=[d1,d2].filter(x=>x!==1);const num=pn(t1)+' × '+pn(t2);L+='= '+(dd.length===0?String(T):(dd.length===1?'('+num+')/'+dd[0]:'('+num+')/('+d1+' × '+d2+')')+' = '+w(T,D));const r=fs(T,D);if(r!==w(T,D))L+=' = '+r+' (rút gọn)';return L+'\nVậy kết quả là '+a+'.'};
LG['t7_sohuuti']=function(it){const q=String(it.q||''),a=String(it.a||'');const n=s=>+String(s).replace(/[–−]/g,'-');let m=q.match(/số đối của số hữu tỉ\s*([-–−]?\d+(?:\/\d+)?)/);if(m){const x=m[1];return 'Số đối của số hữu tỉ a là −a, vì a + (−a) = 0.\nSố đối của '+x+' là '+a+' (vì '+x+' + '+(a[0]==='-'?'('+a+')':a)+' = 0).\nVậy số đối của '+x+' là '+a+'.'}m=q.match(/([-–−]?\d+)(?:\/(\d+))?\s*và\s*([-–−]?\d+)(?:\/(\d+))?/);if(!m)return 'Quy đồng mẫu (mẫu dương) rồi so sánh các tử số.\nKết quả: '+a;const t1=n(m[1]),d1=m[2]?+m[2]:1,t2=n(m[3]),d2=m[4]?+m[4]:1;const w=(t,d)=>d===1?String(t):t+'/'+d;const g=(x,y)=>y?g(y,x%y):x;const M=d1*d2/g(d1,d2);const u1=t1*M/d1,u2=t2*M/d2;const s1=w(t1,d1),s2=w(t2,d2);const c=u1>u2?'>':u1<u2?'<':'=';let L='';const sg=t=>t>0?1:t<0?-1:0;if(sg(t1)!==sg(t2)){const pos=t=>t>0?' > 0':t<0?' < 0':' = 0';L='Số hữu tỉ âm nhỏ hơn 0, số hữu tỉ dương lớn hơn 0.\nTa có '+s1+pos(t1)+' và '+s2+pos(t2)+' nên '+s1+' '+c+' '+s2+'.';return L+'\nVậy '+s1+' '+a+' '+s2+'.'}if(d1===1&&d2===1)L+='So sánh hai số nguyên: '+t1+' '+c+' '+t2+'.';else L+='Quy đồng mẫu số (mẫu chung '+M+'): '+s1+' = '+u1+'/'+M+'; '+s2+' = '+u2+'/'+M+'.\nVì '+u1+' '+c+' '+u2+' nên '+u1+'/'+M+' '+c+' '+u2+'/'+M+'.';return L+'\nVậy '+s1+' '+a+' '+s2+'.'};
LG['t7_stptuanhoan']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/(\d+)\s*\/\s*(\d+)/);const rule='Phân số tối giản với mẫu dương: nếu mẫu không có ước nguyên tố nào khác 2 và 5 thì viết được dưới dạng số thập phân hữu hạn; nếu mẫu có ước nguyên tố khác 2 và 5 thì viết được dưới dạng số thập phân vô hạn tuần hoàn.';if(!m)return rule+'\nVậy phân số đó viết được dưới dạng số thập phân '+a+'.';const t=+m[1],d=+m[2];const fac=[];let x=d;for(let p=2;p<=x;p++)while(x%p===0){fac.push(p);x/=p}const other=[...new Set(fac.filter(p=>p!==2&&p!==5))];const ip=Math.floor(t/d);let r=t%d,dg='',seen={},rep=-1;while(r&&dg.length<30){if(seen[r]!==undefined){rep=seen[r];break}seen[r]=dg.length;r*=10;dg+=Math.floor(r/d);r%=d}const dec=ip+(dg?','+(rep>=0?dg.slice(0,rep)+'('+dg.slice(rep)+')':dg):'');let L=rule+'\nPhân số '+t+'/'+d+' là phân số tối giản, mẫu '+d+(fac.length>1?' = '+fac.join(' × '):' là số nguyên tố')+'.\n';if(other.length)L+='Mẫu có ước nguyên tố '+other.join(', ')+' khác 2 và 5.';else L+='Mẫu không có ước nguyên tố nào khác 2 và 5.';L+='\nThật vậy: '+t+'/'+d+' = '+dec+'.';return L+'\nVậy phân số '+t+'/'+d+' viết được dưới dạng số thập phân '+a+'.'};
LG['t7_tbc7']=function(it){const q=String(it.q||''),a=String(it.a||'');const m=q.match(/:\s*([\d;\s]+)$/);const v=m?m[1].split(';').map(s=>s.trim()).filter(Boolean).map(Number):[];if(!v.length)return 'Số trung bình cộng = tổng các giá trị : số các giá trị.\nVậy số trung bình cộng là '+a+'.';const S=v.reduce((p,c)=>p+c,0),k=v.length;const ex=(S*100)%k===0;let L='Số trung bình cộng = tổng các giá trị : số các giá trị.\nTổng các giá trị: '+v.join(' + ')+' = '+S+'.\nSố các giá trị: '+k+'.\n';if(ex)L+='Số trung bình cộng: '+S+' : '+k+' = '+a+'.';else{const r=Math.floor(S*1000/k);const ip=Math.floor(r/1000),dp=String(r%1000).padStart(3,'0');L+='Số trung bình cộng: '+S+' : '+k+' = '+ip+','+dp+'… ≈ '+a+' (làm tròn đến hàng phần trăm).'}return L+'\nVậy số trung bình cộng của dãy số liệu là '+a+'.'};

LG['t7_tgbangnhau']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/AB\s*=\s*([\d.,]+)\s*cm,\s*BC\s*=\s*([\d.,]+)\s*cm,\s*CA\s*=\s*([\d.,]+)/);var h=(q.match(/cạnh\s+(MN|NP|MP)/)||[])[1];if(!m||!h)return 'Hai tam giác bằng nhau thì các cạnh tương ứng bằng nhau.\nVậy cạnh cần tìm bằng '+a+'.';var t={MN:['AB',m[1]],NP:['BC',m[2]],MP:['CA',m[3]]}[h];return 'Vì ΔABC = ΔMNP nên các cạnh tương ứng bằng nhau: AB = MN, BC = NP, CA = MP.\nCạnh '+h+' tương ứng với cạnh '+t[0]+'.\nDo đó '+h+' = '+t[0]+' = '+t[1]+' cm.\nVậy '+h+' = '+a+'.';};
LG['t7_thcgc']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/góc A\s*=\s*(\d+)°,\s*góc B\s*=\s*(\d+)°/);var h=(q.match(/Tính góc\s+([MNP])/)||[])[1];if(!m||!h)return 'Hai tam giác bằng nhau thì các góc tương ứng bằng nhau.\nVậy góc cần tìm bằng '+a+'.';var A=+m[1],B=+m[2],C=180-A-B;var s='Vì ΔABC = ΔMNP nên các góc tương ứng bằng nhau: góc M = góc A, góc N = góc B, góc P = góc C.\n';if(h==='M')s+='Do đó góc M = góc A = '+A+'°.';else if(h==='N')s+='Do đó góc N = góc B = '+B+'°.';else s+='Trong tam giác ABC, theo định lí tổng ba góc: góc C = 180° − '+A+'° − '+B+'° = '+C+'°.\nDo đó góc P = góc C = '+C+'°.';return s+'\nVậy góc '+h+' = '+a+'.';};
LG['t7_tgvuongbang']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/bằng\s*(\d+)°/);if(!m)return 'Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng 90°).\nVậy góc nhọn còn lại bằng '+a+'.';var x=+m[1];return 'Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng 90°).\nGóc nhọn còn lại = 90° − '+x+'° = '+(90-x)+'°.\nVậy góc nhọn còn lại bằng '+a+'.';};
LG['t7_tgcan']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/góc ở đáy B\s*=\s*(\d+)°/);if(m){var d=+m[1];return 'Tam giác ABC cân tại A nên hai góc ở đáy bằng nhau: góc C = góc B = '+d+'°.\nTheo định lí tổng ba góc trong tam giác: góc A = 180° − 2 × '+d+'° = 180° − '+(2*d)+'° = '+(180-2*d)+'°.\nVậy góc ở đỉnh A = '+a+'.';}m=q.match(/góc ở đỉnh A\s*=\s*(\d+)°/);if(m){var A=+m[1];return 'Tam giác ABC cân tại A nên hai góc ở đáy bằng nhau: góc B = góc C.\nTheo định lí tổng ba góc trong tam giác: góc B + góc C = 180° − '+A+'° = '+(180-A)+'°.\nDo đó góc B = góc C = '+(180-A)+'° : 2 = '+((180-A)/2)+'°.\nVậy mỗi góc ở đáy bằng '+a+'.';}return 'Tam giác cân có hai góc ở đáy bằng nhau; tổng ba góc bằng 180°.\nVậy đáp số: '+a+'.';};
LG['t7_thuthap']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/dãy:\s*([A-Z](?:\s*,\s*[A-Z])*)/);var cat=(q.match(/nhóm\s+([A-Z])\s*\?/)||[])[1];if(!m||!cat)return 'Đếm số lần xuất hiện của nhóm cần tìm trong dãy dữ liệu.\nVậy có '+a+' bạn.';var arr=m[1].split(/\s*,\s*/);var pos=[];arr.forEach(function(x,i){if(x===cat)pos.push(i+1)});return 'Dãy dữ liệu có '+arr.length+' giá trị: '+arr.join(', ')+'.\nĐếm số giá trị "'+cat+'" trong dãy: xuất hiện ở các vị trí thứ '+pos.join(', ')+' → có '+pos.length+' giá trị.\nVậy có '+a+' bạn thuộc nhóm '+cat+'.';};
LG['t7_thutu7']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)\/(\d+)\s*\+\s*(\d+)\/(\d+)\s*×\s*(\d+)/);if(!m)return 'Thực hiện phép nhân trước, phép cộng sau.\nKết quả: '+a+'.';var p=+m[1],c=+m[2],b=+m[3],d=+m[4],k=+m[5];function g(x,y){return y?g(y,x%y):x}function F(t,n){var r=g(Math.abs(t),n)||1;t/=r;n/=r;return n===1?String(t):t+'/'+n}var s='Thứ tự thực hiện: nhân trước, cộng sau.\n';var prod=F(b*k,d);s+=b+'/'+d+' × '+k+' = '+(b*k)+'/'+d+(prod!==(b*k)+'/'+d?' = '+prod:'')+'.\n';var tu=p*d*1,res;if(c===d){var L=p+'/'+c+' + '+(b*k)+'/'+d;res=F(p+b*k,c);s+='Do đó: '+q.replace(/^Tính:\s*/,'')+' = '+L+' = '+(p+b*k)+'/'+c+(res!==(p+b*k)+'/'+c?' = '+res:'')+'.';}else{res=F(p*d+b*k*c,c*d);s+='Quy đồng rồi cộng: '+p+'/'+c+' + '+(b*k)+'/'+d+' = '+res+'.';}return s+'\nVậy kết quả là '+a+'.';};
LG['t7_tilethuc']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/x\s*\/\s*(\d+)\s*=\s*(\d+)\s*\/\s*(\d+)/);if(!m)return 'Từ tỉ lệ thức, áp dụng tính chất: tích ngoại tỉ bằng tích trung tỉ.\nVậy '+a+'.';var b=+m[1],d=+m[2],c=+m[3];return 'Từ x/'+b+' = '+d+'/'+c+', theo tính chất của tỉ lệ thức (tích ngoại tỉ bằng tích trung tỉ):\n'+c+'x = '+b+' × '+d+'\nx = '+b+' × '+d+' : '+c+' = '+(b*d)+' : '+c+' = '+(b*d/c)+'.\nVậy '+a+'.';};
LG['t7_tlnghich']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/^(\d+)\s*công nhân.*?trong\s*(\d+)\s*giờ.*?Hỏi\s*(\d+)\s*công nhân/);if(!m)return 'Số công nhân và thời gian làm xong công việc là hai đại lượng tỉ lệ nghịch.\nĐáp số: '+a+'.';var n1=+m[1],t1=+m[2],n2=+m[3],P=n1*t1;var x=String(P/n2).replace('.',',');return 'Gọi x (giờ) là thời gian '+n2+' công nhân làm xong công việc.\nVì số công nhân và thời gian làm xong công việc là hai đại lượng tỉ lệ nghịch nên:\n'+n2+'x = '+n1+' × '+t1+' = '+P+'\nx = '+P+' : '+n2+' = '+x+' (giờ).\nĐáp số: '+a+'.';};
LG['t7_tlthuan']=function(it){var q=String(it.q),a=String(it.a);function N(s){return +String(s).replace(/[\s.]/g,'')}function f(n){return String(n).replace(/\B(?=(\d{3})+(?!\d))/g,' ')}var m=q.match(/Mua\s*(\d+)\s*kg.*?hết\s*([\d\s.]+?)\s*đồng.*?mua\s*(\d+)\s*kg/);if(!m)return 'Số tiền mua gạo và số ki-lô-gam gạo là hai đại lượng tỉ lệ thuận.\nĐáp số: '+a+'.';var k1=+m[1],T=N(m[2]),k2=+m[3];var y=T*k2/k1;return 'Gọi y (đồng) là số tiền mua '+k2+' kg gạo.\nVì số tiền và số ki-lô-gam gạo (cùng loại) là hai đại lượng tỉ lệ thuận nên:\ny/'+k2+' = '+f(T)+'/'+k1+'\ny = '+f(T)+' × '+k2+' : '+k1+' = '+f(y)+' (đồng).\nĐáp số: '+a+'.';};
LG['t7_tongtamgiac']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/góc A\s*=\s*(\d+)°,\s*góc B\s*=\s*(\d+)°/);if(!m)return 'Tổng ba góc trong một tam giác bằng 180°.\nVậy góc C = '+a+'.';var A=+m[1],B=+m[2];return 'Theo định lí tổng ba góc trong tam giác: góc A + góc B + góc C = 180°.\nSuy ra góc C = 180° − (góc A + góc B) = 180° − ('+A+'° + '+B+'°) = 180° − '+(A+B)+'° = '+(180-A-B)+'°.\nVậy góc C = '+a+'.';};
LG['t7_trongtam']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/AM\s*=\s*(\d+)\s*cm.*Tính AG/);if(m){var am=+m[1];return 'G là trọng tâm tam giác ABC nên G nằm trên trung tuyến AM và AG = 2/3 AM.\nAG = 2/3 × '+am+' = '+(am*2/3)+' (cm).\nVậy AG = '+a+'.';}m=q.match(/AG\s*=\s*(\d+)\s*cm.*Tính GM/);if(m){var ag=+m[1];return 'G là trọng tâm tam giác ABC nên AG = 2/3 AM, GM = 1/3 AM, do đó GM = 1/2 AG.\nGM = '+ag+' : 2 = '+(ag/2)+' (cm).\nVậy GM = '+a+'.';}return 'Trọng tâm G cách mỗi đỉnh một khoảng bằng 2/3 độ dài đường trung tuyến đi qua đỉnh đó.\nĐáp số: '+a+'.';};
LG['t7_xacsuat7']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/từ\s*1\s*đến\s*(\d+).*?không vượt quá\s*(\d+)/);if(!m)return 'Xác suất = số kết quả thuận lợi : số kết quả có thể.\nVậy xác suất là '+a+'.';var n=+m[1],k=+m[2];var ds=[];for(var i=1;i<=k;i++)ds.push(i);function g(x,y){return y?g(y,x%y):x}var r=g(k,n);var rg=r>1?' = '+(k/r)+'/'+(n/r):'';return 'Lấy ngẫu nhiên 1 quả trong '+n+' quả bóng giống nhau nên có '+n+' kết quả có thể xảy ra, các kết quả này đồng khả năng.\nCác kết quả thuận lợi (số không vượt quá '+k+'): '+ds.join(', ')+' → có '+k+' kết quả.\nXác suất cần tìm là '+k+'/'+n+rg+'.\nVậy xác suất bằng '+a+'.';};
LG['t7_thudagonda']=function(it){var q=String(it.q),a=String(it.a);var m=q.match(/(\d+)x²\s*\+\s*(\d+)x\s*[–−-]\s*(\d+)x²\s*\+\s*(\d+)x/);if(!m)return 'Nhóm các hạng tử cùng bậc rồi cộng (trừ) các hệ số.\nKết quả: '+a+'.';var p=+m[1],b=+m[2],e=+m[3],c=+m[4];return 'Nhóm các hạng tử cùng bậc (đơn thức đồng dạng):\n'+q.replace(/^Thu gọn:\s*/,'')+' = ('+p+'x² − '+e+'x²) + ('+b+'x + '+c+'x)\n= ('+p+' − '+e+')x² + ('+b+' + '+c+')x\n= '+a+'.\nVậy đa thức thu gọn là '+a+'.';};

LG['t8_biendiendl']=function(it){var q=it.q||'',m,parts=[],re=/([A-ZĐÔÁÀa-zà-ỹ][^:,.]*?):\s*(\d+)/g;while((m=re.exec(q))){parts.push([m[1].trim(),+m[2]]);}
if(!parts.length)return 'Cộng số học sinh của tất cả các nhóm trong bảng.\nVậy tổng số học sinh được khảo sát là '+it.a+'.';
var s=parts.reduce(function(p,c){return p+c[1]},0);
return 'Tổng số học sinh được khảo sát bằng tổng số học sinh của các nhóm trong bảng:\n'+parts.map(function(p){return p[1]}).join(' + ')+' = '+s+'.\nVậy tổng số học sinh được khảo sát là '+it.a+'.';};

LG['t8_chiadonthuc']=function(it){var q=it.q||'';var m=q.match(/\((.+)\)\s*:\s*\((\d*)x\)/);
if(!m)return 'Muốn chia đa thức cho đơn thức, ta chia từng hạng tử của đa thức cho đơn thức rồi cộng các kết quả.\nKết quả: '+it.a+'.';
var d=m[2]===''?1:+m[2];var sup={'¹':1,'²':2,'³':3,'⁴':4,'⁵':5};var terms=m[1].split('+').map(function(t){return t.trim()});
var tp=function(c,e){var cs=c===1?'':String(c);return e===0?String(c):e===1?cs+'x':cs+'x'+['','','²','³','⁴','⁵'][e];};
var lines=terms.map(function(t){var mm=t.match(/^(\d*)x([¹²³⁴⁵]?)$/);if(!mm)return t+' : '+d+'x';var c=mm[1]===''?1:+mm[1],e=mm[2]?sup[mm[2]]:1;return t+' : '+(d===1?'':d)+'x = '+tp(c/d,e-1);});
return 'Chia từng hạng tử của đa thức cho đơn thức '+(d===1?'':d)+'x (chia hệ số cho hệ số, lũy thừa của x cho lũy thừa của x: xᵐ : xⁿ = xᵐ⁻ⁿ):\n'+lines.join('\n')+'\nCộng các kết quả lại: ('+m[1]+') : ('+(d===1?'':d)+'x) = '+it.a+'.\nVậy kết quả là '+it.a+'.';};

LG['t8_chop']=function(it){var q=it.q||'';var m=q.match(/cạnh đáy\s*(\d+)\s*cm,\s*chiều cao\s*(\d+)\s*cm/);
if(!m)return 'Áp dụng công thức V = 1/3 × S_đáy × h.\nVậy V = '+it.a+'.';
var a=+m[1],h=+m[2],S=a*a,p=S*h;var ex=p%3===0;
return 'Đáy là hình vuông cạnh '+a+' cm nên diện tích đáy: S_đáy = '+a+' × '+a+' = '+S+' (cm²).\nThể tích hình chóp: V = 1/3 × S_đáy × h = 1/3 × '+S+' × '+h+' = '+p+' : 3 '+(ex?'= ':'≈ ')+it.a.replace(/\s*cm³/,'')+' (cm³).\nVậy thể tích hình chóp là '+it.a+(ex?'.':' (làm tròn đến hàng phần trăm).');};

LG['t8_congphanthuc']=function(it){var q=it.q||'';var m=q.match(/\(?(\d+)x\)?\/\((x[+-]\d+)\)\s*([+–-])\s*(\d+)x\/\((x[+-]\d+)\)/);
if(!m)return 'Muốn cộng (trừ) hai phân thức cùng mẫu, ta cộng (trừ) các tử thức và giữ nguyên mẫu thức.\nKết quả: '+it.a+'.';
var a=+m[1],b=+m[4],cong=m[3]==='+',r=cong?a+b:a-b,M=m[2];
return 'Hai phân thức có cùng mẫu thức '+M+', ta '+(cong?'cộng':'trừ')+' các tử thức và giữ nguyên mẫu thức:\n'+a+'x/('+M+') '+(cong?'+':'–')+' '+b+'x/('+M+') = ('+a+'x '+(cong?'+':'–')+' '+b+'x)/('+M+') = '+r+'x/('+M+').\nVậy kết quả là '+it.a+'.';};

LG['t8_congtruda']=function(it){var q=(it.q||'').replace(/[–−]/g,'-');var m=q.match(/\(([^()]+)\)\s*([+-])\s*\(([^()]+)\)/);
if(!m)return 'Bỏ dấu ngoặc, nhóm các hạng tử đồng dạng rồi thu gọn.\nKết quả: '+it.a+'.';
var parse=function(s){var t=s.replace(/\s+/g,'');if(!/^[+-]/.test(t))t='+'+t;var o=[0,0,0],re=/([+-])(\d*)(x²|x)?/g,mm;while((mm=re.exec(t))&&mm[0]!==''){if(mm[0].length<2&&!mm[3]){re.lastIndex++;continue}var c=(mm[2]===''?1:+mm[2])*(mm[1]==='-'?-1:1);o[mm[3]==='x²'?2:mm[3]==='x'?1:0]+=c;}return o;};
var A=parse(m[1]),B=parse(m[3]),sub=m[2]==='-';
var fmt=function(o){var s='',L=['','x','x²'];[2,1,0].forEach(function(e){var c=o[e];if(!c)return;var ab=Math.abs(c),body=(e>0&&ab===1?'':ab)+L[e];s+=s===''?(c<0?'–':'')+body:(c<0?' – ':' + ')+body;});return s||'0';};
var Bs=sub?B.map(function(c){return -c}):B;var R=[A[2]+Bs[2],A[1]+Bs[1],A[0]+Bs[0]].reverse();
var sg=function(c){return c<0?'('+String(c).replace('-','–')+')':String(c)};
var bo='('+m[1].replace(/-/g,'–')+') '+(sub?'–':'+')+' ('+m[3].replace(/-/g,'–')+') = '+fmt(A)+(function(){var s=fmt(Bs);return /^–/.test(s)?' – '+s.slice(1):' + '+s})();
var gr=[];var L=['','x','x²'];var tm=function(c,e,first){var ab=Math.abs(c),body=(e>0&&ab===1?'':ab)+L[e];return first?(c<0?'–':'')+body:(c<0?' – ':' + ')+body;};[2,1,0].forEach(function(e){var cs=[A[e],Bs[e]].filter(function(c){return c});if(!cs.length)return;var g=cs.map(function(c,i){return tm(c,e,i===0)}).join('');gr.push(cs.length>1?'('+g+')':g);});
return (sub?'Bỏ dấu ngoặc (trước ngoặc có dấu “–” thì đổi dấu tất cả các hạng tử trong ngoặc):':'Bỏ dấu ngoặc:')+'\n'+bo+'\nNhóm các hạng tử đồng dạng rồi thu gọn:\n= '+gr.reduce(function(acc,g,i){return i===0?g:acc+(g.charAt(0)==='–'?' – '+g.slice(1):' + '+g)},'')+'\n= '+fmt(R)+'.\nVậy kết quả là '+it.a+'.';};

LG['t8_dongdang']=function(it){var q=it.q||'';var k=(q.match(/tỉ số đồng dạng\s*(\d+)/)||[])[1],a=(q.match(/Cạnh nhỏ dài\s*(\d+)/)||[])[1];
if(!k||!a)return 'Cạnh của tam giác lớn = cạnh tương ứng của tam giác nhỏ × tỉ số đồng dạng.\nVậy cạnh cần tìm dài '+it.a+'.';
return 'Hai tam giác đồng dạng thì tỉ số hai cạnh tương ứng bằng tỉ số đồng dạng k = '+k+'.\nCạnh tương ứng của tam giác lớn là: '+a+' × '+k+' = '+(a*k)+' (cm).\nVậy cạnh tương ứng của tam giác lớn dài '+it.a+'.';};

LG['t8_dongdangvuong']=function(it){var q=it.q||'';var k=(q.match(/1\s*:\s*(\d+)/)||[])[1],a=(q.match(/nhỏ là\s*(\d+)/)||[])[1];
if(!k||!a)return 'Tỉ số các cạnh tương ứng bằng tỉ số đồng dạng nên cạnh lớn = cạnh nhỏ × k.\nVậy cạnh tương ứng của tam giác lớn là '+it.a+'.';
return 'Hai tam giác vuông đồng dạng theo tỉ số 1 : '+k+' nên mỗi cạnh của tam giác lớn gấp '+k+' lần cạnh tương ứng của tam giác nhỏ.\nCạnh tương ứng của tam giác lớn là: '+a+' × '+k+' = '+(a*k)+' (cm).\nVậy cạnh tương ứng của tam giác lớn là '+it.a+'.';};

LG['t8_donthuc']=function(it){var q=it.q||'';var sup={'¹':1,'²':2,'³':3,'⁴':4,'⁵':5,'⁶':6,'⁷':7,'⁸':8,'⁹':9};var S=['','','²','³','⁴','⁵','⁶','⁷','⁸','⁹'];
var m=q.match(/(\d*)x([¹²³⁴⁵⁶⁷⁸⁹])·x([¹²³⁴⁵⁶⁷⁸⁹])/);
if(m){var c=m[1],p=sup[m[2]],r=sup[m[3]],n=p+r;return 'Áp dụng quy tắc nhân hai lũy thừa cùng cơ số: xᵐ · xⁿ = xᵐ⁺ⁿ.\n'+c+'x'+m[2]+'·x'+m[3]+' = '+c+'x'+(p+r===1?'':S[n])+' (vì '+p+' + '+r+' = '+n+').\nBậc của đơn thức thu gọn là tổng số mũ của các biến: '+n+'.\nVậy kết quả là '+it.a+'.';}
m=q.match(/(\d*)x([¹²³⁴⁵⁶⁷⁸⁹])y([¹²³⁴⁵⁶⁷⁸⁹])/);
if(m){var e1=sup[m[2]],e2=sup[m[3]];return 'Bậc của đơn thức (có hệ số khác 0) là tổng số mũ của tất cả các biến trong đơn thức.\nĐơn thức '+m[1]+'x'+m[2]+'y'+m[3]+' có số mũ của x là '+e1+', số mũ của y là '+e2+'.\nBậc của đơn thức: '+e1+' + '+e2+' = '+(e1+e2)+'.\nVậy bậc của đơn thức là '+it.a+'.';}
return 'Bậc của đơn thức là tổng số mũ của tất cả các biến.\nVậy đáp án: '+it.a+'.';};

LG['t8_hamso']=function(it){var q=(it.q||'').replace(/[–−]/g,'-');var m=q.match(/y\s*=\s*([^.]+?)\.\s*Tính y khi x\s*=\s*\(?(-?\d+)\)?/);
if(!m)return 'Thay giá trị của x vào công thức hàm số rồi tính.\nVậy '+it.a+'.';
var f=m[1].replace(/\s+/g,''),x=+m[2];var mm=f.match(/^(-?\d*)x([+-]\d+)?$/);if(!mm)return 'Thay x = '+x+' vào công thức hàm số rồi tính.\nVậy '+it.a+'.';
var a=mm[1]===''?1:mm[1]==='-'?-1:+mm[1],b=mm[2]?+mm[2]:0,y=a*x+b;var px=x<0?'('+x+')':String(x);
var D=function(v){return String(v).replace('-','–')};var pd=x<0?'('+D(x)+')':String(x);var bs=b?(b<0?' – '+(-b):' + '+b):'';
var ex=(a===1?pd:a===-1?'–'+pd:D(a)+' · '+pd)+bs;var ax=D(a*x)+bs;var mid=(!b||a===1||(a===-1&&x>=0))?'':' = '+ax;var eq=(ex===D(y))?'':' = '+D(y);
return 'Thay x = '+D(x)+' vào công thức y = '+m[1].replace(/-/g,'–').trim()+', ta được:\ny = '+ex+mid+eq+'.\nVậy '+it.a+'.';};

LG['t8_hamso27']=function(it){var q=(it.q||'').replace(/[–−]/g,'-');var m=q.match(/f\(x\)\s*=\s*([^.]+?)\.\s*Tính f\((-?\d+)\)/);
if(!m)return 'Thay giá trị của biến vào công thức f(x) rồi tính.\nVậy kết quả là '+it.a+'.';
var f=m[1].replace(/\s+/g,''),x=+m[2];var mm=f.match(/^(-?\d*)x([+-]\d+)?$/);if(!mm)return 'Thay x = '+x+' vào f(x) rồi tính.\nVậy f('+x+') = '+it.a+'.';
var a=mm[1]===''?1:mm[1]==='-'?-1:+mm[1],b=mm[2]?+mm[2]:0,y=a*x+b;var px=x<0?'('+x+')':String(x);var D=function(v){return String(v).replace('-','–')};
var pd=x<0?'('+D(x)+')':String(x);var bs=b?(b<0?' – '+(-b):' + '+b):'';
var ex=(a===1?pd:a===-1?'–'+pd:D(a)+' · '+pd)+bs;var ax=D(a*x)+bs;var mid=(!b||a===1||(a===-1&&x>=0))?'':' = '+ax;var eq=(ex===D(y))?'':' = '+D(y);
return 'Thay x = '+D(x)+' vào công thức f(x) = '+m[1].replace(/-/g,'–').trim()+', ta được:\nf('+D(x)+') = '+ex+mid+eq+'.\nVậy f('+D(x)+') = '+it.a+'.';};

LG['t8_hbh']=function(it){var q=it.q||'',r;
if(/đường chéo bằng nhau/.test(q))r='Dấu hiệu nhận biết: hình bình hành có hai đường chéo bằng nhau là hình chữ nhật.';
else if(/Hình chữ nhật có hai cạnh kề bằng nhau/.test(q))r='Dấu hiệu nhận biết: hình chữ nhật có hai cạnh kề bằng nhau là hình vuông.';
else if(/Hình bình hành có hai cạnh kề bằng nhau/.test(q))r='Dấu hiệu nhận biết: hình bình hành có hai cạnh kề bằng nhau là hình thoi.';
else if(/bốn góc vuông/.test(q))r='Dấu hiệu nhận biết: tứ giác có bốn góc vuông là hình chữ nhật (theo định nghĩa hình chữ nhật).';
else r='Dựa vào dấu hiệu nhận biết các tứ giác đặc biệt.';
return r+'\nVậy đó là '+it.a+'.';};

LG['t8_hdt1']=function(it){var m=(it.q||'').match(/\((\d*)x\s*\+\s*(\d+)\)²/);
if(!m)return 'Áp dụng hằng đẳng thức (A + B)² = A² + 2AB + B².\nVậy kết quả là '+it.a+'.';
var a=m[1]===''?1:+m[1],b=+m[2],A=(a===1?'':a)+'x';
return 'Áp dụng hằng đẳng thức bình phương của một tổng: (A + B)² = A² + 2AB + B², với A = '+A+', B = '+b+'.\n('+A+' + '+b+')² = '+(a===1?'x':'('+A+')')+'² + 2 · '+A+' · '+b+' + '+b+'²\n= '+it.a+'.\nVậy ('+A+' + '+b+')² = '+it.a+'.';};

LG['t8_hdt2']=function(it){var m=(it.q||'').match(/\((\d*)x\s*[–−-]\s*(\d+)\)²/);
if(!m)return 'Áp dụng hằng đẳng thức (A – B)² = A² – 2AB + B².\nVậy kết quả là '+it.a+'.';
var a=m[1]===''?1:+m[1],b=+m[2],A=(a===1?'':a)+'x';
return 'Áp dụng hằng đẳng thức bình phương của một hiệu: (A – B)² = A² – 2AB + B², với A = '+A+', B = '+b+'.\n('+A+' – '+b+')² = '+(a===1?'x':'('+A+')')+'² – 2 · '+A+' · '+b+' + '+b+'²\n= '+it.a+'.\nVậy ('+A+' – '+b+')² = '+it.a+'.';};

LG['t8_hdt3']=function(it){var m=(it.q||'').match(/\((\d*)x\s*[–−-]\s*(\d+)\)\s*\((\d*)x\s*\+\s*(\d+)\)/);
if(!m)return 'Áp dụng hằng đẳng thức (A – B)(A + B) = A² – B².\nVậy kết quả là '+it.a+'.';
var a=m[1]===''?1:+m[1],b=+m[2],A=(a===1?'':a)+'x';
return 'Áp dụng hằng đẳng thức hiệu hai bình phương: (A – B)(A + B) = A² – B², với A = '+A+', B = '+b+'.\n('+A+' – '+b+')('+A+' + '+b+') = '+(a===1?'x':'('+A+')')+'² – '+b+'²\n= '+it.a+'.\nVậy kết quả là '+it.a+'.';};

LG['t8_hesogoc']=function(it){var q=it.q||'';var m=q.match(/y\s*=\s*([^?]+?)\s*(?:có hệ số góc|\?)/);var f=m?m[1].trim():'';var a=(f.replace(/\s+/g,'').match(/^([-+–]?\d*)x/)||[])[1];
if(/hệ số góc/.test(q))return 'Đường thẳng y = ax + b (a ≠ 0) có hệ số góc là a.\nĐường thẳng y = '+f+' có a = '+it.a+'.\nVậy hệ số góc bằng '+it.a+'.';
if(/song song/.test(q))return 'Hai đường thẳng y = ax + b và y = a\'x + b\' (a, a\' ≠ 0) song song với nhau khi a = a\' và b ≠ b\'.\nĐường thẳng y = '+f+' có hệ số góc a = '+(a===''||a==null||a==='+'?'1':(a==='-'||a==='–')?'–1':a.replace('-','–'))+'. Trong các đáp án, chỉ có đường thẳng '+it.a+' có cùng hệ số góc và tung độ gốc khác.\nVậy đường thẳng song song là '+it.a+'.';
return 'Dựa vào hệ số góc của đường thẳng y = ax + b.\nVậy đáp án: '+it.a+'.';};

LG['t8_hinhdongdang']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  let m=q.match(/tỉ số\s*(?:đồng dạng\s*)?(\d+)[^]*?hình nhỏ là\s*(\d+)\s*cm/);
  if(m){const k=+m[1],x=+m[2];
    return 'Hai hình đồng dạng với tỉ số k = '+k+' nên mỗi cạnh của hình lớn bằng '+k+' lần cạnh tương ứng của hình nhỏ.\nCạnh tương ứng của hình lớn là: '+x+' × '+k+' = '+(x*k)+' (cm).\nVậy cạnh tương ứng của hình lớn là '+a+'.';}
  m=q.match(/tỉ số\s*(?:đồng dạng\s*)?(\d+)/);
  if(m){const k=+m[1];
    return 'Nếu hai hình đồng dạng với tỉ số k thì tỉ số diện tích của chúng bằng k².\nỞ đây k = '+k+' nên tỉ số diện tích là: '+k+'² = '+k+' × '+k+' = '+(k*k)+'.\nVậy tỉ số diện tích bằng '+a+'.';}
  return 'Hai hình đồng dạng tỉ số k: các cạnh tương ứng tỉ lệ k, diện tích tỉ lệ k².\nVậy đáp án: '+a+'.';
};
LG['t8_hinhthangcan']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/=\s*(\d+)\s*°/);
  if(m){const d=+m[1];
    return 'Vì AB // CD nên góc A và góc D là hai góc trong cùng phía, do đó Â + D̂ = 180°.\nSuy ra Â = 180° − '+d+'° = '+(180-d)+'°.\nVậy góc A = '+a+'.';}
  return 'Vì AB // CD nên Â + D̂ = 180° (hai góc trong cùng phía).\nVậy góc A = '+a+'.';
};
LG['t8_lapct']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/Tổng của hai số là\s*(\d+)[^\d]+(\d+)/);
  if(m){const s=+m[1],h=+m[2],b=(s-h)/2;
    return 'Gọi số bé là x thì số lớn là x + '+h+'.\nVì tổng hai số là '+s+' nên ta có phương trình: x + (x + '+h+') = '+s+'\n2x + '+h+' = '+s+'\n2x = '+s+' − '+h+' = '+(s-h)+'\nx = '+(s-h)+' : 2 = '+b+' (thoả mãn).\nVậy số bé là '+b+'.\nĐáp số: '+a+'.';}
  return 'Gọi số bé là x, lập phương trình theo tổng và hiệu rồi giải.\nVậy '+a+'.';
};
LG['t8_lapphuongth']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/\(x\s*([+–\-−])\s*(\d+)\)³/);
  if(m){const p=m[1]==='+',b=+m[2],s=p?'+':'–';
    const f=p?'(A + B)³ = A³ + 3A²B + 3AB² + B³':'(A – B)³ = A³ – 3A²B + 3AB² – B³';
    return 'Áp dụng hằng đẳng thức '+f+' với A = x, B = '+b+':\n(x '+s+' '+b+')³ = x³ '+s+' 3 · x² · '+b+' + 3 · x · '+b+'² '+s+' '+b+'³\n= '+a+'.';}
  return 'Áp dụng hằng đẳng thức lập phương của một tổng (hiệu).\nKết quả: '+a+'.';
};
LG['t8_nc1']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/(\d+)²\s*[–\-−]\s*(\d+)²/);
  if(m){const x=+m[1],y=+m[2];
    return 'Áp dụng hằng đẳng thức hiệu hai bình phương: A² – B² = (A – B)(A + B).\n'+x+'² – '+y+'² = ('+x+' – '+y+')('+x+' + '+y+') = '+(x-y)+' × '+(x+y)+' = '+((x-y)*(x+y))+'.\nĐáp số: '+a+'.';}
  return 'Áp dụng A² – B² = (A – B)(A + B).\nVậy '+a+'.';
};
LG['t8_nc2']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/vận tốc\s*(\d+)\s*km\/h hết\s*(\d+)\s*giờ/);
  if(m){const v=+m[1],t=+m[2];
    return 'Gọi quãng đường AB là x (km), điều kiện x > 0.\nThời gian ô tô đi hết quãng đường AB là x/'+v+' (giờ).\nTheo đề bài ta có phương trình: x/'+v+' = '+t+'\nx = '+v+' × '+t+' = '+(v*t)+' (thoả mãn điều kiện).\nVậy quãng đường AB dài '+(v*t)+' km.\nĐáp số: '+a+'.';}
  return 'Gọi quãng đường là x (km), lập phương trình thời gian = quãng đường : vận tốc rồi giải.\nVậy '+a+'.';
};
LG['t8_nhanchiapt']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/\((\d+)x\)\/\((\d+)y\)\s*·\s*\((\d+)y\)\/x/);
  if(m){const p=+m[1],r=+m[2],c=+m[3],n=p*c,G=(u,v)=>v?G(v,u%v):u,g=G(n,r);
    let L='Muốn nhân hai phân thức, ta nhân các tử thức với nhau, nhân các mẫu thức với nhau (x ≠ 0, y ≠ 0):\n('+p+'x)/('+r+'y) · ('+c+'y)/x = ('+p+'x · '+c+'y)/('+r+'y · x) = ('+n+'xy)/('+r+'xy)\n';
    L+='Chia cả tử và mẫu cho nhân tử chung xy'+(g>1?' và cho '+g:'')+', ta được: ('+n+'xy)/('+r+'xy) = '+a+'.';
    return L+'\nVậy kết quả là '+a+'.';}
  return 'Nhân tử với tử, mẫu với mẫu rồi rút gọn nhân tử chung.\nVậy kết quả là '+a+'.';
};
LG['t8_nhandon']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/(\d+)x\((\d+)x\s*\+\s*(\d+)\)/);
  if(m){const k=+m[1],b=+m[2],c=+m[3];
    return 'Muốn nhân một đơn thức với một đa thức, ta nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích lại:\n'+k+'x('+b+'x + '+c+') = '+k+'x · '+b+'x + '+k+'x · '+c+'\n= '+a+'.';}
  return 'Nhân đơn thức với từng hạng tử của đa thức rồi cộng các tích.\nKết quả: '+a+'.';
};
LG['t8_nhantu']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/(\d+)x²\s*\+\s*(\d+)x/),n=a.match(/^(\d+)x/);
  if(m&&n){const p=+m[1],r=+m[2],k=+n[1];
    return 'Các hạng tử '+p+'x² và '+r+'x có nhân tử chung là '+k+'x (ƯCLN('+p+', '+r+') = '+k+').\n'+p+'x² + '+r+'x = '+k+'x · '+(p/k)+'x + '+k+'x · '+(r/k)+'\n= '+a+'.';}
  return 'Tìm nhân tử chung của các hạng tử rồi đặt ra ngoài dấu ngoặc.\nKết quả: '+a+'.';
};
LG['t8_phangiactg']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/AB\s*=\s*(\d+)[^]*?AC\s*=\s*(\d+)[^]*?DB\s*=\s*(\d+)/);
  if(m){const ab=+m[1],ac=+m[2],db=+m[3],dc=db*ac/ab;
    return 'Vì AD là đường phân giác của tam giác ABC nên DB/DC = AB/AC (tính chất đường phân giác).\nSuy ra DC = DB × AC : AB = '+db+' × '+ac+' : '+ab+' = '+dc+' (cm).\nVậy DC = '+a+'.';}
  return 'Áp dụng tính chất đường phân giác: DB/DC = AB/AC.\nVậy DC = '+a+'.';
};
LG['t8_phanthuc']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/(\d+)\/\(x\s*([+–\-−])\s*(\d+)\)/);
  if(m){const p=m[2]==='+',b=+m[3],s=p?'+':'–',v=p?-b:b;
    return 'Phân thức '+m[1]+'/(x '+s+' '+b+') xác định khi mẫu thức khác 0:\nx '+s+' '+b+' ≠ 0 ⇔ x ≠ '+v+'.\nVậy điều kiện xác định là '+a+'.';}
  return 'Phân thức xác định khi mẫu thức khác 0.\nVậy điều kiện xác định là '+a+'.';
};
LG['t8_phantichdl']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/tổng số\s*(\d+)[^\d]+(\d+)/);
  if(m){const t=+m[1],s=+m[2],p=s*100/t;
    return 'Tỉ số phần trăm số học sinh chọn môn Bóng đá so với tổng số học sinh là:\n'+s+' : '+t+' × 100% = '+p+'%.\nVậy số đó chiếm '+a+'.';}
  return 'Lấy số học sinh chọn môn đó chia cho tổng số học sinh rồi nhân với 100%.\nVậy số đó chiếm '+a+'.';
};
LG['t8_ptbac1']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/(-?\d+)x\s*([+–\-−])\s*(\d+)\s*=\s*(-?\d+)/);
  if(m){const k=+m[1],p=m[2]==='+',b=+m[3],c=+m[4],N=v=>v<0?'−'+(-v):String(v),P=v=>v<0?'('+N(v)+')':String(v);
    const r=p?c-b:c+b, x=r/k;
    const step=k+'x = '+N(c)+(p?' − ':' + ')+b;
    return 'Chuyển hạng tử '+(p?b:'−'+b)+' sang vế phải và đổi dấu:\n'+step+'\n'+k+'x = '+N(r)+'\nx = '+P(r)+' : '+P(k)+'\nx = '+N(x)+'.\nVậy phương trình có nghiệm '+a+'.';}
  return 'Chuyển vế, đổi dấu rồi chia hai vế cho hệ số của x.\nVậy phương trình có nghiệm '+a+'.';
};
LG['t8_ptquy']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  const m=q.match(/(\d+)x\s*\+\s*(\d+)\s*=\s*(\d+)x\s*([+–\-−])\s*(\d+)/);
  if(m){const A=+m[1],C=+m[2],B=+m[3],d=(m[4]==='+'?1:-1)*(+m[5]),N=v=>v<0?'−'+(-v):String(v),P=v=>v<0?'('+N(v)+')':String(v);
    const r=d-C,k=A-B,x=r/k;
    let L='Chuyển các hạng tử chứa x sang vế trái, các hằng số sang vế phải (nhớ đổi dấu):\n'+A+'x − '+B+'x = '+N(d)+' − '+C+'\n';
    L+=(k===1?'':k===-1?'−':N(k))+'x = '+N(r)+'\n';
    if(k===-1)L+='x = '+N(-r)+'.\n';
    else if(k!==1)L+='x = '+P(r)+' : '+P(k)+'\nx = '+N(x)+'.\n';
    return L+'Vậy phương trình có nghiệm '+a+'.';}
  return 'Chuyển hạng tử chứa x về một vế, hằng số về vế kia, thu gọn rồi giải.\nVậy phương trình có nghiệm '+a+'.';
};
LG['t8_pytago']=function(it){
  const q=String(it.q||''),a=String(it.a||'');
  let m=q.match(/cạnh huyền\s*(\d+)\s*cm và một cạnh góc vuông\s*(\d+)/);
  if(m){const c=+m[1],x=+m[2],y2=c*c-x*x,y=Math.round(Math.sqrt(y2));
    return 'Theo định lí Pythagore, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.\nBình phương cạnh góc vuông còn lại là: '+c+'² − '+x+'² = '+(c*c)+' − '+(x*x)+' = '+y2+'.\nCạnh góc vuông còn lại là: √'+y2+' = '+y+' (cm).\nVậy cạnh góc vuông còn lại là '+a+'.';}
  m=q.match(/hai cạnh góc vuông\s*(\d+)\s*cm và\s*(\d+)/);
  if(m){const x=+m[1],y=+m[2],c2=x*x+y*y,c=Math.round(Math.sqrt(c2));
    return 'Theo định lí Pythagore, bình phương cạnh huyền bằng tổng bình phương hai cạnh góc vuông.\nBình phương cạnh huyền là: '+x+'² + '+y+'² = '+(x*x)+' + '+(y*y)+' = '+c2+'.\nCạnh huyền là: √'+c2+' = '+c+' (cm).\nVậy cạnh huyền là '+a+'.';}
  return 'Áp dụng định lí Pythagore: (cạnh huyền)² = tổng bình phương hai cạnh góc vuông.\nVậy đáp án: '+a+'.';
};

LG['t8_rutphanthuc']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/\((\d+)x\)\s*\/\s*\((\d+)x\)/);
if(!m)return 'Chia cả tử và mẫu cho nhân tử chung (ƯCLN của các hệ số và x).\nVậy phân thức rút gọn là '+a+'.';
var t=+m[1],n=+m[2],g=function(x,y){return y?g(y,x%y):x},d=g(t,n);
return 'Điều kiện: x ≠ 0.\nNhân tử chung của tử và mẫu là '+d+'x (ƯCLN('+t+', '+n+') = '+d+').\nChia cả tử và mẫu cho '+d+'x:\n('+t+'x) / ('+n+'x) = ('+t+'x : '+d+'x) / ('+n+'x : '+d+'x) = '+(t/d)+'/'+(n/d)+(n/d===1?' = '+(t/d):'')+'.\nVậy kết quả rút gọn là '+a+'.';};

LG['t8_tanso']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/Trong\s+(\d+)[^,]*,\s*có\s+(\d+)/);
if(!m)return 'Tần số tương đối = (tần số : tổng số giá trị) × 100%.\nVậy tần số tương đối là '+a+'.';
var N=+m[1],k=+m[2];
return 'Tần số của nhóm thích môn Toán là '+k+'; tổng số học sinh là '+N+'.\nTần số tương đối f = '+k+'/'+N+' × 100% = '+a+'.\nVậy tần số tương đối của nhóm thích môn Toán là '+a+'.';};

LG['t8_thales']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/AM\s*=\s*(\d+)\D+MB\s*=\s*(\d+)\D+AN\s*=\s*(\d+)/);
if(!m)return 'Vì MN song song với cạnh BC nên theo định lí Thalès: AM/MB = AN/NC, suy ra NC = AN × MB : AM.\nVậy '+a+'.';
var am=+m[1],mb=+m[2],an=+m[3],nc=an*mb/am;
return 'Vì MN song song với cạnh còn lại của tam giác nên theo định lí Thalès:\nAM/MB = AN/NC hay '+am+'/'+mb+' = '+an+'/NC.\nSuy ra NC = '+an+' × '+mb+' : '+am+' = '+(an*mb)+' : '+am+' = '+String(nc).replace('.',',')+'.\nVậy '+a+'.';};

LG['t8_thoivuong']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/hai đường chéo\s+(\d+)\s*cm\s+và\s+(\d+)/))){var d1=+m[1],d2=+m[2];
return 'Diện tích hình thoi bằng nửa tích hai đường chéo: S = (d₁ × d₂) : 2.\nS = ('+d1+' × '+d2+') : 2 = '+(d1*d2)+' : 2 = '+(d1*d2/2)+' (cm²).\nVậy diện tích hình thoi là '+a+'.';}
if((m=q.match(/cạnh\s+(\d+)\s*cm/))){var c=+m[1];
return 'Gọi hình vuông ABCD cạnh a = '+c+' cm. Tam giác ABC vuông cân tại B nên theo định lí Pythagore:\nAC² = AB² + BC² = '+c+'² + '+c+'² = '+(2*c*c)+', suy ra AC = '+c+'√2.\nAC ≈ '+c+' × 1,41 = '+String(Math.round(c*141)/100).replace('.',',')+(Math.round(c*141)%10===0?'':' ≈ '+a.replace(/\s*cm$/,''))+' (cm).\nVậy đường chéo hình vuông dài khoảng '+a+'.';}
return 'Hình vuông cạnh a có đường chéo a√2; hình thoi có diện tích bằng nửa tích hai đường chéo.\nVậy đáp số là '+a+'.';};

LG['t8_thuanloi']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/từ\s+1\s+đến\s+(\d+)/);
if(!m)return 'Liệt kê các số chẵn trong các số ghi trên thẻ, mỗi số là một kết quả thuận lợi.\nVậy có '+a+' kết quả thuận lợi.';
var n=+m[1],ev=[];for(var i=2;i<=n;i+=2)ev.push(i);
return 'Các kết quả có thể là các số 1, 2, …, '+n+' ('+n+' kết quả).\nCác kết quả thuận lợi cho biến cố "lấy được thẻ ghi số chẵn" là: '+ev.join(', ')+'.\nVậy có '+a+' kết quả thuận lợi.';};

LG['t8_thugon8']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/(\d*)x²y\s*\+\s*(\d*)xy²\s*[–-]\s*(\d*)x²y\s*\+\s*(\d*)xy²/);
if(!m)return 'Nhóm các hạng tử đồng dạng rồi cộng, trừ các hệ số.\nKết quả: '+a+'.';
var p=function(s){return s===''?1:+s},A=p(m[1]),B=p(m[2]),C=p(m[3]),D=p(m[4]);
return 'Nhóm các hạng tử đồng dạng:\n('+A+'x²y – '+C+'x²y) + ('+B+'xy² + '+D+'xy²)\n= ('+A+' – '+C+')x²y + ('+B+' + '+D+')xy²\n= '+a+'.\nVậy đa thức thu gọn là '+a+'.';};

LG['t8_thuthap']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/:\s*([^.?]+)\.\s*Có bao nhiêu bạn\s+(Nam|Nữ)/);
if(!m)return 'Đếm số lần xuất hiện của giá trị cần tìm trong dãy dữ liệu.\nVậy có '+a+' bạn.';
var arr=m[1].split(',').map(function(s){return s.trim()}).filter(Boolean),cat=m[2],o=cat==='Nam'?'Nữ':'Nam';
var c=arr.filter(function(x){return x===cat}).length;
return 'Dãy dữ liệu có '+arr.length+' giá trị, gồm hai loại: Nam và Nữ.\nĐếm số giá trị "'+cat+'": có '+c+' giá trị (còn lại '+(arr.length-c)+' giá trị "'+o+'").\nVậy có '+a+' bạn '+cat+'.';};

LG['t8_tonghieulp']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/x³\s*([+–-])\s*(\d+)/);
if(!m)return 'Áp dụng hằng đẳng thức A³ + B³ = (A + B)(A² – AB + B²) hoặc A³ – B³ = (A – B)(A² + AB + B²).\nKết quả: '+a+'.';
var plus=m[1]==='+',c=+m[2],b=Math.round(Math.cbrt(c));
return 'Ta có '+c+' = '+b+'³ nên x³ '+(plus?'+':'–')+' '+c+' = x³ '+(plus?'+':'–')+' '+b+'³.\nÁp dụng hằng đẳng thức '+(plus?'tổng hai lập phương A³ + B³ = (A + B)(A² – AB + B²)':'hiệu hai lập phương A³ – B³ = (A – B)(A² + AB + B²)')+' với A = x, B = '+b+':\nx³ '+(plus?'+':'–')+' '+c+' = '+a+'.\nVậy x³ '+(plus?'+':'–')+' '+c+' = '+a+'.';};

LG['t8_trungbinhtg']=function(it){var q=String(it.q),a=String(it.a),m;
if((m=q.match(/BC\s*=\s*(\d+)\s*cm\.\s*Tính MN/))){var bc=+m[1];
return 'Đường trung bình của tam giác thì song song với cạnh thứ ba và bằng nửa cạnh ấy.\nMN là đường trung bình ứng với cạnh BC nên MN = BC : 2 = '+bc+' : 2 = '+(bc/2)+' (cm).\nVậy MN = '+a+'.';}
if((m=q.match(/MN\s*=\s*(\d+)\s*cm\.\s*Tính BC/))){var mn=+m[1];
return 'Đường trung bình của tam giác thì song song với cạnh thứ ba và bằng nửa cạnh ấy, nên BC = 2 × MN.\nBC = 2 × '+mn+' = '+(2*mn)+' (cm).\nVậy BC = '+a+'.';}
return 'Đường trung bình của tam giác bằng nửa cạnh thứ ba.\nVậy đáp số là '+a+'.';};

LG['t8_tugiac']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/góc A\s*=\s*(\d+)°\D+góc B\s*=\s*(\d+)°\D+góc C\s*=\s*(\d+)°/);
if(!m)return 'Tổng các góc của một tứ giác bằng 360°, nên góc D = 360° – (góc A + góc B + góc C).\nVậy góc D = '+a+'.';
var A=+m[1],B=+m[2],C=+m[3];
return 'Tổng các góc của một tứ giác bằng 360°, nên:\ngóc D = 360° – (góc A + góc B + góc C)\n= 360° – ('+A+'° + '+B+'° + '+C+'°)\n= 360° – '+(A+B+C)+'° = '+(360-A-B-C)+'°.\nVậy góc D = '+a+'.';};

LG['t8_xs8']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/từ\s+1\s+đến\s+(\d+)[\s\S]*?bằng\s+(\d+)/);
if(!m)return 'Xác suất = số kết quả thuận lợi : số kết quả có thể (các kết quả đồng khả năng).\nVậy xác suất cần tìm là '+a+'.';
var n=+m[1],k=+m[2],ds=[];for(var i=1;i<=k;i++)ds.push(i);
return 'Có '+n+' kết quả có thể, đồng khả năng (các số 1, 2, …, '+n+').\nCác kết quả thuận lợi là '+(k===1?'số ':'các số ')+(k<=4?ds.join(', '):'1, 2, …, '+k)+' nên có '+k+' kết quả thuận lợi.\nXác suất P = '+k+'/'+n+(k+'/'+n===a?'':' = '+a)+'.\nVậy xác suất rút được thẻ ghi số bé hơn hoặc bằng '+k+' là '+a+'.';};

LG['t8_xstn']=function(it){var q=String(it.q),a=String(it.a),m=q.match(/(\d+)\s*lần,\s*có\s+(\d+)\s*lần/);
if(!m)return 'Xác suất thực nghiệm = số lần biến cố xảy ra : tổng số lần thử.\nVậy xác suất thực nghiệm là '+a+'.';
var n=+m[1],k=+m[2],ex=(k*100)%n===0,dv=String(k/n).replace('.',',');
return 'Số lần thử: '+n+'; số lần xuất hiện mặt ngửa: '+k+'.\nXác suất thực nghiệm của biến cố "xuất hiện mặt ngửa" là '+k+'/'+n+(ex?' = ':' = '+dv+' ≈ ')+a+(ex?'':' (làm tròn đến hàng phần trăm)')+'.\nVậy xác suất thực nghiệm là '+a+'.';};

LG['t9_batdangthuc']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/Cho\s*(-?\d+)\s*([<>])\s*(-?\d+)\.\s*Nhân cả hai vế với\s*(-?\d+)/);
  if(!m) return 'Nhân hai vế của bất đẳng thức với số dương thì giữ nguyên chiều, với số âm thì đổi chiều.\nVậy điền dấu: '+a;
  var p=+m[1],s=m[2],r=+m[3],c=+m[4];
  var L=[];
  L.push('Ta có '+p+' '+s+' '+r+', nhân cả hai vế với '+c+'.');
  if(c>0) L.push('Vì '+c+' > 0 nên bất đẳng thức giữ nguyên chiều (tính chất nhân với số dương).');
  else L.push('Vì '+c+' < 0 nên bất đẳng thức đổi chiều (tính chất nhân với số âm).');
  L.push('Kiểm tra: '+p+'·('+c+') = '+(p*c)+'; '+r+'·('+c+') = '+(r*c)+'.');
  L.push('Vậy '+p+'·('+c+') '+a+' '+r+'·('+c+'). Điền dấu: '+a);
  return L.join('\n');
};
LG['t9_biencan']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/√\s*(\d+)/);
  if(!m) return 'Phân tích số dưới dấu căn thành tích của một số chính phương và một số khác, rồi dùng √(a²b) = a√b (a ≥ 0, b ≥ 0).\nVậy kết quả: '+a;
  var n=+m[1],k=1;
  for(var i=Math.floor(Math.sqrt(n));i>=2;i--){if(n%(i*i)===0){k=i;break;}}
  var b=n/(k*k);
  return 'Phân tích: '+n+' = '+(k*k)+' · '+b+' = '+k+'² · '+b+'.\nÁp dụng √(a²b) = a√b (a ≥ 0, b ≥ 0):\n√'+n+' = √('+k+'² · '+b+') = '+k+'√'+b+'.\nVậy √'+n+' = '+a;
};
LG['t9_bpt']=function(it){
  var q=String(it.q).replace(/[–−]/g,'-'),a=String(it.a);
  var m=q.match(/(-?\d+)x\s*([+-])\s*(\d+)\s*([<>]=?|≤|≥)\s*(-?\d+)/);
  if(!m) return 'Chuyển hạng tử tự do sang vế phải (đổi dấu), rồi chia hai vế cho hệ số của x (chia cho số âm thì đổi chiều).\nVậy nghiệm của bất phương trình là '+a;
  var A=+m[1],sg=m[2],b=+m[3],B=b*(sg==='-'?-1:1),s=m[4],C=+m[5];
  var R=C-B, L=[];
  var p=function(v){return v<0?'('+v+')':String(v);};
  L.push(A+'x '+sg+' '+b+' '+s+' '+C);
  if(b!==0){
    L.push(A+'x '+s+' '+C+' '+(sg==='+'?'-':'+')+' '+b+' (chuyển hạng tử '+(sg==='+'?'':'-')+b+' sang vế phải và đổi dấu)');
    L.push(A+'x '+s+' '+R);
  } else L.push(A+'x '+s+' '+R);
  var s2=s; if(A<0){s2={'>':'<','<':'>','>=':'<=','<=':'>=','≥':'≤','≤':'≥'}[s]||s;}
  var x=R/A;
  L.push('x '+s2+' '+R+' : '+p(A)+' (chia hai vế cho '+A+(A>0?' > 0 nên giữ nguyên chiều)':' < 0 nên đổi chiều)'));
  L.push('x '+s2+' '+(Number.isInteger(x)?x:String(x).replace('.',',')));
  L.push('Vậy nghiệm của bất phương trình là '+a);
  return L.join('\n');
};
LG['t9_can']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/∛\s*(-?\d+)/);
  if(m){var n=+m[1],r=Math.round(Math.cbrt(n));return 'Ta tìm số mà lập phương bằng '+n+'.\nVì '+r+'³ = '+r+' · '+r+' · '+r+' = '+(r*r*r)+' nên ∛'+n+' = '+r+'.\nVậy ∛'+n+' = '+a;}
  m=q.match(/√\s*(\d+)/);
  if(m){var n2=+m[1],r2=Math.round(Math.sqrt(n2));return 'Ta tìm số không âm mà bình phương bằng '+n2+'.\nVì '+r2+' ≥ 0 và '+r2+'² = '+r2+' · '+r2+' = '+(r2*r2)+' nên √'+n2+' = '+r2+'.\nVậy √'+n2+' = '+a;}
  return 'Căn bậc hai số học của a là số không âm x với x² = a; căn bậc ba của a là số x với x³ = a.\nVậy kết quả: '+a;
};
LG['t9_cungday']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/bán kính\s*(\d+)\s*cm.*?đường kính\s*(\d+)\s*cm.*?độ dài\s*(\d+)\s*cm/);
  if(!m) return 'Trong một đường tròn, đường kính là dây lớn nhất, nên mọi dây có độ dài ≤ đường kính.\nVậy câu trả lời: '+a;
  var R=+m[1],d=+m[2],l=+m[3];
  var L=['Đường kính là dây lớn nhất của đường tròn: mọi dây đều có độ dài ≤ 2R = 2 · '+R+' = '+d+' (cm).'];
  if(l<=d) L.push('Ta có '+l+' ≤ '+d+' nên dây dài '+l+' cm có thể tồn tại.');
  else L.push('Ta có '+l+' > '+d+' nên không thể có dây dài '+l+' cm.');
  L.push('Vậy câu trả lời: '+a);
  return L.join('\n');
};
LG['t9_dagiacdeu']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+)\s*cạnh/);
  if(!m) return 'Tổng các góc trong của đa giác n cạnh là (n − 2) · 180°; đa giác đều có các góc bằng nhau nên mỗi góc bằng (n − 2) · 180° : n.\nVậy kết quả: '+a;
  var n=+m[1],T=(n-2)*180;
  var L=['Tổng số đo các góc trong của đa giác n cạnh: (n − 2) · 180°.','Với n = '+n+': ('+n+' − 2) · 180° = '+(n-2)+' · 180° = '+T+'°.'];
  if(/Mỗi góc/i.test(q)){L.push('Đa giác đều có '+n+' góc bằng nhau nên mỗi góc bằng '+T+'° : '+n+' = '+(T/n)+'°.');L.push('Vậy mỗi góc trong có số đo '+a);}
  else L.push('Vậy tổng số đo các góc trong là '+a);
  return L.join('\n');
};
LG['t9_dtron13']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/đường kính\s*(\d+)\s*cm/);
  if(m&&/bán kính\.?\s*$/i.test(q.trim())||m&&/Tính bán kính/.test(q)){var d=+m[1];return 'Bán kính bằng một nửa đường kính: R = d : 2.\nR = '+d+' : 2 = '+(d/2)+' (cm).\nVậy bán kính là '+a;}
  m=q.match(/R\s*=\s*(\d+)\s*cm/)||q.match(/bán kính[^\d]*(\d+)\s*cm/);
  if(m){var R=+m[1];return 'Đường kính gấp đôi bán kính: d = 2R.\nd = 2 · '+R+' = '+(2*R)+' (cm).\nVậy đường kính là '+a;}
  return 'Đường kính gấp đôi bán kính (d = 2R), bán kính bằng nửa đường kính (R = d : 2).\nVậy kết quả: '+a;
};
LG['t9_duongtron']=function(it){
  var q=String(it.q),a=String(it.a);
  var fd=function(h){var neg=h<0;h=Math.abs(h);var ip=Math.floor(h/100),fp=h%100;var s=String(ip).replace(/\B(?=(\d{3})+(?!\d))/g,' ');if(fp){var f=(fp<10?'0':'')+fp;f=f.replace(/0+$/,'');s+=','+f;}return (neg?'-':'')+s;};
  var m=q.match(/bán kính\s*(\d+)\s*cm/);
  if(!m) return 'Chu vi đường tròn: C = 2πR; diện tích hình tròn: S = πR².\nVậy kết quả: '+a;
  var r=+m[1];
  if(/chu vi/i.test(q)) return 'Áp dụng công thức chu vi đường tròn: C = 2πR.\nC ≈ 2 · 3,14 · '+r+' = '+fd(Math.round(2*r*314))+' (cm).\nVậy chu vi đường tròn là '+a;
  return 'Áp dụng công thức diện tích hình tròn: S = πR².\nS ≈ 3,14 · '+r+'² = 3,14 · '+(r*r)+' = '+fd(Math.round(r*r*314))+' (cm²).\nVậy diện tích hình tròn là '+a;
};
LG['t9_gocnt']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/(\d+)\s*°/);
  if(!m) return 'Góc nội tiếp có số đo bằng nửa số đo cung bị chắn (bằng nửa góc ở tâm cùng chắn cung đó).\nVậy số đo góc nội tiếp là '+a;
  var g=+m[1];var h=g/2;var hs=String(h).replace('.',',');
  return 'Số đo cung bị chắn bằng số đo góc ở tâm chắn cung đó: '+g+'°.\nGóc nội tiếp có số đo bằng nửa số đo cung bị chắn.\nNên góc nội tiếp = '+g+'° : 2 = '+hs+'°.\nVậy số đo góc nội tiếp là '+a;
};
LG['t9_hamsoax2']=function(it){
  var q=String(it.q).replace(/[–−]/g,'-'),a=String(it.a);
  var m=q.match(/y\s*=\s*(-?\d*)\s*x²/),mx=q.match(/x\s*=\s*\(?\s*(-?\d+)\s*\)?\s*\./);
  if(!m||!mx) return 'Thay giá trị x vào công thức y = ax² rồi tính (bình phương trước, nhân với a sau).\nVậy '+a;
  var A=m[1]===''?1:(m[1]==='-'?-1:+m[1]),x=+mx[1];
  var xs=x<0?'('+x+')':String(x);
  var y=A*x*x; if(y===0)y=0;
  var L=['Thay x = '+x+' vào công thức y = '+(A===1?'':(A===-1?'-':A))+'x², ta được:'];
  if(A===1) L.push('y = '+xs+'² = '+(x*x)+'.');
  else L.push('y = '+A+' · '+xs+'² = '+A+' · '+(x*x)+' = '+y+'.');
  L.push('Vậy '+a);
  return L.join('\n');
};
LG['t9_hept']=function(it){
  var q=String(it.q).replace(/[–−]/g,'-'),a=String(it.a);
  var m=q.match(/\{\s*(-?\d*)x\s*([+-])\s*(\d*)y\s*=\s*(-?\d+)\s*;\s*(-?\d*)x\s*([+-])\s*(\d*)y\s*=\s*(-?\d+)/);
  if(!m) return 'Dùng phương pháp cộng đại số (hoặc thế): khử một ẩn, tìm ẩn còn lại rồi thay vào để tìm ẩn kia.\nVậy hệ có nghiệm duy nhất '+a;
  var co=function(s){return s===''?1:(s==='-'?-1:+s);};
  var a1=co(m[1]),b1=co(m[3])*(m[2]==='-'?-1:1),c1=+m[4],a2=co(m[5]),b2=co(m[7])*(m[6]==='-'?-1:1),c2=+m[8];
  var p=function(v){return v<0?'('+v+')':String(v);};
  var t=function(k,v){return (k===1?'':(k===-1?'-':k))+v;};
  var eq=function(a,b,c){return t(a,'x')+' '+(b<0?'- '+t(-b,'y'):'+ '+t(b,'y'))+' = '+c;};
  var D=a1*b2-a2*b1; if(D===0) return 'Hệ phương trình có các hệ số tỉ lệ, cần xét riêng.\nVậy '+a;
  var x=(c1*b2-c2*b1)/D,y=(a1*c2-a2*c1)/D;
  var L=['Ta có hệ: '+eq(a1,b1,c1)+' (1) và '+eq(a2,b2,c2)+' (2).','Giải bằng phương pháp cộng đại số, khử ẩn x.'];
  var by,cy;
  if(a1===a2){
    L.push('Hệ số của x ở hai phương trình bằng nhau ('+a1+'), trừ từng vế (1) cho (2), ta được:');
    by=b1-b2;cy=c1-c2;
  } else {
    L.push('Nhân hai vế của (1) với '+a2+', nhân hai vế của (2) với '+a1+', ta được hệ:');
    L.push(eq(a1*a2,b1*a2,c1*a2)+' và '+eq(a2*a1,b2*a1,c2*a1));
    L.push('Trừ từng vế hai phương trình, ta được:');
    by=b1*a2-b2*a1;cy=c1*a2-c2*a1;
  }
  L.push(t(by,'y')+' = '+cy+(by===1?'.':' ⇒ y = '+cy+' : '+p(by)+' = '+y+'.'));
  var rest=c1-b1*y;
  L.push('Thay y = '+y+' vào (1): '+t(a1,'x')+' + '+b1+' · '+p(y)+' = '+c1+' ⇒ '+t(a1,'x')+' = '+c1+' - '+p(b1*y)+' = '+rest+(a1===1?'':' ⇒ x = '+rest+' : '+p(a1)+' = '+x)+'.');
  L.push('Vậy hệ có nghiệm duy nhất '+a);
  return L.join('\n');
};
LG['t9_hethuccg']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/BC\s*=\s*(\d+(?:,\d+)?)\s*cm/);
  if(!m) return 'Trong tam giác vuông, cạnh góc vuông bằng cạnh huyền nhân sin góc đối.\nVậy kết quả: '+a;
  var bc=+m[1].replace(',','.');var v=String(bc/2).replace('.',',');
  return 'Trong tam giác vuông, cạnh góc vuông bằng cạnh huyền nhân với sin góc đối diện.\nAC = BC · sin B = BC · sin 30°, mà sin 30° = 1/2.\nAC = '+m[1]+' · 1/2 = '+v+' (cm).\nVậy AC = '+a;
};
LG['t9_hinhcau']=function(it){
  var q=String(it.q),a=String(it.a);
  var fd=function(h){var ip=Math.floor(h/100),fp=h%100;var s=String(ip).replace(/\B(?=(\d{3})+(?!\d))/g,' ');if(fp){var f=(fp<10?'0':'')+fp;f=f.replace(/0+$/,'');s+=','+f;}return s;};
  var m=q.match(/bán kính\s*(\d+)\s*cm/);
  if(!m) return 'Áp dụng công thức thể tích hình cầu V = 4/3 πr³.\nVậy thể tích hình cầu là '+a;
  var r=+m[1],r3=r*r*r,tu=4*r3*314;var v=fd(Math.round(tu/3));
  var ex=(tu%3===0)?' = ':' ≈ ';
  return 'Áp dụng công thức thể tích hình cầu: V = 4/3 πr³.\nr³ = '+r+'³ = '+r3+'.\nV ≈ 4/3 · 3,14 · '+r3+' = '+fd(tu)+' : 3'+ex+v+' (cm³)'+(tu%3===0?'':' (làm tròn đến hàng phần trăm)')+'.\nVậy thể tích hình cầu là '+a;
};
LG['t9_hinhtru']=function(it){
  var q=String(it.q),a=String(it.a);
  var fd=function(h){var ip=Math.floor(h/100),fp=h%100;var s=String(ip).replace(/\B(?=(\d{3})+(?!\d))/g,' ');if(fp){var f=(fp<10?'0':'')+fp;f=f.replace(/0+$/,'');s+=','+f;}return s;};
  var m=q.match(/bán kính đáy\s*(\d+)\s*cm.*?chiều cao\s*(\d+)\s*cm/);
  if(!m) return 'Áp dụng công thức thể tích hình trụ V = πr²h.\nVậy thể tích hình trụ là '+a;
  var r=+m[1],h=+m[2];
  return 'Áp dụng công thức thể tích hình trụ: V = πr²h.\nV ≈ 3,14 · '+r+'² · '+h+' = 3,14 · '+(r*r)+' · '+h+' = 3,14 · '+(r*r*h)+' = '+fd(r*r*h*314)+' (cm³).\nVậy thể tích hình trụ là '+a;
};
LG['t9_kgmau']=function(it){
  var q=String(it.q),a=String(it.a);
  var m=q.match(/xúc xắc\s*(\d+)\s*mặt/);
  if(m){var n=+m[1];var arr=[];for(var i=1;i<=n;i++)arr.push(i);return 'Kết quả có thể là số chấm xuất hiện trên mặt con xúc xắc.\nKhông gian mẫu Ω = {'+arr.join('; ')+'}.\nVậy số phần tử của không gian mẫu là '+a;}
  m=q.match(/(\d+)\s*viên bi/);
  if(m){var k=+m[1];return 'Mỗi viên bi lấy ra là một kết quả có thể; các viên bi khác nhau nên có '+k+' kết quả.\nKhông gian mẫu Ω gồm '+k+' phần tử (mỗi phần tử là một viên bi).\nVậy số phần tử của không gian mẫu là '+a;}
  return 'Không gian mẫu là tập hợp tất cả các kết quả có thể của phép thử; đếm số kết quả đó.\nVậy số phần tử của không gian mẫu là '+a;
};

LG['t9_kniempt']=function(it){var m=String(it.q).match(/\((-?\d+);\s*(-?\d+)\).*?(-?\d+)x\s*([+\-–−])\s*(\d+)y\s*=\s*(-?\d+)/);if(!m)return 'Thay x, y vào vế trái của phương trình rồi so sánh với vế phải.\nVậy câu trả lời: '+it.a+'.';var x=+m[1],y=+m[2],a=+m[3],s=(m[4]==='+'?1:-1),b=+m[5],c=+m[6];var v=a*x+s*b*y;var op=s>0?' + ':' − ';var ok=v===c;return 'Thay x = '+x+', y = '+y+' vào vế trái của phương trình:\n'+a+'·'+x+op+b+'·'+y+' = '+(a*x)+op+(b*y)+' = '+v+'.\nVế phải bằng '+c+', ta thấy '+v+(ok?' = ':' ≠ ')+c+'.\n'+'Vậy '+(ok?'cặp số ('+x+'; '+y+') có là nghiệm của phương trình':'cặp số ('+x+'; '+y+') không là nghiệm của phương trình')+'. Trả lời: '+it.a+'.';};
LG['t9_laphe']=function(it){var m=String(it.q).match(/tất cả (\d+) học sinh.*?lớp 9B (\d+) học sinh/);if(!m)return 'Gọi số học sinh lớp 9A là x, lớp 9B là y; lập hệ x + y = tổng số học sinh, x − y = số học sinh hơn kém rồi giải.\nVậy '+String(it.a).charAt(0).toLowerCase()+String(it.a).slice(1)+'.';var S=+m[1],D=+m[2],x=(S+D)/2,y=(S-D)/2;var kq=String(it.a);kq=kq.charAt(0).toLowerCase()+kq.slice(1);return 'Gọi số học sinh lớp 9A là x, số học sinh lớp 9B là y (học sinh; x, y nguyên dương).\nVì hai lớp có tất cả '+S+' học sinh nên x + y = '+S+'.\nVì lớp 9A nhiều hơn lớp 9B '+D+' học sinh nên x − y = '+D+'.\nTa có hệ phương trình:\nx + y = '+S+'\nx − y = '+D+'\nCộng từng vế hai phương trình, ta được 2x = '+(S+D)+', suy ra x = '+x+'.\nThay x = '+x+' vào phương trình thứ nhất: y = '+S+' − '+x+' = '+y+'.\nCác giá trị x = '+x+', y = '+y+' thỏa mãn điều kiện.\n'+(D===0?'Hai lớp có số học sinh bằng nhau.':'Lớp 9A đông hơn lớp 9B.')+'\nVậy '+kq+'.';};
LG['t9_laptoanpt9']=function(it){var m=String(it.q).match(/hơn con (\d+) tuổi.*?là (\d+)/);if(!m)return 'Gọi tuổi con là x, tuổi bố là x + hiệu; lập phương trình tổng số tuổi rồi giải.\nVậy tuổi con là '+it.a+'.';var d=+m[1],s=+m[2],x=(s-d)/2;return 'Gọi tuổi con là x (tuổi, x > 0). Khi đó tuổi bố là x + '+d+'.\nVì tổng số tuổi hai bố con là '+s+' nên ta có phương trình:\nx + (x + '+d+') = '+s+'\n2x + '+d+' = '+s+'\n2x = '+(s-d)+'\nx = '+x+' (thỏa mãn điều kiện).\nVậy tuổi con là '+it.a+'.';};
LG['t9_nc1']=function(it){var m=String(it.q).match(/được (\d+) lít.*?hơn vòi thứ hai (\d+) lít/);if(!m)return 'Gọi lượng nước mỗi vòi chảy trong 1 giờ là x, y; lập hệ tổng – hiệu rồi giải.\nVậy vòi chảy nhiều hơn mỗi giờ chảy được '+it.a+'.';var S=+m[1],D=+m[2],x=(S+D)/2,y=(S-D)/2;return 'Gọi x, y (lít) lần lượt là lượng nước vòi thứ nhất, vòi thứ hai chảy được trong 1 giờ (x > y > 0).\nTheo đề bài ta có hệ phương trình:\nx + y = '+S+'\nx − y = '+D+'\nCộng từng vế: 2x = '+(S+D)+', suy ra x = '+x+'.\nKhi đó y = '+S+' − '+x+' = '+y+' (thỏa mãn).\nVòi thứ nhất chảy nhiều hơn.\nVậy mỗi giờ vòi chảy nhiều hơn được '+it.a+'.';};
LG['t9_nc2']=function(it){var m=String(it.q).match(/tổng bằng (\d+) và tích bằng (\d+)/);if(!m)return 'Hai số cần tìm là nghiệm của phương trình X² − SX + P = 0.\nVậy '+it.a+'.';var S=+m[1],P=+m[2],D=S*S-4*P;var r=Math.sqrt(D);var x1=(S-r)/2,x2=(S+r)/2;return 'Theo định lí Viète đảo, hai số cần tìm là nghiệm của phương trình X² − '+S+'X + '+P+' = 0.\nΔ = '+S+'² − 4·'+P+' = '+(S*S)+' − '+(4*P)+' = '+D+(D>=0?' ≥ 0':' < 0')+'.\n'+(D===0?'Phương trình có nghiệm kép X₁ = X₂ = '+S+' : 2 = '+x1+'.':'√Δ = '+r+'; X₁ = ('+S+' − '+r+') : 2 = '+x1+', X₂ = ('+S+' + '+r+') : 2 = '+x2+'.')+'\nĐáp số: '+it.a+'.';};
LG['t9_ngoainoitiep']=function(it){var q=String(it.q);if(/ngoại tiếp/.test(q))return 'Tâm đường tròn ngoại tiếp tam giác cách đều ba đỉnh của tam giác.\nĐiểm cách đều hai đầu mút của một đoạn thẳng thì nằm trên đường trung trực của đoạn thẳng đó.\nVậy tâm đường tròn ngoại tiếp là giao điểm ba đường '+it.a+' của tam giác.';return 'Tâm đường tròn nội tiếp tam giác cách đều ba cạnh của tam giác.\nĐiểm nằm trong một góc và cách đều hai cạnh của góc thì nằm trên tia phân giác của góc đó.\nVậy tâm đường tròn nội tiếp là giao điểm ba đường '+it.a+' của tam giác.';};
LG['t9_nhancan']=function(it){var m=String(it.q).match(/√(\d+)\s*[×x·]\s*√(\d+)/);if(!m)return 'Áp dụng √a · √b = √(a·b) với a, b ≥ 0.\nVậy kết quả là '+it.a+'.';var a=+m[1],b=+m[2],p=a*b;return 'Áp dụng quy tắc nhân các căn bậc hai: √a · √b = √(a·b) (a, b ≥ 0).\n√'+a+' × √'+b+' = √('+a+' · '+b+') = √'+p+' = '+Math.round(Math.sqrt(p))+'.\n(Hoặc: √'+a+' = '+Math.sqrt(a)+', √'+b+' = '+Math.sqrt(b)+', nên tích bằng '+Math.sqrt(a)+' · '+Math.sqrt(b)+' = '+Math.round(Math.sqrt(p))+'.)\nVậy kết quả là '+it.a+'.';};
LG['t9_ptb2']=function(it){var q=String(it.q).replace(/[–−]/g,'-').replace(/\s+/g,'');var m=q.match(/x²([+-]\d*x)?([+-]\d+)?=0/);if(!m)return 'Tính Δ = b² − 4ac rồi áp dụng công thức nghiệm.\nVậy '+it.a+'.';var b=0,c=0;if(m[1]){var t=m[1].slice(0,-1);b=t==='+'?1:t==='-'?-1:+t;}if(m[2])c=+m[2];var f=function(v){return v<0?'−'+(-v):''+v;};var out='';if(c===0){out='Đặt nhân tử chung: x(x '+(b<0?'− '+(-b):'+ '+b)+') = 0.\nSuy ra x = 0 hoặc x '+(b<0?'− '+(-b):'+ '+b)+' = 0, tức x = 0 hoặc x = '+f(-b)+'.';}else if(b===0){out='Chuyển vế: x² = '+f(-c)+'.\nSuy ra x = '+Math.sqrt(-c)+' hoặc x = −'+Math.sqrt(-c)+'.';}else{var D=b*b-4*c,r=Math.sqrt(D);out='Phương trình có a = 1, b = '+f(b)+', c = '+f(c)+'.\nΔ = b² − 4ac = '+(b<0?'('+f(b)+')':b)+'² − 4·1·'+(c<0?'('+f(c)+')':c)+' = '+D+'.\n';if(D===0)out+='Δ = 0 nên phương trình có nghiệm kép x₁ = x₂ = −b/(2a) = '+f(-b/2)+'.';else out+='Δ > 0, √Δ = '+r+', phương trình có hai nghiệm phân biệt:\nx₁ = (−b − √Δ)/(2a) = ('+f(-b)+' − '+r+')/2 = '+f((-b-r)/2)+'\nx₂ = (−b + √Δ)/(2a) = ('+f(-b)+' + '+r+')/2 = '+f((-b+r)/2)+'.';}return out+'\nVậy phương trình có nghiệm: '+it.a+'.';};
LG['t9_ptquy9']=function(it){var q=String(it.q).replace(/[–−]/g,'-');var m=q.match(/\(x\s*([+-])\s*(\d+)\)\s*\(x\s*([+-])\s*(\d+)\)/);if(!m)return 'Áp dụng: A·B = 0 khi A = 0 hoặc B = 0.\nVậy '+it.a+'.';var f=function(s,n){return s==='-'?''+n:'−'+n;};var g=function(s,n){return '(x '+(s==='-'?'− ':'+ ')+n+')';};return 'Áp dụng tính chất: A·B = 0 khi và chỉ khi A = 0 hoặc B = 0.\n'+g(m[1],m[2])+g(m[3],m[4])+' = 0\n⇔ x '+(m[1]==='-'?'− ':'+ ')+m[2]+' = 0 hoặc x '+(m[3]==='-'?'− ':'+ ')+m[4]+' = 0\n⇔ x = '+f(m[1],m[2])+' hoặc x = '+f(m[3],m[4])+'.\nVậy phương trình có nghiệm '+it.a+'.';};
LG['t9_pytago']=function(it){var q=String(it.q);var m;if((m=q.match(/huyền (\d+) cm, một cạnh góc vuông (\d+) cm/))){var c=+m[1],a=+m[2],x2=c*c-a*a;return 'Theo định lí Pythagore: (cạnh huyền)² = tổng bình phương hai cạnh góc vuông.\nGọi cạnh góc vuông còn lại là x (cm), ta có: x² = '+c+'² − '+a+'² = '+(c*c)+' − '+(a*a)+' = '+x2+'.\nSuy ra x = √'+x2+' = '+Math.sqrt(x2)+' (cm).\nVậy cạnh góc vuông còn lại là '+it.a+'.';}if((m=q.match(/vuông (\d+) cm và (\d+) cm/))){var a=+m[1],b=+m[2],s=a*a+b*b;return 'Theo định lí Pythagore: (cạnh huyền)² = tổng bình phương hai cạnh góc vuông.\nGọi cạnh huyền là x (cm), ta có: x² = '+a+'² + '+b+'² = '+(a*a)+' + '+(b*b)+' = '+s+'.\nSuy ra x = √'+s+' = '+Math.sqrt(s)+' (cm).\nVậy cạnh huyền là '+it.a+'.';}return 'Áp dụng định lí Pythagore: a² = b² + c² (a là cạnh huyền).\nVậy đáp số: '+it.a+'.';};
LG['t9_tanso22']=function(it){var q=String(it.q);var m=q.match(/:\s*([\d,\s]+)\.\s*Tần số của điểm (\d+)/);if(!m)return 'Đếm số lần giá trị đó xuất hiện trong dãy dữ liệu.\nVậy tần số là '+it.a+'.';var L=m[1].split(',').map(function(s){return +s.trim();}).filter(function(v){return !isNaN(v);});var v=+m[2],k=L.filter(function(x){return x===v;}).length;return 'Tần số của một giá trị là số lần giá trị đó xuất hiện trong mẫu dữ liệu.\nDãy có '+L.length+' giá trị; điểm '+v+' xuất hiện '+k+' lần.\nVậy tần số của điểm '+v+' là '+it.a+'.';};
LG['t9_tanso9']=function(it){var m=String(it.q).match(/Trong (\d+) lượt.*?có (\d+) lượt/);if(!m)return 'Tần số tương đối f = n/N · 100%.\nVậy tần số tương đối là '+it.a+'.';var N=+m[1],n=+m[2];var p=Math.round(n/N*100*100)/100;return 'Tần số tương đối của một giá trị: f = (tần số : cỡ mẫu) · 100%.\nf = '+n+' : '+N+' · 100% = '+String(p).replace('.',',')+'%.\nVậy tần số tương đối của phương án A là '+it.a+'.';};
LG['t9_tansoghep']=function(it){var q=String(it.q);var m=q.match(/:\s*([\d,\s]+)\.\s*Tần số của nhóm \[(\d+);\s*(\d+)\)/);if(!m)return 'Đếm các giá trị x thỏa mãn đầu mút trái ≤ x < đầu mút phải.\nVậy tần số của nhóm là '+it.a+'.';var L=m[1].split(',').map(function(s){return +s.trim();}).filter(function(v){return !isNaN(v);});var a=+m[2],b=+m[3];var S=L.filter(function(x){return x>=a&&x<b;});return 'Tần số của nhóm ['+a+'; '+b+') là số giá trị x của mẫu thỏa mãn '+a+' ≤ x < '+b+' (lấy đầu mút trái, không lấy đầu mút phải).\n'+(S.length?'Các giá trị thuộc nhóm: '+S.join(', ')+'.':'Không có giá trị nào thuộc nhóm.')+'\nĐếm được '+S.length+' giá trị.\nVậy tần số của nhóm ['+a+'; '+b+') là '+it.a+'.';};
LG['t9_tgnoitiep']=function(it){var m=String(it.q).match(/góc A = (\d+)°/);if(!m)return 'Trong tứ giác nội tiếp, tổng hai góc đối bằng 180°.\nVậy góc C = '+it.a+'.';var A=+m[1];return 'Trong tứ giác nội tiếp, tổng số đo hai góc đối nhau bằng 180°.\nDo đó góc A + góc C = 180°.\nSuy ra góc C = 180° − '+A+'° = '+(180-A)+'°.\nVậy góc C = '+it.a+'.';};
LG['t9_tsl']=function(it){var m=String(it.q).match(/(sin|cos|tan)\s*(\d+)°/);if(!m)return 'Dùng bảng tỉ số lượng giác của các góc đặc biệt.\nVậy kết quả là '+it.a+'.';var f=m[1],g=m[2];var dn={sin:'sin α = cạnh đối : cạnh huyền',cos:'cos α = cạnh kề : cạnh huyền',tan:'tan α = cạnh đối : cạnh kề'}[f];var tri='Xét tam giác đều ABC cạnh 2, kẻ đường cao AH. Tam giác ABH vuông tại H có góc B = 60°, góc BAH = 30°, AB = 2, BH = 1, AH = √(2² − 1²) = √3.';var body={'sin30':tri+'\nsin 30° = BH : AB = 1/2.','cos60':tri+'\ncos 60° = cos B = BH : AB = 1/2.','cos30':tri+'\ncos 30° = AH : AB = √3/2.','tan45':'Xét tam giác vuông cân có hai cạnh góc vuông bằng 1; góc nhọn bằng 45°.\ntan 45° = cạnh đối : cạnh kề = 1 : 1 = 1.','sin90':'Góc 90° không phải góc nhọn; theo quy ước trong bảng giá trị lượng giác: sin 90° = 1 (khi góc nhọn α tăng dần đến 90° thì cạnh đối càng gần bằng cạnh huyền).'}[f+g];return (f+g==='sin90'?'':'Áp dụng định nghĩa: '+dn+'.\n')+(body||'Tra bảng tỉ số lượng giác của các góc đặc biệt.')+'\nVậy '+f+' '+g+'° = '+it.a+'.';};

LG['t9_viete']=function(it){var q=String(it.q||'').replace(/[−–]/g,'-'),a=String(it.a);var m=q.match(/x²\s*([+-])\s*(\d*)\s*x\s*([+-])\s*(\d+)\s*=\s*0/);if(!m)return 'Áp dụng hệ thức Viète cho phương trình ax² + bx + c = 0:\nx₁ + x₂ = −b/a; x₁ · x₂ = c/a.\nVậy kết quả là '+a+'.';var b=(m[1]=='-'?-1:1)*(m[2]===''?1:+m[2]),c=(m[3]=='-'?-1:1)*(+m[4]);var tong=/x₁\s*\+\s*x₂/.test(q.split('Tính')[1]||'');var fm=function(n){return n<0?'−'+(-n):''+n};var L=['Phương trình có a = 1, b = '+fm(b)+', c = '+fm(c)+'.'];var D=b*b-4*c;L.push('Δ = b² − 4ac = '+(b<0?'('+fm(b)+')':b)+'² − 4 · 1 · '+(c<0?'('+fm(c)+')':c)+' = '+fm(D)+(D>0?' > 0 nên phương trình có hai nghiệm phân biệt x₁, x₂.':D===0?' = 0 nên phương trình có nghiệm kép x₁ = x₂.':' < 0.'));if(D<0)L.push('Lưu ý: Δ < 0 nên thực ra phương trình vô nghiệm. Ở đây ta làm theo giả thiết của đề (phương trình có hai nghiệm) và áp dụng công thức Viète.');if(tong){L.push('Theo hệ thức Viète: x₁ + x₂ = −b/a = '+(b<0?'−('+fm(b)+')':'−'+b)+'/1 = '+fm(-b)+'.');L.push('Vậy x₁ + x₂ = '+a+'.')}else{L.push('Theo hệ thức Viète: x₁ · x₂ = c/a = '+fm(c)+'/1 = '+fm(c)+'.');L.push('Vậy x₁ · x₂ = '+a+'.')}return L.join('\n')};
LG['t9_vitri2dt']=function(it){var q=String(it.q||''),a=String(it.a);var g=function(re){var m=q.match(re);return m?+m[1]:NaN};var R=g(/R\s*=\s*(\d+)/),r=g(/r\s*=\s*(\d+)/),d=g(/d\s*=\s*(\d+)/);var L=['Gọi R, r là bán kính hai đường tròn (R ≥ r), d là khoảng cách hai tâm.','So sánh d với R + r và R − r:'];if(isNaN(R)||isNaN(r)||isNaN(d)){L.push('d > R + r: ở ngoài nhau; d = R + r: tiếp xúc ngoài; R − r < d < R + r: cắt nhau; d = R − r: tiếp xúc trong; d < R − r: đựng nhau.');L.push('Vậy vị trí tương đối: '+a+'.');return L.join('\n')}var s=R+r,h=R-r;L.push('R + r = '+R+' + '+r+' = '+s+' (cm); R − r = '+R+' − '+r+' = '+h+' (cm).');var ss;if(d>s)ss='d = '+d+' cm > R + r = '+s+' cm nên hai đường tròn ở ngoài nhau.';else if(d===s)ss='d = '+d+' cm = R + r nên hai đường tròn tiếp xúc ngoài.';else if(d>h)ss='R − r = '+h+' cm < d = '+d+' cm < R + r = '+s+' cm nên hai đường tròn cắt nhau.';else if(d===h)ss='d = '+d+' cm = R − r nên hai đường tròn tiếp xúc trong.';else ss='d = '+d+' cm < R − r = '+h+' cm nên đường tròn lớn đựng đường tròn nhỏ.';L.push('Ta có '+ss);L.push('Vậy vị trí tương đối: '+a+'.');return L.join('\n')};
LG['t9_vitridt']=function(it){var q=String(it.q||''),a=String(it.a);var mR=q.match(/R\s*=\s*(\d+)/),md=q.match(/d\s*=\s*(\d+)/);var L=['So sánh khoảng cách d từ tâm đến đường thẳng với bán kính R:','d < R: cắt nhau (2 điểm chung); d = R: tiếp xúc (1 điểm chung); d > R: không giao nhau.'];if(mR&&md){var R=+mR[1],d=+md[1];L.push('Ta có '+(d===R?'d = R = '+R+' cm':'d = '+d+' cm '+(d<R?'<':'>')+' R = '+R+' cm')+(d<R?' nên đường thẳng cắt đường tròn tại hai điểm.':d===R?' nên đường thẳng tiếp xúc với đường tròn.':' nên đường thẳng và đường tròn không có điểm chung.'))}L.push('Vậy vị trí tương đối: '+a+'.');return L.join('\n')};
LG['t9_xs9']=function(it){var q=String(it.q||''),a=String(it.a);var mn=q.match(/đến\s*(\d+)/),mk=q.match(/không lớn hơn\s*(\d+)/);if(!mn||!mk)return 'Xác suất = số kết quả thuận lợi : số kết quả có thể.\nVậy xác suất cần tìm là '+a+'.';var n=+mn[1],k=+mk[1];var gcd=function(x,y){return y?gcd(y,x%y):x};var g=gcd(k,n);var L=['Không gian mẫu Ω = {1; 2; …; '+n+'}, có '+n+' kết quả đồng khả năng (các quả cầu giống nhau).','Gọi A là biến cố "Lấy được quả ghi số không lớn hơn '+k+'". Các kết quả thuận lợi cho A là '+(k<=5?Array.from({length:k},function(_,i){return i+1}).join('; '):'1; 2; …; '+k)+', có '+k+' kết quả.','P(A) = '+k+'/'+n+(g>1?' = '+(k/g)+'/'+(n/g):'')+'.'];L.push('Vậy xác suất cần tìm là '+a+'.');return L.join('\n')};

})(window.LG);

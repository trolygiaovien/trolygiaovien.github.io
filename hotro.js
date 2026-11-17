/* ============================================================
   HỖ TRỢ HỌC SINH YẾU – Kỹ năng nền tảng (KNNT) để theo kịp chương trình
   KNNT['lop|mon'] = [kỹ năng,...] ; KNNT['*|mon'] = mặc định cho mọi khối của môn
   Dùng cho "Lộ trình kỹ năng nền tảng". Giáo viên có thể bổ sung sau.
   ============================================================ */
const KNNT={};

/* ---------- TOÁN (theo từng lớp) ---------- */
KNNT['1|Toán']=['Đếm, đọc, viết số trong phạm vi 100','So sánh các số (lớn hơn, bé hơn, bằng)','Cộng, trừ (không nhớ) trong phạm vi 10 và 20','Nhận biết hình vuông, tròn, tam giác, chữ nhật','Xem giờ đúng trên đồng hồ'];
KNNT['2|Toán']=['Cộng, trừ có nhớ trong phạm vi 100','Thuộc bảng nhân, chia 2 và 5','Đọc, viết, so sánh số đến 1000','Đơn vị đo độ dài (cm, dm, m) cơ bản','Giải bài toán có lời văn một bước'];
KNNT['3|Toán']=['Thuộc bảng nhân, chia từ 2 đến 9','Nhân, chia số có nhiều chữ số với số có 1 chữ số','Xem giờ, đổi đơn vị đo thông dụng','Tính chu vi hình chữ nhật, hình vuông','Giải toán có lời văn hai bước'];
KNNT['4|Toán']=['Đọc, viết, so sánh số tự nhiên lớn','Thành thạo 4 phép tính với số tự nhiên','Khái niệm phân số, phân số bằng nhau','Tính chu vi, diện tích hình chữ nhật, hình vuông','Giải toán có lời văn nhiều bước'];
KNNT['5|Toán']=['Phép tính với phân số','Phép tính với số thập phân','Tỉ số phần trăm cơ bản','Diện tích, thể tích các hình đã học','Giải toán chuyển động, tỉ lệ đơn giản'];
KNNT['6|Toán']=['Thứ tự thực hiện các phép tính','Dấu hiệu chia hết; ước và bội','Số nguyên âm, cộng trừ số nguyên','Phân số, số thập phân và phép tính','Làm tròn số, ước lượng kết quả'];
KNNT['7|Toán']=['Số hữu tỉ, số thực và phép tính','Tỉ lệ thức, dãy tỉ số bằng nhau','Biểu thức đại số, thu gọn đơn thức','Thống kê: đọc bảng, biểu đồ','Hình học: góc, tam giác cơ bản'];
KNNT['8|Toán']=['Nhân đa thức, bảy hằng đẳng thức đáng nhớ','Phân tích đa thức thành nhân tử','Phân thức đại số và phép tính','Phương trình bậc nhất một ẩn','Giải bài toán bằng cách lập phương trình'];
KNNT['9|Toán']=['Căn bậc hai, biến đổi căn thức','Hàm số bậc nhất và đồ thị','Phương trình, hệ phương trình','Phương trình bậc hai một ẩn','Hệ thức lượng trong tam giác vuông'];

/* ---------- TIẾNG VIỆT (tiểu học) ---------- */
KNNT['1|Tiếng Việt']=['Nhận biết, đọc đúng các âm và vần','Đọc trơn tiếng, từ, câu ngắn','Viết đúng chữ cái, vần, tiếng','Nghe – nói trong tình huống đơn giản','Tô, viết đúng độ cao, khoảng cách chữ'];
KNNT['2|Tiếng Việt']=['Đọc trơn đoạn ngắn và hiểu nội dung','Viết đúng chính tả (nghe – viết)','Mở rộng vốn từ theo chủ đề','Đặt câu đơn giản (Ai là gì? Ai làm gì?)','Nói thành câu rõ ý'];
KNNT['3|Tiếng Việt']=['Đọc hiểu đoạn, bài; trả lời câu hỏi','Viết đoạn văn ngắn 4–5 câu','Dùng dấu chấm, dấu phẩy đúng chỗ','Nhận biết từ chỉ sự vật, hoạt động, đặc điểm','Viết đúng chính tả bài đã học'];
KNNT['4|Tiếng Việt']=['Đọc hiểu bài dài, nêu ý chính','Xác định chủ ngữ – vị ngữ trong câu','Viết đoạn/bài văn kể, tả','Mở rộng vốn từ, dùng từ đúng nghĩa','Viết đúng chính tả, trình bày sạch đẹp'];
KNNT['5|Tiếng Việt']=['Đọc hiểu và cảm thụ nội dung bài','Viết bài văn tả, kể hoàn chỉnh 3 phần','Liên kết câu, liên kết đoạn','Biện pháp so sánh, nhân hóa cơ bản','Dùng từ, đặt câu đúng và hay hơn'];

/* ---------- NGỮ VĂN (THCS) ---------- */
KNNT['6|Ngữ văn']=['Đọc hiểu văn bản: nhận biết thể loại, chi tiết','Xác định từ loại, nghĩa của từ','Biện pháp so sánh, nhân hóa','Viết đoạn/bài kể lại trải nghiệm','Viết đúng chính tả, dùng từ, đặt câu'];
KNNT['7|Ngữ văn']=['Đọc hiểu thơ, truyện, văn nghị luận','Hiểu từ Hán Việt, thành ngữ, tục ngữ','Viết bài văn biểu cảm, kể chuyện','Dựng đoạn văn mạch lạc','Trạng ngữ và các thành phần câu'];
KNNT['8|Ngữ văn']=['Đọc hiểu nhiều thể loại văn bản','Viết bài nghị luận: luận điểm – lí lẽ – bằng chứng','Nhận biết kiểu câu, biện pháp tu từ','Bố cục ba phần của bài văn','Dùng từ Hán Việt, nói giảm nói tránh'];
KNNT['9|Ngữ văn']=['Đọc hiểu và phân tích văn bản','Viết nghị luận xã hội và văn học','Cách dẫn trực tiếp, gián tiếp','Liên kết, lập luận trong bài viết','Nghĩa gốc – nghĩa chuyển của từ'];

/* ---------- MẶC ĐỊNH THEO MÔN (mọi khối) ---------- */
KNNT['*|Tiếng Anh']=['Thuộc bảng chữ cái, phát âm cơ bản','Vốn từ các chủ đề quen thuộc','Cấu trúc câu cơ bản (to be, hiện tại đơn)','Đọc hiểu câu và đoạn ngắn','Nghe – nói giao tiếp đơn giản'];
KNNT['*|Khoa học tự nhiên']=['Nhớ khái niệm, thuật ngữ nền của bài','Đọc hiểu hiện tượng, sơ đồ, bảng biểu','Đổi đơn vị và tính toán cơ bản','Quan sát, mô tả sự vật – hiện tượng','Vận dụng vào ví dụ quen thuộc'];
KNNT['*|Lịch sử và Địa lí']=['Nhớ mốc thời gian, sự kiện, nhân vật chính','Đọc lược đồ, bản đồ, bảng số liệu','Sắp xếp sự kiện theo trình tự thời gian','Nêu đặc điểm cơ bản của vùng/giai đoạn','Liên hệ với địa phương, thực tế'];
KNNT['*|Giáo dục công dân']=['Nhớ khái niệm đạo đức – pháp luật cơ bản','Nhận biết hành vi đúng – sai','Nêu cách ứng xử phù hợp trong tình huống','Liên hệ, tự đánh giá bản thân','Biết quyền và bổn phận của học sinh'];
KNNT['*|Tin học']=['Thao tác cơ bản với máy tính','Gõ văn bản, lưu và mở tệp','Sử dụng Internet an toàn, văn minh','Hiểu khái niệm thuật toán đơn giản','Trình bày thông tin bằng bảng, sơ đồ'];
KNNT['*|Công nghệ']=['Nhớ khái niệm, công dụng của đồ vật/quy trình','Đọc hiểu quy trình kĩ thuật đơn giản','Thực hiện thao tác an toàn, đúng cách','Liên hệ thực tế gia đình, đời sống','Giữ an toàn lao động khi thực hành'];
KNNT['*|Tự nhiên và Xã hội']=['Nhận biết sự vật, hiện tượng xung quanh','Nêu đặc điểm cơ bản của cây, con, con người','Thói quen giữ vệ sinh, an toàn','Kể về gia đình, trường lớp, cộng đồng'];
KNNT['*|Khoa học']=['Nhớ kiến thức về vật chất, năng lượng','Hiểu về thực vật, động vật, con người','Quan sát, mô tả và làm thí nghiệm đơn giản','Vận dụng để giữ sức khỏe, bảo vệ môi trường'];
KNNT['*|Đạo đức']=['Nhận biết hành vi đúng – sai','Nêu việc nên làm, không nên làm','Cư xử lễ phép, trung thực, trách nhiệm','Liên hệ bản thân trong cuộc sống'];
KNNT['*|Âm nhạc']=['Nhận biết nốt nhạc, nhịp cơ bản','Hát đúng cao độ, trường độ, lời ca','Nghe và cảm nhận bài hát','Gõ đệm theo nhịp, phách đơn giản'];
KNNT['*|Mĩ thuật']=['Nhận biết màu sắc, hình, đường nét','Vẽ và tô màu cơ bản','Sắp xếp bố cục đơn giản','Hoàn thành sản phẩm theo đề tài'];
KNNT['*|Giáo dục thể chất']=['Thực hiện đúng các động tác cơ bản','Biết khởi động và bảo đảm an toàn','Tham gia trò chơi, vận động tích cực','Rèn sức bền, sự khéo léo'];
KNNT['*|Hoạt động trải nghiệm']=['Kĩ năng tự phục vụ bản thân','Giao tiếp, hợp tác với bạn','Nhận và hoàn thành nhiệm vụ được giao','Quản lí thời gian, đồ dùng cá nhân'];

/* helper: lấy kỹ năng nền tảng cho lớp + môn (ưu tiên theo lớp, sau đó theo môn) */
function knTT(lop,mon){return KNNT[lop+'|'+mon]||KNNT['*|'+mon]||[];}

/* ============================================================
   BỒI DƯỠNG HỌC SINH GIỎI – Chuyên đề nâng cao (KNNC)
   KNNC['lop|mon'] = [chuyên đề,...] ; KNNC['*|mon'] = mặc định cho mọi khối
   ============================================================ */
const KNNC={};

/* ---------- TOÁN (theo lớp) ---------- */
KNNC['1|Toán']=['Tìm quy luật dãy số, dãy hình','Đếm hình, ghép hình nâng cao','Bài toán đố vui, suy luận đơn giản','Tính nhanh, tính nhẩm khéo léo'];
KNNC['2|Toán']=['Dãy số có quy luật','Toán có lời văn nhiều cách giải','Điền số, tìm số theo điều kiện','Tính nhanh tổng – hiệu'];
KNNC['3|Toán']=['Tính nhanh, tính bằng cách thuận tiện','Toán về quy luật, trung bình cộng','Bài toán tìm hai số khi biết tổng – hiệu','Toán tư duy logic, suy luận'];
KNNC['4|Toán']=['Dấu hiệu chia hết; toán về số và chữ số','Tìm hai số khi biết tổng – tỉ, hiệu – tỉ','Toán trồng cây, chuyển động cơ bản','Bài toán hình học cắt ghép'];
KNNC['5|Toán']=['Toán chuyển động nâng cao','Toán tỉ số phần trăm, tỉ lệ nâng cao','Toán về tính tuổi, công việc chung','Diện tích, thể tích các hình phức hợp'];
KNNC['6|Toán']=['Dãy số có quy luật, tổng dãy số','Bài toán chia hết, số nguyên tố nâng cao','Nguyên lí Dirichlet (chuồng – thỏ) cơ bản','Toán suy luận logic','Phân số, tỉ lệ và bài toán thực tế nâng cao'];
KNNC['7|Toán']=['Dãy tỉ số bằng nhau nâng cao','Giá trị tuyệt đối và bài toán liên quan','Bất đẳng thức và giá trị lớn nhất – nhỏ nhất','Chứng minh hai tam giác bằng nhau','Toán thực tế, tối ưu đơn giản'];
KNNC['8|Toán']=['Phân tích đa thức, hằng đẳng thức nâng cao','Bất đẳng thức (Cô-si cơ bản)','Phương trình chứa dấu giá trị tuyệt đối','Định lí Ta-lét, tam giác đồng dạng nâng cao','Cực trị của biểu thức đại số'];
KNNC['9|Toán']=['Biến đổi căn thức phức tạp','Hệ thức Vi-ét và ứng dụng','Bất đẳng thức, bài toán cực trị','Hình học phẳng nâng cao (đường tròn, tiếp tuyến)','Toán thực tế – tối ưu, lập phương trình khó'];

/* ---------- TIẾNG VIỆT / NGỮ VĂN ---------- */
KNNC['*|Tiếng Việt']=['Cảm thụ văn học (hình ảnh, cái hay của câu văn, câu thơ)','Mở rộng vốn từ, dùng từ gợi hình, gợi cảm','Viết đoạn/bài văn sáng tạo, giàu cảm xúc','Biện pháp tu từ và tác dụng','Luyện viết văn hay, có ý riêng'];
KNNC['6|Ngữ văn']=['Cảm thụ chi tiết, hình ảnh đặc sắc','Phân tích tác dụng của biện pháp tu từ','Viết bài kể chuyện sáng tạo','Mở rộng, nâng cao vốn từ','Liên hệ, so sánh các văn bản'];
KNNC['7|Ngữ văn']=['Phân tích thơ, truyện ở mức sâu','Nghị luận văn học cơ bản','Viết văn biểu cảm giàu cảm xúc','Vận dụng thành ngữ, từ Hán Việt hay','So sánh, đánh giá tác phẩm'];
KNNC['8|Ngữ văn']=['Nghị luận xã hội và văn học chặt chẽ','Phân tích nhân vật, chủ đề sâu sắc','Lập luận, dùng dẫn chứng thuyết phục','Viết sáng tạo, mở rộng vấn đề','Cảm thụ và bình giá nghệ thuật'];
KNNC['9|Ngữ văn']=['Phân tích, bình giảng tác phẩm','Nghị luận văn học và xã hội nâng cao','Liên hệ, mở rộng, so sánh tác phẩm','Lập luận sắc sảo, hành văn mạch lạc','Viết bài có quan điểm, sáng tạo'];

/* ---------- MẶC ĐỊNH THEO MÔN ---------- */
KNNC['*|Tiếng Anh']=['Mở rộng vốn từ và thành ngữ','Ngữ pháp nâng cao, câu phức','Đọc hiểu đoạn dài, suy luận','Nghe hiểu và nói lưu loát','Viết đoạn văn theo chủ đề'];
KNNC['*|Khoa học tự nhiên']=['Vận dụng kiến thức giải thích hiện tượng thực tế','Bài tập tính toán nâng cao','Thiết kế, tiến hành thí nghiệm','Phân tích số liệu, đồ thị','Giải quyết vấn đề liên môn'];
KNNC['*|Lịch sử và Địa lí']=['Phân tích nguyên nhân – kết quả sự kiện','So sánh, đánh giá các giai đoạn, khu vực','Khai thác tư liệu, lược đồ nâng cao','Liên hệ lịch sử – địa lí với hiện tại','Trình bày, lập luận một vấn đề'];
KNNC['*|Giáo dục công dân']=['Phân tích tình huống đạo đức – pháp luật','Lập luận bảo vệ quan điểm đúng','Đề xuất giải pháp cho vấn đề xã hội','Liên hệ, vận dụng vào thực tiễn','Dự án, hoạt động cộng đồng'];
KNNC['*|Tin học']=['Tư duy thuật toán, giải bài toán','Lập trình giải quyết vấn đề','Xử lí dữ liệu bằng bảng tính nâng cao','Thiết kế sản phẩm số sáng tạo','An toàn, đạo đức số nâng cao'];
KNNC['*|Công nghệ']=['Thiết kế kĩ thuật sáng tạo','Vận dụng quy trình vào sản phẩm thực tế','Giải quyết vấn đề kĩ thuật','Định hướng nghề nghiệp, STEM','Cải tiến, tối ưu sản phẩm'];
KNNC['*|Tự nhiên và Xã hội']=['Quan sát, đặt câu hỏi và tìm hiểu sâu','Giải thích hiện tượng quen thuộc','Liên hệ, vận dụng vào cuộc sống'];
KNNC['*|Khoa học']=['Vận dụng kiến thức vào thực tế','Làm thí nghiệm, rút ra kết luận','Giải thích hiện tượng tự nhiên','Đề xuất cách bảo vệ sức khỏe, môi trường'];
KNNC['*|Đạo đức']=['Phân tích, xử lí tình huống đạo đức','Nêu và bảo vệ quan điểm đúng','Làm gương, lan tỏa việc tốt'];
KNNC['*|Âm nhạc']=['Hát, biểu diễn có sắc thái','Cảm thụ và phân tích tác phẩm','Sáng tạo vận động, gõ đệm','Biểu diễn trước tập thể'];
KNNC['*|Mĩ thuật']=['Sáng tạo bố cục, màu sắc riêng','Vận dụng mĩ thuật ứng dụng','Thể hiện ý tưởng cá nhân','Giới thiệu, nhận xét sản phẩm'];
KNNC['*|Giáo dục thể chất']=['Thực hiện kĩ thuật ở mức thành thạo','Thi đấu, vận dụng chiến thuật','Dẫn dắt nhóm, trọng tài đơn giản','Rèn thể lực chuyên sâu'];
KNNC['*|Hoạt động trải nghiệm']=['Chủ động tổ chức hoạt động','Lãnh đạo nhóm, thuyết trình','Thiết kế dự án trải nghiệm','Định hướng nghề nghiệp sớm'];

/* helper: lấy chuyên đề nâng cao cho lớp + môn */
function knNC(lop,mon){return KNNC[lop+'|'+mon]||KNNC['*|'+mon]||[];}

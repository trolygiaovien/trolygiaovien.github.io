/* CẤU HÌNH MÁY CHỦ – dán URL Web app của Google Apps Script (kết thúc bằng /exec) vào API_URL.
   Để trống '' thì ứng dụng chạy chế độ không đăng nhập, dữ liệu chỉ lưu trên máy. */
window.TLGV_CFG = {
  API_URL: 'https://script.google.com/macros/s/AKfycbwgB5dKC4w-2iOdOhaD-2JfkyX_NGv5N6NgFA45_WqBW54PguwvfFowNm1RYAvICWJY/exec',
  KHO_URL: 'https://tlgv-kho.giaynulacota.workers.dev',   // địa chỉ máy chủ kho câu hỏi (Cloudflare Worker), ví dụ 'https://tlgv-kho.<tên>.workers.dev'. Để trống = chỉ dùng kho mẫu.
  LIEN_HE: '081.363.1111',
  /* THÔNG TIN PHÁP LÝ – hiện trong Điều khoản và Chính sách bảo vệ dữ liệu cá nhân.
     Khi có Giấy chứng nhận hộ kinh doanh, sửa DON_VI và thêm MA_SO. Đổi PHIEN_BAN khi sửa nội dung điều khoản
     (người dùng sẽ được yêu cầu đồng ý lại). */
  PHAP_LY: {
    DON_VI: 'Lương Văn Chung',
    MA_SO: '',
    DIA_CHI: 'Thôn Nội Đơn, xã Vĩnh Bảo, thành phố Hải Phòng',
    EMAIL: 'luongvanchungbdshl@gmail.com',
    SDT: '081.363.1111',
    PHIEN_BAN: '1.2',
    NGAY: '09/11/2026'
  }
};

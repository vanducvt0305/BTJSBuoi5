let getElement = (selector) => {
  return document.querySelector(selector);
};

let diemChuanHoiDong = getElement("#diemChuanHoiDong");
let diemThiToan = getElement("#diemThiToan");
let diemThiVatLy = getElement("#diemThiVatLy");
let diemThiHoa = getElement("#diemThiHoa");
let khuVuc = getElement("#khuVuc");
let doiTuong = getElement("#doiTuong");

let tongDiem = getElement("#tongDiem");
let tongKet = getElement("#tongKet");

let tongKetClick = getElement("#tongKetClick");
tongKetClick.onclick = () => {
  let diemKhuVuc;
  if (khuVuc.value == "A") {
    diemKhuVuc = 2;
  } else if (khuVuc.value == "B") {
    diemKhuVuc = 1;
  } else if (khuVuc.value == "C") {
    diemKhuVuc = 0.5;
  } else {
    diemKhuVuc = 0;
  }

  let diemDoiTuong;
  if (doiTuong.value == 1) {
    diemDoiTuong = 2.5;
  } else if (doiTuong.value == 2) {
    diemDoiTuong = 1.5;
  } else if (doiTuong.value == 3) {
    diemDoiTuong = 1;
  } else {
    diemDoiTuong = 0;
  }
  let tongDiemSo =
    parseFloat(diemThiToan.value) +
    parseFloat(diemThiVatLy.value) +
    parseFloat(diemThiHoa.value) +
    parseFloat(diemKhuVuc) +
    parseFloat(diemDoiTuong);

  tongDiem.innerHTML = tongDiemSo;
  if (
    tongDiemSo > parseFloat(diemChuanHoiDong.value) &&
    parseFloat(diemThiToan.value) != 0 &&
    parseFloat(diemThiVatLy.value) != 0 &&
    parseFloat(diemThiHoa.value) != 0
  ) {
    tongKet.innerHTML = "Đậu";
  } else {
    tongKet.innerHTML = "Rớt";
  }
};

// Tính tiền điện

let soKwDienTieuThu = getElement("#soKwDienTieuThu");
let tongKetDienDom = getElement("#tongKetDienDom");
let tongKetTienDien = getElement("#tongKetTienDien");
let tongKetDien;
tongKetDienDom.onclick = () => {
  if (parseFloat(soKwDienTieuThu.value) < 50) {
    tongKetDien = parseFloat(soKwDienTieuThu.value) * 500;
    tongKetTienDien.innerHTML = tongKetDien;
  } else if (
    parseFloat(soKwDienTieuThu.value) >= 50 &&
    parseFloat(soKwDienTieuThu.value) < 100
  ) {
    tongKetDien = 50 * 500 + (parseFloat(soKwDienTieuThu.value) - 50) * 650;
    tongKetTienDien.innerHTML = tongKetDien;
  } else if (
    parseFloat(soKwDienTieuThu.value) >= 100 &&
    parseFloat(soKwDienTieuThu.value) < 200
  ) {
    tongKetDien =
      50 * 500 + 50 * 650 + (parseFloat(soKwDienTieuThu.value) - 100) * 850;
    tongKetTienDien.innerHTML = tongKetDien;
  } else if (
    parseFloat(soKwDienTieuThu.value) >= 200 &&
    parseFloat(soKwDienTieuThu.value) < 350
  ) {
    tongKetDien =
      50 * 500 +
      50 * 650 +
      100 * 850 +
      (parseFloat(soKwDienTieuThu.value) - 200) * 1100;
    tongKetTienDien.innerHTML = tongKetDien;
  } else {
    tongKetDien =
      50 * 500 +
      50 * 650 +
      100 * 850 +
      150 * 1100 +
      (parseFloat(soKwDienTieuThu.value) - 350) * 1300;
    tongKetTienDien.innerHTML = tongKetDien;
  }
};

// Tính thuế thu nhập
let hoTen = getElement("#hoTen");
let thuNhap = getElement("#thuNhap");
let soNguoiPhuThuoc = getElement("#soNguoiPhuThuoc");

let tongKetThue = getElement("#tongKetThue");
let tongKetThuNhapPhaiTra = getElement("#tongKetThuNhapPhaiTra");

tongKetThue.onclick = () => {
  let thuNhapChiuThue =
    parseFloat(thuNhap.value) - 4 - parseFloat(soNguoiPhuThuoc.value) * 1.6;
  let soThuePhaiTra;
  if (thuNhapChiuThue <= 60) {
    soThuePhaiTra = thuNhapChiuThue * 0.05;
  } else if (thuNhapChiuThue > 60 && thuNhapChiuThue <= 120) {
    soThuePhaiTra = 60 * 0.05 + (thuNhapChiuThue - 60) * 0.1;
  } else if (thuNhapChiuThue > 120 && thuNhapChiuThue <= 210) {
    soThuePhaiTra = 60 * 0.05 + 60 * 0.1 + (thuNhapChiuThue - 120) * 0.15;
  } else if (thuNhapChiuThue > 210 && thuNhapChiuThue <= 384) {
    soThuePhaiTra =
      60 * 0.05 + 60 * 0.1 + 90 * 0.15 + (thuNhapChiuThue - 210) * 0.2;
  } else if (thuNhapChiuThue > 384 && thuNhapChiuThue <= 624) {
    soThuePhaiTra =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      (thuNhapChiuThue - 384) * 0.25;
  } else if (thuNhapChiuThue > 624 && thuNhapChiuThue <= 960) {
    soThuePhaiTra =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      (thuNhapChiuThue - 624) * 0.3;
  } else {
    soThuePhaiTra =
      60 * 0.05 +
      60 * 0.1 +
      90 * 0.15 +
      174 * 0.2 +
      240 * 0.25 +
      336 * 0.3 +
      (thuNhapChiuThue - 960) * 0.35;
  }
  tongKetThuNhapPhaiTra.innerHTML = soThuePhaiTra.toFixed(2);
};

// Tính hoá đơn Cap
let showKetNoi = getElement("#showKetNoi");
let tinhChiPhiHoaDon = getElement("#tinhChiPhiHoaDon");
const radios = document.querySelectorAll('input[name="option"]');
let soKetNoi = getElement("#soKetNoi");
let soKenhCaoCap = getElement("#soKenhCaoCap");
let showBlock = getElement("#showBlock");
let tongChiPhiCap;
let showChiPhiHoaDon = getElement("#showChiPhiHoaDon");
radios.forEach((radio) => {
  radio.addEventListener("change", (event) => {
    if (event.target.value == "KHDN") {
      showKetNoi.classList.toggle("hidden");
      setTimeout(() => {
        showKetNoi.classList.remove("opacity-0");
        showKetNoi.classList.add("opacity-100");
      }, 10);
    } else {
      showKetNoi.classList.remove("opacity-100");
      showKetNoi.classList.add("opacity-0");
      setTimeout(() => {
        showKetNoi.classList.toggle("hidden");
      }, 1000);
    }
  });
});

tinhChiPhiHoaDon.onclick = () => {
  let selectValue;
  radios.forEach((radio) => {
    if (radio.checked) {
      selectValue = radio.value;
      if (selectValue == "KHDN") {
        let phiXuLyHoaDon = 15;
        let phiDichVuCoBan;
        let phiThueKenhCaoCap = 50;
        if (parseFloat(soKetNoi.value) > 10) {
          phiDichVuCoBan = 75 + (parseFloat(soKetNoi.value) - 10) * 5;
          tongChiPhiCap =
            phiXuLyHoaDon +
            phiDichVuCoBan +
            parseFloat(soKenhCaoCap.value) * 50;
          showBlock.classList.remove("hidden");
          showChiPhiHoaDon.innerHTML = tongChiPhiCap + " $";
        } else {
          phiDichVuCoBan = 75;
          tongChiPhiCap =
            phiXuLyHoaDon +
            phiDichVuCoBan +
            parseFloat(soKenhCaoCap.value) * 50;
          showChiPhiHoaDon.innerHTML = tongChiPhiCap + " $";
          showBlock.classList.remove("hidden");
        }
      } else {
        let phiXuLyHoaDon = 4.5;
        let phiDichVuCoBan = 20.5;
        let phiThueKenhCaoCap = 7.5;
        tongChiPhiCap =
          phiXuLyHoaDon + phiDichVuCoBan + parseFloat(soKenhCaoCap.value) * 7.5;
        showChiPhiHoaDon.innerHTML = tongChiPhiCap + " $";
        showBlock.classList.remove("hidden");
      }
    }
  });
};

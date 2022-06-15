
/**-------Bài tập 1: Tính ngày tháng năm-------- 
 
 * Input: ngày, tháng, năm
 * Xử lý:
 * + Tạo biến ngayNhap lấy value
 * + Tạo biến thangNhap lấy value
 * + Tạo biến namNhap lấy value
 * + Tạo biến ketQua_5 = '';

 * Output: 
 * + Ngày tháng năm.
*/
document.getElementById('homQua').onclick = function () {
    var ngayNhap = +document.getElementById('ngayNhap').value;
    var thangNhap = +document.getElementById('thangNhap').value;
    var namNhap = +document.getElementById('namNhap').value;
    var ketQua_5 = '';
    if (ngayNhap === 1 && thangNhap === 1) {
        namNhap -= 1;
        ketQua_5 = 31 + '/' + 12 + '/' + namNhap
    } else if (ngayNhap === 1 && thangNhap === 2 || ngayNhap === 1 && thangNhap === 4 || ngayNhap === 1 && thangNhap === 6 || ngayNhap === 1 && thangNhap === 9 || ngayNhap === 1 && thangNhap === 11 || ngayNhap === 1 && thangNhap === 8) {
        thangNhap -= 1;
        ketQua_5 = 31 + '/' + thangNhap + '/' + namNhap;
    } else if (ngayNhap === 1 && thangNhap === 5 || ngayNhap === 1 && thangNhap === 7 || ngayNhap === 1 && thangNhap === 10 || ngayNhap === 1 && thangNhap === 12) {
        thangNhap -= 1;
        ketQua_5 = 30 + '/' + thangNhap + '/' + namNhap;
    } else if (ngayNhap === 1 && thangNhap === 3) {
        thangNhap -= 1;
        ketQua_5 = 28 + '/' + thangNhap + '/' + namNhap;
    } else {
        ngayNhap -= 1;
        ketQua_5 = ngayNhap + '/' + thangNhap + '/' + namNhap;
    }
    document.getElementById('ketQua_5').innerHTML = ketQua_5;
}

document.getElementById('ngayMai').onclick = function () {
    var ngayNhap = +document.getElementById('ngayNhap').value;
    var thangNhap = +document.getElementById('thangNhap').value;
    var namNhap = +document.getElementById('namNhap').value;
    var ketQua_5 = '';
    if (ngayNhap === 31 && thangNhap === 12) {
        namNhap += 1;
        ketQua_5 = 1 + '/' + 1 + '/' + namNhap
    } else if (ngayNhap === 31 && thangNhap === 1 || ngayNhap === 30 && thangNhap === 2 || ngayNhap === 31 && thangNhap === 3 || ngayNhap === 30 && thangNhap === 4 || ngayNhap === 31 && thangNhap === 5 || ngayNhap === 30 && thangNhap === 6 || ngayNhap === 31 && thangNhap === 7 || ngayNhap === 31 && thangNhap === 8 || ngayNhap === 30 && thangNhap === 9 || ngayNhap === 31 && thangNhap === 10 || ngayNhap === 30 && thangNhap === 11) {
        thangNhap += 1;
        ketQua_5 = 1 + '/' + thangNhap + '/' + namNhap;
    } else {
        ngayNhap += 1;
        ketQua_5 = ngayNhap + '/' + thangNhap + '/' + namNhap;
    }
    document.getElementById('ketQua_5').innerHTML = ketQua_5;
}

/**-------Bài tập 2: Tính ngày -------- 
 
 * Input: tháng, năm
 * Xử lý:
 * + Tạo biến nhapThang lấy value
 * + Tạo biến nhapNam lấy value
 * + Tạo biến ketQua_b6 = '';

 * Output: 
 * + In ra số ngày.
*/
document.getElementById('tinhNgay').onclick = function () {
    var nhapThang = +document.getElementById('nhapThang').value;
    var nhapNam = +document.getElementById('nhapNam').value;
    var ketQua_b6 = 0;

    if (nhapThang === 2 && nhapNam % 400 === 0) {
        ketQua_b6 = 'Tháng ' + nhapThang + ' năm ' + nhapNam + ' có 29 ngày'
    } else if (nhapThang === 2 && nhapNam % 400 !== 0) {
        ketQua_b6 = 'Tháng ' + nhapThang + ' năm ' + nhapNam + ' có 28 ngày'
    } else if (nhapThang === 1 || nhapThang === 3 || nhapThang === 5 || nhapThang === 7 || nhapThang === 8 || nhapThang === 10 || nhapThang === 12) {
        ketQua_b6 = 'Tháng ' + nhapThang + ' năm ' + nhapNam + ' có 31 ngày'
    }else if(nhapThang === 2 || nhapThang === 4 || nhapThang === 6 || nhapThang === 9 || nhapThang === 11 ){
        ketQua_b6 = 'Tháng ' + nhapThang + ' năm ' + nhapNam + ' có 30 ngày'
    }else{
        ketQua_b6 = 'Tháng ' + nhapThang + ' năm ' + nhapNam + ' có 0 ngày'
    }
    document.getElementById('ketQua_b6').innerHTML=ketQua_b6;
}

/**-------Bài tập 3: Đọc số -------- 
 
 * Input: Số có 3 chữ số
 * Xử lý:
 * + Tạo biến nhapSo3ChuSo lấy value
 * + (n1 )tach lay hang tram => n/100 ,lam tron so : math.floor()
 * + (n2) tach lay hang chuc => n % 100 /10, lam tron
 * + (n3) tach lay hang don vi => n % 10 
 * + Tạo biến hangTram,hangChuc,hangDonVi = '';
 * Output: 
 * + Đọc số.
*/

document.getElementById('docSo').onclick=function(){
var nhapSo3ChuSo = +document.getElementById('nhapSo3ChuSo').value;
var n1 = parseInt(nhapSo3ChuSo/100);
var n2 = parseInt(nhapSo3ChuSo%100/10);
var n3 = nhapSo3ChuSo%10;
var ketQua_b7 = '';
var hangTram='';
var hangChuc='';
var hangDonVi='';
if(nhapSo3ChuSo>=100 && nhapSo3ChuSo<=999){
switch (n1){
    case 1 :{
        hangTram = 'Một trăm'
    };break
    case 2 :{
        hangTram = 'Hai trăm'
    };break
    case 3 :{
        hangTram = 'Ba trăm'
    };break
    case 4 :{
        hangTram = 'Bốn trăm'
    };break
    case 5 :{
        hangTram = 'Năm trăm'
    };break
    case 6 :{
        hangTram = 'Sáu trăm'
    };break
    case 7 :{
        hangTram = 'Bảy trăm'
    };break
    case 8 :{
        hangTram = 'Tám trăm'
    };break
    case 9 :{
        hangTram = 'Chín trăm'
    };break
}
switch (n2){
    case 1 :{
        hangChuc = ' mười'
    };break
    case 2 :{
        hangChuc = ' hai mươi'
    };break
    case 3 :{
        hangChuc = ' ba mươi'
    };break
    case 4 :{
        hangChuc = ' bốn mươi'
    };break
    case 5 :{
        hangChuc = 'năm mươi'
    };break
    case 6 :{
        hangChuc = ' sáu mươi'
    };break
    case 7 :{
        hangChuc = ' bảy mươi'
    };break
    case 8 :{
        hangChuc = ' tám mươi'
    };break
    case 9 :{
        hangChuc = ' chín mươi'
    };break
}switch (n3){
    case 1 :{
        hangDonVi = ' một'
    };break
    case 2 :{
        hangDonVi = ' hai'
    };break
    case 3 :{
        hangDonVi = ' ba '
    };break
    case 4 :{
        hangDonVi = ' bốn'
    };break
    case 5 :{
        hangDonVi = ' năm'
    };break
    case 6 :{
        hangDonVi = ' sáu'
    };break
    case 7 :{
        hangDonVi = ' bảy'
    };break
    case 8 :{
        hangDonVi = ' tám'
    };break
    case 9 :{
        hangDonVi = ' chín'
    };break
}
}else{
    hangTram ='Vui Lòng Nhập Số Có 3 Chữ Số'
}
document.getElementById('ketQua_b7').innerHTML = hangTram + hangChuc + hangDonVi;  
}

/**-------Bài tập 4: Tìm sinh viên xa trường nhất-------- 
 
 * Input: Quãng đường của mỗi sinh viên tính dựa vào các tọa độ người dung nhập
 * Xử lý:
 * + Tạo biến x1 lấy value
 * + Tạo biến x2 lấy value
 * + Tạo biến x3 lấy value
 * + Tạo biến xT lấy value
 * + Tạo biến y1 lấy value
 * + Tạo biến y2 lấy value
 * + Tạo biến y3 lấy value
 * + Tạo biến yT lấy value
 * + sử dụng if esle để ra kết quả
 * Output: 
 * + Tên sinh viên có quãng đường xa nhất.
*/

document.getElementById('tinhQuangDuong').onclick=function(){
    var x1 = +document.getElementById('x1').value;
    var x2 = +document.getElementById('x2').value;
    var x3 = +document.getElementById('x3').value;
    var xT = +document.getElementById('xT').value;
    var y1 = +document.getElementById('y1').value;
    var y2 = +document.getElementById('y2').value;
    var y3 = +document.getElementById('y3').value;
    var yT = +document.getElementById('yT').value;
    var SV1 = document.getElementById('SV1').value;
    var SV2 = document.getElementById('SV2').value;
    var SV3 = document.getElementById('SV3').value;

    var ketQua_8 ='';
    if(((xT-x1)*(xT-x1) -(yT-y1)*(yT-y1)) > ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) && ((xT-x1)*(xT-x1) -(yT-y1)*(yT-y1)) >((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3))){
        ketQua_8 = 'Sinh viên xa trường nhất: ' +  SV1
    } else if(((xT-x1)*(xT-x1) -(yT-y1)*(yT-y1)) < ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) && ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) >((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3)) ){
        ketQua_8 = 'Sinh viên xa trường nhất: ' +  SV2
    } else if(((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3)) > ((xT-x1)*(xT-x1) -(yT-y1)*(yT-y1)) && ((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3))  >((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) ){
        ketQua_8 = 'Sinh viên xa trường nhất: ' +  SV3
    } else if(((xT-x1)*(xT-x1) -(yT-y1)*(yT-y1)) === ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) && ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) >((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3)) ){
        ketQua_8 = 'Sinh viên xa trường nhất: ' +  SV1 + ' Và ' + SV2
    } else if(((xT-x1)*(xT-x1) -(yT-y1)*(yT-y1)) < ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) && ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) === ((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3)) ){
        ketQua_8 = 'Sinh viên xa trường nhất: ' +  SV2 + ' Và ' +  SV3
    } else if(((xT-x1)*(xT-x1) -(yT-y1)*(yT-y1)) === ((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3))  && ((xT-x3)*(xT-x3) -(yT-y3)*(yT-y3))  > ((xT-x2)*(xT-x2) -(yT-y2)*(yT-y2)) ){
        ketQua_8 = 'Sinh viên xa trường nhất: ' +  SV1 + ' Và ' + SV3
    }else{}
document.getElementById('ketQua_8').innerHTML = ketQua_8;

}
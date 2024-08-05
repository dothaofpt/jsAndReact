// viet chuong trinh kiem tra tinh hop le cua mat khau
// mat khau hop le khi co it nhat 6 ky tu
// chua it nhat 1 chu cai viet hoa
// chua it nhat mot chu cai viet thuong
// chua it nhat 1 chu so
// 2. cho nguoi dung nhap vao mat khau de login / so sanh
// neu dung thi ok, sai qua 5 lan khoa dang nhap, thoat chuong trinh
// vi du mat khau hop le: Abc123

//  tao ham kt tinh hop le cua mk
// Hàm kiểm tra tính hợp lệ của mật khẩu
function isPasswordValid(password) {
    if (password.length < 6) {
        return false;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if (char >= "a" && char <= "z") {
            hasLowerCase = true;
        } else if (char >= "A" && char <= "Z") {
            hasUpperCase = true;
        } else if (char >= "0" && char <= "9") {
            hasDigit = true;
        }
    }

    return hasDigit && hasLowerCase && hasUpperCase;
}

// Hàm thiết lập mật khẩu
function setPassword() {
    let password = prompt("Mời thiết lập mật khẩu: ");
    if (isPasswordValid(password)) {
        alert("Đặt mật khẩu thành công! Mật khẩu: " + password);
        return password;
    } else {
        alert(`Mật khẩu không hợp lệ:
        1. Có ít nhất 6 ký tự
        2. Có ít nhất 1 số
        3. Có ít nhất 1 ký tự viết hoa
        4. Có ít nhất 1 ký tự viết thường`);
      setPassword();  // Gọi lại hàm setPassword để người dùng nhập lại
    }
}
// goi ham setPass, va gan pass vao bien neu thanh cong
let passwordOK = setPassword();

//viet chuong trinh dang nhap
let countLogin =0;
while(true){
    let passwordLogin=prompt("Moi nhap mat khau dang nhap: ");
    if(passwordLogin === passwordOK){
        alert("Dang nhap thanh cong ,cua da mo");

    } else {
        countLogin ++;
        if(countLogin <5) {
            alert("Ban da nhap sai ,so lan thu: "+ countLogin + "/5");

        }else{
            alert("Ban da thu qua ,tai khoan se bi block ,lien he adm");
            break;
        }
    }
}
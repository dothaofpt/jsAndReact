//31.1 date time injs phan 1
//1. Tao doi tuong date : Su dung new date() de tao 1 doi tuong Date moi
let currentDate =new Date();
console.log(typeof currentDate);
console.log(currentDate);
//2. Cac phuong thuc lay thong tin thoi gian
// Lay nam ,thang, ngay ,gio, phut, giay
let year=currentDate.getFullYear();
let month=currentDate.getMonth();
let day=currentDate.getDate();
let hour=currentDate.getHours();
let minute=currentDate.getMinutes();
let second=currentDate.getSeconds();

//in ra cac gt tren
console.log("Nam hien tai " + year);
console.log("Thang hien tai " + month);
console.log("Ngay hien ta " + day);
console.log("Gio hien tai " + hour);
console.log("Phut hien tai " + minute);
console.log("Giay hien tai " + second);

// Timestamp la mot dai dien cho 1 dia diem cu the trong thoi gian tinh bang moc thoi gian 0:
// Moc thoi gian 0:
// 00:00:00 ngay 1 thang 1 nam 1970
//xuat thoi gian tai moc ko
let Timestamp1=new Date(1723036016025);
// lay tu 1/1/1970 den hien tai
console.log(Timestamp1);

// Cach 1: new Date(year, monthIndex, day,hours, minutes,seconds,milliseconds)
const myDate1= new Date(2024, 1, 14); //thang 1 la 0,thang 2 la 1;
console.log(myDate1);
console.log(myDate1.toLocaleDateString); //OutPut:2/14/2024

//c2: new Date(dateString)
const myDate2=new Date("2022-02-15T12:30:45");
console.log(myDate2.toLocaleDateString());
// "2022-02-15" la ngay 14 thang2 nam 2022
// "T" la ky tu phan tach
// "12:30 la thoi gian 12 gio 30 phut";

// c3: Su dung setFullYear, setMonth, setDate
let myDate3=new Date();
console.log(myDate3);
myDate3.setFullYear(2023);
myDate3.setMonth(2);
myDate3.setDate(16);
console.log(myDate3);
// 5.xuat theo ngay thang nam
//xuat dung pt toLocalDateString()
console.log(myDate3.toLocaleDateString);
// xuat ngay thang nam thoe dinh dang mong muon(tu code);
console.log(`
    Ngay ${myDate3.getDate()}/${myDate3.getMonth() +1}/${myDate3.getFullYear()}`)

    // Thêm số 0 để xuất ngày tháng dạng 01,02...

    let prefixDate =myDate3.getDate() <10 ? "0" : "";
    let prefixMonth =myDate3.getMonth() <9 ? "0": "";
    console.log(`
        Ngay${prefixDate}${myDate3.getDate()}/Thang ${prefixMonth}${myDate3.getMonth() +1} /Nam ${myDate3.getFullYear()}`);
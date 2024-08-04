//slice(beginIndex,endIndex): cat chuoi;
// beginIndex: vi tri bat dau
// endIndex: lay vi tri sat index , khong bao gom endIndex;
let s4="234567";
let s5=s4.slice(1,3);
console.log(s5);

// vi du: chi cho phep toi da nhap 20 ky tu
//neu qua thi tu ct sua xuat chuoi sau xu ly
let s6=prompt("Moi nhap vao chuoi");
console.log(`Ban da nhap ${s6.length} ky tu`);
if(s6.length>20){
console.log(`ban da nhap qua ${s6.length-20} ky tu`);
let s7= s6.slice(0,20);
console.log("chuoi sua xu ly:" + s7);
}
//code online
console.log("chuoi sau xu ly: " +prompt("Moi nhap vao chuoi 2").slice(0, 20));

// Substring(startIndex, [endIndex]);

let s8="234567";
let s9=s8.substring(1,3);
console.log(s5);
// diem khac nhu sau:
// neu nhap end< start chung se duoc dao nguoc - tu dong hieu so nho hon la vi tri start
// slice(start,end): cung nhan vao hai tham so la vi tri bat dau va ket thuc trich xuat.Neu end< start,chuoi se duoc xem nhu rong
let s10="0123456789";
console.log("Su dung substring");
console.log(s10.substring(1, 4));
console.log(s10.substring(4, 1));
console.log(s10.slice(1, 4));
console.log(s10.slice(4, 1));
//substring(start, end):substring se chuyen so am thanh 0 va neu end< start sua khi chuyen so am thi no se dao nguoc chung
//slice(start, end):cho phep su dung so am de dem tu cuoi chuoi.so am se duoc hieu la dem tu cuoi chuoi ve phia truoc
let s11="0123456789";
console.log("su dung substring voi tham so am");
console.log(s11.substring(-3,-1));
//s11.substring(-3,-1) -> s11.substring(0,0) -> ""
//TH2:substring neu end < start dao nguoc vi tri start va end
console.log("Truong hop substring co 1 tham so am,end <start");
console.log(s11,substring(4,-5));
//s11.substring(4,-5) --> s11.substring(4, 0) --> s11.substring(0, 4);
console.log("su dung slice voi tham so am");
console.log(s11.slice(-3,-1));//cat tu -3 den -2

// trim(): xoa toan bo khoang trang o ca hai dau chuoi
//trimEnd(): xoa toan bo khoang trang o cuoi chuoi 
//trimStart(): xoa toan bo khoang trang o dau

let s12="  He llo   world ";
console.log(s11.length);
let s13=s12.trim();
console.log(s12);
console.log(s12.length);
// cac vi du sau tuong tu
//trimEnd()
let s14="  He llo   world ";
console.log(s14.length);
let s15=s14.trimEnd();
console.log(s14);
console.log(s14.length);
//trimStart()
let s16="  He llo   world ";
console.log(s16.length);
let s17=s16.trimStart();
console.log(s16);
console.log(s16.length);
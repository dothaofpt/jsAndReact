// 29.6 indexOf, lastIndexOf, includes
// 5.12 string.indexOf(searchValue, fromIndex);
//tim kiem (searchValue) trong chuoi
// neu gia tri tim kiem khong duoc tim thay, phuong thuc tra ve -1 
// fromIndex (tuy chon): Vi tri bat dau tim kiem trong chuoi
// neu khong duoc cung cap , tim kiem se bat dau tu dau chuoi 
let s25 =" abcdef abcdef";
let s26 =s25.indexOf("c");
console.log(s26);
// tim chu "c" nhung bat dau tu vi tri index 3
console.log(s25.indexOf("c", 3));

let notFoundIndex =s25.indexOf("g");
console.log(notFoundIndex);

//5.13 string.lastIndexOf(searchValue, endIndex);
/*
tim kiem gia tri xuat hien cuoi cung cua chuoi tim kiem 
neu gia tri tim kiem khong duoc tim thay phuong thuc tra ve  -1 
endIndex (tuy chon): Vi tri bat dau tim kiem trong chuoi tu phai sang trai
neu khong duoc cung cap, tim kiem se bat dau tu cuoi chuoi 
*/

let s27 =" abcdef abcdef";
let s28 =s28.lastIndexOf("c");
console.log(s28);
// tim voi tham so endIndex (tim trong doan tu index 0 ->endIndex)
console.log(s27.lastIndexOf("a", 7));
console.log(s27.lastIndexOf("a", 6));
//5.14 string.includes(searchString[, fromIndex]);
/*
kiem tra chuoi con
kiem tra string co chua cum searchString hay khong
fromIndex( tuychon): Vi tri bat dau tim kiem trong chuoi
neu khong nhap, tim kiem toan bo chuoi
*/
let s2="abcdef abcdef";
console.log(s29.includes("a"));
console.log(s29.includes("g"));
// tim a bat dau tu vi tri index 8 (tim trong abcdef)
console.log(s29.includes("a", 7));



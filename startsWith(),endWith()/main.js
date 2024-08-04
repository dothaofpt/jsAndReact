// string.startsWith(searchValue,[startIndex]);
/*
Kiem tra chuoi string co bat dau bang searchString khong?
startIndex (tuychon): Vi tri bat dau tim kiem trong chuoi.
Neu khong nhap, no se bat dau tu dau chuoi
*/
let s30= "abcdef abcdef";
console.log(s30.startsWith("a"));

// Tim tu vi tri index so 1 xem co phai bat dau bang chuoi bc khong
console.log(s30.startsWith("bc", 1));

// string.endsWith(searchValue,[endIndex]);
let s31="01234567890";
console.log(s31.endsWith("0"));
//endIndex =10, chuoi duoc kiem tra tu index 0 --> 10-1 =9
console.log(s31.endsWith("78",9));
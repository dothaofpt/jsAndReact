//29.8 string js part 8 -split()
// string.split(separator, limit)
/*
1. string: chuoi goc can chia
2. separator: chuoi de xac dinh vi tri thuc hien tach
no co the la mot ky tu hoac mot bieu thuc chinh quy
3. limit: gioi han so luong phan tu trong mang , lay cac phan tu dau
*/
let student= "Hoa,Lan,Hue,Trung";
let arr=student.split(",");
console.log(arr);
//gioi han phan tu mang
let arr2=student.split(",",3);
console.log(arr2);

//neu nhap vao  "" thi se tach roi tung ky tu --> mang
let str="abcdefgh1234";
let arr3=str.split("");
console.log(arr3);


//1 cac cach xuat chuoi
console.log('xin chao,ABC,123');
console.log("xin chao,ABC,123");
console.log(`xin chao,ABC,123`);
// 2. khoi tao chuoi
let s1=`Hoi do toi che em mon e rong hong hai dua chap mom do`;
console.log(s1);

let s2="Hoi do toi che em mom e rong \n khong tin hai dua chap mom do";
console.log(s2);
console.log(typeof s1);
console.log(typeof s2);
// 3.Index bat dau bang 0
let ten="Linh";
console.log(ten[1]);
console.log(ten[3]);
// 4.Kiem tra do dai cua chuoi bat dau bang 1
let s3="abcdef";
//kiem tra chieu dai cua chuoi 
console.log(s3.length);
// 4.2 vi du van dung:
//nhap vao 1 tin nhan ,gioi han ky tu nhap vao max 140
// neu qua bao so ki tu vuot qua
let message= prompt("Moi nhap vao chuoi");
if(message.length<=140) {
    alert(`ban da nhap ${message.length} ky tu`);
}
else {
    alert(`ban da nhap qua ${message.length-140} ky tu `);
}

//28. DE quy trong js
// tinh N!=N*(N-1)!.1
function giaiThua(n){
    if(n===0 || n===1){
        return 1;
    } else {
        return n* giaiThua(n-1);
    }
}
//Goi ham giai thua
let ketQua= giaiThua(5);
console.log(ketQua);
// Vd2: day Fibonacci
// Fn=F(n-1) +F(n-2)
// n<=2 thifFn=1
function f(n) {
    if (n<=2) {
        return 1;
    } else {
        return f(n-1) + f(n-2);
    }
}
//goi ham tinh Fibonacci
let ketQua2 = f(4);
console.log(ketQua2);
// function duoc chia lam hai loai: hosting and no hosting
hoistedFunction();//Hoat donf
function hoistedFunction() {
    console.log("Hello");
    //Goi ham truoc khi ham duoc dinh nghia
}
// goi ham truoc khi khai o hai function duoi day se bi loi
//nonHoistedFunction; //loi
let nonHoistedFunction=function () {
    console.log("Hello");
}
// arrowFunction(); //loi
let arrowFunction =() => {
    console.log("Hello");
}
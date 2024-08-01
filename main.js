//27.2 -Hoisting in function
/*
1.Hoisting:
Function Delaration: Co hoisting.Ban co the goi ham truoc khi dinh nghia
*/
hoistedFunction();
function hoistedFunction(){
    console.log("Hello");
}

// function Expression: phai goi ham sau khi dinh nghia
// nonHoistedFunction();
let nonHoistedFunction =function() {

    console.log("Hello");
}
// Arrow Function: cung tuong tu nhu fun Ex
arrowFunction();
let arrowFunction =() => {
    console.log("Hello");
}

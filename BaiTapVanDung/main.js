const inputString =prompt("Nhap vao 1 chuoi");

//khoi tao bien dem

let lowrCaseCount =0;
let upperCaseCount =0;
let digitCount =0;
let spaceCount =0;

for(let i=0; i<inputString.length;i++){
    console.log(i);
    let char=inputString[i];
    //kiem tra tung gia tri
    if(char >="a"&& char<="z"){
        console.log("La chu viet thuong");  
        lowrCaseCount++;   
    }else if(char >="A" && char<=Z){
        console.log("La chu viet hoa");
        upperCaseCount++;
    }else if(char >=0 && char <=9){
        console.log("La chu so");
        digitCount++;
    }else if(char ===" "){
        console.log("La dau space");
        spaceCount++;
    }
}
//in ket qua
console.log("thuong" +lowrCaseCount);
console.log("hoa"+upperCaseCount);
console.log("so"+ digitCount);
console.log("khoang trang"+ spaceCount);
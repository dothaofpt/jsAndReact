//replace(oldValue,newValue): thay the gia tri oldValue 
// dau tien duoc tim thay trong chuoi bang gia tri moi(newValue)
// repeat(count):so lan lap lai chuoi

let s14 ="123 hoc hoc nua hoc mai";
console.log(s14.replace("hoc", "ngu"));

//De thay the tat ca dung bieu thuc chinh quy (regular expression)
console.log(s14.replace(/hoc/g, "ngu"));

// repeat()
let s23="Hello";
let s24=s23.repeat(3);
console.log(s24);
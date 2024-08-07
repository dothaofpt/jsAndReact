//30.5 - giai bai tap js 27 - dem tu toi torng chuoi
/*
Bai tap js 27:
const a = "toi cham hoc toi chiu kho toi dep zai";
Dem tu toi trong string a tren ?
*/
const a="toi cham hoc toi chiu kho toi dep zai";
const targetWord="toi";
let count=0;

for(let i=0;i<a.length;i++){
    if(a.slice(i,i+targetWord.length)===targetWord){
         //  theo ly thuyet:slice(beginIndex,endIndex)
         //i bat dau tu 0;
        //  0 + 3( chieu dai cua targetWord)
        count++;
    }
}
alert(`So lan xuat hien cua tu ${targetWord} trong chuoi la:${count}`);

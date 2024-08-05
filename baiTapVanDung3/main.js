//Viet chuong trinh chuyen tin nhan sang mat ma theo bang :
// const a="abcdefghijklmnopqrstuvwxyz";
// const b="zxcvbnmasdfghjklqwertyuiop";

function encryptMessage(message){
    const a="abcdefghijklmnopqrstuvwxyz";
    const b="zxcvbnmasdfghjklqwertyuiop";
    let result="";
    for(let i=0;i<message.length; i++){
        let char=message[i].toLowerCase();// chuyen doi snag chu thuong phu hop voi bang ma
        //kiem tra xme ky tu nhap vao co o trong bang ma hay khong
        if(a.includes(char)){
            //Thuc hien chuyen doi
            // kiem tra vi tri index cua a
            let index=a.indexOf(char);
            // Lay gia tri index,dong sang chuoi b de lay ky tu tuong ung tren b
            result +=b[index];
         } 
         //Neu khong co trong bang ma ,thi giu nguyen ky tu va don vao bien result
else{
    result += char;//result =result+ char
}
    }
  return  result;
}
//cho nguoi dung nhap lieu
let messageInput= prompt("Nhap tin nhan can duoc ma hoa  ");
let kq = encryptMessage(messageInput);
alert(`Tin nhan duoc ma hoa: ${kq}`);
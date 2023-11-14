let btn = document.getElementById('btn1');

let test = document.querySelector('.test');


function fun1(){
    if(document.querySelector('input[name="rating"]:checked')){
        let rating1 = document.querySelector('input[name="rating"]:checked').value
        
        // ใช้ sessionStorage เก็บค่าที่ได้จาก radio แล้วนำไปให้หน้า thankyou ใช้ต่อ
        
        sessionStorage.setItem("score",rating1);
        window.location.href= "thankyou.html";
     }
}



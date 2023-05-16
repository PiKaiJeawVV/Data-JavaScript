// const ax = document.getElementById('t1'); //<-- ดึง ID จาก tag <p> แล้วเก็บไว้ในตัวแปร
// const ay = document.querySelector('.t2'); //<-- ดึงข้อมูลผ่าน class
// const az = document.querySelectorAll('p');
// const box = document.querySelector('.light'); //<-- ดึงข้อมูลผ่าน class light มา
// //ax.innerText="Nana"
// // console.log(ax);
// // console.log(ay);
// console.log(az);




// function displayText(){
//     // ax.innerText="Nana"  //<-- ทำการเปลี่ยนข้อมูลจาก ID ด้านบน
//     // ax.style.color="orange"
//     // ax.style.fontSize="60px"
//     box.setAttribute('class','dark') //<-- เปลี่ยนค่าใน class ใหม่
// }

// const textAll = document.querySelectorAll('p')
// console.log(textAll[0].innerHTML) //<-- อ่านข้อมูลจาก Node List

//const item = document.createElement('li')
//item.innerText='L' //<-- innerText คืือ การเพิ่มเข้าไป

//menu.appendChild(item) //<-- เพิม item ไปที่ class menu tag li
// let counnt = 1;
// function addText(){
//     const item = document.createElement('li')
//     item.innerText='L' + (counnt++);
//     menu.appendChild(item)
// }
// const menu = document.getElementById('menu');
// const item2 = document.getElementById('t2');
// const item3 = document.getElementById('t3');

// const newItem = document.createElement('li');
// newItem.innerText='J';

// // ลบ
// function deleteText(){
//     menu.removeChild(item2);
// }

// // แทนที่
// function replaceText(){
//     menu.replaceChild(newItem,item3);
// }

// const box = document.getElementById('box');
// let status;

// // เพิ่ม CSS
// function addStyle(){
//     box.classList.add("darkMode");
// }
// // ลบ CSS
// function deleteStyle(){
//     box.classList.remove("darkMode");
// }

// // เปิด - ปิด CSS
// function toggleStyle(){
//     box.classList.toggle("darkMode");
// }

// function welcome(){
//     alert("ยินดีตอนรับเข้าสู่หน้าเว็บของเรา")
// }

// function hl(obj){
//     obj.style.background = "yellow"
// }

// function unhl(obj){
//     obj.style.background = "black"
// }




// // onchannge
// function getmenu(){
//     const menu = document.getElementById('menu');
//     const display = document.getElementById('display')
//     console.log(menu.value)
//     display.innerText=menu.value
// }

// function hl_new(obj){
//     obj.style.background="black"
// }

// function unhl_new(obj){
//     obj.style.background="green"
// }


const menu = document.getElementById('menu');
const display = document.getElementById('display');
const btn = document.getElementById('btn')

// เขียน event
menu.addEventListener('change',getMenu);
btn.addEventListener('click',showwelcome);

function getMenu(){
    display.innerText=menu.value;
    console.log(menu.value);

}

function showwelcome(){
    alert("Welcome")
}

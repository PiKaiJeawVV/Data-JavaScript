function a(a){
    console.log("saonnoi")
}

function message(){
    alert("Hello world");
}

function getIP(){
    return "127.0.0.1";
}

let myIP = getIP();
console.log(myIP)

function name (fname,lname,city="กรุงเทพ"){
    console.log(fname,lname,city)
}

let colur = ["แดง" , "น้ำเงิน" ,"เหลือง","ดำ"]
let push = colur.push("สัเทา"); //<-- Add Array
let x = colur.length; //<-- นับจำนวน
let y = colur.sort(); //<-- เรียงลำดับตัวหนังสือ
let z = colur.reverse(); //<-- เรียงลำดับตัวหนังสือจากหลังไปหน้า

console.log(x)
console.log(y)
console.log(z)


for(let countColor=0; countColor<=x;countColor++){
    console.log(colur[countColor])
}

// forEach
colur.forEach(mydata) // เรียก function มาใช้งาน

function mydata(ele){
    console.log(ele);
}

let xx = colur.toString() // <-- เปลี่ยน Array เป็น String
let xy = colur.join("|") // <-- เปลี่ยนจาก , เป๋น |
console.log(colur)
let ooo = colur.pop() // <-- หยิบค่าออกมาเก็บที่ตัวแปร ooo
// console.log(ooo)
// console.log(xy)
// console.log(typeof(xy))


let aa = ["ส้ม","องุ่น"]
let ab = ["กระทะ","หม้อ","ตะหลิว"]
let ac = ["ต้นหอม","ผักชี","หัวหอม"]

let total = aa.concat(ab,ac) //<-- การรวม Array
console.log(total)
// total.forEach(result)

// function result(item){
//     console.log(item)
// }

let point = [20,-5,22,-100,40,-700]
console.log(point)

point.sort(function(a,b){
    //return a - b // <-- เรียงน้อยไปมาก
    return b - a // <-- เรียงมากไปน้อย
})
console.log(point)

//JS Object
let objectTest = {
    name:"Nana",
    member:"CGM",
    age:"19",
    displayMember:function(){
        return this.name + " " + this.member + " " + this.age
    }
}
//console.log(objectTest.name,objectTest.member)
console.log(objectTest.displayMember())
document.write(objectTest.displayMember())

function dateledata(){
    let result =confirm("Are you sure ?");
    console.log(result)
    if (result){
        console.log("Delete Already")
    }else{
        console.log("exit")
    }
}


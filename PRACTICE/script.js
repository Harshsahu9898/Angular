// for of loop basically used for string and arrays
// str = "i am harsh";
// for(let i of str){
    // console.log(i);
// }

// for in loop is basically used for fetching the keys present in the objects

// let student = {
//     name:"Harsh Sahu",
//     age:20,
//     cgpa:10,
//     isPass:true
// };

// //  it is returning the keys present i this
// // for(let i in student){
// //     console.log(i);

// //  to get the key value pairs we have to write

// for(let key in student){
//     console.log("key=",key,"value=",student[key]);
// }

// practice question 1
/*
for(let i=0;i<=100;i++){
    if(i%2==0){
        console.log("even numbers are: ",i);
    }
}
*/

// pratice question 2

// let gameNum = 25;
// let userNum = prompt("Guess the game number : ");

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number!! Guess again please: ");
// }
// console.log("Congratulations you entered the right number");


// let s = "kgp";
// for(let i of s){
// console.log(i);
// }


// Strings act like objects because the operation is same in objects as strings
//  strings also contains index or position.
// every characters has its own position or index.

// let string = "hi i m harsh";
// let sentence = `this is a template literal which is a special string`;
// console.log(sentence);

// let obj = {
//     item:"pen",
//     price:10
// };

// let output = `the cost of ${obj.item} is ${obj.price}`; //it will convert the object item value into string and return it
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price);// this will return 10 in int only

// String methods in js
// let str = "kabir is a good boy"
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str.trim());
// console.log(str.replace("ka","a"));
// console.log(str.charAt(4)); // the position in which the particular character is present will be returned

// all the string method does not change original string but always returns a new value

// let fullName = prompt("Enter your full name without spaces");

// // let username = "@"+fullName+ fullName.length;
// console.log(username);

// Arrays in Js
// collections of items is known as arrays

// let marks = [44,5,54,46];
// console.log(marks);
// console.log(marks.length);
// console.log(marks.some)

// array is also a type of object
// let heroes = ["superman","batman","spiderman","IronMan","Perman","ChocoMan","BiscuitMan","OneWomanMan"];
// for(let i of heroes){
//     console.log(i);
// }

// average of the elements
// let marks = [85,97,44,37,76,60];
// let sum=0;
// for(let i of marks){
//     sum += i;
    
// }
// let avg = sum /marks.length;
// console.log("the average of the array is",avg);

// let items = [250,645,300,900,50];
// let index=0
// for(let i of items){
//     console.log(`value at index ${index} is ${i}`);
//     let offer = i/10;
//     items[index] = items[index] - offer;
//     console.log(`value after offer will be  ${items[index]}`);
//     i++;
// };
// for(let i= 0 ; i< items.length;i++){
//     let offer = items[i]/10;
//     items[i] -= offer;
// }
// console.log(items);

// let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// // companies.shift(); // delete first elements
// companies.splice(2,1,"ola"); // ola will be added in place of uber
// companies.push("Amazon");//add amazon at the end of the array
// console.log(companies);


// Nan = not a number
// function myFunction(msg){//parameter-> input
//     console.log(msg);
// }

// myFunction("hi i love js");//argument passed  then we get the output
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");
// myFunction("hi i love js");


// function to add two numbers 

// function myFunction(a,b){
//     console.log(`addition of ${a} and ${b} is ${a+b}`);
// }

// myFunction(12,2);

// function myFunction(a,b){
//     return `addition of ${a} and ${b} is ${a+b}`;
// }

// let addition = myFunction(12,2);
// console.log(addition); 

//arrow function is a part of modern javascript
// const sum = (a,b) => {
//     return a+b;
// }

// let value = sum(12,3);
// console.log(value);

// create a normal function and return the number of vowels in the string

// function countVowels(str){
//     let count = 0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// let NoOfVowels = countVowels("Harsh");
// console.log(NoOfVowels);

// const countVowels = (str) =>{
//     let count = 0;
//     for(const char of str){
//         if(char==="a"||char==="e"||char==="i"||char==="o"||char==="u"){
//             count++;
//         }
//     }
//     return count;
// }

// let numberofvowels = countVowels("hello world");
// console.log(numberofvowels);


// for the array of each numbers return the square of each numbers

// let arr= [1,2,3,4,5];
// arr.forEach((val)=>{
//     console.log(val*val);
// })

// let arr = [324,34,5,553];

// let newArr = arr.map((val)=>{
//     return val *2;
// })
// console.log(newArr);


// let arr = [23,34,43,4,43,4,3];
// 
// let newArr = arr.filter((val)=>{
    // if(val%2===0){
        // return val;
    // }
// })
// console.log(newArr);

// let arr = [12,4,33,4,3,5];

// const output = arr.reduce((res,curr)=>{
//     return res+curr;
// });
// console.log(output);

// let arr = [12,4,33,4,3,5];

// const output = arr.reduce((prev,curr)=>{
//     return prev>curr ? prev : curr;
// });
// console.log(output);

// let marks =  [29,35,64,97,54,86,91,59,97];

// let toppers =marks.filter((val)=>{
//     return val>90;
// })

// console.log(toppers);


// let n = prompt("enter a number");

// let arr= [];

// for(let i=1; i<=n; i++){
//     arr[i-1] = i;
// }
// console.log(arr);
// let sum = arr.reduce((prev,curr)=>{
//     return prev+curr;
// })

// console.log(sum);

// let product = arr.reduce((prev,curr)=>{
//     return prev*curr;
// })
// console.log(product);

// console.log("data is very dangerous to enc")

// readability 
// modularity
// browser caching
// if we seperate html , css and js

// let elements = document.querySelector("h1");
// console.log(elements);
// console.dir(elements);

// let allelements = document.querySelectorAll("h1");
// console.dir(allelements);

// let div = document.querySelector("div");
// console.log(div);

// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText + "  from apna college students!!";

// let divs = document.querySelectorAll(".box");
// // divs[0].innerText = "new unique value 1";
// // divs[1].innerText = "new unique value 2";
// // divs[2].innerText = "new unique value 3";
// // console.log(divs[0]);

// let index = 1;
// for(div of divs){
//     div.innerText = `new unique value ${index}`;
//     index++;
// }

// let div = document.querySelector("div");
// console.log(div);
// 
// let id = div.getAttribute("id");
// console.log(id);
// 
// let para = document.querySelector("p");
// let name = para.getAttribute("name");
// console.log(name);
// 
// let div2 = document.querySelector("div");
// console.log(div2);

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click-me!";
// console.log(newBtn);

// let div = document.querySelector("div");
// div.append(newBtn);
// div.prepend(newBtn);
// div.before(newBtn);
// div.after(newBtn);

// let newHeading = document.createElement("h1"); // created a new html
// newHeading.innerHTML = "<i>Hi , I am New !!</i>"//added some text

// document.querySelector("body").prepend(newHeading);//taking reference of body added that element

// newHeading.remove();

// let newBtn = document.createElement("button");
// newBtn.innerText = "Click Me!";

// newBtn.style.color = "white";
// newBtn.style.backgroundColor="red";

// document.querySelector("body").prepend(newBtn);

// let paragraph  = document.querySelector("p");
// paragraph.getAttribute("class");
// // paragraph.setAttribute("class","newClass"); // this is overwriting the class and we can say that it is changing the class
// // so to append we use classList
// paragraph.classList.add("newClass");


// Event Handling in JS

let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("btn1 was clicked ");
//     let a = 25;
//     a++;
//     console.log(a);
// }
// event Object
// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }
// btn1.addEventListener("click",(evt)=>{
//     console.log("button 1 was clicked! handler 1");
//     // console.log(evt);
//     // console.log(evt.type);
//     // console.log(evt.target);
// })
// const handler2 = ()=>{
//     console.log("button 1 was clicked ! handler 2");
// }
// btn1.addEventListener("click",handler2);
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked ! handler 3");
// })
// btn1.addEventListener("click",()=>{
//     console.log("button 1 was clicked ! handler 4");
// })

// btn1.removeEventListener("click",handler2);
// let box = document.querySelector("#box");
// box.onmouseover = () =>{
//     console.log("mouse comes over");
//     alert("mouse is hovering above the div");
//     let a = 23;
//     ++a;
//     console.log(a);
// }
// box.onmouseover = (evt) =>{
    // console.log(evt);
    // console.log(evt.target);
    // console.log(evt.type);
    // console.log(evt.clientX);
    // console.log(evt.clientY);
// }

// let body = document.querySelector("body");
// let currmode = "light";

// modeBtn.addEventListener("click",() => {
//     if(currmode==="light"){
//         currmode ="dark";
//      modeBtn = document.querySelector("#mode");
// let    // document.querySelector("body").style.backgroundColor="black";
//         body.classList.add("dark");
//         body.classList.remove("light");
//     }else{
//         currmode ="light";
//         // document.querySelector("body").style.backgroundColor="white";
//         body.classList.add("light");
//         body.classList.remove("dark");
//     }
//     console.log(currmode);
// });
// we can also implement this modes using classes from css
// const student = {
    // harsh : "sahu",
    // fullName:function fullName() {
        // console.log("harsh");
    // }
// }

// const employee={
//     calcTax(){
//         console.log("tax rate is 10%");
//     }
// }

// const karanArjun = {
//     salary : 40000,
// };

// karanArjun.__proto__ = employee;

// class ToyotaCar{
//     constructor(brand,mileage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.mileage = mileage;
//     }
//     start(){
//         console.log("start");
//     }
//     stop(){
//         console.log("stop");
//     }
//     setBrand(brand){
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar('fortuner',10);
// // fortuner.setBrand("fortuner");
// console.log(fortuner);
// let lexus = new ToyotaCar('lexus',12);
// // lexus.setBrand("lexus");
// console.log(lexus);

// class Parent{
    // hello(){console.log("hello");}
// }
// class Child extends Parent{
    // 
// }
// 
// let obj = new Child(); 

// class Person{
//     constructor(){
//         this.species = "homo-sapiens"    
//     }
//     eat(){
//         console.log("eat");
//     }
//     sleep(){
//         console.log("sleep");
//     }
//     work(){
//         console.log("do nothing");
//     }
// }
// class Engineer extends Person{
//     constructor(branch){
//         console.log("enter child constructor");
//         super();// to invoke parent class constructor
//         this.branch = branch;
//         console.log("exit child constructor");
//     }
//     work(){
//         console.log("Solve Problems, build something");
//     }
// }

// class Doctor extends Person{
//     work(){
//         console.log("Treat Patients..");
//     }
// }

// let harsh = new Engineer();
// let kabir = new Doctor();

// let DATA = "secret information";

// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }
//     viewData(){
//         console.log("data = ",DATA);
//     }
// }

// class Admin extends User{
//     constructor(name,email){
//         super(name,email);
//     }
//     editData(){
//         DATA = "some new value";
//     }
// }
// let student1 = new User("harsh","harsh@123");
// let student2 = new User("kabir","kabir@2004");

// let admin1 = new Admin("admin","admin@college.edu");

// a =10;
// b =20;

// console.log(a+b);
// try{
// console.log(a+c);
// }
// catch(err){
//     console.log(err);
// }
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);
// console.log(a+b);

// Callbacks Promises and Async-Await

// function hello(){
    // console.log("hiiii");
// }
// 
// setTimeout(hello,4000);

// console.log("1");
// console.log("2");
// setTimeout(()=>{
//     console.log("Hello")
// },4000);
// console.log("3");
// console.log("4");


// callback 

// function sum(a,b){
//     console.log(a+b);
// }
// function Calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// Calculator(1,3,sum);

// const hello = ()=>{
//     console.log("hello");
// }

// setTimeout(hello,122321);

// let emp = [
//   {
//     name: "harsh sahu",
//     skills: [
//       { frontend: "reactjs" },
//       { backend: "springboot" },
//       { Database: "mysql" }
//     ],
//     salary: 20000
//   },
//   {
//     name: "kabir sahu",
//     skills: [
//       { frontend: "reactjs" },
//       { backend: "java" },
//       { Database: "mssql" }
//     ],
//     salary: 25000
//   },
//   {
//     name: "sujal sahu",
    // skills: [
    //   { frontend: "angular" },
    //   { backend: "java" },
    //   { Database: "MongoDB" }
    // ],
    // salary: 40000
//   }
// ];


// let reactDevs = emp.filter(employee => employee.skills.frontend === "reactjs").map(employee => employee.name);
// console.log(reactDevs);

// let reactDevs = emp.filter(e =>e.skills.some(e => e.frontend === "reactjs")).map(e => e.name);
// let totalSalary = emp.reduce((acc, i) => acc + i.salary, 0);
// console.log(totalSalary);

// let reactDevs = emp.filter(employee => employee.skills.frontend === "reactjs");
// console.log(JSON.stringify(emp.name,null,2));

// Callbacks,Async await and Promises
// function getData(dataId,getNextData){
    // setTimeout(()=>{
        // console.log("data",dataId);
        // if(getNextData){
            // getNextData();
        // }
    // },2000);
// }
// 
// 
// getData(1,()=>{
    // getData(2,()=>{
        // getData(3,()=>{
// 
        // })
    // })
// })

// function getData(dataId,getNextData){
//     setTimeout(() => {
//         console.log("data",dataId);
//         if (getNextData) {
//             getNextData();
//         }
//     }, 2000);
// }
// //understanding this code would be difficult to callback one data again and again
// // and hence it is called as
// // callback hell
// // pyramid of doom
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4);
//         })
//     })
// }) 
// to overcome call back hell we use promises

// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a promise")
//     // resolve(123);
//     reject("some error occured");

// })

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//         // console.log("data",dataId);
//         // resolve("success");
//         reject("errorororororororororororoororororrrrr");
//         if(getNextData){
//             getNextData();
//         }
//     },5000);
//     })
// }

// function getData(dataId,getNextData){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// };

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=>{
//             getData(4,()=>{
                
//             })
//         })
//     })
// })
// const getPromise = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a Promise");
//         resolve("Success");
//         // reject("error");
//     });
// };
// const getPromise = ()=>{
    // return new Promise((resolve,reject)=>{
        // console.log("I am a Promise");
        // resolve("Successs");
        // reject("error");
    // });
// };

// const getPromise = () =>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a promise");
//         // resolve("successs");
//         reject("error");
//     });
// };
// let promise = getPromise();

// promise.then((res)=>{
//     console.log("promise fulfilled",res);
// })

// promise.catch((err)=>{
//     console.log("error found",err);
    
// })

// promise.catch((res)=>{
//     console.log("error is not found",res);
// })

// promise.then((err)=>{
//     console.log("error is not found",err);
// })

// function sum(a,b){
//     console.log(a+b);
// }
// function Calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// Calculator(1,3,sum);

// function sum(a,b){
//     console.log(a+b);
// }

// function Calculator(a,b,sumCallback){
//     sumCallback(a,b);
// }
// Calculator(1,3,sum);

// Promise Chaining
// function asyncFunc1(){
    // return new Promise((resolve,reject)=>{
        // setTimeout(() => {
            // console.log("data1");
            // resolve("success");
        // }, 3000);
    // });
// };
// function asyncFunc2(){
    // return new Promise((resolve,reject)=>{
        // setTimeout(() => {
            // console.log("data2");
            // resolve("success");
        // }, 3000);
    // });
// };
// 
// 
// console.log("fetching data1");
// asyncFunc1().then((res)=>{
    // console.log("fetching data2");
// asyncFunc2().then((res)=>{console.log(res);})})

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         }, 3000);
//     });
// }
// promise chain can reduce the callback hell

// getData(1).then((res)=>{
    // console.log(res);
    // getData(2).then((res)=>{
        // console.log(res);
    // })
// })

// The actual Promise Chaining is 
// getData(1).then((res)=>{
//     return getData(2);
// }).then((res)=>{
//     // console.log(res);
//     return getData(3);
// }).then((res)=>{
//     console.log(res);
// })


// async await

// function api() {
    // return new Promise((resolve,reject)=>{
        // setTimeout(() => {
            // console.log("weather data");
            // resolve(200);
        // }, 4000);
    // });
// }
// 
// async function callapi() {
    // await api();
    // await api();
// }

// function getData(dataId){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             console.log("data",dataId);
//             resolve("success");
//         }, 3000);
//     })
// }

// async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
//     await getData(7);
//     await getData(8);
//     await getData(9);
//     await getData(10);
// }
// Using IIFE - immediately invoked function expression
// (async function getAllData(){
//     await getData(1);
//     await getData(2);
//     await getData(3);
//     await getData(4);
//     await getData(5);
//     await getData(6);
//     await getData(7);
//     await getData(8);
//     await getData(9);
//     await getData(10);
// })();

// FETCH API

// const URL = "https://catfact.ninja/fact?utm_source=chatgpt.com";
// const factpara = document.querySelector("#Fact");
// const btn = document.querySelector("#btn");

// const getFacts = async()=>{
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response); //JSON Format
//     let data = await response.json();
//     factpara.innerText = data.fact;
//     console.log(data);
// }
// // api stands for application programming interface
// btn.addEventListener("click",getFacts);

// let emp = [
//   {
//     name: "harsh sahu",
//     skills: [
//       { frontend: "reactjs" },
//       { backend: "springboot" },
//       { Database: "mysql" }
//     ],
//     salary: 20000
//   },
//   {
//     name: "kabir sahu",
//     skills: [
//       { frontend: "reactjs" },
//       { backend: "java" },
//       { Database: "mssql" }
//     ],
//     salary: 25000
//   },
//   {
//     name: "sujal sahu",
//     skills: [
//       { frontend: "angular" },
//       { backend: "java" },
//       { Database: "MongoDB" }
//     ],
//     salary: 40000
//   }
// ];

// let reactDevs = emp.filter(e=>e.skills.some(e=>e.frontend ==="reactjs")).map(e=>e.name);
// console.log(reactDevs);
// 
// let reactDevs = emp.filter(e =>e.skills.some(e => e.frontend === "reactjs")).map(e => e.name);
// let totalSalary = emp.reduce((acc, i) => acc + i.salary, 0);
// console.log(totalSalary);
// 
// let reactDevs = emp.filter(employee => employee.skills.frontend === "reactjs");
// console.log(JSON.stringify(emp.name,null,2));
// 
// 'abc123'.match(/\d+/)



import {navbar,shoppingBag} from "../component/navbar.js"

const nav=document.getElementById("navbar")
nav.innerHTML=navbar()
shoppingBag();
var store = JSON.parse(localStorage.getItem("ldata")) || [];

var obj = {
  entmail: "xyz@gmail.com",
  epass: "xyz",
};
store.push(obj);
// console.log(store);
localStorage.setItem("ldata", JSON.stringify(store));

function cont1() {
  event.preventDefault();
  var email = document.querySelector("#mail").value;
  if(email===""){
    alert("enter mail id")
  }else{
  // console.log(email)
  for (let i = 0; i < store.length; i++) {
    console.log(store[i].entmail)
    // console.log("inside for")
    if (store[i].entmail===email) {

      document.querySelector("#ind2").style.display = "block";
      document.querySelector("#ind1").style.display = "none";
      document.querySelector("#lbtn").style.display = "none";
      document.querySelector("#ps").style.display = "block";
      document.querySelector("#cr").style.display = "none";
      document.querySelector("#cbtn").style.display = "none";
      document.querySelector("#lbtn1").style.display = "block";
      break;
    } else {
      document.querySelector("#ind3").style.display = "block";
      document.querySelector("#ind1").style.display = "none";
      document.querySelector("#ps").style.display = "block";
      document.querySelector("#cr").style.display = "block";
      document.querySelector("#lbtn").style.display = "none";
      document.querySelector("#lbtn1").style.display = "none";
      document.querySelector("#cbtn").style.display = "block";
    }
  }
}
}

document.getElementById("lbtn").addEventListener("click",cont1)


let flag=true
function cont2(){
  event.preventDefault();
  var email = document.querySelector("#mail").value;
  var pass = document.querySelector("#pass").value;
  // console.log(email)
  // console.log(pass)
  for (let i = 0; i < store.length; i++){
    if(store[i].entmail===email&&store[i].epass===pass){
      // alert("Login Successfull!!!")
      flag=false
      break;
    }
  }
  if(flag===false){
    alert("Login Successfull!!!")
    window.location.href="../index.html"
  }
  else{
    alert("Invalid Password!")
  }
}

document.getElementById("lbtn1").addEventListener("click",cont2)

function cret() {
  event.preventDefault();

  var obj1 = {
    entmail: document.querySelector("#mail").value,
    epass: document.querySelector("#pass").value,
  };
  store.push(obj1);
  // console.log(store);
  localStorage.setItem("ldata", JSON.stringify(store));
  window.location.href="login.html"
  alert("Account Created Successfully")
}

document.getElementById("cbtn").addEventListener("click",cret)
















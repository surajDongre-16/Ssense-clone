import {navbar,shoppingBag} from '../component/navbar.js';
document.getElementById("navbar").innerHTML = navbar();
shoppingBag();

import {show,append} from './fetch.js';
show("mens").then((data)=>{
    const container= document.getElementById("recommend");
    container.innerHTML=null
    // console.log(data)
    append(data,container)
})


let product = JSON.parse(localStorage.getItem("productShow"));
console.log(product);

let {name,brandName,imageUrl,price:{current:{text}}} = product;

document.getElementById("pName").innerText = name;
document.getElementById("bName").innerText = brandName;
document.getElementById("price").innerText = text;

let image_container = document.getElementById("image_container");
image_container.innerHTML = null;
let img1 = document.createElement("img");
img1.setAttribute("src",`https://${imageUrl}`);
img1.setAttribute("width","500px");
img1.style.paddingLeft = "25%";
img1.style.paddingBottom = "5%";
let img2 = document.createElement("img");
img2.setAttribute("src",`https://${imageUrl}`);
img2.setAttribute("width","500px");
img2.style.paddingLeft = "25%";
img2.style.paddingBottom = "5%";
let img3 = document.createElement("img");
img3.setAttribute("src",`https://${imageUrl}`);
img3.setAttribute("width","500px");
img3.style.paddingLeft = "25%";
img3.style.paddingBottom = "5%";

image_container.append(img1,img2,img3);


// Select Size    and     Add to bag 
localStorage.setItem("size","");
document.getElementById("selectSize").addEventListener("change",function(){
    let size = document.getElementById("selectSize").value
    localStorage.setItem("size",size);
})
var bag = JSON.parse(localStorage.getItem("cart")) || [];
document.getElementById("bag").addEventListener("click",function(){
    let size = localStorage.getItem("size");
    if(size == ""){
        alert("Please select a size");
    }
    else{
        product.size = size;
        bag.push(product);
        localStorage.setItem("cart",JSON.stringify(bag));
        shoppingBag();
    }
})




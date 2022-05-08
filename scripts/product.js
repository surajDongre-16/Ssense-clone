import {navbar,shoppingBag} from '../component/navbar.js';
document.getElementById("navbar").innerHTML = navbar();
shoppingBag();

import footer from "../component/footer.js";
document.getElementById("footer").innerHTML = footer();

import {show,append} from './fetch.js';
show("mens","","").then((data)=>{
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




localStorage.setItem("size","");  // Initial (default selected) Size --> ""


//Select Size for the Product
document.getElementById("selectSize").addEventListener("change",function(){   
    let size = document.getElementById("selectSize").value
    localStorage.setItem("size",size);
})

//bag for collecting and storing items
var bag = JSON.parse(localStorage.getItem("cart")) || [];

//Wishlist 
var wishList = JSON.parse(localStorage.getItem("wishlist")) || [];

//Add to bag button 
document.getElementById("bag").addEventListener("click",bagbutton)

function bagbutton(){
    let size = localStorage.getItem("size");
    if(size == ""){
        setTimeout(()=>{
            document.getElementById("sizeErr").style.display = "block";
        },0)
        setTimeout(()=>{
            document.getElementById("sizeErr").style.display = "none";
        },3000)
    }
    else{
        product.size = size;
        bag.push(product);
        localStorage.setItem("cart",JSON.stringify(bag));
        shoppingBag();
        toCheckout();
    }
}
function toCheckout(){
    let checkoutButton = document.getElementById("bag");
    checkoutButton.innerText = "PROCEED TO CHECKOUT";
    checkoutButton.setAttribute("id","changedToCheckout");
    checkoutButton.removeEventListener("click",bagbutton);
    checkoutButton.addEventListener("click",function(){
        window.location.href = "../bag/bag.html";
    })
}

//Face Value of Wish button
function faceWish(){
    if(inWish()){
        let wbutton = document.getElementById("wishlist");
        wbutton.innerText = "in Wish";
    }
    else{
        let wbutton = document.getElementById("wishlist");
        wbutton.innerText = "Add to Wishlist";
    }
}
faceWish();

//Add to Wishlist

document.getElementById("wishlist").addEventListener("click",wishbutton)

function wishbutton(){
    let size = localStorage.getItem("size");
    if(size == ""){
        setTimeout(()=>{
            document.getElementById("sizeErr").style.display = "block";
        },0)
        setTimeout(()=>{
            document.getElementById("sizeErr").style.display = "none";
        },3000)
    }
    else{
        product.size = size;
        if(!(inWish())){
            wishList.push(product);
            localStorage.setItem("wishlist",JSON.stringify(wishList));
            setTimeout(()=>{
                document.getElementById("wishSuccess").style.display = "block";
            },0)
            setTimeout(()=>{
                document.getElementById("wishSuccess").style.display = "none";
            },3000)
            faceWish();
        }
        else{
            wishList.pop();
            localStorage.setItem("wishlist",JSON.stringify(wishList));
            setTimeout(()=>{
                document.getElementById("wishRemSuccess").style.display = "block";
            },0)
            setTimeout(()=>{
                document.getElementById("wishRemSuccess").style.display = "none";
            },3000)
            faceWish();
        }
    }
}
function inWish(){
    let pId = product.id;
    for(let i = 0; i < wishList.length; i++){
        let wId = wishList[i].id;
        if(pId == wId){
            return true;
        }
    }
    return false;
}


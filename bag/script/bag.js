import {nav,shoppingBag} from "../bagcomp/nav.js";
const navbar = document.getElementById("nav");
navbar.innerHTML = nav();


let show = async()=>{
    let res = await fetch(`https://fakestoreapi.com/products?limit=5`);
    let data = await res.json();
    appenddata(data);
};

let arr = [];
let appenddata = (data)=>{
    data.forEach((el)=>{
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = el.image;
        const title = document.createElement("p");
        title.innerText = el.title;
        const cat = document.createElement("p");
        cat.innerText = el.category;
        const price = document.createElement("p");
        price.innerText = "$" + el.price;
        const btn = document.createElement("p");
        btn.innerText = "ADD TO BAG";
        btn.addEventListener("click", function(){
            add(el);
            window.location.reload();
        });
        btn.setAttribute("class", "btnstyle");
        div.append(img, title,cat,price,btn);   
        document.getElementById("items").append(div);        
    });
}
let add = (el)=>{
   arr.push(el);
   localStorage.setItem("cart", JSON.stringify(arr)); 
}
show();
shoppingBag();

let wishList = JSON.parse(localStorage.getItem("wishlist"));

let cdata = JSON.parse(localStorage.getItem("cart") || []);
console.log(cdata);

function cartData(cdata){
    document.getElementById("cdata").innerHTML = null;
    cdata.forEach((el,i)=>{
        const box = document.createElement("div");
        box.style.display = "flex";
        box.style.borderBottom = "1px solid black";
        box.style.position = "relative";
        const div = document.createElement("div");
        div.setAttribute("id", "dd");
        div.style.display = "inline-block";
        const div2 = document.createElement("div");
        div2.setAttribute("id","d2");
        div2.style.display = "inline-block";
        div2.style.marginLeft = "20px";
        const div3 = document.createElement("div");
        div3.setAttribute("id", "d3");
        div3.style.display = "inline-block";
        div3.style.height = "100px";
        div3.style.position = "absolute";
        div3.style.top = "0";
        div3.style.right = "0";
        const img = document.createElement("img");
        img.src = "https://" + el.imageUrl;
        const title = document.createElement("p");
        title.innerText = el.name;
        const size = document.createElement("p");
        size.innerText ="Size : " + el.size;
        const price = document.createElement("p");
        price.innerText = "$" + el.price.current.value;
        price.style.position = "absolute";
        price.style.right = "0";
        const mtv = document.createElement("p");
        mtv.setAttribute("class","mtv");
        mtv.innerText = "Move to Wishlist";
        mtv.addEventListener("click",function(){
            moveToWish(el,i);
        })
        const remove = document.createElement("p");
        remove.innerText = "Remove";
        remove.setAttribute("class", "rmv");
        remove.style.position = "absolute";
        remove.style.bottom = "0";
        remove.style.right = "0";
        remove.addEventListener("click", function(){
            removeitem(el,i);
    
        });
        div.append(img);
        div2.append(title,size,mtv);
        div3.append(price, remove);
        box.append(div,div2,div3);
        document.getElementById("cdata").append(box);
    })
}
cartData(cdata);

function removeitem(i){
    cdata.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cdata));
    window.location.reload();
}

function moveToWish(el,i){
    cdata.splice(i,1);
    wishList.push(el);
    localStorage.setItem("wishlist",JSON.stringify(wishList));
    localStorage.setItem("cart",JSON.stringify(cdata));
    setTimeout(()=>{
        document.getElementById("wishSuccess").style.display = "block";
    },0)
    setTimeout(()=>{
        document.getElementById("wishSuccess").style.display = "none";
    },3000)
    cartData(cdata);

}

document.getElementById("check").addEventListener("click",function(){
    window.location.href = "../checkout/checkout.html";
})

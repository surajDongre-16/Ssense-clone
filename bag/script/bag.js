import {nav, shoppingBag} from "../bagcomp/nav.js";
const navbar = document.getElementById("nav");
navbar.innerHTML = nav();
shoppingBag();

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


let cdata = JSON.parse(localStorage.getItem("cart") || []);
cdata.forEach((el,i)=>{
    const div = document.createElement("div");
    div.setAttribute("id", "dd");
    const div2 = document.createElement("div");
    div2.setAttribute("id","d2");
    const div3 = document.createElement("div");
    div3.setAttribute("id", "d3");
    const img = document.createElement("img");
    img.src = el.image;
    const title = document.createElement("p");
    title.innerText = el.title;
    const cat = document.createElement("p");
    cat.innerText = el.category;
    const price = document.createElement("p");
    price.innerText = "$" + el.price;
    const mtv = document.createElement("p");
    mtv.setAttribute("class","mtv");
    mtv.innerText = "Move to Wishlist";
    const remove = document.createElement("p");
    remove.innerText = "Remove";
    remove.setAttribute("class", "rmv");
    remove.addEventListener("click", function(){
        removeitem(el,i);

    });
    div.append(img);
    div2.append(title,price);
    div3.append(mtv, remove);
    document.getElementById("main").append(div2);
    document.getElementById("main").append(div);
    document.getElementById("main").append(div3);
});

function removeitem(i){
    cdata.splice(i,1);
    localStorage.setItem("cart", JSON.stringify(cdata));
    window.location.reload();
}


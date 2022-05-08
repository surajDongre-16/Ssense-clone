import {navbar,shoppingBag} from "../component/navbar.js";

document.getElementById("navbar").innerHTML = navbar();
shoppingBag();

import footer from "../component/footer.js";

document.getElementById("footer").innerHTML = footer();




//Wishlist Items
var wishList = JSON.parse(localStorage.getItem("wishlist"));
console.log(wishList);

//Getting bag (WishList to bag)
var bag = JSON.parse(localStorage.getItem("cart"));

function wishwish(wishList){
    
    document.getElementById("wishlist").innerHTML = null;

    wishList.forEach((el,i)=>{
        let {imageUrl,brandName,name,size,price:{current:{text}}} = el;
        

        let box = document.createElement("div");
    
        let image = document.createElement("img");
        image.setAttribute("src",`https://${imageUrl}`);
        image.setAttribute("width","218px");
        image.setAttribute("height","327px");
    
        let brnd = document.createElement("p");
        brnd.innerText = brandName;
    
        let pname = document.createElement("p");
        pname.innerText = name;
    
        let psize = document.createElement("p");
        psize.innerText = `Size : ${size}`;
    
        let pprice = document.createElement("p");
        pprice.innerText = text;
    
        let addToBag = document.createElement("div");
        addToBag.innerText = "ADD TO BAG";
        //Styling
        addToBag.style.backgroundColor = "black";
        addToBag.style.color = "white";
        addToBag.style.textAlign = "center";
        addToBag.style.padding = "10px 60px 10px 60px";
        addToBag.style.cursor = "pointer";
        addToBag.addEventListener("click",function(){
            toBag(addToBag,el,i);
        })
    
        let remove = document.createElement("div");
        remove.innerHTML ="<span style=\"font-size:18px;\">X</span>   Remove";
        //Styling
        remove.style.textAlign = "center";
        remove.style.padding = "10px 60px 10px 60px";
        remove.style.fontSize = "18px";
        remove.style.cursor = "pointer";
        remove.addEventListener("click",function(){
            wishList.splice(i,1);
            localStorage.setItem("wishlist",JSON.stringify(wishList));
            setTimeout(()=>{
                document.getElementById("removeWish").style.display = "block";
            },0)
            setTimeout(()=>{
                document.getElementById("removeWish").style.display = "none";
            },3000)
            wishwish(wishList);
    
        })
        box.append(image,brnd,pname,psize,pprice,addToBag,remove);
        document.getElementById("wishlist").append(box)
    
    
    
    })
}
wishwish(wishList);

function toBag(button,el,i){
    bag.push(el);
    localStorage.setItem("cart",JSON.stringify(bag));
    shoppingBag();
    toCheckout(button);
    setTimeout(()=>{
        document.getElementById("WishAddBag").style.display = "block";
    },0)
    setTimeout(()=>{
        document.getElementById("WishAddBag").style.display = "none";
    },3000)
    wishList.splice(i,1);
    console.log("wishlist:",wishList)
    localStorage.setItem("wishlist",JSON.stringify(wishList));

}

function toCheckout(button){
    button.innerText = "PROCEED TO CHECKOUT";
    button.setAttribute("id","changedToCheckout");
    button.removeEventListener("click",function(){
        toBag(addToBag,el);
    });
    button.addEventListener("click",function(){
        window.location.href = "../bag/bag.html";
    })
    
}

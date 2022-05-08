function navbar(){
    return ` <div id="left-nav">
                <p id="menswear">MENSWEAR</p>
                <p id=womenswear>WOMENSWEAR</p>
                <p id=everything>EVERYTHING ELSE</p>
                <p id=search-box>SEARCH</p>
            </div>
            <div id="middle-nav">
                <img id="logo" src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" alt="">
            </div>
            <div id="right-nav">
                <p>ENGLISH</p>
                <p id="login">LOGIN</p>
                <p id="wish1">WISHLIST</p>
                <p id="ShopBag"></p>
            </div>`
}
function shoppingBag(){
    document.getElementById("logo").addEventListener("click",function(){
        window.location.href = "../index.html";
    })
    document.getElementById("wish1").addEventListener("click",function(){
        window.location.href = "../wishlist/wishlist.html";
    })
    let a = localStorage.getItem("cart");
    if(a == null){
        let b = document.getElementById("ShopBag");
        b.innerText = `SHOPPING BAG (0)`;
        b.style.cursor = "pointer";
        b.addEventListener("click",()=>{
            window.location.href = "../bag/bag.html";
        })
    }
    else{
        let b = document.getElementById("ShopBag");
        b.innerText = `SHOPPING BAG (${JSON.parse(a).length})`;
        b.style.cursor = "pointer";
        b.addEventListener("click",()=>{
            window.location.href = "../bag/bag.html";
        })
    }
    
}
export  {navbar,shoppingBag};
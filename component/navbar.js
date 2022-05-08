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
                <p>WISHLIST</p>
                <p id="ShopBag"></p>
            </div>`
}
function shoppingBag(){
    let b = document.getElementById("ShopBag");
    b.innerText = `Shopping Bag (${JSON.parse(localStorage.getItem("cart")).length})`;
    b.style.cursor = "pointer";
    b.addEventListener("click",()=>{
        window.location.href = "../bag/bag.html";
    })
}
export  {navbar,shoppingBag};
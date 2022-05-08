function nav(){
    return ` <div id="nl">
                <p id="mwear">MENSWEAR</p>
                <p id=wwear>WOMENSWEAR</p>
                <p id=everything>EVRYTHING ELSE</p>
                <p id=sb>SEARCH</p>
            </div>
            <div id="ml">
                <img id="lg" src="https://res.cloudinary.com/ssenseweb/image/upload/v1471963917/web/ssense_logo_v2.svg" alt="">
            </div>
            <div id="nr">
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

export {nav, shoppingBag};
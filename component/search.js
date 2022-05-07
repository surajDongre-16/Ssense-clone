function searchDisplay(){
    return `
    <div class="cat-name">
        <p>MENSWEAR</p>
        <p>WOMENSWEAR</p>
        <p>EVERYTHING ELSE</p>
    </div>
    <div class="search-box">
        <div>
            <input type="text" id="search" size="40" placeholder="Search">
            <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        <p id="close">close</p>
    </div>`
}
export {searchDisplay}
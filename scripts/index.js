import {navbar,shoppingBag} from "../component/navbar.js"

const nav=document.getElementById("navbar")

nav.innerHTML=navbar()
shoppingBag();

import {show,append,cSearch} from "./fetch.js"
import {searchDisplay} from "../component/search.js"

document.querySelector(".search").innerHTML=searchDisplay()
// redirection to different pages

let men=document.getElementById("menswear")
men.addEventListener("click",function(){
    localStorage.setItem("gender",JSON.stringify("mens"))
    window.location.href="../html files/mens.html"
})

let women=document.getElementById("womenswear")
women.addEventListener("click",function(){
    localStorage.setItem("gender",JSON.stringify("womens"))
    window.location.href="../html files/womens.html"
})

let everything=document.getElementById("everything")
everything.addEventListener("click",function(){
    window.location.href="../html files/everythings.html"
})

let login=document.getElementById("login")
login.addEventListener("click",function(){
    localStorage.setItem("gender",JSON.stringify("mens"))
    window.location.href="../html files/login.html"
})



// Search functionality
let search = (e) => {
    if(e.key == 'Enter'){
        let word=document.getElementById("search").value
        show(word,"freshness","").then((data)=>{
            const container= document.getElementById("middle-container")
            container.innerHTML=null
            append(data,container)
        })
    }
}

const searchfn = () =>{
    let word=document.getElementById("search").value
    show(word,"freshness","").then((data)=>{
        const container= document.getElementById("middle-container")
        container.innerHTML=null
        append(data,container)
    })
}
function closefn(){
    document.querySelector(".search").style.display="none"
}
function dailog(){
   document.querySelector(".search").style.display="block"
}
document.getElementById("close").addEventListener("click",closefn)

document.getElementById("search").addEventListener("keydown",search)

document.getElementById("search-box").addEventListener("click",dailog)

document.querySelector(".fa-magnifying-glass").addEventListener("click",searchfn)
function indexfn(){
    window.location.href="../index.html"
}

document.querySelector("#logo").addEventListener("click",indexfn)
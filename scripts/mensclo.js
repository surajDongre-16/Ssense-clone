import {navbar,shoppingBag} from "../component/navbar.js"
import { mens_clothes } from "../component/body.js"
import {show,append,cSearch} from "./fetch.js"
import {searchDisplay} from "../component/search.js"
import {liveassist,assistListener} from "../component/liveassist.js";
document.getElementById("assist").innerHTML = liveassist();
assistListener();

document.querySelector(".search").innerHTML=searchDisplay()
const nav=document.getElementById("navbar")

nav.innerHTML=navbar()
shoppingBag();

const container=document.getElementById("container")
container.innerHTML=mens_clothes()

// redirection to different sections
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

let gender=JSON.parse(localStorage.getItem("gender"))
gender=gender+"_clothes" 

// showing data on the main page

show(gender,"freshness","").then((data)=>{
    const container= document.getElementById("middle-container")
    container.innerHTML=null
    append(data,container)
})

let x=document.getElementById("clothes").children
for(let el of x){
    el.addEventListener("click",function(){
        let acc="mens_"+el.id
        cSearch(acc,"freshness","")
    })
}

let id=document.getElementById("all-designers").children

for(let el of id){
    el.addEventListener("click",function(){
        let color=Math.floor(Math.random() * 10) +1
        cSearch(el.id,"freshness",color)
    })
}

let sort=document.getElementById("sort").children
for(let el of sort){
    el.addEventListener("click",function(){
        let color=Math.floor(Math.random() * 10) +1
        cSearch("clothes",el.id,color)
    })
}
let color=document.getElementById("colors").children

for(let el of color){
    el.addEventListener("click",function(){
        cSearch("clothes","oldest",el.id)
    })
}


// search functionality
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
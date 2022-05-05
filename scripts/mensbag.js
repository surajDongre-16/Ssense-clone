import navbar from "../component/navbar.js"
// import { show } from "./fetch.js";

const nav=document.getElementById("navbar")

nav.innerHTML=navbar()

import {show,append,cSearch} from "./fetch.js"



show("mens_bags").then((data)=>{
    const container= document.getElementById("middle-container")
    container.innerHTML=null
    // console.log(data)
    append(data,container)
})


let x=document.getElementById("bags").children
for(let el of x){
    // console.log(el)
    el.addEventListener("click",cSearch)
}

let id=document.getElementById("all-designers").children

for(let el of id){
    el.addEventListener("click",cSearch)
}
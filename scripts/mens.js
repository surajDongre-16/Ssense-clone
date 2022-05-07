import navbar from "../component/navbar.js"


const nav=document.getElementById("navbar")

nav.innerHTML=navbar()

import {show,append,cSearch} from "./fetch.js"


show("mens_clothes").then((data)=>{
    const container= document.getElementById("middle-container")
    container.innerHTML=null
        console.log(data)
    append(data,container)
})  


let id=document.getElementById("all-designers").children

for(let el of id){
    el.addEventListener("click",cSearch)
}
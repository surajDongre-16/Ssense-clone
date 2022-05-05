import navbar from "../component/navbar.js"
// import { show } from "./fetch.js";

const nav=document.getElementById("navbar")

nav.innerHTML=navbar()

import {show,append} from "./fetch.js"


show("mens_lofers").then((data)=>{
    const container= document.getElementById("middle-container")
    container.innerHTML=null
    // console.log(data)
    append(data,container)
})


function cSearch(){ 
    console.log(this.id)
    // console.log(show(this.id))
    show(this.id).then((data)=>{
        const container= document.getElementById("middle-container")
        container.innerHTML=null
        // console.log(data)
        append(data,container)
    })

}

let x=document.getElementById("shoes").children
for(let el of x){
    // console.log(el)
    el.addEventListener("click",cSearch)
}
import navbar from "../component/navbar.js"


const nav=document.getElementById("navbar")

nav.innerHTML=navbar()

import {show,append} from "./fetch.js"


show("mens_clothes").then((data)=>{
    const container= document.getElementById("middle-container")
    container.innerHTML=null
    // console.log(data)
    append(data,container)
})

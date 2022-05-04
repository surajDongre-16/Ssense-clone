import navbar from "../component/navbar.js"
import { show } from "./fetch.js";

const nav=document.getElementById("navbar")

nav.innerHTML=navbar()


// import {show,append} from "./fetch.js"

// let query='clothes'
function suraj(query){
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
            'X-RapidAPI-Key': '2fdddb05aemshc1cb453a53c57cdp1b67cfjsneee8719dd07f'
        }
    };
    
    fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${query}&currency=USD&sizeSchema=US&lang=en-US`, options) 
        .then(function(res){
            return res.json()
        }) 
        .then(function(res){
            console.log(res)
            return res
        })
        .catch(err => console.error(err));
}

let a='clothes'
console.log(suraj(a))

// function cSearch(){ 
//     console.log(this.id)
//     console.log(suraj(this.id))
//     // show(this.id).then((data)=>{
//     //     const container= document.getElementById("middle-container")
//     //     container.innerHTML=null
//     //     console.log(data)
//     //     // append(data.products,container)
//     // })

// }

// let x=document.getElementById("accessories").children

// for(let el of x){
//     // console.log(el)
//     el.addEventListener("click",cSearch)
// }
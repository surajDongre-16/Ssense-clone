import navbar from '../component/navbar.js';

document.getElementById("navbar").innerHTML = navbar();

import {show,append} from './fetch.js';
show("mens_accessories").then((data)=>{
    const container= document.getElementById("recommend");
    container.innerHTML=null
    // console.log(data)
    append(data,container)
})
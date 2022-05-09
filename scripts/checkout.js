
import footer from "../component/footer.js";
document.getElementById("footer").innerHTML = footer();

import {countries,states} from '../component/form_Components.js';
document.getElementById("country").innerHTML = countries();
document.querySelector("#billing #country").innerHTML = countries();
document.querySelector("#country>select").addEventListener("change",function(){
    let country = document.querySelector("#country>select").value;
    if(country == "India"){
        document.getElementById("state").innerHTML = states();
    }
    else{
        document.getElementById("state").innerHTML = `<select name="" id="">
        <option value="">Select</option>
    </select>`;
    }
});

document.getElementById("shippingradio").checked = true;

document.getElementById("card").addEventListener("change",function(){
        
        let card = document.getElementById("card").checked;
        let cardDetails = document.getElementById("card_details");
        if(card){
            document.getElementById("button").innerHTML = "PLACE ORDER";
            cardDetails.style.display = "block";
            document.getElementById("imgcard1").style.filter = "none";
            document.getElementById("imgcard2").style.filter = "none";
            document.getElementById("imgpaypal").style.filter = "grayscale(100%)";
            document.getElementById("imgapay").style.filter = "grayscale(100%)";

        } 
})
document.getElementById("paypalradio").addEventListener("change",function(){
        let paypalradio = document.getElementById("paypalradio").checked;
        if(paypalradio){
            document.getElementById("button").innerHTML = null;
            document.getElementById("card_details").style.display = "none";
            paypal.Buttons({
                style: {
                 layout: 'horizontal',
                 color: "black",
                 tagline: 'false'
            }
            }).render("#button");
            document.getElementById("imgcard1").style.filter = "grayscale(100%)";
            document.getElementById("imgcard2").style.filter = "grayscale(100%)";
            document.getElementById("imgpaypal").style.filter = "none";
            document.getElementById("imgapay").style.filter = "grayscale(100%)";
        }
})
document.getElementById("sameAddress").checked = true;
document.getElementById("sameAddress").addEventListener("change",function(){
    let billAd = document.getElementById("sameAddress").checked
    if(billAd){
        document.getElementById("billing").style.display = "none";
    }
    else{
        document.getElementById("billing").style.display = "block";
    }
})


let summarydata = JSON.parse(localStorage.getItem("cart"));
console.log(summarydata);

function cartData(cdata){
    document.getElementById("appended").innerHTML = null;
    summarydata.forEach((el,i)=>{
        const box = document.createElement("div");
        box.style.display = "flex";
        box.style.borderBottom = "1px solid black";
        box.style.position = "relative";
        const div = document.createElement("div");
        div.setAttribute("id", "dd");
        div.style.display = "inline-block";
        const div2 = document.createElement("div");
        div2.setAttribute("id","d2");
        div2.style.display = "inline-block";
        div2.style.marginLeft = "20px";
        const div3 = document.createElement("div");
        div3.setAttribute("id", "d3");
        div3.style.display = "inline-block";
        div3.style.height = "100px";
        div3.style.position = "absolute";
        div3.style.top = "0";
        div3.style.right = "0";
        const img = document.createElement("img");
        img.src = "https://" + el.imageUrl;
        img.setAttribute("height","80px")
        const title = document.createElement("p");
        title.innerText = el.name;
        const size = document.createElement("p");
        size.innerText ="Size : " + el.size;
        const price = document.createElement("p");
        price.innerText = "$" + el.price.current.value;
        price.style.position = "absolute";
        price.style.right = "0";
        div.append(img);
        div2.append(title,size);
        div3.append(price);
        box.append(div,div2,div3);
        document.getElementById("appended").append(box);
    })
}
cartData(summarydata);
function ival(id){
   let a = document.getElementById(id).value;
   return a;
}
document.getElementById("button").addEventListener("click", function(){
    if(ival("f_Name") == "" || ival("l_Name") == "" || ival("address") == "" || ival("company") == "" || ival("city") == "" || ival("zip") == "" || ival("mobile") == ""){
        setTimeout(()=>{
            document.getElementById("formErr").style.display = "block";
        },0)
        setTimeout(()=>{
            document.getElementById("formErr").style.display = "none";
        },3000)
    }
    else{
        window.location.href = "../html files/aftercheckout.html";
    }
})



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


function liveassist(){
    return `
    <div id="liveassist">Live Assistance</div>
    <div id="liveIntro">
        <div><div id="intro">INTRODUCE YOURSELF</div><div id="close">X</div></div>
        <div id="dddetails">
            <label for="Lname">Name</label>
            <input type="text">
            <label for="Lname">Email(required)</label>
            <input type="text">
            <label for="Lname">How can we help?(required)</label>
            <input type="text" id="textarea">
            <div id="sendButton">SEND</div>
            
        </div>
</div>`
}
function assistListener(){
    document.getElementById("intro").addEventListener("click",function(){
        let a = document.getElementById("dddetails").style.display;
        if(a == "none"){
            document.getElementById("dddetails").style.display = "block";
        }
        else{
            document.getElementById("dddetails").style.display = "none";
        }
    })
    document.getElementById("liveassist").addEventListener("click",function(){
        document.getElementById("liveIntro").style.display = "block";
    })
    document.getElementById("close").addEventListener("click",function(){
        document.getElementById("liveIntro").style.display = "none";
    })
    document.getElementById("sendButton").addEventListener("click",function(){
        document.getElementById("liveIntro").style.display = "none";
    })
}
export {liveassist,assistListener};
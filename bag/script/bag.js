let show = async()=>{
    let res = await fetch(`https://fakestoreapi.com/products?limit=5`);
    let data = await res.json();
    appenddata(data);
};

let appenddata = (data)=>{
    data.forEach((el)=>{
        const div = document.createElement("div");
        const img = document.createElement("img");
        img.src = el.image;
        const title = document.createElement("p");
        title.innerText = el.title;
        div.append(img, title);   
        document.getElementById("items").append(div);        
    });

}
show();

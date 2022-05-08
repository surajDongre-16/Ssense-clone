

let show = async (query,price,color)=>{
    // console.log(query)
    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
                'X-RapidAPI-Key': '5dbca08c04mshd936eb2a3f4f20dp1ecd48jsn46f47e882e9a'
            }
        };
    let res=await fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=${price}&q=${query}&base_colour=${color}&currency=USD&sizeSchema=US&lang=en-US`, options)           
        let data=await res.json()
        console.log(data)
        // append(data.products)
        return data.products        
    }catch(err){
        console.log(err)
    }
}

let append = (data,container) =>{

    
    data.forEach((el)=>{
        // console.log(brandName,imageUrl,name)
        let {brandName,imageUrl,name,color,price:{current:{text,value}}} = el;
        let div=document.createElement("div")
        div.setAttribute("class","div")
        div.addEventListener("click",function(){
           localStorage.setItem("productShow",JSON.stringify(el));
           window.location.href = "../Product/product.html";
        })

        const brdName=document.createElement("p")
        brdName.innerText=brandName

        const img=document.createElement("img")
        img.src=`https://${imageUrl}`

        const proName=document.createElement("p")
        proName.innerText=name

        const price=document.createElement("p")
        price.innerText=text

        div.append(img,brdName,proName,price)
        container.append(div)
    })
}

function cSearch(id,sort,color){
    if(id==""){
        id="clothes"
    }
    if(sort==undefined){
        sort="freshness"
    }
    if(color==undefined){
        color=Math.floor(Math.random() * 10) +1
    }
    show(id,sort,color).then((data)=>{
        const container= document.getElementById("middle-container")
        container.innerHTML=null
        console.log(data)
        append(data,container)
    })
}




export {show,append,cSearch}
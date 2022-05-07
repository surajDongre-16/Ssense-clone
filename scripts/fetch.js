//pricedesc|priceasc|freshness|oldest


let show = async (query,price,color)=>{
    // console.log(query)


    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
                'X-RapidAPI-Key': 'e0fea4c491msh0774c68ef2a9450p17d0bbjsnc89953e2b930'
            }
        };
//https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=${price}&q=mens%20shirts&base_colour={color}&currency=USD&sizeSchema=US&lang=en-US        
//https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${query}&currency=USD&sizeSchema=US&lang=en-US
let res=await fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=${price}&q=${query}&base_colour=${color}&currency=USD&sizeSchema=US&lang=en-US`, options)           
        let data=await res.json()
        // console.log(data)
        // append(data.products)
        return data.products        
    }catch(err){
        console.log(err)
    }
}

let append = (data,container) =>{

    
    data.forEach(({brandName,imageUrl,name,price:{current:{text}}})=>{
        // console.log(brandName,imageUrl,name)
        let div=document.createElement("div")
        div.setAttribute("class","div")

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
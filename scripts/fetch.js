let show = async (query)=>{
    // console.log(query)


    try{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
                'X-RapidAPI-Key': 'c83cde790bmsh4f0e7202953be1cp1f2680jsn7e1ad9407925'
            }
        };
        
        let res=await fetch(`https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&q=${query}&currency=USD&sizeSchema=US&lang=en-US`, options)           
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


function cSearch(){
    show(this.id).then((data)=>{
        const container= document.getElementById("middle-container")
        container.innerHTML=null
        append(data,container)
    })
}




export {show,append,cSearch}
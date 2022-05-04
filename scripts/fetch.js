let show = ()=>{
    // console.log(query)
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'asos2.p.rapidapi.com',
            'X-RapidAPI-Key': '2fdddb05aemshc1cb453a53c57cdp1b67cfjsneee8719dd07f'
        }
    };
    
    fetch('https://asos2.p.rapidapi.com/v2/auto-complete?q=bikini%20top&store=US&country=US&currency=USD&sizeSchema=US&lang=en-US', options)        .then(function(res){
            return res.json()
        }) 
        .then(function(res){
            console.log(res)
        })
        .catch(err => console.error(err));

        

}


let append = (data,container) =>{

    
    data.forEach(({brandName,imageUrl,name,price:{current:{text}}})=>{
        console.log(brandName,imageUrl,name)
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


export {show,append}
let show = async()=>{
    let res = await fetch(`https://fakestoreapi.com/products?limit=5`);
    let data = await res.json();
    appenddata(data);
};

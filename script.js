const card = document.getElementById('card')

fetch('https://fakestoreapi.com/products?limit=10')
.then((data)=>{
    return data.json()
})
.then((datajson)=>{
   console.log(datajson)
   for(item of datajson){
    card.innerHTML+=`
<div>
<img src="${item.image}" alt="">
<h1>${item.title}</h1>
<p>${item.price} $</p>
<p>${item.category}</p>

</div>
`
   }
})

.catch((err)=>{
    console.log(err);
})



const productsContainer=document.getElementById('products');

const getProducts=()=>{
    return fetch('https://dummyjson.com/products?limit=9')
    .then(response => response.json())
    .then(response=>response)
    .catch(error=>error)
}
getProducts();


const displayProducts=async()=>{
    const products=await getProducts()
    console.log(products);
    products.products.map(item=>{
        console.log(item);

        let div = document.createElement('div');
        let images=document.createElement('img');
        let title = document.createElement('h3');
        let price = document.createElement ('p');
        let ratings = document.createElement('p');
        let button = document.createElement('button');

        images.src = item.thumbnail;
        title.innerHTML = item.title;
        ratings.innerHTML = item.rating + ' ' + '(1102 Review)';
        price.innerHTML = '$' + item.price;
        button.textContent = 'ADD TO CART';
  
        div.appendChild(images);
        div.appendChild(title);
        div.appendChild(ratings);
        div.appendChild(price);
        div.appendChild(button);

        div.setAttribute('key',item.id);
        div.setAttribute('class','product');
        productsContainer.appendChild(div)
    })
}

displayProducts()
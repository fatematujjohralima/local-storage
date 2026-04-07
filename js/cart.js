const handleAddProducts = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEl.value;
    const quantity = parseInt(quantityEl.value);
    // console.log('product add', product, quantity);

    displayProduct(product, quantity);
    addProductToCart(product, quantity)

    productEl.value = '';
    quantityEl.value = '';
}


const displayProduct = (product, quantity) =>{
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`

    // get the ul
    const ul = document.getElementById('products-container');
    ul.appendChild(li);
}

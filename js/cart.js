const handleAddProducts = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    const product = productEl.value;
    const quantity = (quantityEl.value);
    console.log('product add', product, quantity);
    
}

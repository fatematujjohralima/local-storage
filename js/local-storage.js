const addNumberToLS = () => {
    const number = Math.ceil(Math.random() * 100)
    console.log(number);
    localStorage.setItem('number', number)
}

const getNumberFromLS = () => {
    const number = localStorage.getItem('number');
    console.log('from saved local storage', number)
}

const setObjectToLS = () => {
    const customer = { name: 'rohim khalu', products: 3, price: 75 }
    const customerJSON = JSON.stringify(customer)
    localStorage.setItem('customer', customerJSON);

}
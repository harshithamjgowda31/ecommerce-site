let cart = [];

function addToCart(name, price) {
    cart.push({name, price});
    alert(name + " added to cart!");
}

function checkout() {
    let total = 0;
    cart.forEach(item => total += item.price);
    document.getElementById("total").innerText = "₹" + total;
}



const list = document.getElementById("list");
const totalPrice = document.getElementById("total-price");
const itemsNum = document.getElementById("items-num");

const storedCart = JSON.parse(localStorage.getItem("cart"));
const storedNum = localStorage.getItem("cartItemsNum");

console.log(storedCart);
function displayCart() {
    let priceArr = storedCart.map(item => item.price);
    let total = priceArr.reduce((a,b) => a+b).toFixed(2);
    list.innerHTML = storedCart.map(item => {
        return `<tr id="${item.id}">
                    <td>${item.title}</td>
                    <td>${item.price}</td>
                </tr>`
    }).join('');
    totalPrice.innerHTML = total;
    itemsNum.innerText = storedNum;

}

window.addEventListener("DOMContentLoaded", function () {
    displayCart();
});




const storedNum = localStorage.getItem("cartItemsNum");
console.log(storedNum);
const itemsNum = document.getElementById("items-num");

function displayNum() {
    itemsNum.innerText = storedNum;

}

window.addEventListener("DOMContentLoaded", function () {
    displayNum();
});

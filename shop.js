const commodities = [
    {
        id: 1,
        title: "cabbage",
        category: "groceries",
        price: 6.25,
        img: "images/groceries/cabbage.jpg",
        desc: `1 whole cabbage`,
    },
    {
        id: 2,
        title: "cauliflower",
        category: "groceries",
        price: 5.10,
        img: "images/groceries/cauliflower.jpg",
        desc: `1 whole cauliflower `,
    },
    {
        id: 3,
        title: "eggplant",
        category: "groceries",
        price: 7.99,
        img: "images/groceries/eggplant.png",
        desc: `1 Ib`,
    },
    {
        id: 4,
        title: "eggs",
        category: "groceries",
        price: 7.25,
        img: "images/groceries/eggs.jpg",
        desc: `carton of 12 large white eggs `,
    },
    {
        id: 5,
        title: "milk",
        category: "groceries",
        price: 4.50,
        img: "images/groceries/milk.jpg",
        desc: `5 gallon jug`,
    },
    {
        id: 6,
        title: "potatoes",
        category: "groceries",
        price: 3.40,
        img: "images/groceries/potatoes.jpg",
        desc: `1 Ib large yellow potatoes`,
    },
    {
        id: 7,
        title: "onion",
        category: "groceries",
        price: 2.99,
        img: "images/groceries/onion.jpg",
        desc: `1 Ib yellow onions `,
    },
    {
        id: 8,
        title: "lipliner",
        category: "beauty",
        price: 25.00,
        img: "https://d3t32hsnjxo7q6.cloudfront.net/i/6607c1b7eb717dfbd3c228b61e4c5148_ra,w158,h184_pa,w158,h184.png",
        desc: `Maybelline red`,
    },
    {
        id: 9,
        title: "blush",
        category: "beauty",
        price: 30.50,
        img: "https://d3t32hsnjxo7q6.cloudfront.net/i/e8c59b78ebeaec5c4b6aeba49a9ff0f6_ra,w158,h184_pa,w158,h184.png",
        desc: `Maybelline Face Studio Master Hi-Light Light Boosting blush formula`,
    },
    {
        id: 10,
        title: "eyeshadow",
        category: "beauty",
        price: 30.00,
        img: "https://d3t32hsnjxo7q6.cloudfront.net/i/201350fd3e173307ade44520dc87d8fb_ra,w158,h184_pa,w158,h184.png",
        desc: `Maybelline The Nudes Eye Shadow Palette`,
    },
    {
        id: 11,
        title: "foundation",
        category: "beauty",
        price: 30.00,
        img: "https://d3t32hsnjxo7q6.cloudfront.net/i/fb79e7facf701176d4113527c284613f_ra,w158,h184_pa,w158,h184.png",
        desc: `authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
        id: 12,
        title: "eyeshadow",
        category: "beauty",
        price: 30.25,
        img: "https://d3t32hsnjxo7q6.cloudfront.net/i/cf21d194ab14ee3c527d02682c358a7a_ra,w158,h184_pa,w158,h184.png",
        desc: `Maybelline Eye Studio Color Tattoo 24HR Cream Gel Shadow Leather.`,
    },
    {
        id: 13,
        title: "eyeliner",
        category: "beauty",
        price: 30.45,
        img: "https://d3t32hsnjxo7q6.cloudfront.net/i/bab89a9fe13b34235e0dd1f4f44c05cf_ra,w158,h184_pa,w158,h184.png",
        desc: `Unstoppable Eyeliner allows ultra-smooth application.`,
    },
    {
        id: 14,
        title: "nail polish",
        category: "beauty",
        price: 30.75,
        img: "https://d3t32hsnjxo7q6.cloudfront.net/i/a05aa31a7e30d9d262ae36d0be2c4f87_ra,w158,h184_pa,w158,h184.png",
        desc: `High fashion meets high-art. With Maybelline Color Show Nail Lacquer `,
    },
    {
        id: 15,
        title: "smart watch",
        category: "electronics",
        price: 199.25,
        img: "images/electronics/garmin-watch.jpg",
        desc: `Garmin Approach S10, Lightweight GPS Golf Watch, Black`,
    },
    {
        id: 16,
        title: "Laptop",
        category: "electronics",
        price: 840.30,
        img: "images/electronics/acer-laptop.jpg",
        desc: `Acer Aspire 5 Slim Laptop, 15.6 inches Full HD IPS Display, AMD Ryzen 3 3200U, Vega 3 Graphics, 4GB DDR4, 128GB SSD, Backlit Keyboard, Windows 10 in S Mode`,
    },
    {
        id: 17,
        title: "camera",
        category: "electronics",
        price: 350.50,
        img: "images/electronics/camera.jpg",
        desc: `Canon EOS Rebel T7 18-55mm DC III Digital Camera, Black`,
    },
];
// -------------------------------------------------------------------------------------

const cartContent = document.getElementById('cart-content');
const itemsNum = document.getElementById('items-num');
const productsSection = document.querySelector('.products');

let cartArr = [];
let carNum = cartArr.length;

const updateStorage = (arr, num) => {
    localStorage.setItem("cart", JSON.stringify(arr));
    localStorage.setItem("cartItemsNum", JSON.stringify(num));
}

const updateCartArr = (obj) => {
    let newCartObj = {
        title: obj.title,
        price: obj.price,
        id: obj.id
    };
    cartArr.push(newCartObj);
}

const cartDisplay = (item) => {
        return `<tr id="${item.id}">
                <td>${item.title}</td>
                <td>${(item.price).toFixed(2)}</td>
                <td><button class="remove"><i class="fas fa-trash-alt"></i></button></td>
                </tr>`;
}
const updatePrice = (arr) => {
    const total = document.getElementById('total');
    const totalPrice = arr.map(item => item.price).reduce((a,b) => a+b).toFixed(2);
    total.innerText = totalPrice;
}

const clearCart = document.querySelector('.clear-cart');
clearCart.addEventListener('click', function() {
                cartArr = [];
                cartNum = 0;
                cartContent.innerHTML = '';
                total.innerText = 0;
                itemsNum.innerText = cartNum;
                updateStorage(cartArr, cartNum);
            });

// ----closing the shopping cart window----------------------------------
const closeBtn = document.getElementById('close');
closeBtn.addEventListener('click', function() {
    cart.classList.remove("shopping-container-show")
})


const removeItems = () => {
    let removeBtns = document.querySelectorAll('.remove');
            removeBtns.forEach(function(btn) {
                btn.addEventListener('click', function() {
                    let idToRemove = btn.parentNode.parentNode.getAttribute("id");
                    let index = cartArr.findIndex(item => item.id === parseInt(idToRemove));
                    cartArr.splice(index,1);
                    updatePrice(cartArr);            
                    let cartNum = cartArr.length   
                    itemsNum.innerText = cartNum;
                        
                    btn.parentNode.parentNode.remove();

// ___Update payment page - Deleted Items________________________________
                    updateStorage(cartArr, cartNum);
                })
            })
}


window.addEventListener("DOMContentLoaded", function () {
    display(commodities);
    const storedCart = JSON.parse(localStorage.getItem("cart"));
    const storedNum = localStorage.getItem("cartItemsNum");
    if(storedCart.length > 0) {
        cartContent.innerHTML += storedCart.map(item => cartDisplay(item)).join('');
        storedCart.map((item) => updateCartArr(item)) ;
    }
    itemsNum.innerText = storedNum;
    updatePrice(cartArr);            
    removeItems();
});



// --- Products shop display -----------------------  
function display(items) {
    let displayed = items.map(function (item) {
        return `<article id="${item.id}">
        <img src="${item.img}" alt="${item.title}">
        <div class="info">
            <button class="add">Add to Cart</button>
            <h3>$ ${(item.price.toFixed(2))}</h3>
            <p>${item.title}</p>
            <p class="desc">${item.desc}</p>
        </div>
        </article>`;
    }).join("");
    productsSection.innerHTML = displayed;
    
// --Shopping Cart display and functions------------------------
    const addBtns = document.querySelectorAll('.add');
    const cart = document.getElementById('shopping-container');
    addBtns.forEach(function(btn)  {
        btn.addEventListener('click', function(e) {
            cart.classList.add("shopping-container-show");
            let itemId = e.currentTarget.parentNode.parentNode.id;
            let clickedItem = commodities[itemId-1];
            cartContent.innerHTML += cartDisplay(clickedItem);
            updateCartArr(clickedItem);
// -----Showing the cart total and number of items-----------------------------
            updatePrice(cartArr);            
            let cartNum = cartArr.length   
            itemsNum.innerText = cartNum;
// ___Update storage - Added Items________________________________
            updateStorage(cartArr, cartNum);
// ---remove items from cart -------------------------------
            removeItems();
        })
    })
}


// ----Showing the shopping cart from the cart ICON--------------------------
const cartIcon = document.getElementById("cart-icon");
const cart = document.getElementById("shopping-container");
cartIcon.addEventListener("click", function () {
    cart.classList.toggle("shopping-container-show");
});



// Serach and filter products --------
const filterBtns = document.querySelectorAll('.filter-btn');

filterBtns.forEach((btn) => {
    btn.addEventListener('click', function(e) {
        const btnCategory = e.currentTarget.dataset.id;
        const filteredCommodities = commodities.filter((product) => product.category === btnCategory);
        if (btnCategory === 'all') {
            display(commodities);
        } else {
            display(filteredCommodities);
        }
        
    })
})


// Search bar -----------------------
const searchIcon = document.querySelector('.search-icon');
searchIcon.addEventListener('click', function () {
    let searchWord = document.getElementById('search-word').value;
    searchWord = searchWord.toLowerCase();
    let searchedCom = commodities.filter(item => item.title.includes(searchWord));
    if(searchedCom.length > 0) {
        display(searchedCom);
    } 
    if (searchedCom <= 0) {
        alert('This item is out of stock!');
        display(commodities);
    }
}

);


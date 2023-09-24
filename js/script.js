
var productPrice = document.querySelectorAll(".product-price li")
var choosenProducts = document.getElementById("choosen_products")
var calcBtn = document.getElementById("calculate")
var result  = document.getElementById("result")
var totalPrice = 0


function gettingEachProduct(){
    productPrice.forEach(function (product) {
        onProductClick(product)
       })
}

gettingEachProduct()

function onProductClick(product){
    product.onclick = function() {
        choosenProducts.innerHTML += product.textContent
        totalPrice +=  +(product.getAttribute("price"))
        checkProductAvaliability()
    }
}

function checkProductAvaliability(){
    var  isEmpty = choosenProducts.innerHTML != ""
    if(isEmpty){
     setButtonStyle()
    }
}

function setButtonStyle(){
    calcBtn.style.display = "block";
    calcBtn.style.width = "120px"
    calcBtn.style.height = "50px"
    calcBtn.style.backgroundColor = "blue"
    calcBtn.style.color = "white"
}

function showResult(){
    calcBtn.onclick = function(){
        result.innerHTML = "Total Price: " + totalPrice + " $"
    }
}

showResult()


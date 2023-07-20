let counter = 0;
let cart = document.querySelector('.cart1')
let filledCart = document.querySelector('.cart2')
let orderCount = document.querySelector('.order-count')

function checkOrder(){
   if(counter > 0){
      cart.style.display = "none"
      filledCart.style.display = "block"
      orderCount.style.display = "block"
   } 
}

function addOrder() {
   if(counter < 99){
      counter++
   }
   orderCount.innerHTML = counter;
   checkOrder()
}




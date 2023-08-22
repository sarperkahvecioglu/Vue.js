const cartKey = 'cart';

if(!localStorage.getItem('cart')){
    localStorage.setItem('cart', JSON.stringify([]));
}

let cartJson = localStorage.getItem(cartKey);

let cartStore = JSON.parse(cartJson);

function saveCart(){
    localStorage.setItem(cartKey, JSON.stringify(cartStore));
}

export default{
    getAllCartItems(){
        return cartStore;
    },

    getSingleCartItem(index){
        return cartStore[index];
    },
    
    addItemToCart(product){
        cartStore.push(product);
        saveCart();
        return product;
    },

    removeItemFromCart(index){
        const deletedProduct = cartStore[index];
        cartStore.splice(index, 1);
        saveCart();
        return deletedProduct;
    }
}
const productsKey = 'products';

let productsJson = localStorage.getItem(productsKey);
let productsStore = JSON.parse(productsJson);

let cartJson = localStorage.getItem('cart-items');
let cartStore = JSON.parse(cartJson);


function saveCart(){
    localStorage.setItem('cart-items', JSON.stringify(cartStore));
}

function saveProduct(){
    localStorage.setItem(productsKey, JSON.stringify(productsStore));
}

export default{

    getAllProducts(){
        return productsStore;
    },
    getSingleProduct(index){
        return productsStore[index];
    },

    addItemToCartItems(product){
        cartStore.push(product);
        saveCart();

    },

    getAllCartItems(){
        return cartStore;
    },

    getSingleCartItem(index){
        return cartStore(index);
    },

    addCommentToProduct(index, comment){
        productsStore[index].comments.push(comment);
        saveProduct();
    }

    // addCommentToProduct(index, comment) {
    //     // Check if the product exists in the productsStore
    //     if (index >= 0 && index < productsStore.length) {
    //       // Check if the product has a "comments" property defined
    //       if (!productsStore[index].comments) {
    //         productsStore[index].comments = [];
    //       }
    //       // Push the comment to the "comments" property of the product
    //       productsStore[index].comments.push(comment);
    //       saveProduct();
    //     }
    //   },


}
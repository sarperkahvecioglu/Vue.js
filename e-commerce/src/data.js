const productsKey = 'products';

let productsJson = localStorage.getItem(productsKey);
let productsStore = JSON.parse(productsJson);

export default {
    getAllProducts(){
        return productsStore;
    },

    getSingleProduct(index){
        return productsStore[index];
    },

    getAllDiscountedProducts(){
        return productsStore.filter(product => product.isDiscounted === true);
    }
}
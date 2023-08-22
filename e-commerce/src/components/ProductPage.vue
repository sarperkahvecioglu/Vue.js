<template>
  <div class="product-details">
    <div class="product-info" v-if="activeProduct">
      <h2>{{ activeProduct.name }}</h2>
      <p :class="{'discounted': isDiscounted}">Price: {{ activeProduct.price }} $</p>
      <p v-if="isDiscounted" class="discounted-price">Price: {{ activeProduct.price/2 }} $</p>
      <p class="product-color">{{ activeProduct.color }}</p>
      <p v-if="isDiscounted">This product is 50% off</p>
      <button class="remove-button" v-if="carted" @click="removeFromCart(index)">Remove from cart</button>
      
      <button class="add-button" @click="addToCart">Add to cart</button>
    </div>
    
  </div>
</template>

<script>
export default {

  props: ["index"],
  inject: ["$products", "$cart"],

  data() {
    return {
      activeProduct: null,
      isDiscounted: false,
      carted: null,
      
    };
  },

  created() {
    this.activeProduct = this.$products.getSingleProduct(this.index);
    this.isDiscounted = this.activeProduct.isDiscounted;
    
    this.carted = (this.$cart.getAllCartItems().findIndex(item => item.name === this.activeProduct.name) !== -1);
    
    
    
  },

  methods: {
    addToCart(){
      
      this.$products.getSingleProduct(this.index).cart = true;
      this.$cart.addItemToCart(this.activeProduct);
      this.carted = true;
      
    },
    removeFromCart(index){
      const findIndex = this.$cart.getAllCartItems().findIndex(item => item === this.$cart.getSingleCartItem(index));
      this.$cart.removeItemFromCart(findIndex);
      
      this.cartedOrNot();
    },

    cartedOrNot(){
      if(this.$cart.getAllCartItems().findIndex(item => item.name === this.activeProduct.name) !== -1){
        this.carted = true
        
        }
      else{
        this.carted = false;
      }
    },
  },

  watch: {
      index(newIndex, oldIndex){
          this.activeProduct = this.$products.getSingleProduct(newIndex);
          this.isDiscounted = this.activeProduct.isDiscounted;
          console.log(oldIndex);
          
      },
      
  }
};
</script>


<style scoped>
.product-details {
  margin: 20px;
}

.product-info {
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fff;
}

.product-price {
  font-size: 18px;
  margin-bottom: 10px;
}

.discounted {
  text-decoration: line-through;
}

.discounted-price {
  color: #e74c3c;
}

.product-color {
  margin-bottom: 10px;
}

.discount-info {
  color: #e74c3c;
  font-style: italic;
}

.remove-button,
.add-button {
  padding: 5px 10px;
  margin-top: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.remove-button:hover,
.add-button:hover {
  background-color: #0056b3;
}
</style>
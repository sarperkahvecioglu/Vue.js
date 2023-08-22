<template>
    <div class="discounted-products">
        <p v-for="(product, index) in $products.getAllDiscountedProducts()" :key="index" class="product-discounted">
            <router-link :to="`/products/${index}`" class="product-link-discounted">
            <div class="product-details-discounted">
                    <p class="product-name-discounted">{{ product.name }}</p>
                    <p class="product-price-discounted">{{ product.price }} $</p>
                </div>
            </router-link>
        </p>
    </div>
</template>

<script>
export default {
    inject: ['$products'],
    props: ['index'],
    
}
</script>


<style>
.discounted-products {
  margin: 20px;
  padding: 20px;
  background-color: #f7f7f7;
  display: flex;
  flex-wrap: wrap;
}

.product-discounted{
    display: inline-block;
    width: 23%;
    margin-right: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3vh;
    background-color: #fff;
}

.product-link-discounted {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  color: brown;
}

.product-details-discounted {
  display: flex;
  flex-direction: column; /* Stack items up to down */
  align-items: center; /* Center content horizontally */
}

.product-name-discounted {
  font-weight: bold;
  margin-bottom: 5px; /* Add spacing between name and price */
}

.product-price-discounted {
  color: #e74c3c;
}

.product-link-discounted:hover {
  color: #007bff;
}
</style>
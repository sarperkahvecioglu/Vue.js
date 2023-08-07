<template>
  <div v-if="this.products" class="products-list">
    <ul class="product-grid">
      <product-each
        v-for="(product, index) in products"
        :key="index"
        :index="index"
        :product="product"
      ></product-each>
    </ul>
    
  </div>
</template>

<script>
import ProductEach from "./ProductEach";
export default {
  inject: ["$products"],
  components: {
    ProductEach,
  },
  data() {
    return {
      products: null,
    };
  },
  created() {
    this.products = this.$products.getAllProducts();
    
  },
};
</script>





<style scoped>
.products-list{
    display:flex;
    justify-content: center;
    margin-top: 20px;
}
.product-grid{
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    list-style: none;
}
</style>
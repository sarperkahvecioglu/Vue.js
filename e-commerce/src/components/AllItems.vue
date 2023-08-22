<template>
    <div class="">
        <ul>
            <each-product v-for="(product, index) in $products.getAllProducts()" :key="index" :product="product" :index="index"></each-product>
        </ul>
    </div>
    <router-view></router-view>
</template>

<script>
import EachProduct from './EachProduct';
export default {
    components: {
        EachProduct,
    },
    inject: ['$products'],
    
}
</script>
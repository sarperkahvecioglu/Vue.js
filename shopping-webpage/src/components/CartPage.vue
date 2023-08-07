<template>
    <ul>
        <li v-for="(product, index) in $products.getAllCartItems()" :key="index">
            {{product.name}}
        </li>
    </ul>
    
</template>

<script>
export default {
    inject: ['$products'],
    

}
</script>
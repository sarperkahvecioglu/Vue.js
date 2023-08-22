<template>
    <li class="product">
        <router-link :to="`/products/${index}`" class="product-link">
            <div class="product-details">
                <p class="product-name"> {{ product.name }} </p>
                <p class="product-price"> {{ product.price }} $ </p>
            </div>
        </router-link>
    </li>
</template>

<script>
export default {
    props: ['product', 'index'],
}
</script>


<style scoped>
.product{
    display: inline-block;
    width: 23%;
    margin-right: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 3vh;
    background-color: #fff;
}

.product-link{
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: brown;
}

.product-details {
    display: flex;
    flex-direction: column; /* Stack items up to down */
    align-items: center; /* Center content horizontally */
    padding: 10px;
}

.product-name {
    font-weight: bold;
    margin-bottom: 5px; /* Add spacing between name and price */
}

.product-price {
    color: #e74c3c;
}
</style>
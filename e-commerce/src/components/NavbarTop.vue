<template>
    <nav class="navbar-container">
        <ul class="navbar-ul">
            <li>
                <router-link to="/products" class="navbar nav-all-items">All Items</router-link>
            </li>
            <li>
                <router-link to="/discount-items" class="navbar nav-disc-items">Discount</router-link>
            </li>
            <li>
                <router-link to="/communication" class="navbar nav-communication">Communication</router-link>
            </li>
            <li>
                <router-link to="/cart" class="navbar nav-cart">Cart</router-link>
            </li>
        </ul>
    </nav>
    <div class="">
        
        
       
    </div>
</template>

<script>
export default {
    

    
}
</script>

<style scoped>
.navbar-container{
    display: flex;
    justify-content: center;
    background-color: burlywood;
    padding: 10px;
    
}

.navbar-ul{
    display: flex;
    justify-content: space-between;
    
    flex-direction: row;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 80%;
    
}

.navbar{
    color: brown;
    text-decoration: none;
    padding: 5px 10px;
    border-radius: 10px;

}

.navbar.router-link-exact-active {
    background-color: brown;
    color: white;
}

</style>
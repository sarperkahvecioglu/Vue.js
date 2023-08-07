<template>
  <div class="route-container">
    <router-link class="router-link-navbar" to="/my-website"> My Website </router-link>
    <router-link class="router-link-navbar" to="/products"> Products </router-link>
    <router-link class="router-link-navbar" to="/cart"> Cart </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.route-container{
    display: flex;
    justify-content: space-between;
    padding: 5px;
}

.router-link-navbar{
    text-decoration: none;
    color: brown;
    padding: 5px 10px;
    border: 1px solid;
    border-radius: 10px;
    background-color: beige;
}

.router-link-navbar:hover {
    background-color: black;
}

</style>

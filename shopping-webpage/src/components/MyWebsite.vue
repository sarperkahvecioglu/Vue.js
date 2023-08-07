<template>
  <div class="my-website">
    <h2>Welcome to our website.</h2>
    <router-link class="router-link-main" to="/products"
      >Start Shopping!</router-link
    >
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.my-website {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  justify-content: center;
}
.router-link-main {
  text-decoration: none;
  color: chocolate;
  margin-top: 20px;
}
</style>

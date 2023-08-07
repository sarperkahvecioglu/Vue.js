<template>
  <li>
    <router-link :to="`/products/${index}`" class="link-style">
      <div class="box-each">
        {{ product.name }}
      </div>
    </router-link>
  </li>
</template>

<script>
export default {
  props: ["product", "index"],
};
</script>

<style>
.box-each {
  width: 100px;
  height: 100px;
  color: black;
  background-color: #e9bdbd;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  
}

/* Optional: Add hover effect to the box */
.box-each:hover {
  background-color: #f0f0f0;
}

.link-style{
    text-decoration: none;
}
</style>


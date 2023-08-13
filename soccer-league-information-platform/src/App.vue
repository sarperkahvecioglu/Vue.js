<template>
  <div class="app">
    <navbar-top></navbar-top>
    <router-view></router-view>
  </div>
</template>

<script>
import NavbarTop from "./components/NavbarTop";
export default {
  components: {
    NavbarTop,
  },
};
</script>

<template>
  <navbar-top></navbar-top>
  <router-view></router-view>
</template>

<script>
import NavbarTop from './components/NavbarTop';
export default {
  components: {
    NavbarTop,
  }
  
}
</script>
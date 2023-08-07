<template>
  <navbar-new> </navbar-new>
  <router-view></router-view>
 
</template>

<script>
import NavbarNew from "./components/NavbarNew";

export default {
  name: "App",

  components: {
    NavbarNew,
 
  },

  methods: {
    
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>

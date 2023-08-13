<template>
  <div class="navbar">
    <router-link class="nav-link" to="/home" :class="{ 'active': isActive('/home')}"> Home </router-link>
    <router-link class="nav-link" to="/played-games" :class="{ 'active': isActive('/played-games')}"> Games Played </router-link>
    <router-link class="nav-link" to="/fixture" :class="{ 'active': isActive('/fixture')}"> Fixture </router-link>
    <router-link class="nav-link" to="/about-us" :class="{ 'active': isActive('/about-us')}"> About Us </router-link>
  </div>
</template>

<script>
export default {
    methods: {
        isActive(route){
            return this.$route.path === route;
        }
    }
};

</script>

<style scoped>

.navbar{
    width: 100%;
    height: 10vh;
    background-color: #333;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
}

.nav-link{
    text-decoration: none;
    color: lightgrey;
    
    
}

.active{
    color: white;
}

.nav-link:first-child{
    margin-left: 15%;
}

.nav-link:last-child{
    margin-right: 15%;
}



</style>

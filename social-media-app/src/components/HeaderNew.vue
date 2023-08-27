<template>
    <header class="header">
    <nav>
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/profile">Profile</router-link></li>
        <li><a @click="logout" href="#">Log Out</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
    name: "HeaderNew",
    data(){
        return{

        }
    },
    methods: {
        logout(){
            localStorage.clear()
            this.$router.push({name: "Login"});
        }
    }
}
</script>

<style scoped>

.header {
    background-color: #333;
    color: white;
    padding: 10px 0;
    text-align: center;
  }
  
  .nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .nav-links li {
    display: inline-block;
    margin: 0 10px; /* Add margin to create space between links */
  }
  
  .nav-links a {
    text-decoration: none;
    color: white;
    font-weight: bold;
  }

</style>
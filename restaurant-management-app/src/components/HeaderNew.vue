<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add-restaurant">Add restaurant</router-link>
        
        <a href="#" @click="logout">Logout</a>
    </div>
</template>

<script>
export default {
    name:"HeaderNew",
    methods: {
        logout(){
            this.$router.push({name: 'Login'})
            localStorage.clear();
        },
        goAdd(){
            this.$router.push({name: "AddRestaurant"});
        },
        goEdit(){
            this.$router.push({name: "EditRestaurant"});
        }
    }
}
</script>

<style scoped>

.nav{
    background-color: #333;
    overflow: hidden;
    

}

.nav a{
    float: left;
    color: #f2f2f2f2;
    padding: 16px 14px;
    text-align: center;
    font-size: 17px;
    text-decoration: none;
    margin-right: 5px;
}

.nav a:hover{
    background: #ddd;
    color: #333;
}

</style>
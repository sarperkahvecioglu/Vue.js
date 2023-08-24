<template>
    <img class="logo" src="../assets/images-2.png" alt="">
    <h1>Sign Up</h1>
    <div class="register">
        <input v-model="name" type="text" placeholder="Enter name">
        <input v-model="email" type="email" placeholder="Enter email">
        <input v-model="password" type="password" placeholder="Enter password">
        <button @click="signUp">Sign Up</button>
    </div>
    <router-link to="/login">Login</router-link>
</template>

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data(){
        return{
            name: "",
            email: "",
            password: ""
        }
    },
    methods:{
        async signUp(){
           let result = await axios.post("http://localhost:3000/users", {

               email: this.email,
               name: this.name,
               password: this.password
               
           });

           console.log(result);

           if(result.status === 201){
               
               localStorage.setItem("user-info", JSON.stringify(result.data));

               this.$router.push({name: "Home"})
           }


        }
    },

    mounted(){
        let user = localStorage.getItem('user-info');
        if(user){
            this.$router.push({name: "Home"})
        }
    }
}
</script>

<style  scoped>
.logo{
    width: 100px;
}

.register input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;

}

.register button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
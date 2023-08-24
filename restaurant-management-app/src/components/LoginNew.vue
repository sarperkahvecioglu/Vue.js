<template>
  <img class="logo" src="../assets/images-2.png" alt="" />
  <h1>Login</h1>
  <div class="login">
    <input v-model="email" type="email" placeholder="Enter email" />
    <input v-model="password" type="password" placeholder="Enter password" />
    <button @click="login">Login</button>
  </div>
  <router-link to="/sign-up">Sign Up</router-link>
</template>

<script>
import axios from "axios";

export default {
    name: "LoginNew",
    data(){
        return{
            email: "",
            password: ""
        }
    },
    methods: {
        async login(){
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )
            
            if(result.status === 200 && result.data.length > 0){

                localStorage.setItem('user-info', JSON.stringify(result.data[0]));
                this.$router.push({name: "Home"})
            }

            console.log(result);

        }
    },

    mounted(){
        if(localStorage.getItem("user-info")){
            this.$router.push({name: "Home"});
        }
    }
};
</script>

<style scoped>
.logo {
  width: 100px;
}

.login input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.login button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>

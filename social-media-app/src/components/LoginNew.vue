<template>
     <div class="login-container">
    <div class="login-form">
      <h2 class="login-heading">Login</h2>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="username" type="text" id="username" name="username" placeholder="Enter your username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" name="password" placeholder="Enter your password">
      </div>
      <button @click.prevent="login" class="login-button" type="submit">Login</button>
      <p>Don't have an account?
        <router-link to="/sign-up" class="form-button">Sign Up</router-link>
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
    name: "LoginNew",
    data(){
        return{
            username: '',
            password: ''
        }
    },

    methods: {
      async login(){
        let result = await axios.get(`http://localhost:3000/user?username=${this.username}&password=${this.password}`);


        if(result.status === 200 && result.data.length > 0){
          localStorage.setItem('user-info', JSON.stringify(result.data[0]));
          this.$router.push({name: "Home"})
        }else{
          window.alert("Wrong username or password");
          this.username = "";
          this.password = "";
        }
        console.log(result);

      }
    },

    mounted(){
      if(localStorage.getItem('user-info')){
        this.$router.push({name: "Home"});
      }
    }


};
</script>


<style scoped>

.login-container {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-form {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 300px;
  }


.login-heading {
    margin-top: 0;
    font-size: 24px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }

  .form-group input[type="text"],
  .form-group input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .login-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    cursor: pointer;
    width: 100%;
  }

  .login-button:hover {
    background-color: #0056b3;
  }

.form-button {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
    padding: 5px 10px;
    cursor: pointer;
    width: 100%;
  }
  
  .form-button:hover {
    background-color: #0056b3;
  }
</style>
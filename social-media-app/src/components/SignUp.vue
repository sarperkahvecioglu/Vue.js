<template>
    <div class="signup-container">
    <div class="signup-form">
      <h2 class="signup-heading">Sign Up</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="user.name" type="text" id="name" name="name" placeholder="Enter your name">
      </div>
      <div class="form-group">
        <label for="username">Username</label>
        <input v-model="user.username" type="text" id="username" name="username" placeholder="Choose a username">
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="user.password" type="password" id="password" name="password" placeholder="Choose a password">
      </div>
      <button @click="signUp" class="form-button" type="submit">Sign Up</button>
      <p>Already have an account? 
        <router-link to="/login" class="form-button">Login</router-link>
    </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
    name: "SignUp",
    data(){
        return{
            user: {
                name: '',
                username: '',
                password: ''
            },
        }
    },
    methods: {
        infoNotNull(){
            return this.user.name && this.user.username && this.user.password
        },

        async signUp(){
            if(this.infoNotNull){
                let result = await axios.post(`http://localhost:3000/user`, this.user)

                window.alert("You've succesfully logged in!")
                
                if(result.status === 201){
                    this.$router.push({name: "Login"})
                }

            }else{
                window.alert("Empty information");
            }
        }
    },
    mounted(){
      if(localStorage.getItem('user-info')){
        this.$router.push({name: "Home"});
      }
    }

}
</script>

<style scoped>

.signup-container {
    font-family: Arial, sans-serif;
    background-color: #f2f2f2;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .signup-form {
    background-color: white;
    border-radius: 10px;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
    padding: 20px;
    width: 300px;
  }
  
  .signup-heading {
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
<template>
  <header-new></header-new>
  <h1>Welcome to Home Page</h1>
  <h1 v-if="name !== ''">{{ name }}</h1>

  <table border="1px">
    <tr>
      <td>Id</td>
      <td>Name</td>
      <td>Contact</td>
      <td>Address</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.contact }}</td>
      <td>{{ item.address }}</td>
      <td>
        <router-link :to="`/edit-restaurant/${item.id}`">Edit</router-link>
      </td>
      <td>
        <button @click="deleteRestaurant(item.id)">Delete</button>
      </td>
    </tr>
  </table>
</template>

<script>
import HeaderNew from "./HeaderNew.vue";
import axios from "axios";
export default {
  name: "HomeNew",
  data() {
    return {
      name: "",
      restaurant : [],
    };
  },
  components: {
    HeaderNew,
  },
  async mounted() {
    this.loadData();
  },

    methods: {
        async deleteRestaurant(id){
            let result = await axios.delete(`http://localhost:3000/restaurant/${id}`);

            console.log(result.status);
            if(result.status === 200){
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem("user-info");

            if (!user) {
            this.$router.push({ name: "Login" });
            return;
            }
            
            this.name = JSON.parse(user).name;

            let result = await axios.get("http://localhost:3000/restaurant")
            this.restaurant = result.data;
        }
    }

};
</script>

<style scoped>
td {
  width: 160px;
  height: 40px;
}
</style>

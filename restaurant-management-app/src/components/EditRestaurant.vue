<template>
  <HeaderNew />
  <div class="">Edit</div>
  <form class="edit">
    <input
      v-model="restaurant.name"
      type="text"
      name="name"
      placeholder="Enter name"
    />
    <input
      v-model="restaurant.address"
      type="text"
      name="address"
      placeholder="Enter address"
    />
    <input
      v-model="restaurant.contact"
      type="text"
      name="contact"
      placeholder="Enter contact"
    />
    <button @click.prevent="editRestaurant">Edit Restaurant</button>
  </form>
</template>

<script>
import axios from "axios";
import HeaderNew from "./HeaderNew";
export default {
  name: "EditRestaurant",
  components: {
    HeaderNew,
  },
  props: ["id"],
  data() {
    return {
      restaurant: {
        name: "",
        address: "",
        contact: "",
      },
    };
  },

  async mounted() {
    let user = localStorage.getItem("user-info");

    if (!user) {
      this.$router.push({ name: "Login" });
      return;
    }

    let result = await axios.get(`http://localhost:3000/restaurant/${this.id}`);

    this.restaurant = result.data;
  },

  methods: {
    async editRestaurant() {
      // console.log(this.restaurant);
      if (this.checkNotNull()) {
        let result = await axios.put(
          `http://localhost:3000/restaurant/${this.id}`,
          {
            name: this.restaurant.name,
            address: this.restaurant.address,
            contact: this.restaurant.contact,
          }
        );

        if (result.status === 200) {
          this.$router.push({ name: "Home" });
        }
      } else {
        console.log("null value");
      }
    },

    checkNotNull() {
      return (
        this.restaurant.name &&
        this.restaurant.address &&
        this.restaurant.contact
      );
    },
  },
};
</script>

<style scoped>
.edit input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 1px solid skyblue;
}

.edit button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background: skyblue;
  color: white;
  cursor: pointer;
}
</style>

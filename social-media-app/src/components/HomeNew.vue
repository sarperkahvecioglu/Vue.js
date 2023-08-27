<template>
<HeaderNew />
  <div class="home-container">
    
    <div class="home-section">
      <h1 class="home-title">This is Home Page</h1>
      <h2 class="home-subtitle">Here are the current posts</h2>
      <ul class="post-list">
        <li v-for="(post, index) in posts" :key="index" class="post-item">
          <div class="post-content">
            <span class="post-user">{{ post.user_id }}</span> -- {{ post.text }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import HeaderNew from "./HeaderNew";
export default {
  name: "HomeNew",
  components: {
    HeaderNew,
  },

  data() {
    return {
      posts: [],
    };
  },

  async mounted() {
    if (!localStorage.getItem("user-info")) {
      this.$router.push({ name: "Login" });
    } else {
      const allPosts = await axios.get("http://localhost:3000/post");

      this.posts = allPosts.data;
    }
  },
};
</script>


<style scoped>

.home-container {
  font-family: Arial, sans-serif;
  background-color: #f2f2f2;
  margin: 0;
  padding: 20px;
}

.home-section {
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  padding: 20px;
}

.home-title {
  font-size: 24px;
  text-align: center;
  margin-bottom: 10px;
}

.home-subtitle {
  font-size: 18px;
  text-align: center;
  margin-bottom: 20px;
}

.post-list {
  list-style: none;
  padding: 0;
}

.post-item {
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
}
.post-content {
  flex: 1;
}
.post-user {
  font-weight: bold;
  margin-right: 10px;
}


</style>
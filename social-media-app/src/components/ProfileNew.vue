<template>
  <div>
    <HeaderNew />
    <div class="profile-section">
      <h1>This is the profile page</h1>
      <h2>Profile {{ user.name }}</h2>
      <button @click="newPost = !newPost">New Post</button>
      <form action="" v-if="newPost">
          <input v-model="newPostText" type="text" placeholder="Enter post">
          <button @click="submitNewPost">Submit Post</button>
      </form>
    </div>
    <div class="post-list">
      <ul>
        <li v-for="(post, index) in posts" :key="index" class="post-item">
          <div class="post-header">
            <h3>{{ post.text }}</h3>
          </div>
          <div class="post-buttons">
            <button @click.prevent="editPost(post.id)" class="edit-button">Edit Post</button>
            <button @click="deletePost(post.id)" class="delete-button">
              Delete Post
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import HeaderNew from "./HeaderNew";
import axios from "axios";
export default {
  components: {
    HeaderNew,
  },
  data() {
    return {
      user: {},
      posts: [],
      newPost: false,
      newPostText: "",
    };
  },

  async mounted() {
    this.loadData();
  },

  methods: {
    async deletePost(index) {
      let result = await axios.delete(`http://localhost:3000/post/${index}`);

      if (result.status === 200) {
        this.loadData();
      }
    },

    async loadData() {
      if (localStorage.getItem("user-info")) {
        this.user = JSON.parse(localStorage.getItem("user-info"));
        const allPosts = await axios.get("http://localhost:3000/post");
        this.posts = allPosts.data.filter(
          (post) => post.user_id === this.user.id
        );
      } else {
        this.$router.push({ name: "Login" });
      }
    },
    async submitNewPost(){
        if(this.newPostText){
            let result = await axios.post("http://localhost:3000/post", {
                user_id: this.user.id,
                text: this.newPostText,
            })

            if(result.status === 201){
                this.loadData();
            }
            this.newPostText = '';
            this.newPost = !this.newPost;
        }else{
            window.alert("Missing input!")
        }
    },

    editPost(id){
        this.$router.push(`/edit-post/${id}`);
    
    }
  },
};
</script>

<style scoped>
.profile-section {
  text-align: center;
  padding: 20px;
}

.post-list {
  margin: 20px;
}

.post-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
}

.post-header {
  flex: 1;
  display: flex;
  align-items: center;
  margin-right: 20px; /* Add margin to separate from buttons */
}

.post-buttons {
  display: flex;
  align-items: center;
  gap: 10px;
}

.edit-button {
  background-color: #007bff;
  color: white;
}

.delete-button {
  background-color: #dc3545;
  color: white;
}
</style>

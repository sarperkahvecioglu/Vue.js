<template>
    <HeaderNew />
    <div class="post-info">
        <h1>Post Owner: {{ postOwner }}</h1>
        <h2>Post ID: {{ id }}</h2>
    </div>
    <div class="post-controls">
        <input v-model="change" type="text" placeholder="Enter text">
        <button class="apply-button" @click.prevent="apply">Apply</button>
        <button class="cancel-button" @click.prevent="cancel">Cancel</button>
    </div>
</template>

<script>
import HeaderNew from "./HeaderNew";
import axios from "axios";
export default {
    components: {
        HeaderNew,
    },
    props: ["id"],
    data(){
        return{
            change: "",
            activePost: {},
            postOwner: "",
        }
    },
    async mounted(){
        let result = await axios.get(`http://localhost:3000/post?id=${this.id}`);

        this.activePost = result.data[0];
        

        const owner = localStorage.getItem("user-info");
        
        const stored = JSON.parse(owner)
        this.postOwner = stored.name.charAt(0).toUpperCase() + stored.name.slice(1);

        this.change = this.activePost.text;

     
        
    },

   
    methods: {
        cancel(){
            this.$router.push({name: "Profile"});
        },
        async apply(){
            if(this.change){
                this.activePost.text = this.change;
                
                let post = await axios.put(`http://localhost:3000/post/${this.id}`, this.activePost)

                if(post.status === 200){
                    this.$router.push({name: "Profile"});
                }

                
            }else{
                window.alert("Change is not valid!")
            }
        }
    }
}
</script>

<style scoped>
.post-info {
    text-align: center;
    margin-bottom: 20px;
}

.post-controls {
    display: flex;
    justify-content: center;
    align-items: center;
}

.apply-button {
    margin-right: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
}

.cancel-button {
    background-color: #e74c3c;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
}
</style>
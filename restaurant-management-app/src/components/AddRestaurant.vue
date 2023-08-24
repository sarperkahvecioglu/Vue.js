<template>
    <HeaderNew />
    <div class="">Add</div>
    <form class="add">
        <input v-model="restaurant.name" type="text" name="name" placeholder="Enter name" />
        <input v-model="restaurant.address" type="text" name="address" placeholder="Enter address" />
        <input v-model="restaurant.contact" type="text" name="contact" placeholder="Enter contact" />
        <button @click.prevent="addRestaurant">Add Restaurant</button>
    </form>
</template>


<script>
import axios from 'axios';
import HeaderNew from "./HeaderNew";
export default {
    name: "AddRestaurant",
    components: {
        HeaderNew,
    },
    data(){
        return{
            restaurant: {
                name: '',
                address: '',
                contact: ''

            }
        }
    },
    methods: {
        async addRestaurant(){
            
            if(this.checkNotNull()){
                let result = await axios.post( "http://localhost:3000/restaurant",{
                    name: this.restaurant.name,
                    address: this.restaurant.address,
                    contact: this.restaurant.contact,
                });

                
                if(result.status === 201){
                    this.$router.push({name: "Home"});
                }
            }else{
                console.log("null value")
            }
        },

        checkNotNull(){
            return this.restaurant.name && this.restaurant.address && this.restaurant.contact;
        }
    }
}
</script>

<style scoped>
.add input{
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.add button{
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: white;
    cursor: pointer;
}
</style>
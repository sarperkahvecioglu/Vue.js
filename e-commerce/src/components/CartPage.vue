<template>
  <div class="cart-page">
    <div class="cart-items-container">
      
      <ul class="cart-items-list">
        <li v-for="(item, index) in items" :key="index" class="cart-item">
          <router-link
          
            
            :to="`/products/${index}`"
            class="cart-link"
          >
            <div class="cart-item-details">
              <p class="cart-item-name">{{ item.name }}</p>
              <p class="cart-item-color">{{ item.color }}</p>
              <p class="cart-item-price">{{ item.price }} $</p>
            </div>
           
          </router-link>
          <button class="remove-button" @click.prevent="deleteItem(index)">X</button>
        </li>
      </ul>
    </div>

    <p class="total-revenue">Total Revenue : {{ totalRevenue }} $</p>
    <router-link class="continue-shopping" to="/products"> Continue Shopping </router-link>
  </div>
</template>

<script>
export default {
  inject: ["$cart", "$products"],

  data() {
    return {
      items: null,
      totalRevenue: null,
      empty: null,
    };
  },
  created() {
    this.getCurrentItemsInCart();
    this.calculateTotalRevenue();
    
  },

  methods: {
    deleteItem(index) {
      this.items[index].cart = false;
      this.$cart.removeItemFromCart(index);
      this.calculateTotalRevenue();
    },

    getCurrentItemsInCart() {
      this.items = this.$cart.getAllCartItems();
    },

    calculateTotalRevenue() {
      let sum = 0;

      for (let item of this.items) {
        sum += item.price;
      }

      this.totalRevenue = sum;
    },
  },
};
</script>

<style scoped>
.cart-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.cart-items-container {
  margin-top: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 80%;
}

.cart-items-list {
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
}

.cart-link {
  text-decoration: none;
  color: #333;
}

.cart-item-details {
  display: flex;
  flex-direction: column;
}

.cart-item-name {
  font-weight: bold;
}

.remove-button {
  background-color: #e74c3c;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;
}

.total-revenue {
  font-size: 18px;
  margin-top: 20px;
  font-weight: bold;
}

.continue-shopping {
  margin-top: 10px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.continue-shopping:hover {
  text-decoration: underline;
}
</style>

<template>
  <div class="product-info">
    <h2>{{ activeProduct.name }}</h2>

    <button v-if="activeProduct" class="add-cart-button" @click.prevent="addToCart">Add to cart</button>
  </div>

  <p>{{activeProduct}}</p>

  <div class="comment-section">
    <button @click.prevent="showCommentBox">Add comment</button>

    <form v-if="showComment">
      <input type="text" placeholder="your comment" v-model="comment" />

      <button :disabled="comment === ''" @click.prevent="sendComment">
        Send
      </button>
    </form>

    <div
      v-if="activeProduct.comments && activeProduct.comments.length > 0"
    ></div>

    <h3></h3>
    <ul>
      <li v-for="(comment, i) in activeProduct.comments" :key="i">
        {{ comment }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["index"],
  inject: ["$products"],
  data() {
    return {
      activeProduct: null,
      showComment: false,

      comment: "",
    };
  },

  created() {
    this.activeProduct = this.$products.getSingleProduct(this.index);
  },

  watch: {

    
    index(newIndex, oldIndex) {
      console.log(oldIndex);
      this.activeProduct = this.$products.getSingleProduct(newIndex);
    },
  },

  methods: {
    addToCart() {
      this.$products.addItemToCartItems(this.activeProduct);
      
      this.navigateProducts();
      
    },
    navigateProducts() {
      this.$router.push("/products");
    },
    showCommentBox() {
      this.comment = "";
      this.showComment = !this.showComment;
    },
    sendComment() {
      this.$products.addCommentToProduct(this.index, this.comment);

      this.comment = "";
      this.showCommentBox();
    },
  },
};
</script>

<style scoped>
.product-info {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.comment-section{
    position: absolute;
    left: 20px;
    bottom: 20px;
}

.add-cart-button{
    border: 1px solid;
    background-color: bisque;
    border-color: cornsilk;
    width: 70px;
    height: 40px;
    border-radius: 20px;
    color: teal;
}

.add-cart-button:hover{
    cursor: pointer;
}
</style>

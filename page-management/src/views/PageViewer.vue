<template>
  <div v-if="page" id="content" class="container">
    <h1 class="emphasize">{{page.pageTitle}}</h1>
    <p>{{page.content}}</p>
    
  </div>
</template>

<script>
export default {
  name: "PageViewer",
  props:['index'], //this index is coming from the routes.js file's /:index? part. So when index changes, the index value coming from also changes.
  inject:['$pages'],
  created() { 
    this.page = this.$pages.getSinglePage(this.index);
    
    // eslint-disable-next-line no-unused-vars
    // this.$watch(() => this.$route.params, (newParams, prevParams) => {
    //   this.page = this.$pages.getSinglePage(newParams.index)
    // } )

  },
  data() {
    return {
      page: null,
    };
  },

  //We can also initialize watch part like this.
  // watch: {
  //   // eslint-disable-next-line no-unused-vars
  //   '$route.params': function(newParams, prevParams) {
  //     this.page = this.$pages.getSinglePage(newParams.index);
  //   }
  // },
  watch: {
    // eslint-disable-next-line no-unused-vars
    index(newIndex, oldIndex){
      this.page = this.$pages.getSinglePage(newIndex);
    }
  }
  
};
</script>

<style scoped>
.emphasize {
  color: blue;
}
</style>>


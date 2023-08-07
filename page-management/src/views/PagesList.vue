<template>
  <h4>Pages</h4>
  <div class="text-end">
    <router-link to="/pages/create" class="btn btn-primary btn-sm">
      New Page
    </router-link>
  </div>
  <table class="table table-hover">
    <thead>
      <tr>
        <th>Title</th>
        <th>Link Text</th>
        <th>Is Published</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(page, index) in $pages.getAllPages()"
        :key="index"
        @click="goToPage(index)"
      >
        {{
          page.pageTitle
        }}
        {{
          page.link.text
        }}
        {{
          page.published ? "yes" : "no"
        }}
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, inject } from "vue"; // Composition API
import { useRouter } from "vue-router";

// eslint-disable-next-line no-unused-vars
let counter = ref(0); // 1

// eslint-disable-next-line no-unused-vars
const $pages = inject("$pages");
const router = useRouter();

// eslint-disable-next-line no-unused-vars
function increaseCounter() {
  counter.value++;
}

function goToPage(index) {
  router.push({ path: `pages/${index}/edit` });
}
</script>

<style scoped>
.table.table-hover tr:hover {
  cursor: pointer;
}
</style>

<template>
  <nav
    :class="[
      `navbar-${this.theme}`,
      `bg-${this.theme}`,
      'navbar',
      'navbar-expand-lg',
    ]"
  >
    <div class="container-fluid">
      <a href="#" class="navbar-brand">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link
          v-for="(page, index) in publishedPages"
          :key="index"
          :index="index"
          class="nav-item"
          :page="page"
          
        >
        </navbar-link>
        <li>
          <router-link
            to="/pages"
            aria-current="page"
            class="nav-link"
            
          >
            Pages
        </router-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme">
          Toggle
        </button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";
export default {
  name: "NavbarNew",
  inject:['$pages', '$bus'],
  data() {
    return {
      theme: "light",
      pages: [],
    };
  },
  computed: {
    publishedPages() {
      return this.pages.filter((p) => p.published);
    },
  },
  components: {
    NavbarLink,
  },

  
  created() {
    this.getThemeSetting();
    this.pages = this.$pages.getAllPages()

    this.$bus.$on('page-updated', () => {
      this.pages = [...this.$pages.getAllPages()];
    })
    this.$bus.$on('page-created', () => {
      this.pages = [...this.$pages.getAllPages()];
    })
    this.$bus.$on('page-deleted', () => {
      this.pages = [...this.$pages.getAllPages()];
    })

  },
  methods: {
    changeTheme() {
      this.theme = this.theme === "dark" ? "light" : "dark";
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");
      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
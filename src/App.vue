<template>
  <div id="app">
    <div id="nav">
      <span class="spacer">
        <router-link to="/">Home</router-link>
      </span>
      <span class="spacer">
        <router-link to="/contact">Contact</router-link>
      </span>
      <span class="spacer">
        <router-link to="/admin">Admin</router-link>
      </span>
      <span class="float-right">
        <router-link to="/cart">
          <i class="fas fa-shopping-cart"></i>
          Panier ({{ this.nbArticlesInCart() }})
        </router-link>
      </span>
    </div>
    <div class="container-fluid">
      <div class="body-app">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  created() {
    if (!this.$store.state.cart.products) {
      this.getArticlesInCart();
    }
  },
  methods: {
    ...mapActions({
      getArticlesInCart: "getArticlesInCart"
    }),
    nbArticlesInCart() {
      if (!this.$store.state.cart) return 0;
      const nbArticles = this.$store.state.cart.products.reduce((acc, curr) => {
        return acc + curr.quantity;
      }, 0);
      return nbArticles;
    }
  }
};
</script>

<style>
h1 {
  color: white;
  text-shadow: 0 0 10px black;
}
h3 {
  color: white;
  text-shadow: 0 0 10px black;
}
#app {
  background-image: url("https://i.goopics.net/GePw7.jpg");
}
#nav {
  padding: 30px;
  height: 15vh;
  background-color: #23272b;
  color: white;
}

#nav a {
  font-weight: bold;
  color: white;
}

#nav a.router-link-exact-active {
  color: #4fc08d;
}

.spacer {
  padding: 10px;
}

.body-app {
  padding: 1rem;
}
</style>

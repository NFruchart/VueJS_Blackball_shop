<template>
  <div class="d-flex flex-wrap" v-if="products">
    <div
      class="product-single d-flex flex-column justify-content-between"
      v-for="product in products"
      :key="product.id"
    >
      <div>
        <div class="title-color d-flex flex-column justify-content-center">
          {{ product.marque }} {{ product.modele }}
        </div>
      </div>

      <div>
        <img alt="cue image" :src="product.image" class="product-image" />
        <div class="product-price">
          {{ parseInt(product.prix).toFixed(2) }} €
        </div>
      </div>
      <button @click="addToCart(product)" class="btn btn-add btn-dark">
        Ajouter au panier
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  created() {
    this.getProducts();
  },
  computed: {
    ...mapGetters({
      products: "getStateProducts",
      cart: "getCart"
    })
  },
  methods: {
    ...mapActions({
      updateCart: "updateCart",
      getProducts: "getProducts"
    }),
    addToCart(product) {
      this.updateCart(product);
    }
  }
};
</script>

<style scoped>
.title-color {
  padding: 0.5rem;
  height: 5rem;
  background-color: #23272b;
  color: white;
}
.product-single {
  margin: auto;
  margin-top: 1.5rem;
  text-align: center;
  width: 23%;
  height: 20rem;
  border: 2px solid #23272b;
  background-color: white;
}
.product-image {
  width: 100%;
}
.product-price {
  padding-left: 5px;
}
.btn-add {
  margin: 0.5rem;
}
</style>

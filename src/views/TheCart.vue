<template>
  <div class="cart-body justify-content-center">
    <div class="title">
      <h1>Panier</h1>
    </div>
    <div v-if="cart">
      <div class="table-list">
        <table class="table table-striped">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="img-block">Image</th>
              <th scope="col">Marque</th>
              <th scope="col">Modèle</th>
              <th scope="col">Quantité</th>
              <th scope="col">Prix unitaire</th>
              <th scope="col">Ajouter / Supprimer</th>
              <th scope="col">Prix total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="product in cart.products" :key="product.id">
              <td class="align-middle img-block">
                <img
                  alt="cue image"
                  :src="product.image"
                  class="product-list-image"
                />
              </td>
              <td class="align-middle">{{ product.marque }}</td>
              <td class="align-middle">{{ product.modele }}</td>
              <td class="align-middle">{{ product.quantity }}</td>
              <td class="align-middle">
                {{ parseInt(product.prix).toFixed(2) }} €
              </td>
              <td class="align-middle">
                <button
                  type="button"
                  @click="incrementQuantity(product)"
                  class="btn btn-secondary bouton"
                >
                  +
                </button>
                <button
                  type="button"
                  @click="decrementQuantity(product)"
                  class="btn btn-secondary bouton"
                >
                  -
                </button>
                <button
                  type="button"
                  @click="removeProduct(product)"
                  class="btn btn-danger bouton"
                >
                  <i class="fas fa-trash"></i>
                </button>
              </td>
              <td class="align-middle">
                {{ (product.quantity * parseInt(product.prix)).toFixed(2) }} €
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    incrementQuantity(product) {
      this.$store.dispatch("updateCart", product);
    },
    decrementQuantity(product) {
      this.$store.dispatch("removeOneToCart", product);
    },
    removeProduct(product) {
      this.$store.dispatch("removeProductToCart", product);
    }
  },
  computed: {
    cart() {
      return this.$store.getters.getCart;
    }
  }
};
</script>

<style scoped>
.cart-body {
  height: 83vh;
}
.table-list {
  background-color: white;
}

.img-block {
  width: 15%
}
.product-list-image {
  max-width: 100%;
}
.bouton {
  margin: 0.5rem;
  width: 2.5rem;
}
</style>

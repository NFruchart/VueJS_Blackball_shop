<template>
  <div class="table-list">
    <table class="table table-striped table-bordered">
      <thead class="thead-dark">
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Marque</th>
          <th scope="col">Modèle</th>
          <th scope="col">Type</th>
          <th scope="col">Longueur</th>
          <th scope="col">Jonction</th>
          <th scope="col">Prix</th>
          <th scope="col">Image</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index + product.id">
          <th class="align-middle" scope="row">{{ product.id }}</th>
          <td class="align-middle">{{ product.marque }}</td>
          <td class="align-middle">{{ product.modele }}</td>
          <td class="align-middle">
            <div>Fût : {{ product.type.fut }}</div>
            <div>Flèche : {{ product.type.fleche }}</div>
          </td>
          <td class="align-middle">{{ product.longueur }}</td>
          <td class="align-middle">{{ product.jonction }}</td>
          <td class="align-middle">{{ parseInt(product.prix).toFixed(2) }} €</td>
          <td class="align-middle">
            <img alt="cue image" :src="product.image" class="product-list-image" />
          </td>
          <td class="align-middle">
            <button type="button" class="btn btn-warning bouton">Modifier</button>
          </td>
          <td class="align-middle">
            <button
              @click="deleteProduct(product)"
              type="button"
              class="btn btn-danger bouton">Supprimer</button>            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("getProducts");
  },
  methods: {
    deleteProduct(product) {
      this.$store.dispatch("deleteProduct", product);
    }
  },
  computed: {
    products() {
      return this.$store.state.products;
    }
  }
};
</script>

<style scoped>
.table-list {
  margin-top: 1.5rem;
  text-align: center;
  background-color: white;
}
.product-list-image {
  width: 100%;
}
.bouton {
  width: 6rem;
}
</style>

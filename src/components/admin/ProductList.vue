<template>
  <div>
    <div class="admin-product-body">
      <router-link :to="'/admin/product-add'"
        ><button @click="createProduct()" type="button" class="btn btn-primary">
          Ajouter un nouveau produit
        </button></router-link
      >
    </div>
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
          <tr
            v-for="(product, index) in products"
            :key="index + product.mongoId"
          >
            <th class="align-middle" scope="row">{{ product.id }}</th>
            <td class="align-middle">{{ product.brand }}</td>
            <td class="align-middle">{{ product.model }}</td>
            <td class="align-middle">
              <div>Fût : {{ product.type.butt }}</div>
              <div>Flèche : {{ product.type.shaft }}</div>
            </td>
            <td class="align-middle">{{ product.length }} cm</td>
            <td class="align-middle">{{ product.joint }}</td>
            <td class="align-middle">
              {{ parseInt(product.price).toFixed(2) }} €
            </td>
            <td class="align-middle">
              <img
                alt="cue image"
                :src="product.picture"
                class="product-list-image"
              />
            </td>
            <td class="align-middle">
              <router-link :to="'/admin/product-update/' + product.mongoId"
                ><button type="button" class="btn btn-warning bouton">
                  Modifier
                </button></router-link
              >
            </td>
            <td class="align-middle">
              <button
                @click="deleteProduct(product)"
                type="button"
                class="btn btn-danger bouton"
              >
                Supprimer
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal
        v-show="isModalVisible"
        @close="closeModal"
        :message="modalMessage"
      />
    </div>
  </div>
</template>

<script>
import Modal from "../../views/Modal";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "ProductList",
  components: {
    Modal
  },
  created() {
    this.getProducts()
  },

  data() {
    return {
      isModalVisible: false,
      modalMessage: ""
    };
  },
  methods: {
    ...mapActions({
      updateCart: "updateCart",
      getProducts: "getProducts",
      deleteCue: "deleteProduct"
    }),
    createProduct() {},
    deleteProduct(product) {
      this.deleteCue(product)
      this.isModalVisible = true;
      this.modalMessage = "Le produit a bien été supprimé";
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      // location.reload(true);
    }
  },
  computed: {
    ...mapGetters({
      products: "getStateProducts",
      cart: "getCart"
    })
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

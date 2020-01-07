<template>
  <div>
    <div class="formTitle">
      <h3>{{ formTitle }}</h3>
    </div>
    <form @submit.prevent="submit">
      <div class="d-flex justify-content-between">
        <div class="d-flex flex-column col-6">
          <div class="form-group">
            <label for="id">ID</label>
            <input
              type="text"
              class="form-control"
              id="id"
              placeholder="Entrer l'ID"
              v-model="cue.id"
            />
          </div>
          <div class="form-group">
            <label for="marque">Marque</label>
            <input
              type="text"
              class="form-control"
              id="Marque"
              placeholder="Marque"
              v-model="cue.brand"
            />
          </div>
          <div class="form-group">
            <label for="modele">Modèle</label>
            <input
              type="text"
              class="form-control"
              id="modele"
              placeholder="Modèle"
              v-model="cue.model"
            />
          </div>
          <div class="form-group">
            <label for="fut">Type de fût</label>
            <input
              type="text"
              class="form-control"
              id="fut"
              placeholder="Type de fût"
              v-model="cue.type.butt"
            />
          </div>
          <div class="form-group">
            <label for="fleche">Type de flèche</label>
            <input
              type="text"
              class="form-control"
              id="fleche"
              placeholder="Type de flèche"
              v-model="cue.type.shaft"
            />
          </div>
        </div>
        <div class="d-flex flex-column col-6">
          <div class="form-group">
            <label for="longueur">Longueur</label>
            <input
              type="text"
              class="form-control"
              id="longueur"
              placeholder="Longueur"
              v-model="cue.length"
            />
          </div>
          <div class="form-group">
            <label for="jonction">Type de jonction</label>
            <input
              type="text"
              class="form-control"
              id="jonction"
              placeholder="Type de jonction"
              v-model="cue.joint"
            />
          </div>
          <div class="form-group">
            <label for="prix">Prix</label>
            <input
              type="text"
              class="form-control"
              id="prix"
              placeholder="Prix"
              v-model="cue.price"
            />
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input
              type="text"
              class="form-control"
              id="image"
              placeholder="Image"
              v-model="cue.picture"
            />
          </div>
          <div class="btn-validation">
            <button type="submit" class="btn btn-success" @click="showModal">
              Valider
            </button>
          </div>
        </div>
      </div>
    </form>

    <Modal
      v-show="isModalVisible"
      @close="closeModal"
      :message="modalMessage"
    />
  </div>
</template>

<script>
import productService from "../../services/productService";
import Modal from "../../views/Modal";
export default {
  name: "ProductForm",
  components: {
    Modal
  },
  async created() {
    if (this.$route.name === "admin-product-update") {
      const cues = await productService.getProducts();
      this.cue = cues.find(cue => cue.mongoId === this.$route.params.id);
      this.formTitle = "Modifier un produit";
    } else if (this.$route.name === "admin-product-add") {
      this.formTitle = "Ajouter un nouveau produit";
    }
  },
  data() {
    return {
      cue: {
        id: "",
        brand: "",
        model: "",
        type: {
          butt: "",
          shaft: ""
        },
        length: "",
        joint: "",
        price: "",
        picture: ""
      },
      isModalVisible: false,
      modalMessage: "",
      formTitle: ""
    };
  },
  methods: {
    submit() {
      if (this.$route.name === "admin-product-add") {
        this.$store.dispatch("createProduct", this.cue);
        this.modalMessage = "Le produit a bien été ajouté";
      } else if (this.$route.name === "admin-product-update") {
        this.$store.dispatch("updateProduct", this.cue);
        this.modalMessage = "Le produit a bien été modifié";
      }
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      this.$router.push({ name: "admin" });
    }
  }
};
</script>

<style scoped>
.formTitle {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
label {
  color: white;
  font-weight: bold;
}
.btn-validation {
  text-align: center;
  margin: auto;
}
</style>

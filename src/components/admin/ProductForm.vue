<template>
  <div>
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
              v-model.lazy="cue.id"
            />
          </div>
          <div class="form-group">
            <label for="marque">Marque</label>
            <input
              type="text"
              class="form-control"
              id="Marque"
              placeholder="Marque"
              v-model.lazy="cue.brand"              
            />
          </div>
          <div class="form-group">
            <label for="modele">Modèle</label>
            <input
              type="text"
              class="form-control"
              id="modele"
              placeholder="Modèle"
              v-model.lazy="cue.model"
            />
          </div>
          <div class="form-group">
            <label for="fut">Type de fût</label>
            <input
              type="text"
              class="form-control"
              id="fut"
              placeholder="Type de fût"
              v-model.lazy="cue.type.butt"
            />
          </div>
          <div class="form-group">
            <label for="fleche">Type de flèche</label>
            <input
              type="text"
              class="form-control"
              id="fleche"
              placeholder="Type de flèche"
              v-model.lazy="cue.type.shaft"
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
              v-model.lazy="cue.length"
            />
          </div>
          <div class="form-group">
            <label for="jonction">Type de jonction</label>
            <input
              type="text"
              class="form-control"
              id="jonction"
              placeholder="Type de jonction"
              v-model.lazy="cue.joint"
            />
          </div>
          <div class="form-group">
            <label for="prix">Prix</label>
            <input
              type="text"
              class="form-control"
              id="prix"
              placeholder="Prix"
              v-model.lazy="cue.price"
            />
          </div>
          <div class="form-group">
            <label for="image">Image</label>
            <input
              type="text"
              class="form-control"
              id="image"
              placeholder="Image"
              v-model.lazy="cue.picture"
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
import Modal from "../../views/Modal";
export default {
  name: "ProductForm",
  components: {
    Modal
  },
  created() {
    if (this.$route.name === "admin-product-update") {
      this.cue = this.$store.state.products[0];
      console.log(this.cue);
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
      modalMessage: ""
    };
  },
  methods: {
    submit() {
      if (this.$route.name === "admin-product-add") {
        this.$store.dispatch("createProduct", this.cue);
        this.modalMessage = "Le produit a bien été ajouté";
        console.log("créer");
      } else if (this.$route.name === "admin-product-update") {
        this.$store.dispatch("updateProduct", this.cue);
        this.modalMessage = "Le produit a bien été modifié";
        console.log("modifier");
        console.log("productForm submit this.cue.id" + this.cue.id);
      }
    },
    handleChange($event) {
      console.log($event.target.value);
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
      if (this.$route.name === "admin-product-add") location.reload(true);
    }
  }
};
</script>

<style scoped>
label {
  color: white;
}
.btn-validation {
  text-align: center;
  margin: auto;
}
</style>

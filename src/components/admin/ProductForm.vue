<template>
  <div>
    <form @submit.prevent="create">
      <div class="form-group">
        <label for="id">ID</label>
        <input type="text" class="form-control" id="id" placeholder="Entrer l'ID" v-model="cue.id" />
      </div>
      <div class="form-group">
        <label for="marque">Marque</label>
        <input
          type="text"
          class="form-control"
          id="Marque"
          placeholder="Marque"
          v-model="cue.marque"
        />
      </div>
      <div class="form-group">
        <label for="modele">Modèle</label>
        <input
          type="text"
          class="form-control"
          id="modele"
          placeholder="Modèle"
          v-model="cue.modele"
        />
      </div>
      <div class="form-group">
        <label for="fut">Type de fût</label>
        <input
          type="text"
          class="form-control"
          id="fut"
          placeholder="Type de fût"
          v-model="cue.type.fut"
        />
      </div>
      <div class="form-group">
        <label for="fleche">Type de flèche</label>
        <input
          type="text"
          class="form-control"
          id="fleche"
          placeholder="Type de flèche"
          v-model="cue.type.fleche"
        />
      </div>
      <div class="form-group">
        <label for="longueur">Longueur</label>
        <input
          type="text"
          class="form-control"
          id="longueur"
          placeholder="Longueur"
          v-model="cue.longueur"
        />
      </div>
      <div class="form-group">
        <label for="jonction">Type de jonction</label>
        <input
          type="text"
          class="form-control"
          id="jonction"
          placeholder="Type de jonction"
          v-model="cue.jonction"
        />
      </div>
      <div class="form-group">
        <label for="prix">Prix</label>
        <input type="text" class="form-control" id="prix" placeholder="Prix" v-model="cue.prix" />
      </div>

      <div class="form-group">
        <label for="image">Image</label>
        <input type="text" class="form-control" id="image" placeholder="Image" v-model="cue.image" />
      </div>
      <button type="submit" class="btn btn-success">Valider</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cue: {
        id: "",
        marque: "",
        modele: "",
        type: {
          fut: "",
          fleche: ""
        },
        longueur: "",
        jonction: "",
        prix: "",
        image: ""
      }
    };
  },
  methods: {
    create() {
      this.$store.dispatch("createProduct", this.cue);
    }
  }
};
</script>

<style scoped>
label {
  color: white;
}
</style>

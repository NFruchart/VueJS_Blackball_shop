<template>
  <div>
    <h3>Modifier un produit</h3>
    <ProductForm />
  </div>
</template>

<script>
import ProductForm from "../../components/admin/ProductForm";
import { mapActions } from "vuex";
export default {
  components: {
    ProductForm
  },
  mounted() {
    this.getProducts();
    // this.$store.dispatch("getProducts");
    console.log("store dispatch = " + this.$store.dispatch("getProducts"));
    console.log("state" + this.getProducts());
  },  
  methods: {
    ...mapActions({
      getProducts: "getProducts"
    })
  }
};
</script>

<style scoped></style>

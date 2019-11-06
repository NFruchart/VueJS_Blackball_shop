<template>
  <div class="admin-product-body">
    <router-link to="/admin/product-add"
      ><button type="button" class="btn btn-primary">
        Ajouter un nouveau produit
      </button></router-link
    >
    <ProductList />
  </div>
</template>

<script>
import ProductList from "@/components/admin/ProductList";
export default {
  components: {
    ProductList
  }
};
</script>

<style scoped></style>

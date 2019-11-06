<template>
  <div class="home">
    <h1>Boutique</h1>
    <Products />
  </div>
</template>

<script>
import Products from "./Products";
export default {
  name: "home",
  components: {
    Products
  },
};
</script>

<style scoped></style>

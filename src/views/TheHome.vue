<template>
  <div class="home">
    <h1>Boutique</h1>
    <Products />
  </div>
</template>

<script>
import Products from "@/views/TheProducts";
export default {
  name: "home",
  components: {
    Products
  }
};
</script>

<style scoped></style>

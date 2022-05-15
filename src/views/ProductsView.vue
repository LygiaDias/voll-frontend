<template>
  <div class="home">
    <Nav />
    <ProductsPage />
  </div>
</template>

<script>
import ProductsPage from "@/components/ProductsPage.vue";
import Nav from "@/components/NavComponent.vue";

export default {
  name: "ProductsView",
  components: {
    ProductsPage,
    Nav,
  },
};
</script>

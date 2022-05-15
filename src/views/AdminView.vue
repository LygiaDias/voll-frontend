<template>
  <div class="admin">
    <Nav />
    <AdminPage />
  </div>
</template>

<script>
// @ is an alias to /src
import AdminPage from "@/components/AdminPage.vue";
import Nav from "@/components/NavComponent.vue";
export default {
  name: "AdminView",
  components: {
    AdminPage,
    Nav,
  },
};
</script>

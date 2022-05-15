<template>
  <div class="login">
    <img alt="Vue logo" src="../assets/logo-novo-2.png" class="logo" />
    <LoginPage />
  </div>
</template>

<script>
// @ is an alias to /src
import LoginPage from "@/components/LoginPage.vue";

export default {
  name: "LoginView",
  components: {
    LoginPage,
  },
};
</script>

<style>
body {
  background: rgb(86, 5, 179);
  background: linear-gradient(
    90deg,
    rgba(86, 5, 179, 1) 0%,
    rgba(37, 11, 113, 0.9780287114845938) 2%,
    rgba(255, 0, 151, 1) 88%
  );
}
</style>

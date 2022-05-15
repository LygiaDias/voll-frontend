<template>
  <nav>
    <img alt="Vue logo" src="../assets/logo-novo-2.png" class="logo" />

    <router-link class="route" to="/">Login </router-link>
    <router-link class="route" to="/products"> Produtos </router-link>
    <router-link class="route" v-show="isAdmin" to="/admin">
      Painel de Controle</router-link
    >
  </nav>
</template>

<script>
export default {
  name: "NavComponent",

  data() {
    const storage = localStorage.getItem("user");
    if (storage === "admin") {
      return {
        isAdmin: true,
      };
    }
  },
};
</script>

<style>
nav {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  width: 70%;
}

.logo {
  width: 30%;
}

.route {
  background-color: purple;
  border-radius: 10px;
  padding: 10px;
  color: seashell;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #da7422;
}
</style>

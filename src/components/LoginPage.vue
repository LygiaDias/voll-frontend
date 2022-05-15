<template>
  <div class="body">
    <form @submit="handleSubmit" class="form">
      <h3>Login</h3>
      <div class="form-group">
        <label> Email </label>
        <input
          type="email"
          v-model="email"
          class="form-control"
          placeholder="Email"
        />
      </div>
      <div class="form-group">
        <label> Senha </label>
        <input
          type="password"
          v-model="password"
          class="form-control"
          placeholder="Senha"
        />
      </div>

      <button type="submit" class="button">Entrar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import router from "../router/index";

export default {
  name: "LoginPage",

  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const data = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("https://voll-back-store.herokuapp.com/login", data)
        .then((res) => {
          console.log(res.data.user.role);
          localStorage.setItem("user", res.data.user.role);
          router.push({ name: "products" });
        })
        .catch((err) => {
          alert("Email ou senha incorretos!");
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
.form {
  background: rgb(86, 5, 179);
  background: linear-gradient(
    90deg,
    rgba(86, 5, 179, 1) 0%,
    rgba(37, 11, 113, 0.9780287114845938) 2%,
    rgb(167, 15, 106) 88%
  );
  width: 40%;
  height: 250px;
  border-radius: 10px;
  display: flexbox;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: 27%;
  margin-top: 50px;
  color: lavender;
}

.form-group {
  display: flexbox;
  align-items: center;
  justify-items: center;
}

.form-control {
  display: block;
  height: 20px;
  width: 95%;
  border-radius: 10px;
  margin-left: 10px;
}
.button {
  color: white;
  background-color: purple;
  border-radius: 10px;
  padding: 5px;
  margin-top: 5px;
}
label {
  display: block;
  float: left;
  margin-left: 10px;
}
</style>

<template>
  <div>
    <form @submit="handleSubmit" class="form">
      <h3>Criar Produto</h3>
      <div class="form-group">
        <label> Nome do Produto: </label>
        <input
          type="text"
          v-model="productName"
          class="form-control"
          placeholder="Nome"
        />
      </div>
      <div class="form-group">
        <label> Descrição: </label>
        <input
          type="text"
          v-model="description"
          class="form-control"
          placeholder="Descrição"
        />
      </div>

      <div class="form-group">
        <label> Preço: </label>
        <input
          type="number"
          v-model="price"
          class="form-control"
          placeholder="Preço"
        />
      </div>

      <div class="form-group">
        <label> Moedas: </label>
        <input
          type="number"
          v-model="coins"
          class="form-control"
          placeholder="Moedas"
        />
      </div>

      <button class="button">Salvar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "AdminPage",

  data() {
    return {
      productName: "",
      description: "",
      price: "",
      coins: "",
    };
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      const data = {
        productName: this.productName,
        description: this.description,
        price: this.price,
        coins: this.coins,
      };

      axios
        .post("https://voll-back-store.herokuapp.com/products", data)
        .then((res) => {
          console.log(res.data);
          alert("Produto criado com sucesso!");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form {
  background: rgb(86, 5, 179);
  background: linear-gradient(
    90deg,
    rgba(86, 5, 179, 1) 0%,
    rgba(37, 11, 113, 0.9780287114845938) 2%,
    rgb(167, 15, 106) 88%
  );
  width: 50%;
  height: 300px;
  border-radius: 10px;
  display: flexbox;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-left: 20%;
  color: lavender;
}

.button {
  color: white;
  background-color: purple;
  border-radius: 10px;
  padding: 5px;
  margin-top: 5px;
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

label {
  display: block;
  float: left;
  margin-left: 10px;
}
</style>

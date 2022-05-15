<template>
  <table>
    <thead>
      <tr>
        <th>Nome</th>
        <th>Descrição</th>
        <th>Preço</th>
        <th>Moedas</th>
      </tr>
    </thead>
    <tbody v-for="product of productsData" :key="product.id">
      <tr>
        <td>{{ product.productName }}</td>
        <td>{{ product.description }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.coins }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import axios from "axios";

export default {
  name: "ProductsPage",

  data() {
    return {
      productsData: [],
    };
  },

  mounted() {
    axios.get("https://voll-back-store.herokuapp.com/products").then((res) => {
      console.log(res.data);
      this.productsData = res.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  margin-top: 30px;
  border-collapse: collapse;
  width: 90%;
  margin-left: 45px;
  color: thistle;
  table-layout: fixed;
  background: rgb(86, 5, 179);
  background: linear-gradient(
    90deg,
    rgba(86, 5, 179, 1) 0%,
    rgba(37, 11, 113, 0.9780287114845938) 2%,
    rgb(167, 15, 106) 88%
  );
}

thead {
  background-color: rgba(212, 41, 121, 0.863);
}

td,
th {
  border: 2px solid rgba(32, 32, 32, 0.867);
  padding: 10px;
  text-align: center;
  vertical-align: center;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

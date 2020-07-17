<template>
  <div class="home">
    <!--  <Cardapio></Cardapio>  -->
    <ul>
      <router-link tag="li" to="/venda"><a>Nova venda</a></router-link>
      <router-link tag="li" to="/estoque"><a>Estoque</a></router-link>
      <router-link tag="li" to="/estoque"><a>Clientes</a></router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
  },
};
</script>

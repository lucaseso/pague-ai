<template>
  <div class="home">
    <!--  <Cardapio></Cardapio>  -->
    <ul>
      <router-link tag="li" to="/venda"><a>Nova venda</a></router-link>
      <router-link tag="li" to="/estoque"><a>Estoque</a></router-link>
      <router-link tag="li" :to="{ name: 'cliente' }"><a>Clientes</a></router-link>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {},
  data() {
    return {
      value: null,
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Adonis', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    };
  }
};
</script>

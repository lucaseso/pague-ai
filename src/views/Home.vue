<template>
  <div class="home">
    <b-jumbotron>LSKsds</b-jumbotron>
    <!--  <Cardapio></Cardapio>  -->
    <multiselect
      v-model="value"
      :options="options"
      :multiple="true"
      :close-on-select="false"
      :clear-on-select="false"
      :preserve-search="true"
      placeholder="Pick some"
      label="name"
      track-by="name"
      :preselect-first="true"
    >
      <template slot="selection" slot-scope="{ values, search, isOpen }"
        ><span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen"
          >{{ values.length }} options selected</span
        ></template
      >
    </multiselect>

    <ul>
      <router-link tag="li" to="/venda"><a>Nova venda</a></router-link>
      <router-link tag="li" to="/estoque"><a>Estoque</a></router-link>
      <router-link tag="li" to="/cliente"><a>Clientes</a></router-link>
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

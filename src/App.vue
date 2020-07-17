<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
/* Import Font Awesome Icons Set */
$fa-font-path: "~font-awesome/fonts/";
/*@import "~font-awesome/scss/font-awesome.scss";*/
/* Import Bootstrap Vue Styles */
@import "~bootstrap-vue/dist/bootstrap-vue.css";
// @import '~bootstrap/dist/css/bootstrap.css';
// Import Main styles for this application
/*@import "assets/scss/style";*/
//@import "vue-select/src/scss/vue-select.scss";
</style>

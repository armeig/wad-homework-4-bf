<template>
  <div id="app">
    <HeaderCompo />
    <router-view />
    <FooterCompo />
  </div>
</template>


<script>

import HeaderCompo from "@/components/HeaderCompo.vue";
import FooterCompo from "@/components/FooterCompo.vue";

export default {
  name: 'App',
  components: { FooterCompo, HeaderCompo }
};
</script>

<style>

#app {
  background: #FFFBFA;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}

html,
body {
  margin: 0;
  
  padding: 0;
  height: 100%;

}
</style>

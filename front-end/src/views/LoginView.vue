<template>
    <div class="compos">
      <HeaderCompo />
      <LoginCompo />
      <FooterCompo />
    </div>
  </template>
  
  <script setup>
  import LoginCompo from "../components/LoginCompo.vue";
  </script>
  
  
  <style scoped>
  
  .compos {
    display: flex;
    flex-direction: column;
    min-height: 65vh;
  }
  
  </style>
  
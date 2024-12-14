<template>
    <div class="compos">
      <HeaderCompo />
      <ContactUsCompo />
      <FooterCompo />
    </div>
  </template>
  
  <script setup>
  import ContactUsCompo from "../components/ContactUsCompo.vue";
  </script>
  
  
  <style scoped>
  
  .compos {
    display: flex;
    flex-direction: column;
    min-height: 65vh;
  }
  
  </style>
<template>
    <div class="login-page">
      <FormCompo :isSignup="false" />
    </div>
  </template>
  
  <script>
  import FormCompo from "@/components/FormCompo.vue";
  
  export default {
    components: {
      FormCompo,
    },
  };
  </script>
  
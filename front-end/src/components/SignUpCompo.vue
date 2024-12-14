<template>
  <div class="signup-page">
    <FormCompo :isSignup="true" />
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

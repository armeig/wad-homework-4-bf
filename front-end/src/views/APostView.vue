<template>
  <div class="compos">
    <HeaderCompo />
    <APostCompo />
    <FooterCompo />
  </div>
</template>

<script setup>
import APostCompo from "../components/APostCompo.vue";
</script>

<style scoped>
.compos {
  display: flex;
  flex-direction: column;
  min-height: 65vh;
}
</style>

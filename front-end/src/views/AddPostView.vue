<template>
  <div class="compos">
    <HeaderCompo />
    <AddPostCompo />
    <FooterCompo />
  </div>
</template>

<script setup>
import AddPostCompo from "../components/AddPostCompo.vue";
</script>

<style scoped>
.compos {
  display: flex;
  flex-direction: column;
  min-height: 65vh;
}
</style>

<script setup>

</script>

<template>
  <div id="footer">
    <div class="innerContainer1">
      <p>Contacts:</p>
      <p>info@postIt.com</p>
      <p>+372 5466 987</p>
    </div>
    <div class="innerContainer2">
      <p>Copyright</p>
    </div>
  </div>
</template>

<style scoped>

#footer {
  background: #D4C4CB;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
  padding: 10px 20px;
  border-radius: 1rem;
  /*Container properties*/
  display: flex;
  margin: 10px;


}

.innerContainer1 {
  display: flex;
  flex-direction: column;
  align-items: self-start;
}

.innerContainer1 p {
  margin: 5px;
}

.innerContainer2 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-end;
  margin-left: auto;
}
</style>

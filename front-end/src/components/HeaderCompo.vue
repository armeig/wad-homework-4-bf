<template>
  <div id="header">
    <nav>
      <router-link to="/Login">Home</router-link>
      <router-link to="/ContactUs">Contact us</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderCompo",
};
</script>

<style scoped>
#header {
  /*design*/
  background: #d4c4cb;
  box-shadow: 1px 2px 3px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 10px;
  margin-right: 10px;
  padding: 10px 20px;
  border-radius: 1rem;
  /*Container properties*/
  display: flex;
}

nav {
  padding: 30px;
}

nav a {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: #3c3c3c;
  margin: 5px;
}

nav a.router-link-exact-active {
  color: #6a4d59;
  text-decoration: underline;
}
</style>

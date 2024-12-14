

<template>
  <div id="header">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/SignUp">SignUp</router-link>
      <router-link to="/Login">Login</router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "HeaderCompo",
};
</script>

<style scoped>

#header{
  /*design*/
  background: #D4C4CB;
  box-shadow: 1px 2px 3px rgba(0,0,0,0.2);
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
  color: #3C3C3C;
  margin: 5px;
}

nav a.router-link-exact-active {
  color: #6A4D59;
  text-decoration: underline;
}

</style>

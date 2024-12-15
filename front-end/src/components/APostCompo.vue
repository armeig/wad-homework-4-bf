<template>
  <div class="apost">
    <form @submit.prevent="handleAPost">
      <div class="form-group">
        <label for="body">Body</label>
        <input id="body" v-model="text" type="text" required />
      </div>
      <div class="button-container">
        <button type="submit" @click="handleUpdate">Update</button>
        <button type="button" @click="handleDelete">Delete</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "", // This will store the post's body text
    };
  },
  methods: {
    handleUpdate() {
      // Handle the update post logic here (e.g., sending the post data to the server)
      console.log("Post updated:", this.text); // Replace this with your update logic
    },
    handleDelete() {
      // Handle the delete post logic here (e.g., sending a delete request to the server)
      console.log("Post deleted:", this.text); // Replace this with your delete logic
    },
  },
};
</script>

<style scoped>
.apost {
  max-width: 300px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  margin-bottom: 25vh;
  background-color: #d4c4cb;
}

.form-group {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
  width: 100%;
}

label {
  margin-bottom: 5px;
}

input {
  width: 200px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background-color: #6a4d59;
  padding: 10px;
  border-radius: 5px;
  color: #fffbfa;
}

button:hover {
  background-color: #8a6d79;
}
</style>

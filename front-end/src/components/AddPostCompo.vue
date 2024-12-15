<template>
  <div class="addpost">
    <form>
      <div class="form-group">
        <label for="body">Body</label>
        <input name="body" id="body" required v-model="post.body" type="text" />
      </div>
      <button @click="addPost" class="addPost">Add Post</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "AddPost",
  data() {
    return {
      post: {
        body: "", // This will store the post's body text
      },
    };
  },
  methods: {
    addPost() {
      var data = {
        title: this.post.title,
        body: this.post.body,
        urllink: this.post.urllink,
      };
      // using Fetch - post method - send an HTTP post request to the specified URI with the defined body
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log(response.data);
          // redirect to /allposts view
          this.$router.push("/api/allposts");
        })
        .catch((e) => {
          console.log(e);
          console.log("error");
        });
    },
  },
};
</script>

<style scoped>
.addpost {
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

.error {
  color: red;
  margin-top: 10px;
}
</style>

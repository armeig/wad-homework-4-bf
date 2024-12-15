<template>
  <div class="apost">
    <form>
      <div class="form-group">
        <label for="body">Body</label>
        <input name="body" id="body" v-model="post.body" type="text" required />
      </div>
      <div class="button-container">
        <button @click="updatePost" class="updatePost">Update Post</button>
        <button @click="deletePost" class="deletePost">Delete Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "APost",
  data() {
    return {
      post: {
        id: "",
        body: "", // This will store the post's body text
      },
    };
  },
  methods: {
    fetchAPost(id) {
      // fetch one post with the specied id (id)
      fetch(`http://localhost:3000/api/posts/${id}`)
        .then((response) => response.json())
        .then((data) => (this.post = data))
        .catch((err) => console.log(err.message));
    },
    updatePost() {
      // using Fetch - put method - updates a specific post based on the passed id and the specified body
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(this.post),
      })
        .then((response) => {
          console.log(response.data);
          // this.$router.push("/apost/" + this.post.id);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/api/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
    deletePost() {
      // using Fetch - delete method - delets a specific post based on the passed id
      fetch(`http://localhost:3000/api/posts/${this.post.id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => {
          console.log(response.data);
          // We are using the router instance of this element to navigate to a different URL location
          this.$router.push("/api/allposts");
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    // call fetchAPost() when this element mounts, and pass to it a route parameter  (id)
    // Route parameters (this.$route.params.id) are named URL segments that are used to capture the values specified at their
    // position in the URL. The captured values are populated in the req.params object, with the name
    // of the route parameter specified in the path as their respective keys
    this.fetchAPost(this.$route.params.id);
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

<template>
  <div class="addpost">
    <form @submit.prevent="addPost">
      <div class="form-group">
        <label for="body">Body</label>
        <input name="body" id="body" required v-model="post.body" type="text" />
      </div>
      <button type="submit" class="addPost">Add Post</button>
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
    async addPost() {
      if (!this.post.body.trim()) {
        console.log("Body cannot be empty!");
        return;
      }

      const data = {
        body: this.post.body,
        email: "example@email.com",
      };

      try {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const result = await response.json();
        console.log(result); // Log the response data
        // Optionally redirect to /allposts view or clear the form.
        this.$router.push("/"); // Assuming you want to navigate
      } catch (error) {
        console.error("Error:", error);
        console.log("An error occurred while sending the post.");
      }
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

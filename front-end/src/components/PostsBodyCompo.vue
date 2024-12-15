<template>
  <div id="Container">
    <div>
      <button class="logoutButton" @click="logout">Logout</button>
    </div>
    <div class="postCompo">
      <p>You're all caught up!</p>
      <PostCompo
        v-for="post in postList"
        :key="post.id"
        :post="post"
        @like-post="likePost"
      />
      <p>Check out your feed</p>
    </div>
    <div id="buttonsContainer">
      <button
        class="addPostButton"
        @click="this.$router.push('/addpost')"
        v-on:click="addPost"
      >
        Add post
      </button>
      <button class="deleteAllButton" v-on:click="deleteAll">Delete all</button>
    </div>
  </div>
</template>

<script>
import PostCompo from "@/components/PostCompo.vue"; // Adjust the path if needed

export default {
  components: {
    PostCompo,
  },
  data() {
    return {
      postList: [], // This will hold the list of posts
    };
  },
  methods: {
    // Logout function
    logout() {
      fetch("http://localhost:3000/auth/logout", {
        method: "GET",
        credentials: "include",
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.$router.push("/login"); // Redirect to login
        })
        .catch((e) => console.error(e));
    },

    // Fetch posts from the backend
    async fetchPosts() {
      try {
        const response = await fetch("http://localhost:3000/api/posts");
        const data = await response.json();
        console.log("Fetched posts:", data);
        this.postList = data; // Update the reactive state with the fetched posts
      } catch (err) {
        console.error("Error fetching posts:", err);
      }
    },

    // Add a new post (navigate to addpost page)
    addPost() {
      this.$router.push("/addpost");
    },

    // Delete all posts (assuming you have an API for this)
    async deleteAll() {
      try {
        const response = await fetch("http://localhost:3000/api/posts", {
          method: "DELETE",
        });
        const data = await response.json();
        console.log("Deleted all posts:", data);
        this.fetchPosts(); // Refresh posts after deletion
      } catch (err) {
        console.error("Error deleting posts:", err);
      }
    },

    // Like a post function (placeholder)
    likePost(postId) {
      console.log(`Liked post with ID: ${postId}`);
      // You can add logic to send a request to your backend to "like" a post
    },
  },

  mounted() {
    // Fetch posts when the component is mounted
    this.fetchPosts();
  },
};
</script>

<style scoped>
#Container {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.postCompo {
  background: #d4c4cb;
  padding: 5px;
  min-height: 75vh;
  margin-bottom: 20px;
  border-radius: 1rem;
  /*for responsiveness*/
  width: 80%;
  max-width: 1000px;
  min-width: 320px;
  /*Container properties*/
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column-reverse;
}

.resetLikesButton {
  background-color: #6a4d59;
  border-radius: 1rem;
  margin-bottom: 20px;

  font-size: 24px;
  width: 30vw;
  height: 10vh;

  min-width: 200px;
  min-height: 50px;
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

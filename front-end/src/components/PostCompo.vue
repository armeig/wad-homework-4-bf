<script setup>
import { defineProps, defineEmits } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const props = defineProps({
  post: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(["like-post"]);

const likePost = (event) => {
  event.stopPropagation(); // Prevent bubbling to the parent click handler
  emit("like-post", props.post.id);
};

const navigateToPost = () => {
  router.push({ name: "apost-detail", params: { id: props.post.id } });
};
</script>

<template>
  <div class="post" @click="navigateToPost">
    <div class="accountDateContainer">
      <p class="account">{{ post.email }}</p>
      <!-- Updated to post.email -->
      <p class="date">{{ post.date }}</p>
      <!-- Updated to post.date -->
    </div>
    <div class="postText">
      <h3>{{ post.body }}</h3>
      <!-- Updated to post.body -->
    </div>
    <!-- Remove picInfo check as it's not part of the data -->
    <div class="likeContainer">
      <img
        class="likeButton"
        src="../../public/images/like.png"
        @click="likePost"
      />
      <p>Likes:</p>
      <p>0</p>
      <!-- Defaulted to 0 as likeCount doesn't exist -->
    </div>
  </div>
</template>

<style scoped>
/* Your existing CSS styles remain unchanged */
div {
  border-radius: 1rem;
}

.post {
  background: #ffefeb;
  margin: 5px;
  min-height: 10vh;
  width: 90%;
  max-width: 900px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  /* Indicates the post is clickable */
  transition: background-color 0.2s ease-in-out;
}

.post:hover {
  background-color: #fcdcd3;
  /* Slight highlight on hover */
}

.accountDateContainer {
  display: flex;
}

.accountDateContainer p {
  margin-top: 5px;
  font-size: 20px;
}

.date {
  margin-left: auto;
  margin-right: 10px;
}

.account {
  margin-left: 10px;
}

.postText {
  display: flex;
  align-items: flex-start;
}

.postText h3 {
  margin-top: 0px;
  margin-left: 10px;
}

.likeContainer {
  display: flex;
  justify-content: flex-end;
}

.likeButton {
  height: 24px;
  place-items: center;
  margin: 10px;
  margin-top: 0;
}

.likeButton ~ p {
  margin: 10px;
  margin-left: 0px;
  place-self: center;
}
</style>

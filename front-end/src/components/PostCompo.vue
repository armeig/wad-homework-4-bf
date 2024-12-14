<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  post: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(["like-post"]);

const likePost = () => {
  emit("like-post", props.post.id);
}
</script>

<template>
  <div class="post">
    <div class="accountDateContainer">
      <p class="account">{{ post.account }}</p>
      <p class="date">{{ post.postDate }}</p>
    </div>
    <div class="postText">
      <h3>{{ post.PostText }}</h3>
    </div>
    <div v-if="post.picInfo !== null && post.picInfo !== undefined">
      <img class="postPic" :src="post.picInfo">
    </div>
    <div class="likeContainer">
      <img class="likeButton" src="../../public/images/like.png" @click="likePost">
      <p>Likes: </p>
      <p>{{ post.likeCount }}</p>
    </div>
  </div>
</template>

<style scoped>
div {
  border-radius: 1rem;
}

.post {
  background: #FFEFEB;
  margin: 5px;
  min-height: 10vh;
  /*for responsiveness*/
  width: 90%;
  max-width: 900px;
  min-width: 220px;
  display: flex;
  flex-direction: column;
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

.postPic {
  height: auto;
  width: 60%;
  margin-bottom: 20px;
  border-radius: 1rem;
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

.likeButton~p {
  margin: 10px;
  margin-left: 0px;
  place-self: center;
}
</style>

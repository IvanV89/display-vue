<template>
  <div>
    <div class="container">
      <div class="single-post">

        <div>
          <button class="btn-back" @click="backpost()">BACK</button>
        </div>

        <h1 class="title-post">{{ singlepost.title}}</h1>
        <img class="urll-post" :src="singlepost.url">
        <p class="text-post" v-html="singlepost.text"></p>
        
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
export default {
  data() {
    return {};
  },
  computed: {
    singlepost() {
      return this.$store.getters.singlepost;
    }
  },
  methods: {
    backpost() {
      this.$router.push("/blog");
    }
  },
  beforeCreate() {
    let id = this.$route.params.id;
    this.$store.dispatch("getSinglePost", id);
  }
};
</script>

<style>
.single-post img {
  width: 100%;
}
.btn-back {
  width: 150px;
  height: 50px;
  background-color: #2ecc71;
  border: none;
  color: white;
  margin-bottom: 10px;
}
.urll-post {
  margin-bottom: 20px;
  margin-top: 10px;
}
.title-post {
  color: gray;
  font-size: 40px;
}
</style>

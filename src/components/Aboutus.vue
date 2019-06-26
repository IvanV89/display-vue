<template>
  <b-container v-html="aboutus"></b-container>
</template>

<script>
export default {
  name: "Aboutus",
  computed: {
    aboutus() {
      return this.$store.getters.aboutus;
    }
  }
};
</script>

<style>
p {
  color: #8a8888;
  font-family: "Helvetica";
}
.float-left {
  margin-right: 40px;
}
</style>

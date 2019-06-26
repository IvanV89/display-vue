<template>
  <img class="img" :src="img" alt="logo">
</template>

<script>
export default {
  name: "Logo",
  computed: {
    img() {
      return this.$store.getters.img;
    }
  }
};
</script>

<style>
.img {
  margin-top: 30px;
}
</style>

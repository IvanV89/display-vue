<template>
  <b-container v-html="portfoliosection"></b-container>
</template>

<script>
export default {
  name: "Portfoliosection",
  computed: {
    portfoliosection() {
      return this.$store.getters.portfoliosection;
    }
  }
};
</script>

<style>
h3 {
  font-family: "Novecentosanswide-DemiBold";
  color: #8a8888;
  font-size: 24px;
  margin-top: 40px !important;
}
p {
  font-family: "Helvetica";
}
</style>

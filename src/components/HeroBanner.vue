<template>
  <section class="hero-banner">
    <b-container>
      <b-row>
        <img :src="imgs" alt="herobanner">
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "HeroBanner",
  computed: {
    imgs() {
      return this.$store.getters.imgs;
    }
  }
};
</script>

<style>
.hero-banner {
  background-image: url(/images/sunburst.svg);
  margin-top: 15px;
  max-height: 525px;
  background-color: #2ecc71;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 120px;
}
.hero-banner .container img {
  margin-left: 100px;
  -moz-animation: fadein 3s; /* Firefox */
  -webkit-animation: fadein 3s; /* Safari and Chrome */
  -o-animation: fadein 3s; /* Opera */
}
</style>

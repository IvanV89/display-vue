<template>
  <b-container>
    <b-row>
      <b-col>
        <p>{{ text }}</p>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Hometext",
  computed: {
    text() {
      return this.$store.getters.text;
    }
  }
};
</script>

<style scoped>
p {
  font-family: "Helvetica";
  text-transform: uppercase;
  text-align: center;
  color: #aeadad;
  font-weight: bold;
  margin-top: 120px;
  -moz-animation: fadein 4s; /* Firefox */
  -webkit-animation: fadein 4s; /* Safari and Chrome */
  -o-animation: fadein 4s; /* Opera */
}
</style>

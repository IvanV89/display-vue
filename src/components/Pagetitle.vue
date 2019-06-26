<template>
  <section class="page-title">
    <b-container>
      <b-row>
        <b-col>
          <h2>{{ text }}</h2>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>

<script>
export default {
  name: "Pagetitle",
  props: ["text"],
  computed: {
    pagetitle() {
      return this.$store.getters.pagetitle;
    }
  }
};
</script>

<style>
.page-title {
  background-color: #2ecc71;
  height: 100px;
  color: white;
  margin-bottom: 50px;
}
.page-title h2 {
  text-transform: uppercase;
  padding-top: 25px;
}
</style>

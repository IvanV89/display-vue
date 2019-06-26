<template>
  <b-container class="center">
    <b-row>
      <b-col v-html="mission" cols="6">
      </b-col>
      <b-col v-html="fun" cols="6">
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "MisionStatement",
  computed: {
    mission() {
      return this.$store.getters.mission;
    },
    fun() {
      return this.$store.getters.fun;
    }
  }
 
};
</script>

<style>
.center {
  margin-top: 20px;
}
.center h3 {
  text-transform: uppercase;
  color: #8a8888;
  font-weight: bold !important;
  font-family: "Novecentosanswide-DemiBold";
}
.center p{
    padding-top: 10px;
}

</style>


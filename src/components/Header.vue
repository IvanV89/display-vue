<template>
  <b-container class="container">
  <b-row>
      <b-col>
        <Logo />
       <SocialNetwork />
      </b-col>
    </b-row>
    <br>
    <hr>
    <b-row>
      <b-col>
        <Navbar />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Logo from "@/components/Logo.vue";
import SocialNetwork from "@/components/SocialNetwork.vue";
import Navbar from "@/components/Navbar.vue";

export default {
  name: "Header",
  components: {
    Logo,
     SocialNetwork,
    Navbar
   
  }
};
</script>

<style></style>

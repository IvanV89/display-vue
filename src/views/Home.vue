<template>
  <div>
    <HeroBanner />
    <Hometext />
    <Button :btn="btn" />
    <Popup/>
     <Portfoliosection />
     <Carusell />
     <Footer />
  </div>
</template>

<script>
import HeroBanner from "@/components/HeroBanner.vue";
import Hometext from "@/components/Hometext.vue";
import Button from "@/components/Button.vue";
import Popup from "@/components/Popup.vue";
import Portfoliosection from "@/components/Portfoliosection.vue";
import Carusell from "@/components/Carusell.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "Home",
  components: {
    HeroBanner,
    Hometext,
    Button,
    Popup,
    Portfoliosection,
    Carusell,
    Footer
  },
  data() {
    return {
      btn: "BROWSE PORTFOLIO"
    };
  }
};
</script>

<style>
</style>


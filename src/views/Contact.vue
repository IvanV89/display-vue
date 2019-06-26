<template>
  <div>
    <Pagetitle :text="text" />
    <Googlemaps />
    <b-container>
      <b-row>
        <b-col cols="7">
    <Contactform />
    </b-col>
    <b-col cols="5">
      <Contactinfo />
      </b-col>
      </b-row>
      </b-container>
    <Footer />
  </div>
</template>

<script>
import Pagetitle from "@/components/Pagetitle.vue";
import Googlemaps from "@/components/Googlemaps.vue";
import Contactform from "@/components/Contactform.vue";
import Contactinfo from "@/components/Contactinfo.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Contact",
  components: {
    Pagetitle,
    Googlemaps,
    Contactform,
    Contactinfo,
    Footer
  },
  data() {
    return {
      text: "got a question or inquiry?"
    };
  }
};
</script>

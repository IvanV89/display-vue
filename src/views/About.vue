<template>
  <div>
    <Pagetitle :text="text"/>
    <Aboutus/>
    <MisionStatement/>
    <Services />
    <Footer />
  </div>
</template>

<script>
import Pagetitle from "@/components/Pagetitle.vue";
import Aboutus from "@/components/Aboutus.vue";
import MisionStatement from "@/components/MisionStatement.vue";
import Services from "@/components/Services.vue";
import Footer from "@/components/Footer.vue"
export default {
  name: "About",
  components: {
    Pagetitle,
    Aboutus,
    MisionStatement,
    Services,
    Footer
  },
  data() {
    return {
      text: "about my business"
    };
  }
};
</script>

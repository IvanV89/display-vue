<template>
  <div>
    <Pagetitle :text="text" />
    <Filters />
    <Footer />
  </div>
</template>

<script>
import Pagetitle from "@/components/Pagetitle.vue";
import Filters from "@/components/Filters.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: "Work",
  components: {
    Pagetitle,
    Filters,
    Footer
  },
  data() {
    return {
      text: "check out what i can do"
    };
  }
};
</script>

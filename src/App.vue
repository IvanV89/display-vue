<template>
  <div id="app">
    <Header/>
    <router-view/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style>
.container {
  max-width: 970px;
  padding-right: 0px !important;
}
html {
  position: relative;
  min-height: 100%;
}
body {
  /* Margin bottom by footer height */
  margin-bottom: 60px;
}

@font-face {
  font-family: "Helvetica";
  src: url("assets/fonts/Helvetica.woff") format("woff");
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Novecentosanswide-DemiBold";
  src: url("assets/fonts/Novecentosanswide-DemiBold-webfont.woff")
    format("woff");
  font-weight: normal;
  font-style: normal;
}
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fadein {
  /* Firefox */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-webkit-keyframes fadein {
  /* Safari and Chrome */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-o-keyframes fadein {
  /* Opera */
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>

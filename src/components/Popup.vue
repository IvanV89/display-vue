<template>
  <div class="popbackground">
    <b-container class="popup">
      <b-row>
        <b-col cols="5">
          <img class="imge" :src="imge" v-b-modal.modal-center>
          <!-- Modal Component -->
          <b-modal id="modal-center" centered title="BootstrapVue">
            <iframe
              width="460"
              height="415"
              src="https://www.youtube.com/embed/MEBeGBNOV7s"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </b-modal>
        </b-col>
        <b-col>
          <div v-html="itams"></div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "Popup",
  computed:{
  imge() {
    return this.$store.getters.imge;
  },
  itams() {
    return this.$store.getters.itams;
  }
  }
};
</script>

<style>
.imge {
  cursor: pointer;
  margin-top: 40px;
}
h4 {
  text-transform: uppercase;
  margin-top: 40px !important;
  font-family: "Novecentosanswide-DemiBold";
  color: #737373;
  font-weight: bold !important;
}
p {
  color:  #8a8888;
  margin-top: 20px;
  font-family: "Helvetica";
}
.popbackground {
  background-color: #efefef;
  height: 320px;
  margin-top: 40px;
}


</style>
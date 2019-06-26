<template>
  <div>
    <div>
      <slick class="slickimg"  ref="slick" :options="slickOptions">
        <img v-for="(image,index) in images" :src="image.url" :alt="image.alt" :key="index">
      </slick>
    </div>
    <div class="text-center">
      <img @click="next" class="next" src="/images/next.svg" alt>

      <img @click="prev" class="prev" src="/images/prev.svg" alt>
    </div>
    
      <slick class="paragraf" style="text-align:center" ref="slick" :options="slickOptions2">
       <div v-for="(item, index) in items" :key="index">
           <h3>{{item.title}}</h3>
           <p>{{item.text}}</p>
        </div>
      </slick>
    
  </div>
</template>

<script>
import Slick from "vue-slick";
import "@/assets/slick.css";
export default {
  name: "Carusell",
  components: { Slick },
  data() {
    return {
      slickOptions: {
        centerMode: true,
        focusOnSelect: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        asNavFor: ".paragraf",
        prevArrow: ".prev",
        nextArrow: ".next",
        dragablle: true,
        variableWidth: true
      },
      slickOptions2: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        autoplay: false,
        asNavFor: ".slickimg"
      }
    };
  },
  methods: {
    next() {
      this.$refs.slick.next();
    },
    prev() {
      this.$refs.slick.prev();
    },
    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    }
  },
  computed: {
    images() {
      return this.$store.getters.images;
    },
    items() {
      return this.$store.getters.items;
    }
  }
};
</script>

<style>
.slickimg .slick-slide {
  margin: 0 15px;
}
.slick-slide {
  opacity: 0.3;
}

.slick-current {
  opacity: 1;
  transition: opacity 0.7s ease-out;
}
.slick-text {
  text-align: center;
}
.next,
.prev {
  margin-left: 200px;
  margin-right: 200px;
  margin-top: 20px;
}
.slick-text h3{
  color: #8a8888;
  font-family: "Novecentosanswide-DemiBold";
}
.slick-text {
  padding-bottom: 20px;
}
</style>


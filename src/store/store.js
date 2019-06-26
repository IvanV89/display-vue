import Vue from "vue";
import Vuex from "vuex";

// Modules for Home
import logo from "@/store/modules/logo";
import navbar from "@/store/modules/navbar";
import herobanner from "@/store/modules/herobanner";
import hometext from "@/store/modules/hometext";
import popup from "@/store/modules/popup";
import portfoliosection from "@/store/modules/portfoliosection";
import carusell from "@/store/modules/carusell";

// Modules for About
import pagetitle from "@/store/modules/pagetitle";
import aboutus from "@/store/modules/aboutus";
import misionstatement from "@/store/modules/misionstatement";
import services from "@/store/modules/services";
// Modules for Work
import filters from "@/store/modules/filters";
// Modules for Contact
import iframe from "@/store/modules/iframe";
// Modules for Blogs
import blog from "@/store/modules/blog";
import singlepost from "@/store/modules/singlepost";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    logo,
    navbar,
    herobanner,
    hometext,
    popup,
    portfoliosection,
    carusell,
    pagetitle,
    aboutus,
    misionstatement,
    services,
    filters,
    iframe,
    blog,
    singlepost
  },
  mutations: {},
  actions: {},
});

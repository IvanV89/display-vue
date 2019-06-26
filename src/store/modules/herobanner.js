const state = {
   imgs: "/images/slider.svg"
}
const getters = {
   imgs() {
       return state.imgs;
   }
}

export default {
    state,
    getters
}
const state = {
    img: "/images/logo.png"
}
const getters = {
    img() {
        return state.img;
      }
}

export default {
    state,
    getters
}
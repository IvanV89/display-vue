const state = {
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu eratiuy lacus, vel congue mauris. Fusce velitaria justo, faucibus eu.",
}
const getters = {
    text() {
        return state.text;
      }
}

export default {
    state,
    getters
}
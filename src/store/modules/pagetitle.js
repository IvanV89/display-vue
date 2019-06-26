const state = {
   pagetitle : " <h2>{{ text }}</h2>"
}
const getters = {
    pagetitle() {
        return state.pagetitle;
    }
}

export default {
    state,
    getters
}
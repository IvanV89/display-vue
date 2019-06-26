const state = {
    iframe: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3221.2899537906173!2d-86.77548238437899!3d36.15949821120022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8864665c985ed1ad%3A0xbfce4f8c6ee46a88!2s222+2nd+Ave+S%2C+Nashville%2C+TN+37201%2C+USA!5e0!3m2!1sen!2s!4v1552991690568"
}
const getters = {
    iframe() {
        return state.iframe;
    }
}

export default {
    state,
    getters
}
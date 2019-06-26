const state = {
    portfoliosection: `<h3 style="text-align:center;">A COUPE OF OUR FEATURED PROJECTS</h3>
        <p style="text-align:center;">
         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus, vel congue mauris.
         Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
         Suspendisse non urna mi, quis tincidunt eros.
         </p> `

}
const getters = {
    portfoliosection() {
        return state.portfoliosection;
    }
}

export default {
    state,
    getters
}
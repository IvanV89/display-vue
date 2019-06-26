const state = {
      mission: `<h3>Mission Statement</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
        Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
        Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
      </p>`,
      fun: ` <h3>Fun FActs</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Pellentesque eu erat lacus, vel congue mauris. Fusce velit justo, faucibus eu sagittis ac, gravida quis tortor.
        Suspendisse non urna mi, quis tincidunt eros. Nullam tellus turpis, fringilla sit amet congue ut, luctus a nulla.
        Donec sit amet sapien neque, id ullamcorper diam. Nulla facilisi. Pellentesque pellentesque arcu a elit congue lacinia.
      </p>`
      }

const getters = {
    mission(state) {
        return state.mission;
    },
    fun(state) {
        return state.fun;
    }

}

export default {
    state,
    getters
}
const state = {
    projects: [
        {
          category: "print",
          name: "Bill Gates",
          description: "",
          url: "images/1.png"
        },
        {
          category: "print",
          name: "aaaaaaaaa",
          url: "images/2.png"
        },
        {
          category: "print",
          name: "Bbbbbbbb",
          url: "images/3.png"
        },
        {
          category: "web",
          name: "ccccccccc",
          url: "images/4.png"
        },
        {
          category: "web",
          name: "ddddddd",
          url: "images/5.png"
        },
        {
          category: "web",
          name: "eeeeeeee",
          url: "images/6.png"
        },
        {
          category: "applications",
          name: "ffffffffff",
          url: "images/7.png"
        },
        {
          category: "applications",
          name: "ggggggggg",
          url: "images/8.png"
        },
        {
          category: "applications",
          name: "kajadkssakk",
          url: "images/9.png"
        }
      ]
}
const getters = {
    projects() {
        return state.projects;
    }

}

export default {
    state,
    getters
}
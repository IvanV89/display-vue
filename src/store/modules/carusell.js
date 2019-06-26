const state = {
    images: [
        { url: "/images/4.png" },
        { url: "/images/3.png" },
        { url: "/images/2.png" },
        { url: "/images/5.png" },
        { url: "/images/6.png" },
        { url: "/images/1.png" },
        { url: "/images/7.png" },
        { url: "/images/8.png" },
        { url: "/images/9.png" }
      ],
      items: [
        {
          title: 'Dark UI Kit Freebie',
          text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
          vel congue mauris. Fusce velit justo, faucibus eu sagittis.`
        },
        {
          title: 'Lorem ipsum fadar',
          text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis excepturi,
          earum quia molestias magni quis.`
        },
        {
          title: 'Lorem ipsum dolor sit amet',
          text: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis veritatis autem, molestias culpa maxime ducimus
          distinctio, doloremque odit minus tempore possimus assumenda ullam optio dicta totam nihil repellat, ex rem.`
        },
        {
          title: 'Lorem ipsum',
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. A cumque adipisci, laborum fugit illum nesciunt
          temporibus facilis iure autem ipsam vel voluptate dicta earum consequuntur voluptates.`
        },
        {
          title: 'Lorem ipsum dolor',
          text: `Sapiente aspernatur ab dignissimos,
          dolore repudiandae. Incidunt vero adipisci repudiandae iure nihil.`
        },
        {
          title: 'Lorem',
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. A cumque adipisci, laborum fugit illum nesciunt
          temporibus.`
        },
        {
          title: 'Fusce velit justo',
          text: `Fusce velit justo, faucibus eu sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eu erat lacus,
          vel congue mauris.`
        },
        {
          title: 'Incidunt vero',
          text: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.`
        },
      ]

    }
const getters = {
  images(state) {
      return state.images;
  },
  items(state) {
      return state.items;
  }
}

export default {
    state,
    getters
}
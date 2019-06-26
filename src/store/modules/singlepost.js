import db from '../../firebase/init';

const state = {
    singlepost: {},
  }

  const getters = {
    singlepost(state) {
        return state.singlepost
    }
}

const mutations = {
    singlepost(state, payload) {
          state.singlepost = payload
    }
   }

   const actions = {
    async getSinglePost({commit}, payload) {
        let post = {};
        await db.collection('blog').doc(payload).get().then(doc => {
            post = doc.data()
            post.id = doc.id
            commit('singlepost', post)
        })
    } 
   }
   export default {
    state,
    getters,
    actions,
    mutations
}
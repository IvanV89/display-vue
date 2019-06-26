import db from '../../firebase/init';

const state = {
    blogs: [],
    sort: "asc",
    lastBlogPost: ''
}
const getters = {
    blogs(state) {
        return state.blogs
    },
    lastBlogPost(state) {
        return state.lastBlogPost;
    }
}
const mutations = {
    setBlogs(state, payload) {
        state.blogs = payload
    },
    setSort(state, payload) {
        if (state.sort === 'asc') {
            return state.sort = 'desc'
        } else {
            return state.sort = 'asc'
        }
    },
    setlastBlogPost(state, payload) {
        state.lastBlogPost = payload
    },
    setEmptyBlog(state,payload) {
        state.blogs=payload;
    }
}
const actions = {
    getBlogs({ commit,state }, config) {
        let query = db.collection("blog").orderBy('date', state.sort);
        if (config && config.loadMore) {
            query = query.startAfter(state.lastBlogPost)
        }
        query
            .limit(2)
            .get()
            .then((snapshot) => {
                let blogs = []
                let lastBlogPost= snapshot.docs[snapshot.docs.length - 1]
                // 
                if (config && config.loadMore) {
                    blogs = state.blogs;
                }
                snapshot.docs.forEach(doc => {
                    blogs.push({ ...doc.data(), id: doc.id });
                });
                // console.log(blogs);
                commit("setBlogs", blogs);
                commit('setlastBlogPost', lastBlogPost);
            });
    },
    emptyBlog({ commit }, payload) {
        commit('setEmptyBlog', payload)
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}


// 4ztSmABxWcruVkJ
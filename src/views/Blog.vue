<template>
  <div>
    <div>
      <Pagetitle :text="text"/>
    </div>
    <div class="container">
      <div id="blog"></div>
      <router-link
        class="add-post"
        tag="button"
        @click="NeWPost()"
        to="/BlogPost"
        exact
      >ADD NEW POST</router-link>

      <input class="search" type="text" v-model="search" placeholder="search blogs">

      <button class="sort-btn" @click="sort()">
        <img src="https://img.icons8.com/color/48/000000/sorting-arrows.png">
      </button>

      <div class="blog" v-for="(blog, index) in filteredBlogs" :key="index">
        <button @click="deletePost(blog.id)" v-if="user" class="btn-dlt">DELETE</button>
        <router-link :to="'/singlepost/' + blog.id">
          <router-link :to="'/editpost/' + blog.id" v-if="user" class="btn btn-warning">EDIT</router-link>
          <h1>{{blog.title}}</h1>
          <div class="blog-post">
            <img :src="blog.url">
            <div>{{blog.text | snippet | strip}}</div>
          </div>
          <div class="date-format">
            <span>{{ formatDate(blog.date.toDate()) }}</span>

            <div class="publish">
              <p v-if="blog.publish == false">Unpublished</p>
            </div>
          </div>
          <div class="line-blog"></div>
        </router-link>
      </div>
    </div>
    <div class="text-center">
      <button class="load" @click="loadMore()">Load More</button>
    </div>
  </div>
</template>

<script>
import Swal from "sweetalert2";
import Pagetitle from "@/components/Pagetitle.vue";
import firebase from "firebase";
import db from "@/firebase/init";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
export default {
  name: "Blog",
  components: {
    Pagetitle
  },
  data() {
    return {
      text: " my blog",
      id: "",
      title: "",
      date: "",
      search: "",
    };
  },
  computed: {
    blogs() {
      return this.$store.getters.blogs;
    },
    filteredBlogs: function() {
      return this.blogs.filter(blog => {
        return blog.title.toLowerCase().match(this.search.toLowerCase());
      });
    }
  },
  created() {
    this.$store.dispatch("getBlogs",{
      loadMore: false
    });

    if (firebase.auth().currentUser) {
      this.user = true;
    }
  },
    // beforeDestroy() {
    //   this.$store.dispatch("emptyBlog",[])
    // },
  methods: {
    formatDate(date) {
      return moment(date).format("DD/MM/YYYY");
    },
    deletePost(id) {
      Swal.fire({
        title: "Are you sure?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2ecc71",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(result => {
        if (result.value) {
          db.collection("blog")
            .doc(id)
            .delete();
          Swal.fire("Deleted!", "Your post has been deleted.", "success");
        }
      });
    },
      loadMore() {
      this.$store.dispatch("getBlogs",{
        loadMore:true
      });
    },
    sort() {
      this.$store.commit("setSort");
      this.$store.dispatch("getBlogs");
    },
  
  }
};
</script>

<style>
.container {
  width: 970px;
}
.add-post {
  width: 150px;
  height: 50px;
  background-color: #2ecc71;
  border: none;
  color: white;
  margin-bottom: 30px;
}
.blog {
  margin-bottom: 20px;
}
.blog h1 {
  font-size: 30px;
  width: 940px;
}
.blog img {
  width: 400px;
  height: 200px;
  padding-right: 20px;
}

.blog-post {
  display: inline;
  display: flex;
}
.blog a:hover {
  text-decoration: none;
  cursor: pointer;
}
.btn-dlt {
  float: right;
  background-color: red;
  color: white;
  border: none;
  border-radius: 5px;
  width: 80px;
  height: 40px;
}
.btn-warning {
  color: white !important;
  background-color: #2ecc71 !important;
  border: none;
  height: 40px;
  width: 80px;
}
.line-blog {
  width: 100%;
  height: 3px;
  background-color: #2ecc71;
  margin: 10px auto auto auto;
  cursor: none;
}
.date-format {
  display: flex;
}
.publish {
  margin-left: 15px;
  color: gray !important;
}
.search {
  width: 100%;
  height: 50px;
  margin-top: 10px;
  margin-bottom: 30px;
  border-color: #2ecc71;
  border-radius: 5px;
}
.sort-btn {
  margin-bottom: 10px;
  background-color: #2ecc71;
  border: none;
  width: 80px;
  border-radius: 5px;
}
.load {
  color: white;
  background-color: #2ecc71;
  border: none;
  margin-top: 10px;
  border-radius: 3px;
  height: 40px;
}
.button:focus {
  outline: none;
}
</style>

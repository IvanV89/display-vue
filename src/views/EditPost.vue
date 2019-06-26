<template>
  <div class="container">
    <div>
      <p class="edit">EDIT POST</p>
    </div>
    <div class="update-post">
      <!-- TITLE INPUT -->
      <label class="ck-title">Title</label>
      <input class="ck-title" v-model.trim="post.title" type="text">

      <!-- URL INPUT -->
      <label class="ck-url">Image URL</label>
      <input class="ck-url" v-model="post.url" type="text">

      <!-- TEXT INPUT -->
      <label class="ck-textarea">Textarea</label>
      <vue-ckeditor v-model="post.text"/>

      <!-- CHECKBOX -->
      <b-form-checkbox class="check" v-model="publish" value="Published"></b-form-checkbox>
      <div>{{publish}}</div>

      <!-- DATE -->
      <label for="date">Select Date</label>
      <datepicker v-model="date"></datepicker>

      <button class="btn-save" @click="editPost()">SAVE</button>
      <button class="btn-close" @click="editPost()">CLOSE</button>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import VueCkeditor from "vue-ckeditor2";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
export default {
  name: "EditPost",
  components: {
    VueCkeditor,
    Datepicker
  },
  firebase: {
    blog: db.collection("blog")
  },
  data() {
    return {
      post: {},
      publish: false,
      date: Date.now()
    };
  },

  created() {
    db.collection("blog")
      .doc(this.$route.params.id)
      .onSnapshot(doc => {
        this.post = {
          title: doc.data().title,
          text: doc.data().text,
          url: doc.data().url,
          id: doc.id
        };
      });
  },
  methods: {
    editPost() {
      var date1 = moment(this.date)
        .utc()
        .startOf("day")
        .format();
      var date2 = new Date(date1);
      db.collection("blog")
        .doc(this.$route.params.id)
        .set(this.post);
      publish: this.publish;
      date: date2;
      this.$router.push("/blog");
    }
  }
};
</script>

<style>
.btn-save {
  background-color: #2ecc71;
  border: none;
  color: white;
  height: 40px;
  width: 120px;
  margin-top: 10px;
  border-radius: 5px;
}
.btn-close {
  float: right;
  margin-top: 10px;
  background-color: #2ecc71;
  color: white;
  border: none;
  height: 40px;
  width: 120px;
  border-radius: 5px;
}
.update-post {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 40px;
}
.edit {
  color: #8a8888;
  font-family: "Helvetica";
  font-size: 20px;
}
</style>


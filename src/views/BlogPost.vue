<template>
  <div class="container">
    <div id="blog">
      <p class="addd">ADD NEW BLOG POST</p>
    </div>
    <div class="new-post">
      <form @submit.prevent="addBlogs">
        <div></div>
        <!-- TITLE INPUT -->
        <label class="ck-title">Title</label>
        <input class="ck-title" v-model.trim="title" type="text">
        <div v-if="$v.title.$error">
          <p class="error-message" v-if="!$v.title.required">Title is required</p>
        </div>

        <!-- URL INPUT -->
        <label class="ck-url">Image URL</label>
        <input class="ck-url" v-model="url" type="text">
        <div v-if="$v.url.$error">
          <p class="error-message" v-if="!$v.url.required">Image is required</p>
        </div>

        <!-- TEXT INPUT -->
        <label class="ck-textarea">Textarea</label>
        <vue-ckeditor v-model="text"/>
        <div v-if="$v.text.$error">
          <p
            class="error-message"
            v-if="!$v.text.required"
            style="margin-top: 20px;"
          >Text is required</p>
        </div>
        <p class="error-message" v-if="feedback">{{feedback}}</p>

        <!-- CHECKBOX -->
        <b-form-checkbox class="check" v-model="publish" value="Published"></b-form-checkbox>
        <div>{{publish}}</div>

        <!-- DATE -->
        <label for="date">Select Date</label>
        <datepicker v-model="date"></datepicker>

        <button class="btn-submit" :disabled="submited === 'PENDING'" type="submit">ADD POST</button>
      </form>
    </div>
  </div>
</template>

<script>
import db from "@/firebase/init";
import { required } from "vuelidate/lib/validators";
import VueCkeditor from "vue-ckeditor2";
import Datepicker from "vuejs-datepicker";
import moment from "moment";
export default {
  name: "BlogPost",
  components: {
    VueCkeditor,
    Datepicker
  },
  data() {
    return {
      title: "",
      text: "",
      url: "",
      submitted: false,
      submited: "",
      feedback: null,
      date: Date.now(),
      publish: false
    };
  },
  validations: {
    title: {
      required
    },
    url: {
      required
    },
    text: {
      required
    }
  },
  methods: {
    addBlogs() {
      var date1 = moment(this.date)
        .utc()
        .startOf("day")
        .format();
      var date2 = new Date(date1);
      this.submited = "PENDING";
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.feedback = "All fields are required!";
        this.submited = "";
      } else {
        this.submited = "PENDING";
        db.collection("blog")
          .add({
            title: this.title,
            text: this.text,
            url: this.url,
            date: date2,
            publish: this.publish
          })
          .then(() => {
            this.$router.push({ path: "/blog" });
            this.submited = "";
          });
      }
    }
  }
};
</script>

<style>
.btn-submit {
  background-color: #2ecc71;
  border: none;
  color: white;
  height: 40px;
  width: 120px;
  margin-top: 10px;
}
.ck-title {
  width: 100%;
  font-size: 20px;
  color: gray;
  border-radius: 5px;
  margin-bottom: 10px;
}
.ck-url {
  width: 100%;
  color: gray;
  border-radius: 5px;
  margin-bottom: 10px;
}
.ck-textarea {
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
}
.new-post {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 40px;
}
#blog {
  font-size: 20px;
  color: gray;
  margin-bottom: 10px;
}
.check {
  padding: 10px;
}
</style>

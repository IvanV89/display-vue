<template>
  <b-container>
    <b-row>
      <b-col>
        <h4>CONTACT FORM</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tincidunt dolor et tristique bibendum. Aenean sollicitudin vitae dolor ut posuere.</p>
        <form class="form" @submit.prevent="submit">
          <div class="input">
            <label for="name"></label>
            <input
              :class="{ error: $v.name.$error }"
              type="text"
              id="name"
              placeholder="Name"
              v-model="name"
              @blur="$v.name.$touch()"
              autocomplete="off"
            >

            <p
              class="error-message"
              v-if="!$v.name.required && $v.name.$dirty"
            >Name must not be empty.</p>
            <p
              class="error-message"
              v-if="!$v.name.minLength"
            >You cannot enter less than 3 characters</p>
          </div>

          <div class="input">
            <label for="email"></label>
            <input
              :class="{ error: $v.email.$error }"
              type="email"
              id="email"
              placeholder="Email Address"
              @blur="$v.email.$touch()"
              autocomplete="off"
              v-model="email"
            >
            <p class="error-message" v-if="!$v.email.email">Please enter a valid email address</p>
            <p
              class="error-message"
              v-if="!$v.email.required && $v.email.$dirty"
            >Email must not be empty.</p>
          </div>

          <div class="input">
            <label for="subject"></label>
            <input
              :class="{ error: $v.subject.$error}"
              type="text"
              id="subject"
              placeholder="Subject"
              v-model="subject"
              @blur="$v.subject.$touch()"
            >
            <p
              class="error-message"
              v-if="!$v.subject.required && $v.subject.$dirty"
            >Subject must not be empty.</p>
          </div>

          <div class="input">
            <textarea
              :class="{ error: $v.textarea.$error}"
              class="text-area"
              rows="10"
              maxlength="200"
              @blur="$v.textarea.$touch()"
              v-model="textarea"
            ></textarea>
            <p
              class="error-message"
              v-if="!$v.textarea.required && $v.textarea.$dirty"
            >Textarea must not be empty.</p>

            <p
              class="error-message"
              v-if="!$v.textarea.minLength"
            >You cannot enter less than 5 characters</p>
          </div>
          <div>
            <vue-recaptcha
              class="recaptcha"
              sitekey="6LdKW5UUAAAAAC6foMBDpclZplysFeqhSy5GldXT"
              @verify="onVerify()"
            ></vue-recaptcha>
          </div>

          <button :disabled="submit === 'ERROR'" type="submit" class="btn-contact">SEND MESSAGE</button>
        </form>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
import {
  required,
  email,
  minLength,
  maxLength
} from "vuelidate/lib/validators";
export default {
  name: "Contactform",
  components: {
    VueRecaptcha
  },
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      textarea: "",
      VueRecaptcha: false,
      check: false
    };
  },
  validations: {
    email: {
      required,
      email
    },
    name: {
      minLength: minLength(3),
      required
    },
    subject: {
      required
    },
    textarea: {
      minLength: minLength(5),
      required
    }
  },
  methods: {
    submit() {
      this.submitted = true;
      //stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$error) {
        return;
      }
    }
  }
};
</script>

<style>
.error {
  border: 2px solid red !important;
}
.error-message {
  color: red;
}
input:focus {
  outline: none;
}

.input {
  padding: 5px;
  padding-left: 0;
}
.form {
  display: inline-block;
}

input {
  padding: 5px;
  padding-right: 200px;
  border: 2px solid #8a8888;
}
.text-area {
  width: 560px;
  height: 221px;
  border: 2px solid #8a8888;
}
.btn-contact {
  width: 140px;
  height: 40px;
  font-weight: 600;
  border: none;
  background-color: rgb(45, 204, 114);
  color: white;
  margin-right: 120px;
  cursor: pointer;
  margin-top: -10px;
}

h4 {
  font-weight: normal;
}
.recaptcha {
  margin-top: 50px;
}
</style>

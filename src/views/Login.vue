<template>
  <div>
    <Pagetitle :text="text"/>
    <div class="container">
      <div class="login">
        <form @submit.prevent="logIn">
          <p>Let's create a new account!</p>
          <hr>

          <!-- EMAIL INPUT -->
          <label for="email" class="login-email">Email</label>
          <input
            :class="{ error: $v.email.$error }"
            type="email"
            id="email"
            placeholder="Email"
            @blur="$v.email.$touch()"
            v-model="email"
          >
          <p class="error-message" v-if="!$v.email.required">Please enter a valid email address</p>

          <!-- PASSWORD INPUT -->
          <label for="psw" class="login-password">Password</label>
          <input
            :class="{ error: $v.password.$error }"
            type="password"
            id="password"
            placeholder="Password"
            @blur="$v.password.$touch()"
            v-model="password"
          >
          <p class="error-message" v-if="!$v.password.required">Please enter a password</p>

          <button>Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Pagetitle from "@/components/Pagetitle.vue";
import db from "@/firebase/init";
import firebase from "firebase";
import "firebase/auth";
import { required, email, password } from "vuelidate/lib/validators";
export default {
  name: "Login",
  components: {
    Pagetitle
  },
  data() {
    return {
      email: "test@example.com", // TODO: Isprazni ovoo
      password: "123456",
      text: "login"
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    logIn: function() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(user => {
              this.$router.replace("/blog");
              this.$router.go({ path: this.$router.path });
         })
        .catch(error => {
          this.feedback = error.message;
        });
    }
  }
};
</script>

<style scoped>
.container {
  padding: 20px;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border-radius: 5px;
  color: gray;
}
input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border-radius: 5px;
  color: gray;
}
hr {
  border: 1px solid gray;
  margin-bottom: 25px;
}
button {
  background-color: gray;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
button:hover {
  opacity: 0.7;
}

.error {
  color: gray !important;
}
.login {
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 60px;
}
.login-email {
  color: gray;
  font-size: 20px;
  margin-bottom: 10px;
}
.login-password {
  color: gray;
  font-size: 20px;
  margin-bottom: 10px;
}
</style>

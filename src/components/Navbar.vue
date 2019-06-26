<template>
  <b-navbar>
    <b-navbar-nav v-for="navLink in navLinks" :key="navLink.index">
      <b-nav-item :to="navLink.path">{{ navLink.name }}</b-nav-item>
    </b-navbar-nav>
    <router-link v-if="!user" class="meny" to="/login">LogIn</router-link>
    <router-link v-if="!user" class="menyy" to="/register">Register</router-link>
    <a v-if="user" @click="signout" class="meny">Sign Out</a>
  </b-navbar>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Navbar",
  data() {
    return {
      user: false
    };
  },
  created() {
    if (firebase.auth().currentUser) {
      this.user = true;
    }
  },
  computed: {
    navLinks() {
      return this.$store.getters.navLinks;
    }
  },
  methods: {
    signout: function() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("blog");
          this.$router.go({ path: this.$router.path });
        });
    }
  }
};
</script>

<style>
.navbar {
  padding-left: 0 !important;
  margin-bottom: 13px;
}

.navbar-expand .navbar-nav .nav-link {
  padding-left: 0 !important;
  margin-right: 21px;
}

.navbar-light .navbar-nav .nav-link {
  font-family: "Novecentosanswide-DemiBold";
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
}
.navbar-light .navbar-nav .nav-link:hover {
  color: #2ecc71 !important;
}

a.router-link-exact-active {
  color: #2ecc71 !important;
}
.meny {
  margin-left: 485px;
  text-decoration: none !important;
  font-family: "Novecentosanswide-DemiBold";
  font-size: 18px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
}
.menyy {
  margin-left: 20px;
  text-decoration: none !important;
  font-family: "Novecentosanswide-DemiBold";
  font-size: 18px;
  font-weight: bold;
  color: gray;
  cursor: pointer;
}
a {
  color: gray !important;
}
</style>

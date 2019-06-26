<template>
  <section class="footer">
    <section class="footer-background">
      <b-container>
        <b-row>
          <b-col>
            <h4>{{ text }}</h4>
          </b-col>
          <b-col>
            <Button :btn="btn" class="buts"/>
          </b-col>
        </b-row>
      </b-container>
    </section>
    <section class="footer-inside">
      <b-container>
        <b-row>
          <b-col>
            <p>{{ txt }}</p>
          </b-col>
          <b-col>
            <nav class="route">
              <ul>
                <li>
                  <router-link to="/">HOME/</router-link>
                </li>
                <li>
                  <router-link to="/about">ABOUT/</router-link>
                </li>
                <li>
                  <router-link to="/work">WORK/</router-link>
                </li>
                <li>
                  <router-link to="/contact">CONTACT</router-link>
                </li>
              </ul>
            </nav>
          </b-col>
        </b-row>
      </b-container>
    </section>
  </section>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Footer",
  components: {
    Button
  },
  data() {
    return {
      text: "are you ready to be blown away",
      txt: "copyright 2013 display. all rights reserved.",
      btn: "click here to find out".toUpperCase()
    };
  }
};
</script>

<style scoped>
.footer {
  position: absolute;
bottom: -170px;
width: 100%;
/* Set the fixed height of the footer here */
height: 140px;

}
.footer-background {
  background-color: #332f30;
  color: white;
  height: 140px;
}
h4 {
  color: white !important;
  text-transform: uppercase;
  padding-top: 15px;
}
p {
  text-transform: uppercase;
  color: gray;
}
.buts {
  float: right;
  margin-top: 30px;
}
.buts p {
  text-transform: uppercase;
}
.footer-inside {
  background-color: #efefef;
  height: 60px;
}
.footer-inside p {
  margin-top: 20px;
  font-size: 14px;
}
.route {
  float: right;
}
.route li a {
  color: #a5a5a5;
  font-size: 14px;
  text-decoration: none;
}
.route ul {
  padding-top: 15px;
}
.route li {
  padding-right: 16px;
}
.route li a:hover {
  color: #2ecc71;
}
</style>

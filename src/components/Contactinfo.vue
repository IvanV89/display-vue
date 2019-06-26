<template>
  <b-container>
    <b-row>
      <b-col class="info">
        <h4>CONTACT INFO</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Donec tincidunt dolor et tristique bibendum.</p>
        <table style="width: 100%">
          <tr>
            <td>
              <b>email</b>:infodisplay.com
            </td>
          </tr>
          <tr>
            <td>
              <b>phone</b>:1.306.222.4545
            </td>
          </tr>
          <br>
          <tr>
            <td>222 2nd Ave South</td>
          </tr>
          <tr>
            <td>Saskabush,SK S7M 1T6</td>
          </tr>
        </table>

        <h4>STORE HOURSE</h4>

        <table style="width: 100%">
          <tr>
            <th>Monday-Thursday</th>
            <th>8 am- 5 pm</th>
          </tr>
          <tr>
            <th>Friday</th>
            <th>8 am- 6 pm</th>
          </tr>
          <tr>
            <th>Saturday</th>
            <th>9 am- 5 pm</th>
          </tr>
          <tr>
            <th>Sunday& Holidays</th>
            <th>Closed</th>
          </tr>
        </table>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "Contactinfo"
};
</script>

<style>
.info table,
th {
  color: #8a8888;
  font-weight: normal;
  font-size: 16px;
}
h4 {
  font-weight: normal !important;
}
</style>

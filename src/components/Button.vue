<template>
  <div class="text-center">
    <button type="button" class="btn btn-success">{{ btn }}</button>
  </div>
</template>

<script>
export default {
  name: "Button",
  props: ["btn"]
};
</script>

<style>
.btn-success,
.btn-success:hover {
  background-color: #2ecc71 !important;
  border-color: #2dcc70;
  border-radius: 0 !important;
  margin-top: 20px;
  margin-right: 10px;
  -moz-animation: fadein 2s; /* Firefox */
  -webkit-animation: fadein 2s; /* Safari and Chrome */
  -o-animation: fadein 2s; /* Opera */
}
.btn-success:not(:disabled):not(.disabled):active,
.btn-success:not(:disabled):not(.disabled).active,
.show > .btn-success.dropdown-toggle {
  background-color: #2dcc70;
  border-color: #2dcc70;
  border-radius: 0;
}
</style>

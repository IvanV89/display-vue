<template>
  <div>
    <vue-ckeditor 
      v-model="content" 
/>
  </div>
</template>

<script>
import VueCkeditor from 'vue-ckeditor2';

export default {
  components: { VueCkeditor },
  name: 'Editor',
  data() {
    return {
      content: '',
    };
  },
  methods: {
    onBlur(evt) {
      console.log(evt);
    },
    onFocus(evt) {
      console.log(evt);
    },
    onContentDom(evt) {
      console.log(evt);
    },
    onDialogDefinition(evt) {
      console.log(evt);
    },
    onFileUploadRequest(evt) {
      console.log(evt);
    },
    onFileUploadResponse(evt) {
      console.log(evt);
    }
  }
};
</script>
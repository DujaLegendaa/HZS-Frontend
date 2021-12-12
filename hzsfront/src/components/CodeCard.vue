<template>
  <div id="base">
    <p>For: {{ forUser }}</p>
    <p>Points: {{ points }}</p>
    <img :src="url" />
  </div>
</template>

<script>
// if activated add custom css
const axios = require("axios");
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    forUser: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    url() {
      console.log(this);
      console.log(
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
          this.id
      );
      return (
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
        this.id
      );
    },
  },
};
</script>

<style scoped>
#base {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
}
</style>

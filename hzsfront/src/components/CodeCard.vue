<template>
  <div id="base">
    <p>Za: {{ forUser }}</p>
    <p>Poeni: {{ points }}</p>
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
    return {
      forUser: "",
    };
  },
  computed: {
    url() {
      var baseurl = window.location.origin;
      return (
        "https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=" +
        baseurl +
        "/codes/" +
        this.id +
        "/activate"
      );
    },
  },
  mounted() {
    let that = this;
    var config = {
      method: "get",
      url: process.env.VUE_APP_URL + "codes/" + this.id + "/forUser",
      headers: {
        Authorization: "Bearer " + this.$store.getters.token,
      },
    };
    axios(config)
      .then(function (response) {
        that.forUser = response.data.data.doc._forUser.email;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style scoped>
#base {
  display: flex;
  flex-direction: column;
  border: 1px solid gray;
}
img {
  height: 300px;
  width: 300px;
}
</style>

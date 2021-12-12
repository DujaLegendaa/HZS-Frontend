<template>
  <section>
    <user-short
      v-for="user in userList"
      v-bind:key="user._id"
      :id="user._id"
      :name="user.name"
      :surname="user.surname"
      :city="user.city"
    ></user-short>
  </section>
</template>

<script>
import UserShort from "./../components/UserShort.vue";
const axios = require("axios");
export default {
  components: { UserShort },
  data() {
    return {
      userList: [],
    };
  },
  mounted() {
    const that = this;
    var config = {
      method: "get",
      url:
        process.env.VUE_APP_URL +
        "events/" +
        this.$route.params.id +
        "/participants",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        that.userList = response.data.data.participants;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>

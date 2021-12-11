<template>
  <section>
    <event-short
      v-for="event in eventList"
      v-bind:key="event._id"
      :id="event._id"
      :city="event.city"
      :date="event.date"
      :numParticipants="event.numParticipants"
      :orgName="event.orgName"
    ></event-short>
  </section>
</template>

<script>
import EventShort from "./../components/EventShort.vue";
const axios = require("axios");
export default {
  components: { EventShort },
  data() {
    return {
      eventList: [],
    };
  },
  mounted() {
    const that = this;
    var config = {
      method: "get",
      url: process.env.VUE_APP_URL + "events",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        that.eventList = response.data.data.docs;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>

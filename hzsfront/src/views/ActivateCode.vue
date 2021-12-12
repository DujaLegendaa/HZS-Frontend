<template>
  <div>
    <q-btn @click="click()">Aktiviraj kod</q-btn>
  </div>
</template>

<script>
import CodeCard from "../components/CodeCard.vue";
const axios = require("axios");
export default {
  components: { CodeCard },
  methods: {
    async click() {
      const config = {
        method: "post",
        url:
          process.env.VUE_APP_URL +
          "codes/" +
          this.$route.params.id +
          "/consume",
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        await axios(config);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style></style>

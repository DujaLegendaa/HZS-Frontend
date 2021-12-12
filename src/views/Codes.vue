<template>
  <div id="based">
    <code-card
      class="c"
      v-for="code in codeList"
      :key="code._id"
      :id="code._id"
      :points="code.points"
    ></code-card>
  </div>
</template>

<script>
import CodeCard from "./../components/CodeCard.vue";
const axios = require("axios");
export default {
  components: { CodeCard },
  data() {
    return {
      codeList: [],
    };
  },
  mounted() {
    const that = this;
    var config = {
      method: "get",
      url:
        process.env.VUE_APP_URL + "events/" + this.$route.params.id + "/codes",
      headers: {
        Authorization: "Bearer " + this.$store.getters.token,
      },
    };
    axios(config)
      .then(function (response) {
        that.codeList = response.data.data.doc;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
.c {
  background-color: white;
  width: fit-content;
  padding: 2ch;
}
#based {
  margin: 2% 20%;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>

<template>
  <div id="d">
    <q-btn @click="click()" class="btn-grad">Aktiviraj kod</q-btn>
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

<style scoped>
.btn-grad {
  background-image: linear-gradient(
    to right,
    #63c982 0%,
    #6bd1c7 51%,
    #63c982 100%
  );
}

.btn-grad {
  margin: 10px;
  align-self: center;
  width: 400px;
  height: 70px;
  text-align: center;
  text-transform: uppercase;
  font-size: 32px;
  transition: 0.5s;

  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 5px;
}
#d {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>

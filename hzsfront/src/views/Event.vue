<template>
<error-alert v-if="errored" :title="errorMessage">
    <button @click="errored = false">Confirm</button>
  </error-alert>
  <h1 id="title-icon">
    <!-- dodati font awesome icon  and host name-->
    {{orgName}}
  </h1>
  <!-- Grad akcije-->
  <section>
    <span id="info">
      <h4>Description:</h4>
      <p id="description">{{ description }}</p>
    </span>
  </section>
</template>

<script>
const axios = require("axios");
export default {
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    city: {
      type: Date,
      required: true,
    },
    numParticipants: {
      type: Number,
      required: true,
    },
    orgName: {
      type: String,
      required: true,
    }
  },
  data() {
    return {
      loaded: false,
      errored: false,
      errorMessage: "",
      creator: false,
    };
  },
  methods: {
    async isCreator() {
      if (!this.$store.getters.loggedIn) return false;
      var config = {
        method: "get",
        url:
          process.env.VUE_APP_URL +
          "events/" +
          this.$route.params.id +
          "/isCreator",
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        const response = await axios(config);
        this.creator = response.data.data.isCreator;
      } catch (err) {
        this.errored = true;
        this.errorMessage = err.response.data.message;
      }
    },
    async deleteRecipe() {
      var config = {
        method: "delete",
        url: process.env.VUE_APP_URL + "events/" + this.$route.params.id,
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        await axios(config);
        this.$router.push("/events");
      } catch (err) {
        this.errored = true;
        this.errorMessage = err.response.data.message;
      }
    },
    editRecipe() {
      this.$router.push(this.$route.path + "/edit");
    },
  },
  mounted() {
    const that = this;
    var config = {
      method: "get",
      url: process.env.VUE_APP_URL + "events/" + this.$route.params.id,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        that.ingredients = response.data.data.doc.ingredients;
        that.isCreator().then(function () {
          that.loaded = true;
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped></style>

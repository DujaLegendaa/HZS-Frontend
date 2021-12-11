<template>
  <section id="info">
    <p id="name">Ime: {{ name }}</p>
    <p id="surname">Prezime: {{ surname }}</p>
    <p id="email">Email: {{ email }}</p>
    <p id="orgName" v-if="isOrganizer">Ime organizacije: {{ orgName }}</p>
    <p id="city">Grad: {{ city }}</p>
    <p id="points">Poeni: {{ points }}</p>
  </section>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      orgName: "",
      city: "",
      isOrganizer: false,
      points: 0,
    };
  },
  mounted() {
    const that = this;
    var config = {
      method: "get",
      url: process.env.VUE_APP_URL + "users/" + this.$store.getters.idUser,
      headers: {},
    };
    axios(config)
      .then(function (response) {
        const user = response.data.data.doc;
        that.name = user.name;
        that.surname = user.surname;
        that.email = user.email;
        that.orgName = user.organizationName;
        that.city = user.city;
        that.isOrganizer = user.role === "organizator";
        that.points = user.points;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style></style>

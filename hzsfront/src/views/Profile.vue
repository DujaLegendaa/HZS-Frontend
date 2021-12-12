<template>
  <section class="form">
    <h1>
      <!-- dodati font awesome icon  and host name-->
      {{ name }} {{ surname }}
    </h1>
    <p id="email">Email: {{ email }}</p>
    <p id="orgName" v-if="isOrganizer">Ime organizacije: {{ orgName }}</p>

    <p>Poeni: {{ points }}</p>
    <p>Grad: {{ city }}</p>
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

<style scoped>
h4 {
  margin: 1% 0 3%;
  font-size: 3ch;
  font-weight: 1000;
}

.form {
  display: grid;
  grid-column: 3fr;
  grid-column-gap: 0.3em;
  padding: 1% 3%;
  border: 0.2ch solid rgb(155, 155, 155);
  border-radius: 8px;
  margin: 1% 20%;
}

#description {
  width: 500px;
  height: 200px;
  overflow-y: auto;
  word-wrap: break-word;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

p {
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2ch;
  font-weight: 700;
  color: #3f7c51;
}

h1 {
  font-size: 4ch;
  font-weight: 1000;
  color: #63c982;
  height: 100%;
  margin: auto;
}
</style>

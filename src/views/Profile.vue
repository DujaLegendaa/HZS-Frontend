<template>
  <section class="form">
    <h1>
      <!-- dodati font awesome icon  and host name-->
      {{ name }} {{ surname }}
    </h1>
    <p id="email">Email: {{ email }}</p>
    <p id="orgName" v-if="isOrganizer">Ime organizacije: {{ orgName }}</p>
    <p>Grad: {{ city }}</p>

    <div class="sec-2">
      <span class="first">
        <p>SBB poeni:</p>
        <p>{{ points[0] }}</p>
      </span>

      <span class="second">
        <p>Gigatron poeni:</p>
        <p>{{ points[1] }}</p>
      </span>

      <span class="third">
        <p>Tehnomedia poeni:</p>
        <p>{{ points[2] }}</p>
      </span>
    </div>
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
.first,
.second,
.third {
  display: grid;
  padding: 2% 5%;
  border: 0.2ch solid rgb(155, 155, 155);
  border-radius: 8px;
}

.sec-2 {
  display: grid;
  margin: 3ch 0;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
}

h4 {
  margin: 1% 0 3%;
  font-size: 3ch;
  font-weight: 1000;
}

.form {
  display: grid;
  grid-column: 3fr;
  background-color: white;
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

<template>
  <div>
    <div id="icons" v-if="creator">
      <q-icon
        name="visibility"
        class="icon"
        @click="displayUsers"
        id="display"
      />
      <q-icon name="qr_code_2" class="icon" @click="generateQR" id="qr_code" />
      <q-icon name="edit" class="icon" @click="editEvent" id="edit" />
      <q-icon name="delete" class="icon" @click="deleteEvent" id="trash" />
    </div>
    <section class="form">
      <header>
        <div id="title-icon">
          <h1>
            <!-- dodati font awesome icon  and host name-->
            {{ orgName }}
          </h1>
        </div>
        <p id="city">{{ city }}</p>
      </header>

      <!-- Grad akcije-->
      <div id="info">
        <h4>Description:</h4>
        <p id="desc">{{ description }}</p>
      </div>

      <p id="participants">Broj učesnika:</p>
      <p id="num-participants">{{ numParticipants }}</p>

      <div id="btn" v-if="this.$store.getters.loggedIn && !creator">
        <q-btn
          type="Submit"
          @click="participate"
          :class="[{ activeClass: !isActive }]"
          class="btn-grad"
          style="
            border: none;
            width: 275px;
            font-weight: 750;
            letter-spacing: 0.2ch;
          "
        >
          {{ text }}
        </q-btn>
      </div>
    </section>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      id: "",
      orgName: "",
      city: "",
      description: "",
      loaded: false,
      errored: false,
      errorMessage: "",
      creator: false,
      isParticipatingBool: false,
      numParticipants: 0,
    };
  },
  computed: {
    text() {
      return this.isParticipatingBool ? "Odustani" : "Prijavi se";
    },
  },
  methods: {
    async participate() {
      const route = this.isParticipatingBool ? "/leave" : "/join";
      var config = {
        method: "post",
        url:
          process.env.VUE_APP_URL + "events/" + this.$route.params.id + route,
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        const response = await axios(config);
        window.location.reload();
      } catch (err) {
        this.errored = true;
        this.errorMessage = err.response.data.message;
      }
    },
    async isParticipating() {
      var config = {
        method: "get",
        url:
          process.env.VUE_APP_URL + "events/" + this.$route.params.id + "/join",
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        const response = await axios(config);
        this.isParticipatingBool = response.data.data.isParticipating;
      } catch (err) {
        this.errored = true;
        this.errorMessage = err.response.data.message;
      }
    },
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
    async doesParticipate() {},
    async deleteEvent() {
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
    generateQR() {
      this.$router.push(this.$route.path + "/codes");
    },
    editEvent() {
      this.$router.push(this.$route.path + "/edit");
    },
    displayUsers() {
      this.$router.push(this.$route.path + "/users");
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
        const ev = response.data.data.doc;
        that.numParticipants = ev.numParticipants;
        that.id = ev._id;
        that.orgName = ev.orgName;
        that.description = ev.description;
        that.city = ev.city;
        that.isCreator().then(function () {
          that.isParticipating().then(function () {
            that.loaded = true;
          });
        });
      })
      .catch(function (error) {
        console.log(error);
      });
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
  width: 275px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;

  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 5px;
}

#btn {
  display: flex;
  justify-content: center;
}

#participants {
  font-size: 2.5ch;
  font-weight: 600;
}

#num-participants {
  font-size: 2.3ch;
  font-weight: 500;
}

h4 {
  margin: 1% 0 3%;
  font-size: 3ch;
  font-weight: 1000;
}

.form {
  display: grid;
  background-color: white;
  grid-column: 3fr;
  grid-column-gap: 0.3em;
  padding: 1% 3%;
  border: 0.2ch solid rgb(155, 155, 155);
  border-radius: 8px;
  margin: 1% 20% 1% 20%;
}

#desc {
  width: 500px;
  height: 200px;
  border: 0.2ch solid rgb(155, 155, 155);
  padding: 1ch 1.5ch;
  border-radius: 8px;
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

h1 {
  font-size: 4.5ch;
  font-weight: 1000;
  color: #63c982;
  height: 100%;
  margin: auto;
}
#icons {
  display: flex;
  justify-content: flex-end;
  margin: 1% 20% 0;
}
#icons .icon {
  margin: 0.1ch 0.2ch;
  font-size: 40px;
  color: gray;
}

#trash:hover {
  transition: 0.3s ease;
  cursor: pointer;
  color: rgb(247, 75, 75);
}
#edit:hover {
  transition: 0.3s ease;
  cursor: pointer;
  color: rgb(71, 179, 179);
}
#qr_code:hover {
  transition: 0.3s ease;
  cursor: pointer;
  color: black;
}

#city {
  font-size: 3ch;
  padding-top: 1ch;
  color: #478d5c;
  font-weight: 600;
  display: flex;
  align-items: center;
}

#display:hover {
  transition: 0.3s ease;
  cursor: pointer;
  color: yellow;
}
</style>

<template>
<error-alert v-if="errored" :title="errorMessage">
    <button @click="errored = false">Confirm</button>
  </error-alert>
  <section class="form">
    <header>
      <div id="title-icon">
        <h1>
          <!-- dodati font awesome icon  and host name-->
          FROG BUFA BU
          {{orgName}}
        </h1>
      </div>
      <p>12312312{{grad}}</p>
    </header>

    <!-- Grad akcije-->
    <div id="info">
        <h4>Description:</h4>
        <p id="description">{{ description }}</p>
    </div>
    
    <div id="btn">
      <q-btn type="Submit" :class="[{ activeClass: !isActive }]"
        class="btn-grad"
        style="
          border: none;
          width: 275px;
          font-weight: 750;
          letter-spacing: 0.2ch;
        ">

          Participate
        </q-btn>
    </div>
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

<style scoped>

.btn-grad {
  background-image: linear-gradient(to right, #63c982 0%,  #6bd1c7  51%, #63c982  100%)
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

#btn{
  display: flex;
  justify-content: center;
}

h4{
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

#description{
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


header{
  display: flex;
  flex-direction: row;
  justify-content: space-between;

}

p{
  height: 100%;
  display: flex;
  align-items: center;
  font-size: 2ch;
  font-weight: 700;
  color: #3f7c51;
}
h1{
  font-size: 4ch;
  font-weight: 1000;
  color: #63c982;
  height: 100%;
  margin: auto;
}
</style>

<template>
  <div id="d">
    <div id="SBB" class="card">
      <h3>
        SBB
        <q-icon name="fas fa-leaf" v-if="bestSBB" id="leaf" />
      </h3>
      <h5>Organizovanih akcija: {{ sbb }}</h5>
    </div>
    <div id="Gigatron" class="card">
      <h3>
        Gigatron <q-icon name="fas fa-leaf" v-if="bestGigatron" id="leaf" />
      </h3>
      <h5>Organizovanih akcija: {{ gigatron }}</h5>
    </div>
    <div id="Technomedia" class="card">
      <h3>
        Technomedia
        <q-icon name="fas fa-leaf" v-if="bestTechnomedia" id="leaf" />
      </h3>
      <h5>Organizovanih akcija: {{ technomedia }}</h5>
    </div>
  </div>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      sbb: 0,
      gigatron: 0,
      technomedia: 0,
    };
  },
  computed: {
    bestSBB() {
      return this.sbb > this.gigatron && this.sbb > this.technomedia;
    },
    bestTechnomedia() {
      return this.technomedia > this.gigatron && this.technomedia > this.sbb;
    },
    bestGigatron() {
      return this.gigatron >= this.sbb && this.gigatron >= this.technomedia;
    },
  },
  mounted() {
    let that = this;
    const config = {
      method: "get",
      url: process.env.VUE_APP_URL + "users/getCompanies",
    };
    axios(config)
      .then(function (response) {
        that.sbb = response.data.data.sbb;
        that.gigatron = response.data.data.gigatron;
        that.technomedia = response.data.data.technomedia;
      })
      .catch(function (err) {
        console.log(err);
      });
  },
};
</script>

<style scoped>
h5 {
  text-align: center;
}
h3 {
  text-align: center;
}

.card {
  border: 1px solid gray;
  border-radius: 8px;
  margin: 0px 100px;
  height: 300px;
  width: 400px;
  background-color: white;
  padding: 1ch;
}

#d {
  display: flex;
  justify-content: space-between;
}

#leaf {
  font-size: 40px;
  color: rgb(245, 226, 58);
}

#leaf-div {
  display: flex;
  justify-content: center;
}
</style>

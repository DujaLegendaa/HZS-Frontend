<template>
  <section id="createevent">
    <h1>Kreiraj dogadjaj</h1>
    <q-form class="form" @submit.prevent="submit()">
      <p class="labele">Mesto okupljanja</p>
      <q-select
        outlined
        class="select"
        v-model="city"
        :options="selectOptions"
        label="Grad"
      />

      <div class="q-pa-md" style="max-width: 300px">
        <div class="labele">Datum</div>
        <q-input
          class="input"
          filled
          v-model="eventDay"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="eventDay">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="primary" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="labele">Opis dogadjaja</div>
      <textarea
        placeholder="Unesite opis dogadjaja"
        name="description"
        id="description"
        cols="30"
        rows="10"
        v-model="description"
      ></textarea>
      <p class="labele">Poeni po učesniku</p>
      <q-input v-model="pointsPerParticipant" class="input"></q-input>
      <p v-if="isActive" class="warnings">
        Sva polja moraju biti ispravno popunjena.
      </p>
      <q-btn
        class="btn-grad"
        type="Submit"
        :disabled="isActive"
        :class="[{ activeClass: !isActive }]"
      >
        Kreiraj
      </q-btn>
    </q-form>
  </section>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      city: "",
      eventDay: "",
      description: "",
      pointsPerParticipant: 0,
      selectOptions: [
        {
          label: "Kraljevo",
          value: "Kraljevo",
        },
        {
          label: "Beograd",
          value: "Beograd",
        },
        {
          label: "Kruševac",
          value: "Kruševac",
        },
        {
          label: "Jagodina",
          value: "Jagodina",
        },
        {
          label: "Požarevac",
          value: "Požarevac",
        },
        {
          label: "Novi Sad",
          value: "Novi Sad",
        },
        {
          label: "Smederevo",
          value: "Smederevo",
        },
        {
          label: "Sombor",
          value: "Sombor",
        },
        {
          label: "Užice",
          value: "Užice",
        },
        {
          label: "Obrenovac",
          value: "Obrenovac",
        },
        {
          label: "Pančevo",
          value: "Pančevo",
        },
      ],
    };
  },
  computed: {
    isActive() {
      return (
        this.city.length === 0 ||
        this.eventDay.length === 0 ||
        this.description.length === 0
      );
    },
  },
  methods: {
    async submit() {
      const config = {
        method: "post",
        url: process.env.VUE_APP_URL + "events",
        data: {
          city: this.city.value,
          date: this.eventDay,
          description: this.description,
          pointsPerParticipant: this.pointsPerParticipant,
        },
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        const response = await axios(config);
        console.log(response);
        const id = response.data.data.newDoc._id;
        this.$router.push(`/events/${id}`);
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>

#createevent {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}

.form {
  align-self: center;
  display: flex;
  flex-direction: column;
  width: 650px;
  border: 2px solid gray;
  padding: 2em;
  border-radius: 0.7em;
  background-color: rgb(255, 255, 255);
}

.labele {
  font-size: 2.5ch;
  color: rgb(51, 51, 51);
  font-weight: 700;
  align-self: baseline;
  margin-bottom: 1%;
}
.q-select {
  padding-top: 5%;
}
.q-pa-md {
  padding: 0 0 7%;
}

.select {
  all: unset;
  margin-top: 0;
  width: 300px;
  height: 100px;
}

.warnings {
  color: rgb(204, 50, 50);
  font-size: 1.5ch;
  font-weight: 750;
}
label {
  font-size: 2ch;
  color: rgb(46, 46, 46);
  font-weight: 700;
  align-self: baseline;
}
.btn-grad {
  background-image: linear-gradient(
    to right,
    #63c968 0%,
    #6bd1c7 51%,
    #63c968 100%
  );
}
.btn-grad {
  margin: 10px;
  margin-top:20px;
  align-self: center;
  width: 275px;
  height: 40px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 5px;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}

h1 {
  margin: 1ch 0 0.1ch;
  align-self: center;
  font-size: 8ch;
  font-weight: 700;
  color: #63d062;
}

textarea {
  margin-bottom: 2em;
  padding: 0.5em;
  height: 10em;
  background-color: rgb(250, 250, 250);
  border-radius: 0.3em;
}
</style>

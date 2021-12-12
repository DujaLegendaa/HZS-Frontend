<template>
  <section>
    <q-form @submit.prevent="submit()">
      <q-select v-model="city" :options="selectOptions" label="Grad" />

      <div class="q-pa-md" style="max-width: 300px">
        <q-input filled v-model="eventDay" mask="date" :rules="['date']">
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
      <q-input
        type="text"
        name="description"
        id="description"
        v-model="description"
        required
        placeholder="Unesite opis dogadjaja. "
      />
      <q-input
        type="number"
        name="pointsPerParticipant"
        id="pointsPerParticipant"
        v-model="pointsPerParticipant"
        placeholder="Unesite poene po ucesniku"
      />
      <p v-if="isActive" style="color: red">
        Sva polja trebaju biti ispravno popunjena.
      </p>
      <q-btn
        type="Submit"
        :disabled="isActive"
        :class="[{ activeClass: !isActive }]"
      >
        Submit
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

<style></style>

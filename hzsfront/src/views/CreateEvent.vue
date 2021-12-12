<template>
  <section id="createevent">
    <h1>Create event</h1>
    <q-form class="form" @submit.prevent='submit()'>
      <q-select
          outlined
          class="select"
          v-model="city"
          :options="selectOptions"
          label="Grad"
        />

      <div class="q-pa-md" style="max-width: 300px">
        <q-input class="input" filled v-model="eventDay" mask="date" :rules="['date']">
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
        class="description"
        style="width: 500px;
              height: 200px;
              overflow-y: auto;
              word-wrap: break-word; "
        v-model="description"
        required
        placeholder="Unesite opis dogadjaja. "
      />
      <p v-if="isActive" style="color: red">
        Sva polja trebaju biti ispravno popunjena.
      </p>
      <q-btn
        class="btn-grad"
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
export default {
  data() {
    return {
      city: "",
      eventDay: "",
      description: "",
      selectOptions: [
          {
              label:'Kraljevo',
              value:'Kraljevo'
          },
          {
              label:'Beograd',
              value:'Beograd'
          },
          {
              label:'Kruševac',
              value:'Kruševac'
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
      ]
    }
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
  width: 500px;
  border: 2px solid gray;
  padding: 2em;
  border-radius: 0.7em;
  background-color: rgb(255, 255, 255);
}

.q-select{
  padding-top: 5%;
}
.q-pa-md{
  padding: 0 0 7%;
}


.select {
  all: unset;
  margin-top: 0;
  width: 200px;
  height: 100px;
}

p {
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


</style>

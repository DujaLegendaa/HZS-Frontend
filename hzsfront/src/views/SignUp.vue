<template>
  <section id="signup">
    <h1>Sign up</h1>
    <q-form class="form" @submit.prevent="submit()">
      <label for="name">Ime: </label>
      <div class="input">
        <q-input
          type="text"
          name="name"
          class="input"
          id="name"
          v-model="name"
          placeholder="Unesite svoje ime: "
          required
        />
      </div>
      <label for="surname">Prezime: </label>
      <div class="input">
        <q-input
          type="text"
          name="surname"
          class="input"
          id="surname"
          v-model="surname"
          placeholder="Unesite svoje prezime: "
          required
        />
      </div>
      <div class="check-box">
        <q-checkbox
          dense
          v-model="organizator"
          val="Organizator"
          label="Organizator"
        />
      </div>
      <div v-if="organizator" class="input">
        <q-input
          type="password"
          name="passwordConfirm"
          class="input"
          id="passwordConfirm"
          v-model="passwordConfirm"
          placeholder="Unesite ime organizacije: "
          required
        />
      </div>
      <div class="select">
        <q-select
          outlined
          class="select"
          v-model="city"
          :options="selectOptions"
          label="Grad"
        />
      </div>

      <label for="email">Email: </label>
      <div class="input">
        <q-input
          type="text"
          name="email"
          class="input"
          id="email"
          v-model="email"
          required
          placeholder="Unesite svoj email: "
        />
      </div>
      <label for="password">Sifra: </label>
      <div class="input">
        <q-input
          type="password"
          name="password"
          class="input"
          id="password"
          v-model="password"
          placeholder="Unesite svoju sifru: "
          required
        />
      </div>
      <label for="passwordConfirm">Potvrdi sifru: </label>
      <div class="input">
        <q-input
          type="password"
          name="passwordConfirm"
          class="input"
          id="passwordConfirm"
          v-model="passwordConfirm"
          placeholder="Potvrdite sifru: "
          required
        />
      </div>
      <p v-if="isActive" style="color: red">
        Sva polja trebaju biti ispravno popunjena.
      </p>
      <div class="btn-grad">
        <q-btn
          type="Submit"
          style="
            border: none;
            width: 275px;
            font-weight: 700;
            letter-spacing: 0.2ch;
          "
          :disabled="isActive"
          :class="[{ activeClass: !isActive }]"
        >
          Submit
        </q-btn>
      </div>
    </q-form>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      organizator: false,
      surname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      city: "",
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
          label: "Krusevac",
          value: "Krusevac",
        },
        {
          label: "Jagodina",
          value: "Jagodina",
        },
        {
          label: "Pozarevac",
          value: "Pozarevac",
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
          label: "Uzice",
          value: "Uzice",
        },
        {
          label: "Obrenovac",
          value: "Obrenovac",
        },
        {
          label: "Pancevo",
          value: "Pancevo",
        },
      ],
    };
  },

  computed: {
    isActive() {
      return (
        this.email.length === 0 ||
        this.name.length === 0 ||
        this.surname.length === 0 ||
        this.password.length < 8 ||
        this.passwordConfirm != this.password ||
        this.city === 0
      );
    },
  },
  methods: {
    async submit() {
      //dodati u bazu username, email, password, passwordConfirm
      try {
        await this.$store.dispatch("signup", {
          name: this.name,
          surname: this.surname,
          email: this.email,
          city: this.city,
          role: this.organizator ? "organizator" : "user",
          password: this.password,
          passwordConfirm: this.passwordConfirm,
        });
      } catch (err) {
        this.errored = true;
        this.errorMessage = err.data.message;
      }
      window.location.reload();
    },
    logInError() {
      return (
        this.email.length === 0 ||
        this.username.length === 0 ||
        this.password.length < 8 ||
        this.passwordConfirm != this.password
      );
    },
    nameError() {
      return this.name.length === 0;
    },
    surnameError() {
      return this.surname.length === 0;
    },
    emailError() {
      return this.email.length === 0;
    },
    passwordLengthError() {
      return this.password.length < 8;
    },
    passwordMatch() {
      return this.passwordConfirm != this.password;
    },
  },
};
</script>

<style scoped>
#signup {
  display: flex;
  flex-direction: column;
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

.select {
  all: unset;
  margin-top: 0;
  width: 200px;
  height: 100px;
}
.input {
  all: unset;
  margin-bottom: 40px;
  margin-top: 0;
  padding: 0;
  height: 30px;
  width: 400px;
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

.check-box {
  margin: 1ch 0 2ch;
}
</style>

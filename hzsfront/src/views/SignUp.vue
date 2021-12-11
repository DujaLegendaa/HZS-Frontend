<template>
  <section id="signup">
    <h1>Sign up</h1>
    <q-form @submit.prevent="submit()">
      <label for="name">Ime: </label>
      <q-input
        type="text"
        name="name"
        id="name"
        v-model="name"
        placeholder="Unesite svoje ime: "
        required
      />
      <label for="surname">Prezime: </label>
      <q-input
        type="text"
        name="surname"
        id="surname"
        v-model="surname"
        placeholder="Unesite svoje prezime: "
        required
      />
      <q-select
        v-model="model"
        :options="options"
        label="Grad" 
      />
      <label for="email">Email: </label>
      <q-input
        type="text"
        name="email"
        id="email"
        v-model="email"
        required
        placeholder="Unesite svoj email: "
      />
      <label for="password">Sifra: </label>
      <q-input
        type="password"
        name="password"
        id="password"
        v-model="password"
        placeholder="Unesite svoju sifru: "
        required
      />
      <label for="passwordConfirm">Potvdi sifru: </label>
      <q-input
        type="password"
        name="passwordConfirm"
        id="passwordConfirm"
        v-model="passwordConfirm"
        placeholder="Potvrdite sifru: "
        required
      />
      <p v-if="isActive" style="color: red">
        Sva polja trebaju biti ispravno popunjena.
      </p>
      <q-button
        type="Submit"
        :disabled="isActive"
        :class="[{ activeClass: !isActive }]"
      >
        Submit
      </q-button>
      </q-form>
      </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      city: '',
    }
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
      )
    },
  },
  methods: {
    logInError() {
      return (
        this.email.length === 0 ||
        this.username.length === 0 ||
        this.password.length < 8 ||
        this.passwordConfirm != this.password
      )
    },
    nameError() {
      return this.name.length === 0
    },
    surnameError() {
      return this.surname.length === 0
    },
    emailError() {
      return this.email.length === 0
    },
    passwordLengthError() {
      return this.password.length < 8
    },
    passwordMatch() {
      return this.passwordConfirm != this.password
    },
},
}
</script>

<style scoped>

</style>


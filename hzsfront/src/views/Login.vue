<template>
  <section id="login">
    <h1>Log in</h1>
    <error-alert v-if="errored" :title="errorMessage">
      <button @click="errored = false">Confirm</button>
    </error-alert>
    <q-form class="form" @submit.prevent="submit()">
      <label for="email">Email: </label>
      <q-input
        type="text"
        placeholder="Unesite email"
        name="email"
        class="input"
        id="email"
        v-model="email"
        required
      />
      <label for="password">Sifra: </label>
      <q-input
        type="password"
        name="password"
        class="input"
        placeholder="Unesite sifru"
        id="password"
        v-model="password"
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
  emits: ['loggedIn'],
  data() {
    return {
      email: '',
      password: '',
      errored: false,
      errorMessage: '',
    }
  },
  computed: {
    isActive() {
      return this.email.length === 0 || this.password.length < 8
    },
  },
  methods: {
    async submit() {
      try {
        await this.$store.dispatch('login', {
          email: this.email,
          password: this.password,
        })
      } catch (err) {
        this.errored = true
        this.errorMessage = err.data.message
      }
      window.location.reload()
    },
  }
}
</script>

<style scoped>
  #login{
    display: flex;
    flex-direction: column;
  }

  .form {
    align-self: center;
    display: flex;
    flex-direction: column;
    width: 500px;
    border: 2px solid gray;
    padding: 1.3em;
    border-radius: 0.7em;
    background-color: rgb(255, 255, 255);
  }
 
  .input {
    all: unset;
    margin-bottom: 40px;
    margin-top: 0;
    padding: 0;
    height: 30px;
    width: 400px;

/*
    border: 1px solid gray;
    border-top-style: none;
    border-right-style: none;
    border-left-style: none;
    border-bottom-style: solid;
    */
  }

  h1{
        margin: 1ch 0 0.1ch;
        align-self: center;
        font-size: 8ch;
        font-weight: 700;
        color: #63d062;
  }

  label {
    font-size: 2ch;
    color: rgb(46, 46, 46);
    font-weight: 700;
    align-self: baseline;
  }
</style>
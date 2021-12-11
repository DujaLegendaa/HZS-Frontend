<template>
  <section id="Login">
    <h1>Log in</h1>
    <error-alert v-if="errored" :title="errorMessage">
      <button @click="errored = false">Confirm</button>
    </error-alert>
    <q-form @submit.prevent="submit()">
      <label for="email">Email: </label>
      <q-input
        type="text"
        placeholder="Unesite email"
        name="email"
        id="email"
        v-model="email"
        required
      />
      <label for="password">Sifra: </label>
      <q-input
        type="password"
        name="password"
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
  }
}
</script>

<style scoped>

</style>
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
        placeholder="Enter your email"
        name="email"
        id="email"
        v-model="email"
        required
      />
      <label for="password">Password: </label>
      <q-input
        type="password"
        name="password"
        placeholder="Enter you password"
        id="password"
        v-model="password"
        required
      />
      <p v-if="isActive" style="color: red">
        All fields must be filled in correctly.
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
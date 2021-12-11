<template>
  <nav>
    <section id="alwaysOn">
      <router-link class="routerlink" to="/">Home</router-link>
    </section>

    <section v-if="!this.loggedIn()" id="notLoggedIn">
      <router-link class="routerlink" to="/login">Log in</router-link>

      <router-link class="routerlink" to="/signup">Sign up</router-link>
    </section>

    <section v-if="this.loggedIn()" id="loggedIn">
      <router-link class="routerlink" @click="onClick()" to="/"
        >Log out</router-link
      >
    </section>
  </nav>
</template>

<script>
export default {
  methods: {
    loggedIn() {
      return this.$store.getters.loggedIn
    },
    onClick() {
      this.$store.dispatch('logout')
      this.$forceUpdate()
    },
  },
}
</script>

<style>
.routerlink {
  padding-left: 15px;
  padding-right: 15px;
  font-family: 'Lato', sans-serif;
  letter-spacing: 0.4px;
  font-size: 19px;
  font-weight: 1000;
}
nav a {
  text-decoration: none;
  all: unset;
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  height: 70px;
  background-color: #3aa068;
  color: rgb(236, 236, 236);
}
nav a:hover {
  cursor: pointer;
  color: rgb(156, 189, 170);
}
</style>
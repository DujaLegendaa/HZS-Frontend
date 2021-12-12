<template>
  <nav>
    <div id="left">
      <section id="alwaysOn">
        <router-link class="routerlink" to="/">Home</router-link>
        <router-link class="routerlink" to="/events">Events</router-link>
      </section>
    </div>

    <div id="right">
      <section v-if="!this.loggedIn()" id="notLoggedIn">
        <router-link class="routerlink" to="/login">Log in</router-link>

        <router-link class="routerlink" id="signup" to="/signup">Sign up</router-link>
      </section>

      <section v-if="this.isOrganizator()" id="isOrganizator">
        <router-link class="routerlink" to="/createEvent"
          >Create Event</router-link
        >
      </section>

      <section v-if="this.loggedIn()" id="loggedIn">
        <router-link class="routerlink" to="/profile">Profile</router-link>
        <router-link class="routerlink" @click="onClick()" to="/"
          >Log out</router-link
        >
      </section>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    isOrganizator() {
      return this.$store.getters.isOrganizator;
    },
    onClick() {
      this.$store.dispatch("logout");
      this.$forceUpdate();
    },
  },
};
</script>

<style scoped>
.routerlink {
  padding-left: 15px;
  padding-right: 15px;
  font-family: "Lato", sans-serif;
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
  background-color: #ffffff;
  color: #63c982;
  padding: 0 2px;
  border-bottom: solid 5px #63c982;
}
nav a:hover {
  cursor: pointer;
  color: rgb(156, 189, 170);
}

#right {
  display: flex;
}

#signup {
  border-radius: 100rem;
  padding: 1rem;
  padding: .5rem 3rem;
  margin-right: 1rem;
  color: linear-gradient(to right, #63c968 0%,  #6bd1c7  51%, #63c968  100%);
  box-shadow: 0 0 6px 0 rgba(179, 96, 212, 0.5);
  border: solid 5px transparent;
  background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)), linear-gradient(to right, #63c968 0%,  #6bd1c7  51%, #63c968  100%);
  background-clip: content-box, border-box;
  box-shadow: 2px 1000px 1px #fff inset;
}

#signup:hover {
  box-shadow: none;
  color: white;
}
</style>

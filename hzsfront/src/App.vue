<template>
<section>
  <topnav></topnav>
  <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css'>
  <router-view />
</section>
</template>

<script>
import { ref } from 'vue' 
import NavBar from './components/NavBar.vue'

export default {
  name: 'LayoutDefault',

  components: {
    NavBar
  },

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>

<style scoped>
*{
  font-family: 'Lato', sans-serif;
}
</style>

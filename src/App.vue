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

<style>
*{
  font-family: 'Lato', sans-serif;
}

p, h4, h1{
  color: rgb(51, 51, 51);
}

body{
  background-image: url("../src/assets/test2.png");
  background-color: rgba(255,255,255,0.5);
}
</style>

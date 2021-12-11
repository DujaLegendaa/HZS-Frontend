<template>
<section>
  <topnav></topnav>
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

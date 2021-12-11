<template>
  <section>
    <event-short
      v-for="event in eventList"
      v-bind:key="event._id"
      :id="event._id"
      :city="event.city"
      :eventDay="event.eventDay"
    ></event-short>
  </section>
</template>

<script>
import Event from './Event.vue'
export default {
  data() {
    return {
      eventList: [],
    }
  },
}
</script>

<style>

</style>
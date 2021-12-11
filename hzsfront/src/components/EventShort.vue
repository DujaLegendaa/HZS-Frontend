<template>
  <p @click="clicked()">
    <span id="date"> {{ date }} </span>
    <span id="city">{{ city }}</span>
    <span id="numParticipants">{{ numParticipants }}</span>
  </p>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    numParticipants: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
  methods: {
    clicked() {
      this.$router.push(`/events/${this.id}`);
    },
  },
};
</script>

<style scoped>
p {
  display: flex;
  justify-content: space-between;
  background-color: rgb(233, 233, 233);
  transition: background-color, 0.3s ease;
  border: 2px solid rgb(104, 104, 104);
  border-radius: 5px;
  padding: 0.5em;
  margin: 0px;
  width: inherit;
}
p:hover {
  cursor: pointer;
}
</style>

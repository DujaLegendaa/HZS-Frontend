<template>
  <q-card class="my-card">
    <q-item>
      <q-item-section avatar>
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar2.jpg" />
        </q-avatar>
      </q-item-section>

      <q-item-section>
        <q-item-label>{{ orgName }}</q-item-label>
        <q-item-label caption>{{ city }}</q-item-label>
      </q-item-section>
    </q-item>

    <img src="https://cdn.quasar.dev/img/parallax2.jpg" />
  </q-card>
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
    orgName: {
      type: String,
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

<template>
  <div>
    <h1>Aktiviraj kod</h1>
    <h4>Za: {{ forUser }}</h4>
    <q-btn></q-btn>
  </div>
</template>

<script>
import CodeCard from "../components/CodeCard.vue";
export default {
  components: { CodeCard },
  props: {
    forUser: {
      type: String,
      required: true,
    },
  },
};
</script>

<style></style>

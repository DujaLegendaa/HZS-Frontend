<template>
  <div id="base">
    <p>For: {{ forUser }}</p>
    <p>Points: {{ points }}</p>
    <img />
  </div>
</template>

<script>
// if activated add custom css
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    forUser: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
#base {
  border: 1px solid gray;
}
</style>

<template>
  <p @click="clicked()">
    <span id="name"> {{ name }} </span>
    <span id="category">{{ category.toUpperCase() }}</span>
    <span id="macroANDstar"
      ><span id="macro">C: {{ carbs }} P: {{ proteins }} F: {{ fats }}</span
      ><span id="stars">{{ starsNum }}<fa icon="star" id="star"></fa></span
    ></span>
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
      this.$router.push(`/recipes/${this.id}`);
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

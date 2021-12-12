<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-white text-gray shadow-2 rounded-borders border-black">
      <q-btn flat class="q-btn" style="padding: 0 2ch">
        {{ name }} {{ surname }}</q-btn
      >
      <q-space />

      <q-tabs v-model="tab" shrink stretch>
        <q-tab class="q-tab" style="padding: 0 2ch" flat name="tab2">{{
          city
        }}</q-tab>
      </q-tabs>
    </q-toolbar>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      require: true,
    },
  },
  data() {
    return {};
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

.q-btn {
  all: unset;
  color: rgb(51, 51, 51);
  font-size: 2ch;
  font-weight: 700;
}

.q-tab {
  color: rgb(51, 51, 51);
  font-size: 2ch;
  font-weight: 700;
}

.q-tab:hover {
  border-bottom: 3px solid #63d062;
  cursor: unset;
}
</style>

<template>
  <div id="base">
    <code-card v-for="code in codeList"></code-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      codeList: [],
    };
  },
  mounted() {
    const that = this;
    var config = {
      method: "get",
      url: process.env.VUE_APP_URL + "codes/",
      headers: {},
    };
    axios(config)
      .then(function (response) {
        that.codeList = response.data.data.docs;
      })
      .catch(function (error) {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#base {
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}
</style>

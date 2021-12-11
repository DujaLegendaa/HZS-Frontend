<template>
  <div>
    <error-alert v-if="errored" :title="errorMessage">
      <button @click="errored = false">Confirm</button>
    </error-alert>
    <h1 id="titleANDicons">
      <span id="title">{{ name.toUpperCase() }}</span>
      <div id="icons">
        <span id="stars"
          >{{ starsNum
          }}<fa
            icon="star"
            id="star"
            @click="starRecipe()"
            :class="[{ starredClass: starred }]"
            class="fa"
          ></fa
        ></span>
        <span v-if="creator">
          <fa icon="trash" id="trash" @click="deleteRecipe()" class="fa"></fa>
          <fa icon="edit" id="edit" @click="editRecipe()" class="fa"></fa>
        </span>
      </div>
    </h1>
    <section id="info-recipe">
      <div id="info">
        <h4>Description:</h4>
        <p id="description">{{ description }}</p>
        <h4>Steps:</h4>
        <p id="steps">{{ steps }}</p>

        <div class="category-macronutrients">
          <p>Category: {{ category.toUpperCase() }}</p>
          <p id="macronutrients">
            <span>Carbs: {{ carbs }}</span
            ><span> Proteins: {{ proteins }}</span
            ><span> Fats: {{ fats }}</span>
          </p>
        </div>
      </div>

      <div class="ingredient-list">
        <h3>Ingredient list</h3>
        <ingredients-list-extended
          id="ingredient-list"
          v-if="loaded"
          :ingredientListPassed="ingredients"
        ></ingredients-list-extended>
      </div>
    </section>
  </div>
</template>

<script>
import IngredientsListExtended from "./IngredientsListExtended.vue";
import ErrorAlert from "./ErrorAlert.vue";
const axios = require("axios");
export default {
  components: { IngredientsListExtended, ErrorAlert },
  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    ingredientsPassed: {
      type: [Object],
    },
    steps: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    proteins: {
      type: Number,
      required: true,
    },
    carbs: {
      type: Number,
      required: true,
    },
    fats: {
      type: Number,
      required: true,
    },
    starsNum: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      ingredients: [],
      loaded: false,
      errored: false,
      errorMessage: "",
      creator: false,
      starred: false,
    };
  },
  methods: {
    async isCreator() {
      if (!this.$store.getters.loggedIn) return false;
      var config = {
        method: "get",
        url:
          process.env.VUE_APP_URL +
          "recipes/" +
          this.$route.params.id +
          "/isCreator",
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        const response = await axios(config);
        this.creator = response.data.data.isCreator;
      } catch (err) {
        this.errored = true;
        this.errorMessage = err.response.data.message;
      }
    },
    async deleteRecipe() {
      var config = {
        method: "delete",
        url: process.env.VUE_APP_URL + "recipes/" + this.$route.params.id,
        headers: {
          Authorization: "Bearer " + this.$store.getters.token,
        },
      };
      try {
        await axios(config);
        this.$router.push("/recipes");
      } catch (err) {
        this.errored = true;
        this.errorMessage = err.response.data.message;
      }
    },
    editRecipe() {
      this.$router.push(this.$route.path + "/edit");
    },
  },
  mounted() {
    if (this.ingredientsPassed != undefined)
      this.ingredients = this.ingredientsPassed;
    else {
      const that = this;
      var config = {
        method: "get",
        url:
          process.env.VUE_APP_URL +
          "recipes/" +
          this.$route.params.id +
          "/ingredients",
        headers: {},
      };
      axios(config)
        .then(function (response) {
          that.ingredients = response.data.data.doc.ingredients;
          that.isStarred().then(function () {
            that.isCreator().then(function () {
              that.loaded = true;
            });
          });
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  },
};
</script>

<style scoped></style>

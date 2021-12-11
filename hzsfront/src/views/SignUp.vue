<template>
  <section id="signup">
    <h1>Sign up</h1>
    <q-form class="form" @submit.prevent="submit()">
      <label for="name">Ime: </label>
      <q-input
        type="text"
        name="name"
        class="input"
        id="name"
        v-model="name"
        placeholder="Unesite svoje ime: "
        required
      />
      <label for="surname">Prezime: </label>
      <q-input
        type="text"
        name="surname"
        class="input"
        id="surname"
        v-model="surname"
        placeholder="Unesite svoje prezime: "
        required
      />
      <q-select
        outlined
        class="select"
        v-model="model"
        :options="selectOptions"
        label="Grad" 
      />


      <label for="email">Email: </label>
      <q-input
        type="text"
        name="email"
        class="input"
        id="email"
        v-model="email"
        required
        placeholder="Unesite svoj email: "
      />
      <label for="password">Sifra: </label>
      <q-input
        type="password"
        name="password"
        class="input"
        id="password"
        v-model="password"
        placeholder="Unesite svoju sifru: "
        required
      />
      <label for="passwordConfirm">Potvdi sifru: </label>
      <q-input
        type="password"
        name="passwordConfirm"
        class="input"
        id="passwordConfirm"
        v-model="passwordConfirm"
        placeholder="Potvrdite sifru: "
        required
      />
      <p v-if="isActive" style="color: red">
        Sva polja trebaju biti ispravno popunjena.
      </p>
      <q-button
        type="Submit"
        :disabled="isActive"
        :class="[{ activeClass: !isActive }]"
      >
        Submit
      </q-button>
      </q-form>
      </section>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirm: '',
      city: '',
      selectOptions: [
          {
              label:'Kraljevo',
              value:'Kraljevo'
          },
          {
              label:'Beograd',
              value:'Beograd'
          },
          {
              label:'Krusevac',
              value:'Krusevac'
          }
      ]
    }
  },

  computed: {
    isActive() {
      return (
        this.email.length === 0 ||
        this.name.length === 0 ||
        this.surname.length === 0 ||
        this.password.length < 8 ||
        this.passwordConfirm != this.password ||
        this.city === 0
      )
    },
  },
  methods: {
    logInError() {
      return (
        this.email.length === 0 ||
        this.username.length === 0 ||
        this.password.length < 8 ||
        this.passwordConfirm != this.password
      )
    },
    nameError() {
      return this.name.length === 0
    },
    surnameError() {
      return this.surname.length === 0
    },
    emailError() {
      return this.email.length === 0
    },
    passwordLengthError() {
      return this.password.length < 8
    },
    passwordMatch() {
      return this.passwordConfirm != this.password
    },
},
}
</script>

<style scoped>
    #login{
        display: flex;
        flex-direction: column;
    }

    .form {
        align-self: center;
        display: flex;
        flex-direction: column;
        width: 500px;
        border: 2px solid gray;
        padding: 1.3em;
        border-radius: 0.7em;
        background-color: rgb(255, 255, 255);
    }


    .input, .select {
        all: unset;
        margin-bottom: 40px;
        margin-top: 0;
        padding: 0;
        height: 30px;
        width: 400px;

    /*
        border: 1px solid gray;
        border-top-style: none;
        border-right-style: none;
        border-left-style: none;
        border-bottom-style: solid;
        */
    }

    h1{
        margin: 1ch 0 0.1ch;
        font-size: 8ch;
        font-weight: 700;
        color: #63d062;
    }


    label {
        font-size: 2.3ch;
        color: rgb(46, 46, 46);
        font-weight: 700;
        align-self: baseline;
    }
</style>


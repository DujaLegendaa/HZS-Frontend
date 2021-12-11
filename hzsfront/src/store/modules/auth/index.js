const axios = require('axios')

export default {
  state() {
    return {
      loggedIn: false,
    }
  },
  mutations: {
    login(_, payload) {
      localStorage.setItem('token', payload.token)
      localStorage.setItem('loggedIn', true)
      localStorage.setItem('idUser', payload.idUser)
    },
    logout() {
      localStorage.removeItem('token')
      localStorage.setItem('loggedIn', false)
      localStorage.removeItem('idUser')
    },
  },
  actions: {
    async login(context, payload) {
      await authorize(context, payload, false)
    },
    async signup(context, payload) {
      await authorize(context, payload, true)
      // handle error
    },
    logout() {
      localStorage.setItem('token', '')
      localStorage.setItem('loggedIn', false)
    },
  },
  getters: {
    loggedIn() {
      return localStorage.getItem('loggedIn') === 'true'
    },
    idUser() {
      return localStorage.getItem('idUser')
    },
    token() {
      return localStorage.getItem('token')
    },
  },
}

const authorize = async (context, payload, signup) => {
  var data = JSON.stringify(payload)
  let route = 'login'
  if (signup) route = 'signup'
  var config = {
    method: 'post',
    url: process.env.VUE_APP_URL + 'users/' + route,
    headers: {
      'Content-Type': 'application/json',
    },
    data: data,
  }

  try {
    let response = await axios(config)
    console.log(response.data)
    context.commit('login', {
      token: response.data.token,
      idUser: response.data.data.user._id,
    })
  } catch (err) {
    throw err.response
  }
}
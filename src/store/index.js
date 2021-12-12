import { createStore } from "vuex";
import authModule from "./modules/auth/index";

const store = createStore({
  modules: {
    auth: authModule,
  },
  state() {
    return {};
  },
});

export default store;

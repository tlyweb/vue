import Vue from "vue";
import Vuex from "vuex";
import state from "./state/state";
import mutations from "./state/mutations";
Vue.use(Vuex);

export default new Vuex.Store({
  state: state,
  mutations:mutations,
});

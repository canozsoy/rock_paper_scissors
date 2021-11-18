import Vuex from "vuex";
import Vue from "vue";
import scores from "./modules/scores";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        scores
    }
})
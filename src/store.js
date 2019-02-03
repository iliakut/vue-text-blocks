import Vue from "vue";
import Vuex from "vuex";
import {text_data} from "./textdata";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    text_data,
    simpleBlocks: [],
    blocks: [],
    numberOfSimpleBlocks: 0,
    numberOfBlocks: 0,
    randomNumber: 0,
    randomText: ""
  },
  getters: {
    checkedBlocks: state => {
      let checkedBlocks = 0;
      state.simpleBlocks.forEach(elem => {
        if (elem.checked) checkedBlocks++;
      });
      state.blocks.forEach(elem => {
        if (elem.checked) checkedBlocks++;
      });
      return checkedBlocks;
    },
    checkedRedBlocks: state => {
      let checkedRedBlocks = 0;
      state.blocks.forEach(elem => {
        if (elem.checked && elem.isRed) checkedRedBlocks++;
      });
      return checkedRedBlocks;
    },
    checkedGreenBlocks: state => {
      let checkedGreenBlocks = 0;
      state.blocks.forEach(elem => {
        if (elem.checked && !elem.isRed) checkedGreenBlocks++;
      });
      return checkedGreenBlocks;
    }
  },
  mutations: {
    incNumberOfSimpleBlocks(state) {
      state.numberOfSimpleBlocks++;
    },
    incNumberOfBlocks(state) {
      state.numberOfBlocks++;
    },
    addNewSimpleBlock(state, payload) {
      state.simpleBlocks.push(payload.block);
    },
    addNewBlock(state, payload) {
      state.blocks.push(payload.block);
    },
    randomizeNumber(state, payload) {
      state.randomNumber = payload.random;
    },
    randomizeText(state, payload) {
      state.randomText = payload.random;
    },
    deleteSimpleBlock(state, payload) {
      state.simpleBlocks.splice(payload.index, 1);
    },
    deleteBlock(state, payload) {
      state.blocks.splice(payload.index, 1);
    },
    changeSimpleBlock(state, payload) {
      state.simpleBlocks[payload.number].checked = payload.checked;
    },
    changeBlock(state, payload) {
      state.blocks[payload.number].checked = payload.checked;
    },
    changeBlockColor(state, payload) {
      state.blocks[payload.number].isRed = payload.isRed;
    }
  },
  actions: {
    getRandomInteger({ commit }, payload) {
      let rand = payload.min + Math.random() * (payload.max + 1 - payload.min);
      rand = Math.floor(rand);
      commit("randomizeNumber", { random: rand });
    },
    getRandomText({ state, dispatch, commit }) {
      dispatch("getRandomInteger", {
        min: 0,
        max: state.text_data.length
      });
      const randomText = state.text_data[state.randomNumber];
      commit("randomizeText", { random: randomText });
    },
    addSimple({ state, dispatch, commit }) {
      commit("incNumberOfSimpleBlocks");
      dispatch("getRandomText");
      const simpleBlock = {
        checked: false,
        number: state.numberOfSimpleBlocks,
        text: state.randomText
      };
      commit("addNewSimpleBlock", { block: simpleBlock });
    },
    addBlock({ state, dispatch, commit }) {
      commit("incNumberOfBlocks");
      dispatch("getRandomText");
      const block = {
        checked: false,
        number: state.numberOfBlocks,
        text: state.randomText,
        isRed: false
      };
      commit("addNewBlock", { block: block });
    }
  }
});

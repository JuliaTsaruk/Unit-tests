import vuex from "@/store/index.js";
import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    todos: [],
    radioButtons: [
        { id: uuidv4(), buttonTitle: "Все", isPicked: true },
        { id: uuidv4(), buttonTitle: "Выполненные", isPicked: false },
        { id: uuidv4(), buttonTitle: "Невыполненные", isPicked: false },
      ],
    buttonTitle: "Все"
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
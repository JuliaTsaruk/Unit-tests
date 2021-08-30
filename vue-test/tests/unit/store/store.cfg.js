import vuex from "@/store/modules/todos";

export default {
  state: {
    todos: [],
    radioButtons: [
        { id: 1, buttonTitle: "Все", isPicked: true },
        { id: 2, buttonTitle: "Выполненные", isPicked: false },
        { id: 3, buttonTitle: "Невыполненные", isPicked: false },
      ],
    buttonTitle: "Все"
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
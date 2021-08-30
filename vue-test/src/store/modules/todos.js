import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    todos: [],
    radioButtons: [
      { id: uuidv4(), buttonTitle: "Все", isPicked: true },
      { id: uuidv4(), buttonTitle: "Выполненные", isPicked: false },
      { id: uuidv4(), buttonTitle: "Невыполненные", isPicked: false },
    ],
    buttonTitle: "Все",
  },

  getters: {
    radioBtns(state) {
      return state.radioButtons;
    },
    showTasks(state) {
      switch (state.buttonTitle) {
        case "Невыполненные":
          return state.todos.filter((todo) => !todo.isChecked);
        case "Выполненные":
          return state.todos.filter((todo) => todo.isChecked);
        default:
          return state.todos;
      }
    },
    showResult(state) {
      const isCheckedElLength = state.todos.filter(
        (todo) => todo.isChecked === true
      ).length;
      if (state.todos.length === 0) {
        return 0 + "%";
      }
      return Math.round((isCheckedElLength / state.todos.length) * 100) + "%";
    },
  },

  mutations: {
    addTask(state, newTask) {
      if (newTask) {
        const task = { title: newTask, id: uuidv4(), isChecked: false };
        state.todos.unshift(task);
        localStorage.setItem("todos", JSON.stringify(state.todos));
      }
    },
    clearAll(state) {
      state.todos = [];
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    doneAll(state) {
      state.todos.filter((todo) =>
        todo.isChecked === false ? (todo.isChecked = true) : todo.isChecked
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTask(state, id) {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeTaskStatus(state, id) {
      state.todos = state.todos.map((todo) =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      );
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    changeFilter(state, id) {
      state.radioButtons.map((btn) =>
        btn.id === id ? (state.buttonTitle = btn.buttonTitle) : btn
      );
    },
    changeFilterStatus(state, id) {
      state.radioButtons = state.radioButtons.map((btn) =>
        btn.id === id ? { ...btn, isPicked: true } : { ...btn, isPicked: false }
      );
    },
    getFromStorage(state) {
      state.todos = JSON.parse(localStorage.getItem("todos")) || new Array();
    },
  },

  actions: {
    getFromStorage(context) {
      context.commit("getFromStorage");
    },
  },
};

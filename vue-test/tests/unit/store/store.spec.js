import Vuex from "vuex";
import { createLocalVue } from "@vue/test-utils";
import storeCfg from "./store.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);

const store = new Vuex.Store(storeCfg);

describe("store testing:", () => {
  test("set state used action", () => {
    store.dispatch("getFromStorage");
    expect(store.state.todos.length).toBe(0);
  });

  test("mutation 'addTask' add new task", () => {
    const task = "newTask";
    store.commit("addTask", task);
    expect(store.state.todos[0].title).toBe(task);
    expect(store.state.todos[0].isChecked).toBe(false);
    expect(store.state.todos[0].id).toBeTruthy();
  });

  test("getter 'allTasks' shows all tasks", () => {
    expect(store.getters.allTasks).toBe(store.state.todos);
  });

  test("getter 'radioBtns' shows all radio buttons", () => {
    expect(store.getters.radioBtns).toBe(store.state.radioButtons);
  });

  test("getter'showTasks' shows tasks according filter", () => {
    store.state.buttonTitle = "Все";
    expect(store.getters.showTasks).toBe(store.state.todos);
    store.state.buttonTitle = "Невыполненные";
    expect(store.getters.showTasks.length).toBe(1);
    store.state.buttonTitle = "Выполненные";
    expect(store.getters.showTasks.length).toBe(0);
  });

  test("getter 'showResult' show percent of completed tasks", () => {
    expect(store.getters.showResult).toBe("0%");
    const task = "newTask";
    store.commit("addTask", task);
    const id = store.state.todos[0].id;
    const isChecked = store.state.todos[0].isChecked;
    store.commit("changeTaskStatus", id);
    expect(store.state.todos[0].isChecked).toBe(!isChecked);
    expect(store.getters.showResult).toBe("50%");
    store.commit("clearAll");
    expect(store.state.todos.length).toBe(0);
    expect(store.getters.showResult).toBe("0%");
  });

  test("mutation 'clearAll' delete all tasks", () => {
    store.commit("clearAll");
    expect(store.state.todos.length).toBe(0);
  });

  test("mutation 'doneAll' complete all tasks", () => {
    const task = "newTask";
    store.commit("addTask", task);
    store.commit("doneAll");
    expect(store.state.todos[0].isChecked).toBe(true);
  });

  test("mutation 'deleteTask' delete one chosen task", () => {
    const id = store.state.todos[0].id;
    store.commit("deleteTask", id);
    expect(store.state.todos.length).toBe(0);
  });

  test("mutation 'changeTaskStatus' change checkbox status", () =>{
    const task = "newTask";
    store.commit("addTask", task);
    const id = store.state.todos[0].id;
    const isChecked = store.state.todos[0].isChecked;
    store.commit("changeTaskStatus", id);
    expect(store.state.todos[0].isChecked).toBe(!isChecked);
  });

  test("mutation 'changeFilterStatus' change radio button status", () =>{
    const id = store.state.radioButtons[1].id;
    const isPicked = store.state.radioButtons[1].isPicked;
    store.commit("changeFilterStatus", id);
    expect(store.state.radioButtons[1].isPicked).toBe(!isPicked);
  });

  test("mutation 'changeFilter' toggles filter", () =>{
    const id = store.state.radioButtons[1].id;
    store.commit("changeFilter", id);
    expect(store.state.radioButtons[1].id).toBe(id);
  });
});

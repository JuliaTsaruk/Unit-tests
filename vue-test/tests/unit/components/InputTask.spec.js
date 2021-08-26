import Vuex from "vuex";
import { v4 as uuidv4 } from "uuid";
import { mount, createLocalVue } from "@vue/test-utils";
import InputTask from "@/components/molecules/InputTask.vue";
import index from "@/store/index.js";

const localVue = createLocalVue();
localVue.use(Vuex);
const mutations = {
  addTask: jest.fn(),
};
const store = new Vuex.Store({ mutations });

describe("InputTask component", () => {
  test("is a vue instance", () => {
    const wrapper = mount(InputTask, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(InputTask)).toBeTruthy();
  });

  test("adds input", async () => {
    const wrapper = mount(InputTask, {store, localVue});
    await wrapper.find("form").trigger("submit.prevent");
    await wrapper.find("button").trigger("click");
    expect(mutations.addTask).toHaveBeenCalled();
  })

});
import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Button from "@/components/atoms/Button.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  doneAll: jest.fn(),
  clearAll: jest.fn(),
};
const store = new Vuex.Store({ mutations });

describe("Button component", () => {
  test("is a vue instance", () => {
    const wrapper = mount(Button, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(Button)).toBeTruthy();
  });
  test("calls mutation with click on the clearAll button", async () => {
    const title = "Удалить всё";
    const wrapper = mount(Button, { store, localVue, propsData: { title } });
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.title).toEqual("Удалить всё");
    expect(mutations.clearAll).toHaveBeenCalled();
  });
  test("calls mutation with click on the doneAll button", async () => {
    const title = "Выполнить всё";
    const wrapper = mount(Button, { store, localVue, propsData: { title } });
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.title).toEqual("Выполнить всё");
    expect(mutations.clearAll).toHaveBeenCalled();
  });
});

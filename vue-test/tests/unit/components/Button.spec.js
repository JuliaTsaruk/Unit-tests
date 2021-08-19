import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import Button from "@/components/atoms/Button.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const mutations = {
  doneAll: jest.fn(),
};
const store = new Vuex.Store({ mutations });

describe("Button component", () => {
  test("is a vue instance", () => {
    const wrapper = mount(Button, { localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.is(Button)).toBeTruthy();
    expect(wrapper.vm.title).toEqual("Добавить");
  });

  test("call mutation with click on the button", async () => {
    const wrapper = mount(Button, { store, localVue });
    await wrapper.findAll("button").trigger("click");
    expect(mutations.doneAll).toHaveBeenCalled();
  });

  //   test("calls function when button is clicked", () => {
  //     const wrapper = mount(Button, { localVue, propsData: {}});
  //     const buttonFunction = jest.fn();
  //     wrapper.setMethods({
  //         buttonFunction: buttonFunction
  //     });
  //     wrapper.findAll("button").trigger("click");
  //     expect(buttonFunction).toHaveBeenCalled();
  //   });
});

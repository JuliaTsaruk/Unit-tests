import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import RadioButtons from "@/components/atoms/RadioButtons.vue";

const localVue = createLocalVue();
localVue.use(Vuex);
const mutations = {
  changeFilter: jest.fn(),
};
const store = new Vuex.Store({ mutations });

describe("RadioButtons component", () => {
  test("is a vue instance", () => {
    const wrapper = mount(RadioButtons, { localVue });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.is(RadioButtons)).toBeTruthy();
  });

  test("changes status with click", async () => {
    const wrapper = mount(RadioButtons, { localVue });
    const radio = wrapper.find("input[type = 'radio']");
    await radio.trigger("change");
    expect((radio.element.checked = true));
  });

  test("calls mutation with click", async () => {
    const wrapper = mount(RadioButtons, { store, localVue });
    await wrapper.find("input[type = 'radio']").trigger("change");
    expect(mutations.changeFilter).toHaveBeenCalled();
  });
});

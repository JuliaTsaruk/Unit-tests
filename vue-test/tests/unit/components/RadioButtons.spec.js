import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import RadioButtons from "@/components/atoms/RadioButtons.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("RadioButtons component", () => {
  test("is a vue instance", () => {
    const wrapper = mount(RadioButtons, { localVue });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(RadioButtons)).toBeTruthy();
  });

  test("radio button changes with click", async () => {
    const wrapper = mount(RadioButtons, { localVue });
    const radio = wrapper.find("input[type = 'radio']");
    await radio.trigger("click");
    await radio.trigger("change");
    expect(radio.element.checked).toBeTruthy();
  });
});

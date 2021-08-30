import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ListItem from "@/components/atoms/ListItem.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

const title = "Buy bread";
const mutations = {
  deleteTask: jest.fn(),
};
const store = new Vuex.Store({ mutations });

describe("ListItem component", () => {
  test("is a vue instance", () => {
    const wrapper = mount(ListItem, { localVue, propsData: { title } });
    expect(wrapper.vm).toBeTruthy();
    expect(wrapper.is(ListItem)).toBeTruthy();
    expect(wrapper.vm.title).toEqual(title);
  });
  test("renders the task name", () => {
    const wrapper = mount(ListItem, { localVue, propsData: { title } });
    expect(wrapper.html()).toContain(title);
  });
  test("calls deleteTask mutation when removeButton is clicked", () => {
    const wrapper = mount(ListItem, { store, localVue, propsData: { title } });
    wrapper.find("button").trigger("click");
    expect(mutations.deleteTask).toHaveBeenCalled();
  });
  test("changes status with click", async () => {
    const wrapper = mount(ListItem, { localVue, propsData: { title } });
    const checkbox = wrapper.find("input[type = 'checkbox']");
    await checkbox.trigger("click");
    await checkbox.trigger("change");
    expect(checkbox.element.checked).toBeTruthy();
  });
});

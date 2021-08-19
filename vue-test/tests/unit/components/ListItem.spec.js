import Vuex from "vuex";
import { mount, createLocalVue } from "@vue/test-utils";
import ListItem from "@/components/atoms/ListItem.vue";

const localVue = createLocalVue();
const title = "Buy bread";
localVue.use(Vuex);

describe("ListItem component", () => {
  test("is a vue instance", () => {
    const wrapper = mount(ListItem, { localVue, propsData: { title } });
    expect(wrapper.isVueInstance()).toBeTruthy();
    expect(wrapper.is(ListItem)).toBeTruthy();
    expect(wrapper.vm.title).toEqual(title);
  });

  test("renders the task name", () => {
    const wrapper = mount(ListItem, { localVue, propsData: { title } });
    expect(wrapper.html()).toContain(title);
  });

  test("calls deleteTask function when removeButton is clicked", () => {
    const wrapper = mount(ListItem, { localVue, propsData: { title } });
    const deleteTask = jest.fn();
    wrapper.setMethods({
      deleteTask: deleteTask,
    });
    wrapper.find("button").trigger("click");
    expect(deleteTask).toHaveBeenCalled();
  });

  test("changes status with click", async () => {
    const wrapper = mount(ListItem, { localVue, propsData: { title } });
    const checkbox = wrapper.find("input[type = 'checkbox']");
    await checkbox.setChecked();
    expect(checkbox.element.checked).toBeTruthy();
  });
});

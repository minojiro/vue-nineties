import { mount } from "@vue/test-utils";
import Rainbow from "./index.vue";
import { it, expect } from "vitest";

it("initialize", () => {
  const text = "content";
  const wrapper = mount(Rainbow, {
    slots: { default: text },
  });
  expect(wrapper.text()).toBe(text);
});

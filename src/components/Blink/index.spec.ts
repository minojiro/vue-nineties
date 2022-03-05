import { mount } from "@vue/test-utils";
import Marquee from "./index.vue";
import { it, expect } from "vitest";

it("initialize", () => {
  const text = "content";
  const wrapper = mount(Marquee, {
    slots: { default: text },
  });
  expect(wrapper.text()).toBe(text);
});

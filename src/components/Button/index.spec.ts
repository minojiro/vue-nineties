import { mount } from "@vue/test-utils";
import Button from "./index.vue";
import { Button as exportedComponent } from "../../main";
import { test, expect } from "vitest";

test("initialize", () => {
  const text = "content";
  const wrapper = mount(Button, {
    slots: { default: text },
  });
  expect(wrapper.text()).toBe(text);
});

test.todo("click");

test("to be exported by main", () => {
  expect(Button).toStrictEqual(exportedComponent);
});

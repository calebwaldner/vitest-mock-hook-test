import { describe, it, expect, vi } from "vitest";
import { ref } from "vue";
import HelloWorld from "../HelloWorld.vue";

import { mount } from "@vue/test-utils";

vi.mock("@/composables/useHook", () => {
  return () => ({
    // I want to mock the hook and provide new values
    activeItem: ref<string | null>("item 1"),
    defaultItems: ref<null | string[]>(["item 1", "item 2"]),
  });
});

describe("HelloWorld", () => {
  it("renders properly", () => {
    const wrapper = mount(HelloWorld, { props: { msg: "Hello Vitest" } });
    expect(wrapper.text()).toContain("Hello Vitest");
  });
});

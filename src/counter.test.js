import { setupCounter } from "./counter";
import { expect, it } from "vitest";

it("adds click handler", () => {
  const el = document.createElement("div");

  setupCounter(el);

  el.click();
  el.click();

  expect(el.innerHTML).toBe("Count is 2");
});

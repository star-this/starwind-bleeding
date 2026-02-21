// sw-bleeding.js
import {
  createStarwindElement,
  defineElement,
} from "./starwind.elements.util.js";

const SwBleedingLayout = createStarwindElement({
  space: { var: "--sw-bleeding-space", type: "space" },
});

export function defineSwBleeding() {
  defineElement("sw-bleeding", SwBleedingLayout);
}

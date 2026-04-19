import DefaultTheme from "vitepress/theme";
import {
  DXButton,
  DXInput,
  DXCheckbox,
  DXRadio,
  DXSwitch,
  DXText,
  DXLink,
  DXHeading,
} from "../../../src/index";
import "../../../src/components/styles.css";
import "./variables.css";
import "sass";
import "./assets/scss/global.scss";
import { h } from "vue";
import "./custom.css";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("DXButton", DXButton);
    app.component("DXInput", DXInput);
    app.component("DXCheckbox", DXCheckbox);
    app.component("DXRadio", DXRadio);
    app.component("DXSwitch", DXSwitch);
    app.component("DXText", DXText);
    app.component("DXLink", DXLink);
    app.component("DXHeading", DXHeading);
  },
  Layout() {
    return h(DefaultTheme.Layout, null, {
      "nav-bar-content-after": () =>
        h("span", { class: "nav-bar-title" }, "DoxaUI"),
    });
  },
};

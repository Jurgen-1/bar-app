import "./menu-screen.css";
import { state } from "../state";
import { render } from "../render";
import { renderMenuHeader } from "./components/menu-header";
import { renderMenuFilters } from "./components/filters";
import { renderMenuItems } from "./components/menu-items-list";
import { renderOrderPanel } from "./components/order-panel";

const app = document.querySelector("#app");

export function renderMenuScreen() {
    renderMenuHeader()
    renderMenuFilters()
    renderMenuItems()
    renderOrderPanel()
}

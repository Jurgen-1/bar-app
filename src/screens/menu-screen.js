import "./menu-screen.css";
import { state } from "../state";
import { render } from "../render";
import { renderHeader } from "./components/header";
import { renderMenuFilters } from "./components/filters";
import { renderMenuItems } from "./components/menu-items-list";
import { renderOrderPanel } from "./components/order-panel";

const app = document.querySelector("#app");

export function renderMenuScreen() {
    renderHeader()
    renderMenuFilters()
    renderMenuItems()
    renderOrderPanel()
}

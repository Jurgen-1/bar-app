import "./order-screen.css"
import { state } from "../state";
import { render } from "../render";
import { renderHeader } from "./components/header";
import { renderOrderScreenButtonsPanel } from "./components/order-screen-panel"
import { renderOrderList } from "./components/order-list";
import { renderOrderTotal } from "./components/order-total";

const app = document.querySelector("#app");

export function renderOrderScreen () {
    renderHeader()
    // renderSubtitle()
    renderOrderList()
    renderOrderTotal()
    renderOrderScreenButtonsPanel()
}


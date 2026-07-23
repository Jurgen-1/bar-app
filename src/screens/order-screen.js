import "./order-screen.css"
import { state } from "../state";
import { render } from "../render";
import { renderOrderHeader } from "./components/order-header";
import { renderOrderScreenButtonsPanel } from "./components/order-screen-panel"
import { renderOrderList } from "./components/order-list";
import { renderOrderTotal } from "./components/order-total";

const app = document.querySelector("#app");

export function renderOrderScreen () {
    renderOrderHeader()
    // renderSubtitle()
    renderOrderList()
    renderOrderTotal()
    renderOrderScreenButtonsPanel()
}


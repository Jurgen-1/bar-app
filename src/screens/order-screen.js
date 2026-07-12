import "./order-screen.css"
import { state } from "../state";
import { render } from "../render";
import { renderHeader } from "./components/header";
import { renderOrderScreenButtonsPanel } from "./components/order-screen-panel"

const app = document.querySelector("#app");

export function renderOrderScreen () {
    renderHeader()
    // renderSubtitle()
    // renderOrderList()
    // renderTotal()
    renderOrderScreenButtonsPanel()
}


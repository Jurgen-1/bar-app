import { state } from "../../state";
import { render } from "../../render";
import { calculateTotalPrice } from "../../helpers/calculation"

const app = document.querySelector("#app");

export function renderOrderTotal() {
    const node = document.createElement("div");
    node.classList.add("order-total-panel");

    const totalText = document.createElement("div");
    const totalPriceText = document.createElement("div");

    totalText.classList.add("total-text")
    totalPriceText.classList.add("total-price-text")

    totalText.innerText = "Total"
    totalPriceText.innerText = `ALL ${calculateTotalPrice()}`;

    node.appendChild(totalText)
    node.appendChild(totalPriceText)

    app.appendChild(node);
}
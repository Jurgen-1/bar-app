import "./confirm-screen.css"
import { state } from "../state";
import { render } from "../render";
import { calculateTotalPrice } from "../helpers/calculation"

const app = document.querySelector("#app");

export function renderConfirmScreen () {
    const template = document.querySelector("#confirm-screen-template");
    const node = template.content.cloneNode(true);

    const totalPrice = node.querySelector(".confirmation-total-price")
    totalPrice.innerText = `ALL ${calculateTotalPrice()}`;
    
    const backButton = node.querySelector(".new-order-button")
    backButton.addEventListener("click", () => {
        state.currentScreen = "MENU"
        state.orderedItems = {}
        render()
    })

    app.appendChild(node);
}



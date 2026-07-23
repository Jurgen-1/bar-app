import { state } from "../../state";
import { render } from "../../render";

export function renderOrderHeader() {
    const template = document.querySelector("#order-header-template");
    const node = template.content.cloneNode(true);

    const backButton = node.querySelector(".header-back-button");

    backButton.addEventListener("click", () => {
        state.currentScreen = "MENU";
        render();
    });

    app.appendChild(node);
}
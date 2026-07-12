import { state } from "../../state";
import { render } from "../../render";

export function renderOrderScreenButtonsPanel () {
    const template = document.querySelector("#order-screen-panel");
    const node = template.content.cloneNode(true);

    const backButton = node.querySelector(".back-button")
    backButton.addEventListener("click", () => {
        state.currentScreen = "MENU"
        render()
    })

    app.appendChild(node);
}


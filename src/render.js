import { renderMenuScreen } from "./screens/menu-screen";
import { renderOrderScreen } from "./screens/order-screen";
import { renderConfirmScreen } from "./screens/confirm-screen";
import { state } from "./state";

export function render() {
    app.innerHTML = "";

    if (state.currentScreen === "MENU") {
        renderMenuScreen()
    }

    if (state.currentScreen === "ORDER") {
        renderOrderScreen()
    }

    if (state.currentScreen === "CONFIRM") {
        renderConfirmScreen()
    }

    // switch (state.currentScreen) {
    //     case "MENU":
    //         renderMenuScreen();
    //         return;
    //     case "ORDER":
    //         renderOrderScreen();
    //         return;
    //     case "CONFIRM":
    //         renderConfirmScreen();
    //         return;
    // }
}
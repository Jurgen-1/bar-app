import { state } from "../../state";
import { render } from "../../render";

const app = document.querySelector("#app");

export function renderOrderList () {
    const container = document.createElement("div");
    container.classList.add("menu-items")

    Object.keys(state.orderedItems)
        .forEach((menuItemId) => {
            const menuItem = state.menuItems.find((menuItem) => {
                return menuItem.id === parseInt(menuItemId, 10);
            })

            const amount = state.orderedItems[menuItemId];

            const rendered = renderOrderItem(menuItem, amount)
            container.appendChild(rendered)
        })

    app.appendChild(container)
}

function renderOrderItem(menuItem, amount) {
    const template = document.querySelector("#order-item-template");
    const node = template.content.cloneNode(true);

    const menuItemName = node.querySelector(".menu-item-name")
    const menuItemPrice = node.querySelector(".order-item-price")
    const menuAddButton = node.querySelector(".order-increment")
    const menuSubtractButton = node.querySelector(".order-decrement")
    const orderItemAmount = node.querySelector(".order-item-amount")
    const orderItemDeleteButton = node.querySelector(".order-item-delete")

    menuItemName.innerText = menuItem.name
    orderItemAmount.innerText = amount
    menuItemPrice.innerText = `ALL ${menuItem.price * amount}`

    menuAddButton.addEventListener("click", () => {
        state.orderedItems[menuItem.id]++;

        render();
    })

    menuSubtractButton.addEventListener("click", () => {
        if (state.orderedItems[menuItem.id] > 1) {
            state.orderedItems[menuItem.id]--;
        }

        render();
    })

    orderItemDeleteButton.addEventListener("click", () => {
        if (confirm("Do you want to remove this from the order?")) {
            delete state.orderedItems[menuItem.id];
        }

        render();
    })

    return node
}
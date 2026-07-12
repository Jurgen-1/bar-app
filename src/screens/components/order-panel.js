import { state } from "../../state";
import { render } from "../../render";

export function renderOrderPanel() {
    const template = document.querySelector("#order-panel-template");
    const node = template.content.cloneNode(true);

    const itemsAmount = node.querySelector(".items-amount")
    const itemsPrice = node.querySelector(".items-price")

    const itemAmounts = Object.values(state.orderedItems)
    console.log(itemAmounts)

    let sum = 0 
    itemAmounts.forEach ((amount) =>{
        sum = sum + amount
    }) 

    // itemsAmount.innerText = "Items: " + sum
    itemsAmount.innerText = `Items: ${sum}`

    let total = 0;

    Object.keys(state.orderedItems)
        .forEach((menuItemId) => {
            const menuItem = state.menuItems.find((menuItem) => {
                return menuItem.id === parseInt(menuItemId, 10);
                // return menuItem.id === +menuItemId
            })

            const price = menuItem.price;

            total = total + price * state.orderedItems[menuItemId];
        })

    itemsPrice.innerText = `ALL ${total}`
        

    const orderButton = node.querySelector(".order-button")

    orderButton.addEventListener("click", () => {
        state.currentScreen = "ORDER"
        render()
    })

    app.appendChild(node);
}

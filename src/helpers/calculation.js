import { state } from "../state";

export function calculateTotalPrice() {
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

    return total;
}
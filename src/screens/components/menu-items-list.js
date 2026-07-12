import { state } from "../../state";
import { render } from "../../render";

export function renderMenuItems() {
    const container = document.createElement("div");
    container.classList.add("menu-items")

    // const menuItem = state.menuItems[0];
    // const rendered = renderMenuItem(menuItem);
    // container.appendChild(rendered);

    // const menuItem1 = state.menuItems[1];
    // const rendered1 = renderMenuItem(menuItem1);
    // container.appendChild(rendered1);

    // const menuItem2 = state.menuItems[2];
    // const rendered2 = renderMenuItem(menuItem2);
    // container.appendChild(rendered2);


    // state.menuItems.forEach((menuItem) => {

    //     if (
    //         menuItem.categoryIds.includes(state.currentFilterId)
    //         || state.currentFilterId === 1
    //     ) {
    //         const rendered = renderMenuItem(menuItem)
    //         container.appendChild(rendered)
    //     }

    // })

    state
        .menuItems
        .filter((item) => {
            return item.categoryIds.includes(state.currentFilterId)
                || state.currentFilterId === 1
        })
        .forEach((menuItem) => {
            const rendered = renderMenuItem(menuItem)
            container.appendChild(rendered)
        })

    app.appendChild(container);
}

function renderMenuItem(menuItem) {
    const template = document.querySelector("#menu-item-template");
    const node = template.content.cloneNode(true);

    const menuItemName = node.querySelector(".menu-item-name")
    const menuItemDescription = node.querySelector(".menu-item-description")
    const menuItemPrice = node.querySelector(".menu-item-price")
    const menuAddButton = node.querySelector(".menu-item-button")

    menuItemName.innerText = menuItem.name
    menuItemDescription.innerText = menuItem.description
    menuItemPrice.innerText = `ALL ${menuItem.price}`

    menuAddButton.addEventListener("click", () => {
        if (state.orderedItems[menuItem.id]) {
            state.orderedItems[menuItem.id] = state.orderedItems[menuItem.id] + 1
        } else {
            state.orderedItems[menuItem.id] = 1;
        }

        render();
    })


    return node
}
import  "./menu-screen.css";
import {state} from "../state";

const app = document.querySelector("#app");

export function renderMenuScreen () {
    renderHeader()
    renderMenuItems()
}

function renderHeader () {
    const template = document.querySelector("#menu-header-template");
    const node = template.content.cloneNode(true);
    app.appendChild(node);
}

function renderMenuItems () {
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

    
    state.menuItems.forEach((menuItem)=> {
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

    menuItemName.innerText = menuItem.name
    menuItemDescription.innerText = menuItem.description
    menuItemPrice.innerText = `ALL ${menuItem.price}`

    return node
}
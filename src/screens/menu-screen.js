import  "./menu-screen.css";
import {state} from "../state";

const app = document.querySelector("#app");

export function renderMenuScreen () {
    renderHeader()
}

function renderHeader () {
    const template = document.querySelector("#menu-header-template");
    const node = template.content.cloneNode(true);
    app.appendChild(node);
}

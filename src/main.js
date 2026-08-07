import "./style.css";

import {render} from "./render";
import {state} from "./state";

const app = document.querySelector("#app");

async function main() {
    const categories = await fetch("http://localhost:3000/categories")
    const categoriesData = await categories.json();
    const menuItems = await fetch("http://localhost:3000/menu-items")
    const menuItemsData = await menuItems.json();
    
    state.filterCategories = categoriesData
    state.menuItems = menuItemsData;


  render();
}

main();

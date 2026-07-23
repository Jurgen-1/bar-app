import { filterCategories } from "./data/filter-categories";
import { menuItems } from "./data/menu-items";

export const state = {
    currentScreen: "MENU", // "MENU" | "ORDER" | "CONFIRM"
    currentFilterId: 1,
    filterCategories,
    menuItems,
    orderedItems: {
    }, // Keys are menu item ids, values are amount 
}

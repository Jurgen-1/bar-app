import { menuItems } from "./menu-items";

const filterCategories = [
    {
        id: 1,
        name: "All"
    },
    {
        id: 2,
        name: "Food"
    },
    {
        id: 3,
        name: "Drinks"
    },
    {
        id: 4,
        name: "Snacks"
    },
    {
        id: 5,
        name: "Special"
    }
];


export const state = {
    currentScreen: "MENU",
    currentFilterId: 1,
    filterCategories,
    menuItems
}
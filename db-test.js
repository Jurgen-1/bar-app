import {
  getCategories,
  getMenuItems,
  getMenuItemsJoin,
  getMenuItemById,
  getMenuItemByIdJoin,
  getMenuItemsByCategory,
} from "./db.js";

console.log("=== Categories ===");
console.log(getCategories());

console.log("\n=== Menu items ===");
console.log(getMenuItems());

console.log("\n=== Menu items (JOIN) ===");
console.log(getMenuItemsJoin());

console.log("\n=== Menu item #1 ===");
console.log(getMenuItemById(1));

console.log("\n=== Menu item #1 (JOIN) ===");
console.log(getMenuItemByIdJoin(1));

console.log("\n=== Menu items in category Food (2) ===");
console.log(getMenuItemsByCategory(2));

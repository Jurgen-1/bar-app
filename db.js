import { DatabaseSync } from "node:sqlite";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dbPath = join(__dirname, "data", "bar.db");

const db = new DatabaseSync(dbPath);

export function getCategories() {
  return db.prepare("SELECT id, name FROM categories ORDER BY id").all();
}

export function getMenuItems() {
  const items = db
    .prepare(
      "SELECT id, name, description, price, image FROM menu_items ORDER BY id"
    )
    .all();

  const links = db
    .prepare(
      "SELECT menu_item_id, category_id FROM menu_item_categories ORDER BY menu_item_id, category_id"
    )
    .all();

  const categoryIdsByItem = new Map();
  for (const link of links) {
    if (!categoryIdsByItem.has(link.menu_item_id)) {
      categoryIdsByItem.set(link.menu_item_id, []);
    }
    categoryIdsByItem.get(link.menu_item_id).push(link.category_id);
  }

  return items.map((item) => ({
    ...item,
    categoryIds: categoryIdsByItem.get(item.id) ?? [],
  }));
}

export function getMenuItemsJoin() {
  const rows = db
    .prepare(
      `
      SELECT
        menu_items.id,
        menu_items.name,
        menu_items.description,
        menu_items.price,
        menu_items.image,
        GROUP_CONCAT(menu_item_categories.category_id) AS category_ids
      FROM menu_items
      LEFT JOIN menu_item_categories
        ON menu_item_categories.menu_item_id = menu_items.id
      GROUP BY menu_items.id
      ORDER BY menu_items.id
      `
    )
    .all();

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    description: row.description,
    price: row.price,
    image: row.image,
    categoryIds: row.category_ids
      ? row.category_ids.split(",").map(Number)
      : [],
  }));
}

export function getMenuItemById(id) {
  const item = db
    .prepare(
      "SELECT id, name, description, price, image FROM menu_items WHERE id = ?"
    )
    .get(id);

  if (!item) {
    return null;
  }

  const categoryIds = db
    .prepare(
      "SELECT category_id FROM menu_item_categories WHERE menu_item_id = ? ORDER BY category_id"
    )
    .all(id)
    .map((row) => row.category_id);

  return { ...item, categoryIds };
}

export function getMenuItemByIdJoin(id) {
  const row = db
    .prepare(
      `
      SELECT
        menu_items.id,
        menu_items.name,
        menu_items.description,
        menu_items.price,
        menu_items.image,
        GROUP_CONCAT(menu_item_categories.category_id) AS category_ids
      FROM menu_items
      LEFT JOIN menu_item_categories
        ON menu_item_categories.menu_item_id = menu_items.id
      WHERE menu_items.id = ?
      GROUP BY menu_items.id
      `
    )
    .get(id);

  if (!row) {
    return null;
  }

  return {
    id: row.id,
    name: row.name,
    description: row.description,
    price: row.price,
    image: row.image,
    categoryIds: row.category_ids
      ? row.category_ids.split(",").map(Number)
      : [],
  };
}

export function getMenuItemsByCategory(categoryId) {
  if (categoryId === 1) {
    return getMenuItems();
  }

  return getMenuItems().filter((item) =>
    item.categoryIds.includes(categoryId)
  );
}

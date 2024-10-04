import { createDirectus, rest, readItems, createItems, updateItems, deleteItems } from '@directus/sdk';

const directus = createDirectus(process.env.NEXT_PUBLIC_DIRECTUS_URL || 'https://your-directus-url.com').with(rest());

export const fetchItems = async (collection: string) => {
  try {
    const items = await directus.request(readItems(collection));
    return items;
  } catch (error) {
    console.error('Error fetching items:', error);
    return [];
  }
};

export const createItem = async (collection: string, item: any) => {
  try {
    const createdItem = await directus.request(createItems(collection, [item]));
    return createdItem;
  } catch (error) {
    console.error('Error creating item:', error);
    return null;
  }
};

export const updateItem = async (collection: string, id: string, item: any) => {
  try {
    const updatedItem = await directus.request(updateItems(collection, [{ id, ...item }]));
    return updatedItem;
  } catch (error) {
    console.error('Error updating item:', error);
    return null;
  }
};

export const deleteItem = async (collection: string, id: string) => {
  try {
    await directus.request(deleteItems(collection, [id]));
    return true;
  } catch (error) {
    console.error('Error deleting item:', error);
    return false;
  }
};

export default directus;
import { Directus } from '@directus/sdk';

const directus = new Directus('https://your-directus-instance.com'); // Replace with your Directus instance URL

export const createItem = async (collection: string, item: any): Promise<any | null> => {
  try {
    const createdItem = await directus.items(collection).createOne(item);
    return createdItem;
  } catch (error) {
    console.error('Error creating item:', error);
    return null;
  }
};

export const updateItem = async (collection: string, id: string, item: any): Promise<any | null> => {
  try {
    const updatedItem = await directus.items(collection).updateOne(id, item);
    return updatedItem;
  } catch (error) {
    console.error('Error updating item:', error);
    return null;
  }
};

export const deleteItem = async (collection: string, id: string): Promise<boolean> => {
  try {
    await directus.items(collection).deleteOne(id);
    return true;
  } catch (error) {
    console.error('Error deleting item:', error);
    return false;
  }
};
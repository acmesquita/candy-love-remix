import { Item } from '../models/item'

export const generateRandomItem = (items: Item[]): Item | null => {
  if (!items || items.length === 0) { return null }

  const randomIndex = Math.floor(Math.random() * items.length);
  return items[randomIndex];
}
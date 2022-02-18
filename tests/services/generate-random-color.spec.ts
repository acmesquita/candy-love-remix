import { Item } from "~/models/item"
import { generateRandomItem } from "~/service"

describe('generateRandomItem', () => {
  test('should return one Item when call with list valid', () => {
    const listItems: Item[] = [{ color: 'red', describe: 'Loren', id: 1}]

    const item = generateRandomItem(listItems)

    expect(item?.color).toBe('red')
  })
  test('should return null when call with list without items', () => {
    const item = generateRandomItem([])

    expect(item).toBeNull()
  })
})
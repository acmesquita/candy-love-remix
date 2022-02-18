import { LoaderFunction, useLoaderData } from "remix";
import { listItems } from "~/factories";
import { Item } from "~/models/item";
import { App } from "~/pages";
import { generateRandomItem } from "~/service";

import styles from '~/styles/pages/app.css';

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

interface LoaderData {
  item: Item | null
}

export const loader: LoaderFunction = (): LoaderData => {
  return {
    item: generateRandomItem(listItems)
  }
}

export default function () {
  const { item } = useLoaderData<LoaderData>()

  return <App item={item} />
}
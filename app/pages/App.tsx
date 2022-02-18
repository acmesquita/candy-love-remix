import { Link } from "remix";
import { Footer, Title, Container } from "~/components";
import { Item } from "~/models/item";

export interface Props {
  item: Item | null
}

export function App({ item }: Props) {
  return (
    <main className="mainWrapper">
      <Title />
      <Link to="/" reloadDocument data-testid="link">
        <Container item={item} />
      </Link>
      <Footer />
    </main>
  )
}

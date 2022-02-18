import { Item } from '../models/item'

type Props = {
  item: Item | null
}

export function Container({ item }: Props) {
  return (
    <div
      className={`container ${item?.color || 'red'} animate__animated animate__fadeIn`}
      data-testid="container"
    >
      <small className="id">{item?.id}</small>
      <h2>{item?.describe}</h2>
    </div>

  )
}

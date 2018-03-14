import * as React from 'react'

export interface ItemsListProps {
  id?: string
}

const ItemsList: React.SFC<ItemsListProps> = props => {
  return <h1>Items, {props.id}</h1>
}

ItemsList.defaultProps = {
  id: '2208',
}

export default ItemsList

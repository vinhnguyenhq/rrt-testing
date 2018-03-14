import * as React from 'react'

export interface ItemDetailsProps {
  id?: string
}

const ItemDetails: React.SFC<ItemDetailsProps> = props => {
  return <h1>Hello, {props.id}</h1>
}

ItemDetails.defaultProps = {
  id: '2208',
}

export default ItemDetails

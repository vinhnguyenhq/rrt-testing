import * as React from 'react'

export interface ItemsProps {
  id?: string
}

class Items extends React.PureComponent<ItemsProps, {}> {
  static defaultProps = {
    id: 'hello from container',
  }

  render() {
    return <h1>`Widgets with id , ${this.props.id}`</h1>
  }
}

export default Items

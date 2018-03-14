import * as React from 'react'

export interface WidgetsProps {
  id?: string
}

class Widgets extends React.PureComponent<WidgetsProps, {}> {
  static defaultProps = {
    id: 'hello from container',
  }

  render() {
    return <h1>`Widgets with id , ${this.props.id}`</h1>
  }
}

export default Widgets

import * as React from 'react'

export interface WidgetsListProps {
  id?: string
}

const WidgetsList: React.SFC<WidgetsListProps> = props => {
  return <h1>`Widgets with id , ${props.id}`</h1>
}

WidgetsList.defaultProps = {
  id: '2208',
}

export default WidgetsList

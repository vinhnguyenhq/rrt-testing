import * as React from 'react'

export interface WidgetDetailsProps {
  id?: string
}

const WidgetDetails: React.SFC<WidgetDetailsProps> = props => {
  return <h1>`Widget with id , ${props.id}`</h1>
}

WidgetDetails.defaultProps = {
  id: '2208',
}

export default WidgetDetails

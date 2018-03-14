import * as React from 'react'

export interface RouterProps {
  id?: string
}

const Router: React.SFC<RouterProps> = props => {
  return <h1>Items, {props.id}</h1>
}

Router.defaultProps = {
  id: '2208',
}

export default Router

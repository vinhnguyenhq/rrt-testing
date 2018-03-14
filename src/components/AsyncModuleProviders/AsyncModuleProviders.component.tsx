import * as React from 'react'
import { PureComponent } from 'react'
import { RouteProps } from 'react-router-dom'
import {} from ''

export interface AMPProps {
  moduleProvider: () => Promise<JSX.Element>
  authRequired: boolean
  props: RouteProps
}

export interface AMPStates {
  component: JSX.Element | null
}

class AsyncModuleProviders extends PureComponent<AMPProps, AMPStates> {
  constructor(props: AMPProps) {
    super(props)

    this.state = {
      component: null,
    }
  }

  componentWillMount() {
    if (!this.state.component) {
      this.props.moduleProvider().then(component => this.setState({ component }))
    }
  }

  render() {
    const { component } = this.state
    const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />

    return <div>{component ? component : <Spin indicator={antIcon} />}</div>
  }
}

export default AsyncModuleProviders

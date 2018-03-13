import * as React from 'react'
import './App.css'
import { AppStore, Item, Widget } from './common/models'

const logo = require('./logo.svg')

class App extends React.Component {
  componentWillMount() {
    const items: Item[] = [
      {
        id: 1,
        created: new Date(),
        updated: null,
        name: 'item 01',
        desc: 'item 01 desc',
      },
    ]

    const widgets: Widget[] = [
      {
        id: 1,
        created: new Date(),
        updated: null,
        name: 'item 01',
        price: 100,
      },
    ]

    const appStoreInstance: AppStore = {
      id: 1,
      created: new Date(),
      updated: null,
      selectedItem: null,
      selectedWidget: null,
      items: items,
      widgets: widgets,
    }

    console.log(appStoreInstance)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>
    )
  }
}

export default App

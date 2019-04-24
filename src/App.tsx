import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { navigationMenus } from './mocks/navigation-menu';
import { Route } from 'react-router-dom';
import { MenuScreen } from './screens/Menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar {... { navigationMenus }} />
        <Route path='/order/menu' component={MenuScreen} />
      </div>
    );
  }
}

export default App;

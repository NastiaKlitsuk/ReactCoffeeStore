import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import { navigationMenus } from './mocks/navigation-menu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar {... { navigationMenus }} />
      </div>
    );
  }
}

export default App;

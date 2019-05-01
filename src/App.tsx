import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import { navigationMenus } from './mocks/navigation-menu';
import { Route, Switch } from 'react-router-dom';
import MenuScreen from './screens/Menu';
import OrderForm from './screens/OrderForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar {... { navigationMenus }} />
        <Switch>
          <Route exact path="/order/menu/:categoryName?" component={MenuScreen} />
          <Route path="/order/menu/:categoryName?/:subCategoryName?" component={OrderForm} />
        </Switch>
      </div>
    );
  }
}

export default App;

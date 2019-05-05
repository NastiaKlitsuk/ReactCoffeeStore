import './App.css';
import MenuScreen from './screens/Menu';
import OrderForm from './screens/OrderForm';
import React, { Component } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import { navigationMenus } from './mocks/navigation-menu';
import { Route, Switch } from 'react-router-dom';
import { setCategoryMenuParam } from './store/routes/routes-actions-creator';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar {... { navigationMenus }} />
        <Switch>
          <Route path="/order/menu/:categoryName" render={(props: any) => { setCategoryMenuParam(props.location); return <MenuScreen /> }} />
          <Route exact path="/order/menu" component={MenuScreen} />
          <Route path="/order/menu/:categoryName/:subCategoryName" component={OrderForm} />
        </Switch>
      </div>
    );
  }
}

export default App;

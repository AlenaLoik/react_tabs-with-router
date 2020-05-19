import React from 'react';
import './App.css';
import { TabsHead } from './TabsHead';
import { dataTabs } from './data';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <NavLink className="nav-link" to="/" exact>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tabs" exact>Tabs</NavLink>
        </li>
      </ul>
      <Switch>
        <Route path="/tabs">
          <h2>Tabs</h2>
          <ul className="nav nav-tabs nav-2">
            {dataTabs.map(theadCell => (
              <TabsHead
                content={theadCell.content}
                key={theadCell.title}
                title={theadCell.title}
              />
            ))}
          </ul>
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>

    </>
  );
}

export default App;

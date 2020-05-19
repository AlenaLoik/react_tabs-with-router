import React, { useState } from 'react';
import './App.css';
import { TabsHead } from './TabsHead';
import { TabsBody } from './TabsBody';
import { dataTabs } from './data';
import { NavLink, Switch, Route } from 'react-router-dom';

const App = () => {
  const [tabSelected, setSelected] = useState('');

  const onTabSelected = (title: string) => {
    setSelected(title);
  };

  const vievContent = dataTabs.find(tab => tab.title === tabSelected);

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
          <div className="app">
            {dataTabs.map(theadCell => (
              <TabsHead
                onTabSelected={onTabSelected}
                selectedTab={tabSelected}
                key={theadCell.title}
                title={theadCell.title}
              />
            ))}
            <TabsBody text={vievContent?.content} />
          </div>
        </Route>
        <Route path="/">
          <h2>Home</h2>
        </Route>
      </Switch>

    </>
  );
}

export default App;

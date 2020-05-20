import React from 'react';
import { useRouteMatch, NavLink, Switch, Route } from "react-router-dom";

type Props = {
  title: string;
  content: string;
}

export const TabsHead: React.FC<Props> = ({ title, content }) => {
  let match = useRouteMatch();

  return (
    <>
      <li className="nav-item">
        <NavLink className="nav-link" to={`${match.url}/${title}`}>
          {title}
        </NavLink>
      </li>
      <Switch>
        <Route path={`${match.url}/${title}`}>
          <section className="content">{content}</section>
        </Route>
      </Switch>
    </>
  )
};

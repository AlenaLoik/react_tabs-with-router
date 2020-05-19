import React from 'react';
import { useRouteMatch, Link } from "react-router-dom";

type Props = {
  title: string;
  onTabSelected: (title: string) => void;
  selectedTab: string;
}

export const TabsHead: React.FC<Props> = ({ title, onTabSelected, selectedTab }) => {
  let match = useRouteMatch();

  return (
    <Link to={`${match.url}/${title}`}>
      <button
        type="button"
        className={(selectedTab === title) ? 'button selected' : 'button'}
        onClick={() => {
          onTabSelected(title);
        }}
      >{title}</button>
    </Link>
  )
};

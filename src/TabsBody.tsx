import React from 'react';

type Props = {
  text?: string;
}

export const TabsBody: React.FC<Props> = ({ text }) => (
  <section className="text">{text}</section>
);

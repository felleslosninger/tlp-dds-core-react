import React, { FC } from 'react';

export interface SidebarProps {
  title: string;
  desc: string;
  backgroundColor?: 'white' | 'grey' | 'yellow' | 'red' | 'blue';
  imgPath: string;
  rightImage: boolean;
}

export const Sidebar: FC<SidebarProps> = () => {
  return <section>sidebar</section>;
};

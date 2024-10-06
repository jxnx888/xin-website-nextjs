'use client'
import React, {useState} from 'react';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const Header = () => {
  const items: MenuItem[] = [
    {
      label: <a href="/" >
        Home
      </a>,

      key: 'Home',
      icon: '',
    },
    {
      label:<a href="/skills" >
        Skills
      </a>,
      key: 'Skills',
      icon: '',
    },
    {
      label: 'Portfolio',
      key: 'Portfolio',
      icon: '',
      children:[
        {
          type: 'group',
          label: 'LCI Education',
          children: [
            { label: 'Montreal', key: 'Montreal' },
            { label: 'Global', key: 'Global' },
          ],
        },
      ]
    },
    {
      label: 'About Me',
      key: 'About',
      icon: '',
    },
    {
      label: 'Blog',
      key: 'Blog',
      icon: '',
    },
    {
      label: 'Contact',
      key: 'Contact',
      icon: '',
    },
    ]
  const [current, setCurrent] = useState('mail');

  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};

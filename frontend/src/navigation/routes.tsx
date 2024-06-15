import type { ComponentType, JSX } from 'react';

import Home from '@/pages/Home';
import Write from '@/pages/Write';
import Profile from '@/pages/Profile';
import Blog from '@/pages/Blog';

interface Route {
  path: string;
  Component: ComponentType;
  title?: string;
  icon?: JSX.Element;
}

export const routes: Route[] = [
  { path: '/', Component: Home },
  { path: '/write', Component: Write },
  { path: '/blogs/:id', Component: Blog  },
  { path: '/profile', Component: Profile },
  
];

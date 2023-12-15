import { ReactNode } from 'react';

export type PaletteComponent = {
  name: string;
  category: string;
  icon: string;
  description: string;
  component: ReactNode;
};

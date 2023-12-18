import { ReactNode } from 'react';
import { InputComponent } from './Input';
import { TextComponent } from './Text';
import { LinkComponent } from './Link';
import { FlexComponent } from './Flex';
import { groupBy } from '../utils/array';

export type Component<P> = {
  name: string;
  category: 'Basic' | 'Layout';
  icon: string;
  description: string;
  component: (props?: P) => ReactNode;
};

export const components = [InputComponent, TextComponent, LinkComponent, FlexComponent];

export const componentsGroupByCategroy = () => {
  return groupBy(components, item => item.category);
};

export const componentByName = (name: string) => {
  const component = components.find(component => component.name === name);
  if (component) {
    return component.component();
  }
};

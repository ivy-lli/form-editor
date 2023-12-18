import { InputComponent } from './Input';
import { TextComponent } from './Text';
import { LinkComponent } from './Link';
import { FlexComponent } from './Flex';
import { groupBy } from '../utils/array';

type DefaultComponentProps = {
  [key: string]: any;
  editMode?: boolean;
};

type UiComponent<Props extends DefaultComponentProps = DefaultComponentProps> = (props: Props & { id: string }) => JSX.Element;

type BaseField = {
  label?: string;
};
type TextField = BaseField & {
  type: 'text' | 'number' | 'textarea' | 'checkbox';
};
type SelectField = BaseField & {
  type: 'select' | 'radio';
  options: {
    label: string;
    value: string | number | boolean;
  }[];
};
type ArrayField<
  Props extends {
    [key: string]: any;
  } = {
    [key: string]: any;
  }
> = BaseField & {
  type: 'array';
  arrayFields: {
    [SubPropName in keyof Props[0]]: Field<Props[0][SubPropName]>;
  };
  defaultItemProps?: Props[0];
  getItemSummary?: (item: Props[0], index?: number) => string;
};

export type Field<
  Props extends {
    [key: string]: any;
  } = {
    [key: string]: any;
  }
> = TextField | SelectField | ArrayField<Props>;

type Fields<ComponentProps extends DefaultComponentProps = DefaultComponentProps> = {
  [PropName in keyof Omit<Required<ComponentProps>, 'children' | 'editMode'>]: Field<ComponentProps[PropName]>;
};

export type ComponentConfig<ComponentProps extends DefaultComponentProps = DefaultComponentProps, DefaultProps = ComponentProps> = {
  name: string;
  category: 'Basic' | 'Layout';
  icon: string;
  description: string;
  render: UiComponent<ComponentProps>;
  defaultProps?: DefaultProps;
  fields?: Fields<ComponentProps>;
};

export const components = [InputComponent, TextComponent, LinkComponent, FlexComponent];

export const componentsGroupByCategroy = () => {
  return groupBy(components, item => item.category);
};

export const componentByName = (name: string) => {
  return components.find(component => component.name === name);
};

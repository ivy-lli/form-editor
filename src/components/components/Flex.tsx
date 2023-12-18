import { ComponentConfig } from './component';

type FlexProps = {
  itemCount: number;
};

export const defaultFlexProps = {
  itemCount: 2
} as const satisfies FlexProps;

export const FlexComponent: ComponentConfig<FlexProps> = {
  name: 'Flex',
  category: 'Layout',
  icon: 'M2 20h8V4H2v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1ZM13 20h8V4h-8v16Zm-1 0V4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-8a1 1 0 0 1-1-1Z',
  description: 'A flexable layout',
  defaultProps: defaultFlexProps,
  render: props => <Flex {...props} />,
  fields: {
    itemCount: { type: 'number' }
  }
};

const Flex = ({ itemCount }: FlexProps) => (
  <div>
    {Array(itemCount).map((_e, i) => (
      <div key={i}>Column</div>
    ))}
  </div>
);

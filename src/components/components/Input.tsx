import { Component } from './component';

type InputProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  required: boolean;
};

export const defaultInputProps = {
  label: 'label',
  value: 'data.value',
  onChange: () => {},
  required: false
} as const satisfies InputProps;

export const InputComponent: Component<InputProps> = {
  name: 'Input',
  category: 'Basic',
  icon: 'M22 9c0-.6-.5-1-1.3-1H3.4C2.5 8 2 8.4 2 9v6c0 .6.5 1 1.3 1h17.4c.8 0 1.3-.4 1.3-1V9zm-1 6H3V9h18v6z M4 10h1v4H4z',
  description: 'A simple input with a label',
  component: props => <Input {...(props ? props : defaultInputProps)} />
};

const Input = ({ label, onChange, ...props }: InputProps) => (
  <label>
    <span>{label}</span>
    <input onChange={e => onChange(e.target.value)} {...props} />
  </label>
);

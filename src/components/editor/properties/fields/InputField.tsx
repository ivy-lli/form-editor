import { Field } from '../../../components/component';

type InputFieldProps = {
  field: Field;
  value: string;
  onChange: (value: string) => void;
};

export const InputField = ({ field, value, onChange }: InputFieldProps) => (
  <input type={field.type} value={value} onChange={e => onChange(e.target.value)} />
);

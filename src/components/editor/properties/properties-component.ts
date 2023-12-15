export type PropertyTypes = 'text' | 'number' | 'checkbox' | 'select';

export type Property = {
  type: PropertyTypes;
  name: string;
  label: string;
  value: string;
  required?: boolean;
};

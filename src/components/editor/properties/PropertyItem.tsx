import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { Field } from '../../components/component';
import { useData } from '../../data/useData';
import './PropertyItem.css';

type PropertyItemProps = {
  fieldName: string;
  field: Field;
};

export const PropertyItem = ({ fieldName, field }: PropertyItemProps) => {
  const { element, setElement } = useData();
  const [value, setValue] = useState('');
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (element) {
      element.props[fieldName] = e.target.value;
      setElement(element);
    }
  };
  useEffect(() => {
    setValue(element ? element.props[fieldName] : '');
  }, [element, fieldName]);
  const inputFor = (prop: Field) => {
    switch (prop.type) {
      case 'text':
      case 'number':
      case 'checkbox':
        return <input type={prop.type} value={value} onChange={onChange} />;
      case 'textarea':
        return <textarea value={value} />;
      case 'select':
        return (
          <select value={value}>
            {prop.options.map(option => (
              <option key={`${option.value}`} value={option.value as string | number}>
                {option.label}
              </option>
            ))}
          </select>
        );
    }
  };
  return (
    <div className='property-item'>
      <label>
        <span>{field.label ? field.label : fieldName}</span>
        {inputFor(field)}
      </label>
    </div>
  );
};

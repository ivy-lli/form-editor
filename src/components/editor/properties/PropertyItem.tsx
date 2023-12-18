import { Field } from '../../components/component';
import './PropertyItem.css';

type PropertyItemProps = {
  fieldName: string;
  field: Field;
};

export const PropertyItem = ({ fieldName, field }: PropertyItemProps) => {
  const inputFor = (prop: Field) => {
    switch (prop.type) {
      case 'text':
      case 'number':
      case 'checkbox':
        return <input type={prop.type} />;
      case 'textarea':
        return <textarea />;
      case 'select':
        return (
          <select>
            {prop.options.map(option => (
              <option value={option.value as string | number}>{option.label}</option>
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

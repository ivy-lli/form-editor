import './PropertyItem.css';
import { Property } from './properties-component';

type PropertyItemProps = {
  property: Property;
};

export const PropertyItem = ({ property }: PropertyItemProps) => {
  const inputForType = (prop: Property) => {
    switch (prop.type) {
      case 'text':
      case 'number':
      case 'checkbox':
        return <input type={prop.type} required={prop.required} value={prop.value} />;
      case 'select':
        return (
          <select required={prop.required} value={prop.value}>
            <option>test</option>
            <option>bla</option>
          </select>
        );
    }
  };
  return (
    <div className='property-item'>
      <label>
        <span>{property.label}</span>
        {inputForType(property)}
      </label>
    </div>
  );
};

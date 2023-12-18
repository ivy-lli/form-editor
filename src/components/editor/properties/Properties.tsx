import './Properties.css';
import { PropertyItem } from './PropertyItem';
import { Property } from './properties-component';

type PropertiesProps = {
  properties: Property[];
};

export const Properties = ({ properties }: PropertiesProps) => {
  return (
    <div className='properties'>
      <span className='properties-title'>Properties</span>
      {properties.map(prop => (
        <PropertyItem key={prop.name} property={prop} />
      ))}
    </div>
  );
};

import './Properties.css';
import { PropertyItem } from './PropertyItem';
import { PropertiesConfig } from './properties-config';

type PropertiesProps = {
  propertyConfig?: PropertiesConfig;
};

export const Properties = ({ propertyConfig }: PropertiesProps) => {
  return (
    <div className='properties'>
      <span className='properties-title'>Properties</span>
      {propertyConfig &&
        propertyConfig.fields &&
        Object.entries(propertyConfig.fields).map(([key, field]) => <PropertyItem key={key} fieldName={key} field={field} />)}
    </div>
  );
};

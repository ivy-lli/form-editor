import { PaletteComponent } from './palette-component';
import './PaletteItem.css';

type PaletteItemProps = {
  item: PaletteComponent;
};

export const PaletteItem = ({ item }: PaletteItemProps) => {
  return (
    <div className='palette-item' title={item.description}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path fill='currentColor' d={item.icon}></path>
      </svg>
      <span>{item.name}</span>
    </div>
  );
};

import { PaletteItem } from './PaletteItem';
import { PaletteComponent } from './palette-component';
import './Palette.css';

type PaletteProps = {
  items: Record<string, PaletteComponent[]>;
};

export const Palette = ({ items }: PaletteProps) => {
  return (
    <div className='palette'>
      {Object.entries(items).map(([category, groupItems]) => (
        <div key={category} className='palette-category'>
          <span className='palette-category-title'>{category}</span>
          <div className='palette-category-items'>
            {groupItems.map(item => (
              <PaletteItem key={item.name} item={item} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

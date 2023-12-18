import { PaletteItem } from './PaletteItem';
import { PaletteComponent } from './palette-component';
import './Palette.css';

type PaletteProps = {
  items: PaletteComponent[];
};

function groupBy<T>(arr: T[], fn: (item: T) => string) {
  return arr.reduce<Record<string, T[]>>((prev, curr) => {
    const groupKey = fn(curr);
    const group = prev[groupKey] || [];
    group.push(curr);
    return { ...prev, [groupKey]: group };
  }, {});
}

export const Palette = ({ items }: PaletteProps) => {
  const groupedItems = groupBy(items, item => item.category);
  return (
    <div className='palette'>
      {Object.entries(groupedItems).map(([category, groupItems]) => (
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

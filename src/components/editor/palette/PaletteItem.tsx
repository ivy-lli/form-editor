import { useDraggable } from '@dnd-kit/core';
import { PaletteConfig } from './palette-config';
import './PaletteItem.css';

type PaletteItemProps = {
  item: PaletteConfig;
};

export const PaletteItem = ({ item }: PaletteItemProps) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id: item.name });
  const style = transform ? { transform: `translate3d(${transform.x}px, ${transform.y}px)` } : undefined;
  return (
    <div className='palette-item' title={item.description} ref={setNodeRef} style={style} {...listeners} {...attributes}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
        <path fill='currentColor' d={item.icon}></path>
      </svg>
      <span>{item.name}</span>
    </div>
  );
};

export const PaletteItemOverlay = ({ item }: Partial<PaletteItemProps>) => {
  return (
    <>
      {item && (
        <div className='palette-item'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
            <path fill='currentColor' d={item.icon}></path>
          </svg>
          <span>{item.name}</span>
        </div>
      )}
    </>
  );
};

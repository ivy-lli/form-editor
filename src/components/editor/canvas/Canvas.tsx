import { useDroppable } from '@dnd-kit/core';
import './Canvas.css';
import { Config } from '../../components/component';
import { Draggable } from './Draggable';
import { useAppContext } from '../../data/useData';

type CanvasProps = {
  config: Config;
};

export const Canvas = ({ config }: CanvasProps) => {
  const { data } = useAppContext();
  const { isOver, setNodeRef } = useDroppable({ id: 'canvas' });
  return (
    <div className='canvas'>
      {data.content.map(obj => (
        <Draggable key={obj.id} config={config.components[obj.type]} data={obj} />
      ))}
      <div ref={setNodeRef} className={`canvas-drop-zone${isOver ? ' is-drop-target' : ''}`}></div>
    </div>
  );
};

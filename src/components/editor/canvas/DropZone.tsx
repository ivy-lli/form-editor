import { useDroppable } from '@dnd-kit/core';
import './DropZone.css';

type DropZoneProps = {
  id: string;
};

export const DropZone = ({ id }: DropZoneProps) => {
  const { isOver, setNodeRef } = useDroppable({ id: `DropZone-${id}` });
  return <div ref={setNodeRef} className={`drop-zone${isOver ? ' is-drop-target' : ''}`} />;
};

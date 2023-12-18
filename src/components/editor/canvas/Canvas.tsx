import { useDroppable } from '@dnd-kit/core';

export const Canvas = () => {
  const { isOver, setNodeRef } = useDroppable({ id: 'canvas' });
  return <div ref={setNodeRef}>{isOver ? 'Let it go' : 'Place a component from the palette here'}</div>;
};

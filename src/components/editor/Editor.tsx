import { Canvas } from './canvas/Canvas';
import { Palette } from './palette/Palette';
import { Properties } from './properties/Properties';
import './Editor.css';
import { useState } from 'react';
import { DndContext, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { componentByName, componentsGroupByCategroy } from '../components/component';
import { PaletteItemOverlay } from './palette/PaletteItem';

export const Editor = () => {
  const [activeId, setActiveId] = useState<string | undefined>();
  const handleDragEnd = () => setActiveId(undefined);
  const handleDragStart = (event: DragStartEvent) => setActiveId(`${event.active.id}`);
  return (
    <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
      <div className='editor-root'>
        <div className='palette-sidebar'>
          <Palette items={componentsGroupByCategroy()} />
        </div>
        <div className='canvas-block'>
          <Canvas />
        </div>
        <div className='properties-sidebar'>
          <Properties propertyConfig={componentByName('Input')} />
        </div>
      </div>
      <DragOverlay>{activeId ? <PaletteItemOverlay item={componentByName(activeId)} /> : null}</DragOverlay>
    </DndContext>
  );
};

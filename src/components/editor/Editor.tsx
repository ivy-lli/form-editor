import { Canvas } from './canvas/Canvas';
import { Palette } from './palette/Palette';
import { Properties } from './properties/Properties';
import './Editor.css';
import { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent } from '@dnd-kit/core';
import { componentByName, componentsGroupByCategroy, config } from '../components/component';
import { PaletteItemOverlay } from './palette/PaletteItem';
import { AppProvider } from '../data/useData';
import { UiEditorData } from '../data/data';
import { v4 as uuid } from 'uuid';

export const Editor = () => {
  const [data, setData] = useState<UiEditorData>({
    root: {},
    content: [{ id: 'test', type: 'Input', props: { label: 'test', value: 'hi' } }]
  });
  const [selectedElement, setSelectedElement] = useState('');
  const [activeId, setActiveId] = useState<string | undefined>();
  const handleDragEnd = (event: DragEndEvent) => {
    const target = event.over?.id;
    if (target && activeId) {
      const component = componentByName(activeId);
      const newData = structuredClone(data);
      newData.content.push({ id: `${component.name}-${uuid()}`, type: component.name, props: component.defaultProps });
      setData(newData);
    }
    console.log(event);
    setActiveId(undefined);
  };
  const handleDragStart = (event: DragStartEvent) => setActiveId(`${event.active.id}`);
  return (
    <AppProvider value={{ data, setData, setSelectedElement, selectedElement }}>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart}>
        <div className='editor-root'>
          <div className='palette-sidebar'>
            <Palette items={componentsGroupByCategroy()} />
          </div>
          <div className='canvas-block'>
            <Canvas config={config} />
          </div>
          <div className='properties-sidebar'>
            <Properties config={config} />
          </div>
        </div>
        <DragOverlay>{activeId ? <PaletteItemOverlay item={componentByName(activeId)} /> : null}</DragOverlay>
      </DndContext>
    </AppProvider>
  );
};

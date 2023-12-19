import { Canvas } from './canvas/Canvas';
import { Palette } from './palette/Palette';
import { Properties } from './properties/Properties';
import './Editor.css';
import { useState } from 'react';
import { DndContext, DragEndEvent, DragOverlay, DragStartEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { ComponentConfig, componentByName, componentsGroupByCategroy, config } from '../components/component';
import { PaletteItemOverlay } from './palette/PaletteItem';
import { AppProvider } from '../data/useData';
import { UiEditorData } from '../data/data';
import { v4 as uuid } from 'uuid';

const addNewComponent = (component: ComponentConfig, data: UiEditorData) => {
  data.content.push({ id: `${component.name}-${uuid()}`, type: component.name, props: structuredClone(component.defaultProps) });
};

const arraymove = <TArr extends object>(arr: TArr[], fromIndex: number, toIndex: number) => {
  const element = arr[fromIndex];
  arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
};

const moveComponent = (id: string, data: UiEditorData) => {
  const element = data.content.find(obj => obj.id === id);
  if (element) {
    const fromIndex = data.content.indexOf(element);
    arraymove(data.content, fromIndex, data.content.length - 1);
  }
};

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
      const newData = structuredClone(data);
      const component = componentByName(activeId);
      if (component) {
        addNewComponent(component, newData);
      } else {
        moveComponent(activeId, newData);
      }
      setData(newData);
    }
    setActiveId(undefined);
  };
  const handleDragStart = (event: DragStartEvent) => setActiveId(`${event.active.id}`);
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 15 } });
  const sensors = useSensors(mouseSensor);

  return (
    <AppProvider value={{ data, setData, setSelectedElement, selectedElement }}>
      <DndContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} sensors={sensors}>
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
        <DragOverlay dropAnimation={null}>{activeId ? <PaletteItemOverlay item={componentByName(activeId)} /> : null}</DragOverlay>
      </DndContext>
    </AppProvider>
  );
};

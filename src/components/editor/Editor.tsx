import { Canvas } from './Canvas';
import { Palette } from './palette/Palette';
import { Properties } from './properties/Properties';
import './Editor.css';
import { paletteItems } from './palette/components';
import { properties } from './properties/props';

export const Editor = () => {
  return (
    <div className='editor-root'>
      <div className='palette-sidebar'>
        <Palette items={paletteItems} />
      </div>
      <div className='canvas-block'>
        <Canvas />
      </div>
      <div className='properties-sidebar'>
        <Properties properties={properties} />
      </div>
    </div>
  );
};

import { DndContext } from '@dnd-kit/core';
import { Editor } from './components/editor/Editor';

function App() {
  return (
    <DndContext>
      <Editor />
    </DndContext>
  );
}

export default App;

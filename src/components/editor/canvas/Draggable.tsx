import { useAppContext } from '../../data/useData';
import { ContentData } from '../../data/data';
import { ComponentConfig } from '../../components/component';
import './Draggable.css';

type DraggableProps = {
  config: ComponentConfig;
  data: ContentData;
};

export const Draggable = ({ config, data }: DraggableProps) => {
  const appContext = useAppContext();
  const isSelected = appContext.selectedElement === data.id;
  return (
    <div onClick={() => appContext.setSelectedElement(data.id)} className={`draggable${isSelected ? ' selected' : ''}`}>
      {config.render(data.props)}
    </div>
  );
};

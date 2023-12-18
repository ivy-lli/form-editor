import { createContext, useContext } from 'react';
import { ContentData, UiEditorData } from './data';

export type AppContext = {
  data: UiEditorData;
  setData: (data: UiEditorData) => void;
  selectedElement?: string;
  setSelectedElement: (element: string) => void;
};

export const appContext = createContext<AppContext>({
  data: { root: {}, content: [] },
  setData: data => data,
  setSelectedElement: () => {}
});

export const AppProvider = appContext.Provider;

export const useAppContext = () => {
  return useContext(appContext);
};

export const useData = () => {
  const { data, setData, selectedElement } = useAppContext();
  const element = data.content.find(obj => obj.id === selectedElement);
  const setElement = (element: ContentData) => {
    const newData = structuredClone(data);
    newData.content[0] = element;
    setData(newData);
  };
  return { element, setElement };
};

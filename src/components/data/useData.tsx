import { createContext, useContext } from 'react';
import { ContentData, UiEditorData } from './data';

export type AppContext = {
  data: UiEditorData;
  setData: (value: (data: UiEditorData) => UiEditorData) => void;
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
  const setElement = (element: ContentData) =>
    setData(data => {
      data.content[0] = element;
      return data;
    });
  return { element, setElement };
};

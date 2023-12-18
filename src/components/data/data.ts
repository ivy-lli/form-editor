import { UiComponentProps } from '../components/component';

export type ContentData = {
  id: string;
  type: string;
  props: UiComponentProps<any>;
};

export type UiEditorData = {
  root: any;
  content: ContentData[];
};

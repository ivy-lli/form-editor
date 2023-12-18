import { Component } from '../../components/component';

export type PaletteComponent = Omit<Component<object>, 'component' | 'defaultProps'>;

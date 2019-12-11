import { define } from 'hybrids';
import Color from './';

define('qsui-palette', Color);

export default {
  title: 'Components|<qsui-palette>'
};

export const baseState = () => {
  const el = document.createElement('qsui-palette');
  return el;
};

import { define } from 'hybrids';
import Swatch from './';

define('qs-swatch', Swatch);

export default {
  title: 'Display|Color/<qs-swatch>'
};

export const Demo = () => document.createElement('qs-swatch');

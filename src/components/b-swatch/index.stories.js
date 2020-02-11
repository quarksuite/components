import { define } from 'hybrids';
import Swatch from './';

define('b-swatch', Swatch);

export default {
  title: 'Color|Bricks/<b-swatch>'
};

export const Demo = () => document.createElement('b-swatch');

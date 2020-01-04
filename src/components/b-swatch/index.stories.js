import { define } from 'hybrids';
import Swatch from './';

define('b-swatch', Swatch);

export default {
  title: 'Bricks|<b-swatch>'
};

export const demo = () => document.createElement('b-swatch');

import { define } from 'hybrids';
import Color from './';

define('b-color', Color);

export default {
  title: 'Knobs|Bricks/<b-color>'
};

export const Demo = () => document.createElement('b-color');

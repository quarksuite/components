import { define } from 'hybrids';
import Range from './';

define('b-range', Range);

export default {
  title: 'Knobs|Bricks/<b-range>'
};

export const Demo = () => document.createElement('b-range');

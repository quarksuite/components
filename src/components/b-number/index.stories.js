import { define } from 'hybrids';
import Number from './';

define('b-number', Number);

export default {
  title: 'Knobs|Bricks/<b-number>'
};

export const Demo = () => document.createElement('b-number');

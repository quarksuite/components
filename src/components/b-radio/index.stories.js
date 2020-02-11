import { define } from 'hybrids';
import Radio from './';

define('b-radio', Radio);

export default {
  title: 'Knobs|Bricks/<b-radio>'
};

export const Demo = () => document.createElement('b-radio');

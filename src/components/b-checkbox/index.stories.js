import { define } from 'hybrids';
import Checkbox from './';

define('b-checkbox', Checkbox);

export default {
  title: 'Knobs|Bricks/<b-checkbox>'
};

export const Demo = () => document.createElement('b-checkbox');

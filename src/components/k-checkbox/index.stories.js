import { define } from 'hybrids';
import Checkbox from './';

define('k-checkbox', Checkbox);

export default {
  title: 'Knobs|<k-checkbox>'
};

export const demo = () => document.createElement('k-checkbox');

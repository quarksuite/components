import { define } from 'hybrids';
import Range from './';

define('k-range', Range);

export default {
  title: 'Knobs|<k-range>'
};

export const demo = () => document.createElement('k-range');

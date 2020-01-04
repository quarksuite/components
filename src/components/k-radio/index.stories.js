import { define } from 'hybrids';
import Radio from './';

define('k-radio', Radio);

export default {
  title: 'Knobs|<k-radio>'
};

export const demo = () => document.createElement('k-radio');

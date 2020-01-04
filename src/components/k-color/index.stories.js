import { define } from 'hybrids';
import Color from './';

define('k-color', Color);

export default {
  title: 'Knobs|<k-color>'
};

export const demo = () => document.createElement('k-color');

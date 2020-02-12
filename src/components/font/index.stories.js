import { define } from 'hybrids';
import Font from './';

define('b-font', Font);

export default {
  title: 'Content|Bricks/<b-font>'
};

export const demo = () => document.createElement('b-font');

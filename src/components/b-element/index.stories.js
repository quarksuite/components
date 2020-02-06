import { define } from 'hybrids';
import Element from './';

define('b-element', Element);

export default {
  title: 'Bricks|<b-element>'
};

export const demo = () => document.createElement('b-element');

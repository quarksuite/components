import { define } from 'hybrids';
import Element from './';

define('qs-element', Element);

export default {
  title: 'Display|Proportion/<qs-element>'
};

export const demo = () => document.createElement('qs-element');

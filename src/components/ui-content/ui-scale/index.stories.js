import { define } from 'hybrids';
import Content from './';

define('ui-content', Content);

export default {
  title: 'UI|<ui-content>'
};

export const demo = () => document.createElement('ui-content');

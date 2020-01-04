import { define } from 'hybrids';
import Mix from './';

define('ui-mix', Mix);

export default {
  title: 'UI|<ui-mix>'
};

export const demo = () => document.createElement('ui-mix');

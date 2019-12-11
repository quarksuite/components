import { define } from 'hybrids';
import Mix from './';

define('ui-mix', Mix);

export default {
  title: 'UI|<ui-mix>'
};

export const baseState = () => {
  const el = document.createElement('ui-mix');
  return el;
};

export const setShowOutput = () => {
  const el = document.createElement('ui-mix');
  el.showOutput = true;
  return el;
};

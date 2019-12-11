import { define } from 'hybrids';
import Swatch from './';

define('b-swatch', Swatch);

export default {
  title: 'Bricks|<b-swatch>'
};

export const baseState = () => {
  const el = document.createElement('b-swatch');
  return el;
};

export const setValue = () => {
  const el = document.createElement('b-swatch');
  el.value = '#348ec9';
  return el;
};

export const setInputMode = () => {
  const el = document.createElement('b-swatch');
  el.input = true;
  return el;
};

export const setLabel = () => {
  const el = document.createElement('b-swatch');
  el.input = true;
  el.label = 'Base';
  return el;
};

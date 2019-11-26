import { withKnobs, text, number } from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Color from './';

define('qs-swatch', Color);

const el = document.createElement('qs-swatch');

export default {
  title: 'Color|<qs-swatch>',
  decorators: [withKnobs]
};

export const baseState = () => {
  return el;
};

export const setValue = () => {
  el.value = text('Value', '#348ec9');
  return el;
};

export const setTarget = () => {
  el.value = text('Value', '#348ec9');
  el.target = text('Target', '#39ff33');
  return el;
};

export const setAmount = () => {
  el.value = text('Value', '#348ec9');
  el.target = text('Target', '#39ff33');
  el.amount = number('Amount', 50, {
    range: true,
    min: 0,
    max: 100,
    step: 10
  });
  return el;
};

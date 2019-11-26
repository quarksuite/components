import { withKnobs, text, number } from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Color from './';

define('qs-swatch', Color);

export default {
  title: 'Color|<qs-swatch>',
  decorators: [withKnobs]
};

export const baseState = () => {
  const el = document.createElement('qs-swatch');
  return el;
};

export const setValue = () => {
  const el = document.createElement('qs-swatch');
  el.value = text('Value', '#348ec9');
  return el;
};

export const setTarget = () => {
  const el = document.createElement('qs-swatch');
  el.value = text('Value', '#348ec9');
  el.target = text('Target', '#39ff33');
  return el;
};

export const setAmount = () => {
  const el = document.createElement('qs-swatch');
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

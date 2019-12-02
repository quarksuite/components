import { withKnobs, text, number } from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Color from './';

define('qb-swatch', Color);

export default {
  title: 'Color|<qb-swatch>',
  decorators: [withKnobs]
};

export const baseState = () => {
  const el = document.createElement('qb-swatch');
  return el;
};

export const setValue = () => {
  const el = document.createElement('qb-swatch');
  el.value = text('Value', '#348ec9');
  return el;
};

export const setTarget = () => {
  const el = document.createElement('qb-swatch');
  el.value = text('Value', '#348ec9');
  el.target = text('Target', '#39ff33');
  return el;
};

export const setAmount = () => {
  const el = document.createElement('qb-swatch');
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

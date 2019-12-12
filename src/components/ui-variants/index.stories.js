import { withKnobs, boolean } from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Variants from './';

define('ui-variants', Variants);

export default {
  title: 'UI|<ui-variants>',
  decorators: [withKnobs]
};

export const baseState = () => {
  const el = document.createElement('ui-variants');
  return el;
};

export const setType = () => {
  const el = document.createElement('ui-variants');
  el.tints = boolean('Tints', false);
  el.tones = boolean('Tones', false);
  el.shades = boolean('Shades', false);
  return el;
};

export const setInputToggle = () => {
  const el = document.createElement('ui-variants');
  el.tints = boolean('Tints', false);
  el.tones = boolean('Tones', false);
  el.shades = boolean('Shades', false);
  el.input = boolean('Input', false);
  return el;
};

import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Typography from ".//index.js";
define('qs-typography', Typography);
export default {
  title: 'Fonts|<qs-typography>',
  decorators: [withKnobs]
};
export const baseState = () => {
  const el = document.createElement('qs-typography');
  return el;
};
export const setFamily = () => {
  const el = document.createElement('qs-typography');
  el.family = radios('Family', {
    Sans: 'sans',
    Serif: 'serif',
    Monospace: 'monospace'
  }, 'sans');
  return el;
};
export const setContent = () => {
  const el = document.createElement('qs-typography');
  el.family = radios('Family', {
    Sans: 'sans',
    Serif: 'serif',
    Monospace: 'monospace'
  }, 'sans');
  el.content = text('Content', 'The quick brown fox jumps over the lazy dog.');
  return el;
};
import { withKnobs, text, radios } from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Typography from './';

define('qs-typography', Typography);

const el = document.createElement('qs-typography');

export default {
  title: 'Fonts|<qs-typography>',
  decorators: [withKnobs]
};

export const baseState = () => {
  return el;
};

export const setFamily = () => {
  el.family = radios(
    'Family',
    {
      Sans: 'sans',
      Serif: 'serif',
      Monospace: 'monospace'
    },
    'sans'
  );

  return el;
};

export const setContent = () => {
  el.family = radios(
    'Family',
    {
      Sans: 'sans',
      Serif: 'serif',
      Monospace: 'monospace'
    },
    'sans'
  );

  el.content = text('Content', 'The quick brown fox jumps over the lazy dog.');

  return el;
};

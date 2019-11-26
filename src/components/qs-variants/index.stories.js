import { define } from 'hybrids';
import { withKnobs, boolean, number, radios } from '@storybook/addon-knobs';
import Variants from './';

define('qs-variants', Variants);

export default {
  title: 'Color|<qs-variants>',
  decorators: [withKnobs]
};

const el = document.createElement('qs-variants');

export const baseState = () => {
  return el;
};

export const setType = () => {
  el.type = radios(
    'Type',
    {
      Tints: 'tints',
      Tones: 'tones',
      Shades: 'shades'
    },
    'tints'
  );

  return el;
};

export const setLimit = () => {
  el.type = radios(
    'Type',
    {
      Tints: 'tints',
      Tones: 'tones',
      Shades: 'shades'
    },
    'tints'
  );

  el.limit = number('Limit', 3, {
    range: true,
    min: 1,
    max: 12
  });

  return el;
};

export const setContrast = () => {
  el.type = radios(
    'Type',
    {
      Tints: 'tints',
      Tones: 'tones',
      Shades: 'shades'
    },
    'tints'
  );

  el.limit = number('Limit', 3, {
    range: true,
    min: 1,
    max: 12
  });

  el.contrast = number('Contrast', 95, {
    range: true,
    min: 0,
    max: 100,
    step: 5
  });

  return el;
};

export const setMode = () => {
  el.type = radios(
    'Type',
    {
      Tints: 'tints',
      Tones: 'tones',
      Shades: 'shades'
    },
    'tints'
  );

  el.limit = number('Limit', 3, {
    range: true,
    min: 1,
    max: 12
  });

  el.contrast = number('Contrast', 95, {
    range: true,
    min: 0,
    max: 100,
    step: 5
  });

  el.mode = radios(
    'Mode',
    {
      Logarithmic: 'logarithmic',
      Linear: 'linear'
    },
    'logarithmic'
  );

  return el;
};

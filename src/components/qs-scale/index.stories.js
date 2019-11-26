import {
  withKnobs,
  boolean,
  text,
  number,
  radios
} from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Scale from './';

define('qs-scale', Scale);

const el = document.createElement('qs-scale');

export default {
  title: 'Scale & Proportion|<qs-scale>',
  decorators: [withKnobs]
};

export const baseState = () => {
  return el;
};

export const setBase = () => {
  el.base = number('Base', 1, {
    step: 0.25
  });

  return el;
};

export const setRatio = () => {
  el.base = number('Base', 1, {
    step: 0.25
  });

  el.ratio = text('Ratio', 'golden');

  return el;
};

export const setLimit = () => {
  el.base = number('Base', 1, {
    step: 0.25
  });

  el.ratio = text('Ratio', 'golden');

  el.limit = number('Limit', 6, {
    range: true,
    min: 4,
    max: 10
  });

  return el;
};

export const setInvert = () => {
  el.base = number('Base', 1, {
    step: 0.25
  });

  el.ratio = text('Ratio', 'golden');

  el.limit = number('Limit', 6, {
    range: true,
    min: 4,
    max: 10
  });

  el.invert = boolean('Invert', false);

  return el;
};

export const setUnit = () => {
  el.base = number('Base', 1, {
    step: 0.25
  });

  el.ratio = text('Ratio', 'golden');

  el.limit = number('Limit', 6, {
    range: true,
    min: 4,
    max: 10
  });

  el.invert = boolean('Invert', false);

  el.unit = radios(
    'Unit',
    {
      CH: 'ch',
      EX: 'ex',
      PX: 'px',
      EM: 'em',
      REM: 'rem',
      PC: 'pc',
      MM: 'mm',
      VW: 'vw',
      VH: 'vh',
      VMIN: 'vmin',
      VMAX: 'vmax'
    },
    'rem'
  );

  return el;
};

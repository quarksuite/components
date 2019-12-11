import { define } from 'hybrids';
import { withKnobs, radios } from '@storybook/addon-knobs';
import Scheme from './';

define('b-scheme', Scheme);

export default {
  title: 'Bricks|<b-scheme>',
  decorators: [withKnobs]
};

export const baseState = () => {
  const el = document.createElement('b-scheme');
  return el;
};

export const setBase = () => {
  const el = document.createElement('b-scheme');
  el.base = '#348ec9';
  return el;
};

export const setScheme = () => {
  const el = document.createElement('b-scheme');
  el.base = '#348ec9';
  el.scheme = radios(
    'Scheme',
    {
      Monochromatic: 'monochromatic',
      Analogous: 'analogous',
      Complementary: 'complementary',
      SplitComplementary: 'split complementary',
      Triadic: 'triadic',
      DualColor: 'dual color',
      Tetradic: 'tetradic'
    },
    'monochromatic'
  );

  return el;
};

import { define } from 'hybrids';
import { withKnobs, boolean, number, radios } from '@storybook/addon-knobs';
import Scheme from ".//index.js";
define('qs-scheme', Scheme);
export default {
  title: 'Color|<qs-scheme>',
  decorators: [withKnobs]
};
export const baseState = () => {
  const el = document.createElement('qs-scheme');
  return el;
};
export const setType = () => {
  const el = document.createElement('qs-scheme');
  el.type = radios('Type', {
    Monochromatic: 'monochromatic',
    Analogous: 'analogous',
    Complementary: 'complementary',
    Split: 'split complementary',
    Triadic: 'triadic',
    Dual: 'dual color',
    Tetradic: 'tetradic'
  }, 'monochromatic');
  return el;
};
export const setDistance = () => {
  const el = document.createElement('qs-scheme');
  el.type = radios('Type', {
    Monochromatic: 'monochromatic',
    Analogous: 'analogous',
    Complementary: 'complementary',
    Split: 'split complementary',
    Triadic: 'triadic',
    Dual: 'dual color',
    Tetradic: 'tetradic'
  }, 'monochromatic');
  el.distance = number('Distance (analogous, split complementary, dual color)', 30, {
    range: true,
    min: 15,
    max: 45,
    step: 5
  });
  return el;
};
export const setAccented = () => {
  const el = document.createElement('qs-scheme');
  el.type = radios('Type', {
    Monochromatic: 'monochromatic',
    Analogous: 'analogous',
    Complementary: 'complementary',
    Split: 'split complementary',
    Triadic: 'triadic',
    Dual: 'dual color',
    Tetradic: 'tetradic'
  }, 'monochromatic');
  el.accented = boolean('Accented (analogous, split complementary)', false);
  return el;
};
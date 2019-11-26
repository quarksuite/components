import { withKnobs, text, number } from '@storybook/addon-knobs';
import { define } from 'hybrids';
import Value from './';

define('qs-value', Value);

const el = document.createElement('qs-value');

export default {
  title: 'Scale & Proportion|<qs-value>',
  decorators: [withKnobs]
};

export const baseState = () => {
  return el;
};

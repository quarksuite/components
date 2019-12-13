import { define } from 'hybrids';
import Variants from './';

define('ui-variants', Variants);

export default {
  title: 'UI|<ui-variants>'
};

export const baseState = () => {
  const el = document.createElement('ui-variants');
  return el;
};

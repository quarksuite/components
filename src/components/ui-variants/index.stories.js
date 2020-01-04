import { define } from 'hybrids';
import Variants from './';

define('ui-variants', Variants);

export default {
  title: 'UI|<ui-variants>'
};

export const demo = () => document.createElement('ui-variants');

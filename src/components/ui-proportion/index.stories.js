import { define } from 'hybrids';
import Proportion from './';

define('ui-proportion', Proportion);

export default {
  title: 'UI|<ui-proportion>'
};

export const demo = () => document.createElement('ui-proportion');

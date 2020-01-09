import { define } from 'hybrids';
import Custom from './';

define('ui-custom', Custom);

export default {
  title: 'UI|<ui-custom>'
};

export const demo = () => document.createElement('ui-custom');

import { define } from 'hybrids';
import Variant from './';

define('c-variant', Variant);

export default {
  title: 'Component|<c-variant>'
};

export const demo = () => document.createElement('c-variant');

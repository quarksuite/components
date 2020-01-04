import { define } from 'hybrids';
import Scheme from './';

define('ui-scheme', Scheme);

export default {
  title: 'UI|<ui-scheme>'
};

export const demo = () => document.createElement('ui-scheme');

import { define } from 'hybrids';
import Scheme from './';

define('ui-scheme', Scheme);

export default {
  title: 'UI|<ui-scheme>'
};

export const baseState = () => {
  const el = document.createElement('ui-scheme');
  return el;
};

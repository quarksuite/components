import { define } from 'hybrids';
import Scale from './';

define('b-scale', Scale);

export default {
  title: 'Bricks|<b-scale>'
};

export const demo = () => document.createElement('b-scale');

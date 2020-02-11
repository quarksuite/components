import { define } from 'hybrids';
import Button from './';

define('b-button', Button);

export default {
  title: 'Knobs|Bricks/<b-button>'
};

export const Demo = () => document.createElement('b-button');

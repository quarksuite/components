import { define } from 'hybrids';
import Text from './';

define('b-text', Text);

export default {
  title: 'Knobs|Bricks/<b-text>'
};

export const Demo = () => document.createElement('b-text');

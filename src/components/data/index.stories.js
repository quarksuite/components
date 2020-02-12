import { define } from 'hybrids';
import Data from './';

define('b-data', Data);

export default {
  title: 'Data|Bricks/<b-data>'
};

export const Demo = () => document.createElement('b-data');

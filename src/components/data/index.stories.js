import { define } from 'hybrids';
import Data from './';

define('qs-data', Data);

export default {
  title: 'Display|Data/<qs-data>'
};

export const Demo = () => document.createElement('qs-data');

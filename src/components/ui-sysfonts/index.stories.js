import { define } from 'hybrids';
import Sysfonts from './';

define('ui-sysfonts', Sysfonts);

export default {
  title: 'UI|<ui-sysfonts>'
};

export const demo = () => document.createElement('ui-sysfonts');

import { define } from 'hybrids';
import Dataview from './';

define('ui-dataview', Dataview);

export default {
  title: 'UI|<ui-dataview>'
};

export const demo = () => document.createElement('ui-dataview');

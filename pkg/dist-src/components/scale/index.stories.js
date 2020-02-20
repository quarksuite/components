import { define } from 'hybrids';
import Scale from ".//index.js";
define('qs-scale', Scale);
export default {
  title: 'Display|Content/<qs-scale>'
};
export const demo = () => document.createElement('qs-scale');
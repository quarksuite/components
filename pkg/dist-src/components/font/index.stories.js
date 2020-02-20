import { define } from 'hybrids';
import Font from ".//index.js";
define('qs-font', Font);
export default {
  title: 'Display|Content/<qs-font>'
};
export const demo = () => document.createElement('qs-font');
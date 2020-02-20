import { define } from 'hybrids';
import Field from ".//index.js";
define('qs-field', Field);
export default {
  title: 'Controls|<qs-field>'
};
export const Demo = () => `
<qs-field label="Sample Field" label-pos="top">
  <input type="text" />
</qs-field>
`;
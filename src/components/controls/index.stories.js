import { define } from 'hybrids';
import Controls from './';
import Fieldset from '../fieldset';
import Field from '../field';

define('qs-controls', Controls);
define('qs-fieldset', Fieldset);
define('qs-field', Field);

export default {
  title: 'Controls|<qs-controls>'
};

export const Demo = () => `
<qs-controls>
  <qs-fieldset legend="Checkbox Sample">
    <label><input type="checkbox" /> first</label>
    <label><input type="checkbox" /> second</label>
  </qs-fieldset>
  <qs-fieldset legend="Radio Sample">
    <label><input type="radio" /> first</label>
    <label><input type="radio" /> second</label>
  </qs-fieldset>
  <qs-field label="Sample Field" label-pos="top">
    <input type="color" />
  </qs-field>
  <button type="button">Click me</button>
</qs-controls>
`;

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
<style>
  qs-controls {
    --form-font: monospace;
    --form-font-size: 1rem;
    --group-border: 4px solid gainsboro;
    --field-label-font-size: 2em;
  }

  qs-fieldset label {
    font-size: 1.25em;
  }
</style>
<qs-controls>
  <qs-fieldset group="Checkbox Sample">
    <qs-field label="first" label-pos="right">
      <input type="checkbox" />
    </qs-field>
    <qs-field label="second" label-pos="right">
      <input type="checkbox" />
    </qs-field>
  </qs-fieldset>
  <qs-fieldset group="Radio Sample">
    <qs-field label="first" label-pos="right">
      <input type="radio" />
    </qs-field>
    <qs-field label="second" label-pos="right">
      <input type="radio" />
    </qs-field>
  </qs-fieldset>
  <qs-field label="Sample Field" label-pos="top">
    <input type="color" />
  </qs-field>
  <button type="button">Click me</button>
</qs-controls>
`;

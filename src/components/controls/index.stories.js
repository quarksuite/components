import { html, define } from 'hybrids';
import Controls from './';
import Fieldset from '../fieldset';
import Field from '../field';

define('qs-controls', Controls);
define('qs-fieldset', Fieldset);
define('qs-field', Field);

export default {
  title: 'Controls|<qs-controls>'
};

define('storybook-controls', {
  render: () => html`
    <style>
      qs-controls {
        --form-font: monospace;
        --form-font-size: 1rem;
        --group-border: 4px solid gainsboro;
        --group-padding: 0.75em;
        --field-label-font-size: 2em;
      }
    </style>
    <qs-controls>
      <qs-fieldset group="Checkbox Sample">
        <qs-field label-for="first" label="first" label-pos="right"
          ><input type="checkbox" />
        </qs-field>
        <qs-field label-for="second" label="second" label-pos="right"
          ><input type="checkbox" />
        </qs-field>
      </qs-fieldset>
      <qs-fieldset group="Radio Sample">
        <qs-field label-for="first" label="first" label-pos="right"
          ><input type="radio" />
        </qs-field>
        <qs-field label-for="second" label="second" label-pos="right"
          ><input type="radio" />
        </qs-field>
      </qs-fieldset>
      <qs-field label="Color" label-for="color">
        <input type="color" value="#f00000" />
      </qs-field>
      <button type="button">Click me</button>
    </qs-controls>
  `
});

export const Demo = () => `<storybook-controls></storybook-controls>`;

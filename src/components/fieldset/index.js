import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  group: 'The Legend of Fieldset',
  render: ({ group }) => html`
    ${hostInit}
    <style>
      :host {
        --fieldset-border: 2px solid black;
        --fieldset-font: sans-serif;

        --legend-font-size: 1.25em;
        --legend-padding: 0 0.5em;
        --legend-weight: 700;

        /* Internal qs-field options */
        --option-label-font-size: 1em;
        --option-label-weight: 400;
        --option-input-border: 4px solid black;
        --option-input-font-size: var(--label-font-size);
        --option-input-radius: 0.5em;
        --option-input-padding: 0.75em;

        --option-color-height: 3em;

        font-family: var(--fieldset-font);
      }

      fieldset {
        border: var(--fieldset-border);
      }

      legend {
        font-size: var(--legend-font-size);
        font-weight: var(--legend-weight);
        padding: var(--legend-padding);
      }

      ::slotted(qs-field) {
        --label-weight: var(--option-label-weight);
        --label-font-size: var(--option-label-font-size);

        --input-border: 4px solid black;
        --input-font-size: var(--label-font-size);
        --input-radius: 0.5em;
        --input-padding: 0.75em;

        --color-input-height: 3em;

        display: inline-block;
      }
    </style>
    <fieldset>
      <legend>${group}</legend>
      <slot></slot>
    </fieldset>
  `
};

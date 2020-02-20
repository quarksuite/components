import { html } from 'hybrids';
import hostInit from "../common/host.js";
export default {
  group: 'The Legend of Fieldset',
  render: ({
    group
  }) => html`
    ${hostInit}
    <style>
      :host {
        --fieldset-border: 2px solid black;
        --fieldset-font: sans-serif;

        --legend-padding: 0 0.5em;
        --legend-weight: 700;

        font-family: var(--fieldset-font);
      }

      fieldset {
        border: var(--fieldset-border);
      }

      legend {
        font-weight: var(--legend-weight);
        padding: var(--legend-padding);
      }

      ::slotted(qs-field) {
        display: inline-block;
      }
    </style>
    <fieldset>
      <legend>${group}</legend>
      <slot></slot>
    </fieldset>
  `
};
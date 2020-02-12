import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  legend: 'The Legend of Fieldset',
  render: ({ legend }) => html`
    ${hostInit}
    <style>
      :host {
        --border: 2px solid black;
        --font: sans-serif;
        --legend-padding: 0 0.5em;
        --legend-weight: 700;

        font-family: var(--font);
      }

      fieldset {
        border: var(--border);
      }

      legend {
        font-weight: var(--legend-weight);
        padding: var(--legend-padding);
      }
    </style>
    <fieldset>
      <legend>${legend}</legend>
      <slot></slot>
    </fieldset>
  `
};

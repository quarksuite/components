import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  value: '#aaaaaa',
  render: ({ value }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --border-color: black;
          --border-width: 4px;
          --border-radius: 0;

          --swatch-padding: 1.5em;

          --value-font: monospace;
          --value-padding: calc(var(--swatch-padding) / 2);
          --value-size: 1rem;
        }

        div {
          background: ${value};
          border: var(--border-width) solid var(--border-color);
          border-radius: var(--border-radius);
          padding: var(--swatch-padding);
        }

        code {
          background: rgba(255, 255, 255, 0.8);
          border-radius: calc(var(--border-radius) / 2);
          display: block;
          font-family: var(--value-font);
          font-size: var(--value-size);
          padding: var(--value-padding);
          text-align: center;
        }
      </style>
      <div>
        <code>${value}</code>
      </div>
    `
};

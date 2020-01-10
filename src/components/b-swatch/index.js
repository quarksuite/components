import { html } from 'hybrids';
import { color } from '@quarksuite/core';

import hostInit from '../shared/host';

export default {
  value: '#aaaaaa',
  render: ({ value }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --border-width: var(--ms-inline-4-x);
          --swatch-padding: var(--ms-block-2-x);
          --value-font: var(--font-system-mono);
          --value-padding: calc(var(--swatch-padding) / 2);
          --value-size: var(--ms-block-base);
        }

        div {
          background: ${value};
          border: var(--border-width) solid;
          border-color: ${color.palette(value, {
            shades: { limit: 1, contrast: 24 }
          })[0].shade};
          padding: var(--swatch-padding);
        }

        code {
          background: rgba(255, 255, 255, 0.8);
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

import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

export default {
  value: '#111111',
  render: ({ value }) => html`
    <style>
      :host {
        --swatch-padding: 2em;
        --value-padding: calc(var(--swatch-padding) / 2);
        --value-size: 1.25em;
      }

      div {
        background: ${value};
        padding: var(--swatch-padding);
      }

      code {
        background: rgba(255, 255, 255, 0.8);
        display: block;
        font-family: ${typography.system('monospace')};
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

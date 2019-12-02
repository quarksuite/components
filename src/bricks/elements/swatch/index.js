import { html } from 'hybrids';
import { color } from '@quarksuite/core';

export default {
  value: '#348ec9',
  render: ({ value }) => html`
    <style>
      :host {
        --swatch-padding: 2em;
        --value-alignment: center;
        --value-alpha: 0.8;
        --value-padding: var(--swatch-padding);
        --value-font-size: 2em;
      }

      div {
        background: ${value};
        padding: var(--swatch-padding);
      }

      code {
        background: rgba(255, 255, 255, var(--value-alpha));
        display: block;
        font-size: var(--value-font-size);
        padding: var(--value-padding);
        text-align: var(--value-alignment);
      }
    </style>
    <div><code>${value}</code></div>
  `
};

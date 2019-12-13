import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

export default {
  value: '',
  input: false,
  label: 'Color',
  render: ({ value, input, label }) => html`
    <style>
      :host {
        --swatch-padding: 2em;
        --value-padding: calc(var(--swatch-padding) / 2);
        --value-size: 1.25em;
      }

      div {
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

    <div style="background: ${value || '#111111'}">
      <code>${value || '#111111'}</code>
    </div>
  `
};

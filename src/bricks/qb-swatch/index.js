import { html } from 'hybrids';
import { color } from '@quarksuite/core';

const isMixed = (value, target, amount) => {
  return target
    ? html`
        <style>
          div {
            background: ${color.mix(value, target, amount)};
          }
        </style>
        <div>
          <code>${color.mix(value, target, amount)}</code>
        </div>
      `
    : html`
        <style>
          div {
            background: ${value};
          }
        </style>
        <div><code>${value}</code></div>
      `;
};

export default {
  value: '#aaaaaa',
  target: undefined,
  amount: 50,
  render: ({ value, target, amount }) => html`
    <style>
      :host {
        --swatch-padding: 2em;
        --value-alignment: center;
        --value-alpha: 0.8;
        --value-padding: var(--swatch-padding);
        --value-font-size: 2em;
      }

      div {
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
    ${isMixed(value, target, amount)}
  `
};

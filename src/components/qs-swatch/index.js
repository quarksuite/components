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
        <div><code>${color.mix(value, target, amount)}</code></div>
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
      div,
      code {
        padding: 1em;
      }
      code {
        background: rgba(255, 255, 255, 0.8);
        display: block;
        text-align: center;
      }
    </style>
    ${isMixed(value, target, amount)}
  `
};

import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import BSwatch from '../b-swatch';

export default {
  base: '',
  blend: '',
  amount: 50,
  output: ({ base, blend, amount }) => color.mix(base, blend, amount),
  showOutput: false,
  render: ({ base, blend, output, showOutput }) =>
    html`
      <style>
        :host {
          display: flex;
          flex-flow: row wrap;
          --ui-label-size: 2em;
        }

        b-swatch {
          --label-size: var(--ui-label-size);
          flex-basis: 50%;
          flex-grow: 1;
        }

        .amount-ctrl {
          flex-basis: 100%;
          margin-bottom: 1em;
        }

        label,
        input[type='range'] {
          display: block;
        }

        label {
          font-size: var(--ui-label-size);
          margin: 0.5em 0;
        }

        input[type='range'] {
          width: 100%;
        }
      </style>
      <b-swatch
        value="${base}"
        label="Base"
        input
        oninput="${html.set('base')}"
      ></b-swatch>
      <b-swatch
        value="${blend}"
        label="Blend"
        input
        oninput="${html.set('blend')}"
      ></b-swatch>
      <div class="amount-ctrl">
        <label for="amount">Blend Percentage</label>
        <input id="amount" type="range" oninput="${html.set('amount')}" />
      </div>
      ${showOutput &&
        html`
          <b-swatch value="${output}"></b-swatch>
        `}
    `.define({ BSwatch })
};

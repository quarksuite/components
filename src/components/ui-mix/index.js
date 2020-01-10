import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import colorKnob from '../knobs/color';
import rangeKnob from '../knobs/range';

import BSwatch from '../b-swatch';

import hostInit from '../shared/host';
import formStyles from '../shared/form';

export default {
  base: 'dodgerblue',
  blend: 'hotpink',
  amount: 50,
  format: 'hex',
  output: ({ base, blend, amount }) => color.mix(base, blend, amount),
  render: ({ base, blend, amount, format, output }) =>
    html`
      ${hostInit} ${formStyles}
      <style>
        :host {
          --form-flow: row wrap;
        }
        form {
          display: flex;
          flex-flow: var(--form-flow);
          justify-content: space-between;
        }

        .color {
          margin: var(--field-margins);
          flex-basis: 49.5%;
        }

        .range {
          flex: 1;
        }

        .range > input {
          width: 100%;
        }
      </style>
      <form action="">
        ${colorKnob('Base Color', base, html.set('base'))}
        ${colorKnob('Blend Target', blend, html.set('blend'))}
        ${rangeKnob('Blend Amount', amount, html.set('amount'))}
      </form>
      <b-swatch value="${output}"></b-swatch>
    `.define({ BSwatch })
};

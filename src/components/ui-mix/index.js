import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import colorKnob from '../knobs/color';
import rangeKnob from '../knobs/range';

export default {
  base: '#ff0000',
  blend: '#0000ff',
  amount: 50,
  format: 'hex',
  output: ({ base, blend, amount }) => color.mix(base, blend, amount),
  render: ({ base, blend, amount, format, output }) =>
    html`
      <form action="">
        ${colorKnob('Base Color', base, html.set('base'))}
        ${colorKnob('Blend Target', blend, html.set('blend'))}
        ${rangeKnob('Blend Amount', amount, html.set('amount'))}
      </form>
      <b-swatch value="${color.format(output, format)}"></b-swatch>
    `
};

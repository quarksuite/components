import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import UIVariants from '../ui-variants';

export default {
  base: '#348ec9',
  type: 'dual color',
  distance: 30,
  accented: false,
  output: ({ base, type, distance, accented }) =>
    color.palette(base, { scheme: { type, distance, accented } }),
  render: ({ base, type, distance, accented, output }) =>
    html`
      <style>
        :host {
          display: flex;
          flex-flow: row wrap;
        }

        ui-variants {
          flex: 1;
          margin-bottom: 4em;
        }

        .base {
          flex-basis: 100%;
        }
      </style>
      <ui-variants class="base" base="${base}"></ui-variants>
      ${type !== 'monochromatic' &&
        Object.values(output.filter((_, i) => i !== 0)).map(
          color =>
            html`
              <ui-variants base="${color.base}"></ui-variants>
            `
        )}
    `.define({ UIVariants })
};

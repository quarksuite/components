import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import UIVariants from '../ui-variants';

export default {
  base: '#348ec9',
  type: 'monochromatic',
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
      ${Object.values(output).map(
        color =>
          html`
            <ui-variants
              base="${color.base}"
              onchange="${html.set('base')}"
            ></ui-variants>
          `
      )}
    `.define({ BSwatch, UIVariants })
};

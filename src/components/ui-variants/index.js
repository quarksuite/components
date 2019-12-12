import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import CVariant from '../c-variant';

export default {
  base: '#348ec9',
  tints: false,
  tones: false,
  shades: false,
  input: false,
  render: ({ base, tints, tones, shades, input }) =>
    html`
      <style>
        .variants {
          display: flex;
          flex-flow: row wrap;
          align-content: start;
        }

        c-variant {
          flex-basis: 33.333333334%;
          flex: 1;
        }
      </style>
      ${input
        ? html`
            <b-swatch
              value="${base}"
              input
              oninput="${html.set('base')}"
            ></b-swatch>
          `
        : html`
            <b-swatch value="${base}"></b-swatch>
          `}
      <div class="variants">
        ${tints &&
          html`
            <c-variant swatch="${base}"></c-variant>
          `}
        ${tones &&
          html`
            <c-variant swatch="${base}" type="tones"></c-variant>
          `}
        ${shades &&
          html`
            <c-variant swatch="${base}" type="shades"></c-variant>
          `}
      </div>
    `.define({ BSwatch, CVariant })
};

import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import CVariant from '../c-variant';

export default {
  base: '#348ec9',
  tints: true,
  tones: false,
  shades: true,
  render: ({ base, tints, tones, shades }) =>
    html`
      <style>
        :host {
          display: flex;
          flex-flow: row wrap;
        }

        .base {
          flex-basis: 100%;
          flex-grow: 1;
        }

        c-variant {
          flex-basis: 50%;
          flex-grow: 1;
        }
      </style>
      <b-swatch class="base" value="${base}"></b-swatch>
      <c-variant swatch="${base}"></c-variant>
      <c-variant swatch="${base}" type="tones"></c-variant>
      <c-variant swatch="${base}" type="shades"></c-variant>
    `.define({ BSwatch, CVariant })
};

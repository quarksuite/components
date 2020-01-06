import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import CVariant from '../c-variant';
import KCheckbox from '../k-checkbox';

const activateVariant = (host, event) => {
  if (event.originalTarget.value === 'tints')
    host.tints = event.originalTarget.checked;
  if (event.originalTarget.value === 'tones')
    host.tones = event.originalTarget.checked;
  if (event.originalTarget.value === 'shades')
    host.shades = event.originalTarget.checked;
};

export default {
  base: '#348ec9',
  tints: false,
  tones: false,
  shades: false,
  format: 'hex',
  render: ({ base, tints, tones, shades, format }) =>
    html`
      <style>
        c-variant {
          flex: 1;
          margin: 0 0.5em;
        }

        .base {
          display: block;
          margin-bottom: 1.5em;
        }

        .variants {
          display: flex;
          flex-flow: row wrap;
          align-content: start;
        }
      </style>
      <b-swatch class="base" value="${base}"></b-swatch>
      <form action="">
        <k-checkbox
          name="variant"
          legend="Choose Variants"
          switches="${[
            { label: 'tints', value: 'tints' },
            { label: 'tones', value: 'tones' },
            { label: 'shades', value: 'shades' }
          ]}"
          oninput="${activateVariant}"
        ></k-checkbox>
      </form>
      <div class="variants">
        ${tints &&
          html`
            <c-variant swatch="${base}" format="${format}"></c-variant>
          `}
        ${tones &&
          html`
            <c-variant
              swatch="${base}"
              type="tones"
              limit="2"
              format=${format}
            ></c-variant>
          `}
        ${shades &&
          html`
            <c-variant
              swatch="${base}"
              type="shades"
              limit="2"
              format="${format}"
            ></c-variant>
          `}
      </div>
    `.define({ BSwatch, CVariant, KCheckbox })
};

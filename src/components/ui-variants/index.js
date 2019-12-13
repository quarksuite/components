import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import CVariant from '../c-variant';

const toggleV = (host, event) => {
  if (event.target.value === 'tints') host.tints = event.target.checked;
  if (event.target.value === 'tones') host.tones = event.target.checked;
  if (event.target.value === 'shades') host.shades = event.target.checked;
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
        fieldset {
          border: 2px solid;
          display: flex;
          flex-flow: row wrap;
          font-family: ${typography.system('sans')};
          padding: 0.75em;
        }

        legend {
          font-size: 1.25em;
          font-weight: 700;
        }

        label {
          font-size: 1.25em;
          flex: 1;
          text-align: center;
        }

        c-variant {
          flex: 1;
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
        <fieldset>
          <legend>Toggle Variants</legend>
          <label>
            <input
              type="checkbox"
              name="variant"
              value="tints"
              onchange="${toggleV}"
            />
            tints</label
          >
          <label>
            <input
              type="checkbox"
              name="variant"
              value="tones"
              onchange="${toggleV}"
            />
            tones</label
          >
          <label>
            <input
              type="checkbox"
              name="variant"
              value="shades"
              onchange="${toggleV}"
            />
            shades</label
          >
        </fieldset>
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
    `.define({ BSwatch, CVariant })
};

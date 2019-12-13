import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import CVariant from '../c-variant';

const toggleTints = (host, event) => (host.tints = event.target.checked);
const toggleTones = (host, event) => (host.tones = event.target.checked);
const toggleShades = (host, event) => (host.shades = event.target.checked);

export default {
  base: '#348ec9',
  tints: true,
  tones: false,
  shades: true,
  input: false,
  render: ({ base, tints, tones, shades, input }) =>
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
      ${input
        ? html`
            <b-swatch
              class="base"
              value="${base}"
              input
              oninput="${html.set('base')}"
            ></b-swatch>
          `
        : html`
            <b-swatch class="base" value="${base}"></b-swatch>
          `}
      <form action="">
        <fieldset>
          <legend>Toggle Variants</legend>
          <label
            >tints
            <input
              type="checkbox"
              name="variant"
              value="tints"
              onchange="${toggleTints}"
              checked
          /></label>
          <label
            >tones
            <input
              type="checkbox"
              name="variant"
              value="tones"
              onchange="${toggleTones}"
          /></label>
          <label
            >shades
            <input
              type="checkbox"
              name="variant"
              value="shades"
              onchange="${toggleShades}"
              checked
          /></label>
        </fieldset>
      </form>
      <div class="variants">
        ${tints &&
          html`
            <c-variant swatch="${base}"></c-variant>
          `}
        ${tones &&
          html`
            <c-variant swatch="${base}" type="tones" limit="2"></c-variant>
          `}
        ${shades &&
          html`
            <c-variant swatch="${base}" type="shades" limit="2"></c-variant>
          `}
      </div>
    `.define({ BSwatch, CVariant })
};

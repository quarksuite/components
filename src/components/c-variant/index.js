import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import KRange from '../k-range';
import KRadio from '../k-radio';

const addToLimit = host => ++host.limit;
const removeFromLimit = host => {
  if (host.limit === 1) return;
  --host.limit;
};

const setBlend = (host, event) => (host.mode = event.originalTarget.value);

export default {
  swatch: '#aaaaaa',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: 'logarithmic',
  format: 'hex',
  output: ({ swatch, type, limit, contrast, format, mode }) =>
    color.palette(swatch, {
      [type]: { limit, contrast, mode },
      format
    }),
  render: ({ swatch, type, limit, contrast, mode, format, output }) =>
    html`
      <style>
        .controls {
          display: flex;
          flex-flow: row auto;
          justify-content: space-between;
          margin-bottom: 1.25em;
        }

        .knob {
          flex-basis: 49%;
        }

        .category {
          display: flex;
          flex-flow: row wrap;
        }

        .palette {
          display: flex;
          flex-flow: row wrap;
          flex: 32;
        }

        .limit-ctrl {
          background: transparent;
          border: none;
          font-size: 2em;
          flex: 1;
        }

        b-swatch {
          --swatch-padding: 1em;
          --value-size: 1em;
          flex: 1;
        }
      </style>
      <form class="controls" action="">
        <k-range
          class="knob"
          label="Contrast"
          value="${contrast}"
          oninput="${html.set('contrast')}"
        ></k-range>
        <k-radio
          class="knob"
          name="mode"
          legend="Blend Mode"
          choices="${[
            { label: 'complex', value: 'logarithmic' },
            { label: 'simple', value: 'linear' }
          ]}"
          oninput="${setBlend}"
        ></k-radio>
      </form>
      ${Object.values(output).map(
        color => html`
          <div class="category">
            <button class="limit-ctrl" onclick="${removeFromLimit}">
              -
            </button>
            <div class="palette">
              ${color[type.replace(/s$/g, '')].map(
                s =>
                  html`
                    <b-swatch class="variant" value="${s}"></b-swatch>
                  `
              )}
            </div>
            <button class="limit-ctrl" onclick="${addToLimit}">+</button>
          </div>
        `
      )}
    `.define({ BSwatch, KRange, KRadio })
};

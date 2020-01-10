import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import rangeKnob from '../knobs/range';
import radioKnob from '../knobs/radio';

import hostInit from '../shared/host';
import formStyles from '../shared/form';

const addToLimit = host => ++host.limit;
const removeFromLimit = host => {
  if (host.limit === 1) return;
  --host.limit;
};

const setBlend = (host, event) => (host.mode = event.target.value);

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
      ${hostInit} ${formStyles}
      <style>
        :host {
          --field-margins: calc(var(--ms-block-base) / 3);
        }

        b-swatch {
          --border-width: var(--ms-inline-base);
          --swatch-padding: var(--ms-block-base);
          --value-size: calc(var(--ms-block-base) / 1.2);
        }
        .range {
          margin-bottom: var(--field-margins);
        }

        .category,
        .palette {
          display: flex;
          flex-flow: row wrap;
        }

        .palette {
          flex: 64;
        }

        .variant {
          flex: 1;
        }

        .limit-ctrl {
          background: transparent;
          border: none;
          flex-grow: 1;
          font-size: var(--ms-block-3-x);
        }
      </style>
      <form action="">
        ${rangeKnob('Contrast', contrast, html.set('contrast'))} ${radioKnob}
        <fieldset>
          <legend>Blend Mode</legend>
          ${radioKnob(
            'mode',
            [
              { label: 'complex', value: 'logarithmic' },
              { label: 'simple', value: 'linear' }
            ],
            setBlend
          )}
        </fieldset>
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
    `
};

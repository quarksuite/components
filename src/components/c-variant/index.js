import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';

const addToLimit = (host, event) => ++host.limit;
const removeFromLimit = (host, event) => {
  if (host.limit === 1) return;
  --host.limit;
};

export default {
  swatch: '#aaaaaa',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: '',
  render: ({ swatch, type, limit, contrast, mode }) =>
    html`
      <style>
        :host {
          display: flex;
          flex-flow: row wrap;
        }

        label {
          display: block;
          font-family: ${typography.system('sans')};
          font-size: 1.5em;
        }

        b-swatch {
          --swatch-padding: 1em;
          --value-size: 1.25em;
          flex: 1;
        }

        .category, .palette {
          display: flex;
          flex-flow: row wrap;
          flex: 1;
          align-content: start;
        }

        .category {
          min-height: 100%;
        }

        .limit-ctrl {
          background: transparent;
          border: none;
          font-size: 2em;
        }

        .controls {
          display: flex;
          flex-basis: 100%;
          justify-content: space-between;
          margin: 1.5em 0;
        }

        .contrast, .mode {
          flex-basis: 49%;
        }

      </style>
      <div class="controls">
        <div class="contrast">
          <label for="contrast">Contrast<label>
          <input id="contrast" type="range" value="${contrast}" oninput="${html.set(
      'contrast'
    )}">
        </div>
        <div class="mode">
          <label for="mode">Mode<label>
          <input id="mode" value="${mode}" oninput="${html.set(
      'mode'
    )}" placeholder='"linear" to toggle mode'>
        </div>
      </div>
      ${Object.values(
        color
          .palette(swatch, { [type]: { limit, contrast, mode }, format: 'hex' })
          .map(
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
          )
      )}
    `.define({ BSwatch })
};

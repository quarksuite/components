import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import BSwatch from '../b-swatch';

export default {
  swatch: '#aaaaaa',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: 'logarithmic',
  render: ({ swatch, type, limit, contrast, mode }) =>
    html`
      <style>
        :host {
          display: flex;
          flex-flow: row wrap;
        }

        .category {
          display: flex;
          flex-flow: row wrap;
          flex-grow: 1;
          align-content: flex-start;
        }

        b-swatch {
          --swatch-padding: 1em;
          flex-grow: 1;
        }

        .controls {
          flex-basis: 33%;
          margin: 1em 0;
        }

        label {
          display: block;
          font-size: 1.5em;
        }
      </style>
      <div class="controls">
        <label for="limit">Limit<label>
        <input id="limit" type="number" max="9"value="${limit}" oninput="${html.set(
      'limit'
    )}">
      </div>
      <div class="controls">
        <label for="contrast">Contrast<label>
        <input id="contrast" step="5" type="range" value="${contrast}" oninput="${html.set(
      'contrast'
    )}">
      </div>
      <div class="controls">
        <label for="mode">Mode<label>
        <input id="mode" value="${mode}" oninput="${html.set('mode')}">
      </div>
      ${Object.values(
        color
          .palette(swatch, { [type]: { limit, contrast, mode }, format: 'hex' })
          .map(
            color => html`
              <div class="category">
                ${color[type.replace(/s$/g, '')].map(
                  s =>
                    html`
                      <b-swatch class="variant" value="${s}"></b-swatch>
                    `
                )}
              </div>
            `
          )
      )}
    `.define({ BSwatch })
};

import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';

const addToLimit = host => ++host.limit;
const removeFromLimit = host => {
  if (host.limit === 1) return;
  --host.limit;
};

const setLogBlend = (host, event) => (host.mode = event.target.value);
const setLnBlend = (host, event) => (host.mode = event.target.value);

export default {
  swatch: '#aaaaaa',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: '',
  output: ({ swatch, type, limit, contrast, mode }) =>
    color.palette(swatch, {
      [type]: { limit, contrast, mode },
      format: 'hex'
    }),
  render: ({ swatch, type, limit, contrast, mode, output }) =>
    html`
      <style>
        :host {
          display: flex;
          flex-flow: row wrap;
        }

        label, fieldset {
          display: block;
          font-family: ${typography.system('sans')};
          font-size: 1.25em;
        }

        fieldset {
          border: 2px solid;
          display: flex;
          flex-flow: row wrap;
          padding: 0.5em;
        }

        legend {
          font-weight: bold;
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

        .mode label {
          display: inline;
          font-size: 1em;
          flex: 1;
          text-align: center;
        }

      </style>
      <div class="controls">
        <div class="contrast">
          <label for="contrast">Contrast<label>
          <input id="contrast" type="range" value="${contrast}" oninput="${html.set(
      'contrast'
    )}">
        </div>
        <fieldset class="mode">
          <legend>Blend Mode</legend>
          <label>complex <input type="radio" name="mode" value="logarithmic" onchange="${setLogBlend}" checked/></label>
          <label>basic <input type="radio"  name="mode" value="linear" onchange="${setLnBlend}"/></label>
        </fieldset>
      </div>
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
    `.define({ BSwatch })
};

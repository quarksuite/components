import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import UIVariants from '../ui-variants';

const toggleFormat = (host, event) => (host.format = event.target.value);
const toggleScheme = (host, event) => (host.type = event.target.value);

const toggleAccented = (host, event) => (host.accented = event.target.checked);

export default {
  base: '#348ec9',
  type: 'monochromatic',
  distance: 30,
  accented: false,
  format: 'hex',
  output: ({ base, type, distance, accented, format }) =>
    color.palette(base, { scheme: { type, distance, accented }, format }),
  render: ({ base, type, distance, accented, format, output }) =>
    html`
      <style>
        :host {
          --label-size: 1.5em;
          --output-padding: 3em;
          --output-font-size: 1.5em;
        }
        form {
          display: flex;
          flex-flow: row wrap;
          margin-bottom: 1em;
        }

        label,
        legend {
          display: block;
          font-family: ${typography.system('sans')};
          font-size: var(--label-size);
          margin-bottom: 0.5em;
        }

        input[type='color'] {
          background: transparent;
          border: 8px solid;
          border-radius: 0.25em;
          flex: 1;
          outline: none;
          padding: 0;
          height: 25%;
          width: 95%;
        }

        ui-variants {
          flex: 1;
          margin-bottom: 2em;
        }

        .controls {
          flex-grow: 1;
          margin-bottom: 2em;
        }

        .base {
          flex-basis: auto;
        }

        .base input {
          border-color: ${color.palette(base, {
            tints: { limit: 1, contrast: 45 }
          })[0].tint};
        }

        .format,
        .type,
        .options {
          display: flex;
        }

        .type,
        .options {
          flex-flow: row wrap;
        }

        .type {
          border-bottom: 1px solid;
          margin-bottom: 1em;
        }

        .options {
          justify-content: space-between;
        }

        .format {
          flex-basis: 100%;
          flex-flow: row wrap;
          margin-bottom: 2em;
        }

        .format label,
        .type label,
        .options label {
          flex: 1;
          font-size: 1.25em;
          text-align: right;
        }

        .type label {
          flex-basis: 50%;
        }

        .options label {
          display: inline;
          flex-basis: 50%;
        }

        .format label {
          text-align: center;
        }

        .palette {
          display: flex;
          flex-flow: row wrap;
          flex-grow: 1;
          transition: flex-grow 0.5s;
        }
      </style>
      <form action="">
        <div class="controls base">
          <label for="base">Base Color</label>
          <input
            id="base"
            type="color"
            value="${color.format(base, 'hex')}"
            oninput="${html.set('base')}"
          />
        </div>
        <fieldset class="controls scheme">
          <legend>Create Scheme</legend>
          <div class="type">
            <label
              ><input
                type="radio"
                name="scheme"
                value="monochromatic"
                onchange="${toggleScheme}"
                checked
              />
              Monochromatic</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="complementary"
                onchange="${toggleScheme}"
              />
              Complementary</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="analogous"
                onchange="${toggleScheme}"
              />
              Analogous</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="split complementary"
                onchange="${toggleScheme}"
              />
              Split</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="triadic"
                onchange="${toggleScheme}"
              />
              Triadic</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="dual color"
                onchange="${toggleScheme}"
              />
              Dual</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="tetradic"
                onchange="${toggleScheme}"
              />
              Tetradic</label
            >
          </div>
          <div class="options">
            <div class="distance">
              <label>
                <input
                  type="range"
                  min="30"
                  max="45"
                  value="${distance}"
                  oninput="${html.set('distance')}"
                />
                Distance <small>(analogous, split, dual)</small>
              </label>
            </div>
            <div class="accented">
              <label>
                <input
                  type="checkbox"
                  name="accented"
                  onchange="${toggleAccented}"
                />
                Accented? <small>(analogous, split)</small></label
              >
            </div>
          </div>
        </fieldset>
        <fieldset class="controls format">
          <legend>Output Format</legend>
          <label
            ><input
              type="radio"
              name="format"
              value="hex"
              onchange="${toggleFormat}"
              checked
            />
            Hex</label
          >
          <label
            ><input
              type="radio"
              name="format"
              value="rgb"
              onchange="${toggleFormat}"
            />
            RGB</label
          >
          <label
            ><input
              type="radio"
              name="format"
              value="hsl"
              onchange="${toggleFormat}"
            />
            HSL</label
          >
        </fieldset>
      </form>
      <div class="palette">
        ${Object.values(output).map(
          (color, i) =>
            html`
              <ui-variants
                base="${color.base}"
                format="${format}"
              ></ui-variants>
            `
        )}
      </div>
    `.define({ BSwatch, UIVariants })
};

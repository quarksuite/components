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
  distance: 15,
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
          border: 16px solid;
          border-radius: 0.5em;
          flex: 1;
          outline: none;
          padding: 0;
          height: 75%;
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
          })[0].tint[0]};
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
        }

        .palette.main {
          flex-basis: 100%;
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
              monochromatic</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="complementary"
                onchange="${toggleScheme}"
              />
              complementary</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="analogous"
                onchange="${toggleScheme}"
              />
              analogous</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="split complementary"
                onchange="${toggleScheme}"
              />
              split complementary</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="triadic"
                onchange="${toggleScheme}"
              />
              triadic</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="dual color"
                onchange="${toggleScheme}"
              />
              dual color</label
            >
            <label
              ><input
                type="radio"
                name="scheme"
                value="tetradic"
                onchange="${toggleScheme}"
              />
              tetradic</label
            >
          </div>
          <div class="options">
            <div class="distance">
              <label>
                <input
                  type="range"
                  min="15"
                  max="45"
                  value="${distance}"
                  oninput="${html.set('distance')}"
                />
                distance <small>valid: analogous, split, dual color</small>
              </label>
            </div>
            <div class="accented">
              <label>
                <input
                  type="checkbox"
                  name="accented"
                  onchange="${toggleAccented}"
                />
                accented <small>valid: analogous, split</small></label
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
            hex</label
          >
          <label
            ><input
              type="radio"
              name="format"
              value="rgb"
              onchange="${toggleFormat}"
            />
            rgb</label
          >
          <label
            ><input
              type="radio"
              name="format"
              value="hsl"
              onchange="${toggleFormat}"
            />
            hsl</label
          >
        </fieldset>
      </form>
      <div class="palette">
        ${Object.values(output).map(
          (color, i) =>
            html`
              ${i === 0
                ? html`
                    <ui-variants
                      class="main"
                      base="${color.base}"
                      format="${format}"
                    ></ui-variants>
                  `
                : html`
                    <ui-variants
                      base="${color.base}"
                      format="${format}"
                    ></ui-variants>
                  `}
            `
        )}
      </div>
    `.define({ BSwatch, UIVariants })
};

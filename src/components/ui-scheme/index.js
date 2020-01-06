import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';
import UIVariants from '../ui-variants';
import KColor from '../k-color';
import KRadio from '../k-radio';
import KRange from '../k-range';
import KCheckbox from '../k-checkbox';

const setFormat = (host, event) => (host.format = event.originalTarget.value);
const setScheme = (host, event) => (host.type = event.originalTarget.value);

const toggleAccented = (host, event) =>
  (host.accented = event.originalTarget.checked);

export default {
  base: '#348ec9',
  type: 'monochromatic',
  distance: 30,
  accented: false,
  format: 'hex',
  output: ({ base, type, distance, accented, format }) =>
    color.palette(base, {
      scheme: { type, distance, accented },
      format
    }),
  render: ({ base, type, distance, accented, format, output }) =>
    html`
      <style>
        :host {
          --label-size: 1.5em;
          --output-padding: 3em;
          --output-font-size: 1.5em;
        }

        ui-variants {
          flex: 1;
          margin-bottom: 2em;
        }
      </style>
      <form action="">
        <k-color
          label="Base Color"
          value="${base}"
          oninput="${html.set('base')}"
        ></k-color>
        <k-radio
          name="scheme"
          legend="Scheme Type"
          choices="${[
            { label: 'monochromatic', value: 'monochromatic' },
            { label: 'complementary', value: 'complementary' },
            { label: 'analogous', value: 'analogous' },
            { label: 'split', value: 'split complementary' },
            { label: 'triadic', value: 'triadic' },
            { label: 'dual', value: 'dual color' },
            { label: 'tetradic', value: 'tetradic' }
          ]}"
          oninput="${setScheme}"
        ></k-radio>
        <fieldset>
          <legend>Scheme Options</legend>
          <div class="options">
            <k-range
              label="Distance"
              info="(analogous, split, dual) in degrees"
              value="${distance}"
              min="15"
              max="45"
              oninput="${html.set('distance')}"
              side-label
            ></k-range>
            <k-checkbox
              name="accented"
              switches="${[{ label: 'Accented?', value: 'yes' }]}"
              oninput="${toggleAccented}"
            ></k-checkbox>
          </div>
        </fieldset>
        <k-radio
          name="format"
          legend="Output Format"
          choices="${[
            { label: 'Hex', value: 'hex' },
            { label: 'RGB', value: 'rgb' },
            { label: 'HSL', value: 'hsl' }
          ]}"
          oninput="${setFormat}"
        ></k-radio>
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
    `.define({ KColor, KRadio, KRange, BSwatch, UIVariants })
};

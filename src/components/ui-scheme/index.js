import { html } from 'hybrids';
import { color } from '@quarksuite/core';

import colorKnob from '../knobs/color';
import rangeKnob from '../knobs/range';
import radioKnob from '../knobs/radio';
import checkboxKnob from '../knobs/checkbox';

import hostInit from '../shared/host';
import formStyles from '../shared/form';

import UIVariants from '../ui-variants';

const setScheme = (host, event) => (host.type = event.target.value);
const setFormat = (host, event) => (host.format = event.target.value);

const toggleAccented = (host, event) => (host.accented = event.target.checked);

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
      ${hostInit} ${formStyles}
      <style>
        form {
          display: flex;
          flex-flow: var(--form-flow);
        }

        @media (min-width: 32em) {
          form {
            flex-flow: row wrap;
          }
        }

        .color,
        fieldset {
          margin: var(--field-margins);
        }

        @media (min-width: 32em) {
          .color {
            flex: 1;
            margin-right: var(--ms-block-base);
          }

          .scheme {
            flex: 3;
          }
        }

        .format {
          flex: 1;
          flex-basis: 100%;
          margin-bottom: var(--ms-block-base);
        }

        .type > .radio {
          display: inline-block;
        }

        .format > .radio {
          display: inline-block;
        }

        .palette {
          display: flex;
          flex-flow: row wrap;
        }

        ui-variants {
          flex-grow: 1;
        }

        .options > label {
          font-weight: 400;
        }
      </style>
      <form action="">
        ${colorKnob('Base Color', base, html.set('base'), format)}
        <div class="scheme">
          <fieldset class="type">
            <legend>
              Scheme Type
            </legend>
            ${radioKnob(
              'scheme-type',
              [
                { label: 'mono', value: 'monochromatic' },
                { label: 'complement', value: 'complementary' },
                { label: 'analogous', value: 'analogous' },
                { label: 'split', value: 'split complementary' },
                { label: 'triadic', value: 'triadic' },
                { label: 'dual', value: 'dual color' },
                { label: 'tetradic', value: 'tetradic' }
              ],
              setScheme
            )}
          </fieldset>
          <fieldset>
            <legend>Options</legend>
            <div class="options">
              ${rangeKnob('Distance', distance, html.set('distance'), {
                min: 15,
                max: 45,
                inline: true,
                desc: '(analogous, split, dual)',
                suffix: '°'
              })}
              ${checkboxKnob(
                'option-accented',
                [{ label: 'Accented?', value: 'accented' }],
                toggleAccented
              )}
            </div>
          </fieldset>
        </div>
        <fieldset class="format">
          <legend>Output Format</legend>
          ${radioKnob(
            'format',
            [
              { label: 'Hex', value: 'hex' },
              { label: 'RGB', value: 'rgb' },
              { label: 'HSL', value: 'hsl' }
            ],
            setFormat
          )}
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
    `.define({ UIVariants })
};

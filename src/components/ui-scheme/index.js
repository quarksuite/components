import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';

import colorKnob from '../knobs/color';
import rangeKnob from '../knobs/range';
import radioKnob from '../knobs/radio';
import checkboxKnob from '../knobs/checkbox';

import baseStyles from '../shared/base.pcss';
import formStyles from '../shared/form.pcss';

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
      <form action="">
        ${colorKnob('Base Color', base, html.set('base'), format)}
        <fieldset>
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
        <fieldset>
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
    `.style(baseStyles, formStyles)
};

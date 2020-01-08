import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';

import checkboxKnob from '../knobs/checkbox';

const activateVariant = (host, event) => {
  if (event.target.value === 'tints') host.tints = event.target.checked;
  if (event.target.value === 'tones') host.tones = event.target.checked;
  if (event.target.value === 'shades') host.shades = event.target.checked;
};

export default {
  base: '#348ec9',
  tints: false,
  tones: false,
  shades: false,
  format: 'hex',
  render: ({ base, tints, tones, shades, format }) =>
    html`
      <b-swatch class="base" value="${base}"></b-swatch>
      <form action="">
        <fieldset>
          <legend>Variants</legend>
          ${checkboxKnob(
            'variants',
            [
              { label: 'tints', value: 'tints' },
              { label: 'tones', value: 'tones' },
              { label: 'shades', value: 'shades' }
            ],
            activateVariant
          )}
        </fieldset>
      </form>
      <div class="variants">
        ${tints &&
          html`
            <c-variant swatch="${base}" format="${format}"></c-variant>
          `}
        ${tones &&
          html`
            <c-variant
              swatch="${base}"
              type="tones"
              limit="2"
              format=${format}
            ></c-variant>
          `}
        ${shades &&
          html`
            <c-variant
              swatch="${base}"
              type="shades"
              limit="2"
              format="${format}"
            ></c-variant>
          `}
      </div>
    `
};

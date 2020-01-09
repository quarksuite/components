import { html, property } from 'hybrids';
import { color } from '@quarksuite/core';

import colorKnob from '../knobs/color';
import buttonKnob from '../knobs/button';

import baseStyles from '../shared/base.pcss';
import formStyles from '../shared/form.pcss';

const addSwatch = (host, event) => {
  event.preventDefault();

  host.palette = [...host.palette, host.currentValue].filter(
    (value, index, self) => {
      return self.indexOf(value) === index;
    }
  );
};

const removeSwatch = (host, event) => {
  event.preventDefault();

  host.palette = host.palette.filter(swatch => swatch !== event.target.value);

  console.log(host.palette);
};

export default {
  palette: [],
  currentValue: '#f00000',
  output: ({ palette }) => {
    return palette;
  },
  render: ({ palette, currentValue, output }) =>
    html`
      <style>
        .color,
        .input {
          flex: 1;
        }

        .color {
          margin-bottom: var(--ms-block-base);
        }

        .button {
          background: var(--color-primary-tint-300);
          border: calc(var(--ms-inline-base) / 2) solid
            var(--color-secondary-base);
          border-radius: var(--ms-inline-4-x);
          font-size: var(--ms-block-3-x);
          padding: var(--ms-block-base);
        }

        .swatch {
          position: relative;
        }

        .button.remove {
          position: absolute;
          right: 0;
          border-color: var(--color-tertiary-base);
          border-radius: var(--ms-inline-base);
          font-size: calc(var(--ms-block-3-x) / 2);
          padding: calc(var(--ms-inline-base));
        }

        ui-variants {
          margin-bottom: var(--ms-block-4-x);
        }
      </style>
      <form action="">
        ${colorKnob('Color', currentValue, html.set('currentValue'))}
        ${buttonKnob('Add to Palette', addSwatch)}
      </form>
      ${palette.map(
        swatch =>
          html`
            <div class="swatch">
              ${buttonKnob('x', removeSwatch, swatch, 'remove')}
              <ui-variants base="${swatch}" format="hex"></ui-variants>
            </div>
          `
      )}
    `.style(baseStyles, formStyles)
};

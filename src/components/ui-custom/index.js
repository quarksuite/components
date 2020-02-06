import { html } from 'hybrids';
import { color } from '@quarksuite/core';

import UIVariants from '../ui-variants';

import hostInit from '../shared/host';
import formStyle from '../shared/form';

import colorKnob from '../knobs/color';
import buttonKnob from '../knobs/button';

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
};

export default {
  palette: [],
  currentValue: '#f00000',
  output: ({ palette }) => palette,
  render: ({ palette, currentValue, output }) =>
    html`
      ${hostInit} ${formStyle}
      <style>
        .color {
          margin: var(--field-margins);
        }

        .button {
          background: var(--button-main-bg);
          border-radius: 0.25em;
          border: 4px solid var(--button-main-border-color);
          font-size: var(--button-main-font-size);
          padding: var(--button-main-padding);
        }

        .palette {
          display: flex;
          flex-flow: row wrap;
        }

        .swatch {
          position: relative;
          flex: 1;
        }

        .button.remove {
          border-radius: 0 0 0 0.5em;
          position: absolute;
          right: 0;
          background: var(--color-primary-tint-300);
          border: none;
          font-size: 1em;
          opacity: 0.8;
          padding: 0.25em;
          width: 1.5em;
        }
      </style>
      <form action="">
        ${colorKnob('Color', currentValue, html.set('currentValue'))}
        ${buttonKnob('Add to Palette', addSwatch)}
      </form>
      <div class="palette">
        ${output.map(
          swatch =>
            html`
              <div class="swatch">
                ${buttonKnob('x', removeSwatch, swatch, 'remove')}
                <ui-variants base="${swatch}"></ui-variants>
              </div>
            `
        )}
      </div>
    `.define({ UIVariants })
};

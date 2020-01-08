import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import tokens from '@quarksuite/tokens';

import base from '../shared/base.css';

export default {
  value: '#aaaaaa',
  render: ({ value }) =>
    html`
      <style>
        :host {
          --border-width: ${tokens.ms.inline['3x'].value};
          --swatch-padding: ${tokens.ms.block['3x'].value};
          --value-font: ${tokens.font.system.mono.value};
          --value-padding: calc(var(--swatch-padding) / 2);
          --value-size: ${tokens.ms.block['2x'].value};
        }

        div {
          background: ${value};
          border: var(--border-width) solid;
          border-color: ${color.palette(value, {
            shades: { limit: 1, contrast: 24 }
          })[0].shade};
          padding: var(--swatch-padding);
        }

        code {
          background: rgba(255, 255, 255, 0.8);
          display: block;
          font-family: var(--value-font);
          font-size: var(--value-size);
          padding: var(--value-padding);
          text-align: center;
        }
      </style>
      <div>
        <code>${value}</code>
      </div>
    `.style(base)
};

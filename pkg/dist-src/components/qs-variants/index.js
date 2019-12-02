import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import QSSwatch from "../qs-swatch/index.js";
export default {
  base: '#348ec9',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: 'logarithmic',
  render: ({
    base,
    type,
    limit,
    contrast,
    mode
  }) => html`
      <style>
        :host {
          --grid-flow: row wrap;
          --swatch-size: 25%;
          display: flex;
          flex-flow: var(--grid-flow);
        }

        qs-swatch {
          flex-basis: var(--swatch-size);
          flex-grow: 1;
        }
      </style>
      ${Object.values(color.palette(base, {
    [type]: {
      limit,
      contrast,
      mode
    }
  })).map(color => html`
            ${color[type.replace(/s$/g, '')].map(v => html`
                  <qs-swatch value="${v}"></qs-swatch>
                `)}
          `)}
    `.define({
    QSSwatch
  })
};
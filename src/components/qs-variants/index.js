import { html } from 'hybrids';
import { color } from '@quarksuite/core';

import QSSwatch from '../qs-swatch';

export default {
  base: '#348ec9',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: 'logarithmic',
  render: ({ base, type, limit, contrast, mode }) =>
    html`
      <style>
        :host {
          display: flex;
          flex-flow: row wrap;
        }

        qs-swatch {
          flex-basis: 25%;
          flex-grow: 1;
        }
      </style>
      ${Object.values(
        color.palette(base, {
          [type]: { limit, contrast, mode }
        })
      ).map(
        color =>
          html`
            ${color[type.replace(/s$/g, '')].map(
              v =>
                html`
                  <qs-swatch value="${v}"></qs-swatch>
                `
            )}
          `
      )}
    `.define({ QSSwatch })
};

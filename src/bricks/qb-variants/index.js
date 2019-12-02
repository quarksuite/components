import { html } from 'hybrids';
import { color } from '@quarksuite/core';

import QBColor from '../qb-swatch';

export default {
  base: '#348ec9',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: 'logarithmic',
  render: ({ base, type, limit, contrast, mode }) =>
    html`
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
                  <qb-color value="${v}"></qb-color>
                `
            )}
          `
      )}
    `.define({ QBColor })
};

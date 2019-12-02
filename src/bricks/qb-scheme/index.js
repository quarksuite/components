import { html } from 'hybrids';
import { color } from '@quarksuite/core';

import QBColor from '../qb-swatch';

export default {
  base: '#348ec9',
  type: 'monochromatic',
  distance: 30,
  accented: false,
  render: ({ base, type, distance, accented }) =>
    html`
      ${Object.values(
        color.palette(base, {
          scheme: { type, distance, accented }
        })
      ).map(
        color =>
          html`
            <qb-color value="${color.base}"></qb-color>
          `
      )}
    `.define({ QBColor })
};

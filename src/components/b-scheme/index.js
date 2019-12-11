import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import BSwatch from '../b-swatch';

export default {
  base: '#aaaaaa',
  scheme: 'monochromatic',
  distance: 30,
  accented: false,
  render: ({ base, scheme, distance, accented }) =>
    html`
      ${Object.values(
        color.palette(base, { scheme: { type: scheme, distance, accented } })
      ).map(
        color =>
          html`
            <b-swatch value="${color.base}"></b-swatch>
          `
      )}
    `.define({ BSwatch })
};

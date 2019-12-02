import { html } from 'hybrids';
import { color } from '@quarksuite/core';
import QSSwatch from "../qs-swatch/index.js";
export default {
  base: '#348ec9',
  type: 'monochromatic',
  distance: 30,
  accented: false,
  render: ({
    base,
    type,
    distance,
    accented
  }) => html`
      ${Object.values(color.palette(base, {
    scheme: {
      type,
      distance,
      accented
    }
  })).map(color => html`
            <qs-swatch value="${color.base}"></qs-swatch>
          `)}
    `.define({
    QSSwatch
  })
};
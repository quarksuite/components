import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  value: 50,
  id: 'id',
  handler: undefined,
  min: 0,
  max: 100,
  render: ({ value, id, handler, min, max }) =>
    html`
      <input
        id="${id}"
        type="range"
        value="${value}"
        min="${min}"
        max="${max}"
        oninput="${handler}"
      />
    `
};

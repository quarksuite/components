import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  value: '#ffffff',
  id: 'id',
  handler: undefined,
  render: ({ value, id, handler }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --height: 2em;
        }

        input {
          background: transparent;
          border: none;
          padding: 0;
          display: block;
          width: 100%;
          height: var(--height);
        }
      </style>
      <input
        id="${id}"
        name="${id}"
        type="color"
        value="${value}"
        oninput="${handler}"
      />
    `
};

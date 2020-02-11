import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  value: '',
  id: 'id',
  handler: undefined,
  placeholder: 'description of input',
  render: ({ value, id, handler, placeholder }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --bg: white;
          --border: 4px solid black;
          --padding: 0.75em;
        }

        input {
          background: var(--bg);
          border: var(--border);
          box-sizing: border-box;
          display: block;
          padding: var(--padding);
          width: 100%;
        }
      </style>
      <input
        id="${id}"
        type="text"
        placeholder="${placeholder}"
        value="${value}"
        oninput="${handler}"
      />
    `
};

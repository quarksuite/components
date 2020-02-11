import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  value: 1,
  id: 'id',
  handler: undefined,
  min: 1,
  step: 0.001,
  render: ({ value, id, handler, min, step }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --bg: white;
          --border: 4px solid black;
          --padding: 0.75em;
        }

        input[type='number'] {
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
        type="number"
        value="${value}"
        min="${min}"
        step="${step}"
        oninput="${handler}"
      />
    `
};

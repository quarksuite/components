import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  label: 'Click this',
  value: '',
  handler: undefined,
  render: ({ label, value, handler }) => html`
    ${hostInit}
    <style>
      :host {
        --button-background: white;
        --button-padding: 1em;
        --button-border: 4px solid black;
        --button-radius: 0.5em;
        --label-font: sans-serif;
        --label-color: black;
        --label-size: 1.25em;
      }
      button {
        background: var(--button-background);
        color: var(--label-color);
        border: var(--button-border);
        border-radius: var(--button-radius);
        font-family: var(--label-font);
        font-size: var(--label-size);
        padding: var(--button-padding);
        width: 100%;
      }
    </style>
    <button type="button" value="${value}" onclick="${handler}">
      ${label}
    </button>
  `
};

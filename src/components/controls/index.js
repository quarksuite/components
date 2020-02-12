import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  render: () => html`
    ${hostInit}
    <style>
      :host {
        --form-flow: column wrap;
        --form-font: sans-serif;
        --form-margins: 0 0 1.25em 0;

        --button-bg: white;
        --button-fg: black;
        --button-font-size: 1.25em;
        --button-border: 4px solid black;
        --button-radius: 0.5em;
        --button-padding: 1em;
      }

      form {
        display: flex;
        flex-flow: var(--form-flow);
        font-family: var(--form-font);
        margin: var(--form-margins);
      }

      ::slotted(button) {
        background: var(--button-bg);
        border: var(--button-border);
        border-radius: var(--button-radius);
        color: var(--button-fg);
        font-size: var(--button-font-size);
        padding: var(--button-padding);
      }
    </style>
    <form action="">
      <slot></slot>
    </form>
  `
};

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

        --field-margins: calc(var(--form-margins) / 2);
      }

      form {
        display: flex;
        flex-flow: var(--form-flow);
        font-family: var(--form-font);
        margin: var(--form-margins);
      }
    </style>
    <form action="">
      <slot></slot>
    </form>
  `
};

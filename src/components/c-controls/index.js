import { html } from 'hybrids';

export default {
  render: () =>
    html`
      <style>
        :host {
          --form-spacing: 1em;
          --form-flow: column wrap;
          --form-font: sans-serif;
          --form-margins: 0 0 var(--form-spacing) 0;
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

import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  label: 'base',
  value: '1rem',
  render: ({ label, value }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --color: black;
          --margin: 0 0 0.5em 0;
          --font-size: 1rem;
          --flex-flow: column nowrap;
          --align-items: center;
          --width: 100%;
        }

        .element {
          display: flex;
          flex-flow: var(--flex-flow);
          align-items: var(--align-items);
        }

        .element > div {
          background: var(--color);
          margin: var(--margin);
          width: var(--width);
          height: ${value};
        }

        .element > code {
          font-size: var(--font-size);
        }
      </style>
      <div class="element">
        <div></div>
        <code>${label}: ${value}</code>
      </div>
    `
};

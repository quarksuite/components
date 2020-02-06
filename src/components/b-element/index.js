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
          --color: var(--color-primary-base);
        }

        .element {
          display: flex;
          flex-flow: column nowrap;
          align-items: center;
        }

        .element > div {
          background: var(--color);
          margin-bottom: var(--ms-inline-base);
          width: 100%;
          height: ${value};
        }

        .element > code {
          font-size: var(--ms-block-base);
        }
      </style>
      <div class="element">
        <div></div>
        <code>${label}: ${value}</code>
      </div>
    `
};

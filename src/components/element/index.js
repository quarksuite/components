import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  label: 'base',
  value: '1rem',
  render: ({ label, value }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --element-color: black;
          --element-margin: 0 0 0.5em 0;
          --element-width: 100%;

          --label-size: 1rem;

          --flex-flow: column nowrap;
          --align-items: center;

          display: flex;
          flex-flow: var(--flex-flow);
          align-items: var(--align-items);
        }

        div {
          background: var(--element-color);
          margin: var(--element-margin);
          width: var(--element-width);
          height: ${value};
        }

        code {
          font-size: var(--label-size);
        }
      </style>
      <div></div>
      <code>${label}: ${value}</code>
    `
};

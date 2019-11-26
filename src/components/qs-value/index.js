import { html } from 'hybrids';
import { typography, scale } from '@quarksuite/core';
import QSTypography from '../qs-typography';

export default {
  index: 0,
  value: '1em',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({ value, index, content }) =>
    html`
      <style>
        :host {
          --container-color: #111111;
          --content-grow: 32;
          --index-font-size: 1.75em;
          --index-padding: 0.3em;
          --index-grow: 1;
          display: flex;
          flex-flow: row nowrap;
        }
        div {
          background: var(--container-color);
          color: #ffffff;
          font-family: ${typography.system('sans')};
          font-size: var(--index-font-size);
          flex-grow: var(--index-grow);
          line-height: 1.25;
          padding: var(--index-padding);
        }

        code {
          font-size: 1em;
        }
        qs-typography {
          --border-color: var(--container-color);
          --border-width: 8px;
          --content-size: ${value};
          --content-padding: 0.5em;
          flex-grow: var(--content-grow);
        }
      </style>
      <div>${++index}x: <code>${value}</code></div>
      <qs-typography content="${content}"></qs-typography>
    `.define({ QSTypography })
};

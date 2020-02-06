import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

import hostInit from '../shared/host';

export default {
  id: 'sans',
  render: ({ id }) => html`
    ${hostInit}
    <style>
      :host {
        --sample-size: var(--ms-block-2-x);
      }
      .stack {
        font-family: var(--font-system-sans);
        font-size: var(--ms-block-base);
      }

      .stack > span {
        background: var(--color-primary-base);
        color: var(--color-primary-tint-300);
        display: block;
        padding: var(--ms-inline-4-x);
        font-weight: 700;
      }

      .stack > span code {
        color: var(--color-primary-tint-200);
        font-weight: 400;
      }

      .stack > div {
        border: var(--ms-inline-2-x) solid var(--color-primary-base);
        padding: var(--ms-block-base);
        font-family: ${typography.system(id)};
        font-size: var(--sample-size);
      }
    </style>
    <div class="stack">
      <span
        >System ${[id[0].toUpperCase(), id.slice(1, id.length)].join('')}:
        <code>${typography.system(id)}</code></span
      >
      <div>The quick brown fox jumps over the lazy dog.</div>
    </div>
  `
};

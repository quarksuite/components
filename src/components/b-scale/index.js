import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  label: 'base',
  value: '1rem',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({ label, value, content }) =>
    html`
      ${hostInit}
      <style>
        .label {
          background: var(--color-primary-base);
          color: var(--color-primary-tint-300);
          display: inline-block;
          font-family: var(--font-system-sans);
          font-size: var(--ms-block-2-x);
          padding: var(--ms-block-base);
        }

        .label > code {
          color: var(--color-primary-tint-200);
          font-family: var(--font-system-mono);
        }

        .content {
          border: 4px solid var(--color-primary-base);
          background: var(--color-primary-tint-300);
          padding: var(--ms-block-base);
          font-family: var(--font-system-serif);
          font-size: ${value};
        }
      </style>
      <div class="value">
        <div class="label">${label}: <code>${value}</code></div>
        <div class="content">${content}</div>
      </div>
    `
};

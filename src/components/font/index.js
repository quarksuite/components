import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  label: 'Sans',
  stack: 'sans-serif',
  render: ({ label, stack }) => html`
    ${hostInit}
    <style>
      :host {
        --label-bg: black;
        --label-fg: white;
        --label-padding: 1em;
        --label-size: 1.25em;
        --label-font: sans-serif;

        --value-font: monospace;
        --value-opacity: 0.8;

        --content-bg: var(--label-fg);
        --content-fg: var(--label-bg);
        --content-border: 4px solid black;
        --content-padding: calc(var(--label-padding) / 1.5);
        --content-size: calc(var(--label-size) * 1.25);
      }

      .label {
        background: var(--label-bg);
        color: var(--label-fg);
        padding: var(--label-padding);
        font-family: var(--label-font);
        font-size: var(--label-size);
        font-weight: 700;
      }

      .label > code {
        opacity: var(--value-opacity);
        font-family: var(--value-font);
        font-weight: 400;
      }

      .content {
        background: var(--content-bg);
        color: var(--content-fg);
        border: var(--content-border);
        padding: var(--content-padding);
        font-family: ${stack};
        font-size: var(--content-size);
      }
    </style>
    <div class="label">${label}: <code>${stack}</code></div>
    <div class="content">The quick brown fox jumps over the lazy dog.</div>
  `
};

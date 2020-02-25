import { html } from 'hybrids';
import hostInit from "../common/host.js";
export default {
  label: 'base',
  value: '1rem',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({
    label,
    value,
    content
  }) => html`
      ${hostInit}
      <style>
        :host {
          --label-bg: black;
          --label-fg: white;

          --label-font: sans-serif;
          --label-size: 1.25em;
          --label-padding: 1em;

          --value-font: monospace;
          --value-opacity: 0.8;

          --content-bg: var(--label-fg);
          --content-fg: var(--label-bg);
          --content-border: 4px solid black;
          --content-padding: var(--label-padding);
        }

        .label {
          background: var(--label-bg);
          color: var(--label-fg);
          display: inline-block;
          font-family: var(--label-font);
          font-size: var(--label-size);
          padding: var(--label-padding);
        }

        .label > code {
          opacity: var(--value-opacity);
          font-family: var(--value-font);
        }

        .content {
          border: var(--content-border);
          background: var(--content-bg);
          color: var(--content-fg);
          padding: var(--content-padding);
          font-family: var(--font-system-serif);
          font-size: ${value};
        }
      </style>
      <div class="label">${label}: <code>${value}</code></div>
      <div class="content">${content}</div>
    `
};
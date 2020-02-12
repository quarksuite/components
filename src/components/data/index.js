import { html } from 'hybrids';
import prism from 'prismjs';

import hostInit from '../common/host';

export default {
  data: {},
  variable: 'output',
  filename: 'system.js',
  format: ({ data }) => JSON.stringify(data, null, 2),
  output: ({ format, variable }) =>
    prism.highlight(
      `const ${variable} = ${format};`,
      prism.languages.javascript,
      'javascript'
    ),
  render: ({ data, variable, filename, output }) =>
    html`
      ${hostInit}
      <style>
        :host {
          --label-bg: black;
          --label-fg: white;
          --label-padding: 1em;
          --code-font: monospace;
          --code-border: 4px solid black;
          --font-size: 1.25em;

          --theme-bg: white;
          --theme-padding: var(--label-padding);
          --theme-keyword-color: red;
          --theme-string-color: lime;

          font-family: var(--code-font);
          font-size: var(--font-size);
        }
        .filename,
        .output-code {
          margin: 0;
        }

        .filename {
          background: var(--label-bg);
          color: var(--label-fg);
          display: inline-block;
          padding: var(--label-padding);
        }
        .output-code {
          background: var(--theme-bg);
          border: var(--code-border);
          padding: var(--theme-padding);
        }

        /* prism theme */
        .token.keyword {
          color: var(--theme-keyword-color);
          font-weight: 700;
        }

        .token.string {
          color: var(--theme-string-color);
        }
      </style>
      <div class="filename"><code>${filename}</code></div>
      <pre class="output-code"><code innerHTML="${output}"></code></pre>
    `
};
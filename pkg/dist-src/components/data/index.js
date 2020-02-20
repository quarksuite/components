import { html } from 'hybrids';
import prism from 'prismjs';
import hostInit from "../common/host.js";
export default {
  data: {},
  variable: 'output',
  label: 'code',
  format: ({
    data
  }) => JSON.stringify(data, null, 2),
  output: ({
    format,
    variable
  }) => prism.highlight(`const ${variable} = ${format};`, prism.languages.javascript, 'javascript'),
  render: ({
    data,
    variable,
    label,
    output
  }) => html`
      ${hostInit}
      <style>
        :host {
          --font: monospace;
          --border: 4px solid black;
          --font-size: 1.25em;
          --padding: 1em;

          --theme-bg: white;
          --theme-padding: var(--padding);
          --theme-keyword-color: crimson;
          --theme-string-color: forestgreen;

          font-family: var(--font);
          font-size: var(--font-size);
        }

        pre {
          background: var(--theme-bg);
          border: var(--border);
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
      <pre><code innerHTML="${output}"></code></pre>
    `
};
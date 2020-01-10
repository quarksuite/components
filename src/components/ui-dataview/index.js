import { html } from 'hybrids';
import { color } from '@quarksuite/core';

import prism from 'prismjs';

import hostInit from '../shared/host';

export default {
  data: {},
  variable: 'output',
  filename: 'system.js',
  output: ({ data, variable }) =>
    prism.highlight(
      `const ${variable} = ${JSON.stringify(data, null, 2)};`,
      prism.languages.javascript,
      'javascript'
    ),
  render: ({ data, variable, filename, output }) =>
    html`
      ${hostInit}
      <style>
        .filename,
        .output-code {
          font-family: var(--font-system-mono);
          font-size: var(--ms-block-base);
          margin: 0;
        }

        .filename {
          background: var(--color-primary-base);
          color: var(--color-primary-tint-300);
          display: inline-block;
          font-size: var(--ms-block-base);
          padding: var(--ms-inline-3-x);
        }

        .output-code {
          background: var(--color-primary-tint-300);
          border: var(--ms-inline-base) solid var(--color-primary-base);
          padding: var(--ms-inline-4-x);
        }

        /* prism theme */
        .token.keyword {
          color: var(--color-primary-base);
          font-weight: 700;
        }

        .token.string {
          color: var(--color-secondary-base);
        }
      </style>
      <div class="filename"><code>${filename}</code></div>
      <pre class="output-code"><code innerHTML="${output}"></code></pre>
    `
};

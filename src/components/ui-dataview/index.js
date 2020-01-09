import { html } from 'hybrids';
import { color } from '@quarksuite/core';

export default {
  variable: 'output',
  data: {},
  output: ({ variable, data }) =>
    `const ${variable} = ${JSON.stringify(data, null, 2)};`,
  render: ({ variable, data, output }) =>
    html`
      <style></style>
      <div class="label"><code>system.js</code></div>
      <pre class="output"><code>${output}</code></pre>
    `
};

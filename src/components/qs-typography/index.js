import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

export default {
  family: 'sans',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({ family, content }) => html`
    <style>
      div {
        border: 0.5em solid;
        font-family: ${typography.system(family)};
        font-size: 1.5em;
        padding: 1em;
      }
    </style>
    <div>${content}</div>
  `
};

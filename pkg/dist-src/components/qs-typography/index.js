import { html } from 'hybrids';
import { typography } from '@quarksuite/core';
export default {
  family: 'sans',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({
    family,
    content
  }) => html`
    <style>
      :host {
        --content-size: 1.5em;
        --content-padding: 0;
      }
      div {
        font-family: ${typography.system(family)};
        font-size: var(--content-size);
        line-height: 1.5;
        padding: var(--content-padding);
      }
    </style>
    <div>${content}</div>
  `
};
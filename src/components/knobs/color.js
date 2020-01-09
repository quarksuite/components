import { html } from 'hybrids';
import { color } from '@quarksuite/core';

export default (label, value, handler, format = 'hex') => {
  const id = label
    .toLowerCase()
    .split(' ')
    .join('-');
  return html`
    <style>
      .color > label {
        display: block;
        margin-bottom: var(--ms-inline-base);
      }

      input[type='color'] {
        background: transparent;
        border: none;
        padding: 0;
        display: block;
        width: 100%;
        height: var(--ms-block-7-x);
      }
    </style>
    <div class="color">
      <label for="${id}">${label}</label>
      <input
        id="${id}"
        name="${id}"
        type="color"
        value="${color.format(value, 'hex')}"
        oninput="${handler}"
      />
    </div>
  `;
};

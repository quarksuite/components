import { html } from 'hybrids';
import { color } from '@quarksuite/core';

export default (label, value, handler, format = 'hex') => {
  const id = label
    .toLowerCase()
    .split(' ')
    .join('-');
  return html`
    <label for="${id}">${label}</label>
    <div class="color-knob">
      <input
        id="${id}"
        name="${id}"
        type="color"
        value="${color.format(value, 'hex')}"
        oninput="${handler}"
      />
      <input
        name="${id}"
        value="${color.format(value, format)}"
        oninput="${handler}"
      />
    </div>
  `;
};

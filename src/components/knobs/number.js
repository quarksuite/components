import { html } from 'hybrids';

export default (label, value, handler, { min = 1, step = 0.025 } = {}) => {
  const id = label
    .toLowerCase()
    .split(' ')
    .join('-');

  return html`
    <style>
      .number > label {
        display: block;
        margin-bottom: var(--ms-inline-base);
      }
      input[type='number'] {
        background: var(--color-primary-tint-300);
        border: var(--ms-inline-base) solid var(--color-primary-base);
        box-sizing: border-box;
        display: block;
        padding: 0.75em;
        width: 100%;
      }
    </style>
    <div class="number">
      <label for="${id}">${label}</label>
      <input
        id="${id}"
        type="number"
        value="${value || 1}"
        min="${min}"
        step="${step}"
        oninput="${handler}"
      />
    </div>
  `;
};

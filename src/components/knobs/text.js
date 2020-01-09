import { html } from 'hybrids';

export default (
  label,
  value,
  handler,
  { placeholder = 'description of input' }
) => {
  const id = label
    .toLowerCase()
    .split(' ')
    .join('-');

  return html`
    <style>
      .input > label {
        display: block;
        margin-bottom: var(--ms-inline-base);
      }
      input[type='text'] {
        background: var(--color-primary-tint-300);
        border: var(--ms-inline-base) solid var(--color-primary-base);
        box-sizing: border-box;
        display: block;
        padding: 0.5em;
        width: 100%;
      }
    </style>
    <div class="input">
      <label for="${id}">${label}</label>
      <input
        id="${id}"
        type="text"
        placeholder="${placeholder}"
        value="${value || ''}"
        oninput="${handler}"
      />
    </div>
  `;
};

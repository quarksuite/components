import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

export default {
  value: '',
  input: false,
  label: 'Color',
  render: ({ value, input, label }) => html`
    <style>
      :host {
        --label-size: 2em;
        --swatch-padding: 2em;
        --value-padding: calc(var(--swatch-padding) / 2);
        --value-size: 1.25em;
      }

      div {
        padding: var(--swatch-padding);
      }

      label {
        display: block;
        font-family: ${typography.system('sans')};
        font-size: var(--label-size);
        margin-bottom: 1em;
      }

      input,
      code {
        background: rgba(255, 255, 255, 0.8);
        display: block;
        font-family: ${typography.system('monospace')};
        font-size: var(--value-size);
        padding: var(--value-padding);
        text-align: center;
      }

      input {
        border: 0;
        border-bottom: 4px solid;
        box-sizing: border-box;
        width: 100%;
      }

      input::placeholder {
        color: rgba(0, 0, 0, 0.5);
      }
    </style>

    ${input
      ? html`
          <label for="${label.toLowerCase()}">${label}</label>
          <div style="background: ${value}">
            <input
              id="${label.toLowerCase()}"
              value="${value}"
              placeholder="any valid CSS color"
              oninput="${html.set('value')}"
            />
          </div>
        `
      : html`
          <div style="background: ${value || '#111111'}">
            <code>${value || '#111111'}</code>
          </div>
        `}
  `
};

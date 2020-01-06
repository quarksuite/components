import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';

export default {
  label: 'Label',
  value: '#111111',
  labelId: ({ label }) =>
    label
      .toLowerCase()
      .split(' ')
      .join('-'),
  render: ({ label, value, labelId }) =>
    html`
      <style>
        :host {
          --label-size: 1.25em;
          --label-weight: 700;
          --border-width: 4px;
        }

        label {
          display: block;
          font-family: ${typography.system('sans')};
          font-size: var(--label-size);
          font-weight: var(--label-weight);
          margin-bottom: 0.5em;
        }

        .container {
          background: ${value};
          padding: 1em;
        }

        input {
          display: block;
          background: rgba(255, 255, 255, 0.8);
          border: none;
          border-bottom: var(--border-width) solid rgba(255, 255, 255, 0.5);
          font-family: ${typography.system('monospace')};
          padding: 0.5em;
          width: 97.5%;
          text-align: center;
        }

        input[type='color'] {
          background: transparent;
          display: block;
          border: none;
          margin-bottom: 1em;
          padding: 0;
          height: 4em;
          width: 100%;
        }
      </style>
      <label for="${labelId}">${label}</label>
      <div class="container">
        <input
          id="${labelId}"
          name="${labelId}"
          type="color"
          value="${color.format(value, 'hex')}"
          oninput="${html.set('value')}"
        />
        <input
          name="${labelId}"
          value="${value}"
          oninput="${html.set('value')}"
        />
      </div>
    `
};

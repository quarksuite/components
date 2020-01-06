import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

export default {
  label: 'Range Label',
  value: 50,
  min: 0,
  max: 100,
  sideLabel: false,
  info: '',
  labelId: ({ label }) =>
    label
      .toLowerCase()
      .split(' ')
      .join('-'),
  render: ({ label, value, min, max, sideLabel, info, labelId }) =>
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

        input {
          width: 100%;
        }

        label.sub {
          font-weight: 400;
        }

        label input {
          width: initial;
        }
      </style>
      ${sideLabel
        ? html`
            <label class="sub"
              ><input
                id="${labelId}"
                type="range"
                value="${value}"
                min="${min}"
                max="${max}"
                oninput="${html.set('value')}"
              />
              ${label}: ${value} <small>${info}</small></label
            >
          `
        : html`
            <label for="${labelId}">${label}: ${value}%</label>
            <input
              id="${labelId}"
              type="range"
              value="${value}"
              min="${min}"
              max="${max}"
              oninput="${html.set('value')}"
            />
          `}
    `
};

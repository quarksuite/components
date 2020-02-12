import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  label: 'Read the Label',
  labelPos: 'top',
  id: 'id',
  render: ({ label, labelPos, id }) => html`
    ${hostInit}
    <style>
      :host {
        --border: 4px solid black;
        --font: sans-serif;
        --label-weight: 700;

        --input-radius: 0.5em;
        --input-padding: 0.75em;

        font-family: var(--font);
      }

      label {
        display: block;
        font-weight: var(--label-weight);
      }

      ::slotted(input[type='text']),
      ::slotted(input[type='number']) {
        border: var(--border);
        border-radius: var(--input-radius);
        padding: var(--input-padding);
      }

      ::slotted(input[type='color']) {
        background: transparent;
        border: none;
        border-radius: 0;
        padding: 0;
        width: 100%;
      }
    </style>
    <div>
      ${labelPos === 'top' &&
        html`
          <style>
            :host {
              --label-margins: 0.5em 0 0 0;
            }
            ::slotted(input) {
              margin: var(--label-margins);
            }
          </style>
          <label for="${id}">${label}</label>
          <slot></slot>
        `}
      ${labelPos === 'right' &&
        html`
          <style>
            :host {
              --label-margins: 0 0.5em 0 0;
            }

            ::slotted(input) {
              margin: var(--label-margins);
            }
          </style>
          <label><slot></slot>${label}</label>
        `}
      ${labelPos === 'bottom' &&
        html`
          <style>
            :host {
              --label-margins: 0 0 0.5em 0;
            }

            ::slotted(input) {
              margin: var(--label-margins);
            }
          </style>
          <slot></slot>
          <label for="${id}">${label}</label>
        `}
      ${labelPos === 'left' &&
        html`
          <style>
            :host {
              --label-margins: 0 0 0 0.5em;
            }

            ::slotted(input) {
              margin: var(--label-margins);
            }
          </style>
          <label>${label}<slot></slot></label>
        `}
    </div>
  `
};

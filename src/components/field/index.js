import { html } from 'hybrids';

import hostInit from '../common/host';

export default {
  label: 'Read the Label',
  labelPos: 'top',
  labelFor: '',
  render: ({ label, labelPos, labelFor }) => html`
    ${hostInit}
    <style>
      :host {
        --field-font: sans-serif;

        --label-font-size: 1.25em;
        --label-weight: 700;

        --input-background: white;
        --input-border: 4px solid black;
        --input-font-size: var(--label-font-size);
        --input-radius: 0.5em;
        --input-padding: 0.75em;

        --color-input-height: 3em;

        font-family: var(--field-font);
      }

      label {
        display: block;
        font-size: var(--label-font-size);
        font-weight: var(--label-weight);
      }

      ::slotted(input[type='file']),
      ::slotted(input[type='text']),
      ::slotted(input[type='number']) {
        background: var(--input-background);
        border: var(--input-border);
        box-sizing: border-box;
        border-radius: var(--input-radius);
        font-size: var(--input-font-size);
        padding: var(--input-padding);
        width: 100%;
      }

      ::slotted(input[type='range']) {
        width: 100%;
      }

      ::slotted(input[type='color']) {
        background: transparent;
        box-sizing: border-box;
        border: none;
        border-radius: 0;
        padding: 0;
        width: 100%;
        height: var(--color-input-height);
      }
    </style>
    ${labelPos === 'top' &&
      html`
        <style>
          :host {
            --label-margin: 0.5em 0 0 0;
          }

          ::slotted(input) {
            margin: var(--label-margin);
          }
        </style>
        <label for="${labelFor}">${label}</label>
        <slot></slot>
      `}
    ${labelPos === 'right' &&
      html`
        <style>
          :host {
            --label-margin: 0 0.25em 0 0;
          }

          ::slotted(input) {
            margin: var(--label-margin);
          }
        </style>
        <label><slot></slot> ${label}</label>
      `}
    ${labelPos === 'bottom' &&
      html`
        <style>
          :host {
            --label-margin: 0 0 0.5em 0;
          }

          ::slotted(input) {
            margin: var(--label-margin);
          }
        </style>
        <slot></slot>
        <label for="${labelFor}">${label}</label>
      `}
    ${labelPos === 'left' &&
      html`
        <style>
          :host {
            --label-margin: 0 0 0 0.5em;
          }

          ::slotted(input) {
            margin: var(--label-margin);
          }
        </style>
        <label>${label} <slot></slot></label>
      `}
  `
};

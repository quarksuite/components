import { html } from 'hybrids';
import hostInit from "../common/host.js";
export default {
  label: 'Read the Label',
  labelPos: 'top',
  id: 'id',
  render: ({
    label,
    labelPos,
    id
  }) => html`
    ${hostInit}
    <style>
      :host {
        --field-font: sans-serif;
        --label-weight: 700;

        --input-border: 4px solid black;
        --input-radius: 0.5em;
        --input-padding: 0.75em;

        --color-input-height: 3em;

        font-family: var(--field-font);
      }

      label {
        display: block;
        font-weight: var(--label-weight);
      }

      ::slotted(input[type='text']),
      ::slotted(input[type='number']) {
        border: var(--input-border);
        box-sizing: border-box;
        border-radius: var(--input-radius);
        padding: var(--input-padding);
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
    ${labelPos === 'top' && html`
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
    ${labelPos === 'right' && html`
        <style>
          :host {
            --label-margins: 0 0.25em 0 0;
          }

          ::slotted(input) {
            margin: var(--label-margins);
          }
        </style>
        <label><slot></slot>${label}</label>
      `}
    ${labelPos === 'bottom' && html`
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
    ${labelPos === 'left' && html`
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
  `
};
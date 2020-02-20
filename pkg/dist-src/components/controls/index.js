import { html } from 'hybrids';
import hostInit from "../common/host.js";
export default {
  render: () => html`
    ${hostInit}
    <style>
      :host {
        --form-flow: column wrap;
        --form-font: sans-serif;
        --form-font-size: 1.25em;
        --form-margins: 0 0 1.25em 0;

        --button-bg: white;
        --button-fg: black;
        --button-font-size: 1.25em;
        --button-border: 4px solid black;
        --button-radius: 0.5em;
        --button-padding: 1em;

        /* Internal qs-fieldset theming */
        --group-background: white;
        --group-border: 2px solid black;
        --group-padding: 0.25em;
        --group-label-font-size: var(--form-font-size);
        --group-label-padding: 0 0.75em;
        --group-label-weight: 700;

        --group-option-label-font-size: var(--form-font-size);
        --group-option-label-weight: 400;
        --group-option-input-border: 4px solid black;
        --group-option-input-font-size: var(--group-option-label-font-size);
        --group-option-input-radius: 0.5em;
        --group-option-input-padding: 0.75em;

        /* Internal qs-field theming */
        --field-label-font-size: var(--form-font-size);
        --field-label-weight: 700;
        --field-label-margin: 0.5em 0 0 0;

        --field-input-background: white;
        --field-input-border: 4px solid black;
        --field-input-font-size: var(--form-font-size);
        --field-input-radius: 0.5em;
        --field-input-padding: 0.75em;
        --field-color-height: 3em;
      }

      form {
        display: flex;
        flex-flow: var(--form-flow);
        font-family: var(--form-font);
        margin: var(--form-margins);
      }

      ::slotted(qs-fieldset) {
        --fieldset-background: var(--group-background);
        --fieldset-border: var(--group-border);
        --fieldset-padding: var(--group-padding);
        --fieldset-font: var(--form-font);
        --legend-font-size: var(--group-label-font-size);
        --legend-padding: var(--group-label-padding);
        --legend-weight: var(--group-label-weight);
        --option-label-weight: var(--group-option-label-weight);
        --option-label-font-size: var(--group-option-label-font-size);
        --option-input-border: var(--group-option-input-border);
        --option-input-font-size: var(--group-option-input-font-size);
        --option-input-radius: var(--group-option-input-radius);
        --option-input-padding: var(--group-option-input-padding);
      }

      ::slotted(qs-field) {
        --field-font: var(--form-font);
        --label-font-size: var(--field-label-font-size);
        --label-margin: var(--field-label-margin);
        --label-weight: var(--field-label-weight);
        --input-background: var(--field-input-background);
        --input-border: var(--field-input-border);
        --input-font-size: var(--field-input-font-size);
        --input-radius: var(--field-input-radius);
        --input-padding: var(--field-input-padding);
        --color-input-height: var(--field-color-height);
      }

      ::slotted(button) {
        background: var(--button-bg);
        border: var(--button-border);
        border-radius: var(--button-radius);
        color: var(--button-fg);
        font-size: var(--button-font-size);
        padding: var(--button-padding);
      }
    </style>
    <form action="">
      <slot></slot>
    </form>
  `
};
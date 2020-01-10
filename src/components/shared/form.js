import { html } from 'hybrids';

export default html`
  <style>
    :host {
      --form-flow: column wrap;
      --form-font: var(--font-system-sans);
      --form-margins: 0 0 var(--ms-block-base) 0;

      --field-margins: 0 0 var(--ms-block-base) 0;

      --fieldset-bg: var(--color-primary-tint-300);
      --fieldset-border-width: var(--ms-inline-base);
      --fieldset-border-style: solid;
      --fieldset-border-color: var(--color-primary-base);
      --fieldset-border: var(--fieldset-border-width)
        var(--fieldset-border-style) var(--fieldset-border-color);

      --label-font-size: var(--ms-block-base);

      --button-main-bg: var(--color-primary-tint-300);
      --button-main-border-color: var(--color-secondary-base);
      --button-main-padding: var(--ms-block-base);
      --button-main-font-size: var(--ms-block-2-x);

      --button-sub-bg: var(--button-main-bg);
      --button-sub-border-color: var(--color-tertiary-base);
      --button-sub-font-size: calc(var(--button-main-font-size) / 2);
      --button-sub-padding: calc(var(--button-main-padding) / 3);
    }

    form {
      display: flex;
      flex-flow: var(--form-flow);
      margin: var(--form-margins);
    }

    label,
    legend {
      font-weight: 700;
    }

    fieldset {
      border: var(--fieldset-border);
    }

    fieldset > label {
      font-weight: 400;
    }
  </style>
`;

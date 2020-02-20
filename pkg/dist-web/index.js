import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import { html, define } from 'hybrids';
import prism from 'prismjs';

var hostInit = html`
  <style>
    :host {
      display: block;
    }
    :host[hidden] {
      display: none;
    }
  </style>
`;

var index = {
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

var index$1 = {
  group: 'The Legend of Fieldset',
  render: ({
    group
  }) => html`
    ${hostInit}
    <style>
      :host {
        --fieldset-background: white;
        --fieldset-border: 2px solid black;
        --fieldset-font: sans-serif;
        --fieldset-padding: 1em;

        --legend-font-size: 1.25em;
        --legend-padding: 0 0.5em;
        --legend-weight: 700;

        /* Internal qs-field options */
        --option-label-font-size: 1em;
        --option-label-weight: 400;
        --option-input-border: 4px solid black;
        --option-input-font-size: var(--label-font-size);
        --option-input-radius: 0.5em;
        --option-input-padding: 0.75em;

        --option-color-height: 3em;

        font-family: var(--fieldset-font);
      }

      fieldset {
        background: var(--fieldset-background);
        border: var(--fieldset-border);
        padding: var(--fieldset-padding);
      }

      legend {
        font-size: var(--legend-font-size);
        font-weight: var(--legend-weight);
        padding: var(--legend-padding);
      }

      ::slotted(qs-field) {
        --label-weight: var(--option-label-weight);
        --label-font-size: var(--option-label-font-size);

        --input-border: 4px solid black;
        --input-font-size: var(--label-font-size);
        --input-radius: 0.5em;
        --input-padding: 0.75em;

        --color-input-height: 3em;

        display: inline-block;
      }
    </style>
    <fieldset>
      <legend>${group}</legend>
      <slot></slot>
    </fieldset>
  `
};

var index$2 = {
  label: 'Read the Label',
  labelPos: 'top',
  labelFor: '',
  render: ({
    label,
    labelPos,
    labelFor
  }) => html`
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
    ${labelPos === 'top' && html`
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
    ${labelPos === 'right' && html`
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
    ${labelPos === 'bottom' && html`
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
    ${labelPos === 'left' && html`
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

var index$3 = {
  data: {},
  variable: 'output',
  label: 'code',
  format: ({
    data
  }) => JSON.stringify(data, null, 2),
  output: ({
    format,
    variable
  }) => prism.highlight(`const ${variable} = ${format};`, prism.languages.javascript, 'javascript'),
  render: ({
    data,
    variable,
    label,
    output
  }) => html`
      ${hostInit}
      <style>
        :host {
          --font: monospace;
          --border: 4px solid black;
          --font-size: 1.25em;
          --padding: 1em;

          --theme-bg: white;
          --theme-padding: var(--padding);
          --theme-keyword-color: crimson;
          --theme-string-color: forestgreen;

          font-family: var(--font);
          font-size: var(--font-size);
        }

        pre {
          background: var(--theme-bg);
          border: var(--border);
          padding: var(--theme-padding);
        }

        /* prism theme */
        .token.keyword {
          color: var(--theme-keyword-color);
          font-weight: 700;
        }

        .token.string {
          color: var(--theme-string-color);
        }
      </style>
      <pre><code innerHTML="${output}"></code></pre>
    `
};

var index$4 = {
  label: 'base',
  value: '1rem',
  render: ({
    label,
    value
  }) => html`
      ${hostInit}
      <style>
        :host {
          --element-color: black;
          --element-margin: 0 0 0.5em 0;
          --element-width: 100%;

          --label-size: 1rem;

          --flex-flow: column nowrap;
          --align-items: center;

          display: flex;
          flex-flow: var(--flex-flow);
          align-items: var(--align-items);
        }

        div {
          background: var(--element-color);
          margin: var(--element-margin);
          width: var(--element-width);
          height: ${value};
        }

        code {
          font-size: var(--label-size);
        }
      </style>
      <div></div>
      <code>${label}: ${value}</code>
    `
};

var index$5 = {
  label: 'Sans',
  stack: 'sans-serif',
  render: ({
    label,
    stack
  }) => html`
    ${hostInit}
    <style>
      :host {
        --label-bg: black;
        --label-fg: white;
        --label-padding: 1em;
        --label-size: 1.25em;
        --label-font: sans-serif;

        --value-font: monospace;
        --value-opacity: 0.8;

        --content-border: 4px solid black;
        --content-padding: calc(var(--label-padding) / 1.5);
        --content-size: calc(var(--label-size) * 1.25);
      }

      .label {
        background: var(--label-bg);
        color: var(--label-fg);
        padding: var(--label-padding);
        font-family: var(--label-font);
        font-size: var(--label-size);
        font-weight: 700;
      }

      .label > code {
        opacity: var(--value-opacity);
        font-family: var(--value-font);
        font-weight: 400;
      }

      .content {
        border: var(--content-border);
        padding: var(--content-padding);
        font-family: ${stack};
        font-size: var(--content-size);
      }
    </style>
    <div class="label">${label}: <code>${stack}</code></div>
    <div class="content">The quick brown fox jumps over the lazy dog.</div>
  `
};

var index$6 = {
  label: 'base',
  value: '1rem',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({
    label,
    value,
    content
  }) => html`
      ${hostInit}
      <style>
        :host {
          --label-bg: black;
          --label-fg: white;

          --label-font: sans-serif;
          --label-size: 1.25em;
          --label-padding: 1em;

          --value-font: monospace;
          --value-opacity: 0.8;

          --content-bg: var(--label-fg);
          --content-fg: var(--label-bg);
          --content-border: 4px solid black;
          --content-padding: var(--label-padding);
        }

        .label {
          background: var(--label-bg);
          color: var(--label-color);
          display: inline-block;
          font-family: var(--label-font);
          font-size: var(--label-size);
          padding: var(--label-padding);
        }

        .label > code {
          opacity: var(--value-opacity);
          font-family: var(--value-font);
        }

        .content {
          border: var(--content-border);
          background: var(--content-bg);
          color: var(--content-fg);
          padding: var(--content-padding);
          font-family: var(--font-system-serif);
          font-size: ${value};
        }
      </style>
      <div class="label">${label}: <code>${value}</code></div>
      <div class="content">${content}</div>
    `
};

var index$7 = {
  value: '#aaaaaa',
  render: ({
    value
  }) => html`
      ${hostInit}
      <style>
        :host {
          --border-color: black;
          --border-width: 4px;
          --border-radius: 0;

          --swatch-padding: 1.5em;

          --value-font: monospace;
          --value-padding: calc(var(--swatch-padding) / 2);
          --value-size: 1rem;
        }

        div {
          background: ${value};
          border: var(--border-width) solid var(--border-color);
          border-radius: var(--border-radius);
          padding: var(--swatch-padding);
        }

        code {
          background: rgba(255, 255, 255, 0.8);
          border-radius: calc(var(--border-radius) / 2);
          display: block;
          font-family: var(--value-font);
          font-size: var(--value-size);
          padding: var(--value-padding);
          text-align: center;
        }
      </style>
      <div>
        <code>${value}</code>
      </div>
    `
};

// Control Elements

var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  QSControls: index,
  QSFieldset: index$1,
  QSField: index$2,
  QSData: index$3,
  QSElement: index$4,
  QSFont: index$5,
  QSScale: index$6,
  QSSwatch: index$7
});

define({ ...components
});
//# sourceMappingURL=index.js.map

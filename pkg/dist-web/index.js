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
        --form-margins: 0 0 1.25em 0;

        --button-bg: white;
        --button-fg: black;
        --button-font-size: 1.25em;
        --button-border: 4px solid black;
        --button-radius: 0.5em;
        --button-padding: 1em;
      }

      form {
        display: flex;
        flex-flow: var(--form-flow);
        font-family: var(--form-font);
        margin: var(--form-margins);
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
        --fieldset-border: 2px solid black;
        --fieldset-font: sans-serif;

        --legend-padding: 0 0.5em;
        --legend-weight: 700;

        font-family: var(--fieldset-font);
      }

      fieldset {
        border: var(--fieldset-border);
      }

      legend {
        font-weight: var(--legend-weight);
        padding: var(--legend-padding);
      }

      ::slotted(qs-field) {
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

var index$3 = {
  data: {},
  variable: 'output',
  filename: 'system.js',
  format: ({
    data
  }) => JSON.stringify(data, null, 2),
  output: ({
    format,
    variable
  }) => prism.highlight(`const ${variable} = ${format};`, prism.languages.javascript, 'javascript'),
  hide: false,
  render: ({
    data,
    variable,
    filename,
    output,
    hide
  }) => html`
      ${hostInit}
      <style>
        :host {
          --label-bg: black;
          --label-fg: white;
          --label-padding: 1em;
          --code-font: monospace;
          --code-border: 4px solid black;
          --font-size: 1.25em;

          --theme-bg: white;
          --theme-padding: var(--label-padding);
          --theme-keyword-color: red;
          --theme-string-color: lime;

          font-family: var(--code-font);
          font-size: var(--font-size);
        }
        .filename,
        .output-code {
          margin: 0;
        }

        .filename {
          background: var(--label-bg);
          color: var(--label-fg);
          display: inline-block;
          padding: var(--label-padding);
        }
        .output-code {
          background: var(--theme-bg);
          border: var(--code-border);
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
      ${hide ? html`
            <pre class="output-code"><code innerHTML="${output}"></code></pre>
          ` : html`
            <div class="filename"><code>${filename}</code></div>
            <pre class="output-code"><code innerHTML="${output}"></code></pre>
          `}
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

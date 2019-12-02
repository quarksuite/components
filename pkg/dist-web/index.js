import '@webcomponents/webcomponentsjs/webcomponents-bundle.js';
import { html, define } from 'hybrids';
import { color, typography } from '@quarksuite/core';

const isMixed = (value, target, amount) => {
  return target ? html`
        <style>
          div {
            background: ${color.mix(value, target, amount)};
          }
        </style>
        <div><code>${color.mix(value, target, amount)}</code></div>
      ` : html`
        <style>
          div {
            background: ${value};
          }
        </style>
        <div><code>${value}</code></div>
      `;
};

var QSSwatch = {
  value: '#aaaaaa',
  target: undefined,
  amount: 50,
  render: ({
    value,
    target,
    amount
  }) => html`
    <style>
      :host {
        --swatch-padding: 1em;
        --value-alignment: center;
        --value-alpha: 0.8;
        --value-padding: var(--swatch-padding);
        --value-font-size: 1.25em;
      }

      div {
        padding: var(--swatch-padding);
      }

      code {
        background: rgba(255, 255, 255, var(--value-alpha));
        display: block;
        font-size: var(--value-font-size);
        padding: var(--value-padding);
        text-align: var(--value-alignment);
      }
    </style>
    ${isMixed(value, target, amount)}
  `
};

var index = {
  base: '#348ec9',
  type: 'monochromatic',
  distance: 30,
  accented: false,
  render: ({
    base,
    type,
    distance,
    accented
  }) => html`
      ${Object.values(color.palette(base, {
    scheme: {
      type,
      distance,
      accented
    }
  })).map(color => html`
            <qs-swatch value="${color.base}"></qs-swatch>
          `)}
    `.define({
    QSSwatch
  })
};

var index$1 = {
  base: '#348ec9',
  type: 'tints',
  limit: 3,
  contrast: 95,
  mode: 'logarithmic',
  render: ({
    base,
    type,
    limit,
    contrast,
    mode
  }) => html`
      <style>
        :host {
          --grid-flow: row wrap;
          --swatch-size: 25%;
          display: flex;
          flex-flow: var(--grid-flow);
        }

        qs-swatch {
          flex-basis: var(--swatch-size);
          flex-grow: 1;
        }
      </style>
      ${Object.values(color.palette(base, {
    [type]: {
      limit,
      contrast,
      mode
    }
  })).map(color => html`
            ${color[type.replace(/s$/g, '')].map(v => html`
                  <qs-swatch value="${v}"></qs-swatch>
                `)}
          `)}
    `.define({
    QSSwatch
  })
};

var index$2 = {
  family: 'sans',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({
    family,
    content
  }) => html`
    <style>
      :host {
        --content-size: 1.5em;
        --content-padding: 0;
      }
      div {
        font-family: ${typography.system(family)};
        font-size: var(--content-size);
        line-height: 1.5;
        padding: var(--content-padding);
      }
    </style>
    <div>${content}</div>
  `
};



var components = /*#__PURE__*/Object.freeze({
  __proto__: null,
  QSSwatch: QSSwatch,
  QSScheme: index,
  QSVariants: index$1,
  QSTypography: index$2
});

define({ ...components
});
//# sourceMappingURL=index.js.map

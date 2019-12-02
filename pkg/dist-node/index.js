'use strict';

require('@webcomponents/webcomponentsjs/webcomponents-bundle.js');
var hybrids = require('hybrids');
var core = require('@quarksuite/core');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

const isMixed = (value, target, amount) => {
  return target ? hybrids.html`
        <style>
          div {
            background: ${core.color.mix(value, target, amount)};
          }
        </style>
        <div><code>${core.color.mix(value, target, amount)}</code></div>
      ` : hybrids.html`
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
  }) => hybrids.html`
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
  }) => hybrids.html`
      ${Object.values(core.color.palette(base, {
    scheme: {
      type,
      distance,
      accented
    }
  })).map(color => hybrids.html`
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
  }) => hybrids.html`
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
      ${Object.values(core.color.palette(base, {
    [type]: {
      limit,
      contrast,
      mode
    }
  })).map(color => hybrids.html`
            ${color[type.replace(/s$/g, '')].map(v => hybrids.html`
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
  }) => hybrids.html`
    <style>
      :host {
        --content-size: 1.5em;
        --content-padding: 0;
      }
      div {
        font-family: ${core.typography.system(family)};
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

hybrids.define(_objectSpread2({}, components));
//# sourceMappingURL=index.js.map

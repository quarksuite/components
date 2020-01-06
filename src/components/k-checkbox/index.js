import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

export default {
  name: 'name',
  legend: 'Legend',
  switches: [
    { label: 'first toggle', value: 'some value' },
    { label: 'second toggle', value: 'another value' }
  ],
  render: ({ name, legend, switches }) =>
    html`
      <style>
        label,
        fieldset {
          display: block;
          font-family: ${typography.system('sans')};
          font-size: 1.25em;
        }

        fieldset {
          border: 2px solid;
          padding: 0.5em;
        }

        legend {
          font-weight: bold;
        }

        div {
          display: flex;
          flex-flow: row wrap;
        }

        div label {
          display: inline;
          font-size: 1em;
          flex: 1;
          text-align: center;
        }
      </style>
      ${switches.length === 1
        ? html`
            <label
              ><input
                type="checkbox"
                name="${name}"
                value="${switches[0].value}"
                onchange="${html.set('switches[0].value')}"
              />
              ${switches[0].label}</label
            >
          `
        : html`
            <fieldset>
              <legend>${legend}</legend>
              <div>
                ${switches.map(
                  opt => html`
                    <label
                      ><input
                        type="checkbox"
                        name="${name}"
                        value="${opt.value}"
                        onchange="${html.set('opt.value')}"
                      />
                      ${opt.label}</label
                    >
                  `
                )}
              </div>
            </fieldset>
          `}
    `
};

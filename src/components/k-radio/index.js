import { html } from 'hybrids';
import { typography } from '@quarksuite/core';

export default {
  name: 'name',
  legend: 'Legend',
  choices: [
    { label: 'first choice', value: 'some value' },
    { label: 'second choice', value: 'another value' }
  ],
  toggleFunc: undefined,
  render: ({ name, legend, choices, toggleFunc }) =>
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
      <fieldset>
        <legend>${legend}</legend>
        <div>
          ${choices.map(
            (opt, i) =>
              html`
                ${i === 0
                  ? html`
                      <label
                        ><input
                          type="radio"
                          name="${name}"
                          value="${opt.value}"
                          onchange="${html.set('opt.value')}"
                          checked
                        />
                        ${opt.label}</label
                      >
                    `
                  : html`
                      <label
                        ><input
                          type="radio"
                          name="${name}"
                          value="${opt.value}"
                          onchange="${html.set('opt.value')}"
                        />
                        ${opt.label}</label
                      >
                    `}
              `
          )}
        </div>
      </fieldset>
    `
};

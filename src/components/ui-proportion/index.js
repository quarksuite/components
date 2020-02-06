import { html } from 'hybrids';
import { scale } from '@quarksuite/core';

import BElement from '../b-element';

import numberKnob from '../knobs/number';
import radioKnob from '../knobs/radio';

import hostInit from '../shared/host';
import formStyles from '../shared/form';

const setUnit = (host, event) => (host.unit = event.target.value);

export default {
  base: 1,
  ratio: 1.25,
  limit: 4,
  unit: 'rem',
  output: ({ base, ratio, limit, unit }) =>
    scale.output(scale.create(base, ratio, limit), unit),
  render: ({ base, ratio, limit, unit, output }) =>
    html`
      ${hostInit} ${formStyles}
      <style>
        form {
          display: flex;
          flex-flow: var(--form-flow);
          margin: var(--form-margins);
        }

        @media (min-width: 32em) {
          form {
            flex-flow: row wrap;
          }
        }

        b-element {
          margin-bottom: var(--ms-block-2-x);
        }

        .scale,
        .unit {
          flex: 1;
        }

        .scale {
          display: flex;
          flex-flow: row nowrap;
        }

        .number {
          margin: var(--field-margins);
        }

        @media (min-width: 32em) {
          .scale {
            margin-right: var(--ms-block-base);
          }

          .number {
            flex: 1;
            margin: 0;
          }
        }

        .unit {
          display: flex;
          flex-flow: row wrap;
        }

        .radio {
          display: block;
        }
      </style>
      <form action="">
        <div class="scale">
          ${numberKnob('Base', base, html.set('base'))}
          ${numberKnob('Ratio', ratio, html.set('ratio'))}
          ${numberKnob('Limit', limit, html.set('limit'), { step: 1 })}
        </div>
        <fieldset class="unit">
          <legend>Output Unit</legend>
          ${radioKnob(
            'output-unit',
            [
              { label: 'rem', value: 'rem' },
              { label: 'em', value: 'em' },
              { label: 'px', value: 'px' },
              { label: 'vw', value: 'vw' },
              { label: 'vh', value: 'vh' },
              { label: 'vmin', value: 'vmin' },
              { label: 'vmax', value: 'vmax' }
            ],
            setUnit
          )}
        </fieldset>
      </form>
      ${output.map((v, i) =>
        i === 0
          ? html`
              <b-element value="${v}"></b-element>
            `
          : html`
              <b-element
                label="${[++i, 'x'].join('')}"
                value="${v}"
              ></b-element>
            `
      )}
    `.define({ BElement })
};

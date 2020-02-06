import { html } from 'hybrids';
import { scale } from '@quarksuite/core';

import BScale from '../b-scale';

import textKnob from '../knobs/text';
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
  content: 'The quick brown fox jumps over the lazy dog.',
  output: ({ base, ratio, limit, unit }) =>
    scale.output(scale.create(base, ratio, limit), unit),
  render: ({ base, ratio, limit, unit, content, output }) =>
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

        b-scale {
          margin-bottom: var(--ms-block-2-x);
        }

        .input {
          flex-basis: 100%;
          margin: var(--field-margins);
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
        ${textKnob('Sample Content', content, html.set('content'), {
          placeholder: 'Enter some sample text'
        })}
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
              { label: 'ch', value: 'ch' },
              { label: 'ex', value: 'ex' }
            ],
            setUnit
          )}
        </fieldset>
      </form>
      ${output.map((v, i) =>
        i === 0
          ? html`
              <b-scale value="${v}" content="${content}"></b-scale>
            `
          : html`
              <b-scale
                label="${[++i, 'x'].join('')}"
                value="${v}"
                content="${content}"
              ></b-scale>
            `
      )}
    `.define({ BScale })
};

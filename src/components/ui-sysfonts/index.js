import { html } from 'hybrids';
import { typography } from '@quarksuite/core';
import checkboxKnob from '../knobs/checkbox';

import BFont from '../b-font';

import hostInit from '../shared/host';
import formStyles from '../shared/form';

const activateStack = (host, event) => {
  if (event.target.value === 'sans') host.sans = event.target.checked;
  if (event.target.value === 'serif') host.serif = event.target.checked;
  if (event.target.value === 'monospace') host.monospace = event.target.checked;
};

export default {
  sans: false,
  serif: false,
  monospace: false,
  output: ({ sans, serif, monospace }) => {
    let collection = {};

    if (sans) collection.sans = typography.system('sans');
    if (serif) collection.serif = typography.system('serif');
    if (monospace) collection.monospace = typography.system('monospace');

    return collection;
  },
  render: ({ sans, serif, monospace, output }) =>
    html`
      ${hostInit} ${formStyles}
      <style>
        .system {
          display: flex;
          flex-flow: column wrap;
        }

        .system > b-font {
          flex: 1;
          margin-bottom: var(--ms-block-base);
        }

        @media (min-width: 32em) {
          b-font {
            --sample-size: var(--ms-block-3-x);
          }
        }
      </style>
      <form action="">
        <fieldset>
          <legend>Choose Stacks</legend>
          ${checkboxKnob(
            'system',
            [
              { label: 'sans', value: 'sans' },
              { label: 'serif', value: 'serif' },
              { label: 'monospace', value: 'monospace' }
            ],
            activateStack
          )}
        </fieldset>
      </form>
      <div class="system">
        ${sans &&
          html`
            <b-font></b-font>
          `}
        ${serif &&
          html`
            <b-font id="serif"></b-font>
          `}
        ${monospace &&
          html`
            <b-font id="monospace"></b-font>
          `}
      </div>
    `.define({ BFont })
};

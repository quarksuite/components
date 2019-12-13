import { html } from 'hybrids';
import { color, typography } from '@quarksuite/core';
import BSwatch from '../b-swatch';

const toggleFormat = (host, event) => (host.format = event.target.value);

export default {
  base: 'red',
  blend: 'blue',
  amount: 50,
  format: 'hex',
  output: ({ base, blend, amount }) => color.mix(base, blend, amount),
  render: ({ base, blend, amount, format, output }) =>
    html`
      <style>
        :host {
          --label-size: 1.5em;
          --output-padding: 3em;
          --output-font-size: 1.5em;
        }

        form {
          display: flex;
          flex-flow: row wrap;
          margin-bottom: 1em;
        }

        label,
        legend {
          display: block;
          font-family: ${typography.system('sans')};
          font-size: var(--label-size);
          margin-bottom: 0.5em;
        }

        input[type='color'] {
          background: transparent;
          border: 16px solid;
          border-radius: 0.5em;
          flex: 1;
          outline: none;
          padding: 0;
          height: 100%;
          width: 95%;
        }

        input[type='range'] {
          width: 100%;
        }

        b-swatch {
          --swatch-padding: var(--output-padding);
          --value-size: var(--output-font-size);
        }

        .controls {
          flex-grow: 1;
          margin-bottom: 4em;
        }

        .base,
        .blend {
          flex-basis: auto;
        }

        .base input {
          border-color: ${color.palette(base, {
            tints: { limit: 1, contrast: 45 }
          })[0].tint[0]};
        }

        .blend input {
          border-color: ${color.palette(blend, {
            tints: { limit: 1, contrast: 45 }
          })[0].tint[0]};
        }

        .amount,
        .format {
          flex-basis: 48%;
          margin-bottom: 2em;
        }

        .format {
          display: flex;
        }

        .format label {
          flex: 1;
          text-align: center;
        }
      </style>
      <form action="">
        <div class="controls base">
          <label for="base">Base Color</label>
          <input
            id="base"
            type="color"
            value="${color.format(base, 'hex')}"
            oninput="${html.set('base')}"
          />
        </div>
        <div class="controls blend">
          <label for="blend">Blend Target</label>
          <input
            id="blend"
            type="color"
            value="${color.format(blend, 'hex')}"
            oninput="${html.set('blend')}"
          />
        </div>
        <div class="controls amount">
          <label for="amount">Blend %</label>
          <input
            id="amount"
            type="range"
            value="${amount}"
            oninput="${html.set('amount')}"
          />
        </div>
        <fieldset class="controls format">
          <legend>Output Format</legend>
          <label
            ><input
              type="radio"
              name="format"
              value="hex"
              onchange="${toggleFormat}"
              checked
            />
            hex</label
          >
          <label
            ><input
              type="radio"
              name="format"
              value="rgb"
              onchange="${toggleFormat}"
            />
            rgb</label
          >
          <label
            ><input
              type="radio"
              name="format"
              value="hsl"
              onchange="${toggleFormat}"
            />
            hsl</label
          >
        </fieldset>
      </form>
      <b-swatch value="${color.format(output, format)}"></b-swatch>
    `.define({ BSwatch })
};

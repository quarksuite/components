import { html } from 'hybrids';
import { scale } from '@quarksuite/core';
import QSValue from '../qs-value';

export default {
  base: 1,
  ratio: 'golden',
  limit: 6,
  invert: false,
  unit: 'rem',
  content: 'The quick brown fox jumps over the lazy dog.',
  render: ({ base, ratio, limit, invert, unit, content }) =>
    html`
      <style>
        qs-value {
          margin-top: 1.25em;
        }
      </style>
      ${scale
        .output(
          scale.create(
            base,
            isNaN(ratio) ? ratio : parseFloat(ratio),
            limit,
            invert
          ),
          unit
        )
        .map(
          (size, index) =>
            html`
              <qs-value
                value="${size}"
                index="${index}"
                content="${content}"
              ></qs-value>
            `
        )}
    `.define({ QSValue })
};

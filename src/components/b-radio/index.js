import { html } from 'hybrids';

import hostInit from '../shared/host';

export default {
  name: 'name',
  collection: [
    { label: 'first', value: 'first' },
    { label: 'second', value: 'second' }
  ],
  handler: undefined,
  render: ({ name, collection, handler }) =>
    html`
      ${hostInit}
      ${collection.map((option, index) => {
        const { label, value } = option;
        return index === 0
          ? html`
              <label
                ><input
                  type="radio"
                  name="${name}"
                  value="${value}"
                  oninput="${handler}"
                  checked
                />
                ${label}</label
              >
            `
          : html`
              <label
                ><input
                  type="radio"
                  name="${name}"
                  value="${value}"
                  oninput="${handler}"
                />
                ${label}</label
              >
            `;
      })}
    `
};

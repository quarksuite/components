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
      ${collection.map(option => {
        const { label, value } = option;
        return html`
          <label
            ><input
              type="checkbox"
              name="${name}"
              value="${value}"
              onchange="${handler}"
            />
            ${label}</label
          >
        `;
      })}
    `
};

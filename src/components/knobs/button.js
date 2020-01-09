import { html } from 'hybrids';

export default (label, handler, value = '', modifier = '') => html`
  <button
    class="button ${modifier}"
    type="button"
    value="${value}"
    onclick="${handler}"
  >
    ${label}
  </button>
`;

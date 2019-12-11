import { html } from 'hybrids';
import BSwatch from '../b-swatch';

export default {
  render: ({ value }) =>
    html`
      <b-swatch></b-swatch>
    `.define({ BSwatch })
};

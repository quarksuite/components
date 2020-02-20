import { html } from 'hybrids';
export default html`
  <style>
    :host {
      display: block;
    }
    :host[hidden] {
      display: none;
    }
  </style>
`;
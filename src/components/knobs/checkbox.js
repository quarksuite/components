import { html } from 'hybrids';

export default (name, switches, handler) =>
  Object.values(switches).map(toggle => {
    const { label, value } = toggle;
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
  });

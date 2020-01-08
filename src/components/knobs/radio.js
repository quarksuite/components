import { html } from 'hybrids';

export default (name, choices, handler) =>
  Object.values(choices).map((option, index) => {
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
            ${label}
          </label>
        `
      : html`
          <label
            ><input
              type="radio"
              name="${name}"
              value="${option.value}"
              oninput="${handler}"
            />
            ${label}
          </label>
        `;
  });

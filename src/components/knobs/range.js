import { html } from 'hybrids';

export default (
  label,
  value,
  handler,
  { min = 0, max = 100, inline = false, desc, suffix = '%' } = {}
) => {
  const id = label
    .toLowerCase()
    .split(' ')
    .join('-');

  return inline
    ? html`
        <label class="range"
          ><input
            type="range"
            value="${value}"
            min="${min}"
            max="${max}"
            oninput=${handler}
          />
          ${label}: ${value}${suffix} <small>${desc}</small></label
        >
      `
    : html`
        <div class="range">
          <label for="${id}">${label}: ${value}${suffix}</label>
          <input
            id="${id}"
            type="range"
            value="${value}"
            min="${min}"
            max="${max}"
            oninput="${handler}"
          />
        </div>
      `;
};

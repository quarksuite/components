import { html, define } from 'hybrids';
import Field from './';

define('qs-field', Field);

export default {
  title: 'Controls|<qs-field>'
};

define('storybook-field', {
  render: () => html`
    <style></style>
    <qs-field label="Color Field">
      <input type="color" />
    </qs-field>
    <qs-field label="Checkbox Field">
      <input type="checkbox" />
    </qs-field>
    <qs-field label="File Field">
      <input type="file" />
    </qs-field>
    <qs-field label="Number Field">
      <input type="number" />
    </qs-field>
    <qs-field label="Range Field">
      <input type="range" />
    </qs-field>
    <qs-field label="Radio Field">
      <input type="radio" />
    </qs-field>
    <qs-field label="Text Field">
      <input type="text" />
    </qs-field>
  `
});

export const Demo = () => `<storybook-field></storybook-field>`;

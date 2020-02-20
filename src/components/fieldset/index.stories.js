import { html, define } from 'hybrids';
import Fieldset from './';

define('qs-fieldset', Fieldset);

export default {
  title: 'Controls|<qs-fieldset>'
};

define('storybook-fieldset', {
  render: () => html`
    <qs-fieldset group="Radio Sample">
      <label><input type="radio" /> first</label>
      <label><input type="radio" /> second</label>
    </qs-fieldset>
  `
});

export const Demo = () => `<storybook-fieldset></storybook-fieldset>`;

import { define } from 'hybrids';
import Fieldset from './';

define('qs-fieldset', Fieldset);

export default {
  title: 'Controls|<qs-fieldset>'
};

export const Demo = () => `
  <qs-fieldset legend="Radio Sample">
    <label><input type="radio" /> first</label>
    <label><input type="radio" /> second</label>
  </qs-fieldset>
`;

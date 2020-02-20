import { html, define } from 'hybrids';
import Data from ".//index.js";
define('qs-data', Data);
export default {
  title: 'Display|Data/<qs-data>'
};
define('storybook-data', {
  render: () => html`
      <qs-data></qs-data>
    `
});
export const Demo = () => `<storybook-data></storybook-data>`;
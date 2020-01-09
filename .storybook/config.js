import { configure, addParameters } from '@storybook/html';

// global tokens
import '@quarksuite/tokens/dist/tokens.css';

addParameters({
  options: {
    enableShortcuts: false
  }
});

configure(require.context('../src', true, /\.stories.js$/), module);

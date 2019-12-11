import { configure, addParameters } from '@storybook/html';

addParameters({
  options: {
    enableShortcuts: false
  }
})

configure(require.context('../src', true, /\.stories.js$/), module);

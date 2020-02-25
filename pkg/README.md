# Quarksuite (Components)

This repo contains and documents components for building Quarksuite GUIs. If you want to learn more about what this is and why it exists, please [visit the core repo](https://github.com/quarksuite/core).

## Installation

### As a Module

>You’ll want to grab the latest Node.js LTS (v12.15.0) version if you want to use the library as a module. I recommend installing Yarn as well.

```bash
npm install @quarksuite/components

# OR

yarn add @quarksuite/components
```

Then in your target file:

```js
require('@quarksuite/components');

// OR with ES Modules

import '@quarksuite/components';
```

### In the Browser

Same steps as above, then:

```bash
npx snowpack
```

```html
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Quarksuite Components (v1.3.x) Example</title>
  </head>
  <body>
    <script type="module" src="/index.js"></script>
  </body>
</html>
```

```js
import '/web_modules/@quarksuite/components.js';
```


OR

```html
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>Quarksuite Components (v1.3.x) Example</title>
  </head>
  <body>
    <script src="https://unpkg.com/@quarksuite/components@v1.3.1/dist-web/index.js"></script>
  </body>
</html>
```

## UI Samples

Below are some rough examples of how the core and components work together to create, display, and capture baseline data.

### Color

#### [Custom Palette](https://color-ui-sample-custom.now.sh)

![Custom Palette Sample](assets/color-ui-sample-custom.gif)

#### [Basic Color Scheme](https://color-ui-sample-scheme.now.sh)

![Basic Scheme Sample](assets/color-ui-sample-scheme.gif)

#### [Color Variants](https://color-ui-sample-variants.now.sh)

![Color Variants Sample](assets/color-ui-sample-variants.gif)

### Content

#### [System Font Stacks](https://font-ui-sample-system.now.sh)

![System Font Stack Sample](assets/font-ui-sample-system.gif)

#### [Modular Scale](https://font-ui-sample-scale.now.sh)

![Content Modular Scale Sample](assets/font-ui-sample-scale.gif)

### Proportion

#### [Modular Scale](https://proportion-ui-sample-scale.now.sh)

![Proportion Modular Scale Sample](assets/proportion-ui-sample-scale.gif)

## API

See the [API documentation](API.md).

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
    <title>Quarksuite Components (v1.2.0) Example</title>
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
    <title>Quarksuite Components (v1.2.0) Example</title>
  </head>
  <body>
    <script src="https://unpkg.com/@quarksuite/components@v1.2.0/dist-web/index.js"></script>
  </body>
</html>
```

## Components (as of v1.2.x)

Components in v1 are categorized by controls and display. Control components set simple layout rules for forms and input UI. Display components aid in processing and viewing data.

### Control Components

#### \<qs-field>

A control component for formatting UI fields.

##### Properties

+ `label: String = 'Read the label'`: Sets the internal label
+ `labelPos: String = 'top'`: Positions the label (accepted values: `top`, `right`, `bottom`, `left`)
+ `id: String = 'id'`: Set the label id

##### Theme Options

```css
qs-field {
  --field-font: sans-serif;
  --label-weight: 700;
  
  --input-border: 4px solid black;
  --input-radius: 0.5em;
  --input-padding: 0.75em;
  
  --color-input-height: 3em;
}
```

##### Example

```html
<qs-field label="Content" id="content">
  <input type="text" />
</qs-field>
```

#### \<qs-fieldset>

A control component for grouping `<qs-field>` options.

##### Properties

* `group: String = 'The Legend of Fieldset'`: Sets the group label

##### Theme Options

```css
qs-fieldset {
  --fieldset-border: 2px solid black;
  --fieldset-font: sans-serif;
  
  --legend-padding: 0 0.5em;
  --legend-weight: 700;
}
```

##### Example

```html
<qs-fieldset group="Radio Sample">
  <qs-field label="first" label-pos="right">
    <input type="radio" />
  </qs-field>
  <qs-field label="second" label-pos="right">
    <input type="radio" />
  </qs-field>
</qs-fieldset>
```

#### \<qs-controls>

A control component for basic structuring and layout of UI inputs.

##### Theme Options

```css
qs-controls {
  --form-flow: column wrap;
  --form-font: sans-serif;
  --form-margins: 0 0 1.25em 0;
  
  --button-bg: white;
  --button-fg: black;
  --button-font-size: 1.25em;
  --button-border: 4px solid black;
  --button-radius: 0.5em;
  --button-padding: 1em;
}
```

##### Example

```html
<qs-controls>
  <qs-field label="Color" id="color">
    <input type="color" />
  </qs-field>     
  <qs-field label="Content" id="content">
    <input type="text" />
  </qs-field>     
  <qs-fieldset group="Radio Sample">
    <qs-field label="first" label-pos="right">
      <input type="radio" />
    </qs-field>
    <qs-field label="second" label-pos="right">
      <input type="radio" />
    </qs-field>
  </qs-fieldset>     
</qs-controls>
```

```css
qs-controls {
  --form-flow: row wrap;
}

qs-controls > qs-field {
  flex: 1;
  margin-bottom: 1em;
}

qs-controls > qs-fieldset {
  flex-basis: 100%;
}
```

### Display Components

#### \<qs-data>

A display component for formatting data.

##### Properties

+ `data: Object = {}`: The actual data to format
+ `filename: String = 'system.js'`: The filename to label the data
+ `variable: String = 'output'`: The variable to capture the output
+ `hide: Boolean = false`: An option to hide the label

##### Theme Options

```css
qs-data {
  --label-bg: black;
  --label-fg: white;
  --label-padding: 1em;
  
  --code-font: monospace;
  --code-border: 4px solid black;
  --font-size: 1.25em;
  
  --theme-bg: white;
  --theme-padding: var(--label-padding);
  --theme-keyword-color: red;
  --theme-string-color: lime;
}
```

##### Example

```html
<qs-data id="color-data" filename="color.js" variable="palette"></qs-data>
```

```js
const element = document.getElementById('color-data');
element.data = {
  base: 'red',
  accent: 'green'
}
```

#### \<qs-element>

A display component for spacing and proportion scales.

##### Properties

+ `label: String = 'base'`: The label to set for the element
+ `value: String = '1rem'`: The value to set for the element

##### Theme Options

```css
qs-element {
  --element-color: black;
  --element-margin: 0 0 0.5em 0;
  --element-width: 100%;
  
  --label-size: 1rem;
  
  --flex-flow: column nowrap;
  --align-items: center;
}
```

##### Example

```html
<qs-element label="foo" value="1.5vw"></qs-element>
```

#### \<qs-font>

A display component for previewing system or custom fonts stacks.

##### Properties

`label: String = 'Sans'`: The label for the font stack

`stack: String = 'sans-serif'`: The font stack to preview

##### Theme Options

```css
qs-font {
  --label-bg: black;
  --label-fg: white;
  --label-padding: 1em;
  --label-size: 1.25em;
  --label-font: sans-serif;

  --value-font: monospace;
  --value-opacity: 0.8;

  --content-border: 4px solid black;
  --content-padding: calc(var(--label-padding) / 1.5);
  --content-size: calc(var(--label-size) * 1.25);
}
```

##### Example

```html
<qs-font id="system-sans" label="System Sans"></qs-font>
```

```js
// import typography module from @quarksuite/core
import { typography } from '@quarksuite/core';

const element = document.getElementById('system-sans');

element.stack = typography.system('sans');
```

#### \<qs-scale>

A display component for content modular scales.

##### Properties

`label: String = 'base'`: The label for the current scale index

`value: String = '1rem'`: The current scale value

`content: String = 'The quick brown fox...'`: The content sample to preview 

##### Theme Options

```css
qs-scale {
  --label-bg: black;
  --label-fg: white;

  --label-font: sans-serif;
  --label-size: 1.25em;
  --label-padding: 1em;

  --value-font: monospace;
  --value-opacity: 0.8;

  --content-bg: var(--label-fg);
  --content-fg: var(--label-bg);
  --content-border: 4px solid black;
  --content-padding: var(--label-padding);
}
```

##### Example

```html
<qs-scale label="n - 2" value="1.25rem"></qs-scale>
```

#### \<qs-swatch>

A display component for colors and palettes.

##### Properties

`value: String = '#aaaaaa'`: The color to display

##### Theme Options

```css
qs-swatch {
  --border-color: black;
  --border-width: 4px;
  --border-radius: 0;

  --swatch-padding: 1.5em;

  --value-font: monospace;
  --value-padding: calc(var(--swatch-padding) / 2);
  --value-size: 1rem;
}
```

##### Example

```html
<qs-swatch value="#348ec9"></qs-swatch>
```

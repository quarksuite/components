# Components API (v1.3.x)

Components in v1 are categorized by controls and display. Control components set simple layout rules for forms and input UI. Display components aid in processing and viewing data.

## Control

### \<qs-field>

A control component for formatting UI fields.

#### Properties

+ `label: String = 'Read the label'`: Sets the internal label
+ `labelPos: String = 'top'`: Positions the label (accepted values: `top`, `right`, `bottom`, `left`)
+ `labelFor: String = ''`: Set the label id (when `labelPos = 'top' || 'bottom'`)

#### Theme Options

```css
qs-field {
  --field-font: sans-serif;

  --label-font-size: 1.25em;
  --label-weight: 700;

  --input-border: 4px solid black;
  --input-font-size: var(--label-font-size);
  --input-radius: 0.5em;
  --input-padding: 0.75em;

  --color-input-height: 3em;
}
```

#### Example

```html
<qs-field label="Content" label-for="content">
  <input id="content" type="text" />
</qs-field>
```

### \<qs-fieldset>

A control component for grouping `<qs-field>` options.

#### Properties

* `group: String = 'The Legend of Fieldset'`: Sets the group label

#### Theme Options

```css
qs-fieldset {
  --fieldset-background: white;
  --fieldset-border: 2px solid black;
  --fieldset-font: sans-serif;
  --fieldset-padding: 1em;

  --legend-font-size: 1.25em;
  --legend-padding: 0 0.5em;
  --legend-weight: 700;

  /* Internal qs-field options */
  --option-label-font-size: 1em;
  --option-label-weight: 400;
  --option-input-border: 4px solid black;
  --option-input-font-size: var(--label-font-size);
  --option-input-radius: 0.5em;
  --option-input-padding: 0.75em;

  --option-color-height: 3em;
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

### \<qs-controls>

A control component for basic structuring, layout, and theming of UI inputs.

#### Theme Options

```css
qs-controls {
  --form-flow: column wrap;
  --form-font: sans-serif;
  --form-font-size: 1.25em;
  --form-margins: 0 0 1.25em 0;

  --button-bg: white;
  --button-fg: black;
  --button-font-size: 1.25em;
  --button-border: 4px solid black;
  --button-radius: 0.5em;
  --button-padding: 1em;

  /* Internal qs-fieldset theming */
  --group-background: white;
  --group-border: 2px solid black;
  --group-padding: 0.25em;  
  --group-label-font-size: var(--form-font-size);
  --group-label-padding: 0 0.75em;
  --group-label-weight: 700;

  --group-option-label-font-size: var(--form-font-size);
  --group-option-label-weight: 400;
  --group-option-input-border: 4px solid black;
  --group-option-input-font-size: var(--group-option-label-font-size);
  --group-option-input-radius: 0.5em;
  --group-option-input-padding: 0.75em;

  /* Internal qs-field theming */
  --field-label-font-size: var(--form-font-size);
  --field-label-weight: 700;
  --field-label-margin: 0.5em 0 0 0;
  
  --field-input-background: white;
  --field-input-border: 4px solid black;
  --field-input-font-size: var(--form-font-size);
  --field-input-radius: 0.5em;
  --field-input-padding: 0.75em;
  --field-color-height: 3em;
}
```

#### Example

```html
<qs-controls>
  <qs-field label="Color" label-for="color">
    <input id="color" type="color" />
  </qs-field>     
  <qs-field label="Content" label-for="content">
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

## Display

### \<qs-data>

A display component for formatting data.

#### Properties

+ `data: Object = {}`: The actual data to format
+ `label: String = 'system.js'`: The data label
+ `variable: String = 'output'`: The variable to capture the output
+ `hide: Boolean = false`: An option to hide the label

#### Theme Options

```css
qs-data {
  --font: monospace;
  --border: 4px solid black;
  --font-size: 1.25em;
  --padding: 1em;

  --theme-bg: white;
  --theme-padding: var(--padding);
  --theme-keyword-color: crimson;
  --theme-string-color: forestgreen;
}
```

#### Example

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

### \<qs-element>

A display component for spacing and proportion scales.

#### Properties

+ `label: String = 'base'`: The label to set for the element
+ `value: String = '1rem'`: The value to set for the element

#### Theme Options

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

#### Example

```html
<qs-element label="foo" value="1.5vw"></qs-element>
```

### \<qs-font>

A display component for previewing system or custom fonts stacks.

#### Properties

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

#### Example

```html
<qs-font id="system-sans" label="System Sans"></qs-font>
```

```js
// import typography module from @quarksuite/core
import { typography } from '@quarksuite/core';

const element = document.getElementById('system-sans');

element.stack = typography.system('sans');
```

### \<qs-scale>

A display component for content modular scales.

#### Properties

`label: String = 'base'`: The label for the current scale index

`value: String = '1rem'`: The current scale value

`content: String = 'The quick brown fox...'`: The content sample to preview 

#### Theme Options

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

#### Example

```html
<qs-scale label="n - 2" value="1.25rem"></qs-scale>
```

### \<qs-swatch>

A display component for colors and palettes.

#### Properties

`value: String = '#aaaaaa'`: The color to display

#### Theme Options

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

#### Example

```html
<qs-swatch value="#348ec9"></qs-swatch>
```
# Quarksuite (Components)

This package contains and documents components for building an upcoming GUI. The plan is to use [Neutralino.js](https://neutralino.js.org) and keep it as small and light as possible.

## Components (as of v0.1.0)

### \<qs-swatch\>

This component is responsible for both defining and displaying color swatches.

#### Properties

+ `value`: a valid CSS color to display
+ `target` (optional): a color to blend with `value`
+ `amount`: percentage as an integer to blend `value` and `target` (`50` by default)

#### Usage

##### Element

```html
<!-- all defaults -->
<qs-swatch></qs-swatch>

<!-- value -->
<qs-swatch value="#348ec9"></qs-swatch>

<!-- target -->
<qs-swatch value="#348ec9" target="goldenrod"></qs-swatch>

<!-- amount -->
<qs-swatch value="#348ec9" target="#ccea00" amount=20></qs-swatch>
```

### \<qs-scheme\>

Outputs a color scheme
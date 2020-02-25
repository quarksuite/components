# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/), and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## v1.3.3

### Added

+ UI samples added to [documentation](README.md)

## v1.3.0

### Added

+ more robust theme options for control components. [See the API](API.md) for details

### Changed

+ theme options for display components have been refactored
+ `id` property of `<qs-field>` updated to `labelFor`
+ `<qs-data>` has been trimmed of its label. Theme options modified [See the API](API.md) for details

## v1.2.0

### Updated

+ microbundle replaced with pika to build components (may affect earlier builds)

## v1.1.0

### Added

+ hide property for `<qs-data>`

## v1.0.0

### Added

+ Custom control components (`<qs-controls>`, `<qs-fieldset>`, `<qs-field>`)

### Removed

+ All interface components

### Updated

+ All components now contained under a common `qs` namespace
+ All components uncoupled from `@quarksuite/core`. Install it as a dependency

## v0.2.0

### Added

+ System font selection UI (`<qsui-sysfonts>`)
+ Spacing and proportion UI (`<qsui-proportion>`)
+ Font size scale creation UI (`<qsui-content>`)
## v0.1.0

Initial release.

### Added

+ Palette creation UI (`<qsui-custom>`, `<qsui-scheme>`, `<qsui-mix>`)

+ Data component (`<qsui-dataview>`)

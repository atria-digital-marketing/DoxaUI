# DoxaUI

Vue 3 component library based on the [Doxa](https://github.com/atria-digital-marketing/doxa) design system.

## Installation

### 1. Create a Personal Access Token

1. Go to **GitHub Settings** → **Developer settings** → **Personal access tokens** → **Tokens (classic)**
2. Generate new token with `read:packages` scope
3. Copy the token

### 2. Configure authentication

Add the token to your `.npmrc` file in your project root:

```
@atria-digital-marketing:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=YOUR_TOKEN_HERE
```

Or authenticate via command line:

```bash
npm login --registry=https://npm.pkg.github.com/
# Enter your GitHub username
# Enter your PAT as the password
```

### 3. Install

```bash
npm install @atria-digital-marketing/doxaui
```

## Usage

```vue
<script setup>
import { DXButton, DXInput, DXCheckbox } from '@atria-digital-marketing/doxaui'
</script>

<template>
  <DXButton>Click me</DXButton>
  <DXInput v-model="value" label="Email" />
  <DXCheckbox v-model="checked" label="I agree" />
</template>
```

## Components

- **DXButton** - Button with solid/outlined variants, multiple colors and sizes
- **DXInput** - Text input with label, placeholder, error states, material style
- **DXCheckbox** - Checkbox with label and disabled state
- **DXRadio** - Radio button with label
- **DXSwitch** - Toggle switch

## Customizing Colors

Create a custom SCSS config to override default colors:

```scss
// my-doxa-config.scss
@use "@atria-digital-marketing/doxa/scss/abstracts/initial-variables" with (
  $dark-blue: #ff6b00,    // primary → your brand color
  $teal: #00a8cc,        // secondary
  $dark-red: #e74c3c,     // danger
);

@use "@atria-digital-marketing/doxa/scss/elements/button" as *;
```

## Development

```bash
# Run VitePress documentation
npm run docs

# Build library
npm run build
```

## License

MIT
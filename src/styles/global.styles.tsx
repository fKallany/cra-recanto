/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import { createGlobalStyle } from 'styled-components';
import * as c from './colors';
import './reset.css';

const GlobalStyle = createGlobalStyle`

:root {
  /* Core Colors */
  --primary-color: ${c.primaryColor};
  --secondary-color: ${c.secondaryColor};
  --success-color: ${c.successColor};
  --info-color: ${c.infoColor};
  --warning-color: ${c.warningColor};
  --danger-color: ${c.dangerColor};
  --light-color: ${c.lightColor};
  --dark-color: ${c.darkColor};

  /* Core Hover Colors */
  --primary-color-hover: ${c.getHoverColor(c.primaryColor)};
  --secondary-color-hover: ${c.getHoverColor(c.secondaryColor)};

  /* Text Colors */
  --text-primary-color: ${c.textColorPrimary};
  --text-secondary-color: ${c.textColorSecondary};
  --text-light-color: ${c.textLightColor};
  
  /* Background Colors */
  --background-color: ${c.backgroundColor};
  --background-secondary-color: ${c.backgroundSecondaryColor};
  --background-dark-color: ${c.backgroundDarkColor};
  
  /* Border Colors */
  --border-color: ${c.borderColor};

  /* Font Settings */
  --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --font-size-base: 1em; /* 10px */
  --font-size-lg: 1.25em; /* 12.5px */
  --font-size-sm: 0.875em; /* 8.75px */

  /* Spacing */
  --spacing-xs: 0.4em; /* 4px */
  --spacing-sm: 0.8em; /* 8px */
  --spacing-md: 1em; /* 10px */
  --spacing-lg: 1.5em; /* 15px */
  --spacing-xl: 2em; /* 20px */

  /* Border Radius */
  --border-radius-sm: 0.2em; /* 2px */
  --border-radius-md: 0.25em; /* 2.5px */
  --border-radius-lg: 0.3em; /* 3px */

  /* Shadows */
  --box-shadow-sm: 0 0.1em 0.2em rgba(0, 0, 0, 0.05);
  --box-shadow-md: 0 0.4em 0.6em rgba(0, 0, 0, 0.1);
  --box-shadow-lg: 0 1em 2em rgba(0, 0, 0, 0.15);

  /* Text Shadows */
  --text-shadow-default: 1px 1px 2px rgba(0, 0, 0, 0.3);
}
`;

export default GlobalStyle;
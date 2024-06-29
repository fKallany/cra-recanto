/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */

import { darken } from 'polished';

export const getHoverColor = (color: string, amount = 0.05) => darken(amount, color);

export const primaryColor = '#FA7578';
export const secondaryColor = '#EDA249';

export const successColor = '#28a745';
export const infoColor = '#17a2b8';
export const warningColor = '#ffc107';
export const dangerColor = '#dc3545';
export const lightColor = '#f8f9fa';
export const darkColor = '#343a40';

export const textColorPrimary = '#212529';
export const textColorSecondary = '#6c757d';
export const textLightColor = '#ffffff';

export const backgroundColor = '#ffffff';
export const backgroundSecondaryColor = '#f8f9fa';
export const backgroundDarkColor = '#343a40';

export const borderColor = '#dee2e6';

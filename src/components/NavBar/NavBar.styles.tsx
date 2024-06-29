/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import styled from 'styled-components';

import { ContainerProps } from './NavBar.types';

export const Container = styled.nav<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.3s ease;
  background-color: transparent;

  &.background-scrolled {
    backdrop-filter: saturate(180%) blur(20px);

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      opacity: .74;
      z-index: -1;
    }
  }

  .c-nav {
    height: 80px;
    display: flex;
    padding: 0px 50px;
    justify-content: center;
    gap: 50px;
    align-items: center;
    background-color: transparent;
    width: 100%;
    transition: background-color 0.3s ease;

    &__images {
      height: 100%;

      &__image {
        height: 100%;
        filter: drop-shadow(var(--default-shadow));
      }
    }

    &__items {
      gap: 30px;
      display: flex;
      position: relative;
      height: 100%;

      &__item {
        height: 100%;
        display: flex;
        cursor: pointer;
        font-size: 16px;
        font-weight: 600;
        align-items: center;
        text-decoration: none;
        color: var(--text-light-color);

        &:hover {
          color: var(--primary-color);
        }
      }
    }

    &__socials {
      display: flex;
      gap: 30px;
      margin-left: 40px;
      
      &__social {
        font-size: 24px;
        cursor: pointer;
        color: var(--text-light-color);
        text-shadow: var(--default-shadow);

        &:hover {
          color: var(--primary-color);
          transition: color 0.15s linear;
        }
      }
    }
  }
`;
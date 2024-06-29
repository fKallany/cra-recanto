/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import styled from 'styled-components';

import { ContainerProps } from './Banner.types';

export const Container = styled.header<ContainerProps>`
  width: 100%;
  max-width: 100vw;
  position: relative;

  .c-banner {
    width: 100%;
    height: 80vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;

    &__background-image {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: filter 0.3s ease;
      filter: none;
    }

    &:hover {
      .c-banner__background-image {
        filter: blur(3px);
      }
    }

    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 2;
      width: 100%;
      height: 100%;
      background: linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, .4) 0%);
      background-position: top;
      background-repeat: no-repeat;
      background-size: cover;
    }

    &:after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 3;
      width: 100%;
      height: 100%;
      transition: opacity 0.3s linear;
      background: linear-gradient(150deg, rgb(0, 0, 0) 30%, rgb(250, 117, 120) 100%);
      opacity: 0;
    }

    &:hover::after {
      opacity: 0.4;
    }

    &__texts {
      z-index: 5;

      &__text {
        color: var(--text-light-color);
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 30px;

        &__title {
          font-size: 64px;
          line-height: 64px;
          font-weight: bold;
        }

        &__description {
          font-size: 20px;
          line-height: 30px;
        }

        &__button {
          width: 150px;
          height: 50px;
          display: grid;
          font-size: 23px;
          font-weight: 400;
          align-items: center;
          background-color: #FA7578;
          border-radius: 8px;
          text-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
          box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.5);
          text-decoration: none;
          color: var(--white-color);
        }
      }
    }
  }

  @media (max-width: 1440px) {
    .c-banner {
      background-position: center;
    }
  }
`;
import styled, { keyframes } from 'styled-components';
import { ContainerProps } from './NavBar.types';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`;

export const Container = styled.nav<ContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: background-color 0.7s ease;
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
    transition: background-color 0.7s ease;

    &__images {
      height: 100%;
      animation: ${fadeIn} 0.7s ease forwards;

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
      animation: ${fadeIn} 0.7s ease forwards;

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
      animation: ${fadeIn} 0.7s ease forwards;
      
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

    @media (max-width: 1050px) {
      justify-content: space-between;

      &__items {
        top: 80px;
        right: 0;
        width: 250px;
        height: 350px;
        opacity: 0.95;
        display: none;
        position: absolute;
        flex-direction: column;
        transition: all 0.7s ease-in-out;
        gap: 0;

        &:before {
          content: '';
          position: absolute;
          top: -25%;
          left: 0;
          width: 100%;
          height: 110vh;
          background-color: rgba(0, 0, 0, 0.9);
          backdrop-filter: saturate(180%) blur(20px);
          z-index: -1;
        }

        &.scrolled {

          &:before {
            background-color: rgba(0, 0, 0, .99);
          }
        }

        &.open {
          display: flex;
          animation: ${slideIn} 0.7s ease forwards;
        }

        &.closing {
          animation: ${slideOut} 0.7s ease forwards;
        }

        &__item {
          width: 100%;
          height: 80px;
          padding: 15px 0;
          text-align: center;
          justify-content: center;
        }
      }

      &__socials {
        display: none;
      }
    }

    @media (min-width: 1050px) {
      &__items,
      &__socials {
        animation: ${fadeOut} 0.7s ease forwards;
      }

      &__items {
        &__item {
          animation: ${fadeOut} 0.7s ease forwards;
        }
      }
    }
  }
`;

export const HamburgerIcon = styled.div`
  display: none;
  cursor: pointer;
  animation: ${fadeIn} 0.7s ease forwards;

  div {
    width: 30px;
    height: 3px;
    background-color: var(--text-light-color);
    margin: 5px 0;
    transition: 0.4s;
  }

  @media (max-width: 1050px) {
    display: block;
    animation: ${fadeIn} 0.7s ease forwards;
    z-index: 20;
  }

  @media (min-width: 1050px) {
    animation: ${fadeOut} 0.7s ease forwards;
  }
`;

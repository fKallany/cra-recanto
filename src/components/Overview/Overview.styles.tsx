/**
 * @copyright 2024 Fabio Kallany Silva Santos. Todos os direitos reservados.
 * @license MIT
 */
import styled from 'styled-components';

import { ContainerProps } from './Overview.types';

export const Container = styled.section<ContainerProps>`
  width: 100%;
  max-width: 100vw;
  position: relative;
  display: flex;
  justify-content: center;

  .c-overview {
    width: 100%;
    max-width: 700px;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 50px 0;
    gap: 20px;

    &__titles {
      display: flex;
      flex-direction: column;
      text-align: center;

      & h5 {
        font-weight: 500;
      }
    }

    &__texts {
      display: flex;
      flex-direction: column;
      gap: 20px;
      font-size: 20px;
      line-height: 28px;
    }

    &__years {
      text-align: center;
      padding: 50px 0;

      &__number {
        font-size: 58px;
        font-weight: 500;
      }

      &__title {
        font-size: 20px;
        color: #54595F;
      }
    }
  }
  
`;
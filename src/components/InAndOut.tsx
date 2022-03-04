import styled from 'styled-components';
import {mainColor} from '../color';

const CategoryWrapper = styled.section`
  font-size: 24px;
  
  > ul {
    box-shadow: inset 0 -5px 5px -5px rgba(0, 0, 0, 0.25),
    inset 0 5px 5px -5px rgba(0, 0, 0, 0.25);
    display: flex;
    background: white;

    > li {
      width: 50%;
      text-align: center;
      padding: 16px 0;
      
      &.selected {
        background: ${mainColor};
        color: white;
      }
    }
  }
`
export {CategoryWrapper}
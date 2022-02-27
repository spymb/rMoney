import styled from 'styled-components';
import React from 'react';
import Icon from './Icon';
import {NavLink} from 'react-router-dom';

const NavWrapper = styled.nav`
  background: white;
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;

      > a {
        display: flex;
        flex-direction: column;
        padding: 4px 0;
        justify-content: center;
        align-items: center;

        .icon {
          width: 24px;
          height: 24px;
        }

        &.active {
          color: #005DFF;

          .icon {
            fill: #005DFF;
          }
        }
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/details">
            <Icon name="details"/>
            明细
          </NavLink>
        </li>
        <li>
          <NavLink to="/money">
            <Icon name="money"/>
            记账
          </NavLink>
        </li>
        <li>
          <NavLink to="/chart">
            <Icon name="chart"/>
            图表
          </NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};

export default Nav;
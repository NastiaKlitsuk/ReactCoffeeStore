import React, { Component } from 'react';
import styled from 'styled-components'
import { NavigationMenu } from '../../mocks/navigation-menu';
import { RouterLink } from '../UI/RouterLink/RouterLink';

const StyledList = styled.ul`
padding: 10px;
list-style: none;
text-align: left;
font-weight: bold;
display: flex;

>li {
    margin: 5px;
    cursor: pointer;
  }

@media only screen and (max-width: 1650px) {
  flex-direction: column;
}
`
interface HorizontalMenuProps {
  navigationMenus: NavigationMenu[];
  onHorizontalMenuSelected(menuName: string): void;
}
export default function HorizontalMenu({ navigationMenus, onHorizontalMenuSelected }: HorizontalMenuProps) {
  return (
    <StyledList>
      {navigationMenus.map(function (navigationMenu, index) {
        const { navigateTo: to, name: text } = navigationMenu
        return <li key={index} onClick={() => onHorizontalMenuSelected(navigationMenu.name)}><RouterLink {...{ to, text }} /></li>;
      })}
    </StyledList>
  )
}


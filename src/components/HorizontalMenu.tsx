import React from 'react';
import styled from 'styled-components'
import { NavigationMenu } from '../mocks/navigation-menu';

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
  const horizontalMenuNames = navigationMenus.map(navigationMenu => navigationMenu.name)
  return (
    <StyledList>
      {horizontalMenuNames.map(function (menuName, index) {
        return <li key={index} onClick={() => onHorizontalMenuSelected(menuName)}>{menuName}</li>;
      })}
    </StyledList>
  )
}

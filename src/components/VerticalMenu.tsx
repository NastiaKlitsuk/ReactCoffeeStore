import React from 'react';
import styled from 'styled-components'
import { NavigationMenu } from '../mocks/navigation-menu';

const StyledList = styled.ul`
padding: 10px;
list-style: none;
text-align: left;
font-weight: bold;
display: flex;
flex-direction: column;

>li {
    margin: 5px;
    cursor: pointer;
}
`
interface VerticalMenuProps {
  navigationMenus: NavigationMenu[];
}
export default function VerticalMenu({ navigationMenus }: VerticalMenuProps) {
  const verticalMenuNames = navigationMenus.map(navigationMenu => navigationMenu.name)
  return (
    <StyledList>
      {verticalMenuNames.map(function (menuName, index) {
        return <li key={index}>{menuName}</li>;
      })}
    </StyledList>
  )
}

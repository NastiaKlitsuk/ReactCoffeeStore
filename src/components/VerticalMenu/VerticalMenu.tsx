import React from 'react';
import styled from 'styled-components'
import { NavigationMenu } from '../../mocks/navigation-menu';
import { RouterLink } from '../UI/RouterLink/RouterLink';

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
  return (
    <StyledList>
      {navigationMenus.map(function (navigationMenu, index) {
        const { navigateTo: to, name: text } = navigationMenu
        return <li key={index}><RouterLink {...{ to, text }} /></li>;
      })}
    </StyledList>
  )
}

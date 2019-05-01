import React from 'react';
import { match } from 'react-router';
import styled from 'styled-components';
import { NavigatbleImageWithTitle } from '../UI/NavigatbleImageWithTitle/NavigatbleImageWithTitle';
import { CategoryMenuItemClick, MenuCategory, OnOrderMenuItemClick } from '../../interfaces/menu.interface';

export interface MenuCategoryProps extends CategoryMenuItemClick, OnOrderMenuItemClick {
  menuCategory: MenuCategory;
  match: match;
}

const MenuCategoryItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 41vw);
  grid-gap: 1rem;
  font-weight: bold;
`
const StyledHeader = styled.h1`
  font-size: 1.3em;
  text-align: left;
`
export function MenuCategoryItem({ menuCategory, onCategoryMenuItemClick, match, onOrderMenuItemClick }: MenuCategoryProps) {
  const { name, menuItems } = menuCategory
  return (
    <div>
      <StyledHeader>{name}</StyledHeader>
      <MenuCategoryItemContainer>
        {menuItems.map((menuItem) => {
          const { image, name } = menuItem;
          const navigateTo = `${match.url}/${name}`
          const onItemClick = menuItem.isOrderItem ? onOrderMenuItemClick : onCategoryMenuItemClick
          return <NavigatbleImageWithTitle {...{ imageSrc: image, title: menuItem.name, onItemClick, navigateTo }} key={name} />
        })}
      </MenuCategoryItemContainer>
    </div>
  );
}

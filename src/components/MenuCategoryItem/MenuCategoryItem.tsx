import React from 'react';
import { match } from 'react-router';
import styled from 'styled-components';
import { ImageWithText } from '../UI/ImageWithText/ImageWithText';
import { MenuItemClick, MenuCategory } from '../../interfaces/menu.interfaces';

export interface MenuCategoryProps extends MenuItemClick {
  menuCategory: MenuCategory;
  match: match | null;
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
export function MenuCategoryItem({ menuCategory, onMenuItemClick, match }: MenuCategoryProps) {
  const { name, menuItems } = menuCategory
  return (
    <div>
      <StyledHeader>{name}</StyledHeader>
      <MenuCategoryItemContainer>
        {menuItems.map((menuItem) => {
          const { image, name } = menuItem;
          const navigateTo = match && `${match.url}/${name}`
          return <ImageWithText {...{ imageSrc: image, text: menuItem.name, onItemClick: onMenuItemClick, navigateTo }} key={name} />
        })}
      </MenuCategoryItemContainer>
    </div>
  );
}

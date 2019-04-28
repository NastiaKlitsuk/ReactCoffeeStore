import React from 'react';
import styled from 'styled-components';
import { MenuCategory } from '../../mocks/menu';
import { ImageWithText } from '../UI/ImageWithText/ImageWithText';
import { MenuItemClick } from '../../interfaces/menu.interfaces';

export interface MenuCategoryProps extends MenuItemClick {
  menuCategory: MenuCategory;
  match: any
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
          const navigateTo = `${match.url}/${name}`
          return <ImageWithText {...{ imageSrc: image, text: menuItem.name, onItemClick: onMenuItemClick, navigateTo }} key={name} />
        })}
      </MenuCategoryItemContainer>
    </div>
  );
}

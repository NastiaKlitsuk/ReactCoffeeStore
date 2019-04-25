import React from 'react';
import styled from 'styled-components';
import { MenuCategory } from '../../mocks/menu';
import { ImageWithText } from '../UI/ImageWithText/ImageWithText';

export interface MenuCategoryProps {
  menuCategory: MenuCategory;
  onMenuItemSelected(name: string): void
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
export function MenuCategoryItem({ menuCategory, onMenuItemSelected }: MenuCategoryProps) {
  const { name, menuItems } = menuCategory
  return (
    <div>
      <StyledHeader>{name}</StyledHeader>
      <MenuCategoryItemContainer>
        {menuItems.map((menuItem) => {
          const { image, name } = menuItem;
          return <ImageWithText {...{ imageSrc: image, text: name, onMenuItemSelected }} key={name} />
        })}
      </MenuCategoryItemContainer>
    </div>
  );
}

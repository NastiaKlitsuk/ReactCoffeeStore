import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { StoreMenu, EmptyMenu } from '../mocks/menu';
import { MenuCategoryItem } from '../components/MenuCategoryItem/MenuCategoryItem';

const StyledMenuScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 96vh;
  overflow-y: auto;
`
export function MenuScreen() {
  const [menu, setMenu] = useState(EmptyMenu)

  useEffect(() => {
    setMenu(StoreMenu)
  })

  return (
    <StyledMenuScreen>
      {menu.map((menuCategory) =>
        <MenuCategoryItem {... { menuCategory }} key={menuCategory.name} />
      )}
    </StyledMenuScreen>
  )
}

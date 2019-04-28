import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MainMenu, EmptyMenu, SubMenus, MenuCategory } from '../mocks/menu';
import { MenuCategoryItem } from '../components/MenuCategoryItem/MenuCategoryItem';

const StyledMenuScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 96vh;
  overflow-y: auto;
`
export function MenuScreen() {
  const [menu, setMenu] = useState<MenuCategory[] | null>(null)

  function onMenuItemSelected(name: string) {
    const selectedSubMenuIndex = SubMenus.findIndex(subMenu => subMenu.name === name)
    if (selectedSubMenuIndex > -1) setMenu(SubMenus[selectedSubMenuIndex].menu)
  }

  useEffect(() => {
    setMenu(MainMenu)
  }, [])

  return (
    <StyledMenuScreen>
      {menu && menu.map((menuCategory) =>
        <MenuCategoryItem {... { menuCategory, onMenuItemSelected }} key={menuCategory.name} />
      )}
    </StyledMenuScreen>
  )
}

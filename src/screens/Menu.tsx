import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MainMenu, SubMenus, MenuCategory } from '../mocks/menu';
import { MenuCategoryItem } from '../components/MenuCategoryItem/MenuCategoryItem';

const StyledMenuScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 96vh;
  overflow-y: auto;
`
export function MenuScreen(props: any) {
  const [menu, setMenu] = useState<MenuCategory[] | null>(null)

  function onMenuItemClick(name: string) {
    const selectedSubMenuIndex = SubMenus.findIndex(subMenu => subMenu.name === name)
    if (selectedSubMenuIndex > -1) setMenu(SubMenus[selectedSubMenuIndex].menu)
  }

  useEffect(() => {
    setMenu(MainMenu)
  }, [])

  console.log(props)

  return (
    <StyledMenuScreen>
      {menu && menu.map((menuCategory) =>
        <MenuCategoryItem {... { menuCategory, onMenuItemClick, match: props.match }} key={menuCategory.name} />
      )}
    </StyledMenuScreen>
  )
}

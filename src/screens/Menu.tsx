import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MenuCategory } from '../interfaces/menu.interfaces';
import { MenuCategoryItem } from '../components/MenuCategoryItem/MenuCategoryItem';
import { MenuState, getMenu } from '../store/menu/menu.reducer';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import fetchMenuAction from '../store/menu/menu.fetcher';
import * as menuActions from '../store/menu/menu.actions'
import { MainMenuCategories } from '../enums/menu.enum';

const StyledMenuScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 96vh;
  overflow-y: auto;
`
const mapStateToProps = (state: MenuState) => ({ categorizedMenu: getMenu(state) });
const mapDispatchToProps = (dispatch: Dispatch<menuActions.MenuActions>) => bindActionCreators({
  fetchMenu: fetchMenuAction,
}, dispatch)

interface MenuScreenProps {
  match: any
  categorizedMenu: MenuCategory[]
  fetchMenu: Function
}

function ConnectedMenuScreen({ match, categorizedMenu, fetchMenu }: MenuScreenProps) {
  function onMenuItemClick(name: string) {
    fetchMenu(name)
  }

  useEffect(() => {
    fetchMenu(MainMenuCategories.MainMenu)
  }, [])

  return (
    <StyledMenuScreen>
      {categorizedMenu.map((menuCategory) =>
        <MenuCategoryItem {... { menuCategory, onMenuItemClick, match }} key={menuCategory.name} />
      )}
    </StyledMenuScreen>
  )
}

const MenuScreen = connect(mapStateToProps, mapDispatchToProps)(ConnectedMenuScreen)
export default MenuScreen

import React, { useEffect } from 'react'
import styled from 'styled-components'
import { MenuCategory } from '../interfaces/menu.interface';
import { MenuCategoryItem } from '../components/MenuCategoryItem/MenuCategoryItem';
import { MenuState, getMenu } from '../store/menu/menu.reducer';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import * as menuActions from '../store/menu/menu.actions'
import { MainMenuCategories } from '../enums/menu.enum';
import { fetchMenu, setOrderItemMenu } from '../store/menu/menu-actions-creators';
import { ImageWithTitle } from '../interfaces/image-with-title.interface';

const StyledMenuScreen = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 96vh;
  overflow-y: auto;
`
const mapStateToProps = (state: MenuState) => ({ categorizedMenu: getMenu(state) });
const mapDispatchToProps = (dispatch: Dispatch<menuActions.MenuActions>) => bindActionCreators({
  getMenu: fetchMenu,
  orderItemMenuSelected: setOrderItemMenu,
}, dispatch)

interface MenuScreenProps {
  match: any
  categorizedMenu: MenuCategory[]
  getMenu: Function
  orderItemMenuSelected: Function
}

function ConnectedMenuScreen({ match, categorizedMenu, getMenu, orderItemMenuSelected }: MenuScreenProps) {
  function onCategoryMenuItemClick({ title }: ImageWithTitle) {
    getMenu(title)
  }

  function onOrderMenuItemClick({ title, imageSrc }: ImageWithTitle) {
    orderItemMenuSelected({ name: title, image: imageSrc, isOrderItem: true })
  }

  useEffect(() => {
    getMenu(MainMenuCategories.MainMenu)
  }, [])

  return (
    <StyledMenuScreen>
      {categorizedMenu.map((menuCategory) =>
        <MenuCategoryItem {... { menuCategory, onCategoryMenuItemClick, match, onOrderMenuItemClick }} key={menuCategory.name} />
      )}
    </StyledMenuScreen>
  )
}

const MenuScreen = connect(mapStateToProps, mapDispatchToProps)(ConnectedMenuScreen)
export default MenuScreen

import React, { Component } from 'react';
import styled from 'styled-components'
import { NavigationMenu, MaybeNavigationMenu } from "../mocks/navigation-menu";
import HorizontalMenu from './HorizontalMenu';
import VerticalMenu from './VerticalMenu';

const StyledMenu = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15vw;
  min-height: 100vh;
  background-color: #f1f1f1;

  @media only screen and (max-width: 545px) {
    width: 100px;
}
`
interface SidebarProps {
  navigationMenus: NavigationMenu[]
}

interface SidebarState {
  isSubMenuExist: boolean
  selectedMainMenu: MaybeNavigationMenu
}

export default class Sidebar extends Component<SidebarProps, SidebarState> {
  constructor(props: SidebarProps) {
    super(props)
    this.state = {
      isSubMenuExist: false,
      selectedMainMenu: null
    }
    this.onHorizontalMenuSelected = this.onHorizontalMenuSelected.bind(this)
  }

  onHorizontalMenuSelected(menuName: string) {
    const selectedMainMenu: MaybeNavigationMenu = this.props.navigationMenus
      .filter(navigationMenu => navigationMenu.name === menuName)
      .shift() || null

    const isSubMenuExist = selectedMainMenu && selectedMainMenu.subMenu.length > 0 || false
    this.setState({ isSubMenuExist, selectedMainMenu })
  }

  render() {
    const { props: { navigationMenus }, onHorizontalMenuSelected, state: { isSubMenuExist, selectedMainMenu } } = this;
    const verticalMenu = selectedMainMenu ? selectedMainMenu.subMenu : null
    return (
      <StyledMenu>
        <HorizontalMenu {...{ navigationMenus, onHorizontalMenuSelected }} />
        {isSubMenuExist && verticalMenu && <VerticalMenu {...{ navigationMenus: verticalMenu }} />}
      </StyledMenu>
    )
  }
}

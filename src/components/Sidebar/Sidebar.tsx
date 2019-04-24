import React, { Component } from 'react';
import styled from 'styled-components'
import { NavigationMenu, MaybeNavigationMenu } from "../../mocks/navigation-menu";
import HorizontalMenu from '../HorizontalMenu/HorizontalMenu';
import VerticalMenu from '../VerticalMenu/VerticalMenu';
import { getGoodDayMessageByTime } from '../../utils/user-messages.utils';
import { UserMessage } from '../../constants/user-message';
import { UserWishMessage } from '../UserWishMessage/UserWishMessage';
import { autobind, } from 'core-decorators'

const StyledMenu = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 15vw;
  min-height: 100vh;
  background-color: #f1f1f1;

  @media only screen and (max-width: 1430px) {
    width: 250px;
}
`
interface SidebarProps {
  navigationMenus: NavigationMenu[]
}

interface SidebarState {
  isSubMenuExist: boolean
  selectedMainMenu: MaybeNavigationMenu
  userMessage: UserMessage
}

const emptyUserMessage = { message: '' }
export default class Sidebar extends Component<SidebarProps, SidebarState> {
  interval: any

  constructor(props: SidebarProps) {
    super(props)
    this.state = {
      isSubMenuExist: false,
      selectedMainMenu: null,
      userMessage: emptyUserMessage,
    }
    this.interval = 0
  }

  @autobind
  onHorizontalMenuSelected(menuName: string) {
    const selectedMainMenu: MaybeNavigationMenu = this.props.navigationMenus
      .filter(navigationMenu => navigationMenu.name === menuName)
      .shift() || null

    const isSubMenuExist = selectedMainMenu && selectedMainMenu.subMenu.length > 0 || false
    this.setState({ isSubMenuExist, selectedMainMenu, userMessage: emptyUserMessage })
  }

  componentDidMount() {
    this.setState({ ...this.state, userMessage: this.setUserGoodDayMessage() })
    this.interval = this.interval ||
      setInterval(() => {
        this.setState({ ...this.state, userMessage: this.setUserGoodDayMessage() })
      }, 60000)
  }

  setUserGoodDayMessage() {
    if (this.state.selectedMainMenu) {
      return emptyUserMessage;
    }

    return getGoodDayMessageByTime();
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
    const { props: { navigationMenus }, onHorizontalMenuSelected, state: { isSubMenuExist, selectedMainMenu } } = this;
    const verticalMenu = selectedMainMenu ? selectedMainMenu.subMenu : null
    return (
      <StyledMenu>
        <HorizontalMenu {...{ navigationMenus, onHorizontalMenuSelected }} />
        {isSubMenuExist && verticalMenu && <VerticalMenu {...{ navigationMenus: verticalMenu }} />}
        <UserWishMessage {...this.state.userMessage} />
      </StyledMenu>
    )
  }
}

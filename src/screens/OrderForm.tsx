import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { Dispatch, bindActionCreators } from 'redux';
import * as menuActions from '../store/menu/menu.actions'
import { BoldDiv } from '../styles/nutritionInfo.style';
import NutritionTable from '../components/NutritionTable/NutritionTable';
import { MenuItemOrderInformation, MenuItem } from "../interfaces/menu.interface";
import { fetchMenuItemOrderInfo } from '../store/menu/menu-actions-creators';
import { TextWithMaybeTitle } from '../components/UI/TextWithMaybeTitle/TextWithMaybeTitle';
import { MenuState, getOrderMenuItemSelected, getOrderMenuItemSelectedInfo } from '../store/menu/menu.reducer';

// TODO: needs to be fixed to be a form
const StyledOrderForm = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 30vw);
  grid-gap: 1rem;
  margin: 10px;
`
const StyledImage = styled.img`
  margin: 0 auto;
`

const StyledInformationColumn = styled.div`
  text-align: left;
`
const ServingSize = styled(BoldDiv)`
  font-weight: 100;
  border-bottom: groove 4px grey;
`
interface OrderFormProps {
  menuItem: MenuItem;
  getMenuItemOrderInfo: Function
  menuItemOrderInformation: MenuItemOrderInformation;
}

function ConnectedOrderForm({ menuItemOrderInformation, menuItem: { image, name }, getMenuItemOrderInfo }: OrderFormProps) {
  useEffect(() => {
    getMenuItemOrderInfo(name)
  }, [])

  const nutritionInformationComment = {
    title: "Nutrition Information",
    text: "Nutrition information is calculated based on our standard recipes. Only changing drink size will update this information. Other customizations will not."
  }
  const warning = {
    text: "We cannot guarantee that any unpackaged products served in our stores are allergen-free because we use shared equipment to store, prepare, and serve them. Customers with allergies can find ingredient information for products on the labels of our packaged products"
  }
  return (
    <StyledOrderForm>
      <StyledImage src={image} width="300px" height="300px" />
      <StyledInformationColumn>
        <TextWithMaybeTitle {...{ ...nutritionInformationComment }} />
        {menuItemOrderInformation &&
          (<><ServingSize>Serving size {menuItemOrderInformation.servingSize}</ServingSize>
            <NutritionTable {...{ nutritionItems: menuItemOrderInformation.nutritionItems }} /></>)}
        <TextWithMaybeTitle {...{ ...warning }} />
      </StyledInformationColumn>
    </StyledOrderForm>
  )
}

const mapStateToProps = (state: MenuState) => (
  {
    menuItem: getOrderMenuItemSelected(state),
    menuItemOrderInformation: getOrderMenuItemSelectedInfo(state)
  }
)

const mapDispatchToProps = (dispatch: Dispatch<menuActions.MenuActions>) => bindActionCreators({
  getMenuItemOrderInfo: fetchMenuItemOrderInfo,
}, dispatch)

const OrderForm = connect(mapStateToProps, mapDispatchToProps)(ConnectedOrderForm)
export default OrderForm

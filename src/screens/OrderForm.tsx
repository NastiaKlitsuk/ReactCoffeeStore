import React from 'react'
import { connect } from 'react-redux';
import styled from 'styled-components'
import { MenuItemInformation } from "../interfaces/menu.interface";
import { MenuState, getOrderMenuItemSelected } from '../store/menu/menu.reducer';
import { TextWithMaybeTitle } from '../components/UI/TextWithMaybeTitle/TextWithMaybeTitle';

const mapStateToProps = (state: MenuState) => (
  { imgSrc: getOrderMenuItemSelected(state).image }
)

interface OrderFormProps {
  menuItemInformation: MenuItemInformation;
  imgSrc: string;
}

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
function ConnectedOrderForm({ menuItemInformation, imgSrc }: OrderFormProps) {
  const nutritionInformationInfo = {
    title: "Nutrition Information",
    text: "Nutrition information is calculated based on our standard recipes. Only changing drink size will update this information. Other customizations will not."
  }
  const warning = {
    text: "We cannot guarantee that any unpackaged products served in our stores are allergen-free because we use shared equipment to store, prepare, and serve them. Customers with allergies can find ingredient information for products on the labels of our packaged products"
  }
  return (
    <StyledOrderForm>
      <StyledImage src={imgSrc} width="300px" height="300px" />
      <StyledInformationColumn>
        <TextWithMaybeTitle {...{ ...nutritionInformationInfo }} />
        <TextWithMaybeTitle {...{ ...warning }} />
      </StyledInformationColumn>
    </StyledOrderForm>
  )
}

const OrderForm = connect(mapStateToProps)(ConnectedOrderForm)
export default OrderForm

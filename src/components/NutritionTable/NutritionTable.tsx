import React from 'react'
import styled from 'styled-components'
import { NutritionItem } from "../../interfaces/menu.interface";
import { BoldDiv, StyledDiv } from '../../styles/nutritionInfo.style';

const SubNutritionItem = styled(StyledDiv)`
  justify-content: space-evenly;
`

interface NutritionTableProps {
  nutritionItems: NutritionItem[];
}

export default function NutritionTable({ nutritionItems }: NutritionTableProps) {
  return (
    <>
      {nutritionItems.map((nutritionItem) => {
        return (<div key={nutritionItem.name}>
          <BoldDiv><span>{nutritionItem.name}</span><span>{nutritionItem.amount}</span></BoldDiv>
          {nutritionItem.subNutritionItems && nutritionItem.subNutritionItems.map((subNutritionItem) =>
            <SubNutritionItem key={subNutritionItem.name}><span>{subNutritionItem.name}</span><span>{subNutritionItem.amount}</span></SubNutritionItem>)}
        </div>)
      })}</>)
}

import React from 'react'
import styled from 'styled-components'

export interface ImageWithTextProps {
  imageSrc: string;
  text: string;
}

const StyledImageWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  margin: 5px;

  img, span {
    margin: 5px;
  }
`
export function ImageWithText({ imageSrc, text }: ImageWithTextProps) {
  return (
    <StyledImageWithText>
      <img src={imageSrc} height='50px' width='60px' />
      <span>{text}</span>
    </StyledImageWithText>
  )
}

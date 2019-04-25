import React from 'react'
import styled from 'styled-components'

export interface ImageWithTextProps {
  imageSrc: string;
  text: string;
  onMenuItemSelected(name: string): void
}

const StyledImageWithText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1em;
  margin: 5px;
  cursor: pointer;

  img, span {
    margin: 5px;
  }
`
export function ImageWithText({ imageSrc, text, onMenuItemSelected }: ImageWithTextProps) {
  return (
    <StyledImageWithText onClick={() => onMenuItemSelected(text)}>
      <img src={imageSrc} height='50px' width='60px' />
      <span>{text}</span>
    </StyledImageWithText>
  )
}

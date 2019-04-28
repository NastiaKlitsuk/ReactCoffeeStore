import React from 'react'
import styled from 'styled-components'
import { RouterLink } from '../RouterLink/RouterLink';

export interface ImageWithTextProps {
  imageSrc: string;
  text: string;
  onItemClick?(name: string): void
  navigateTo?: string
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
export function ImageWithText({ imageSrc, text, onItemClick, navigateTo }: ImageWithTextProps) {
  return (
    <StyledImageWithText onClick={() => onItemClick && onItemClick(text)}>
      <img src={imageSrc} height='50px' width='60px' />
      {navigateTo && <RouterLink {...{ to: navigateTo, text }} />}
    </StyledImageWithText>
  )
}

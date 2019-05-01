import React from 'react'
import styled from 'styled-components'
import { RouterLink } from '../RouterLink/RouterLink';
import { ImageWithTitle } from '../../../interfaces/image-with-title.interface';

export interface ImageWithTitleProps extends ImageWithTitle {
  onItemClick: Function
  navigateTo: string
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
export function NavigatbleImageWithTitle({ imageSrc, title, onItemClick, navigateTo }: ImageWithTitleProps) {
  const onClick = () => onItemClick && onItemClick({ title, imageSrc })
  return (
    <StyledImageWithText onClick={onClick}>
      <img src={imageSrc} height='50px' width='60px' />
      <RouterLink {...{ to: navigateTo, text: title }} />
    </StyledImageWithText>
  )
}

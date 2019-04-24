import React from 'react'
import styled from 'styled-components'
import { UserMessage } from '../../constants/user-message'

const StyledUserWishMessage = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin: 0 0 30em 0;
`
interface UserWishMessageProps extends UserMessage { }

export function UserWishMessage({ message, imagePath }: UserWishMessageProps) {
  return (
    <StyledUserWishMessage>
      <span>{message}</span>
      {imagePath && <img src={imagePath} width="50px" height="50px" />}
    </StyledUserWishMessage>
  )
}

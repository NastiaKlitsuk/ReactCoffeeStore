import React from 'react'
import styled from 'styled-components'

const StyledTextWithTitle = styled.div`
  display: flex;
  flex-direction: column;
`
interface TextWithMaybeTitleProps {
  text: string;
  title?: string;
}
export function TextWithMaybeTitle({ text, title }: TextWithMaybeTitleProps) {
  return (<StyledTextWithTitle>
    {title && <h2>{title}</h2>}
    <p>{text}</p>
  </StyledTextWithTitle>)
}

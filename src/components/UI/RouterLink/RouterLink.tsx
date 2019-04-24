import React from 'react';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const StyledRouterLink = styled(Link)`
  :link,
  :visited,
  :hover,
  :active {
    color: black;
    text-decoration: none;
  }
`

interface RouterLinkProps {
  to: string
  text: string
}

export function RouterLink({ to, text }: RouterLinkProps) {
  return <StyledRouterLink to={to}>{text}</StyledRouterLink>
}

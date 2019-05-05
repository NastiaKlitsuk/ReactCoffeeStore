import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: groove 2px grey;
`;

export const BoldDiv = styled(StyledDiv)`
  font-weight: 500;
`;

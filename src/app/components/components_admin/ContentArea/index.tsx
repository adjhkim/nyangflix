import * as React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  width: 100%;
  font-family: 'Nanum Gothic', sans-serif;
  padding: 4vh 2vh;
  overflow-y: auto;
  user-select: none;
`;

const Func = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 4vh;
  margin-bottom: 4vh;
`;

const Content = styled.div`
  color: #000;
  font-size: 1.5vh;
  font-weight: 700;
`;

export function ContentArea(props: {
  func?: JSX.Element;
  content?: JSX.Element[];
}) {
  return (
    <>
      <Box>
        <Func>{props.func}</Func>
        <Content>{props.content}</Content>
      </Box>
    </>
  );
}

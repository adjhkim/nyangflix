import * as React from 'react';
import styled from 'styled-components';

const Icon = styled.div`
  margin-right: 1vh;
  svg {
    width: 2.5vh;
    height: 2.5vh;
    border-radius: 0.5vh;
    cursor: pointer;
    transition: all ease 0.25s;

    &:hover {
      &.safety {
        fill: #01dfa5;
      }
      &.danger {
        fill: #fe2e2e;
      }
    }
  }
`;

export function EditIcon(props: { onClick: () => void }) {
  return (
    <Icon>
      <svg
        className="safety"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgba(255, 255, 255, 0.9)"
        onClick={() => {
          props.onClick();
        }}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M3 17.46v3.04c0 .28.22.5.5.5h3.04c.13 0 .26-.05.35-.15L17.81 9.94l-3.75-3.75L3.15 17.1c-.1.1-.15.22-.15.36zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
      </svg>
    </Icon>
  );
}

export function SaveIcon(props: { onClick: () => void }) {
  return (
    <Icon>
      <svg
        className="safety"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgba(255, 255, 255, 0.9)"
        onClick={() => {
          props.onClick();
        }}
      >
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path d="M17.59 3.59c-.38-.38-.89-.59-1.42-.59H5c-1.11 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V7.83c0-.53-.21-1.04-.59-1.41l-2.82-2.83zM12 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm1-10H7c-1.1 0-2-.9-2-2s.9-2 2-2h6c1.1 0 2 .9 2 2s-.9 2-2 2z" />
      </svg>
    </Icon>
  );
}

export function DeleteIcon(props: { onClick: () => void }) {
  return (
    <Icon>
      <svg
        className="danger"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="rgba(255, 255, 255, 0.9)"
        onClick={() => {
          props.onClick();
        }}
      >
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path d="M6,19c0,1.1,0.9,2,2,2h8c1.1,0,2-0.9,2-2V7H6V19z M9.17,12.59c-0.39-0.39-0.39-1.02,0-1.41c0.39-0.39,1.02-0.39,1.41,0 L12,12.59l1.41-1.41c0.39-0.39,1.02-0.39,1.41,0s0.39,1.02,0,1.41L13.41,14l1.41,1.41c0.39,0.39,0.39,1.02,0,1.41 s-1.02,0.39-1.41,0L12,15.41l-1.41,1.41c-0.39,0.39-1.02,0.39-1.41,0c-0.39-0.39-0.39-1.02,0-1.41L10.59,14L9.17,12.59z M18,4h-2.5 l-0.71-0.71C14.61,3.11,14.35,3,14.09,3H9.91c-0.26,0-0.52,0.11-0.7,0.29L8.5,4H6C5.45,4,5,4.45,5,5s0.45,1,1,1h12 c0.55,0,1-0.45,1-1S18.55,4,18,4z" />
        </g>
      </svg>
    </Icon>
  );
}

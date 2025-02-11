import React from 'react';
import { styled } from 'styled-components';

interface Props {
  className?: string;
}

const ClipboardSvg = (props: Props) => (
  <svg
    className={props.className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 100 100"
    role="presentation"
  >
    <path
      fill="#99C2E8"
      fillRule="evenodd"
      d="M50 100c27.614 0 50-22.386 50-50S77.614 0 50 0 0 22.386 0 50s22.386 50 50 50z"
      clipRule="evenodd"
    />
    <rect width="44.25" height="54.083" x="28.375" y="25.916" fill="#8B5C1E" rx="1.008" />
    <path fill="#E7E9E9" d="M33.291 30.834H67.708V75.084H33.291z" />
    <path
      fill="#3E3832"
      fillRule="evenodd"
      d="M61.563 43.125h-14.75a1.23 1.23 0 010-2.459h14.75a1.23 1.23 0 010 2.459z"
      clipRule="evenodd"
    />
    <path
      fill="#117938"
      fillRule="evenodd"
      d="M61.674 30.833H39.326c-.617 0-1.117-.44-1.117-.983v-3.933c0-.543.5-.984 1.117-.984h5.699C45.543 22.691 47.803 21 50.5 21c2.698 0 4.957 1.691 5.475 3.933h5.7c.616 0 1.117.44 1.117.984v3.933c0 .543-.5.983-1.118.983z"
      clipRule="evenodd"
    />
    <path
      fill="#3E3832"
      fillRule="evenodd"
      d="M61.563 50.5h-14.75a1.23 1.23 0 010-2.459h14.75a1.23 1.23 0 010 2.459zM61.563 57.876h-14.75a1.23 1.23 0 110-2.458h14.75a1.23 1.23 0 010 2.458zM61.563 65.251h-14.75a1.23 1.23 0 110-2.458h14.75a1.23 1.23 0 010 2.458zM41.486 43.125h-1.639c-.904 0-1.639-.55-1.639-1.23 0-.678.735-1.229 1.64-1.229h1.638c.905 0 1.64.551 1.64 1.23 0 .678-.735 1.229-1.64 1.229zM41.486 50.5h-1.639c-.904 0-1.639-.55-1.639-1.23 0-.678.735-1.229 1.64-1.229h1.638c.905 0 1.64.551 1.64 1.23 0 .678-.735 1.229-1.64 1.229zM41.486 57.876h-1.639c-.904 0-1.639-.553-1.639-1.229 0-.678.735-1.229 1.64-1.229h1.638c.905 0 1.64.55 1.64 1.23 0 .675-.735 1.228-1.64 1.228zM41.486 65.251h-1.639c-.904 0-1.639-.553-1.639-1.229 0-.678.735-1.229 1.64-1.229h1.638c.905 0 1.64.55 1.64 1.23 0 .675-.735 1.228-1.64 1.228z"
      clipRule="evenodd"
    />
  </svg>
);

export const Clipboard = styled(ClipboardSvg)`
  width: 100px;
`;

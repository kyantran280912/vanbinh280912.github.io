import React from "react";
import styled, { css } from "styled-components";

const Button = (props) => {
  return <ButtonPri btnsignin={props.btnsignin}>{props.textbutton}</ButtonPri>;
};
const ButtonPri = styled.button`
  border-radius: 4px;
  padding: 0 20px;
  line-height: 32px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textblack};
  background: ${({ theme }) => theme.pri};
  transition: all 0.2s;
  ${(props) =>
    props.btnsignin &&
    css`
      background: transparent;
      color: ${({ theme }) => theme.text};
      :hover {
        background: ${({ theme }) => theme.bginput};
        color: ${({ theme }) => theme.pri};
      }
    `};
`;

export default Button;

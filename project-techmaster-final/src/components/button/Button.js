import { Icon } from "@iconify/react";
import React from "react";
import styled, { css } from "styled-components";
import PropTypes from "prop-types"
/**
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 * @returns 
 */
const Button = ({ btnsignin, textbutton, children, type = 'button',onClick = () => {}, ...props }) => {
  const {isLoading} = props
   const child = !!isLoading ? <Icon icon='eos-icons:three-dots-loading' className='icon-loading'></Icon> : children
  return <ButtonPri btnsignin={btnsignin} type={type} {...props}>{textbutton || child}</ButtonPri>;
};
Button.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
}
const ButtonPri = styled.button`
  width: 100%;
  height: 100%;
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
  display: flex;
  justify-content: center;
  align-items: center;
  .icon-loading{
    font-size: 40px;
  }
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
    &:disabled{
      opacity: .5;
      pointer-events: none;
    }
`;

export default Button;

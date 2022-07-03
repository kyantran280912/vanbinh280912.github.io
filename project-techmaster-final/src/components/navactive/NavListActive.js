import React, { useState } from "react";
import styled, { css } from "styled-components";

const NavListActive = ({ navlistactive }) => {
  const [active, setactive] = useState(navlistactive[0]);
  return (
    <Ul>
      {navlistactive.map((item, index) => {
        return (
          <Li
            key={index}
            active={item === active}
            onClick={() => setactive(item)}
          >
            {item}
          </Li>
        );
      })}
    </Ul>
  );
};
const Ul = styled.ul`
  display: flex;
  align-items: center;
  gap: 0 64px;
`;
const Li = styled.li`
  font-size: 20px;
  font-weight: 600;
  line-height: 28px;
  padding: 4px 0;
  color: ${({ theme }) => theme.textnote};
  position: relative;
  cursor: pointer;
  :hover {
    color: ${({ theme }) => theme.pri};
  }
 
  ${(props) => props.active && css`
    color: ${({ theme }) => theme.pri};
    position: relative;
    ::before {
    content: "";
    position: absolute;
    top: 100%;
    width: 100%;
    height: 1px;
    background: ${({ theme }) => theme.pri};
    `}
    
`;

export default NavListActive;
